<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__left">
        <div class="links-container">
          <a href="https://next.privat24.ua/branches" class="link-item">Відділення</a>
          <a href="https://privatbank.ua/perevod-na-kartu-schet-v-privatbanke" class="link-item">Регламент і тарифи</a>
          <a href="https://next.privat24.ua/static/docs/personal_data_security.pdf" class="link-item">Про персональні дані</a>
          <a href="https://privatbank.ua/safeness" class="link-item">Безпека</a>
          <a href="https://api.privatbank.ua/" class="link-item">API</a>
          <a href="https://next.privat24.ua/vacancies" class="link-item">Хочу до команди</a>
        </div>
        <div class="phones">
          <span class="phone-item"><b>3700</b></span>
          <span class="phone-item">безкоштовно з мобільних</span>
          <span class="phone-item"><b>+38-073-716-11-31</b></span>
          <span class="phone-item">для дзвінків з-за кордону</span>
        </div>
        <div class="descritption">© 2022 ПриватБанк Ліцензія № 22 від 19.03.1992</div>
      </div>

      <div class="footer__right">
        <div class="language-dropdown">
          <div class="language-dropdown__language">
            <div class="language-icon"><div class="img" style="width: 16px; height: 12px"></div></div>
            <div class="language-text">Українська</div>
          </div>
          <div class="language-dropdown__icon">
            <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <path d="M0 0h24v24H0z"></path>
                <path d="M7 10l5 5 5-5z" fill="#000"></path>
              </g>
            </svg>
          </div>
        </div>
        <div class="app-container">
          <div class="app-item">
            <div class="app-img">
              <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.557 20.998c-1.038 1.488-2.138 2.94-3.813 2.964-1.675.036-2.212-.948-4.112-.948-1.913 0-2.5.924-4.088.984-1.637.06-2.875-1.584-3.925-3.036C2.482 18 .845 12.54 3.044 8.868c1.088-1.824 3.038-2.976 5.15-3.012 1.6-.024 3.125 1.044 4.113 1.044.975 0 2.825-1.284 4.762-1.092.813.036 3.088.312 4.55 2.376-.112.072-2.712 1.536-2.687 4.572.037 3.624 3.312 4.836 3.35 4.848-.038.083-.526 1.727-1.725 3.394zM13.419 1.8C14.332.804 15.844.048 17.094 0c.163 1.404-.425 2.82-1.3 3.828-.862 1.02-2.287 1.812-3.687 1.704-.188-1.38.512-2.82 1.312-3.732z"
                  fill="rgba(0, 0, 0, 0.54)"
                  fill-rule="evenodd"
                  stroke="none"
                  stroke-width="1"
                ></path>
              </svg>
            </div>
            <div class="app-text">
              <div class="app-title">Доступно в</div>
              <div class="app-descr">Apple Store</div>
            </div>
          </div>
          <div class="app-item">
            <div class="app-img">
              <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                  <path
                    d="M2 21.323V2.495c0-.653.383-1.23.946-1.495l11.1 10.91-11.1 10.908A1.668 1.668 0 0 1 2 21.323zm15.56-5.958L5.438 22.253l9.566-9.403 2.558 2.515zm3.775-4.774c.383.3.665.764.665 1.318s-.248.997-.642 1.307l-2.58 1.462-2.817-2.769 2.816-2.769 2.558 1.451zM5.437 1.565L17.56 8.454l-2.558 2.514-9.566-9.403z"
                    fill="rgba(0, 0, 0, 0.54)"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="app-text">
              <div class="app-title">Доступно в</div>
              <div class="app-descr">Google Play</div>
            </div>
          </div>
          <div class="app-item">
            <div class="app-img">
              <svg height="24px" width="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.858 13.43h.72l-.365-.842-.355.842z" fill="rgba(0, 0, 0, 0.54)"></path>
                <path
                  d="M8.065 3h7.87C19.648 3 21 4.352 21 8.065v7.87C21 19.648 19.637 21 15.935 21h-7.87C4.352 21 3 19.637 3 15.935v-7.87C3 4.352 4.363 3 8.065 3zm3.946 6.007a2.994 2.994 0 0 1-2.993-2.992h.422a2.573 2.573 0 0 0 2.571 2.571 2.573 2.573 0 0 0 2.572-2.571h.42a3.001 3.001 0 0 1-2.992 2.992zM6.58 12h.477v2.35H6.58v-.953H5.505v.953h-.477V12h.477v.954H6.58V12zm2.682 1.341c0 .377-.188.588-.532.588-.343 0-.543-.21-.543-.599V12h-.476v1.341c0 .666.365 1.042 1.008 1.042s1.02-.388 1.02-1.064v-1.33h-.477v1.352zm4.988-1.34h-.388l-.532 1.618L12.81 12h-.51l.82 2.35h.399l.531-1.54.532 1.54h.4l.82-2.35h-.499l-.521 1.619L14.25 12zm2.394 1.34h.865v-.432h-.865v-.476h1.264V12h-1.73v2.35h1.774v-.432h-1.308v-.576zm1.884 1.01h.466V12h-.466v2.35zm-7.847-.489l-.21.488h-.488l1.03-2.35h.422l1.03 2.35h-.498l-.21-.488H10.68z"
                  fill="rgba(0, 0, 0, 0.54)"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="app-text">
              <div class="app-title">Доступно в</div>
              <div class="app-descr">AppGalery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="like-container">
    <svg height="24px" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.8 22.988H2.503A2.504 2.504 0 0 1 0 20.483v-7.998a2.504 2.504 0 0 1 2.502-2.504h3.299a2.504 2.504 0 0 1 2.502 2.504v7.998a2.504 2.504 0 0 1-2.502 2.505zm0-11.562a1.06 1.06 0 0 1 1.06 1.06v7.998a1.06 1.06 0 0 1-1.06 1.059H2.503a1.059 1.059 0 0 1-1.058-1.06v-7.998a1.06 1.06 0 0 1 1.058-1.059h3.299zm3.564 8.62c-.013-.054.022-.112.022-.168v-9.133c0-.1-.02-.2.02-.293l.123-.323c.201-.624.788-1.575 1.735-3.048.648-1.007 1.313-2.049 1.52-2.573.351-.891.35-2.093.32-2.48a.721.721 0 0 1 .347-.674c.06-.036.609-.354 1.317-.354a2.2 2.2 0 0 1 1.239.372c1.004.668 2.128 1.712 1.907 3.871-.069.681-.354 1.32-.63 1.938-.18.406-.351.79-.446 1.152-.02.074-.022.274-.023.442.787.068 1.58.128 2.292.128.45 0 .816-.004 1.11-.007.383-.004.649-.006.835 0 .136.004.264.008.382.023a2.937 2.937 0 0 1 1.958 1.136 2.962 2.962 0 0 1-.516 4.12 2.62 2.62 0 0 1 .294 1.598 2.6 2.6 0 0 1-.877 1.634c.163.405.22.822.165 1.237a2.313 2.313 0 0 1-.859 1.503 1.937 1.937 0 0 1-1.188 2.556c-.424.214-.96.258-1.674.258-.24 0-.51-.005-.807-.01a63.376 63.376 0 0 0-1.233-.014c-.573 0-1.111.017-1.632.034a42.17 42.17 0 0 1-1.32.029c-1.797 0-3.727-.228-4.381-2.953zm4.422 1.51c.398 0 .801-.014 1.252-.029.533-.017 1.073-.036 1.67-.036.469 0 .881.008 1.253.015.289.006.546.01.778.01.209 0 .842 0 1.031-.109.049-.028.1-.05.154-.066.155-.046.335-.189.362-.393a.475.475 0 0 0-.048-.304c-.156-.253-.197-.596-.113-.918.075-.285.24-.512.468-.64a.854.854 0 0 0 .367-1.096c-.164-.363-.205-1.236.303-1.61a1.182 1.182 0 0 0 .292-1.601c-.318-.485-.143-1.347.338-1.677a1.514 1.514 0 0 0-.652-2.75 1.447 1.447 0 0 0-.193-.01l-.051-.001c-.17-.007-.42-.004-.766 0-.299.003-.67.007-1.124.007-.918 0-1.919-.09-2.887-.175l-.218-.02a.723.723 0 0 1-.654-.799c.02-.182.021-.38.022-.57.002-.292.004-.567.07-.82.127-.476.329-.931.525-1.372.24-.538.466-1.046.512-1.497.148-1.448-.547-2.04-1.27-2.521a.886.886 0 0 0-.652-.109c-.005.62-.074 1.66-.435 2.574-.26.655-.937 1.708-1.653 2.823-.647 1.005-1.451 2.256-1.59 2.727-.01.029.021.058.009.086l-.056.223v8.892c.361 1.517 1.172 1.766 2.956 1.766z"
        fill="#FFF"
        fill-rule="evenodd"
      ></path>
    </svg>
  </div>
  <div class="sms-container">
    <div class="sms-img"></div>
  </div>
</template>
