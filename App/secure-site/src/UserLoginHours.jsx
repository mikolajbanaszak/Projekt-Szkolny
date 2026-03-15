import { useParams } from "react-router-dom";
import logs from "../../../Data/logowane.json";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const GetData = (userId) => {
  const result = logs
    .filter((l) => l.id == userId)
    .map((l) => {
      const hour = new Date(l.data).getHours();
      console.log(hour);
      return hour;
    })
    .sort((a, b) => a - b);
  // sort generalnie dziala na stringach
  // wiec trzeba zrobic takie porownanie
  const activity = result.reduce((acc, hour) => {
    acc[hour] = (acc[hour] || 0) + 1;
    return acc;
  }, {});

  const user_login_hours = Object.entries(activity).map((a) => {
    return { hour: a[0], num_of_logs: a[1] };
  });

  const json_result = JSON.stringify(user_login_hours);

  return user_login_hours;
};
function UserLoginHours() {
  const { userId } = useParams();
  return (
    <>
      <ResponsiveContainer
        aspect={1.618}
        style={{ maxWidth: 1000, margin: "auto" }}
      >
        <LineChart data={GetData(userId)}>
          <CartesianGrid
            fill="#EAEFEF"
            stroke="#BFC9D1"
            strokeDasharray="5 5"
          />
          <XAxis dataKey="hour" stroke="#F5F2F2" />
          <YAxis stroke={"#F5F2F2"} />

          <Tooltip
            cursor={{
              stroke: "#00ffff",
            }}
            contentStyle={{
              backgroundColor: "#37529c",
              borderColor: "#37529c",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="num_of_logs"
            stroke={"#FF9B51"}
            dot={{ fill: "#FF9B51" }}
            activeDot={{ stroke: "#ff6f00" }}
          />
        </LineChart>
        <Legend />
        <Legend />
      </ResponsiveContainer>
    </>
  );
}

export default UserLoginHours;
