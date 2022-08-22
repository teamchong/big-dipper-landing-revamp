import useTranslation from 'next-translate/useTranslation';
import type { FC, HTMLAttributes, ComponentProps } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import getUrlFromNetwork from '@src/utils/get-url-from-network';
import type { SearchBoxProps } from './types';
import {
  StyledAutocomplete,
  StyledPopper,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from './styles';

/**
 * It takes an object with a property called `startAdornment` and returns an object with a property
 * called `startAdornment`
 * @param InputProps - The InputProps prop is a prop that is passed to the TextField component. It's an
 * object that contains a startAdornment property.
 * @returns An object with the properties of InputProps and startAdornment.
 */
function addSearch(InputProps: ComponentProps<typeof TextField>['InputProps']) {
  const startAdornment = (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  );
  return { ...InputProps, startAdornment };
}

/**
 * It takes a React element and a network object, and returns a React element
 * @param props - HTMLAttributes<HTMLLIElement>
 * @param {unknown} option - The option that is being rendered.
 * @returns A React component
 */
function renderOption(props: HTMLAttributes<HTMLLIElement>, option: unknown) {
  const { network } = option as { network: Network };
  const url = getUrlFromNetwork(network);
  return (
    <StyledListItem {...props} title={url}>
      <StyledListItemIcon>
        <Image alt={network.name} src={network.logo} width="36" height="36" unoptimized />
      </StyledListItemIcon>
      <StyledListItemText>{network.name}</StyledListItemText>
    </StyledListItem>
  );
}

/**
 * `handleChange` is a function that takes an event and a value, and if the value is truthy, it opens a
 * new window to the URL of the network
 * @param {unknown} _event - unknown - This is the event that is triggered when the user clicks on the
 * dropdown.
 * @param {unknown} value - The value of the selected item.
 */
function handleChange(_event: unknown, value: unknown) {
  if (value) {
    const { network } = value as { network: Network };
    const url = getUrlFromNetwork(network);
    if (url) {
      window.open(url, '_top');
    }
  }
}

/* A React component that is using the Material-UI Autocomplete component. */
const SearchBox: FC<SearchBoxProps> = ({ networks }) => {
  const { t } = useTranslation('common');
  const options = networks.map((network) => ({ label: network.name, network }));
  return (
    <StyledAutocomplete
      popupIcon={null}
      noOptionsText={t('noMatch')}
      options={options}
      PopperComponent={StyledPopper}
      renderOption={renderOption}
      renderInput={({ InputProps, ...params }) => (
        <TextField {...params} placeholder={t('searchNetwork')} InputProps={addSearch(InputProps)} />
      )}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
