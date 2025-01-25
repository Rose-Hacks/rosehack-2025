import os
import glob

photos = glob.glob("./judges/*")

for photo in photos:
    print(photo, type(photo), photo.split("/")[-1].replace('webp', 'png'))

    output = photo.split("/")[-1].replace('webp', 'png')


    os.system(f"dwebp {photo} -o ./images/{output}")