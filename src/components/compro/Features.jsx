import DatePickerComponent from "../ui/DatePickerComponent";
import Balance from "../ui/Balance";
import CardFeatures from "../ui/CardFeatures";

const Features = () => {
  return (
    <div className="features flex-col p-5 pt-10 bg-gray-100">
      <div className="flex flex-col p-3 gap-4">
        <Balance />
        <DatePickerComponent />
      </div>
      <div className="p-3">
        <CardFeatures
          tittle="Dompet Digital"
          text="Dompet Digital memberi insentif bagi warga yang aktif dalam daur
            ulang."
          desc="This is a collapse body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
          id="hs-show-hide-collapse"
          idHeading="hs-show-hide-collapse-heading"
        />
        <CardFeatures
          tittle="Kalender"
          text="Kalender adalah fitur yang menginformasikan jadwal pengangkutan sampah anorganik"
          desc="This is a collapse body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
          id="hs-show-hide-collapse2"
          idHeading="hs-show-hide-collapse-heading2"
          />
      </div>
    </div>
  );
};

export default Features;
