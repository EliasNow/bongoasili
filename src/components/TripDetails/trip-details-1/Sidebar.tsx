// 2 aug 13.58 add link to hotelpage props
import PropertyFeatureListing from "../trip-details-sidebar/PropertyFeatureListing";
import TripDetailsScheduleForm from "../trip-details-sidebar/TripDetailsScheduleForm";
import SidebarContactInfo from "../trip-details-sidebar/SidebarContactInfo";

interface SidebarProps {
  title: string;
  contactName: string;
  contactRole: string;
  contactLocation: string;
  contactEmail: string;
  contactPhone: string;
  features: {
    id: number;
    thumb: string;
    large_thumb: { src: string }[];
    tag: string;
    property_name: string;
    address: string;
    link: string; // New property for the link
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({
  title,
  contactName,
  contactRole,
  contactLocation,
  contactEmail,
  contactPhone,
  features,
}) => {
  return (
    <div className="col-xl-4 col-lg-8 me-auto ms-auto">
      <div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 lg-mt-80">
        <div className="mb-40">
          <PropertyFeatureListing features={features} />
        </div>
        <div className="agent-info bg-white border-20 p-30 mb-40">
          <SidebarContactInfo 
            name={contactName}
            role={contactRole}
            contactLocation={contactLocation}
            email={contactEmail}
            phone={contactPhone}
          />
        </div>
        <div className="tour-schedule bg-white border-20 p-30 mb-40">
          <h5 className="mb-40">Get in Touch</h5>
          <TripDetailsScheduleForm title={title} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
