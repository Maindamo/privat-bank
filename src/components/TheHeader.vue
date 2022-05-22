<template>
  <header>
    <div class="container-header">
      <div class="content-header">
        <span class="header-logo">
          <img src="../assets/img/logo.svg" alt="" />
        </span>
        <span class="header-search"
          ><svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
              <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                fill="#000"
                fill-rule="nonzero"
              ></path>
              <path d="M0 0h24v24H0z"></path>
            </g>
          </svg>
        </span>
        <a href="" class="header-link anim-bottom">Гаманець</a>
        <div class="link-container anim-bottom header-link--active">
          <a href="" class="header-link">Сервіси</a>
          <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="#000" fill-rule="nonzero"></path>
              <path d="M0 0h24v24H0z"></path>
            </g>
          </svg>
        </div>
        <a href="" class="header-link anim-bottom">Архів</a>
      </div>
      <div class="content-header">
        <div class="header-currency header-block">
          <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.192 10.868c-1.736-.438-2.294-.892-2.294-1.597 0-.81.772-1.373 2.065-1.373 1.362 0 1.867.631 1.913 1.56h1.69c-.054-1.28-.817-2.502-2.634-2.92V5h-1.805v1.517c-1.673.255-2.99 1.335-2.99 2.769 0 1.715 1.461 2.57 3.595 3.067 1.913.445 2.295 1.1 2.295 1.79 0 .512-.375 1.329-2.065 1.329-1.576 0-2.195-.683-2.295-1.56H8c.092 1.627 1.596 2.908 3.127 2.908v1.548h1.805v-1.53c1.498 0 2.855-1.18 2.855-2.703 0-2.109-1.859-2.822-3.595-3.267z"
              fill="#000"
              fill-rule="evenodd"
              stroke="none"
              stroke-width="1"
            ></path>
          </svg>
          <span>29.25 / 29.4118</span>
        </div>
        <div class="header-buttons header-block">
          <div class="button-right">
            <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <path d="M0 0h24v24H0z"></path>
                <path
                  d="M22 9.497h-3.42L14.868 3l-1.736.992 3.145 5.505H7.723l3.145-5.504L9.132 3 5.42 9.497H2v2h1.198l1.826 8.217a1 1 0 0 0 .976.783h12a.998.998 0 0 0 .976-.783l1.826-8.217H22v-2zm-4.802 9H6.802l-1.556-7h13.507l-1.555 7z"
                  fill="#000"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div class="header-line header-block"></div>
        <div class="header-buttons header-block">
          <div class="button-right">
            <svg height="24px" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 13h-5v5h5v-5zM16 2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V2h-2zm3 18H5V9h14v11z"
                fill="#000"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="button-right">
            <svg height="24px" width="24px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.476 5.19c0-1.21.972-2.19 2.19-2.19 1.21 0 2.191.972 2.191 2.19h2.484a2.989 2.989 0 0 1 2.992 2.993v9.348a2.989 2.989 0 0 1-2.992 2.993H6.993A2.989 2.989 0 0 1 4 17.53V8.183A2.989 2.989 0 0 1 6.993 5.19h2.483zm1.095 0c0 .61.49 1.096 1.096 1.096.609 0 1.095-.49 1.095-1.096 0-.609-.49-1.095-1.095-1.095-.61 0-1.096.49-1.096 1.095zm-2.027 9.322l2.05 2.05 4.813-4.758a.993.993 0 0 0-.003-1.417l.445.446a1.003 1.003 0 0 0-1.423-.014l-3.831 3.78-1.076-1.077a.998.998 0 0 0-1.417.01l.445-.445a1 1 0 0 0-.003 1.425z"
                fill="#000"
                fill-rule="evenodd"
                stroke="none"
                stroke-width="1"
              ></path>
            </svg>
          </div>
          <div class="button-right button-right--user">
            <img src="../assets/img/user.png" alt="" class="" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
