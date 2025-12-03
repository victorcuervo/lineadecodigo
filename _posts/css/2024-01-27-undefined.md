---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTV66ZX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC5Qeb6szwl2yHY69ovZFSk%2FBu95eUpwWeW%2BbMBvhV2OAIhAIUjCE%2BqxvdLtoAEgftGWBY0maOKM%2FgmgaXRMjJvqlY8Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyYIgMiIU3jNda2VuUq3AOtxkUtz%2BHJHYrkYtL98LniRAiv1GFKur7E10TOw4EinOoTnOM5qhfJeA1Efu9e3h6%2FPQk8iupnZzSWYrHIl3MZIADYTV%2BxK%2BSLaz3cbc2UjZGNSg60UOmBncZHn5tkmHjWXtb%2FQ4kcny%2FM%2F5l%2FYvUGGtCft40jOMNH9SLEM%2FFtv9tKCfpiRG2rfTQs2cGnMc01ROLAmShWTPMODJIm2JmGEbz%2FTJG3cIbf2Aii%2BGdQLUNnbun6%2Fo2343GLCvpZXbOKZ8BA8oE368mOiyTZYaU3wWeQatMr9G1eE1qkito6S0Il7ISm07I6p8g8na1sWWA4SIARRhxrL2NKjewTFprtGHAeBt1gnvq4K5y3HzYxIeUl%2BaskcIyazzNZn87x%2BniYUECzkaoWsqXbOkqHUUujIBhVkgieZNKTUZ%2B5Uxwb8GCTXRVOlFmQrd4N5bQ8tS3QuzRLuzCMTQNdQ%2FL7zaQn2ScgGRh74edvMTprrdvZC07lf8r%2B9xC9lGNDsVeVE1A700GS%2B7m21JkgwDSxWbus1OecTymf9sif34g9GMZO8Cgvv2wfStxht37zZJnBzPFLJL8F%2Bcgelrpfl40G3AMlVS42NPELKVP83JWXMVV6MK5Voy3y5ZncTzSipDC2lL7JBjqkAcUHpeuZbtqJbIjsvhPdIdOsb0o8ocfZJQKsQUkISFSMMUAgb0SCcstY2BpjxJwur93vi0pDLuuAiwHK74rKWi3Q2rjZ6FfzXysj6n09FBOLoUlFKULvj4Z8qwG8ZHSZh0MUh%2BfpoMB7jhQGlQczw%2FonFZo3jQxGRW5V1GzHcBbLsRA8w3e85BUMyZEOE7mZCPulIoaItnhkpwh%2BMYPRxjKVvMJA&X-Amz-Signature=03d55e1829cd412ff28e78881a8d1148422e2050551f64f8e89a54a0bd8791a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTV66ZX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC5Qeb6szwl2yHY69ovZFSk%2FBu95eUpwWeW%2BbMBvhV2OAIhAIUjCE%2BqxvdLtoAEgftGWBY0maOKM%2FgmgaXRMjJvqlY8Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyYIgMiIU3jNda2VuUq3AOtxkUtz%2BHJHYrkYtL98LniRAiv1GFKur7E10TOw4EinOoTnOM5qhfJeA1Efu9e3h6%2FPQk8iupnZzSWYrHIl3MZIADYTV%2BxK%2BSLaz3cbc2UjZGNSg60UOmBncZHn5tkmHjWXtb%2FQ4kcny%2FM%2F5l%2FYvUGGtCft40jOMNH9SLEM%2FFtv9tKCfpiRG2rfTQs2cGnMc01ROLAmShWTPMODJIm2JmGEbz%2FTJG3cIbf2Aii%2BGdQLUNnbun6%2Fo2343GLCvpZXbOKZ8BA8oE368mOiyTZYaU3wWeQatMr9G1eE1qkito6S0Il7ISm07I6p8g8na1sWWA4SIARRhxrL2NKjewTFprtGHAeBt1gnvq4K5y3HzYxIeUl%2BaskcIyazzNZn87x%2BniYUECzkaoWsqXbOkqHUUujIBhVkgieZNKTUZ%2B5Uxwb8GCTXRVOlFmQrd4N5bQ8tS3QuzRLuzCMTQNdQ%2FL7zaQn2ScgGRh74edvMTprrdvZC07lf8r%2B9xC9lGNDsVeVE1A700GS%2B7m21JkgwDSxWbus1OecTymf9sif34g9GMZO8Cgvv2wfStxht37zZJnBzPFLJL8F%2Bcgelrpfl40G3AMlVS42NPELKVP83JWXMVV6MK5Voy3y5ZncTzSipDC2lL7JBjqkAcUHpeuZbtqJbIjsvhPdIdOsb0o8ocfZJQKsQUkISFSMMUAgb0SCcstY2BpjxJwur93vi0pDLuuAiwHK74rKWi3Q2rjZ6FfzXysj6n09FBOLoUlFKULvj4Z8qwG8ZHSZh0MUh%2BfpoMB7jhQGlQczw%2FonFZo3jQxGRW5V1GzHcBbLsRA8w3e85BUMyZEOE7mZCPulIoaItnhkpwh%2BMYPRxjKVvMJA&X-Amz-Signature=f37cb252cd044167134c5170b0fe473f039f5504506d0d01d66d8a7aad17d2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

