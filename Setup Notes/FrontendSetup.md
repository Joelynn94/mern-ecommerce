# Starting the project

1. Create git repo
1. Add readme.md file

## React Setup

1. RUN create-react-app _folderName_
1. CD into _folderName_
1. RUN npm start (this is to make sure the frontend server is working)
1. Replace favicon.ico file
1. Remove and clean up unwanted files (App.css, App.test.js, logo.svg, setupTests.js)
1. Change the App.js file to look like this to start:

```javascript
import React from 'react';

function App() {
  return (
    <>
      <h1>Welcome to ProShop</h1>
    </>
  );
}

export default App;
```

1. Remove index.css styling
1. Move .gitignore file to root of project
1. Add "node_modules", "node_modules/" and ".env" to the .gitignore file

## Basic components Setup

1. Add "components" folder to the src folder
1. Create a new file(component) "Header.js"
1. Use "rafce" to create a React arrow function component
1. Create a (component) "Footer.js"
1. Use "rafce" to create a React arrow function component
1. Go to App.js file to import the new components, the file will not look like this:

```javascript
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to ProShop</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
```

## React Bootswatch

1. Add CDN for FontAwesome to the **index.html** file
1. Create **images** folder (inside the **public** folder) and add files as needed
1. Download the bootstrap.min.css file
1. Move that file into the **frontend** folder and then into the **src** folder
1. Import the bootstrap.min.css into the index.js file
1. RUN npm install react-bootstrap inside the **frontend** folder
1. Import the components you need from react bootstrap in each file

```javascript
import { Container } from 'react-bootstrap';
```

# Create the basic components

### Footer component

1. Create a basic footer component layout and styling

```javascript
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
```

### Header Navigation component

1. Create a basic navigation inside the header component with styling

```javascript
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart' className='fas fa-shopping-cart'>
                Cart
              </Nav.Link>
              <Nav.Link href='/login' className='fas fa-user'>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
```

### Product component

1. Create a product component layout and styling
1. Import the props needed for the component

```javascript
import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
```

### HomeScreen component

1. Create a homescreen component to display all of the products
1. Loop over each product using the .map higher order function
1. Make sure to add a key prop to the map function

```javascript
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1>Lastest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
```

### Main app component

1. After creating these components, make sure everything is imported in the right places and everything is working as expected

```javascript
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
```

### Rating component

1. Create the rating component
1. Import the props needed for the component
1. Create 5 spans to show 5 stars
1. Using the ternary operator, this will display different icons for the different values of the **value** prop
1. Add a default color to the **color** prop
1. Add proptypes to help with type checking

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span className='ml-1'>{text ? text : ''}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
```

### Update Product component

1. Update the product component to include the rating component instead of the hard coded ratings

```javascript
// original card text
<Card.Text>
  <div className='my-3'>
    {product.rating} from {product.numReviews} reviews
  </div>
</Card.Text>;

// NEW
// import the rating component
import Rating from '../components/Rating ';

// add the rating component
<Card.Text>
  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
</Card.Text>;
```

## Creating React Routing

1. CD into the **frontend** folder
1. RUN npm install react-router-dom react-router-bootstrap
1. Add the router to the **app.js** file

```javascript
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
```

### Update Product component

1. Update the product component to use Link instead of a tags

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      // wrap links with the Link component - using the to=""
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        // wrap links with the Link component - using the to=""
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
```

### Update Header component

1. Update the header component to use LinkContainer instead of a tags

```javascript
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          // wrap links with the LinkContainer component using the to=""
          <LinkContainer to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              // wrap links with the LinkContainer component using the to=""
              <LinkContainer to='/cart'>
                <Nav.Link className='fas fa-shopping-cart'>Cart</Nav.Link>
              </LinkContainer>
              // wrap links with the LinkContainer component using the to=""
              <LinkContainer to='/login'>
                <Nav.Link className='fas fa-user'>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
```

### Update Main App component

1. Create a second view for the products details

```javascript
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
```

### Create Product Details component

1. Create a second view for product details
1. Using a simple json file to start, use the **match** prop to match the url parameters

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Price: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Sock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
```

# After basic server was created

1. RUN npm i axios
1. RUN npm start
1. Add a proxy to the **package.json** file to avoid a CORS error

```javascript
  "proxy": "http://127.0.0.1:5000",
```

1. Remove the products import both HomeScreen component & ProductScreen
1. Add axios import
1. Add useState and useEffect imports

```javascript
import React, { useState, useEffect } from 'react';
import products from '../products';
import axios from 'axios';
```

### HomeScreen component changes

```javascript
// bring in useState and useEffect
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
// import axios
import axios from 'axios';

const HomeScreen = () => {
  // set products state
  const [products, setProducts] = useState([]);

  // getting the data from the server using useEffect hook
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Lastest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
```

### ProductScreen component changes

```javascript
// bring in useState and useEffect
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
// import axios
import axios from 'axios';

const ProductScreen = ({ match }) => {
  // set individual product state
  const [product, setProduct] = useState({});

  // getting the data from the server using useEffect hook
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Price: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Sock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
```
