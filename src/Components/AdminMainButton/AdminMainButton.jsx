//React
import { useState } from 'react'


//Components
import CustomDrawer from '../CustomDrawer/CustomDrawer';
import CustomModal from '../CustomModal/CustomModal';



//MUI
import {
    Button,
    Menu,
    MenuItem,
    IconButton,
    Popover,
    Badge,
    Tooltip
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system'
//icons
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
//propTypes 

import propTypes from 'prop-types'


//Styles
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: -3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


const AdminMainButton = (props) => {
    // --- Props ---
    const { icon, 
        title, 
        onClick, 
        appearance, 
        type, 
        menuItems, 
        willShow, 
        modalIcon, 
        putDrawerCloseButton,
        putTooltip,
        toolTipPosition,
        drawerAnchor,
        badgeContent,
        drawerVariant,
        putBorder,
        filled,
        sx
    } = props

    //theme
    const theme = useTheme();

    



    //STATES
    // --- menu states ---
    const [menuEl, setMenuEl] = useState(null)
    const openMenu = Boolean(menuEl)

    // --- modal states ---
    const [modalOpen, setModalOpen] = useState(false)
    
    // --- drawer states ---
    const [drawerOpen, setDrawerOpen] = useState(false)

    // --- popover states ---
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    //HANDLERS
    //--- Menu Handlers ---
    const handleOpenMenu = (e) => {
        setMenuEl(e.currentTarget); 
    }

    const handleCloseSortMenu = () => {
        setMenuEl(null);
    }

    //--- Modal handlers ---

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    //--- Drawer Handlers ---
    const handleOpenDrawer = () => {
        setDrawerOpen(true)
    }

    // --- Popover Handlers ---
    const handleOpenPopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };


    //Styled Components
    const StyleOfButton = {
        backgroundColor: filled ? (appearance === "primary" ? theme.palette.primary.main : appearance === "secondary" ? theme.palette.secondary.main : "transparent") : "transparent",
        color: appearance === "primary" ? theme.palette.primary.contrastText : "text.primary",
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        borderRadius: "100px",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: (appearance === "primary" ? theme.palette.primary.main : appearance === "secondary" ? theme.palette.secondary.main : "transparent")
        },
        transition: type === "menu" && openMenu ? 'rotate(180deg)' : "",
        border: putBorder ? "solid 1px" : "none",
        borderColor: theme.palette.divider,
        textTransform: "none"
    }

    const StyledCustomPopover = {
        marginTop: theme.spacing(1) // Adjust this value to add space between the button and popover
    }

    const StyleOfIconButton = {
        border: putBorder ? '1px solid' : "0",
        borderColor: theme.palette.divider,
        borderRadius: "10px",
    }

    

    return (
            <>
            {/* --- The Button --- */}
            {
                appearance === "iconButton"
                ?
                    putTooltip
                    ?
                    <Tooltip title={title} placement={toolTipPosition}>
                        <IconButton 
                        sx={
                            sx ?
                            {...StyleOfIconButton, ...sx}
                            :
                            StyleOfIconButton
                        }
                        size='small' 
                        color='primary'
                        onClick= {
                            type === "menu" || type === "buttonsMenu" ? handleOpenMenu :
                            type === "modal" ? handleOpenModal :
                            type === "drawer" ? handleOpenDrawer :
                            type === "popover" ? handleOpenPopover :
                            type === "custom" ? onClick : undefined
                        }
                        >
                            {
                                badgeContent
                                ?
                                <StyledBadge color='error' badgeContent={badgeContent}>
                                    {icon}
                                </StyledBadge>
                                :
                                icon
                            }
                        </IconButton>
                    </Tooltip>
                    :
                    <IconButton 
                        sx={
                            sx ?
                            {...StyleOfIconButton, ...sx}
                            :
                            StyleOfIconButton
                        }
                        size='small' 
                        color='primary'
                        onClick= {
                            type === "menu" || type === "buttonsMenu" ? handleOpenMenu :
                            type === "modal" ? handleOpenModal :
                            type === "drawer" ? handleOpenDrawer :
                            type === "popover" ? handleOpenPopover :
                            type === "custom" ? onClick : undefined
                        }
                        >
                            {
                                badgeContent
                                ?
                                <StyledBadge color='error' badgeContent={badgeContent}>
                                    {icon}
                                </StyledBadge>
                                :
                                icon
                            }
                    </IconButton>
                :
                    putTooltip
                    ?
                    <Tooltip title={title} placement={toolTipPosition}>
                        <Button
                        sx={
                            sx ?
                            {...StyleOfIconButton, ...sx}
                            :
                            StyleOfButton
                        }
                        onClick={
                            type === "menu" || type === "buttonsMenu" ? handleOpenMenu :
                            type === "modal" ? handleOpenModal :
                            type === "drawer" ? handleOpenDrawer :
                            type === "popover" ? handleOpenPopover :
                            type === "custom" ? onClick : undefined
                        }
                        startIcon={
                        icon
                        }
                        endIcon= {
                            type === "menu" || type === "popover" ?
                            menuEl ? 
                            <KeyboardArrowUpOutlinedIcon /> :
                            <KeyboardArrowDownOutlinedIcon />
                            :
                            null
                        }
                        >
                            {
                            badgeContent
                            ?
                            <StyledBadge color='error' badgeContent={badgeContent}>
                                {title}
                            </StyledBadge>
                            :
                            title
                        }
                        </Button>
                    </Tooltip>
                    :
                    <Button
                    sx={
                        sx ?
                        {...StyleOfIconButton, ...sx}
                        :
                        StyleOfButton
                    }
                    onClick={
                        type === "menu" || type === "buttonsMenu" ? handleOpenMenu :
                        type === "modal" ? handleOpenModal :
                        type === "drawer" ? handleOpenDrawer :
                        type === "popover" ? handleOpenPopover :
                        type === "custom" ? onClick : undefined
                    }
                    startIcon={
                    icon
                    }
                    endIcon= {
                        type === "menu" || type === "popover" || type === 'filter' ?
                        menuEl ? 
                        <KeyboardArrowUpOutlinedIcon /> :
                        <KeyboardArrowDownOutlinedIcon />
                        :
                        null
                    }
                    >
                        {
                            badgeContent
                            ?
                            <StyledBadge color='error' badgeContent={badgeContent}>
                                {title}
                            </StyledBadge>
                            :
                            title
                        }
                    </Button>
            }
            
            {/* --- The Content Will Appear --- */}
            {
                menuItems && type === "menu" 
                ?
                <Menu 
                id={title + "-menu"}
                anchorEl={menuEl} 
                open={openMenu} 
                onClose={handleCloseSortMenu}
                MenuListProps={{
                    "aria-labelledby": `by-${title}-menu`,
                }}
                >
                    {
                        menuItems.map((item, key) => {
                            return (
                            <MenuItem
                            onClick={item.onClick}
                            key={key}
                            sx={{
                                gap: theme.spacing(),
                                backgroundColor: item.selected ? "action.selected" : "",
                                fontWeight: item.selected ? "bold" : "normal",
                            }}
                            >
                            {item.icon && item.icon}
                            {item.value}
                            </MenuItem>
                            )
                        })
                    }
                    
                    

                </Menu>
                : 
                menuItems && type === "buttonsMenu" 
                ?
                <Menu 
                id={title + "-menu"}
                anchorEl={menuEl} 
                open={openMenu} 
                onClose={handleCloseSortMenu}
                MenuListProps={{
                    "aria-labelledby": `by-${title}-menu`,
                }}
                >
                    {
                        menuItems.map((item, key) => {
                            return (
                            <MenuItem
                            key={key}
                            sx={{
                                gap: theme.spacing()
                            }}
                            >
                            {item}
                            </MenuItem>
                            )
                        })
                    }
                    
                    

                </Menu>
                : 
                
                type === "modal"
                ?
                <CustomModal 
                title={title} 
                modalOpenState={[modalOpen, setModalOpen]}
                modalIcon={modalIcon}
                >
                    {willShow}
                </CustomModal>
                : 
                type === "drawer" 
                ?
                <CustomDrawer
                drawerOpenState={[drawerOpen, setDrawerOpen]}
                title={title}
                putDrawerCloseButton={putDrawerCloseButton}
                anchor={drawerAnchor}
                variant={drawerVariant}
                >
                    {willShow}
                </CustomDrawer>
                :
                type === "popover" 
                ?
                <Popover 
                sx={StyledCustomPopover}
                open={open} 
                anchorEl={anchorEl} 
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                elevation={0}
                >
                    {willShow}
                </Popover>
                :
                null
            }
            </>
    );
};

AdminMainButton.propTypes = {
    icon: propTypes.any,
    title: propTypes.string.isRequired,
    appearance: propTypes.oneOf(["primary", "secondary", "iconButton"]).isRequired,
    type: propTypes.oneOf(["modal", "menu", "buttonsMenu", "drawer", "popover","custom"]).isRequired,
    onClick: propTypes.func,
    menuItems: propTypes.array,
    willShow: propTypes.element,
    modalIcon: propTypes.element,
    drawerAnchor: propTypes.oneOf(['right', 'left', 'top', 'bottom']),
    putDrawerCloseButton: propTypes.bool,
    putTooltip: propTypes.bool,
    toolTipPosition: propTypes.string,
    badgeContent: propTypes.oneOfType([propTypes.string, propTypes.number]),
    drawerVariant: propTypes.string,
    sx: propTypes.object,
    putBorder: propTypes.bool,
    filled: propTypes.bool,
}

export default AdminMainButton;