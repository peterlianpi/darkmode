import styled from "styled-components";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const StyledLabel = styled.label`
  input {
    position: fixed;
    left: -999999px;
  }
  input ~ div {
    width: 30px;
    height: 16px;
    background-color: #eee;
    border-radius: 8px;
    position: relative;
  }

  svg {
    height: 14px;
    color: #fff;
    background-color: #ccc;
    border-radius: 7px;
    position: absolute;
    top: 1px;
    left: 1px;
    transition: all 0.4s ease;
  }
  input:checked ~ div {
    background-color: #668;

    svg {
      background-color: #224;
      left: 15px;
    }
  }
`;

const Toggler = () => {
  const theme = useContext(ThemeContext);

  return (
    <StyledLabel>
      <input
        type="checkbox"
        checked={theme.darkMode}
        onChange={() => theme.setDarkMode((oldValue) => !oldValue)}
      />
      <div>
        <MoonIcon />
      </div>
    </StyledLabel>
  );
};
export default Toggler;
