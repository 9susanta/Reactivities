import { Button, styled, type ButtonProps, type LinkProps } from "@mui/material";

type StyledButtonProps = ButtonProps & Partial<LinkProps>

const StyledButton = styled(Button)<StyledButtonProps>(({theme}) => ({
    '&.Mui-disabled': {
        backgroundColor: theme.palette.grey[600],
        color: theme.palette.text.disabled
    }
}))

export default StyledButton;