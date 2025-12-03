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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T44VRG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGD3s0ig8klTwhZk9z8psVwek1h3Agse9URMYB2OdwlTAiEAhq62VOx3ScARl%2BeHG0mFfX%2Bqcu1BnK%2Bu8n2sWVbH4O0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBTAx%2FfsXRR62EHJ7ircA6SzfCVgDmOhcER9gpvq5hlf350TnIrFeAjyoJtyxR0pPt%2BQlnnARRj3WG1o%2FJrrtvWcP2GGaEU6qSLTiN063ltQTWtzmMYSNSGNsGrdHTr9IWPJR1hriMiLzNdiuBvuE5VrDHHi7ca1AzszmtLE8aK30ZpF%2FlWJTjM0CZ0debRkJY83vf307Pxo5FQoRZqFFlm%2BpeimU5yqjAuKIhb4Gi7gQF2sK6Dz0XxrOXTui591xm1CJLNG87NGnCQZHLzdT4Yvid%2FkSIzpTHPQwpVH%2BkQ4CAxZbWPNQpcQtn35FXSKrAKPleFUBxCqZNWCGhnkYQT09WtYVYhkoSYYVMFWoiBa%2BqOdeMrZrRrcHCTQPGUzS42Xcx3A%2FOw8pavaCxYS0jpuCR33kDCXYdS0itX%2FzHpzVt1ltblcF3%2BDgChn4X7vhU%2FkHXsIHcQTrZjE2bOoEzh9UFr5jLuqSfojv7z82GLEd162M4SrFnAjHggyMWIjcDf%2BxTqhsYbV3fviucsUQqy8Vf%2Bm9CiJehdoIcvlrITNuJ7m4YfPyfQNSA5QrgFKOBcyikCbQdRxwIPMHim4%2B%2BPEuJamkCU%2FVtUkgdBGUdAmGcTkSOhORj%2F3Lkdqm7oE7DwuXF0ue63oK%2F4oMIHbwckGOqUB0C0QlZ1K4ddFR%2BDGF1Wy%2FInT9xwe3kmaOOqevqrGZMf7KcYo52V%2FRJapSyg5ePEcNGiUCGMJmLxo%2BFDq4i0CL3q2RiLzUyGgvB1CLaiOo8Xa4mcOyMAY9VipeYI5hUe3q3qskYasUKT5q%2FKDT03I2Q3y3uR3OzTt6fT8mNlhgp1nLix4b4zl23SAWBz4uUT50xE%2BFM4Q3xpOl5gBpIELse0L4GLQ&X-Amz-Signature=a2c026361793070710263d6d55e9d74b5b3f812df0222a10b242f3f68a9116cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T44VRG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGD3s0ig8klTwhZk9z8psVwek1h3Agse9URMYB2OdwlTAiEAhq62VOx3ScARl%2BeHG0mFfX%2Bqcu1BnK%2Bu8n2sWVbH4O0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBTAx%2FfsXRR62EHJ7ircA6SzfCVgDmOhcER9gpvq5hlf350TnIrFeAjyoJtyxR0pPt%2BQlnnARRj3WG1o%2FJrrtvWcP2GGaEU6qSLTiN063ltQTWtzmMYSNSGNsGrdHTr9IWPJR1hriMiLzNdiuBvuE5VrDHHi7ca1AzszmtLE8aK30ZpF%2FlWJTjM0CZ0debRkJY83vf307Pxo5FQoRZqFFlm%2BpeimU5yqjAuKIhb4Gi7gQF2sK6Dz0XxrOXTui591xm1CJLNG87NGnCQZHLzdT4Yvid%2FkSIzpTHPQwpVH%2BkQ4CAxZbWPNQpcQtn35FXSKrAKPleFUBxCqZNWCGhnkYQT09WtYVYhkoSYYVMFWoiBa%2BqOdeMrZrRrcHCTQPGUzS42Xcx3A%2FOw8pavaCxYS0jpuCR33kDCXYdS0itX%2FzHpzVt1ltblcF3%2BDgChn4X7vhU%2FkHXsIHcQTrZjE2bOoEzh9UFr5jLuqSfojv7z82GLEd162M4SrFnAjHggyMWIjcDf%2BxTqhsYbV3fviucsUQqy8Vf%2Bm9CiJehdoIcvlrITNuJ7m4YfPyfQNSA5QrgFKOBcyikCbQdRxwIPMHim4%2B%2BPEuJamkCU%2FVtUkgdBGUdAmGcTkSOhORj%2F3Lkdqm7oE7DwuXF0ue63oK%2F4oMIHbwckGOqUB0C0QlZ1K4ddFR%2BDGF1Wy%2FInT9xwe3kmaOOqevqrGZMf7KcYo52V%2FRJapSyg5ePEcNGiUCGMJmLxo%2BFDq4i0CL3q2RiLzUyGgvB1CLaiOo8Xa4mcOyMAY9VipeYI5hUe3q3qskYasUKT5q%2FKDT03I2Q3y3uR3OzTt6fT8mNlhgp1nLix4b4zl23SAWBz4uUT50xE%2BFM4Q3xpOl5gBpIELse0L4GLQ&X-Amz-Signature=e371612073f96539f52ce8b1c11d18ea1e179700746ac2e1a6afa2138ce2e517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

