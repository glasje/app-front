
	$(document).ready( function () {				

		$('#service_app').hide();
		$('#generando_app').hide();

		$('#app_id').val('testApp_2_json');
		$('#facebook').val('chiletiendagamers');

		var config_json = {
			nombre: "Nombre_App",
			descripcion: "Estructura de App con todos los módulos",
			fecha_creacion: new Date().toISOString().substring(0,10),
			autor: "nombre_usuario",
			modulos : []  
		}

		$.fn.postGenerarApp = function(nombreApp, archivo_json, callback){
			var _data = JSON.stringify( { nombreApp : nombreApp, archivo_json : archivo_json } );
			// console.log(_data);

			$.ajax({
	            type: "POST",
	            url: "http://104.248.212.4:3010/generarapp",
	            data: _data,
	            contentType: "application/json; charset=utf-8",
	            dataType: "json",
	            success: function (msg) {
	            	console.log(msg);
	            	console.log(msg.resultado);

	            	if(msg.resultado == 0){
	            		callback(-1)
	            	}else{
						callback(1);	            		
	            	}

	                //var data = eval("(" + msg.d + ")");					
					//console.log(data);	                

					// callback(1);
	            },
	            error: function (msg) {
	                console.log('error');                    
	                console.log(msg);
	                callback(0);
	            }

	        });
		}

		// $(this).getFuel();
		
		$('.service-icon').on('click', function(){

			// console.log(this);
			// console.log($(this));
			// console.log()

			var div_padre = $(this).parent();
			// console.log(div_padre);

			// var input = $(this).children('.modulo');
			// console.log(input[0].name);
			// console.log(input[0].value);
			var input = div_padre.children('.modulo');
			// console.log(input);
			// console.log(input[0].name);
			// console.log(input[0].value);
			var modulo = input[0].name;
			var activo = parseInt(input[0].value);

			if(activo == 0){
				// $(this).removeClass("deshabilitado").addClass("habilitado");
				// $(this).children('.modulo').val("1");
				div_padre.removeClass("deshabilitado").addClass("habilitado");
				div_padre.children('.modulo').val("1");
			}else{
				// $(this).removeClass("habilitado").addClass("deshabilitado");
				// $(this).children('.modulo').val("0");
				div_padre.removeClass("habilitado").addClass("deshabilitado");
				div_padre.children('.modulo').val("0");
			}

			var modulo_paso = {
				id : 1,
				nombre : modulo,
				descripcion : modulo,
				configuracion : {}
			};
			switch(modulo){
				case 'modulo_html':
					modulo_paso.id = 1;
					modulo_paso.configuracion = {
						contenido : ''
					}
										
					break;
				case 'modulo_pdf':
					modulo_paso.id = 2;
					modulo_paso.configuracion = {
						archivo : '',
						nombre_archivo : ''
					}
					break;
				case 'modulo_facebook':
					modulo_paso.id = 4;
					modulo_paso.configuracion = {
						id : ''
					}
					break;
				case 'modulo_twitter':
					modulo_paso.id = 5;
					modulo_paso.configuracion = {
						id : ''
					}
					break;
				case 'modulo_radio':
					modulo_paso.id = 3;
					modulo_paso.configuracion = {
						url : '',
						titulo : '',
						descripcion : ''
					}
					break;
				case 'modulo_contacto':
					modulo_paso.id = 6;
					modulo_paso.configuracion = {
						nombre : '',
						telefono : '',
						direccion : '',
						email : ''
					}
					break;
				case 'modulo_youtube':
					modulo_paso.id = 9;
					modulo_paso.configuracion = {
						id : ''
					}
					break;
				case 'modulo_form':
					modulo_paso.id = 7;
					modulo_paso.configuracion = {
						url : ''
					}
					break;
				case 'modulo_blog':
					modulo_paso.id = 8;
					modulo_paso.configuracion = {
						id : ''
					}
					break;
			}

			// var existe = config_json.modulos.filter(function(e){
			// 	return e.id == modulo_paso.id;
			// });
			// console.log('Existe : ' + existe.leng);
			if(activo == 0){
				config_json.modulos.push(modulo_paso);
			}else{
				config_json.modulos = config_json.modulos.filter(function(e){
					return e.id != modulo_paso.id;
				});
			}

			// console.log(config_json);

		});

		$(this).on('change','#html' , function(){ 
			// var file = $('#html').files[0];
			var file = document.querySelector('#html').files[0];			
			// var base64=getBase64(file); // prints the base64 string
			// console.log(base64);
			// config_json.modulos.forEach(function(mod){
			// 	mod.configuracion.contenido = base64;
			// });

			// var reader = new FileReader();
			// reader.readAsDataURL(file);
			// reader.onload = function () {
			// 	config_json.modulos.forEach(function(mod){
			// 		mod.configuracion.contenido = reader.result;
			// 	});
			// 	console.log(config_json);
			// };
			// reader.onerror = function (error) {
			//  console.log('Error: ', error);
			// };

			// console.log(config_json);

			getBase64(file, function(resultado){
				if(resultado != null){
					config_json.modulos.forEach(function(mod){
						if(mod.id == 1) mod.configuracion.contenido = resultado;
					});
					// console.log(config_json);
				}				
			});

		});

		$(this).on('change','#pdf' , function(){ 

			var file = document.querySelector('#pdf').files[0];			
			getBase64(file, function(resultado){
				if(resultado != null){
					config_json.modulos.forEach(function(mod){
						if(mod.id == 2) mod.configuracion.archivo = resultado;
					});
				}				
			});

		});

		$('#btnCrear').on('click', function(){
			console.log('Crear App');
			var error = 0;
			
			if($('#app_id').val() == ''){
				alert('Introduce un nombre de App');
				 $("#app_id").focus();
				return;
			}

			if(config_json.modulos.length == 0){
				alert('No hay modulos activados');
				return;
			}

			config_json.modulos.forEach(function(mod){

				switch(mod.id){
					case 1:
						if(mod.configuracion.contenido == undefined 
							|| mod.configuracion.contenido == null  
							|| mod.configuracion.contenido == '')
						{
							// alert('No ha seleccionado el archivo html');
							console.log('No ha seleccionado el archivo html');
							error=1;
						}
						break;
					case 2:
						// console.log('Estos son archivos ya están listos');
						if(mod.configuracion.archivo == undefined 
							|| mod.configuracion.archivo == null  
							|| mod.configuracion.archivo == '')
						{
							// alert('No ha seleccionado el archivo pdf');
							console.log('No ha seleccionado el archivo pdf');
							error=1;
						}
						break;
					case 3:
						// console.log('3');
						if( $('#radio_url').val() == '' 
							|| $('#radio_titulo').val() == '' 
							|| $('#radio_descripcion').val() == ''
						){
							error = 1;
						}
						mod.configuracion = {
							url : $('#radio_url').val(),
							titulo : $('#radio_titulo').val(),
							descripcion : $('#radio_descripcion').val()
						}
						break;
					case 4:
						// console.log('4');
						if( $('#facebook').val() == '' )
						{
							error = 1;
						}
						mod.configuracion = {							
							id : $('#facebook').val()
						}
						break;
					case 5:
						// console.log('5');
						if( $('#twitter').val() == '' )
						{
							error = 1;
						}
						mod.configuracion = {							
							id : $('#twitter').val()
						}
						break;
					case 6:
						// console.log('6');
						if( $('#contacto_nombre').val() == '' 
							|| $('#contacto_telefono').val() == '' 
							|| $('#contacto_direccion').val() == '' 
							|| $('#contacto_email').val() == '' 
						){
							error = 1;
						}
						mod.configuracion = {
							nombre : $('#contacto_nombre').val(),
							telefono : $('#contacto_telefono').val(),
							direccion : $('#contacto_direccion').val(),
							email : $('#contacto_email').val()
						}
						break;
					case 7:
						// console.log('7');
						if( $('#google_form').val() == '' )
						{
							error = 1;
						}
						mod.configuracion = {							
							url : $('#google_form').val()
						}
						break;
					case 8:
						// console.log('8');
						if( $('#blog').val() == '' )
						{
							error = 1;
						}
						mod.configuracion = {							
							id : $('#blog').val()
						}
						break;
					case 9:
						// console.log('9');
						if( $('#youtube').val() == '' )
						{
							error = 1;
						}
						mod.configuracion = {							
							id : $('#youtube').val()
						}
						break;
				}

			});		

			if(error == 0){
				console.log('Enviamos app al servidor');

				// console.log(config_json);
				let objJsonStr = JSON.stringify(config_json);
				// var archivo_json = new Buffer.from(objJsonStr).toString("base64"); 
				var archivo_json = window.btoa(objJsonStr)
				// console.log(archivo_json);

				$('#generando_app').show();
				window.location.href = '#generando_app';

				$(this).postGenerarApp( $('#app_id').val() , archivo_json, function(resultado){

					$('#generando_app').hide();

					if(resultado == 1){
						$('#service').hide();
						$('#service_app').show();
						

						window.location.href = '#service_app';

						$('#link_app').attr('href','repositorio_apps/' + $('#app_id').val() + '.apk' );

					}else if(resultado = -1){
						
						alert('El nombre de la App no está disponible. Intente con otro nombre');
						$('#app_id').focus();
					}else{
						alert('Ocurrio un errro al generrar la app');
					}
				});				

			}else {
				console.log('Error en los datos');
				alert('Hay módulos por configurar. Revise e intente nuevamente');
			}

		});

		// alert('ok jquery');

	});

	function getBase64(file, callback) {
	   var reader = new FileReader();
	   reader.readAsDataURL(file);
	   reader.onload = function () {
	     // console.log(reader.result);
	     callback(reader.result);
	   };
	   reader.onerror = function (error) {
	     // console.log('Error: ', error);
	     callback(null);
	   };
	}
