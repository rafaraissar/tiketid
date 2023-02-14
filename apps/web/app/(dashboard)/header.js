"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Menu from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Dropdown.css";

const StyledMenu = styled((props) => <Menu {...props} />)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,

    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],

    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosee = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerleft}>
        <Link className={styles.logocontainer} href="/home">
          <Image
            src="/logo/logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className={styles.logo}
            alt="logo"
            priority
          />
        </Link>
        <div>
          <div className={styles.searchcontainer}>
            <label
              htmlFor="search"
              onClick={handleOpen}
              className={styles.search}
            >
              <SearchIcon />
              &nbsp;&nbsp;Cari event disini...
            </label>
          </div>

          <div className={open ? styles.modalsearch : styles.modalsearchclose}>
            <div className={styles.searchbar}>
              <div className={styles.searchbarinput}>
                <label onClick={handleClose} className={styles.searchicon}>
                  <ArrowBackIcon />
                </label>

                <input
                  type="text"
                  id="search"
                  placeholder="Search"
                  className={styles.searchinput}
                />
                <button
                  onClick={handleClose}
                  className={styles.searchiconclose}
                  tabindex="0"
                >
                  Cancel
                </button>
              </div>

              <div className={styles.searchvalue} onClick={handleClose}>
                asdd
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerright}>
        <label
          htmlFor="search"
          onClick={handleOpen}
          className={styles.searchmobileiconlabel}
        >
          <SearchIcon className={styles.searchmobileicon} />
        </label>
        <MenuIcon className={styles.menumobileicon} />
        <div>
          <div onClick={handleClick} className={styles.headerrighttext}>
            Fitur Kami&nbsp;
            <KeyboardArrowDownIcon className={styles.createetiketicon} />
          </div>
          <StyledMenu
            className={styles.dropdownheaderr}
            anchorEl={anchorEl}
            open={openn}
            onClose={handleClosee}
          >
            <MenuItem onClick={handleClosee} className={styles.dropdownheader}>
              Profile
            </MenuItem>
          </StyledMenu>
        </div>
        <Link href="/id">Pusat Bantuan</Link>
        <Link href="/home">Masuk/Daftar</Link>
        <Link href="/help" className={styles.createetiket}>
          <AddIcon className={styles.createetiketicon} />
          &nbsp;Buat etiket
        </Link>
      </div>
    </div>
  );
}
