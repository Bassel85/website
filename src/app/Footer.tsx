import React from 'react';

import Flex from '../components/Flex';
import Link from '../components/Link';
import { AIRSWAP_PRIVACY_URL, AIRSWAP_SUPPORT_URL, AIRSWAP_TERMS_URL } from '../constants';
import { ReactComponent as AirswapLogo } from '../static/airswap-logo.svg';
import { AirswapLogoContainer, FooterContainer, LinkContainer, LinkText } from './styles';

interface LinkProps {
  label: string;
  url: string;
}

function FooterLink(props: LinkProps) {
  return (
    <Flex align="flex-start" direction="row">
      <Link url={props.url}>
        <LinkText>{props.label}</LinkText>
      </Link>
    </Flex>
  );
}

export default function Header() {
  return (
    <FooterContainer>
      <LinkContainer>
        <FooterLink label="SUPPORT" url={AIRSWAP_SUPPORT_URL} />
        <FooterLink label="PRIVACY" url={AIRSWAP_PRIVACY_URL} />
        <FooterLink label="TERMS" url={AIRSWAP_TERMS_URL} />
        <LinkText>COPYRIGHT 2021</LinkText>
      </LinkContainer>
      <AirswapLogoContainer>
        <AirswapLogo height={32} />
      </AirswapLogoContainer>
    </FooterContainer>
  );
}
