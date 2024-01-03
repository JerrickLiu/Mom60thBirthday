import os

def rename_files(folder_path):
    # Get a list of all files in the folder
    files = os.listdir(folder_path)

    # Filter out only the files (not directories)
    files = [f for f in files if os.path.isfile(os.path.join(folder_path, f))]

    # Sort the files for consistent renaming
    files.sort()

    # Rename each file to the desired pattern
    for index, file_name in enumerate(files):
        # Construct the new file name
        new_name = f"{index}.jpg"

        # Construct the full paths for the old and new names
        old_path = os.path.join(folder_path, file_name)
        new_path = os.path.join(folder_path, new_name)

        # Rename the file
        os.rename(old_path, new_path)

        # print(f"Renamed: {file_name} -> {new_name}")

# Specify the folder path where your files are located
folder_path = '/Users/SirJerrick/Documents/Projects/MomBirthDayV2/photos'

# Call the function to rename files in the specified folder
rename_files(folder_path)
