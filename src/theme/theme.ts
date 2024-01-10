import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  sizes: {
    small: {
      innerWidth: '10px',
      fontSize: '0.1rem', // Adjust the font size for small size
      padding: '1px 0px', // Adjust the padding
    },
  },
   components: {
    MuiTextField: {
      defaultProps: {
        size: "small" as const
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: { size?: string } })  => ({
          ...(ownerState.size === 'small' &&{
              width: '100px',
              color: '#fff',
            }),
        }),
      },
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
       
          // palette values for light mode
          // primary: amber,
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }
      : {
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          background: {
            // default: deepOrange[900],
            // paper: deepOrange[900],
          },
          // text: {
          //   primary: "#fff",
          //   secondary: grey[500],
          // },
        }),
  }
});

// export const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: "#fff",
//             secondary: grey[500],
//           },
//         }),
//   },
// });

export default theme;