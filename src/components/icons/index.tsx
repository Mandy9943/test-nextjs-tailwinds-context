// from svg to react component

interface ISvgIconProps {
  className?: string;
}

export const DesignIcon = (props: ISvgIconProps) => (
  <svg
    width="97"
    height="95"
    viewBox="0 0 97 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M84.8877 51.993C84.0957 52.0586 83.5796 52.6908 83.5365 53.6596C83.5214 53.9661 83.5315 54.2753 83.5315 54.5819C83.5315 64.9922 83.534 75.4053 83.5289 85.8156C83.5289 89.3459 81.6185 91.4313 78.3645 91.434C54.9764 91.4395 31.5884 91.4395 8.20036 91.434C4.89825 91.4313 3.0587 89.4171 3.0587 85.8293C3.05617 69.0698 3.05617 52.3077 3.05617 35.5483V34.418H4.32134C17.0085 34.418 29.6982 34.4207 42.3854 34.418C42.7017 34.418 43.0205 34.4426 43.3318 34.3988C44.1567 34.2812 44.7716 33.4301 44.726 32.5051C44.683 31.6457 44.101 31.0218 43.2559 30.9479C42.9725 30.926 42.6865 30.9424 42.4031 30.9424C29.6831 30.9397 16.963 30.9397 4.24292 30.9397H3.05617C3.05617 28.2112 3.16498 25.584 3.03087 22.9705C2.84362 19.3362 5.22469 16.9744 8.50402 16.9963C21.4771 17.0839 34.4502 17.0319 47.4208 17.0319C47.7371 17.0319 48.0534 17.0483 48.3672 17.0209C49.2351 16.947 49.8652 16.23 49.8525 15.3598C49.8424 14.5087 49.273 13.871 48.4076 13.7725C48.0939 13.7369 47.7776 13.7561 47.4613 13.7561H17.4463C14.3213 13.7561 11.1963 13.7314 8.07131 13.7615C4.15939 13.7999 1.12551 16.4325 0.206989 20.5294C0.163973 20.7237 0.0880722 20.9125 0.0273438 21.1041V87.8845C0.100724 88.139 0.189287 88.3881 0.250016 88.6453C1.02683 92.0196 3.5243 94.5073 6.71001 94.967C7.47165 95.0765 8.26617 94.8795 9.04805 94.8795C32.0565 94.874 55.065 94.8795 78.076 94.874C83.2303 94.874 86.5578 91.2917 86.5603 85.739C86.5654 75.293 86.5628 64.8471 86.5603 54.4012C86.5603 54.0947 86.5805 53.7827 86.5375 53.4817C86.4034 52.5622 85.6848 51.9273 84.8877 51.993Z"
      fill="currentColor"
    />
    <path
      d="M94.2571 21.717C93.1792 21.4652 92.0886 21.2463 90.993 21.1204C90.1605 21.0273 89.7986 20.5484 89.4039 19.7958C88.746 18.5479 88.9383 17.6092 89.8062 16.6349C90.2844 16.1013 90.7247 15.491 91.0511 14.8369C91.4737 13.9886 91.7672 13.0636 92.1265 12.1495C91.8103 11.23 91.6964 10.3077 91.2359 9.69199C90.3705 8.53164 89.3887 7.43423 88.3032 6.52018C86.9216 5.35435 85.1782 5.48571 83.7359 6.62965C82.8452 7.33571 81.9773 8.07735 81.079 8.76973C80.1453 9.49221 78.0477 8.52069 77.8554 7.2974C77.6681 6.08778 77.4986 4.8727 77.3012 3.66309C76.952 1.52848 75.3427 0.0534058 73.3235 0.0068822C72.6934 -0.00680119 72.0608 0.00414546 71.4308 0.00414546C68.8043 0.00961882 67.1115 1.59142 66.7167 4.4102C66.656 4.84807 66.532 5.28594 66.5346 5.72381C66.5447 7.47528 65.8185 8.54532 64.2421 9.08718C63.6373 9.29517 63.2755 9.28149 62.815 8.8573C61.9977 8.10745 61.15 7.39318 60.2871 6.7008C58.7209 5.44193 56.6864 5.5596 55.2517 6.98541C54.647 7.58475 54.065 8.21145 53.5083 8.86551C51.9952 10.6416 51.899 12.9076 53.23 14.8315C53.7943 15.6525 54.3636 16.4707 54.9304 17.289C55.7679 18.4986 54.8722 20.8275 53.4704 21.082C52.3823 21.2791 51.2892 21.446 50.2087 21.6841C48.2502 22.1138 47.0408 23.7175 47.0003 25.8877C46.9826 26.8072 46.9851 27.7294 47.0003 28.6517C47.0357 30.9368 48.3641 32.5925 50.4466 32.9702C51.4714 33.1563 52.4936 33.3998 53.526 33.5093C54.2396 33.5887 54.5989 33.9636 54.7988 34.6478C54.895 34.9707 55.0088 35.3018 55.1809 35.581C55.5427 36.1721 55.4036 36.6483 55.0291 37.1573C54.4015 38.0139 53.7993 38.8896 53.2123 39.779C51.9344 41.7111 52.0837 43.9443 53.6019 45.6547C54.146 46.2704 54.7077 46.8698 55.2796 47.4609C56.818 49.0509 58.903 49.2233 60.6363 47.8906C61.484 47.2365 62.2988 46.5332 63.1414 45.8709C64.1737 45.0608 66.2664 46.0105 66.4764 47.3788C66.6712 48.6568 66.8154 49.9458 67.0659 51.2129C67.4379 53.0875 68.9232 54.434 70.6919 54.5352C71.6358 54.5872 72.5872 54.5872 73.531 54.5407C75.4591 54.4449 76.9647 52.9671 77.3063 50.8927C77.4277 50.1538 77.6352 49.4122 77.6327 48.6733C77.6276 46.9355 78.3462 45.8545 79.9024 45.4795C80.244 45.3974 80.7172 45.4084 80.9854 45.6082C81.8938 46.2814 82.7237 47.0778 83.6043 47.7975C85.1934 49.0947 87.0203 49.0673 88.5765 47.7565C89.1508 47.2748 89.7303 46.8041 90.3148 46.3389C92.2935 44.768 92.6858 42.0997 91.2409 39.9432C90.6311 39.0292 89.9833 38.148 89.3735 37.2339C88.6549 36.1502 89.5026 33.7967 90.702 33.5504C91.8482 33.3177 93.0122 33.17 94.1508 32.9018C96.0486 32.4557 97 31.1421 97 29.0896V25.4033C97 23.4684 96.0309 22.1329 94.2571 21.717ZM93.6524 27.6829V27.7842C93.6524 29.6999 93.6524 29.7053 91.9418 30.0392C91.0739 30.2061 90.2009 30.3539 89.3305 30.5154C89.1458 30.551 88.9586 30.592 88.7814 30.6577C86.1195 31.621 84.6063 36.4102 86.1954 38.9088C86.8735 39.9761 87.6023 41.0106 88.3462 42.0259C88.7966 42.6443 88.8168 43.1424 88.2703 43.7116C85.7172 46.3744 86.58 46.2486 83.8725 44.1304C83.3614 43.7308 82.8756 43.2875 82.3391 42.9317C81.0689 42.0888 79.8037 42.1654 78.3665 42.6526C75.4844 43.6268 74.4723 45.7614 74.1965 48.8238C73.9561 51.4729 74.3609 51.2895 71.5902 51.284C70.1859 51.2813 70.1175 51.2047 69.9126 49.7241C69.7532 48.5775 69.6039 47.4281 69.3736 46.2978C69.0725 44.8036 68.1717 43.895 66.9495 43.1068C64.2851 41.3937 62.071 41.9465 59.7988 44.0154C57.6379 45.9776 58.1237 45.9256 56.0766 43.739C55.0898 42.6854 55.0847 42.5376 55.902 41.3526C56.5245 40.4495 57.1697 39.5628 57.7669 38.6433C58.7208 37.1737 58.6247 35.6932 58.1237 33.9937C57.2381 30.997 55.358 29.9352 52.6404 29.6041C50.1227 29.2976 50.3479 29.7847 50.3429 26.6922C50.3403 25.0201 50.3454 25.0256 51.8332 24.7629C52.8277 24.585 53.8221 24.4016 54.8115 24.1882C55.1455 24.1143 55.482 23.9857 55.7831 23.8105C58.2882 22.3491 59.2522 17.6804 57.562 15.2338C56.9597 14.358 56.3626 13.4768 55.735 12.623C55.3277 12.0647 55.3707 11.6213 55.8135 11.0986C57.1883 9.47671 58.6896 9.32527 60.3175 10.6444C61.4005 11.5228 62.4303 12.5929 63.9055 12.4889C65.7122 12.3575 67.3367 11.5912 68.6423 10.2475C69.1029 9.77135 69.3711 8.97224 69.5229 8.27165C69.7532 7.17972 69.8417 6.04673 69.9278 4.92743C69.9986 4.02706 70.3073 3.59193 71.2208 3.60835C74.3306 3.66582 73.741 3.30458 74.2673 6.44355C74.3964 7.2153 74.4698 8.00072 74.6494 8.75878C74.9834 10.1572 75.7476 11.2054 77.0229 11.7336C77.9591 12.1222 78.8903 12.5737 79.8645 12.7981C80.8538 13.0253 81.7977 12.6476 82.6048 11.9634C83.4753 11.2273 84.3584 10.5103 85.201 9.74125C85.7526 9.24044 86.203 9.30338 86.6838 9.82609C89.1382 12.5108 89.0243 11.7965 87.0937 14.6071C86.2409 15.8468 85.2212 17.0537 85.4565 18.7148C85.8437 21.4679 87.0355 24.8587 90.1832 24.9025C90.9018 24.9107 91.6179 25.1269 92.3315 25.261C93.627 25.5045 93.6473 25.5346 93.6524 26.9659C93.6524 27.204 93.6524 27.4421 93.6524 27.6829Z"
      fill="currentColor"
    />
    <path
      d="M15.5633 64.0944C22.666 64.1026 29.7687 64.1026 36.8689 64.0944C40.0394 64.0916 41.9954 61.9762 42.0081 58.528C42.0232 54.0891 42.0232 49.6529 42.0081 45.214C41.9954 41.7467 40.0799 39.6914 36.8664 39.6805C33.3289 39.6695 29.794 39.6777 26.2591 39.6777C22.7242 39.6777 19.1261 39.6668 15.5608 39.6805C12.4156 39.6941 10.4773 41.785 10.4697 45.1675C10.4596 49.6392 10.4596 54.111 10.4697 58.5827C10.4773 61.9434 12.4586 64.0889 15.5633 64.0944ZM15.7658 42.9563C19.2678 42.9508 22.7672 42.9563 26.2667 42.9563C29.7662 42.9563 33.2682 42.9535 36.7677 42.9563C38.2378 42.959 38.8249 43.5884 38.8274 45.1867C38.835 49.6557 38.8375 54.1219 38.8274 58.5909C38.8274 60.0468 38.2707 60.6352 36.9246 60.638C29.7991 60.6434 22.6711 60.6434 15.5456 60.638C14.202 60.6352 13.6681 60.0496 13.6656 58.58C13.6605 54.111 13.6631 49.642 13.6631 45.1757C13.6656 43.4489 14.1261 42.959 15.7658 42.9563Z"
      fill="currentColor"
    />
    <path
      d="M11.3304 72.2962C10.4296 72.3509 9.71101 73.1007 9.72619 73.9601C9.73884 74.8112 10.3866 75.4817 11.2849 75.561C11.5025 75.5802 11.7252 75.5692 11.9453 75.5692C32.8738 75.5692 53.7999 75.5692 74.7259 75.5665C75.0118 75.5665 75.3003 75.5884 75.5786 75.5446C76.4288 75.405 77.0209 74.6333 76.9652 73.7712C76.9096 72.9174 76.3251 72.3482 75.4369 72.2962C75.1535 72.2797 74.8676 72.2907 74.5842 72.2907H12.1831C11.8972 72.2907 11.6138 72.2797 11.3304 72.2962Z"
      fill="currentColor"
    />
    <path
      d="M75.3581 83.1116C75.0443 83.0952 74.7281 83.1061 74.4118 83.1061H12.2031C11.8564 83.1061 11.5072 83.0897 11.1631 83.1307C10.361 83.2265 9.68285 83.96 9.73092 84.7509C9.78153 85.6375 10.237 86.2068 11.072 86.3381C11.4136 86.3929 11.7653 86.3819 12.112 86.3819H74.6041C74.8875 86.3819 75.1734 86.3983 75.4568 86.3655C76.3854 86.256 77.0104 85.5199 76.9649 84.6113C76.9168 83.7164 76.3323 83.1636 75.3581 83.1116Z"
      fill="currentColor"
    />
    <path
      d="M50.0396 63.1338C50.0447 64.1327 50.7506 64.7347 51.9551 64.7347C59.6549 64.7375 67.3523 64.7375 75.0521 64.7347C76.2237 64.7347 76.9448 64.1135 76.9676 63.1174C76.9929 62.061 76.2971 61.4617 75.0218 61.4617C71.2035 61.4562 67.3852 61.4589 63.5694 61.4589C59.7536 61.4589 55.8695 61.4562 52.0209 61.4617C50.8164 61.4617 50.032 62.1322 50.0396 63.1338Z"
      fill="currentColor"
    />
    <path
      d="M12.0618 22.4995C11.4318 22.4995 10.7967 22.4393 10.1742 22.516C9.38978 22.609 8.91155 23.1755 8.85082 24.0047C8.79009 24.8449 9.18481 25.5674 9.97428 25.633C11.3154 25.7425 12.6792 25.7452 14.0203 25.6303C14.8022 25.5619 15.2045 24.8476 15.1564 24.0047C15.1084 23.1673 14.6605 22.5953 13.8559 22.5105C13.2638 22.4503 12.6615 22.4995 12.0618 22.4995Z"
      fill="currentColor"
    />
    <path
      d="M17.6993 22.4996C16.8718 22.5379 16.2772 23.2658 16.2671 24.0951C16.2544 24.9571 16.7934 25.6166 17.6638 25.7124C18.2256 25.7726 18.7974 25.7234 19.3642 25.7234V25.7097C19.9917 25.7097 20.6269 25.7699 21.2493 25.696C22.1021 25.592 22.6334 24.886 22.5702 24.013C22.5044 23.1126 22.0363 22.5406 21.1937 22.5023C20.0297 22.4503 18.8607 22.4476 17.6993 22.4996Z"
      fill="currentColor"
    />
    <path
      d="M28.8154 25.6577C29.6479 25.5017 30.0477 24.8613 29.9844 23.961C29.9262 23.1016 29.4581 22.5461 28.6611 22.5105C27.4667 22.453 26.2673 22.4476 25.073 22.5105C24.2608 22.5516 23.6586 23.3233 23.694 24.1498C23.7345 25.0666 24.2279 25.6002 25.0452 25.7015C25.6373 25.7726 26.2395 25.7152 26.8392 25.7152V25.7781C27.4996 25.7453 28.1702 25.7781 28.8154 25.6577Z"
      fill="currentColor"
    />
    <path
      d="M53.1975 50.6381C52.8862 50.6108 52.5699 50.6272 52.2562 50.6272C50.8493 50.6272 50.0042 51.2895 50.0371 52.354C50.07 53.4104 50.7759 53.903 52.2638 53.903C52.5471 53.903 52.8305 53.9167 53.1114 53.903C54.0097 53.851 54.7283 53.1176 54.7258 52.261C54.7258 51.4181 54.0806 50.723 53.1975 50.6409V50.6381Z"
      fill="currentColor"
    />
    <path
      d="M72.1654 16.2193C66.5809 16.2083 61.9706 21.2027 61.9883 27.2399C62.0086 33.3016 66.6163 38.2194 72.2261 38.1647C77.8435 38.1072 82.3045 33.2305 82.2792 27.1742C82.2539 21.1234 77.7372 16.2302 72.1654 16.2193ZM72.1173 34.752C68.2636 34.7219 65.1639 31.3312 65.1816 27.166C65.1993 23.0007 68.337 19.6483 72.1958 19.6729C75.9457 19.6976 79.1137 23.1403 79.1213 27.1988C79.1315 31.2847 75.8876 34.7794 72.1173 34.752Z"
      fill="currentColor"
    />
  </svg>
);

export const AngleLeft = (props: ISvgIconProps) => {
  return (
    <svg
      width="20"
      height="33"
      viewBox="0 0 20 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector"
        d="M18 2L2.78402 14.9783C1.84788 15.7768 1.84788 17.2232 2.78402 18.0217L18 31"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const AngleRight = (props: ISvgIconProps) => {
  return (
    <svg
      width="20"
      height="33"
      viewBox="0 0 20 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector"
        d="M2 31L17.216 18.0217C18.1521 17.2232 18.1521 15.7768 17.216 14.9783L2 2"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const ArrowRight = (props: ISvgIconProps) => {
  return (
    <svg
      width="28"
      height="21"
      viewBox="0 0 28 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontSize: "24px" }} // set the font size to 24px
      {...props}
    >
      <path
        id="Vector"
        d="M17.7165 1L27 10.5L17.7165 20M1 10.5H26.74"
        stroke="currentColor"
        strokeWidth="2" // use camelCase for the strokeWidth prop
        strokeMiterlimit="10" // use camelCase for the strokeMiterlimit prop
        strokeLinecap="round" // use camelCase for the strokeLinecap prop
        strokeLinejoin="round" // use camelCase for the strokeLinejoin prop
      />
    </svg>
  );
};