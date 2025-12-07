---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWURRHU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSe%2F3%2FBuGgyYj39%2FrN8ukaVVx1OjaLzqIhgNlDjuYcDgIgI%2BGM1DWaPCMw6nPti6L2c7u7LyWNRQU8OTBj2lV4jswqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0VVCqxmBI5lYJstSrcA%2FD2BCpCt1H0x5SEW9Yr9aZfrT8boIQDuvwCADZmrwIaukxt1vYo2kwILGVibMXepV8j8FLjCd24OpnxOlqSoJmNnY7zK4VoRrA2r52k2OtaOGEJ81kXdcH6g97R4n%2FioX5gIo%2B5A1OUzLTWo%2Bdaeue5HojozmmnVWTa5IumzD3NMsDDbsRpAzAfCw2d4ioedSoAZyDTU3cq3Ixnmy1Mc5ldzq0Lvdrc8Bib23k066fQvpd%2FJeRV2WI2IQ4bmn%2B0qPPH5LtfqBhObRSHF82X1yZcbLwr4dbDho4ysGx%2BgCScF4oh9ThA12NkDYjEedDU71k8pug1tGUZS05SV3gl3u8HXJM84g7ub08XiOWDvqara3IY0NJuuYk6mHhjqYp7SZ%2BIkwXzYfDjIe9RN3YpTYvtuFrvMjVDZwV6fX7CnKT9aEqefwYL%2B8iLrvHo%2BxqFUgARgBmIfmIJUrMle%2B2yb4jJ2hb3By8Onn0G9zDFvvUEMPIusk%2FxB8BULn1OM2%2BrCCuRfWKQ5zdvCysRD2V0HO1aaDsHzpCllPmpd%2Fn1adcT2nTnKxyX6%2F74I%2FDUXLMH80pa9xgHk8TL%2BwxM%2FPxQ4FkDCC2T3TNzBidRKp8OZQyWkZIo9%2BICJKrFOjt7MKL90skGOqUBz%2Fy2PVRWrbAceYU8aTKcVYXrrn2nkX1I%2BvW6Ky%2BDvwlRBKbKXlMbbFPB2uev4zKvnsvfua7tgp4zlaaGnVTtB1KU94l4S7d54IKzMUivk3xfpDVu9erwTu1caF9X%2FHjBmTy0IMZ5rThc6eM0NBa%2FmWdT5mi2zS%2BMawU3M47MtAicHjBpfmzfanDeIuvd17iQaV0RIDh%2BcpalDBtkQPVZIn%2BWE%2B5i&X-Amz-Signature=378a02aae3770560b949301d27b52b4cc4a917b2dd7b487dd0ecff782245e5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWURRHU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSe%2F3%2FBuGgyYj39%2FrN8ukaVVx1OjaLzqIhgNlDjuYcDgIgI%2BGM1DWaPCMw6nPti6L2c7u7LyWNRQU8OTBj2lV4jswqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0VVCqxmBI5lYJstSrcA%2FD2BCpCt1H0x5SEW9Yr9aZfrT8boIQDuvwCADZmrwIaukxt1vYo2kwILGVibMXepV8j8FLjCd24OpnxOlqSoJmNnY7zK4VoRrA2r52k2OtaOGEJ81kXdcH6g97R4n%2FioX5gIo%2B5A1OUzLTWo%2Bdaeue5HojozmmnVWTa5IumzD3NMsDDbsRpAzAfCw2d4ioedSoAZyDTU3cq3Ixnmy1Mc5ldzq0Lvdrc8Bib23k066fQvpd%2FJeRV2WI2IQ4bmn%2B0qPPH5LtfqBhObRSHF82X1yZcbLwr4dbDho4ysGx%2BgCScF4oh9ThA12NkDYjEedDU71k8pug1tGUZS05SV3gl3u8HXJM84g7ub08XiOWDvqara3IY0NJuuYk6mHhjqYp7SZ%2BIkwXzYfDjIe9RN3YpTYvtuFrvMjVDZwV6fX7CnKT9aEqefwYL%2B8iLrvHo%2BxqFUgARgBmIfmIJUrMle%2B2yb4jJ2hb3By8Onn0G9zDFvvUEMPIusk%2FxB8BULn1OM2%2BrCCuRfWKQ5zdvCysRD2V0HO1aaDsHzpCllPmpd%2Fn1adcT2nTnKxyX6%2F74I%2FDUXLMH80pa9xgHk8TL%2BwxM%2FPxQ4FkDCC2T3TNzBidRKp8OZQyWkZIo9%2BICJKrFOjt7MKL90skGOqUBz%2Fy2PVRWrbAceYU8aTKcVYXrrn2nkX1I%2BvW6Ky%2BDvwlRBKbKXlMbbFPB2uev4zKvnsvfua7tgp4zlaaGnVTtB1KU94l4S7d54IKzMUivk3xfpDVu9erwTu1caF9X%2FHjBmTy0IMZ5rThc6eM0NBa%2FmWdT5mi2zS%2BMawU3M47MtAicHjBpfmzfanDeIuvd17iQaV0RIDh%2BcpalDBtkQPVZIn%2BWE%2B5i&X-Amz-Signature=3745933f06c336be589447fd92e067bda12d2a8d799dbfc168556f5c3cfc413a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

