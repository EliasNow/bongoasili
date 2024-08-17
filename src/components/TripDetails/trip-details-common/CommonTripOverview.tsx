import Image from "next/image";

interface TripOverviewDataType {
  id: number;
  icon: string; // Changed to string to accommodate URLs
  title: string;
}

interface CommonTripOverviewProps {
  primaryInfoTitle: string;
  tripOverviewData: TripOverviewDataType[];
}

const CommonTripOverview: React.FC<CommonTripOverviewProps> = ({
  primaryInfoTitle,
  tripOverviewData = [
    { id: 1, icon: "/default-icon.svg", title: "Default Title 1" },
    { id: 2, icon: "/default-icon.svg", title: "Default Title 2" },
    { id: 3, icon: "/default-icon.svg", title: "Default Title 3" },
  ],
}) => {
  return (
    <div>
      <h4 className="mb-20">{primaryInfoTitle}</h4>
      <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
        {tripOverviewData.map((item) => (
          <li key={item.id}>
            <Image src={item.icon} alt="" className="lazy-img icon" width={50} height={50} />
            <span className="fs-20 color-dark">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommonTripOverview;
