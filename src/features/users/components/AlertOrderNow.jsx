import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useLocation } from "react-router-dom";

export default function AlertOrderNow({ open, onClose}) {
  const nav = useLocation();
  const message = `Link : ${window.location.origin}${nav.pathname}`
   const openWhatsApp = () => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/message/SX6VR53PYA7DE1?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

   const openTelegram = () => {
    const encoded = encodeURIComponent(message);
    const url = `https://t.me/Cool1450?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Contact to Order</DialogTitle>

      <DialogContent>
        <Typography variant="body2" color="text.secondary">
          Choose how you want to place your order:
        </Typography>

        <Stack spacing={2} mt={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{ bgcolor: "#25D366", "&:hover": { bgcolor: "#1ebe5d" } }}
            onClick={openWhatsApp}
          >
            Order via WhatsApp
          </Button>

          <Button
            fullWidth
            variant="contained"
            startIcon={<TelegramIcon />}
            sx={{ bgcolor: "#229ED9", "&:hover": { bgcolor: "#1c8ac7" } }}
            onClick={openTelegram}
          >
            Order via Telegram
          </Button>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
