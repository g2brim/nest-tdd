# main.py

from user import User

def create_user():
    print("Let's create a new user.")
    username = input("Enter a username: ")
    email = input("Enter an email address: ")
    return User(username, email)

def main():
    print("Welcome to the User Management System!")

    user = create_user()
    print(f"User created successfully: {user}")

    profile_picture = input("Enter the filename of the profile picture: ")
    user.upload_profile_picture(profile_picture)
    print(f"Profile picture uploaded: {user.profile_picture}")

    follow_choice = input("Do you want to follow another user? (yes/no): ")
    if follow_choice.lower() == "yes":
        follow_username = input("Enter the username of the user you want to follow: ")
        user_to_follow = User(follow_username, "dummy@example.com")
        user.follow_user(user_to_follow)
        print(f"You are now following the user: {follow_username}")

if __name__ == "__main__":
    main()
