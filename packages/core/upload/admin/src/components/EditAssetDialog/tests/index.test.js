/**
 *
 * Tests for EditAssetDialog
 *
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, lightTheme } from '@strapi/design-system';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NotificationsProvider } from '@strapi/helper-plugin';
import { EditAssetDialog } from '../index';
import en from '../../../translations/en.json';
import { downloadFile } from '../../../utils/downloadFile';

jest.mock('../../../utils/downloadFile');

const messageForPlugin = Object.keys(en).reduce((acc, curr) => {
  acc[curr] = `upload.${en[curr]}`;

  return acc;
}, {});

const asset = {
  id: 8,
  name: 'Screenshot 2.png',
  alternativeText: null,
  caption: null,
  width: 1476,
  height: 780,
  formats: {
    thumbnail: {
      name: 'thumbnail_Screenshot 2.png',
      hash: 'thumbnail_Screenshot_2_5d4a574d61',
      ext: '.png',
      mime: 'image/png',
      width: 245,
      height: 129,
      size: 10.7,
      path: null,
      url: '/uploads/thumbnail_Screenshot_2_5d4a574d61.png',
    },
    large: {
      name: 'large_Screenshot 2.png',
      hash: 'large_Screenshot_2_5d4a574d61',
      ext: '.png',
      mime: 'image/png',
      width: 1000,
      height: 528,
      size: 97.1,
      path: null,
      url: '/uploads/large_Screenshot_2_5d4a574d61.png',
    },
    medium: {
      name: 'medium_Screenshot 2.png',
      hash: 'medium_Screenshot_2_5d4a574d61',
      ext: '.png',
      mime: 'image/png',
      width: 750,
      height: 396,
      size: 58.7,
      path: null,
      url: '/uploads/medium_Screenshot_2_5d4a574d61.png',
    },
    small: {
      name: 'small_Screenshot 2.png',
      hash: 'small_Screenshot_2_5d4a574d61',
      ext: '.png',
      mime: 'image/png',
      width: 500,
      height: 264,
      size: 31.06,
      path: null,
      url: '/uploads/small_Screenshot_2_5d4a574d61.png',
    },
  },
  hash: 'Screenshot_2_5d4a574d61',
  ext: '.png',
  mime: 'image/png',
  size: 102.01,
  url: '/uploads/Screenshot_2_5d4a574d61.png',
  previewUrl: null,
  provider: 'local',
  provider_metadata: null,
  createdAt: '2021-10-04T09:42:31.670Z',
  updatedAt: '2021-10-04T09:42:31.670Z',
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const renderCompo = (toggleNotification = jest.fn()) =>
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <NotificationsProvider toggleNotification={toggleNotification}>
          <IntlProvider locale="en" messages={messageForPlugin} defaultLocale="en">
            <EditAssetDialog asset={asset} onClose={jest.fn()} canUpdate canCopyLink canDownload />
          </IntlProvider>
        </NotificationsProvider>
      </ThemeProvider>
    </QueryClientProvider>,
    { container: document.body }
  );

describe('<EditAssetDialog />', () => {
  const RealNow = Date.now;

  beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2021-09-20').getTime());
  });

  afterAll(() => {
    global.Date.now = RealNow;
  });

  it('renders and matches the snapshot', () => {
    const { container } = renderCompo();

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .c15 {
        background: #eaeaef;
        border-radius: 4px;
        border-color: #dcdce4;
        border: 1px solid #dcdce4;
      }

      .c27 {
        background: #f6f6f9;
        padding-top: 16px;
        padding-right: 24px;
        padding-bottom: 16px;
        padding-left: 24px;
        border-radius: 4px;
      }

      .c47 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #32324d;
      }

      .c44 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        outline: none;
      }

      .c44 svg {
        height: 12px;
        width: 12px;
      }

      .c44 svg > g,
      .c44 svg path {
        fill: #ffffff;
      }

      .c44[aria-disabled='true'] {
        pointer-events: none;
      }

      .c44:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c44:focus-visible {
        outline: none;
      }

      .c44:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c45 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 8px 16px;
        background: #4945ff;
        border: none;
        border: 1px solid #dcdce4;
        background: #ffffff;
      }

      .c45 .sc-lhuRmv {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c45 .c46 {
        color: #ffffff;
      }

      .c45[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c45[aria-disabled='true'] .c46 {
        color: #666687;
      }

      .c45[aria-disabled='true'] svg > g,
      .c45[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c45[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c45[aria-disabled='true']:active .c46 {
        color: #666687;
      }

      .c45[aria-disabled='true']:active svg > g,
      .c45[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c45:hover {
        background-color: #f6f6f9;
      }

      .c45:active {
        background-color: #eaeaef;
      }

      .c45 .c46 {
        color: #32324d;
      }

      .c45 svg > g,
      .c45 svg path {
        fill: #32324d;
      }

      .c48 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 8px 16px;
        background: #4945ff;
        border: none;
        border: 1px solid #d9d8ff;
        background: #f0f0ff;
      }

      .c48 .sc-lhuRmv {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c48 .c46 {
        color: #ffffff;
      }

      .c48[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c48[aria-disabled='true'] .c46 {
        color: #666687;
      }

      .c48[aria-disabled='true'] svg > g,
      .c48[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c48[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c48[aria-disabled='true']:active .c46 {
        color: #666687;
      }

      .c48[aria-disabled='true']:active svg > g,
      .c48[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c48:hover {
        background-color: #ffffff;
      }

      .c48:active {
        background-color: #ffffff;
        border: 1px solid #4945ff;
      }

      .c48:active .c46 {
        color: #4945ff;
      }

      .c48:active svg > g,
      .c48:active svg path {
        fill: #4945ff;
      }

      .c48 .c46 {
        color: #271fe0;
      }

      .c48 svg > g,
      .c48 svg path {
        fill: #271fe0;
      }

      .c49 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 8px 16px;
        background: #4945ff;
        border: none;
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c49 .sc-lhuRmv {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c49 .c46 {
        color: #ffffff;
      }

      .c49[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c49[aria-disabled='true'] .c46 {
        color: #666687;
      }

      .c49[aria-disabled='true'] svg > g,
      .c49[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c49[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c49[aria-disabled='true']:active .c46 {
        color: #666687;
      }

      .c49[aria-disabled='true']:active svg > g,
      .c49[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c49:hover {
        border: 1px solid #7b79ff;
        background: #7b79ff;
      }

      .c49:active {
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c17 {
        padding-right: 12px;
        padding-left: 12px;
      }

      .c25 {
        padding-right: 8px;
        padding-left: 8px;
      }

      .c18 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c50 {
        background: #212134;
        padding: 8px;
        border-radius: 4px;
      }

      .c52 {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #ffffff;
      }

      .c51 {
        position: absolute;
        z-index: 4;
        display: none;
      }

      .c22 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        outline: none;
      }

      .c22 svg {
        height: 12px;
        width: 12px;
      }

      .c22 svg > g,
      .c22 svg path {
        fill: #ffffff;
      }

      .c22[aria-disabled='true'] {
        pointer-events: none;
      }

      .c22:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c22:focus-visible {
        outline: none;
      }

      .c22:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c23 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
      }

      .c23 svg > g,
      .c23 svg path {
        fill: #8e8ea9;
      }

      .c23:hover svg > g,
      .c23:hover svg path {
        fill: #666687;
      }

      .c23:active svg > g,
      .c23:active svg path {
        fill: #a5a5ba;
      }

      .c23[aria-disabled='true'] {
        background-color: #eaeaef;
      }

      .c23[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c20 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c26 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c26 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c26 > * + * {
        margin-top: 12px;
      }

      .c28 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c28 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c28 > * + * {
        margin-top: 4px;
      }

      .c21 > * {
        margin-left: 0;
        margin-right: 0;
      }

      .c21 > * + * {
        margin-left: 4px;
      }

      .c32 {
        font-size: 0.75rem;
        line-height: 1.33;
        color: #4a4a6a;
        text-transform: uppercase;
      }

      .c7 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #32324d;
      }

      .c29 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #666687;
      }

      .c31 {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #4a4a6a;
      }

      .c8 {
        font-weight: 600;
        line-height: 1.14;
      }

      .c30 {
        font-weight: 600;
        font-size: 0.6875rem;
        line-height: 1.45;
        text-transform: uppercase;
      }

      .c35 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #32324d;
      }

      .c39 {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #666687;
      }

      .c34 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c36 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c38 {
        border: none;
        border-radius: 4px;
        padding-left: 16px;
        padding-right: 16px;
        color: #32324d;
        font-weight: 400;
        font-size: 0.875rem;
        display: block;
        width: 100%;
      }

      .c38::-webkit-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c38::-moz-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c38:-ms-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c38::placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c38[aria-disabled='true'] {
        background: inherit;
        color: inherit;
      }

      .c38:focus {
        outline: none;
        box-shadow: none;
      }

      .c37 {
        border: 1px solid #dcdce4;
        border-radius: 4px;
        background: #ffffff;
        height: 2rem;
        outline: none;
        box-shadow: 0;
        -webkit-transition-property: border-color,box-shadow,fill;
        transition-property: border-color,box-shadow,fill;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
      }

      .c37:focus-within {
        border: 1px solid #4945ff;
        box-shadow: #4945ff 0px 0px 0px 2px;
      }

      .c33 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c33 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c33 > * + * {
        margin-top: 4px;
      }

      .c40 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .c2 {
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0px 2px 15px rgba(33,33,52,0.1);
      }

      .c4 {
        background: #f6f6f9;
        padding-top: 16px;
        padding-right: 20px;
        padding-bottom: 16px;
        padding-left: 20px;
      }

      .c11 {
        padding-top: 24px;
        padding-right: 40px;
        padding-bottom: 24px;
        padding-left: 40px;
      }

      .c1 {
        position: fixed;
        z-index: 4;
        inset: 0;
        background: rgb(220,220,228,0.8);
        padding: 0 40px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c3 {
        width: 51.875rem;
      }

      .c6 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c42 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c9 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        outline: none;
      }

      .c9 svg {
        height: 12px;
        width: 12px;
      }

      .c9 svg > g,
      .c9 svg path {
        fill: #ffffff;
      }

      .c9[aria-disabled='true'] {
        pointer-events: none;
      }

      .c9:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c9:focus-visible {
        outline: none;
      }

      .c9:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c10 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
      }

      .c10 svg > g,
      .c10 svg path {
        fill: #8e8ea9;
      }

      .c10:hover svg > g,
      .c10:hover svg path {
        fill: #666687;
      }

      .c10:active svg > g,
      .c10:active svg path {
        fill: #a5a5ba;
      }

      .c10[aria-disabled='true'] {
        background-color: #eaeaef;
      }

      .c10[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c5 {
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid #eaeaef;
      }

      .c41 {
        border-radius: 0 0 4px 4px;
        border-top: 1px solid #eaeaef;
      }

      .c43 > * + * {
        margin-left: 8px;
      }

      .c12 {
        overflow: auto;
        max-height: 60vh;
      }

      .c13 {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        gap: 16px;
      }

      .c14 {
        grid-column: span 6;
      }

      .c16 {
        position: relative;
      }

      .c24 {
        position: relative;
        text-align: center;
        background: repeating-conic-gradient( #f6f6f9 0% 25%, transparent 0% 50% ) 50% / 20px 20px;
      }

      .c24 svg {
        font-size: 3rem;
        height: 16.5rem;
      }

      .c24 img,
      .c24 video {
        margin: 0;
        padding: 0;
        max-height: 16.5rem;
        max-width: 100%;
      }

      .c19 {
        height: 3.25rem;
      }

      @media (max-width:68.75rem) {
        .c14 {
          grid-column: span;
        }
      }

      @media (max-width:34.375rem) {
        .c14 {
          grid-column: span 12;
        }
      }

      <body
        class="lock-body-scroll"
      >
        <div
          class="c0"
        >
          <p
            aria-live="polite"
            aria-relevant="all"
            id="live-region-log"
            role="log"
          />
          <p
            aria-live="polite"
            aria-relevant="all"
            id="live-region-status"
            role="status"
          />
          <p
            aria-live="assertive"
            aria-relevant="all"
            id="live-region-alert"
            role="alert"
          />
        </div>
        <div
          data-react-portal="true"
        >
          <div
            class="c1"
          >
            <div>
              <div
                aria-labelledby="title"
                aria-modal="true"
                class="c2 c3"
                role="dialog"
              >
                <div
                  class="c4 c5"
                >
                  <div
                    class="c6"
                  >
                    <h2
                      class="c7 c8"
                      id="title"
                    >
                      Details
                    </h2>
                    <button
                      aria-disabled="false"
                      aria-label="Close the modal"
                      class="c9 c10"
                      type="button"
                    >
                      <svg
                        fill="none"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 2.417L21.583 0 12 9.583 2.417 0 0 2.417 9.583 12 0 21.583 2.417 24 12 14.417 21.583 24 24 21.583 14.417 12 24 2.417z"
                          fill="#212134"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  class="c11 c12"
                >
                  <div
                    class="c13"
                  >
                    <div
                      class="c14"
                    >
                      <div
                        class=""
                      >
                        <div
                          class="c15 c16"
                        >
                          <div
                            class="c17 c18 c19"
                          >
                            <div
                              class="c20 c21"
                            >
                              <span>
                                <button
                                  aria-disabled="false"
                                  aria-labelledby="tooltip-1"
                                  class="c22 c23"
                                  tabindex="0"
                                  type="button"
                                >
                                  <svg
                                    fill="none"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.236 6.149a.2.2 0 00-.197.233L6 24h12l2.96-17.618a.2.2 0 00-.196-.233H3.236zM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 01-.2.2H2.2a.2.2 0 01-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8z"
                                      fill="#32324D"
                                    />
                                  </svg>
                                </button>
                              </span>
                              <span>
                                <button
                                  aria-disabled="false"
                                  aria-labelledby="tooltip-3"
                                  class="c22 c23"
                                  tabindex="0"
                                  type="button"
                                >
                                  <svg
                                    fill="none"
                                    height="1em"
                                    viewBox="0 0 24 25"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clip-rule="evenodd"
                                      d="M13.571 5.85H10.43v8.47H2.487a.2.2 0 00-.14.343l9.512 9.401a.2.2 0 00.282 0l9.513-9.401a.2.2 0 00-.14-.342H13.57V5.85zM2.2 3.027a.2.2 0 01-.2-.2V.402c0-.11.09-.2.2-.2h19.6c.11 0 .2.09.2.2v2.423a.2.2 0 01-.2.2H2.2z"
                                      fill="#212134"
                                      fill-rule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </span>
                              <span>
                                <button
                                  aria-disabled="false"
                                  aria-labelledby="tooltip-5"
                                  class="c22 c23"
                                  tabindex="0"
                                  type="button"
                                >
                                  <svg
                                    fill="none"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M21.415 1.344a6.137 6.137 0 00-8.525.838L11.095 4.33a1.53 1.53 0 102.35 1.963l1.794-2.148a3.054 3.054 0 014.365-.324 3.117 3.117 0 01.255 4.301l-3.73 4.467-.035.038a3.048 3.048 0 01-4.53.078 1.531 1.531 0 00-2.241 2.086 6.114 6.114 0 009.159-.245l3.721-4.454a6.289 6.289 0 001.418-4.62 6.01 6.01 0 00-2.206-4.128z"
                                      fill="#212134"
                                    />
                                    <path
                                      d="M10.399 17.884l-1.604 1.92a3.118 3.118 0 01-4.278.513 3.052 3.052 0 01-.457-4.353l3.795-4.542.028-.031a3.042 3.042 0 014.584-.022 1.529 1.529 0 001.794.37c.197-.094.37-.228.51-.395l.018-.022a1.51 1.51 0 00-.025-1.977 6.11 6.11 0 00-9.27.126l-3.784 4.53a6.137 6.137 0 00.692 8.539 6.01 6.01 0 004.454 1.437 6.289 6.289 0 004.294-2.217l1.598-1.913a1.53 1.53 0 00-2.35-1.963z"
                                      fill="#212134"
                                    />
                                  </svg>
                                </button>
                              </span>
                              <span>
                                <button
                                  aria-disabled="false"
                                  aria-labelledby="tooltip-7"
                                  class="c22 c23"
                                  tabindex="0"
                                  type="button"
                                >
                                  <svg
                                    fill="none"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M20.571 21.429h-3.428V24h3.428v-2.571zM20.571 17.143V3.429H7.714v3.428h9.429v10.286H6.857V0H3.43v3.429H0v3.428h3.429v13.714H24v-3.428h-3.429z"
                                      fill="#212134"
                                    />
                                  </svg>
                                </button>
                              </span>
                            </div>
                          </div>
                          <div
                            class="c24"
                          >
                            <img
                              alt="Screenshot 2.png"
                              src="http://localhost:1337/uploads/Screenshot_2_5d4a574d61.png?id=1632096000000"
                            />
                          </div>
                          <div
                            class="c25 c18 c19"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="c14"
                    >
                      <div
                        class=""
                      >
                        <form
                          action="#"
                          novalidate=""
                        >
                          <div
                            class="c26"
                          >
                            <div
                              class="c27"
                            >
                              <div
                                class="c13"
                              >
                                <div
                                  class="c14"
                                >
                                  <div
                                    class=""
                                  >
                                    <div
                                      class="c28"
                                    >
                                      <span
                                        class="c29 c8 c30"
                                      >
                                        Size
                                      </span>
                                      <span
                                        class="c31"
                                      >
                                        102KB
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="c14"
                                >
                                  <div
                                    class=""
                                  >
                                    <div
                                      class="c28"
                                    >
                                      <span
                                        class="c29 c8 c30"
                                      >
                                        Date
                                      </span>
                                      <span
                                        class="c31"
                                      >
                                        10/4/2021
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="c14"
                                >
                                  <div
                                    class=""
                                  >
                                    <div
                                      class="c28"
                                    >
                                      <span
                                        class="c29 c8 c30"
                                      >
                                        Dimensions
                                      </span>
                                      <span
                                        class="c31"
                                      >
                                        780✕1476
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="c14"
                                >
                                  <div
                                    class=""
                                  >
                                    <div
                                      class="c28"
                                    >
                                      <span
                                        class="c29 c8 c30"
                                      >
                                        Extension
                                      </span>
                                      <span
                                        class="c32"
                                      >
                                        png
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div
                                  class="c33"
                                >
                                  <div
                                    class="c34"
                                  >
                                    <label
                                      class="c35"
                                      for="textinput-1"
                                    >
                                      File name
                                    </label>
                                  </div>
                                  <div
                                    class="c36 c37"
                                  >
                                    <input
                                      aria-disabled="false"
                                      aria-invalid="false"
                                      class="c38"
                                      id="textinput-1"
                                      name="name"
                                      value="Screenshot 2.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div
                                  class="c33"
                                >
                                  <div
                                    class="c34"
                                  >
                                    <label
                                      class="c35"
                                      for="textinput-2"
                                    >
                                      Alternative text
                                    </label>
                                  </div>
                                  <div
                                    class="c36 c37"
                                  >
                                    <input
                                      aria-describedby="textinput-2-hint"
                                      aria-disabled="false"
                                      aria-invalid="false"
                                      class="c38"
                                      id="textinput-2"
                                      name="alternativeText"
                                      value=""
                                    />
                                  </div>
                                  <p
                                    class="c39"
                                    id="textinput-2-hint"
                                  >
                                    This text will be displayed if the asset can’t be shown.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div
                                  class="c33"
                                >
                                  <div
                                    class="c34"
                                  >
                                    <label
                                      class="c35"
                                      for="textinput-3"
                                    >
                                      Caption
                                    </label>
                                  </div>
                                  <div
                                    class="c36 c37"
                                  >
                                    <input
                                      aria-disabled="false"
                                      aria-invalid="false"
                                      class="c38"
                                      id="textinput-3"
                                      name="caption"
                                      value=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="c40"
                          >
                            <button
                              tabindex="-1"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="c4 c41"
                >
                  <div
                    class="c6"
                  >
                    <div
                      class="c42 c43"
                    >
                      <button
                        aria-disabled="false"
                        class="c44 c45"
                        type="button"
                      >
                        <span
                          class="c46 c47"
                        >
                          Cancel
                        </span>
                      </button>
                    </div>
                    <div
                      class="c42 c43"
                    >
                      <button
                        aria-disabled="false"
                        class="c44 c48"
                        type="button"
                      >
                        <span
                          class="c46 c47"
                        >
                          Replace media
                        </span>
                      </button>
                      <div
                        class="c40"
                      >
                        <input
                          accept="image/png"
                          aria-hidden="true"
                          name="file"
                          tabindex="-1"
                          type="file"
                        />
                      </div>
                      <button
                        aria-disabled="false"
                        class="c44 c49"
                        type="button"
                      >
                        <span
                          class="c46 c47"
                        >
                          Finish
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-react-portal="true"
        >
          <div
            class="c50 c51"
            id="tooltip-1"
            role="tooltip"
          >
            <p
              class="c52"
            >
              Delete
            </p>
          </div>
        </div>
        <div
          data-react-portal="true"
        >
          <div
            class="c50 c51"
            id="tooltip-3"
            role="tooltip"
          >
            <p
              class="c52"
            >
              Download
            </p>
          </div>
        </div>
        <div
          data-react-portal="true"
        >
          <div
            class="c50 c51"
            id="tooltip-5"
            role="tooltip"
          >
            <p
              class="c52"
            >
              Copy link
            </p>
          </div>
        </div>
        <div
          data-react-portal="true"
        >
          <div
            class="c50 c51"
            id="tooltip-7"
            role="tooltip"
          >
            <p
              class="c52"
            >
              Crop
            </p>
          </div>
        </div>
      </body>
    `);
  });

  describe('PreviewBox', () => {
    it('opens the delete dialog when pressing the delete button', () => {
      renderCompo();

      fireEvent.click(screen.getByLabelText('Delete'));

      expect(screen.getByText('Confirmation')).toBeVisible();
      expect(screen.getByText('Are you sure you want to delete this?')).toBeVisible();
    });

    it('copies the link and shows a notification when pressing "Copy link"', () => {
      const toggleNotificationSpy = jest.fn();
      renderCompo(toggleNotificationSpy);

      fireEvent.click(screen.getByLabelText('Copy link'));

      expect(toggleNotificationSpy).toHaveBeenCalledWith({
        message: {
          defaultMessage: 'Link copied into the clipboard',
          id: 'notification.link-copied',
        },
        type: 'success',
      });
    });

    it('downloads the file when pressing "Download"', () => {
      renderCompo();

      fireEvent.click(screen.getByLabelText('Download'));
      expect(downloadFile).toHaveBeenCalledWith(
        'http://localhost:1337/uploads/Screenshot_2_5d4a574d61.png?id=1632096000000',
        'Screenshot 2.png'
      );
    });
  });
});
