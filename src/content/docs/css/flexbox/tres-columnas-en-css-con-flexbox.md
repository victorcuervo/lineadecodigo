---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRERJE7W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDCqcsH8gmltwdhfQM8ezwrTbsIxKXDIS50TCPXAv%2FXlwIhANm%2BXS356I1hBLWwmM29s2sn08OlBVhZmWoQ1SmwveZpKv8DCDwQABoMNjM3NDIzMTgzODA1IgxyHJC1tpDQcfeaPUkq3ANDqT9OJo6s9fPVmZPK1OcTRXspWwjBK0bch7jvDSwhvKVt83N5UPg87Dt6y%2BoFlsFCTKxSk1tlY1BacdM4LUdVw5Y2OjtwjzY1rc7R3nDrR%2FBugaK5bUc%2BMamm9iBWG192c0qa%2BiSVdUBfHi4EI%2FrA1Oc3f0FfQOTgIXkO6GeQ4qxUvBrv3cGfhHMJ4SsHZXr8v%2FNWMm9TViHJ0ED%2Bs69Rg9%2ByNU%2BrRsfXk0y44OIUtiYm8UpSzVBnoGwV68kzjuGFXYRo27IJ%2BWVFhVbflp%2BISmMFQETHlmN6PNS9jsA47z2xam9mfxXBuxIb8FN6BAvYQVv2yIVWNqYHrc%2F6bK2gM3RmIpzqJybRcypQhI74dlWVX%2Bz7w7u7bZrblzuus3tzTayuK7lzONNIk0ZDmAJbuFgdFtDNJcQUEIbALeZFNu5zX8cOHUjw1eZMvS%2FWDUggEz8Fhd4iSKYytiDHFBa3%2FsB4DHe1WpvNye0DEUxvH79edgCHPbPtMUAJVfhar%2Bycpo%2F44ah7dFwfnLHPSKHKcbsCwI3892Bm3Sskbbz2eFTpgzDCxrTjqDk6EtN%2BkoCGZGYysOtx5G5kpX9egfTQ0w3bIh1WXd1qP3z9iv5NRzQed%2BKHdGITUaUgsDCC9cPJBjqkASc93mKZfXF3x1k89vTA%2FbZ1CmbkCiJkcoGRCkdlCoAh%2BwU1JTStKNI3rqyBHcwpqw%2BU1DHrb7Lf3P8DVP6k4yEQ%2B0UxdOyJLi1rTpaD3GyH9jDGaYhB5mF8VSk0wYsD60b8Uc9rGsJ170W4u8c5zqaWMCYuNl%2FToTilnm9zl2w4ybI7TygpvObrn8qTCks1IVzptMz4P0fuAvz%2Fv6kBjB5ZAijj&X-Amz-Signature=03e6ca8cb36a62d34b72402831ebf6ae276a1cddefcc471d06119699fa6286cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRERJE7W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDCqcsH8gmltwdhfQM8ezwrTbsIxKXDIS50TCPXAv%2FXlwIhANm%2BXS356I1hBLWwmM29s2sn08OlBVhZmWoQ1SmwveZpKv8DCDwQABoMNjM3NDIzMTgzODA1IgxyHJC1tpDQcfeaPUkq3ANDqT9OJo6s9fPVmZPK1OcTRXspWwjBK0bch7jvDSwhvKVt83N5UPg87Dt6y%2BoFlsFCTKxSk1tlY1BacdM4LUdVw5Y2OjtwjzY1rc7R3nDrR%2FBugaK5bUc%2BMamm9iBWG192c0qa%2BiSVdUBfHi4EI%2FrA1Oc3f0FfQOTgIXkO6GeQ4qxUvBrv3cGfhHMJ4SsHZXr8v%2FNWMm9TViHJ0ED%2Bs69Rg9%2ByNU%2BrRsfXk0y44OIUtiYm8UpSzVBnoGwV68kzjuGFXYRo27IJ%2BWVFhVbflp%2BISmMFQETHlmN6PNS9jsA47z2xam9mfxXBuxIb8FN6BAvYQVv2yIVWNqYHrc%2F6bK2gM3RmIpzqJybRcypQhI74dlWVX%2Bz7w7u7bZrblzuus3tzTayuK7lzONNIk0ZDmAJbuFgdFtDNJcQUEIbALeZFNu5zX8cOHUjw1eZMvS%2FWDUggEz8Fhd4iSKYytiDHFBa3%2FsB4DHe1WpvNye0DEUxvH79edgCHPbPtMUAJVfhar%2Bycpo%2F44ah7dFwfnLHPSKHKcbsCwI3892Bm3Sskbbz2eFTpgzDCxrTjqDk6EtN%2BkoCGZGYysOtx5G5kpX9egfTQ0w3bIh1WXd1qP3z9iv5NRzQed%2BKHdGITUaUgsDCC9cPJBjqkASc93mKZfXF3x1k89vTA%2FbZ1CmbkCiJkcoGRCkdlCoAh%2BwU1JTStKNI3rqyBHcwpqw%2BU1DHrb7Lf3P8DVP6k4yEQ%2B0UxdOyJLi1rTpaD3GyH9jDGaYhB5mF8VSk0wYsD60b8Uc9rGsJ170W4u8c5zqaWMCYuNl%2FToTilnm9zl2w4ybI7TygpvObrn8qTCks1IVzptMz4P0fuAvz%2Fv6kBjB5ZAijj&X-Amz-Signature=51a8fd57f6508e22fae4ce28568305b41d0783945630199dd6a82daef4bcf7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

