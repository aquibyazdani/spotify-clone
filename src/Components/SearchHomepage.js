import SearchHome from "./SearchHome";
import Grid from "@mui/material/Grid";
import "./searchhome.css";
import { Row, Col, Card } from "reactstrap";
function SearchHomepage() {
  const browseGenre = [
    {
      label: "Podcasts",
      color: "#26856a",
      image: "/567158eb895ad26718a814345af0fc43ee785ec5.jpeg",
    },
    {
      label: "Made For You",
      color: "#1e3365",
      image: "/ea364e99656e46a096ea1df50f581efe.png",
    },
    { label: "Charts", color: "#8d67aa", image: "/region_global_default.jpeg" },
    {
      label: "New Releases",
      color: "#e8105a",
      image: "/ab67706f000000027ea4d505212b9de1f72c5112.jpeg",
    },
    {
      label: "Discover",
      color: "#b49cc8",
      image: "/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
    },
    {
      label: "Live Events",
      color: "#26856a",
      image: "/8cfa9cb1e43a404db76eed6ad594057c.jpeg",
    },
    {
      label: "Bollywood",
      color: "#26856a",
      image: "/8a0fabf4d537486e9b5a4623c921f77e.jpeg",
    },
    {
      label: "Punjabi",
      color: "#f038a4",
      image: "/11e89d14d7844b7eb3d26619cb662a9b.jpeg",
    },

    {
      label: "Tamil",
      color: "#9cf0e1",
      image: "/2117dadfdd254825b3fbc52e3652ed56.jpeg",
    },
    {
      label: "Telgu",
      color: "#d7f27d",
      image: "/2117dadfdd254825b3fbc52e3652ed56.jpeg",
    },
    {
      label: "Indie",
      color: "#5f8108",
      image: "/ab67706f000000025f7327d3fdc71af27917adba.jpeg",
    },
    {
      label: "Gaming",
      color: "#e8125c",
      image: "/ab67706f0000000221a2087747d946f16704b8af.jpeg",
    },
    {
      label: "EQUAL",
      color: "#148907",
      image: "/ab67706f0000000284a1ec26f589f0d569805a07.jpeg",
    },
    {
      label: "Pop",
      color: "#8c67ac",
      image: "/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpeg",
    },
    {
      label: "RADAR",
      color: "#7358ff",
      image: "/c6677aa51acf4121b66b9d1f231bd427.jpeg",
    },
    {
      label: "Fresh Finds",
      color: "#b02896",
      image: "/16e40e64d2a74fa8a0a020d456e6541d.jpeg",
    },
    {
      label: "Marathi",
      color: "#ec1e32",
      image: "/713254a577a64338a450481329f0d83f.jpeg",
    },

    {
      label: "Wellness",
      color: "#0c73ec",
      image: "/3710b68657574bc79df14bd74629e5ac.jpeg",
    },
  ];
  return (
    <>
      <Row
        container
        spacing={2}
        className="search-info-container"
        style={{ marginTop: "120px", marginLeft: "260px" }}
      >
        <Grid item xs={6} className="text-white">
          <h3 className="search-name">{"Browse All"}</h3>
        </Grid>
      </Row>
      <SearchHome browseGenre={browseGenre} />
    </>
  );
}

export default SearchHomepage;
