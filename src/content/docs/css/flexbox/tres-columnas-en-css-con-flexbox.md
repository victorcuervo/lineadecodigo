---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMAQ2G5W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV13xTggwNVa5Oziyq1s%2Fq1p2fp5OcOoXIAfhIPv3dWAiEAigg6s6qjWAITPRBmxEo%2FztNcfsMwi%2BSZ19x3IDnwkUAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlZOnle%2BNVTKEXc4yrcA8ruXzRcmR5sffpL07%2FVubc6B%2BXBXqQ5K8zEDxi3ItBsZa%2BFPG%2F5zNmb8KlARAqz%2FIaoRFNyC8FtxomG3XBqIbOPNnOLcZTOVd%2FUz4Ntlpsh6BzzRZLpln7HiulCmkAVQ5mE8Yfg%2F4t1bm3VDs9Io%2Bi2oI5VCF1iwm8Uj0uv1v5KtWzP5YR%2FLvl5FQsB4gMZRdPVB3lh%2FTfvAK0sKMlPU5IjhJ57m3MT9kGd1oBwou1Fcd%2FefyHREVzI%2FVLXaujZdpf8lBv8sjMuAvtcs4WYGrOvhPn6Hr%2B%2Fspe%2FnS225Y4jyRFT0VGxI7NOVuWgqzDV4sbH226x%2BVIRKvslSOafsxrwJV4SLEK%2Fcxlw0WPudQ83DYPb3bMDdybUrsCOKiWKC8TDW0ZTZLY9ubsXbsFVmd%2FjcrozP8ffOnRBzYuTHUBq4UfHW77RsRROgGgloZJA65UGg5Jlae%2B2YLK9bJPeMdSluitfVfB%2B42%2FYCf6duW5B3m9pCSTeqQWQNdxDUwRYlOdN1CVPng30EGYP%2FBVNzlJF8rbdsHgNmYVY2%2BtNz5fbLca%2FzOMbkm46RtObQU6SlRQuuyd%2F3oyJ5zO2y57aXZts0PEQPB0wxWJ7y9ZYTcmwwKzAsgyWWNtc8UADMPuz2ckGOqUBbHrHlDXfMaqpUCOsImIN929zFAVZh4Y%2FRA1MYmnk7V0k49%2BcE42%2F7qUxuXrVN08H4geqTGon9ba3s%2FH7bRjnMpBYLwBmsPu2tBUbtbLKQE9GvCo10lo2m%2BNxxdbNYZqYdPlJQ5Nhz8aqLbOUciZhrMBvj4TboSoBRyXABMAXhbeF%2B48hfiW9BD6bzxIMX0wkRsIVjCUDY5buPSxHtcVaFuZM1qRX&X-Amz-Signature=2743eadc0f9bd09f7bfe79eec8ad753e29696cc9bc8b10b64513f83f91d7a858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMAQ2G5W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV13xTggwNVa5Oziyq1s%2Fq1p2fp5OcOoXIAfhIPv3dWAiEAigg6s6qjWAITPRBmxEo%2FztNcfsMwi%2BSZ19x3IDnwkUAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlZOnle%2BNVTKEXc4yrcA8ruXzRcmR5sffpL07%2FVubc6B%2BXBXqQ5K8zEDxi3ItBsZa%2BFPG%2F5zNmb8KlARAqz%2FIaoRFNyC8FtxomG3XBqIbOPNnOLcZTOVd%2FUz4Ntlpsh6BzzRZLpln7HiulCmkAVQ5mE8Yfg%2F4t1bm3VDs9Io%2Bi2oI5VCF1iwm8Uj0uv1v5KtWzP5YR%2FLvl5FQsB4gMZRdPVB3lh%2FTfvAK0sKMlPU5IjhJ57m3MT9kGd1oBwou1Fcd%2FefyHREVzI%2FVLXaujZdpf8lBv8sjMuAvtcs4WYGrOvhPn6Hr%2B%2Fspe%2FnS225Y4jyRFT0VGxI7NOVuWgqzDV4sbH226x%2BVIRKvslSOafsxrwJV4SLEK%2Fcxlw0WPudQ83DYPb3bMDdybUrsCOKiWKC8TDW0ZTZLY9ubsXbsFVmd%2FjcrozP8ffOnRBzYuTHUBq4UfHW77RsRROgGgloZJA65UGg5Jlae%2B2YLK9bJPeMdSluitfVfB%2B42%2FYCf6duW5B3m9pCSTeqQWQNdxDUwRYlOdN1CVPng30EGYP%2FBVNzlJF8rbdsHgNmYVY2%2BtNz5fbLca%2FzOMbkm46RtObQU6SlRQuuyd%2F3oyJ5zO2y57aXZts0PEQPB0wxWJ7y9ZYTcmwwKzAsgyWWNtc8UADMPuz2ckGOqUBbHrHlDXfMaqpUCOsImIN929zFAVZh4Y%2FRA1MYmnk7V0k49%2BcE42%2F7qUxuXrVN08H4geqTGon9ba3s%2FH7bRjnMpBYLwBmsPu2tBUbtbLKQE9GvCo10lo2m%2BNxxdbNYZqYdPlJQ5Nhz8aqLbOUciZhrMBvj4TboSoBRyXABMAXhbeF%2B48hfiW9BD6bzxIMX0wkRsIVjCUDY5buPSxHtcVaFuZM1qRX&X-Amz-Signature=c16a4baa850a99f3e3ade9f176b0bd63de3ae7b3b4291dd8558005d3ed15a2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

