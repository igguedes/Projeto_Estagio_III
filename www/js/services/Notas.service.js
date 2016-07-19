app.factory('NotasService',function(){
	var __nota;
	function __getNota(){
			return nota;
	}

	function __setNota(nota){
			__nota = nota;
		
	}



	var notas = [
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400,00'
		},
		{
			codigo:'7382736475849098',
			data:'13/07/2016',
			valor:'400.00'
		}
	];

	function __listarNotas(){
		return notas;
	}



	return {
			getNota : __getNota,
			setNota : function(nota){
					__setNota(nota);
			},
			listarNotas: __listarNotas
	}
});
