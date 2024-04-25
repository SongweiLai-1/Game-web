import React from "react";
import {extendTheme, ThemeConfig,HStack,Switch,Text, useColorMode} from "@chakra-ui/react";
const DarkMode = () => {
    const {toggleColorMode,colorMode} = useColorMode()


  return (
      <HStack>
          <Switch isChecked={colorMode ==='dark' } onChange={toggleColorMode}/>
          <Text whiteSpace='nowrap'>Dark mode</Text>
      </HStack>
  )
}

export default DarkMode