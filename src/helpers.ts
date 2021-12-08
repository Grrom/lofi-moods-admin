import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,

  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

interface confirmDialogProps {
  question: string;
  onConfirm: () => void;
  confirmButtonColor?: string;
}

export default class Helpers {
  static errorAlert = (message: string) => {
    Toast.fire({
      icon: "error",
      title: "Signed in successfully",
    });
  };

  static successAlert = (message: string) => {
    Toast.fire({
      icon: "success",
      title: message,
    });
  };

  static confirmDialog = ({
    question,
    onConfirm,
    confirmButtonColor,
  }: confirmDialogProps) => {
    Swal.fire({
      icon: "question",
      title: question,
      showCancelButton: true,
      confirmButtonColor: confirmButtonColor ?? "red",
    }).then((value) => {
      if (value.isConfirmed) {
        onConfirm();
      }
    });
  };

  static getById = (id: string) => {
    return document.getElementById(id);
  };
}
