---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CQ52M7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDq%2B1x%2BMtrszdDgIp7jKDoaR36aa2z3uI4%2Fi1UT4Fby9AiEA%2B5oYvCSuyZgL5FYWRcS2NatPA2GTKp4o9ujRmx2Rj9UqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOThFEB%2FNbyhsKblpircAyYc3iUOylYVekhVQpKlKGwnHVlAu9olzp9bU4ouYOrnJoHrBTMDPTYp%2FlK25w4pHae1HaLZNDpFLJR0Fvuo3DkLOrxDoFYsaRSRvgsMwJC%2FtunFyWI3ybZvmZnwUgECpOqTahaww%2F94iPgDs%2BRcaMOCjDDBA1bV0W5FX2419fqsbEHL3q5tbjLif7zjd5WejwhJ4el4JjNVi02d6n5Jo8bKBVryXZ%2BwK38BZJJOJfxxZG517h4yhIxgireMEMh%2FF7qebJYxmBCMLNx7biT2VPHqQWdZK9YmnT7Bw4RR9peF7JQr18ljZOlZAGYIh8imztIkacavce4OTiWJw%2BdAN7nT7UO857%2B6GU4bVimh6gCQnkII3Kce7bV6DzqpGbAQrRZm2AvBEpEySEsPtVSm6zmX9KbBLjJRYFDp1gmHYR0CCEHDsFbdXcCk5Asw8OY%2BmvxtjPtnVTc83lGTkHiPt6ReBqDscMSnDMOVFBC4zlVio5muab7VfoPdBESuxo1%2FvIJSiWyhUW9mrhwkCUyFI9gArqRQtoabOYkLSkwxzODZzZORz2X%2BUoRm4zhZUHA%2B0TGVO1X40bmg4QOohYnQ%2BgcUSo4DksH%2Fk24kn71zfxnEj2gLsBm2Ob%2F0HVUTMPmU2ckGOqUB71bzSoXXnxM1jiAc3zuPKx7ZAMRbb9M8AuULqzGisUFwvPcoTn%2BDZMC%2Fx4gJ%2FxFXfPHspBKUauDNJXgJRbs3t9nWJtKHgCXfICjkadBga7dIEmOFT4ipWaolNExOUfPsWGH%2BHMRIOGZf%2Fu5%2F8QGXUVAfdjWrhHmjo64oLqJ26HBZ1P8cJH2gG1LIoNTs7Gfjjn1zNHu3D3QKg8g%2BQeK7QZ4TuLaV&X-Amz-Signature=450cf620a8f37e6b859d48ffa9db115cd14f72b0455a6998b0f63690a9a7854f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CQ52M7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDq%2B1x%2BMtrszdDgIp7jKDoaR36aa2z3uI4%2Fi1UT4Fby9AiEA%2B5oYvCSuyZgL5FYWRcS2NatPA2GTKp4o9ujRmx2Rj9UqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOThFEB%2FNbyhsKblpircAyYc3iUOylYVekhVQpKlKGwnHVlAu9olzp9bU4ouYOrnJoHrBTMDPTYp%2FlK25w4pHae1HaLZNDpFLJR0Fvuo3DkLOrxDoFYsaRSRvgsMwJC%2FtunFyWI3ybZvmZnwUgECpOqTahaww%2F94iPgDs%2BRcaMOCjDDBA1bV0W5FX2419fqsbEHL3q5tbjLif7zjd5WejwhJ4el4JjNVi02d6n5Jo8bKBVryXZ%2BwK38BZJJOJfxxZG517h4yhIxgireMEMh%2FF7qebJYxmBCMLNx7biT2VPHqQWdZK9YmnT7Bw4RR9peF7JQr18ljZOlZAGYIh8imztIkacavce4OTiWJw%2BdAN7nT7UO857%2B6GU4bVimh6gCQnkII3Kce7bV6DzqpGbAQrRZm2AvBEpEySEsPtVSm6zmX9KbBLjJRYFDp1gmHYR0CCEHDsFbdXcCk5Asw8OY%2BmvxtjPtnVTc83lGTkHiPt6ReBqDscMSnDMOVFBC4zlVio5muab7VfoPdBESuxo1%2FvIJSiWyhUW9mrhwkCUyFI9gArqRQtoabOYkLSkwxzODZzZORz2X%2BUoRm4zhZUHA%2B0TGVO1X40bmg4QOohYnQ%2BgcUSo4DksH%2Fk24kn71zfxnEj2gLsBm2Ob%2F0HVUTMPmU2ckGOqUB71bzSoXXnxM1jiAc3zuPKx7ZAMRbb9M8AuULqzGisUFwvPcoTn%2BDZMC%2Fx4gJ%2FxFXfPHspBKUauDNJXgJRbs3t9nWJtKHgCXfICjkadBga7dIEmOFT4ipWaolNExOUfPsWGH%2BHMRIOGZf%2Fu5%2F8QGXUVAfdjWrhHmjo64oLqJ26HBZ1P8cJH2gG1LIoNTs7Gfjjn1zNHu3D3QKg8g%2BQeK7QZ4TuLaV&X-Amz-Signature=20f6bc0dfb105910c89dcf0a1464e1af08d7f3df0b6efda80712a18ee4a69f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

