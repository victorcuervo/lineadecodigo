---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNS4F7XE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHyvJQ8V2Z6%2Bg6DNsBXSPkqU8zI%2F8Rth0aXE8csORuBAiEAkrL0aTHndrmI5VwDns98pRDFfgqqPgtevfpqTWu2UoMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKsgALwrY90mHNw89SrcAygRTrHsTzj1gJaZSj3YlRCtqr40sXxfUf%2BG5AoSUywujULE7cvuuud2RG5NhpONl4DKi3TnMGy3CS6hYDRuL01wGdJKB2gxffQa%2FvhTUQMgI4ta9cmioEsJv4tc9QjQWrhkivGKRq7Yz6O3KVIZPFeX8hA%2BTOfgYj1iwg19kknxTQg%2FAiDKPhZrrbm3m1NNKCvMjZk29UEM0P00WjbkPM6BpO0DH2o405FETa%2FySZDD3A%2BCkgF3uJWm9sjBeZjrb4OOs9qaiD4UJBvN4s6n5uzzMFxiv5Prk5r9ek78BYtl%2B60IvaxSVad66EY9E0mdrymehnUyIMbLq71Vw%2Be3pgBKqGkz4%2FNVfWnvm902I84sBvhnU0PAMXNKOH2qbRvMSTc1zfvKpa%2FAwiBRWjx0278eEVHxqGQbaW0PcR2LZY4qWOs5X8nsMb88xXX7MXFNjoKQj9t05vi2Sh45ykCD2%2FTyWkgaJ7F7Wo2PKwAYY4tUchg7NicBPAF2AjzNqI3axJkvQrFVn9%2BVTXzbH7dIhTGzIrDtdeXBEfl6CByfmEvYI32qU7G%2BeR5JlAUoSCcmwodH9RYAtyxXbZjUF4TVYDPN5O4EtodzYN%2F3P40oBR1uYmxPdos9kY5hU3dBMPi8z8kGOqUB5xQq4rIEAH%2FcftUQMNiscjRtxclh2Y7GcFgKxP2tKJXwnIjTWGDgI2jfWb6IOjYk9veSHW9sCZh3L5uIG1jOK406Oij3wIM7mTkWIxXOgXyJb45NFO2LhUmw65nXf%2B7tQgSVeWBCudefXQY371CRcmAgpoiJ%2FXHGGUpiaTee2GAVUedHgdU99kebzOGZQ8xFjSg1pt1YPXiWtDVVhSJpFzEG8Ti3&X-Amz-Signature=a0c51af1a909d9099fc2b3ad6c81b08354e466d1fe7783c9cf34b87cbe59fa99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNS4F7XE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHyvJQ8V2Z6%2Bg6DNsBXSPkqU8zI%2F8Rth0aXE8csORuBAiEAkrL0aTHndrmI5VwDns98pRDFfgqqPgtevfpqTWu2UoMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKsgALwrY90mHNw89SrcAygRTrHsTzj1gJaZSj3YlRCtqr40sXxfUf%2BG5AoSUywujULE7cvuuud2RG5NhpONl4DKi3TnMGy3CS6hYDRuL01wGdJKB2gxffQa%2FvhTUQMgI4ta9cmioEsJv4tc9QjQWrhkivGKRq7Yz6O3KVIZPFeX8hA%2BTOfgYj1iwg19kknxTQg%2FAiDKPhZrrbm3m1NNKCvMjZk29UEM0P00WjbkPM6BpO0DH2o405FETa%2FySZDD3A%2BCkgF3uJWm9sjBeZjrb4OOs9qaiD4UJBvN4s6n5uzzMFxiv5Prk5r9ek78BYtl%2B60IvaxSVad66EY9E0mdrymehnUyIMbLq71Vw%2Be3pgBKqGkz4%2FNVfWnvm902I84sBvhnU0PAMXNKOH2qbRvMSTc1zfvKpa%2FAwiBRWjx0278eEVHxqGQbaW0PcR2LZY4qWOs5X8nsMb88xXX7MXFNjoKQj9t05vi2Sh45ykCD2%2FTyWkgaJ7F7Wo2PKwAYY4tUchg7NicBPAF2AjzNqI3axJkvQrFVn9%2BVTXzbH7dIhTGzIrDtdeXBEfl6CByfmEvYI32qU7G%2BeR5JlAUoSCcmwodH9RYAtyxXbZjUF4TVYDPN5O4EtodzYN%2F3P40oBR1uYmxPdos9kY5hU3dBMPi8z8kGOqUB5xQq4rIEAH%2FcftUQMNiscjRtxclh2Y7GcFgKxP2tKJXwnIjTWGDgI2jfWb6IOjYk9veSHW9sCZh3L5uIG1jOK406Oij3wIM7mTkWIxXOgXyJb45NFO2LhUmw65nXf%2B7tQgSVeWBCudefXQY371CRcmAgpoiJ%2FXHGGUpiaTee2GAVUedHgdU99kebzOGZQ8xFjSg1pt1YPXiWtDVVhSJpFzEG8Ti3&X-Amz-Signature=a9e157d580d442b59709710db3e94f868309cec68c8ea9385990fa19536d13fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

