

const Card = () => {
     return (
        // row card
        <div className="flex flex-wrap m-4 px-4">
            <div className="m-auto mt-16 sm:mt-5 sm:h-5/6">
            <div className="flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden sm:flex-row">
                <img className="w-full object-cover object-center" src="https://placeholder.com/300" alt="blog" />
                <div className="p-6">
                    <h1 className="title-font text-4xl sm:text-6xl font-medium text-gray-900 mb-4 mt-10">The Catalyzer</h1>
                    <p className="leading-relaxed mb-3 text-base sm:text-lg text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tempora porro expedita laborum dicta debitis amet dolor sunt hic, velit doloremque nobis at aperiam recusandae repellendus illum laudantium deserunt itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ullam delectus voluptas odit enim sequi sapiente aliquid nesciunt eveniet quasi atque autem commodi iusto sed qui inventore animi blanditiis quaerat.</p>
                    <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        )
}

export default Card