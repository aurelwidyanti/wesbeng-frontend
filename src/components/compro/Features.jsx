import DatePickerComponent from "../ui/DatePickerComponent";
import Balance from "../ui/Balance";
import CardFeatures from "../ui/CardFeatures";

const Features = () => {
    return (
        <div className='features flex-col flex p-5 pt-10 bg-gray-100 '>
            <div className='faqHero text-center px-3 mb-4'>
                <h2 className='font-bold text-4xl text-gray-700'>Fitur - Fitur yang Tersedia</h2>
                <p className='mt-4 text-gray-400'>
                    Fitur yang tersedia di aplikasi Wesbeng memudahkan warga dalam mengelola
                    sampah anorganik dan mendapatkan insentif dari hasil daur ulang
                </p>
            </div>
            <div className='flex flex-col sm:flex-row'>
                <div className='flex flex-col p-3 gap-4 sm:ml-16'>
                    <Balance />
                    <DatePickerComponent />
                </div>
                <div className='p-3 my-auto'>
                    <CardFeatures
                        tittle='Dompet Digital'
                        text='Dompet Digital memberi insentif bagi warga yang aktif dalam daur
            ulang.'
                        desc='Dompet Digital adalah fitur yang memberikan insentif bagi warga yang aktif dalam pengumpulan sampah anorganik. Insentif tersebut berupa saldo yang dapat ditarik ke rekening bank. Saldo didapat dari hasil penjualan sampah anorganik yang telah dijual ke pihak ketiga (pengepul).'
                        id='hs-show-hide-collapse'
                        idHeading='hs-show-hide-collapse-heading'
                    />
                    <CardFeatures
                        tittle='Kalender'
                        text='Kalender adalah fitur yang menginformasikan jadwal pengangkutan sampah anorganik'
                        desc='Kalender adalah fitur yang memberikan informasi jadwal pengangkutan sampah anorganik. Jadwal pengangkutan sampah anorganik ini disesuaikan dengan jadwal pengangkutan sampah anorganik oleh pihak ketiga (pengepul). Dengan adanya kalender, warga dapat mengetahui kapan sampah anorganik akan diangkut. Terdapat notifikasi yang akan mengingatkan warga sebelum jadwal pengangkutan sampah anorganik.'
                        id='hs-show-hide-collapse2'
                        idHeading='hs-show-hide-collapse-heading2'
                    />
                </div>
            </div>
        </div>
    );
};

export default Features;
