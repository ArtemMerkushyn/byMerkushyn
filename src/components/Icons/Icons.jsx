import PropTypes from 'prop-types';

const Icons = ({ icon }) => {
  const icons = {
    gitHub: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Created with Pixso.</desc>
          <defs>
            <clipPath id="clip1386_444">
              <rect
                id="Frame"
                rx="0" // Изменено значение на 0
                width="27"
                height="27"
                transform="translate(0.5 0.5)"
                fill="white"
                fillOpacity="0"
              />
            </clipPath>
          </defs>
          <rect
            id="Frame"
            rx="0" // Изменено значение на 0
            width="27"
            height="27"
            transform="translate(0.5 0.5)"
            fill="#FFFFFF"
            fillOpacity="0"
          />
          <g clipPath="url(#clip1386_444)">
            <path
              id="Vector"
              d="M13.99 0.46C6.52 0.46 0.46 6.52 0.46 14C0.46 19.97 4.34 25.05 9.72 26.84C10.39 26.96 10.64 26.54 10.64 26.18C10.64 25.86 10.63 25.01 10.62 23.88C6.86 24.7 6.06 22.07 6.06 22.07C5.45 20.5 4.56 20.09 4.56 20.09C3.33 19.25 4.65 19.27 4.65 19.27C6.01 19.36 6.73 20.66 6.73 20.66C7.93 22.73 9.89 22.13 10.67 21.79C10.79 20.91 11.14 20.31 11.52 19.98C8.52 19.63 5.36 18.47 5.36 13.29C5.36 11.81 5.89 10.6 6.75 9.66C6.61 9.31 6.15 7.94 6.89 6.07C6.89 6.07 8.02 5.71 10.61 7.46C11.69 7.16 12.84 7.01 14 7.01C15.15 7.01 16.3 7.16 17.38 7.46C19.97 5.71 21.1 6.07 21.1 6.07C21.84 7.94 21.38 9.31 21.24 9.66C22.1 10.6 22.63 11.81 22.63 13.29C22.63 18.49 19.46 19.63 16.45 19.97C16.93 20.38 17.37 21.21 17.37 22.47C17.37 24.28 17.35 25.74 17.35 26.18C17.35 26.55 17.59 26.97 18.28 26.84C23.65 25.04 27.53 19.97 27.53 14C27.53 6.52 21.47 0.46 13.99 0.46Z"
              fillOpacity="1"
              fillRule="evenodd"
            />
          </g>
        </svg>
      ),
      whatsapp: (
        <svg width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <desc>
                    Created with Pixso.
            </desc>
            <defs>
                <clipPath id="clip1370_1336">
                    <rect width="35.000000" height="35.000000" transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0"/>
                </clipPath>
            </defs>
            <rect width="35.000000" height="35.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fillOpacity="0"/>
            <g clipPath="url(#clip1370_1336)">
                <path d="M25.93 21.58C25.59 21.41 23.37 20.39 23.03 20.22C22.69 20.05 22.35 20.05 22 20.39C21.66 20.73 20.98 21.75 20.64 22.09C20.47 22.43 20.12 22.43 19.78 22.26C18.59 21.75 17.39 21.07 16.37 20.22C15.51 19.37 14.66 18.35 13.98 17.33C13.81 16.99 13.98 16.65 14.15 16.48C14.32 16.31 14.49 15.97 14.83 15.8C15 15.63 15.17 15.29 15.17 15.13C15.34 14.96 15.34 14.62 15.17 14.45C15 14.28 14.15 12.24 13.81 11.39C13.63 10.2 13.29 10.2 12.95 10.2C12.78 10.2 12.44 10.2 12.1 10.2C11.76 10.2 11.24 10.54 11.07 10.71C10.05 11.73 9.54 12.92 9.54 14.28C9.71 15.8 10.22 17.33 11.24 18.69C13.12 21.41 15.51 23.61 18.42 24.97C19.27 25.31 19.95 25.65 20.81 25.82C21.66 26.16 22.52 26.16 23.54 25.99C24.74 25.82 25.76 24.97 26.44 23.95C26.79 23.27 26.79 22.6 26.62 21.92C26.62 21.92 26.27 21.75 25.93 21.58ZM30.2 6.13C23.54 -0.5 12.78 -0.5 6.12 6.13C0.65 11.56 -0.37 19.88 3.39 26.5L1 35.16L10.05 32.78C12.61 34.14 15.34 34.82 18.08 34.82C27.47 34.82 34.98 27.35 34.98 18.01C35.16 13.6 33.28 9.35 30.2 6.13ZM25.59 29.9C23.37 31.25 20.81 32.1 18.08 32.1C15.51 32.1 13.12 31.42 10.9 30.24L10.39 29.9L5.09 31.25L6.46 26.16L6.12 25.65C2.02 18.86 4.07 10.37 10.73 6.13C17.39 1.88 25.93 4.09 30.03 10.54C34.13 17.16 32.25 25.82 25.59 29.9Z" fillOpacity="1.000000" fillRule="nonzero"/>
            </g>
        </svg>
      ),
      instagram: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <desc>Created with Pixso.</desc>
            <defs>
                <clipPath id="clip1370_1338">
                    <rect width="35" height="35" transform="translate(0.5 0.5)" fillOpacity="0"/>
                </clipPath>
            </defs>
            <rect width="35" height="35" transform="translate(0.5 0.5)" fillOpacity="0"/>
            <g clipPath="url(#clip1370_1338)">
                <path d="M10.5 4.5C7.18 4.5 4.5 7.18 4.5 10.5L4.5 25.5C4.5 28.81 7.18 31.5 10.5 31.5L25.5 31.5C28.81 31.5 31.5 28.81 31.5 25.5L31.5 10.5C31.5 7.18 28.81 4.5 25.5 4.5L10.5 4.5ZM1.5 10.5C1.5 5.52 5.52 1.5 10.5 1.5L25.5 1.5C30.47 1.5 34.5 5.52 34.5 10.5L34.5 25.5C34.5 30.47 30.47 34.5 25.5 34.5L10.5 34.5C5.52 34.5 1.5 30.47 1.5 25.5L1.5 10.5Z" fillOpacity="1.000000" fillRule="evenodd"/>
                <path d="M18.72 13.48C17.78 13.34 16.83 13.5 15.99 13.94C15.15 14.37 14.47 15.06 14.04 15.91C13.61 16.75 13.47 17.71 13.62 18.65C13.77 19.58 14.21 20.44 14.88 21.11C15.55 21.78 16.41 22.22 17.35 22.37C18.28 22.52 19.24 22.38 20.08 21.95C20.93 21.52 21.62 20.84 22.05 20C22.49 19.16 22.65 18.21 22.51 17.27C22.37 16.32 21.92 15.43 21.24 14.75C20.56 14.07 19.68 13.62 18.72 13.48ZM14.61 11.27C16.01 10.55 17.6 10.28 19.16 10.51C20.75 10.75 22.23 11.49 23.36 12.63C24.5 13.76 25.24 15.24 25.48 16.83C25.71 18.39 25.44 19.98 24.72 21.38C23.99 22.78 22.84 23.92 21.43 24.63C20.02 25.34 18.43 25.59 16.87 25.33C15.31 25.08 13.87 24.35 12.76 23.23C11.64 22.12 10.91 20.68 10.66 19.12C10.4 17.56 10.65 15.97 11.36 14.56C12.07 13.15 13.21 12 14.61 11.27Z" fillOpacity="1.000000" fillRule="evenodd"/>
                <path d="M24.75 9.75C24.75 8.92 25.42 8.25 26.25 8.25L26.26 8.25C27.09 8.25 27.76 8.92 27.76 9.75C27.76 10.57 27.09 11.25 26.26 11.25L26.25 11.25C25.42 11.25 24.75 10.57 24.75 9.75Z" fillOpacity="1.000000" fillRule="evenodd"/>
            </g>
        </svg>
      ),
      mail: (
        <svg width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <desc>
                    Created with Pixso.
            </desc>
            <defs>
                <clipPath id="clip1386_446">
                    <rect width="35.000000" height="35.000000" transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0"/>
                </clipPath>
            </defs>
            <rect width="35.000000" height="35.000000" transform="translate(0.500000 0.500000)" fillOpacity="0"/>
            <g clipPath="url(#clip1386_446)">
                <path d="M6 7.5C5.17 7.5 4.5 8.17 4.5 9L4.5 27C4.5 27.82 5.17 28.5 6 28.5L30 28.5C30.82 28.5 31.5 27.82 31.5 27L31.5 9C31.5 8.17 30.82 7.5 30 7.5L6 7.5ZM1.5 9C1.5 6.52 3.52 4.5 6 4.5L30 4.5C32.47 4.5 34.5 6.52 34.5 9L34.5 27C34.5 29.47 32.47 31.5 30 31.5L6 31.5C3.52 31.5 1.5 29.47 1.5 27L1.5 9Z" fillOpacity="1.000000" fillRule="evenodd"/>
                <path d="M1.77 8.13C2.24 7.46 3.18 7.29 3.86 7.77L18 17.66L32.13 7.77C32.81 7.29 33.75 7.46 34.22 8.13C34.7 8.81 34.53 9.75 33.86 10.22L18.86 20.72C18.34 21.09 17.65 21.09 17.13 20.72L2.13 10.22C1.46 9.75 1.29 8.81 1.77 8.13Z" fillOpacity="1.000000" fillRule="evenodd"/>
            </g>
        </svg>
      ),
      mause: (
        <svg width="48.000000" height="48.000000" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip205_236">
			<rect id="mouse" width="47.000000" height="47.000000" transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0"/>
		</clipPath>
	</defs>
	<rect id="mouse" width="47.000000" height="47.000000" transform="translate(0.500000 0.500000)"  fillOpacity="0"/>
	<g clipPath="url(#clip205_236)">
		<path id="Vector" d="M40 17.93C39.91 9.14 32.8 2.07 24 2.07C15.2 2.07 8.07 9.14 8 17.93L8 29.93C8 38.77 15.16 45.93 24 45.93C32.84 45.93 40 38.77 40 29.93L40 17.93ZM36 17.93L26 17.93L26 6.25C31.62 7.19 35.91 12.05 36 17.93ZM22 6.25L22 17.93L12 17.93C12.08 12.05 16.37 7.19 22 6.25ZM36 29.93C36 36.55 30.62 41.93 24 41.93C17.37 41.93 12 36.55 12 29.93L12 21.93L36 21.93L36 29.93Z" fillOpacity="1.000000" fillRule="evenodd"/>
	</g>
</svg>
      ),
  };

  return icons[icon];
};

Icons.propTypes = {
  icon: PropTypes.string,
};

export default Icons;