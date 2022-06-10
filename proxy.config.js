module.exports = {
    async Headers(){
        return [{
            source: '/:path*',
            headers: [{key: 'Acess-Control-Allow-Credentials', value: 'true'},
            { key: 'Acess-Control-Allow-Origin', value: '*'},
            { key: 'Acess-Control-Allow-Methods', value: 'GET, OPTIONS,PATCH,DELETE,POST,PUT'},
            { key: 'Acess-Control-AllowHeaders', value: 'X-CSRF-TOKEN, X-Requested-With'}
        
        ]

        }]



    }
}