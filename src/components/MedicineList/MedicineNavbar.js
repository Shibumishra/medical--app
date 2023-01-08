import React from 'react';
import { makeStyles, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import HomeIcon from '@material-ui/icons/Home';
import { LockOpenOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        textDecoration: 'none',
        color: 'rgb(221, 221, 221)',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    titless: {
        margin: "15px",
    },
    Shope_bold: {
        fontSize: "40px",
        fontWeight: "800",
        fontFamily: "OpenSans, sansSerif",
    },
    Shope_mini: {
        fontSize: "40px",
        fontWeight: "100",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            color: '#000',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        backgroundColor: 'rgb(0 0 0 / 18%)',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
        // '&:focus': {
        //     border: '1px solid #1670BE',
        //     boxShadow: '0 0 3px #1670BE',
        //     outlineOffset: '0px',
        //     outline: 'none',
        //     backgroundColor: '#fff',
        //     color: '#000',
        // },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function PrimarySearchAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {/* <Link to="/" style={{ textDecoration: "none" }}>
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge color="secondary">
                            <HomeIcon style={{ color: "black" }} />
                        </Badge>
                    </IconButton>
                    <p style={{ color: "black" }}>Shoplane</p>
                </MenuItem>
            </Link> */}
            <Link to="/cart" style={{ textDecoration: "none" }}>
                <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={props.numberCart} color="secondary">
                            <AddShoppingCartIcon style={{ color: "rgb(255 252 252", fontSize: '30px' }} />
                        </Badge>
                    </IconButton>
                    <p style={{ color: "black" }}>Cart</p>
                </MenuItem>
            </Link>
            {/* <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem> */}
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" >
                <Toolbar >
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search for medicines, health products and more"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            value={props.name}
                            onChange={props.filter}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show new notifications" color="inherit" >
                            {/* //add to cart counting */}
                            <Link to="/cart" style={{ textDecoration: "none" }}>
                                <Badge badgeContent={props.numberCart} color="secondary">
                                    <AddShoppingCartIcon style={{ color: "rgb(255 252 252", fontSize: '30px' }} />
                                </Badge>
                            </Link>
                        </IconButton>
                        {/* <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton> */}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}


// const mapStateToProps = (state) => ({
//     cart: state.cart,
// });

// const mapDispatchToProps = (dispatch) => ({
//     search: (payload) => dispatch(getSearchValue(payload)),
// });

const mapStateToProps = state => {
    return {
        numberCart: state.ShopApp.numberCart
    }
}
export default connect(mapStateToProps, null)(PrimarySearchAppBar)