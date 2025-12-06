---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM7UW3L7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDk%2BUXJllCiI7wpOp%2Fz%2BE3tSdQLKhFx3kG4EqXcgSEcyAiEA4hweZKxyTKASwwqQyX7%2BoM1NUsega0hdNIqQhJlWIEQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHvyag6Q3eJOZdt9uircA6V0zSbjqKfnnIVBAToXhaHiQUC5k1XKhe1KVH8L1O26A9yMVU2ocQsJPXSJ5eATzroHmnkYR9%2B6qcgUhlJYt1vRtqbYJZZjNF%2F%2BQWVj6Q8LIpQizl1nLK%2FKpgy9si%2Bo82unBWhTyKUSoMo0WvuOQUl9I28JN37j7GmL6fi7mbj%2FHaUZMObVXtQM2NCpiEpXkeW49xzYqVEjXhbVJPBVRa2kA%2BeyOcVTr3bWBtNUrnFGf4AM4v8%2FevjKtTSeYTEyulESu6qNOe4Zk3d7YzLPB5uhJWeDjJPcIdUoUHGdT9l%2BbyAVNjUVgKZQrH0A6UrmrDsE9rZFWFJmtn9j54zi%2F9VXEbvWsjl3QMDpDvdDGYrDHma%2Fui2oWKlwMul881thkex7nbS7STKT9XvPpAIO5w03%2BVMAvaVbl12RhPH7h%2F%2F9Hzh0RkH90CotTSspGW4e0Uvy2y6jok3kU%2FPq4v9W9FlZVRKwhMOllIFagVA5HSFB9bJpR4z%2FjoVoT74wKIn%2BaepN%2Bu2Jq13J1tsb9tdrZrB%2BFnGfJYoq8NHebhA4EDYA13VtzTWupSpBXrWO%2BhGUafg3ynMbBmnnn6JqlVIlEUvLXVHYhwoeCKXVUfAl4T%2BxWcvmmNw3ERNUUZpVMJK9z8kGOqUBRIqrq3Ij%2FIPLXJmdm6VrL6NZXAr9GpM8j0oWnSWho5fgau31yzoqRilidwmn0UApS%2BHawEnocz%2Fme6%2FdmczESgB0129tM2oN7Xje6hYpr%2FRLAz5OhleuBkbMBN47x%2F2LATbrRE3w0glfyVl3HktY8Dmm6I2vNcUvo%2FIkhPlTrXZseq7CGZkbzjllqpqfOg%2FaXUoR8%2BhYjX0kD4Zq0wRn5HwYv2XY&X-Amz-Signature=54a0bf0541644d9dc64ca025ce5e124eb45b0315c3c163f28193cbf01a89ac1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM7UW3L7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDk%2BUXJllCiI7wpOp%2Fz%2BE3tSdQLKhFx3kG4EqXcgSEcyAiEA4hweZKxyTKASwwqQyX7%2BoM1NUsega0hdNIqQhJlWIEQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHvyag6Q3eJOZdt9uircA6V0zSbjqKfnnIVBAToXhaHiQUC5k1XKhe1KVH8L1O26A9yMVU2ocQsJPXSJ5eATzroHmnkYR9%2B6qcgUhlJYt1vRtqbYJZZjNF%2F%2BQWVj6Q8LIpQizl1nLK%2FKpgy9si%2Bo82unBWhTyKUSoMo0WvuOQUl9I28JN37j7GmL6fi7mbj%2FHaUZMObVXtQM2NCpiEpXkeW49xzYqVEjXhbVJPBVRa2kA%2BeyOcVTr3bWBtNUrnFGf4AM4v8%2FevjKtTSeYTEyulESu6qNOe4Zk3d7YzLPB5uhJWeDjJPcIdUoUHGdT9l%2BbyAVNjUVgKZQrH0A6UrmrDsE9rZFWFJmtn9j54zi%2F9VXEbvWsjl3QMDpDvdDGYrDHma%2Fui2oWKlwMul881thkex7nbS7STKT9XvPpAIO5w03%2BVMAvaVbl12RhPH7h%2F%2F9Hzh0RkH90CotTSspGW4e0Uvy2y6jok3kU%2FPq4v9W9FlZVRKwhMOllIFagVA5HSFB9bJpR4z%2FjoVoT74wKIn%2BaepN%2Bu2Jq13J1tsb9tdrZrB%2BFnGfJYoq8NHebhA4EDYA13VtzTWupSpBXrWO%2BhGUafg3ynMbBmnnn6JqlVIlEUvLXVHYhwoeCKXVUfAl4T%2BxWcvmmNw3ERNUUZpVMJK9z8kGOqUBRIqrq3Ij%2FIPLXJmdm6VrL6NZXAr9GpM8j0oWnSWho5fgau31yzoqRilidwmn0UApS%2BHawEnocz%2Fme6%2FdmczESgB0129tM2oN7Xje6hYpr%2FRLAz5OhleuBkbMBN47x%2F2LATbrRE3w0glfyVl3HktY8Dmm6I2vNcUvo%2FIkhPlTrXZseq7CGZkbzjllqpqfOg%2FaXUoR8%2BhYjX0kD4Zq0wRn5HwYv2XY&X-Amz-Signature=01452f4340c782360acf9661d217dd160ba806aeb26660163fdd255c98dd07a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

