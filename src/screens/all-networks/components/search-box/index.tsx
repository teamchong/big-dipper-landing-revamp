import useTranslation from 'next-translate/useTranslation';
import type { FC, HTMLAttributes, ComponentProps } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Link from 'next/link';
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
  const { onClick: _, ...rest } = props;
  const { label, logo, link } = option as { label: string; logo: string; link: NetworkLink };
  return (
    <Link href={link.url} key={label}>
      <MenuItem {...rest} title={link.url}>
        <Image alt={label} src={logo} width="16" height="16" unoptimized />
        {label}
      </MenuItem>
    </Link>
  );
};

const SearchBox: FC<SearchBoxProps> = ({ options }) => {
  const { t } = useTranslation('common');
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
    />
  );
};
export default SearchBox;
