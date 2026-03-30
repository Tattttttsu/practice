import { Programs } from "./ui/Programs/Programs";
import { Travel } from "./ui/Travel/Travel";
import { Gallery } from "./ui/Gallery/Gallery";
// import { Container } from "@/shared/ui/Container/Container";

export const LandingPage = () => {
  return (
    <>
      {/* <Container> */}
        <Programs />
        <Travel />
        <Gallery />
      {/* </Container> */}
    </>
  )
}