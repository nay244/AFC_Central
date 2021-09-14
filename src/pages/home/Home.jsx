import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { salesData } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={salesData} title="Sales" grid dataKey="Sales Trend"/>
      <div className="homeWidgets">
        
      </div>
    </div>
  );
}
