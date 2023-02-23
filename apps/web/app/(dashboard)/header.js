"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Menu from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import "./Dropdown.css";
import logoeventiket from "../../public/logo/logo.png";

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
            src={logoeventiket}
            width="0"
            height="0"
            sizes="100vw"
            className={styles.logo}
            alt="logo"
            title="Beranda Eventiket"
            priority
          />
        </Link>
        <div>
          <div className={styles.searchcontainer}>
            <label
              htmlFor="search"
              onClick={handleOpen}
              className={styles.search}
              title="Cari event disini..."
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
                  type="search"
                  id="search"
                  placeholder="Search"
                  enterKeyHint="search"
                  className={styles.searchinput}
                />

                <button
                  onClick={handleClose}
                  className={styles.searchiconclose}
                  tabIndex="0"
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
            className={styles.dropdownheader}
            anchorEl={anchorEl}
            open={openn}
            onClose={handleClosee}
          >
            <div className={styles.dropdownheaderwrapper}>
              <div className={styles.dropdownheaderitemleft}>
                <Link
                  href="/id"
                  onClick={handleClosee}
                  className={styles.fiturmoreleft}
                >
                  <ConfirmationNumberIcon />
                  <div className={styles.fiturtextitem}>
                    <h4>Ticket Shop</h4>
                    <p>
                      Sell tickets and more with an on-brand buying experience
                    </p>
                  </div>
                </Link>
                <Link
                  href="/id"
                  onClick={handleClosee}
                  className={styles.fiturmoreleft}
                >
                  <SendToMobileIcon />
                  <div className={styles.fiturtextitem}>
                    <h4>Online Promotion</h4>
                    <p>
                      Sell tickets and more with an on-brand buying experience
                    </p>
                  </div>
                </Link>
                <Link
                  href="/id"
                  onClick={handleClosee}
                  className={styles.fiturmoreleft}
                >
                  <QrCodeScannerIcon />
                  <div className={styles.fiturtextitem}>
                    <h4>Door Management</h4>
                    <p>
                      Sell tickets and more with an on-brand buying experience
                    </p>
                  </div>
                </Link>
                <Link
                  href="/id"
                  onClick={handleClosee}
                  className={styles.fiturmoreleft}
                >
                  <CloudDoneIcon />
                  <div className={styles.fiturtextitem}>
                    <h4>App & Integrations</h4>
                    <p>
                      Sell tickets and more with an on-brand buying experience
                    </p>
                  </div>
                </Link>
              </div>
              <div className={styles.dropdownheaderitemvl}></div>
              <div className={styles.dropdownheaderitem}>
                <Image
                  src="/asset/fitur-more.png"
                  draggable="false"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className={styles.fiturmoreimg}
                  alt="fiturmore"
                />
                <div className={styles.fiturmore}>
                  <h4>Eventiket Experience</h4>
                  <p>
                    Eventiket Experience Manager hadir dengan fitur-fitur
                    andalan untuk mendukung keberlangsungan konser atau music
                    experience Anda.
                  </p>
                  <Link
                    onClick={handleClosee}
                    className={styles.fiturmorelink}
                    href="/id"
                  >
                    Lihat semua fitur&nbsp;
                    <ArrowForwardIcon className={styles.fiturmorelinkicon} />
                  </Link>
                </div>
              </div>
            </div>
          </StyledMenu>
        </div>
        <Link href="/id">Pusat Bantuan</Link>
        <Link href="/home">Masuk/Daftar</Link>
        <Link href="/her" className={styles.createetiket}>
          <AddIcon className={styles.createetiketicon} />
          &nbsp;Buat etiket
        </Link>
      </div>
    </div>
  );
}
