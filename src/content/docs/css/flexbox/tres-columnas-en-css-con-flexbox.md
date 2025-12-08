---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGA752G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJL5CHWDcVIZwQ%2BFfMGxfKHCHCdpSyJq0UmOP1k0f%2FrgIhAKtrHQmtDRT4eFAzTpM5n5%2B6K7huINGzo%2FMsk0VjnuAqKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIog35ENhd3U4cHtAq3AO9Pgg9sfMVfQxhuWg9szjjaSoGakJVYR0uAClb6TXl5sH%2B84HILjnntiCsHLexDB4SyXO1npzoJKJsWAMWocSNZRKSp3KInZhGpBzxy%2Ba70w8YYxYgZhfIuYw6PZR4Sm6VWJp3iMLr%2F20II8JUYm71LrUP265QEsmQVgC5u%2BakDe0wr%2BeT1bWC3GAy9GkewABXrngQB7rmLugipaGTgIUsuf5MYyO7i4jQegcQO6WTBu0yjMEZ%2FFTNbgFIuTOtBXCX8pA3ZRnB2V%2BES%2BzV1E1FePGY0nygXEM9MXrb36VLMxNOqOSLgGDXQUSD35LqRpDSzlp9TjvxxooMv0zQs41QHZLkXI6lbrEXnevxx2uyv%2B0wEQFAqLWXp8BVtm72tJghzo5gVGHVFxu07t8%2BkkIFfz78zNijUKCguwBihtAfygrO0fkSdEykCzbkIJW2vRKQL9NTLazWZ7YRZL5AJ7qWejMPghDwfeVnkwDM3xQO554f5ONcjlKSsxYDVyp5akANVoWwkx6Qj7NOcZzdzKnJMHl5rDJb3GVttuFGp2542Kt947VNaf5oV1mJM%2F4OKC0xRDCYncDalmlmZCnu7mzPqAXOjvmoN7kGq9mTZVgukmx33kUrAlx%2B5sYRtjC%2FkNvJBjqkAR5kdl1IzLhEtqzllli4kZZALW%2BaeSi%2FU%2FVYmVamlQSUP5t8ItHUU4OZFYixPmf7oU%2BEOBm1lbExOBWdJovU6Mq7PKPPbpyM2KjJpPxG2Qmx9aCnJnwYBOTZcd05gEDKsf258Yb7nquX4dWpSJchegva3EFQPdOjC7Gq8N6PNzrCNudEfLf2hGPKf3qD%2FkGl6yQKwRhK4%2FPKGJONq8rd6d%2BbkAt4&X-Amz-Signature=b4e41fdf6796ee9ab498d29b9cd2b71aa58c69f0ce3c06b0a4823912178b43ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGA752G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJL5CHWDcVIZwQ%2BFfMGxfKHCHCdpSyJq0UmOP1k0f%2FrgIhAKtrHQmtDRT4eFAzTpM5n5%2B6K7huINGzo%2FMsk0VjnuAqKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIog35ENhd3U4cHtAq3AO9Pgg9sfMVfQxhuWg9szjjaSoGakJVYR0uAClb6TXl5sH%2B84HILjnntiCsHLexDB4SyXO1npzoJKJsWAMWocSNZRKSp3KInZhGpBzxy%2Ba70w8YYxYgZhfIuYw6PZR4Sm6VWJp3iMLr%2F20II8JUYm71LrUP265QEsmQVgC5u%2BakDe0wr%2BeT1bWC3GAy9GkewABXrngQB7rmLugipaGTgIUsuf5MYyO7i4jQegcQO6WTBu0yjMEZ%2FFTNbgFIuTOtBXCX8pA3ZRnB2V%2BES%2BzV1E1FePGY0nygXEM9MXrb36VLMxNOqOSLgGDXQUSD35LqRpDSzlp9TjvxxooMv0zQs41QHZLkXI6lbrEXnevxx2uyv%2B0wEQFAqLWXp8BVtm72tJghzo5gVGHVFxu07t8%2BkkIFfz78zNijUKCguwBihtAfygrO0fkSdEykCzbkIJW2vRKQL9NTLazWZ7YRZL5AJ7qWejMPghDwfeVnkwDM3xQO554f5ONcjlKSsxYDVyp5akANVoWwkx6Qj7NOcZzdzKnJMHl5rDJb3GVttuFGp2542Kt947VNaf5oV1mJM%2F4OKC0xRDCYncDalmlmZCnu7mzPqAXOjvmoN7kGq9mTZVgukmx33kUrAlx%2B5sYRtjC%2FkNvJBjqkAR5kdl1IzLhEtqzllli4kZZALW%2BaeSi%2FU%2FVYmVamlQSUP5t8ItHUU4OZFYixPmf7oU%2BEOBm1lbExOBWdJovU6Mq7PKPPbpyM2KjJpPxG2Qmx9aCnJnwYBOTZcd05gEDKsf258Yb7nquX4dWpSJchegva3EFQPdOjC7Gq8N6PNzrCNudEfLf2hGPKf3qD%2FkGl6yQKwRhK4%2FPKGJONq8rd6d%2BbkAt4&X-Amz-Signature=1f5d5f86ebbefe27e367ff06350a21eac1537b4bbb29656c7f64c822eea03b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

