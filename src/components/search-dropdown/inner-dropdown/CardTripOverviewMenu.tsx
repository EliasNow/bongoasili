// 17.30 use useTripOverviewFilter 
import NiceSelect from "@/ui/NiceSelect";
import PriceRange from "@/components/common/PriceRange";
import Link from "next/link";

const amenities_data: string[] = [
  "Airconditioning",
  "Disabled Access",
  "Eco Friendly",
  // "Pet Friendly",
  "Swimming Pool",
  "Wifi",
];

const CardTripOverviewMenu = ({
  handlePeopleChange,
  handleDaysChange,
  handleSearchChange,
  handlePriceChange,
  maxPrice,
  priceValue,
  handleResetFilter,
  selectedAmenities,
  handleAmenityChange,
  // handleLocationChange,
  handleStatusChange,
  handleCountryChange, // Added handleCountryChange
}: any) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="row gx-lg-5">
        <div className="col-12">
          <div className="input-box-one mb-35">
            <div className="label">I’m looking for...</div>
            <NiceSelect
              className="nice-select fw-normal"
              options={[
                { value: "adventure", text: "Adventure" },
                { value: "beach_holiday", text: "Beach Holiday" },
                { value: "camping", text: "Camping" },
                { value: "flying_safari", text: "Flying Safari" },
                { value: "hiking", text: "Hiking" },
                { value: "honeymoon", text: "Honeymoon" },
                { value: "luxury", text: "Luxury" },
                { value: "mountain_climbing", text: "Mountain Climbing" },
                { value: "safari", text: "Safari" },
                { value: "safari_beach", text: "Safari & Beach" },
              ]}
              defaultCurrent={0}
              onChange={handleStatusChange}
              name=""
              placeholder=""
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-box-one mb-50">
            <div className="label">Country</div>
            <NiceSelect
              className="nice-select location fw-normal"
              options={[
                { value: "Any", text: "Any" },
                { value: "Kenya", text: "Kenya" },
                { value: "Kenya & Tanzania", text: "Kenya & Tanzania" },
                { value: "Namibia", text: "Namibia" },
                { value: "South Africa", text: "South Africa" },
                { value: "Tanzania", text: "Tanzania" },
                { value: "Uganda", text: "Uganda" },
                { value: "Zanzibar", text: "Zanzibar" },
              ]}
              defaultCurrent={0}
              onChange={handleCountryChange} // Updated to handle country change
              name=""
              placeholder=""
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="input-box-one mb-40">
            <div className="label">People</div>
            <NiceSelect
              className="nice-select fw-normal"
              options={[
                { value: "1", text: "1" },
                { value: "2", text: "2" },
                { value: "3", text: "3" },
                { value: "4", text: "4" },
                { value: "5", text: "5" },
                { value: "6", text: "6" },
                { value: "7", text: "7" },
              ]}
              defaultCurrent={0}
              onChange={handlePeopleChange}
              name=""
              placeholder=""
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="input-box-one mb-40">
            <div className="label">Days</div>
            <NiceSelect
              className="nice-select fw-normal"
              options={[
                { value: "1", text: "1+" },
                { value: "2", text: "2+" },
                { value: "3", text: "3+" },
                { value: "4", text: "4+" },
              ]}
              defaultCurrent={0}
              onChange={handleDaysChange}
              name=""
              placeholder=""
            />
          </div>
        </div>

        <div className="col-12">
          <h6 className="block-title fw-bold mb-30">Advanced Filter</h6>
          <ul className="style-none d-flex flex-wrap justify-content-between filter-input">
            {amenities_data.map((list, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  name="Amenities"
                  value={list}
                  checked={selectedAmenities.includes(list)}
                  onChange={handleAmenityChange}
                />
                <label>{list}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12">
          <h6 className="block-title fw-bold mt-25 mb-15">Price range</h6>
          <div className="price-ranger">
            <div className="price-input d-flex align-items-center justify-content-between pt-5">
              <div className="field d-flex align-items-center">
                <input type="number" className="input-min" value={priceValue[0]} onChange={(e) => handlePriceChange([Number(e.target.value), priceValue[1]])} />
              </div>
              <div className="divider-line"></div>
              <div className="field d-flex align-items-center">
                <input type="number" className="input-max" value={priceValue[1]} onChange={(e) => handlePriceChange([priceValue[0], Number(e.target.value)])} />
              </div>
              <div className="currency ps-1">USD</div>
            </div>
          </div>
          <PriceRange
            MAX={maxPrice}
            MIN={0}
            STEP={1}
            values={priceValue}
            handleChanges={handlePriceChange}
          />
        </div>

        <div className="col-12">
          <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
            <i className="fa-light fa-magnifying-glass"></i>
            <span>Search</span>
          </button>
        </div>

        <div className="col-12">
          <div className="d-flex justify-content-between form-widget">
            <a onClick={handleResetFilter} style={{ cursor: "pointer" }} className="tran3s">
              <i className="fa-regular fa-arrows-rotate"></i>
              <span>Reset Filter</span>
            </a>
            {/* <Link href="#" className="tran3s">
              <i className="fa-regular fa-star"></i>
              <span>Save Search</span>
            </Link> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CardTripOverviewMenu;
