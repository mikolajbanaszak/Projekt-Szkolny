import logs from "../../../Data/logowane.json";
import users from "../../../Data/uzytkownicy.json";

function UserLoginLocations(userId) {
  const city = users
    .filter((u) => u.id == userId)
    .map((u) => u.miejsce_zamieszkania);
  const suspicous_logins = logs.filter(
    (l) => l.id == userId && l.lokalizacja != city,
  );
}
export default UserLoginLocations;
