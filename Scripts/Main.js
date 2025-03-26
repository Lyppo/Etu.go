const camera = document.createElement('div');
camera.id = 'camera';
const geste = document.createElement('div');
geste.id = 'geste';

const main = document.querySelector('main');
main.prepend(camera, geste);

const style = document.createElement('style');
style.textContent = `
    body {
        background-color: #222;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
        margin: 0;
    }

    main {
        width: 100vw;
        height: 100vh;
        background-color: #dee0df;
    }

    #camera, #geste {
        display: none;
    }

    /* sur pc */
    @media (hover: hover) and (pointer: fine) {
        main {
            height: 95vh;
            width: auto;
            aspect-ratio: 9 / 18;
            border-radius: 3vh;
            box-shadow: #fff 0 0 1vh;
            border: 0.3vh solid #000;
            overflow: hidden;
        }

        #camera, #geste {
            display: block;
            z-index: 10;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background-color: #000;
        }

        #camera {
            top: calc(2vh + 3%);
            border-radius: 50%;
            width: 1.5vh;
            height: 1.5vh;
            box-shadow: inset #888 0 0 0.5vh;
        }

        #geste {
            bottom: calc(2vh + 2%);
            border-radius: 0.5vh;
            width: 15vh;
            height: 0.5vh;
        }
    }
`;

document.head.appendChild(style);