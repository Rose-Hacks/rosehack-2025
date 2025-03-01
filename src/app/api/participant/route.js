import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/user/participant";

export const POST = async (req) => {
  const res = NextResponse;
  const { auth, message, user } = await authenticate(AUTH.POST);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }
  const { phone, major, age, country, school, grade, gender, shirt, diet } =
    await req.json();

  try {
    await updateDoc(doc(db, "users", user.id), {
      phone: phone,
      major: major,
      age: age,
      country: country,
      school: school,
      grade: grade,
      gender: gender,
      shirt: shirt,
      diet: diet,
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
