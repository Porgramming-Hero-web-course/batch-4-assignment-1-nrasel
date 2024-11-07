{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (profile: Profile, update: Partial<Profile>) => {
    return { ...profile, ...update };
  };
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  const updateProfileResult = updateProfile(myProfile, {
    age: 26,
  });
  // console.log(updateProfileResult);
}
