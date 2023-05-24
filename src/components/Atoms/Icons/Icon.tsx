import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';

const iconMap = {
	moreIcon: MoreHorizIcon,
	starOutlined: StarBorderIcon,
	starFilled: StarRateIcon,
	radioUnchecked: RadioButtonUncheckedIcon,
	radioChecked: CheckCircleIcon,
	search: SearchIcon,
};

type IconProps = {
	name: keyof typeof iconMap;
	color?: 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};

const Icon = ({ name, color }: IconProps) => {
	const Icons = iconMap[name];
	return <Icons color={color} />;
};

export default Icon;
