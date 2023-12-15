import * as React from "react";

const SvgTumbler = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 108 182"
    {...props}
  >
    {/* <path
      stroke="#FFC124"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M73.48 19.655 79.986 34 60.468 6.414 75.65 42.276 48.902 2l31.084 52.414-36.144-48 31.807 55.724-33.253-48.552 36.144 67.31-44.096-67.31 45.542 82.759-49.156-67.31 47.71 78.344-49.879-65.103 43.373 66.758-47.71-60.137 45.542 77.241-45.542-57.38 36.144 57.38-39.036-49.104 23.856 45.242-25.302-33.104L45.288 130l-25.302-27.586 14.458 23.724"
    /> */}
    <path
      fill="#231F20"
      d="M25.803 19.273h52.351c2.098 0 3.8-1.633 3.8-3.647s-1.702-3.647-3.8-3.647H25.803c-2.098 0-3.8 1.633-3.8 3.647s1.702 3.647 3.8 3.647ZM22.785 35.047h57.381c2.098 0 3.8-1.633 3.8-3.647 0-2.015-1.702-3.648-3.8-3.648h-57.38c-2.099 0-3.8 1.633-3.8 3.648 0 2.014 1.701 3.647 3.8 3.647Z"
    />
    <path
      stroke="#231F20"
      strokeMiterlimit={10}
      strokeWidth={5}
      d="m26.182 18.974-3.08 9.266-.411 25.04s.513 15.674 3.388 23.856c2.875 8.182 6.88 29.968 5.853 39.628h39.503s.719-27.01 4.826-35.882c4.107-8.873 4.415-28.785 4.21-30.757-.206-1.972 0-16.956 0-16.956l-.412-4.83-3.593-10.745-50.284 1.38Z"
    />
    <path
      fill="#231F20"
      d="M62.937 129.586H40.125c-2.906 0-5.692-1.108-7.747-3.081-2.055-1.973-3.209-4.648-3.209-7.438h44.724a10.16 10.16 0 0 1-.834 4.026 10.503 10.503 0 0 1-2.375 3.412 10.982 10.982 0 0 1-3.555 2.28c-1.329.529-2.753.801-4.192.801Z"
    />
    <path
      fill="#231F20"
      stroke="#231F20"
      strokeMiterlimit={10}
      d="M84.339 28.831a3.758 3.758 0 0 1 1.127 2.647 3.754 3.754 0 0 1-1.092 2.66.613.613 0 0 0-.142.686.642.642 0 0 0 .238.285c.107.07.233.11.362.112l4.483.047a2.174 2.174 0 0 1 1.419.541c.386.343.627.812.675 1.315l3.331 35.138c.024.254.147.49.343.662.196.173.453.268.718.268.277 0 .542-.103.74-.287.2-.184.316-.435.325-.7l1.485-40.787a3.085 3.085 0 0 0-.225-1.27 3.188 3.188 0 0 0-.728-1.083 3.345 3.345 0 0 0-1.115-.72 3.454 3.454 0 0 0-1.32-.238l-10.24-.052a.509.509 0 0 0-.267.072.48.48 0 0 0-.184.198.456.456 0 0 0 .067.506Z"
    />
    <path
      fill="#000"
      d="M14.586 155.792v2.825h-4.65v14.625h-3.5v-14.625h-4.65v-2.825h12.8Zm15.629 3.6v13.85H26.69v-1.75c-.45.6-1.042 1.075-1.775 1.425-.717.334-1.5.5-2.35.5-1.083 0-2.042-.225-2.875-.675-.833-.466-1.492-1.141-1.975-2.025-.467-.9-.7-1.966-.7-3.2v-8.125h3.5v7.625c0 1.1.275 1.95.825 2.55.55.584 1.3.875 2.25.875.967 0 1.725-.291 2.275-.875.55-.6.825-1.45.825-2.55v-7.625h3.525Zm20.653-.2c1.7 0 3.067.525 4.1 1.575 1.05 1.034 1.575 2.484 1.575 4.35v8.125h-3.5v-7.65c0-1.083-.275-1.908-.825-2.475-.55-.583-1.3-.875-2.25-.875s-1.708.292-2.275.875c-.55.567-.825 1.392-.825 2.475v7.65h-3.5v-7.65c0-1.083-.275-1.908-.825-2.475-.55-.583-1.3-.875-2.25-.875-.966 0-1.733.292-2.3.875-.55.567-.825 1.392-.825 2.475v7.65h-3.5v-13.85h3.5v1.675a4.692 4.692 0 0 1 1.725-1.375c.717-.333 1.5-.5 2.35-.5 1.084 0 2.05.234 2.9.7a4.74 4.74 0 0 1 1.975 1.95c.45-.8 1.1-1.441 1.95-1.925a5.66 5.66 0 0 1 2.8-.725Zm12.497 2.225c.45-.666 1.066-1.208 1.85-1.625.8-.416 1.708-.625 2.725-.625 1.183 0 2.25.292 3.2.875.966.584 1.725 1.417 2.275 2.5.566 1.067.85 2.309.85 3.725 0 1.417-.284 2.675-.85 3.775-.55 1.084-1.309 1.925-2.275 2.525-.95.6-2.017.9-3.2.9-1.034 0-1.942-.2-2.725-.6-.767-.416-1.384-.95-1.85-1.6v1.975h-3.5v-18.5h3.5v6.675Zm7.325 4.85c0-.833-.175-1.55-.525-2.15-.334-.616-.784-1.083-1.35-1.4a3.551 3.551 0 0 0-1.8-.475c-.634 0-1.234.167-1.8.5-.55.317-1 .784-1.35 1.4-.334.617-.5 1.342-.5 2.175 0 .834.166 1.559.5 2.175.35.617.8 1.092 1.35 1.425a3.631 3.631 0 0 0 1.8.475c.65 0 1.25-.166 1.8-.5a3.589 3.589 0 0 0 1.35-1.425c.35-.616.525-1.35.525-2.2Zm9.618-11.525v18.5h-3.5v-18.5h3.5Zm16.333 11.275c0 .5-.033.95-.1 1.35H86.416c.083 1 .433 1.784 1.05 2.35.617.567 1.375.85 2.275.85 1.3 0 2.225-.558 2.775-1.675h3.775c-.4 1.334-1.167 2.434-2.3 3.3-1.133.85-2.525 1.275-4.175 1.275-1.333 0-2.533-.291-3.6-.875a6.436 6.436 0 0 1-2.475-2.525c-.583-1.083-.875-2.333-.875-3.75 0-1.433.292-2.691.875-3.775a6.111 6.111 0 0 1 2.45-2.5c1.05-.583 2.258-.875 3.625-.875 1.317 0 2.492.284 3.525.85a5.866 5.866 0 0 1 2.425 2.425c.583 1.034.875 2.225.875 3.575Zm-3.625-1c-.017-.9-.342-1.616-.975-2.15-.633-.55-1.408-.825-2.325-.825-.867 0-1.6.267-2.2.8-.583.517-.942 1.242-1.075 2.175h6.575Zm9.68-3.475a4.956 4.956 0 0 1 1.75-1.725c.733-.416 1.566-.625 2.5-.625v3.675h-.925c-1.1 0-1.934.259-2.5.775-.55.517-.825 1.417-.825 2.7v6.9h-3.5v-13.85h3.5v2.15Z"
    />
  </svg>
);
export default SvgTumbler;
