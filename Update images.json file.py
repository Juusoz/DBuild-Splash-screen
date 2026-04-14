import os
import json

def generate_image_json(folder_name='Images', output_file='images.json'):
    # Check if the folder exists to avoid errors
    if not os.path.exists(folder_name):
        print(f"Error: The folder '{folder_name}' was not found.")
        return

    # List all files in the directory
    # We use a list comprehension to format the path as "Folder/filename"
    image_files = [f"{folder_name}/{file}" for file in os.listdir(folder_name) 
                   if os.path.isfile(os.path.join(folder_name, file))]

    # Sort the list alphabetically (optional, but keeps it tidy)
    image_files.sort()

    # Write the list to a JSON file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(image_files, f, indent=2)

    print(f"Successfully created {output_file} with {len(image_files)} entries.")

if __name__ == "__main__":
    generate_image_json()
    input()