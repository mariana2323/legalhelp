/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    id: 'legalhelp',
    models: [
        'especialidad.especialidadModel',
        'menu.win004MnuModel',
        'preguntas_frecuentes.preguntasFrecuentesModel',
        'menu.win006MnuModel',
        'tipo_especialidad.tipoEspecialidadModel',
        'tarjeta.tarjetaModel',
        'tipo_identificacion.tipoIdentificacionModel',
        'usuario.usuarioModel',
        'abogado.abogadoModel',
        'caso.casoModel',
        'especialidad_x_abogado.especialidadXAbogadoModel',
        'cliente.clienteModel',
        'pago.pagoModel',
        'tipo_tarjeta.tipoTarjetaModel',
        'menu.win012Model',
        'menu.win028Model',
        'mensaje.mensajeModel',
        'rol.rolCmbModel',
        'abogado.estadoCmbModel',
        'biblioteca.bibliotecaModel',
        'detalle_pago.detallePagoModel'
    ],
    stores: [
        'tipo_especialidad.win001Store',
        'menu.win004Store',
        'preguntas_frecuentes.win005Store',
        'menu.win006Store',
        'mensaje.win007Store',
        'pago.win008Store',
        'menu.win012Store',
        'abogado.win013Store',
        'abogado.win021Store',
        'tipo_identificacion.win014Store',
        'tipo_tarjeta.win015Store',
        'tipo_especialidad.win016Store',
        'preguntas_frecuentes.win017Store',
        'especialidad.win018Store',
        'especialidad.win026Store',
        'rol.win019Store',
        'usuario.win032Store',
        'caso.win020Store',
        'menu.win028Store',
        'mensaje.win029Store',
        'caso.win030Store',
        'rol.win027Store',
        'tarjeta.win033Store',
        'rol.rolCmbStore',
        'abogado.estadoCmbStore',
        'biblioteca.win034Store',
        'caso.win042Store',
        'especialidad.especialidadCmbStore',
        'detalle_pago.win008Store',
        'detalle_pago.win008StoreAux',
        'detalle_pago.win008StoreAux2'
    ],
    views: [
        'login.WinLogin',
        'tipo_especialidad.Win001',
        'usuario.Win002',
        'usuario.Win003',
        'menu.Win004',
        'preguntas_frecuentes.Win005',
        'menu.Win006',
        'mensaje.Win007',
        'detalle_pago.Win0081',
        'usuario.Win009',
        'usuario.Win010',
        'usuario.Win011',
        'menu.Win012',
        'abogado.Win013',
        'tipo_identificacion.Win014',
        'tipo_tarjeta.Win015',
        'tipo_especialidad.Win016',
        'preguntas_frecuentes.Win017',
        'especialidad.Win018',
        'rol.Win019',
        'caso.Win020',
        'abogado.Win021',
        'tipo_especialidad.Win022',
        'tipo_identificacion.Win023',
        'tipo_tarjeta.Win024',
        'preguntas_frecuentes.Win025',
        'especialidad.Win026',
        'rol.Win027',
        'menu.Win028',
        'mensaje.Win029',
        'caso.Win030',
        'menu.Win031',
        'usuario.Win032',
        'tarjeta.Win033',
        'biblioteca.Win034',
        'biblioteca.Win035',
        'biblioteca.Win036',
        'biblioteca.Win037',
        'biblioteca.Win038',
        'caso.Win039',
        'caso.Win040',
        'pago.Win041',
        'caso.Win042',
        'usuario.Win043',
        'menu.Win044',
        'detalle_pago.Win008'
    ],
    name: 'Legalhelp',

    launch: function() {
        var me = this;
        BASE_URL = 'http://localhost';
        //var extJsFile = Ext.util.Format.format("locale/ext-lang-{0}.js", idiomaInicio2);
        Ext.Ajax.request
        ({
            url: BASE_URL+'/servidor_legalhelp/login/logged',
            method: 'GET',
            callback: function(opt, success, response)
            {
                if(success)
                {
                    Ext.Loader.loadScript({url: "locale/ext-lang-es.js"});
                    var data = Ext.JSON.decode(response.responseText);
                    ID_USUARIO = data.usuario;
                    //PIN = data.pin;
                    NOMBRE = data.nomusr;
                    ROL = data.rol;
                    IMAGEN_USUARIO = data.imagen;
                    if(ID_USUARIO)
                    {
                        if(ROL === 'CLI')
                            Ext.create('Legalhelp.view.tipo_especialidad.Win001', {fullscreen: true});
                        else if(ROL === 'ADM')
                            Ext.create('Legalhelp.view.menu.Win012', {fullscreen: true});
                        else if(ROL === 'ABG')
                            Ext.create('Legalhelp.view.menu.Win028', {fullscreen: true});
                        me.getView().destroy();
                    }
                    else
                    {
                        //me.getView().destroy();
                        Ext.create('Legalhelp.view.login.WinLogin', {fullscreen: true});
                    }
                }
                else
                    Ext.Msg.alert('Error', 'Error de conexión');
            }
        });
    }

});
