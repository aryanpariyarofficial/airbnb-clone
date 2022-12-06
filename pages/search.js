import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
// import Mapp from "../components/Mapp";

function Search({ searchResults }) {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuest} = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} Guests`}/>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
            <p className="text-xs">300+ Places - {range} - for  {noOfGuest} Guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
            <div className="hidden md:inline-flex space-x-3 mb-5 text-gray-500 whitespace-nowarp">
                <p className="button">Cancelation Flexibilty</p>
                <p className="button">Type of Place</p>
                <p className="button">Price</p>
                <p className="button">Rooms and Beds</p>
                <p className="button">More filters</p>
            </div>
            <div className="flex flex-col">

            {searchResults.map(
                ({ img, location, title, description, star, price, total }
                    ) => (
                <InfoCard 
                key={img}
                img={img}
                location={location} 
                title={title}
                description={description}
                star={star}
                price={price} 
                total={total}
                />
            )
            )}
            </div>
            
        </section>
        {/* <section className="min-w-[600px]"> */}
        {/* <section className="hidden xl:inline-flex xl:min-w-[600px]"> */}
          {/* <Mapp /> */}

        {/* </section> */}
      </main>
      <div className="h-10"></div>
      <Footer />
    </div>
  );
}

export default Search;
export async function getServerSideProps(){
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
     (res) => res.json()
    )
   return {
     props:{
        searchResults,
                },
        };
    }