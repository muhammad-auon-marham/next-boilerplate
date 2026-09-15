'use client';

import { mergeClasses } from 'minimal-shared/utils';

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

import { logoClasses } from './classes';

// ----------------------------------------------------------------------

/**
 * Marham brand logo (navy mark with a teal M).
 *
 * - `isSingle` (default): the round mark, `public/logo/logo-single.png` (128×128).
 * - `isSingle={false}`: the full wordmark, `public/logo/logo-full.png` (406×96).
 */
export function Logo({ sx, disabled, className, href = '/', isSingle = true, ...other }) {
  const singleLogo = (
    <img
      alt="Marham"
      src={`${CONFIG.assetsDir}/logo/logo-single.png`}
      width="100%"
      height="100%"
      style={{ objectFit: 'contain' }}
    />
  );

  const fullLogo = (
    <img
      alt="Marham"
      src={`${CONFIG.assetsDir}/logo/logo-full.png`}
      width="100%"
      height="100%"
      style={{ objectFit: 'contain' }}
    />
  );

  return (
    <LogoRoot
      component={RouterLink}
      href={href}
      aria-label="Marham"
      underline="none"
      className={mergeClasses([logoClasses.root, className])}
      sx={[
        {
          width: 40,
          height: 40,
          ...(!isSingle && { width: 136, height: 32 }),
          ...(disabled && { pointerEvents: 'none' }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isSingle ? singleLogo : fullLogo}
    </LogoRoot>
  );
}

// ----------------------------------------------------------------------

const LogoRoot = styled(Link)(() => ({
  flexShrink: 0,
  color: 'transparent',
  display: 'inline-flex',
  verticalAlign: 'middle',
}));
