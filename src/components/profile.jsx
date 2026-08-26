const ProfileCard = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>

      <div>{props.greeting}</div>

      <div>{props.children}</div>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile Card Challenge</h1>

      <ProfileCard
        name="Alice"
        age={21}
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Kaushik"
        age={20}
        greeting={
          <div>
            <strong>Hello Kaushik, keep up the great work!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
};

export default Profile;

