import type { FC, HTMLAttributes } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import type { MenuType } from '../../types';
import { useMenuMobile } from './hooks';
import { StyledDiv, StyledMenu } from './styles';

const MenuMobile: FC<MenuType & HTMLAttributes<HTMLElement>> = ({
  className,
  handleChange,
  items,
  selected,
}) => {
  const { anchorEl, handleClick, handleClose } = useMenuMobile();
  return (
    <StyledDiv className={className}>
      <Button
        className="selected"
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
      >
        {items[selected]}
      </Button>
      <StyledMenu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        // getContentAnchorEl={null}
      >
        {items.map((x, i) => {
          return (
            <MenuItem
              onClick={() => {
                handleChange?.(i);
                handleClose();
              }}
              disableRipple
              key={x}
              className={classnames({
                active: i === selected,
              })}
            >
              <Typography variant="h5">{x}</Typography>
            </MenuItem>
          );
        })}
      </StyledMenu>
    </StyledDiv>
  );
};

export default MenuMobile;
