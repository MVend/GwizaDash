import React, { useEffect } from "react";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { Pie, Button, LineChart, SparkLine } from "../../../components";
import {
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
} from "../../../data/dummy";
import { useStateContext } from "../../../contexts/ContextProvider";
import product9 from "../../../data/product9.jpg";
import { connect } from "react-redux";
import { getDashboardData } from "../../../redux/actions/dashboardStaggingActions";
import ClustersStack from "./components/ClustersStack";
import NumbersCard from "./components/NumbersCard";
import { FiDatabase, FiUsers } from "react-icons/fi";
import {
  BiFemaleSign,
  BiMaleSign,
  BiPhoneCall,
  BiPhoneOff,
} from "react-icons/bi";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);
const Dashboard = ({ getData, data: { values: data, isLoading } }) => {
  useEffect(() => {
    getData();
  }, []);

  const { currentColor, currentMode } = useStateContext();

  console.log(" ============== values ===============");
  console.log(data);

  const genderTotal = data?.female + data?.male;
  const genderData = [
    { x: "Male", y: data?.male, text: ((data?.male/genderTotal) * 100).toFixed(1) + '%' },
    { x: "Female", y: data?.female, text: ((data?.female/genderTotal) * 100).toFixed(1) + '%' },
  ];
  const simTotal = data?.sim + data?.noSim;
  const simData = [
    { x: "SIM", y: data?.sim, text: ((data?.sim/simTotal) * 100).toFixed(1) + '%' },
    { x: "No SIM", y: data?.noSim, text: ((data?.noSim/simTotal) * 100).toFixed(1) + '%' },
  ];

  const sparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },
    {x: 3, name: "Goreth MBABAZI", yval: "KIVU"},
    {x: 12, name: "HATEGEKIMANA Sylvestre", yval: "Rusizi"},
     {x: 259, name: "Pascal NKURUNZIZA", yval: "NYUNGWE"},
     {x: 45, name: "Muhawenimana Agnes", yval: "Nyamasheke"},
     {x: 8, name: "KAYIRANGA Jean Pierre", yval: "KIGALI"},
     {x: 93, name: "Eliackim NZARAMYIMANA", yval: "AKAGERA"},
     {x: 12, name: "Olivier ", yval: "Rubavu"}
  
  ];
  
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          <NumbersCard
            title={"Total Groups"}
            value={data?.groups || 0}
            icon={<FiDatabase />}
          />
          <NumbersCard
            title={"Total Members"}
            value={data?.members || 0}
            icon={<FiUsers />}
          />
          <NumbersCard
            title={"Male"}
            value={data?.male || 0}
            icon={<BiMaleSign />}
          />
          <NumbersCard
            title={"Female"}
            value={data?.female || 0}
            icon={<BiFemaleSign />}
          />
          <NumbersCard
            title={"Sim"}
            value={data?.sim || 0}
            icon={<BiPhoneCall />}
          />
          <NumbersCard
            title={"No Sim"}
            value={data?.noSim || 0}
            icon={<BiPhoneOff />}
          />
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div>
              <ClustersStack
                currentMode={currentMode}
                width="320px"
                height="360px"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">
                  $63,448.78
                </p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={sparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Gender</p>
              <p className="text-gray-400">Percentage</p>
            </div>

            <div className="w-40">
              <Pie
                id="gender-chart"
                title="Gender"
                data={genderData}
                legendVisiblity={true}
                height="320px"
              />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Simcards</p>
              <p className="text-gray-400">Percentage</p>
            </div>

            <div className="w-40">
              <Pie
                id="sim-chart"
                title="Simcards"
                data={simData}
                legendVisiblity={true}
                height="320px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = ({ dashboardStagging }) => ({ data: dashboardStagging });
export default connect(mapState, { getData: getDashboardData })(Dashboard);
