const Testimonial = () => (
  <div
    className="bg-no-repeat bg-cover h-1/4 space-y-2 flex flex-col items-center justify-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url('https://media.istockphoto.com/photos/pepperoni-pizza-on-wooden-table-picture-id1301482898?b=1&k=20&m=1301482898&s=170667a&w=0&h=XLgT9kG_7_n02S-YzOY71EzcGgqBnY-GukEfhjOui64=')",
    }}
  >
    <h1 className="text-2xl pt-2 ">What Customers Are Saying</h1>
    <blockquote className="w-3/5 lg:w-2/5 selection:bg-slate-100 selection:text-slate-800">
      {
        ' "This is the best pizzeria on Staten island, amazing food, great atmosphere, immaculae dining area.I recommend everyone to try the food. Thank you for your service"'
      }{' '}
      <span className="tracking-wide"> -Vincent</span>
    </blockquote>
  </div>
);

export default Testimonial;
