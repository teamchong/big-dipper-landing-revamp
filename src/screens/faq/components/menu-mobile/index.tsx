import type { FC, HTMLAttributes } from 'react';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import type { MenuType } from '../../types';
import { useMenuMobile } from './hooks';
import { StyledMenu, StyledButton, StyledMenuItem } from './styles';

const MenuMobile: FC<MenuType & HTMLAttributes<HTMLElement>> = ({
  className,
  handleChange,
  items,
  selected,
}) => {
  const { anchorEl, handleClick, handleClose } = useMenuMobile();
  return (
    <div className={className}>
      <StyledButton
        className="selected"
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
      >
        {items[selected]}
      </StyledButton>
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
            <StyledMenuItem
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
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
};

export default MenuMobile;
