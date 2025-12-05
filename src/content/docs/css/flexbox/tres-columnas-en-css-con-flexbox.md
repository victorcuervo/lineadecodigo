---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOFEQBT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE35hLBq7u9WceBVwkoH9oTdAD7N6Bl8RBc6DEOV7AkeAiEAq%2BKYPw1i1Lmrn7lVnYEP5mQurCd5etuN5HwTSS451TEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBPJ%2FH4A3zmXpHfrdyrcA%2FuQE9Xd2xL7430u8Db00iQ2ARXlYEkgFCiMlmN%2FVeK%2FFshzWoWB9gRarkzGng7EZC9sEFLUZRCljFLSIPigX3GA0i89kXZ904TT%2Fs5mA6XeZMvp59B4hMwnVuaTE7IQTx0x49w6i2tZ0Swo5WAtYs3Vto%2FdP6hKh3U5b0YsXywnXO6BzyCE7pE9g6Kr%2ByOSmZggg442ciIPXc0MX%2BIH%2BiF173%2FuSCCDU9GdrXI9txU2jTUusid%2FYNjTiRH4J43N0vuAsaTdHU7Qg2%2FJ%2FdxKHzinBdcPsjEoZxZYgxTkuxwQNfipkg48HX7UsJ6jXh0vFpJMiXujNHaexmpm4x2ECrQ%2F%2FVW%2Bzu0rC%2FvpJ%2B7xKDaxg6riKzNojoi9ffIV1TMLRX%2FxPNXfg99O41bx9oJYQb6mBh67WoC70Z5ppwYs8jntEoPj6OG4APE3tZs4aqVCa60V1lsIVUzLfZ27Z3li1fAjanCBIckbqIy13ypAXdIDygtep8%2FagGBOQTIyQMvXA1FA%2BYvJSUjAI9EZ18zvMKhHYt9I3AhtZrOzrGT0sulKd3eZ2DmhVFeSZxvDwNaei8sKlNUG3DrSEABtNI4X1y6VSiVKSM8pGY9x%2F1VmXsiFeiQEh6Fz0QsOlVL3MJ%2FGyskGOqUBl2jnbImBi%2Bf5NR81sapcgOrOaeab4wgzu528l8UHM4TaVT0fRPN1aG69GKrXTzx12ixopodK8ceXb9yhrWknvMqZmnf7eda2H3GgtcoiCd%2FFQBh8j25%2B7Z38NaMjeDlQVKg3edFkmWtkC48T%2FF%2FDHLDkF4qrcFybTCIpr9d5JGOwisApqKHVZ99tk7dPBbjbMjiaHc8LisvJMSsurURhKdXnbUFa&X-Amz-Signature=eddec386120d902bb00eda9bc588c7e0b176613f2a8264e1d9f7db5fd04a5297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOFEQBT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE35hLBq7u9WceBVwkoH9oTdAD7N6Bl8RBc6DEOV7AkeAiEAq%2BKYPw1i1Lmrn7lVnYEP5mQurCd5etuN5HwTSS451TEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBPJ%2FH4A3zmXpHfrdyrcA%2FuQE9Xd2xL7430u8Db00iQ2ARXlYEkgFCiMlmN%2FVeK%2FFshzWoWB9gRarkzGng7EZC9sEFLUZRCljFLSIPigX3GA0i89kXZ904TT%2Fs5mA6XeZMvp59B4hMwnVuaTE7IQTx0x49w6i2tZ0Swo5WAtYs3Vto%2FdP6hKh3U5b0YsXywnXO6BzyCE7pE9g6Kr%2ByOSmZggg442ciIPXc0MX%2BIH%2BiF173%2FuSCCDU9GdrXI9txU2jTUusid%2FYNjTiRH4J43N0vuAsaTdHU7Qg2%2FJ%2FdxKHzinBdcPsjEoZxZYgxTkuxwQNfipkg48HX7UsJ6jXh0vFpJMiXujNHaexmpm4x2ECrQ%2F%2FVW%2Bzu0rC%2FvpJ%2B7xKDaxg6riKzNojoi9ffIV1TMLRX%2FxPNXfg99O41bx9oJYQb6mBh67WoC70Z5ppwYs8jntEoPj6OG4APE3tZs4aqVCa60V1lsIVUzLfZ27Z3li1fAjanCBIckbqIy13ypAXdIDygtep8%2FagGBOQTIyQMvXA1FA%2BYvJSUjAI9EZ18zvMKhHYt9I3AhtZrOzrGT0sulKd3eZ2DmhVFeSZxvDwNaei8sKlNUG3DrSEABtNI4X1y6VSiVKSM8pGY9x%2F1VmXsiFeiQEh6Fz0QsOlVL3MJ%2FGyskGOqUBl2jnbImBi%2Bf5NR81sapcgOrOaeab4wgzu528l8UHM4TaVT0fRPN1aG69GKrXTzx12ixopodK8ceXb9yhrWknvMqZmnf7eda2H3GgtcoiCd%2FFQBh8j25%2B7Z38NaMjeDlQVKg3edFkmWtkC48T%2FF%2FDHLDkF4qrcFybTCIpr9d5JGOwisApqKHVZ99tk7dPBbjbMjiaHc8LisvJMSsurURhKdXnbUFa&X-Amz-Signature=8821ac36193acb1e1006c76b348537aa17231073146e76719d18088c63dd006f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

