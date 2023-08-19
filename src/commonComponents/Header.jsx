import React, { useState } from 'react';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

export default function NavbarCompo() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        {/* <MDBNavbarBrand href='/'>Herish</MDBNavbarBrand> */}
        <Link className='nav-link p-2' to='/'>Herish</Link >

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' to='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            {/* <MDBNavbarItem>
              <MDBNavbarLink href='/aboutus'>About us</MDBNavbarLink>
            </MDBNavbarItem> */}
            {/* <MDBNavbarItem active>
              <Link className='nav-link' to='/'>Home</Link>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <Link className='nav-link' to='/aboutus'>About us</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/contactus'>Contact us</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/examples'>Examples</Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Pages
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/'>Home</MDBDropdownItem>
                  <MDBDropdownItem link href='aboutus'>About us</MDBDropdownItem>
                  <MDBDropdownItem link href='contactus'>Contact us</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}