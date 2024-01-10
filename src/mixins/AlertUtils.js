// GLOBAL ALERT SWEET ALERT
import Swal from 'sweetalert2';

export const AlertUtils = {
    methods : {
        alertSuccess(message) {
            Swal.fire({
                position: 'top',
                imageUrl: require('@/assets/image/icon/ic_copied_success.svg'),
                background: '#2d2d2d',
                imageWidth: 18,
                imageHeight: 18,
                color: 'white',
                title: message,
                titleFontSize: '14px',
                showConfirmButton: false,
                toast: true,
                timer: 1500,
                customClass: {
                    container: 'p-0'
                },
                didOpen: () => {
                    const imageElement = document.querySelector('.swal2-image');
                    const titleElement = document.querySelector('.swal2-title');

                    // IMAGE
                    imageElement.style.display = 'inline-block';
                    imageElement.style.margin = '0';
                    imageElement.style.verticalAlign = 'middle';

                    // TITLE
                    titleElement.style.display = 'inline-block';
                    titleElement.style.setProperty('padding-top', '0px');
                    titleElement.style.verticalAlign = 'middle';
                    titleElement.style.fontSize = '14px';
                    titleElement.style.fontWeight = 'normal';
                    const containerElement = document.querySelector('.swal2-popup');
                    containerElement.style.display = 'flex';
                    containerElement.style.justifyContent = 'center';
                    containerElement.style.alignItems = 'center';
                    containerElement.style.setProperty('padding', '10px 30px 10px 30px');
                    containerElement.style.setProperty('margin-top', '15px');
                    containerElement.style.setProperty('width', 'auto');
                }
            })
        },

        alertFailIcon(message) {
            Swal.fire({
                position: 'top',
                imageUrl: require('@/assets/image/icon/modal_wrong_small.svg'),
                background: '#2d2d2d',
                imageWidth: 18,
                imageHeight: 18,
                color: 'white',
                title: message,
                titleFontSize: '14px',
                showConfirmButton: false,
                toast: true,
                timer: 1500,
                customClass: {
                    container: 'p-0'
                },
                didOpen: () => {
                    const imageElement = document.querySelector('.swal2-image');
                    const titleElement = document.querySelector('.swal2-title');

                    // IMAGE
                    imageElement.style.display = 'inline-block';
                    imageElement.style.margin = '0';
                    imageElement.style.verticalAlign = 'middle';

                    // TITLE
                    titleElement.style.display = 'inline-block';
                    titleElement.style.setProperty('padding-top', '0px');
                    titleElement.style.verticalAlign = 'middle';
                    titleElement.style.fontSize = '14px';
                    titleElement.style.fontWeight = 'normal';
                    titleElement.style.textAlign = 'center';
                    const containerElement = document.querySelector('.swal2-popup');
                    containerElement.style.display = 'flex';
                    containerElement.style.justifyContent = 'center';
                    containerElement.style.alignItems = 'center';
                    containerElement.style.setProperty('padding', '10px 30px 10px 30px');
                    containerElement.style.setProperty('margin-top', '15px');
                    containerElement.style.setProperty('width', 'auto');
                }
            })
        },

        alertFail(message) {
            Swal.fire({
                position: 'top',
                background: '#FF000080',
                imageWidth: 18,
                imageHeight: 18,
                color: 'white',
                title: message,
                titleFontSize: '14px',
                showConfirmButton: false,
                toast: true,
                timer: 2000,
                customClass: {
                    container: 'p-0'
                },
                didOpen: () => {
                    const titleElement = document.querySelector('.swal2-title');

                    // TITLE
                    titleElement.style.display = 'inline-block';
                    titleElement.style.setProperty('padding-top', '0px');
                    titleElement.style.setProperty('margin', '0px');
                    titleElement.style.verticalAlign = 'middle';
                    titleElement.style.fontSize = '14px';
                    titleElement.style.fontWeight = 'normal';
                    titleElement.style.textAlign = 'center';

                    const containerElement = document.querySelector('.swal2-popup');
                    containerElement.style.display = 'flex';
                    containerElement.style.justifyContent = 'center';
                    containerElement.style.alignItems = 'center';
                    containerElement.style.setProperty('padding', '15px 30px 15px 30px');
                    containerElement.style.setProperty('margin-top', '15px');
                    containerElement.style.setProperty('width', 'auto');
                }
            })
        },

        alertLoading(message) {
            Swal.fire({
                position: 'top',
                background: 'rgb(101 104 241 / 68%)',
                imageWidth: 18,
                imageHeight: 18,
                color: 'white',
                title: message,
                titleFontSize: '14px',
                showConfirmButton: false,
                toast: true,
                customClass: {
                    container: 'p-0'
                },
                didOpen: () => {
                    const titleElement = document.querySelector('.swal2-title');

                    // TITLE
                    titleElement.style.display = 'inline-block';
                    titleElement.style.setProperty('padding-top', '0px');
                    titleElement.style.setProperty('margin', '0px');
                    titleElement.style.verticalAlign = 'middle';
                    titleElement.style.fontSize = '14px';
                    titleElement.style.fontWeight = 'normal';
                    titleElement.style.textAlign = 'center';

                    const containerElement = document.querySelector('.swal2-popup');
                    containerElement.style.display = 'flex';
                    containerElement.style.justifyContent = 'center';
                    containerElement.style.alignItems = 'center';
                    containerElement.style.setProperty('padding', '15px 30px 15px 30px');
                    containerElement.style.setProperty('margin-top', '15px');
                    containerElement.style.setProperty('width', 'auto');
                }
            })
        },
    }
}