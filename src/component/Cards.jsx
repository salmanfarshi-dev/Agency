function Cards({ src, tittle, pera, height, className }) {
  return (
    <div
      className={`bg-white items-center flex text-center flex-col lg:w-[424px] rounded-[20px] duration-300 ${className}`}
    >
      <img className={`${height} object-cover`} src={src} alt="" />

      <h4 className='font-bold font-inter lg:text-[25px] text-success mt-[40px] mb-[20px]'>
        {tittle}
      </h4>

      <p className="lg:text-base text-sm lg:w-[310px] text-secondary">
        {pera}
      </p>
    </div>
  );
}

export default Cards;