{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (
    profile: Profile,
    updateWithPartial: Partial<Profile>
  ): Profile => {
    return { ...profile, ...updateWithPartial };
  };
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

  const updateProfileResult = updateProfile(myProfile, {
    age: 26,
  });

  // console.log(updateProfileResult);
}
