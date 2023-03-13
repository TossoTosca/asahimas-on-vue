import React from "react";
import { Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";

function SideBar() {

    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, sign me out!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("accessToken");
                Swal.fire(
                    'Signed out!',
                    'You have been signed out.',
                    'success'
                ).then(() => {
                    window.location.href = '/login';
                })
            }
        })
    };


    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a className="text-white bg-dark p-2 "
            style={{ textDecoration: "none" }}
            href="/#"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            &#x25bc;
        </a>
    ));
    return (

        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">Asahimas Flat Glass</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">

                <li>
                    <a href="/dashboard" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Dashboard
                    </a>
                </li>

                <li>
                    <a href="/product" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                        Products
                    </a>
                </li>
                <li>
                    <a href="/history" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#file-text"></use></svg>
                        My Product
                    </a>
                </li>

                <li>
                    <a href="/invoice" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#file-text"></use></svg>
                        Orders
                    </a>
                </li>


            </ul>
            <hr />

            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4128/4128240.png"
                        alt=""
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                    />
                    <strong>Settings </strong>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/product/add">New Product...</Dropdown.Item>
                    <Dropdown.Item href="/account">Profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    );
}

export default SideBar;
