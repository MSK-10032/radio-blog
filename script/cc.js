function cc(id, config) {
    if (config['front'] == undefined) {
        config['front'] = 'https://file-1.御坂网络.100320721.xyz/image/favicon/default/favicon.png';
    };
    if (config['back'] == undefined) {
        config['back'] = 'https://file-1.御坂网络.100320721.xyz/image/favicon/default/favicon.png';
    };
    if (config['width'] == undefined) {
        config['width'] = '100px';
    };
    if (config['height'] == undefined) {
        config['height'] = '100px';
    };
    if (config['border-radius'] == undefined) {
        config['border-radius'] = '10px';
    };
    if (config['berder'] == undefined) {
        config['berder'] = 'none';
    };
    if (config['time'] == undefined) {
        config['time'] = '3s';
    };
    const card = `
    <div id="${id}">
        <div id="${id}-main">
            <div id="${id}-image">
                <div id="${id}-front">
                    <img src="${config['front']}">
                </div>
                <div id="${id}-back">
                    <img src="${config['back']}">
                </div>
            </div>
        </div>
        <style>
            #${id} {
                width: min-content;
                height: min-content;
            }

            #${id}-main {
                perspective: 1000px;
                width: ${config['width']};
                height: ${config['height']};
            }

            #${id}-image {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                animation: rotate ${config['time']} infinite linear;
            }

            @keyframes rotate {
                from {
                    transform: rotateY(0deg);
                }

                to {
                    transform: rotateY(360deg);
                }
            }

            #${id}-front,
            #${id}-back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                border-radius: ${config['border-radius']};
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }

            #${id}-front {
                transform: rotateY(0deg);
                z-index: 2;
            }

            #${id}-back {
                transform: rotateY(180deg);
            }

            #${id}-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: ${config['border-radius']};
                border: ${config['berder']};
            }
        </style>
    </div>
    `;
    document.writeln(card);
};