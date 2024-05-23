import Title from "../common/Title";
import DATA from "../../constant/mockData";
import { PieChart } from '@mui/x-charts/PieChart';

const BigFive = () => {

  const data = [
    { id: 0, value: 30, label: 'Offenheit' },
    { id: 1, value: 15, label: 'Gewissenhaftigkeit' },
    { id: 2, value: 20, label: 'Verträglichkeit' },
    { id: 3, value: 15, label: 'Extraversion' },
    { id: 4, value: 20, label: 'Neurotizismus' },
  ];
  

  return (

    <div className="big-five resume-block" style={{height: "250px"}}>

      <div className="container">
        <div className="big-content">

          <Title titleText={"Mein Big Five Modell"} />

          <div className="pieChartDiv text-center">

            <div style={{textAlign: "center", paddingTop: "100px"}}>

              <PieChart
                series={[
                           {
                             data,
                             highlightScope: { faded: 'global', highlighted: 'item' },
                             faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                           },
                            ]}
                height={400}
                />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BigFive;
