---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXTRRVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuGo9FFTCnaQ1HlXD%2Fz9ASncb41QG%2BIPNR3lkSwJ5PFAIgFbnhUHZzBiJEmegX0X0R%2FPxIEFH71gtG5i82gpRLai8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHOd2%2Bw6ZgsdMyd1qyrcA%2FsWZ1Oj6h0bi6ZGyoXdtUCmwX%2FTAkaMz4oEfikKwC4aBgnUxBO8VEJgTlurDqjHt%2Bp3UW%2Bh69gl1yNe9vxBs7LMhi2ButPK%2FmshXQNkesjvuujT%2BIFtawzZrl5DjZxly90Y%2BK6qWe2ihh6Zf8iU3WelVgqVg8dzcTRC5S%2Fi88vcFYVjLsq66GxWxmjQhEAwnQiNFO0qJW8VhNQ46w0YmgvHEOfdZKdmg5CG6Yh8XKruj%2F4XOoZqvJCoBKTdb%2FcdlYr7wHSw5nZJiGocW%2Bd6P15YeFScwPm8hFhmOwoj040pimPMsJxSxpvUnKSvnq3XMWo3CHSbVUKTgkHNrWM20YMUiNfjbgGYqyG0vjmrQlanjoI0wLE5nR1xTgtTwZwGwDd1uAtPTNfloc5V3NU3ZzR8a6bBMJMkWwsSTxo4Wt7UdRsDvJegA1sm0k1PSFs1K0fVZ97YLgD8bC%2FKWNYqOcE2FdBK1dmyNmTmegyfhECCbqsP1hpYK8lEh0ry%2F7X1ykJlymg%2FzMwCsq33e3FgGOIukTdK5ME1GgH1R27XoQ3%2Bs6xVwXW%2BHs5%2FOWsiXQB1pMYvKxfmaw07oDT187fV2mfhkPofWEJked8q2I%2BmEagVhQ%2BzJQr%2Bm6W7XJrZMKihxskGOqUBr%2FmW3FjNuuT7jcvGNLZ%2Ft99XdXtAYH6sJk8W96ZfJZ9LhMIqGWuj8gYfDjWJiV30MaOeosp1fyoBaZ19G3RrA3dKfdG8O%2BK%2Fko0pZN4%2FfczIHW14VVQqS0PbL%2BG4l2kmXOyhkIC%2FsBfqIpgWoekoWNIlSQm4exVJaVEVQiZCmK%2F7fwo%2Fy%2FbKiaviw13KbIh1qSsQFVHjSdfzHeKe5KsJNdJiUpvZ&X-Amz-Signature=b23b534579f5e365a30a9fc1111b5624c351f402d8bcf39fe3ff02e483c61d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXTRRVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuGo9FFTCnaQ1HlXD%2Fz9ASncb41QG%2BIPNR3lkSwJ5PFAIgFbnhUHZzBiJEmegX0X0R%2FPxIEFH71gtG5i82gpRLai8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHOd2%2Bw6ZgsdMyd1qyrcA%2FsWZ1Oj6h0bi6ZGyoXdtUCmwX%2FTAkaMz4oEfikKwC4aBgnUxBO8VEJgTlurDqjHt%2Bp3UW%2Bh69gl1yNe9vxBs7LMhi2ButPK%2FmshXQNkesjvuujT%2BIFtawzZrl5DjZxly90Y%2BK6qWe2ihh6Zf8iU3WelVgqVg8dzcTRC5S%2Fi88vcFYVjLsq66GxWxmjQhEAwnQiNFO0qJW8VhNQ46w0YmgvHEOfdZKdmg5CG6Yh8XKruj%2F4XOoZqvJCoBKTdb%2FcdlYr7wHSw5nZJiGocW%2Bd6P15YeFScwPm8hFhmOwoj040pimPMsJxSxpvUnKSvnq3XMWo3CHSbVUKTgkHNrWM20YMUiNfjbgGYqyG0vjmrQlanjoI0wLE5nR1xTgtTwZwGwDd1uAtPTNfloc5V3NU3ZzR8a6bBMJMkWwsSTxo4Wt7UdRsDvJegA1sm0k1PSFs1K0fVZ97YLgD8bC%2FKWNYqOcE2FdBK1dmyNmTmegyfhECCbqsP1hpYK8lEh0ry%2F7X1ykJlymg%2FzMwCsq33e3FgGOIukTdK5ME1GgH1R27XoQ3%2Bs6xVwXW%2BHs5%2FOWsiXQB1pMYvKxfmaw07oDT187fV2mfhkPofWEJked8q2I%2BmEagVhQ%2BzJQr%2Bm6W7XJrZMKihxskGOqUBr%2FmW3FjNuuT7jcvGNLZ%2Ft99XdXtAYH6sJk8W96ZfJZ9LhMIqGWuj8gYfDjWJiV30MaOeosp1fyoBaZ19G3RrA3dKfdG8O%2BK%2Fko0pZN4%2FfczIHW14VVQqS0PbL%2BG4l2kmXOyhkIC%2FsBfqIpgWoekoWNIlSQm4exVJaVEVQiZCmK%2F7fwo%2Fy%2FbKiaviw13KbIh1qSsQFVHjSdfzHeKe5KsJNdJiUpvZ&X-Amz-Signature=5d8aef393ab093caa808ee5056be5925c92a68d2281b8f5bdb92a616a2e993da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

