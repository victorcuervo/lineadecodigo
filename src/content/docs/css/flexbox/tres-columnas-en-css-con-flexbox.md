---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNHOI6HU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy%2FKD2xOARVH%2FDMgiJG7CW%2F5zdRfWVk3ZIPHaYl4fsFAIhALQaHT%2FK5hWQM4fVMyyOgun8jpf7CYn6yWBtUV46eFdlKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3DtkIEkzAsXrPCBAq3AOow%2BNDGOAHcE1YD16zZ1yJvC1%2BtZGpFbO%2BUIoV0xR7fRIifsQ%2BloIpglcRWn84CW1ifYjb0L3LMQHawnFHarYQvcn4rwvclESIy4p8OPVxplxI72Mj8ILj73LFsP5CdYxdZ%2BGGZtqCd%2BKZBlSCNfctCgf%2F3xgEdNCtypePXqkSotmhY9EaoAXTXhsjZnrUw6QU%2Bhkh1Y0Lza1byQHWkGJE62XM0NRii%2FzUiNgTu%2FyS225YfSVLixmW78dyc8jmART05olBt%2FPt5m66wK0onxO%2FLVhZ%2F2LwzvnOB6Axcu68cV980NOdvdBkviPsC0DF%2B%2FADGDnoTLZetX2qrhIbMdlBOsLtbUn9MGOe%2FkxAHvTMpbI3A%2F21uBWRxJuXK6irFRpqvKLXdXVTi7pU8ELmM1cBqRdAfL6LWA9ve51N1o8S%2FFpslzb1dyakiYwEyySah3gWAsM1RUAAxeSVi8wtnTEOFqOdVnlkDsmaEEETtGayLETyHk1Cb3GdK6A8yOuzr7mdNtYvb6GhKzduT05WTBLnr9M2UJ4UjCBxp8T%2Bko0u5CNul14x2NmWBWItljV01ROOHdEdUL71xngKlzA3ZoeF3yeS36wEbk8ApdVyA3LJzbKckGdxJtxcI9kF9zDYpN%2FJBjqkAVR1OKV6PXkOb39IATk5mrIO3SjK1OcF%2FHVu0e%2F8igx7x5hNqHcrMU7wLaKyAjeX5tERDaEgPpiPyD%2BUlWy%2FIB4%2FYG0Coy5DUmZcA%2B1mkmawEjuynwEdOCCyUaE2roli7B7Lx5s8%2BK%2F%2BxL%2FXHTst3oBaiSSYogj4u1taIrr%2FmhMMhY7V4aUA59DKDZkGtPWKBATCmDw6bdZ2Nw6dBgLOgWg%2BStcY&X-Amz-Signature=750de51f7f8be5fa4f2ca092f4809462d83f9a2e780fa9547b24e2e000735f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNHOI6HU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy%2FKD2xOARVH%2FDMgiJG7CW%2F5zdRfWVk3ZIPHaYl4fsFAIhALQaHT%2FK5hWQM4fVMyyOgun8jpf7CYn6yWBtUV46eFdlKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3DtkIEkzAsXrPCBAq3AOow%2BNDGOAHcE1YD16zZ1yJvC1%2BtZGpFbO%2BUIoV0xR7fRIifsQ%2BloIpglcRWn84CW1ifYjb0L3LMQHawnFHarYQvcn4rwvclESIy4p8OPVxplxI72Mj8ILj73LFsP5CdYxdZ%2BGGZtqCd%2BKZBlSCNfctCgf%2F3xgEdNCtypePXqkSotmhY9EaoAXTXhsjZnrUw6QU%2Bhkh1Y0Lza1byQHWkGJE62XM0NRii%2FzUiNgTu%2FyS225YfSVLixmW78dyc8jmART05olBt%2FPt5m66wK0onxO%2FLVhZ%2F2LwzvnOB6Axcu68cV980NOdvdBkviPsC0DF%2B%2FADGDnoTLZetX2qrhIbMdlBOsLtbUn9MGOe%2FkxAHvTMpbI3A%2F21uBWRxJuXK6irFRpqvKLXdXVTi7pU8ELmM1cBqRdAfL6LWA9ve51N1o8S%2FFpslzb1dyakiYwEyySah3gWAsM1RUAAxeSVi8wtnTEOFqOdVnlkDsmaEEETtGayLETyHk1Cb3GdK6A8yOuzr7mdNtYvb6GhKzduT05WTBLnr9M2UJ4UjCBxp8T%2Bko0u5CNul14x2NmWBWItljV01ROOHdEdUL71xngKlzA3ZoeF3yeS36wEbk8ApdVyA3LJzbKckGdxJtxcI9kF9zDYpN%2FJBjqkAVR1OKV6PXkOb39IATk5mrIO3SjK1OcF%2FHVu0e%2F8igx7x5hNqHcrMU7wLaKyAjeX5tERDaEgPpiPyD%2BUlWy%2FIB4%2FYG0Coy5DUmZcA%2B1mkmawEjuynwEdOCCyUaE2roli7B7Lx5s8%2BK%2F%2BxL%2FXHTst3oBaiSSYogj4u1taIrr%2FmhMMhY7V4aUA59DKDZkGtPWKBATCmDw6bdZ2Nw6dBgLOgWg%2BStcY&X-Amz-Signature=c68f8402297844e2e3f1dd28bb749e436913c54f4735f91b2cd70839aaffaf8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

