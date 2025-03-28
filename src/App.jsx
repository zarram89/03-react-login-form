import LoginForm from "./LoginForm";

function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar({person, size}) {
  return(
    <img
      className="avatar" 
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function App() {
  return (
    <>
      <LoginForm />
    </>
  );
}
