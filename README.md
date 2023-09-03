# Fullstack ACC Capstone Boilerplate

This boilerplate was created for 2302

For backend starter see branch 2302-BE

Use [this API](https://fakestoreapi.com/) while you're building your front end application to reduce blockers due to building a back end at the same time.

Project Plan Phase 1 Capstone

- Reread the Api, Breakdown everything
- Orgainize the folder structure
  ex - Components - Main Folder - Home - Secondary Folder - Home.jsx - File - Home.css - File

- Import all FrameWorks and Libraries
- Check dependencies in .json Files
- Review Github - Add mentors to Github

- Create Project Board Breakdown
- Review Api
- Create all folders and files
- Import modules

- To start work on each page individually

  - GetAllProduct page should view a fecth request for all products in Api
  - Do small styling for page to look presentable
  - Create the GetAllProduct page component and render products
  - Your GetAllProduct page can be a template guide for you and the site.

- Ex. Template
  Import react from "react"
  Import usestate from "react" # Create Component
  const Home = () => {
  const [product, setProduct] = usestate([])

              useEffect (() => {
                  const productContainer = async () => {
                      const data = await fetchAllProducts();
                      console.log(data)
                  }
              })
          }

  return export default Home

# Pass it To App
