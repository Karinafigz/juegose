class Tablero{
    constructor(){
                   //0 1 2 3 4  5 6 7 8 910 11 12 13 14 15 16 17 18 19 20
      this.casillas=Array()
      for(let i=0;i<=100;i++)
      {	
        this.casillas.push(i);
      }
      //esc
      this.casillas[4]=25;
      this.casillas[14]=35;
      this.casillas[23]=80;
      this.casillas[44]=65;
      this.casillas[52]=69;
      this.casillas[74]=95;
      //serp
      this.casillas[20]=5;
      this.casillas[30]=2;
      this.casillas[58]=32;
      this.casillas[89]=93;
      this.casillas[99]=2;
      
    }
    verCasilla(num){
			return this.casillas[num];
    }
  }
  
  class Dado{
    lanzar(){
      return Math.ceil(Math.random()*6);
    }
  }
  
  class Jugador{
    constructor(){
      this.posicion=0;
    }
    avanzar(cara){
      this.posicion+=cara;
      if (this.posicion>100)
        this.posicion=100;
    }
    lanzarDado(dado){
      return dado.lanzar();
    }
    checarCasilla(tablero){
      this.posicion = tablero.verCasilla(this.posicion);
    }
  }
  
  
  
  //Juego
  let dado=new Dado();
	let tablero=new Tablero();
  let j1=new Jugador();
  let j2=new Jugador();
	let meta=tablero.meta;
  let turno=true;
  while (j1.posicion < 100 && j2.posicion<100){
		if (turno){
	    j1.avanzar(j1.lanzarDado(dado)); 
  	  j1.checarCasilla(tablero);
      document.write("J1  en " + j1.posicion + "<br>"); 
    }else{
    	j2.avanzar(j2.lanzarDado(dado));
    	j2.checarCasilla(tablero)
      document.write("J2  en " + j2.posicion + "<br>");
    }
    turno=!turno;
  }
  if (j1.posicion>=100)
    document.write("j1 gano");
  else
    document.write("j2 gano"); 
    