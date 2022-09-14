import { useContext } from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {


  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    window.location.href = '/signin'
  }

  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar expand='lg' bg="dark" variant='dark'>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  DaTRUE STREETWEAR
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="me-auto w-100 justify-content-end">
                  <Link to="/cart" className='nav-link'>
                    Cart {' '}
                    {cart.cartItems.length > 0 && (
                      <Badge pill className='bg-primary'>
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {
                    userInfo ?
                      (
                        <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                          <LinkContainer to="/profile">
                            <NavDropdown.Item>Your Profile</NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to="/orderhistory">
                            <NavDropdown.Item>Order History</NavDropdown.Item>
                          </LinkContainer>
                          <NavDropdown.Divider />
                          <Link className='dropdown-item' to='#signout' onClick={signoutHandler}>
                            Sign Out
                          </Link>
                        </NavDropdown>
                      ) : (
                        <Link className='nav-link' to='/signin'>
                          Sign In
                        </Link>
                      )
                  }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/orderhistory" element={<OrderHistoryScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className='bg-dark'>
          <div className='text-center text-white'>
            All rights reserved yo
          </div>
        </footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
