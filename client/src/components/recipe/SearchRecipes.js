import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Form, Row, Col, Button } from "react-bootstrap";

import CardRecipe from "../../UIcomponents/Cards/CardRecipe";
import axios from "axios";

const SearchRecepies = ({ match }) => {
  const [recipes, setRecipes] = useState("");
  const [query, setQuery] = useState();
  const [searchResult, setSearchResult] = useState();
  const [itemsFound, setItemsFound] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipe")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let searchResult = recipes.filter((r) => {
      return r.name.toLowerCase().match(query.toLowerCase().trim());
    });
    if (searchResult.length > 0) {
      setSearchResult(searchResult);
      setItemsFound("Recipes Found: " + searchResult.length);
      setMessage("");
    } else {
      searchResult = recipes.filter((r) => {
        return r.description.toLowerCase().match(query.toLowerCase().trim());
      });
      setSearchResult(searchResult);
      setItemsFound("Recipes Found: " + searchResult.length);
      setMessage("");
    }
  };

  return (
    <React.Fragment>
      <Jumbotron
        className="page-header shadow"
        style={{
          paddingTop: "8%",
          paddingBottom: "2%",
          backgroundImage: `url(https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)`,
          color: "white",
        }}
      >
        <Container className="search-container">
          <Form style={{ margin: "80px 0px" }}>
            <h1>Discover different flavours of happiness.</h1>
            <input
              type="text"
              placeholder="Search Recipes..."
              className="search-bar"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            {query ? (
              <Button
                href="#searchResult"
                variant="success"
                className="search-button mt-5"
                onClick={handleSearch}
              >
                <i className="fas fa-search pr-2"></i>
                Search
              </Button>
            ) : (
              <Button
                href="#searchResult"
                variant="dark"
                className="search-button mt-5"
                onClick={handleSearch}
                disabled
              >
                <i className="fas fa-search pr-2"></i>
                Search
              </Button>
            )}
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <Row className="p-4 pl-5">
          <h3>{itemsFound ? itemsFound : message}</h3>
          <hr></hr>
        </Row>
        <Row className=" m-1 pt-2" id="searchResult">
          {searchResult &&
            searchResult.map((recipe) => {
              return (
                <Col lg={4} className="mb-4" key={recipe._id}>
                  <CardRecipe recipe={recipe} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SearchRecepies;
