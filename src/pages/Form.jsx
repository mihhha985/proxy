import React from "react";

function Form() {
  return ( 
    <div className="form-container">
      <h2>Информация об API</h2>
      <h5>Ответы на вопросы</h5>

      <div className="form-content">
        <div className="form-content__label">
          <text>Facts</text>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7046 7.20265C11.5171 7.39015 11.2628 7.49549 10.9976 7.49549C10.7325 7.49549 10.4781 7.39015 10.2906 7.20265L6.01361 2.91086L1.70761 7.20265C1.52008 7.39015 1.26577 7.49549 1.00061 7.49549C0.735446 7.49549 0.481137 7.39015 0.29361 7.20265C0.200909 7.11053 0.127351 7.00097 0.0771484 6.88029C0.0269454 6.75962 0.00109863 6.63022 0.00109863 6.49952C0.00109863 6.36882 0.0269454 6.23942 0.0771484 6.11874C0.127351 5.99807 0.200909 5.88851 0.29361 5.79639L5.3096 0.795493C5.49794 0.609142 5.75219 0.504639 6.01712 0.504639C6.28205 0.504639 6.53627 0.609142 6.72461 0.795493L11.7086 5.79639C11.8013 5.88864 11.8748 5.99837 11.9248 6.1192C11.9748 6.24004 12.0003 6.36957 12 6.50034C11.9996 6.63112 11.9733 6.76054 11.9226 6.88109C11.8719 7.00163 11.7978 7.11093 11.7046 7.20265Z" fill="url(#paint0_linear_238_1177)"/>
              <defs>
                <linearGradient id="paint0_linear_238_1177" x1="-5.33669" y1="10.595" x2="5.73404" y2="-6.98124" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0A6FCC"/>
                <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="form-content__item">
          <text>Request</text>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.296357 0.797595C0.483884 0.61009 0.738193 0.504757 1.00336 0.504757C1.26852 0.504757 1.52283 0.61009 1.71036 0.797595L5.98737 5.08938L10.2934 0.797596C10.4809 0.610091 10.7352 0.504758 11.0004 0.504758C11.2655 0.504758 11.5198 0.610091 11.7074 0.797596C11.8001 0.889718 11.8736 0.999279 11.9238 1.11995C11.974 1.24062 11.9999 1.37002 11.9999 1.50073C11.9999 1.63143 11.974 1.76083 11.9238 1.8815C11.8736 2.00217 11.8001 2.11173 11.7074 2.20385L6.69138 7.20475C6.50304 7.3911 6.24878 7.4956 5.98386 7.4956C5.71893 7.4956 5.46471 7.3911 5.27637 7.20475L0.292359 2.20385C0.199678 2.1116 0.126215 2.00187 0.0762029 1.88104C0.0261913 1.76021 0.00063566 1.63068 0.0010076 1.4999C0.00137955 1.36912 0.0276714 1.2397 0.0783697 1.11916C0.129068 0.998609 0.203152 0.889316 0.296357 0.797595Z" fill="url(#paint0_linear_238_1159)"/>
              <defs>
                <linearGradient id="paint0_linear_238_1159" x1="17.3377" y1="-2.59472" x2="6.26694" y2="14.9815" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0A6FCC"/>
                  <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="form-content__item">
          <text>Response</text>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.296357 0.797595C0.483884 0.61009 0.738193 0.504757 1.00336 0.504757C1.26852 0.504757 1.52283 0.61009 1.71036 0.797595L5.98737 5.08938L10.2934 0.797596C10.4809 0.610091 10.7352 0.504758 11.0004 0.504758C11.2655 0.504758 11.5198 0.610091 11.7074 0.797596C11.8001 0.889718 11.8736 0.999279 11.9238 1.11995C11.974 1.24062 11.9999 1.37002 11.9999 1.50073C11.9999 1.63143 11.974 1.76083 11.9238 1.8815C11.8736 2.00217 11.8001 2.11173 11.7074 2.20385L6.69138 7.20475C6.50304 7.3911 6.24878 7.4956 5.98386 7.4956C5.71893 7.4956 5.46471 7.3911 5.27637 7.20475L0.292359 2.20385C0.199678 2.1116 0.126215 2.00187 0.0762029 1.88104C0.0261913 1.76021 0.00063566 1.63068 0.0010076 1.4999C0.00137955 1.36912 0.0276714 1.2397 0.0783697 1.11916C0.129068 0.998609 0.203152 0.889316 0.296357 0.797595Z" fill="url(#paint0_linear_238_1159)"/>
              <defs>
                <linearGradient id="paint0_linear_238_1159" x1="17.3377" y1="-2.59472" x2="6.26694" y2="14.9815" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0A6FCC"/>
                  <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>

      <div className="form-content">
        <div className="form-content__label">
          <text>Info</text>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7046 7.20265C11.5171 7.39015 11.2628 7.49549 10.9976 7.49549C10.7325 7.49549 10.4781 7.39015 10.2906 7.20265L6.01361 2.91086L1.70761 7.20265C1.52008 7.39015 1.26577 7.49549 1.00061 7.49549C0.735446 7.49549 0.481137 7.39015 0.29361 7.20265C0.200909 7.11053 0.127351 7.00097 0.0771484 6.88029C0.0269454 6.75962 0.00109863 6.63022 0.00109863 6.49952C0.00109863 6.36882 0.0269454 6.23942 0.0771484 6.11874C0.127351 5.99807 0.200909 5.88851 0.29361 5.79639L5.3096 0.795493C5.49794 0.609142 5.75219 0.504639 6.01712 0.504639C6.28205 0.504639 6.53627 0.609142 6.72461 0.795493L11.7086 5.79639C11.8013 5.88864 11.8748 5.99837 11.9248 6.1192C11.9748 6.24004 12.0003 6.36957 12 6.50034C11.9996 6.63112 11.9733 6.76054 11.9226 6.88109C11.8719 7.00163 11.7978 7.11093 11.7046 7.20265Z" fill="url(#paint0_linear_238_1177)"/>
              <defs>
                <linearGradient id="paint0_linear_238_1177" x1="-5.33669" y1="10.595" x2="5.73404" y2="-6.98124" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0A6FCC"/>
                <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="form-content__item">
          <text>Смена IP по ссылке</text>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.296357 0.797595C0.483884 0.61009 0.738193 0.504757 1.00336 0.504757C1.26852 0.504757 1.52283 0.61009 1.71036 0.797595L5.98737 5.08938L10.2934 0.797596C10.4809 0.610091 10.7352 0.504758 11.0004 0.504758C11.2655 0.504758 11.5198 0.610091 11.7074 0.797596C11.8001 0.889718 11.8736 0.999279 11.9238 1.11995C11.974 1.24062 11.9999 1.37002 11.9999 1.50073C11.9999 1.63143 11.974 1.76083 11.9238 1.8815C11.8736 2.00217 11.8001 2.11173 11.7074 2.20385L6.69138 7.20475C6.50304 7.3911 6.24878 7.4956 5.98386 7.4956C5.71893 7.4956 5.46471 7.3911 5.27637 7.20475L0.292359 2.20385C0.199678 2.1116 0.126215 2.00187 0.0762029 1.88104C0.0261913 1.76021 0.00063566 1.63068 0.0010076 1.4999C0.00137955 1.36912 0.0276714 1.2397 0.0783697 1.11916C0.129068 0.998609 0.203152 0.889316 0.296357 0.797595Z" fill="url(#paint0_linear_238_1159)"/>
              <defs>
                <linearGradient id="paint0_linear_238_1159" x1="17.3377" y1="-2.59472" x2="6.26694" y2="14.9815" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0A6FCC"/>
                  <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="form-content__item">
          <text>Установить интервал мены IP</text>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.296357 0.797595C0.483884 0.61009 0.738193 0.504757 1.00336 0.504757C1.26852 0.504757 1.52283 0.61009 1.71036 0.797595L5.98737 5.08938L10.2934 0.797596C10.4809 0.610091 10.7352 0.504758 11.0004 0.504758C11.2655 0.504758 11.5198 0.610091 11.7074 0.797596C11.8001 0.889718 11.8736 0.999279 11.9238 1.11995C11.974 1.24062 11.9999 1.37002 11.9999 1.50073C11.9999 1.63143 11.974 1.76083 11.9238 1.8815C11.8736 2.00217 11.8001 2.11173 11.7074 2.20385L6.69138 7.20475C6.50304 7.3911 6.24878 7.4956 5.98386 7.4956C5.71893 7.4956 5.46471 7.3911 5.27637 7.20475L0.292359 2.20385C0.199678 2.1116 0.126215 2.00187 0.0762029 1.88104C0.0261913 1.76021 0.00063566 1.63068 0.0010076 1.4999C0.00137955 1.36912 0.0276714 1.2397 0.0783697 1.11916C0.129068 0.998609 0.203152 0.889316 0.296357 0.797595Z" fill="url(#paint0_linear_238_1159)"/>
              <defs>
                <linearGradient id="paint0_linear_238_1159" x1="17.3377" y1="-2.59472" x2="6.26694" y2="14.9815" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0A6FCC"/>
                  <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="form-content__item">
          <text>Перезагрузить устройство</text>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.296357 0.797595C0.483884 0.61009 0.738193 0.504757 1.00336 0.504757C1.26852 0.504757 1.52283 0.61009 1.71036 0.797595L5.98737 5.08938L10.2934 0.797596C10.4809 0.610091 10.7352 0.504758 11.0004 0.504758C11.2655 0.504758 11.5198 0.610091 11.7074 0.797596C11.8001 0.889718 11.8736 0.999279 11.9238 1.11995C11.974 1.24062 11.9999 1.37002 11.9999 1.50073C11.9999 1.63143 11.974 1.76083 11.9238 1.8815C11.8736 2.00217 11.8001 2.11173 11.7074 2.20385L6.69138 7.20475C6.50304 7.3911 6.24878 7.4956 5.98386 7.4956C5.71893 7.4956 5.46471 7.3911 5.27637 7.20475L0.292359 2.20385C0.199678 2.1116 0.126215 2.00187 0.0762029 1.88104C0.0261913 1.76021 0.00063566 1.63068 0.0010076 1.4999C0.00137955 1.36912 0.0276714 1.2397 0.0783697 1.11916C0.129068 0.998609 0.203152 0.889316 0.296357 0.797595Z" fill="url(#paint0_linear_238_1159)"/>
              <defs>
                <linearGradient id="paint0_linear_238_1159" x1="17.3377" y1="-2.59472" x2="6.26694" y2="14.9815" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0A6FCC"/>
                  <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="form-content__item">
          <text>Получить информацию о моих прокси</text>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.296357 0.797595C0.483884 0.61009 0.738193 0.504757 1.00336 0.504757C1.26852 0.504757 1.52283 0.61009 1.71036 0.797595L5.98737 5.08938L10.2934 0.797596C10.4809 0.610091 10.7352 0.504758 11.0004 0.504758C11.2655 0.504758 11.5198 0.610091 11.7074 0.797596C11.8001 0.889718 11.8736 0.999279 11.9238 1.11995C11.974 1.24062 11.9999 1.37002 11.9999 1.50073C11.9999 1.63143 11.974 1.76083 11.9238 1.8815C11.8736 2.00217 11.8001 2.11173 11.7074 2.20385L6.69138 7.20475C6.50304 7.3911 6.24878 7.4956 5.98386 7.4956C5.71893 7.4956 5.46471 7.3911 5.27637 7.20475L0.292359 2.20385C0.199678 2.1116 0.126215 2.00187 0.0762029 1.88104C0.0261913 1.76021 0.00063566 1.63068 0.0010076 1.4999C0.00137955 1.36912 0.0276714 1.2397 0.0783697 1.11916C0.129068 0.998609 0.203152 0.889316 0.296357 0.797595Z" fill="url(#paint0_linear_238_1159)"/>
              <defs>
                <linearGradient id="paint0_linear_238_1159" x1="17.3377" y1="-2.59472" x2="6.26694" y2="14.9815" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0A6FCC"/>
                  <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="form-content__item">
          <text>Сменить провайдера</text>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.296357 0.797595C0.483884 0.61009 0.738193 0.504757 1.00336 0.504757C1.26852 0.504757 1.52283 0.61009 1.71036 0.797595L5.98737 5.08938L10.2934 0.797596C10.4809 0.610091 10.7352 0.504758 11.0004 0.504758C11.2655 0.504758 11.5198 0.610091 11.7074 0.797596C11.8001 0.889718 11.8736 0.999279 11.9238 1.11995C11.974 1.24062 11.9999 1.37002 11.9999 1.50073C11.9999 1.63143 11.974 1.76083 11.9238 1.8815C11.8736 2.00217 11.8001 2.11173 11.7074 2.20385L6.69138 7.20475C6.50304 7.3911 6.24878 7.4956 5.98386 7.4956C5.71893 7.4956 5.46471 7.3911 5.27637 7.20475L0.292359 2.20385C0.199678 2.1116 0.126215 2.00187 0.0762029 1.88104C0.0261913 1.76021 0.00063566 1.63068 0.0010076 1.4999C0.00137955 1.36912 0.0276714 1.2397 0.0783697 1.11916C0.129068 0.998609 0.203152 0.889316 0.296357 0.797595Z" fill="url(#paint0_linear_238_1159)"/>
              <defs>
                <linearGradient id="paint0_linear_238_1159" x1="17.3377" y1="-2.59472" x2="6.26694" y2="14.9815" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0A6FCC"/>
                  <stop offset="1" stop-color="#3BED4D" stop-opacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Form;