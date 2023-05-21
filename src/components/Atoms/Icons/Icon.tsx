import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const iconMap = {
	moreIcon: MoreHorizIcon,
	starOutlined: StarBorderIcon,
	starFilled: StarRateIcon,
	radioUnchecked: RadioButtonUncheckedIcon,
	radioChecked: CheckCircleIcon,
};

type IconProps = {
	name: keyof typeof iconMap;
};

const Icon = ({ name, ...props }: IconProps) => {
	const Icons = iconMap[name];
	return <Icons {...props}>Icon</Icons>;
};

export default Icon;
