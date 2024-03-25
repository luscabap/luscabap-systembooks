const path = require('path');

module.exports = {
    // outras configurações do webpack...

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images', // Especifique o diretório de saída para as imagens
                        },
                    },
                ],
            },
        ],
    },
};
