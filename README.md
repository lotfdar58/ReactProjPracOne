# links
https://www.patterns.dev/

https://alexkondov.com/tao-of-react/

https://github.com/react-boilerplate/react-boilerplate-cra-template

https://github.com/RidhwanDev/mui-darkmode/blob/main/src/main.tsx

https://www.youtube.com/watch?v=Ak8ioaciYQY

https://mui.com/material-ui/customization/dark-mode/



https://stackoverflow.com/questions/69449055/in-mui-how-do-i-use-theme-values-in-my-css

https://mui.com/system/getting-started/the-sx-prop/


 <Box  className="headerContainer"
                sx={{   
                    width: '100%',
                    backgroundColor: (theme) => theme.palette.grey[500],
                    padding: '10px', 
                    textAlign: 'center', 
                }}
            >



:root {
  --theme-palette-grey-500: #9e9e9e; /* Default color */
}

.headerContainer {
  background-color: var(--theme-palette-grey-500);
}