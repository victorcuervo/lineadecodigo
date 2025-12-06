---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDUUYENY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnLlA4LHPrbKaRyIeAtgCgu6zxUCH6CaFbGcR61Nx2JAiEA48on6pu6tKyDJZ8vDVwhwq3%2BRPjiHxAQSjELKRxR1Ioq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDyd0O%2FM8%2F5Y6oEisCrcA1BoAvWDy%2BDARTYz9NMfgYM6BszAtA8zS0TLBaTl%2BnOWjQQQIppQP5zj8MB3Y4uhpDVBv0LW0zbvhvWpKDXql%2B3rSaP8q6UGtmNsTXpH5St6j6gfwoRoS1JL%2FKVOqEc2dGo%2BwOY9RLtFsd8j1QbozYX7SHk3ysG5nqkQnb0%2BEoTUkMKy9M27uJ9mp5ZbGqL4Ouzex3itkqdsjhkOBWTjTv0IjTirJerIRGpDwM4pZeXLjl6RPw8nC2LR%2BVXWs8Cc3yM8fCpOjAFY9jmuQTjJCEgxqDbpu%2FuGNassb7n9zNCHWRcHQ47CJxf3gKcl76SL7hoXPKQZQflZ%2F3nUqcz4xEe4Tj1CacseRshETTZxOs%2FKNsEQy%2BogSw3iQv7gVZePbzyo4InuDbKnfGKQm%2FWZ9Kz1XhHk3EHJMAmfNEEiuixmY3YWH3Rp%2BC8H3hsgntJEwzyUPXwV%2F1taoACqwM6hokXNpivDNKAJbHUZWuwau9yh8XgSYuNSFNHM1jKGFPb7%2B5f63R0MMdFr7bHxyFX%2BpIy0qQoqMolkeA1iEkQNRpvsYC676i9aR2XfauRTpyZgtrK2LVh1b4sdH%2Bq0XCKYE0Lf8ko0uZ9FyLP5hz2VzAk9AQHlW%2F1KwgDzvLdVMIm8z8kGOqUB7Sw9Xd0w8KL5xfwFenFPNKykFtMonf2edHg5qVp0JhtE07WZF9AEqZKwOPDdd4ffORwoXqsqqWrWVJUDcd6q83vXqm79xUqOwFZy19XSASL9Avto09FvTD9TmWWhosBAo1h9ev%2BsRXrM5kabsC4dE%2F1SXRAua9dfEKOsCdlT9qMoIduC2BYNbHHLdgNV6V9BQWzy4F9kdykviHEMjwHaeyL%2BgP23&X-Amz-Signature=ca9211b6de69575b4aaa47356736139bffc0e6103aa5b8d471e8a54de2d5d26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDUUYENY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnLlA4LHPrbKaRyIeAtgCgu6zxUCH6CaFbGcR61Nx2JAiEA48on6pu6tKyDJZ8vDVwhwq3%2BRPjiHxAQSjELKRxR1Ioq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDyd0O%2FM8%2F5Y6oEisCrcA1BoAvWDy%2BDARTYz9NMfgYM6BszAtA8zS0TLBaTl%2BnOWjQQQIppQP5zj8MB3Y4uhpDVBv0LW0zbvhvWpKDXql%2B3rSaP8q6UGtmNsTXpH5St6j6gfwoRoS1JL%2FKVOqEc2dGo%2BwOY9RLtFsd8j1QbozYX7SHk3ysG5nqkQnb0%2BEoTUkMKy9M27uJ9mp5ZbGqL4Ouzex3itkqdsjhkOBWTjTv0IjTirJerIRGpDwM4pZeXLjl6RPw8nC2LR%2BVXWs8Cc3yM8fCpOjAFY9jmuQTjJCEgxqDbpu%2FuGNassb7n9zNCHWRcHQ47CJxf3gKcl76SL7hoXPKQZQflZ%2F3nUqcz4xEe4Tj1CacseRshETTZxOs%2FKNsEQy%2BogSw3iQv7gVZePbzyo4InuDbKnfGKQm%2FWZ9Kz1XhHk3EHJMAmfNEEiuixmY3YWH3Rp%2BC8H3hsgntJEwzyUPXwV%2F1taoACqwM6hokXNpivDNKAJbHUZWuwau9yh8XgSYuNSFNHM1jKGFPb7%2B5f63R0MMdFr7bHxyFX%2BpIy0qQoqMolkeA1iEkQNRpvsYC676i9aR2XfauRTpyZgtrK2LVh1b4sdH%2Bq0XCKYE0Lf8ko0uZ9FyLP5hz2VzAk9AQHlW%2F1KwgDzvLdVMIm8z8kGOqUB7Sw9Xd0w8KL5xfwFenFPNKykFtMonf2edHg5qVp0JhtE07WZF9AEqZKwOPDdd4ffORwoXqsqqWrWVJUDcd6q83vXqm79xUqOwFZy19XSASL9Avto09FvTD9TmWWhosBAo1h9ev%2BsRXrM5kabsC4dE%2F1SXRAua9dfEKOsCdlT9qMoIduC2BYNbHHLdgNV6V9BQWzy4F9kdykviHEMjwHaeyL%2BgP23&X-Amz-Signature=5fdaf3ac35841ae20e5c9299b8455460017d730f887723c18d9e9aea31b454cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

