import useTranslation from 'next-translate/useTranslation';
import type { FC, HTMLAttributes, ComponentProps } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import getUrlFromNetwork from '@src/utils/get-url-from-network';
import type { SearchBoxProps } from './types';
import { StyledAutocomplete, StyledPopper } from './styles';

const addSearch = (InputProps: ComponentProps<typeof TextField>['InputProps']) => {
  const startAdornment = (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  );
  return { ...InputProps, startAdornment };
};

const renderOption = (props: HTMLAttributes<HTMLLIElement>, option: unknown) => {
  const { network } = option as { network: Network };
  const url = getUrlFromNetwork(network);
  return (
    <MenuItem {...props} title={url}>
      <Image alt={network.name} src={network.logo} width="16" height="16" unoptimized />
      {network.name}
    </MenuItem>
  );
};

const handleChange: ComponentProps<typeof StyledAutocomplete>['onChange'] = (_event, value) => {
  if (value) {
    const { network } = value as { network: Network };
    const url = getUrlFromNetwork(network);
    if (url) {
      window.open(url, '_top');
    }
  }
};

const SearchBox: FC<SearchBoxProps> = ({ networks }) => {
  const { t } = useTranslation('common');
  const options = networks.map((network) => ({ label: network.name, network }));
  return (
    <StyledAutocomplete
      popupIcon={null}
      noOptionsText={t('notMatch')}
      options={options}
      PopperComponent={StyledPopper}
      renderOption={renderOption}
      renderInput={({ InputProps, ...params }) => (
        <TextField
          {...params}
          placeholder={t('searchNetwork')}
          InputProps={addSearch(InputProps)}
        />
      )}
      onChange={handleChange}
    />
  );
};
export default SearchBox;
