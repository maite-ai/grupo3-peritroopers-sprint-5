const path=require('path')
const {body}=require('express-validator')
const validations=[
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('birthDate').notEmpty().withMessage('Tienes que poner tu fecha de nacimiento'),
    body('address').notEmpty().withMessage('Tienes que poner tu dirección'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Tienes que escribir un formato de correro válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('avatar').custom((value,{req})=>{
        let file=req.file
        let acceptedExtentions=['.jpg','.png','.gif']
        if(!file){
            throw new Error('Tienes que subir una imágen')
        }else{
            let fileExtention=path.extname(file.originalname)
            if(!acceptedExtentions.includes(fileExtention)){
                throw new Error(`Las extensiones permitidas son ${acceptedExtentions.join(', ')}`)
            }
        }
        return true
    })
]
module.exports=validations