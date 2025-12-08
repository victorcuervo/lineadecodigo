---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNADGJGX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qYueNfOtc8T82%2FiY4E8ACvdKsfNEC2Kxv9wnGsVYSQIgG4%2BPZtxA6tc%2FzLDioqzNRysrQ4RrMfdksTq4iaNrDnIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJujYR54D%2FURBNNjUCrcAy4ksL7361LmLOitLt4iIRpGVmz%2BubEs%2Bq%2B%2BUevacLb76Sj3IjiATCg59doA2WqLMpwPMaa4SI0aa%2FPLtjbtOayOwgdiE%2BGmWMwk5nYwUU634W4%2BcjY%2FtXCYONfZn82k1rQCn2dKaDepn19tvJErGfyz1ICKFARRBJ1ylTBxDl1YGKkb6ORD9sRnfZI3HOAVwqWy98X%2B5giytNE1DEII1xPhCZV1t%2FvLKzdAxhKe%2Bs%2FthbRLwabUryWttQeg1frbia4rHEbKUr5fVxrwlrCyvutGMYuQeh5PBnlxO17W2GIXipSKBFTxmoV4G8PjO8%2BA9ulhdo1MC5ojwhZDcZLQS1Oy66Nu0BTOvUhwvZGXV17tk%2FdJh9t4805jIa7AqfdjuuytORR0hG9e7OCHLFQTI3GuJm7CislaWGUVRrc4YSpm36Ata2EY7teImJeki5Z%2BnwZYQkYcMLk2Y2wse301ABjYJK2UiVG%2F0m0dCF4r89oDf32HFTcFtdWCWHLGUzib2lnZysM2Htz4W8GkS2IBhP52Sd25ufNgCJGBblhqL2jCmUlTif7CHkGf8yDcDmeGIMedEcn35nyXda40DO%2FkYmAaWC7WaxGikM4y4EXmx88M24AXnY4p9MHhkxjQMNvv2MkGOqUBL8Tve8NIe3FJRvW69SyI2SFbd4QlPyTVVvWcxyorfp%2BVvtx6QdjKobh%2F4wtk%2FloRH6W%2FWLvvGTAP%2FhaDvhRqUF%2BhQ5iyMVh0JawC20OqLUPislJttlCXBHrzJnfvM6C8%2FT6aFQ19UEMbWC6HzAIq2G49uCfLfUiGYyOGp6rYms3xdXZFOsJp4s2W8YPiRyoK9%2B0xo5BcHBzJ11UjWxlUVttl%2B5qF&X-Amz-Signature=8431e0aeaaeabb70209bef4e328b30d5103c0803dad9a5a44927c3fb36d65e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNADGJGX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3qYueNfOtc8T82%2FiY4E8ACvdKsfNEC2Kxv9wnGsVYSQIgG4%2BPZtxA6tc%2FzLDioqzNRysrQ4RrMfdksTq4iaNrDnIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJujYR54D%2FURBNNjUCrcAy4ksL7361LmLOitLt4iIRpGVmz%2BubEs%2Bq%2B%2BUevacLb76Sj3IjiATCg59doA2WqLMpwPMaa4SI0aa%2FPLtjbtOayOwgdiE%2BGmWMwk5nYwUU634W4%2BcjY%2FtXCYONfZn82k1rQCn2dKaDepn19tvJErGfyz1ICKFARRBJ1ylTBxDl1YGKkb6ORD9sRnfZI3HOAVwqWy98X%2B5giytNE1DEII1xPhCZV1t%2FvLKzdAxhKe%2Bs%2FthbRLwabUryWttQeg1frbia4rHEbKUr5fVxrwlrCyvutGMYuQeh5PBnlxO17W2GIXipSKBFTxmoV4G8PjO8%2BA9ulhdo1MC5ojwhZDcZLQS1Oy66Nu0BTOvUhwvZGXV17tk%2FdJh9t4805jIa7AqfdjuuytORR0hG9e7OCHLFQTI3GuJm7CislaWGUVRrc4YSpm36Ata2EY7teImJeki5Z%2BnwZYQkYcMLk2Y2wse301ABjYJK2UiVG%2F0m0dCF4r89oDf32HFTcFtdWCWHLGUzib2lnZysM2Htz4W8GkS2IBhP52Sd25ufNgCJGBblhqL2jCmUlTif7CHkGf8yDcDmeGIMedEcn35nyXda40DO%2FkYmAaWC7WaxGikM4y4EXmx88M24AXnY4p9MHhkxjQMNvv2MkGOqUBL8Tve8NIe3FJRvW69SyI2SFbd4QlPyTVVvWcxyorfp%2BVvtx6QdjKobh%2F4wtk%2FloRH6W%2FWLvvGTAP%2FhaDvhRqUF%2BhQ5iyMVh0JawC20OqLUPislJttlCXBHrzJnfvM6C8%2FT6aFQ19UEMbWC6HzAIq2G49uCfLfUiGYyOGp6rYms3xdXZFOsJp4s2W8YPiRyoK9%2B0xo5BcHBzJ11UjWxlUVttl%2B5qF&X-Amz-Signature=6d2024880a73acca2d5a19b1988e347fa823d5c7ffb7f9fb100f2d47a17755c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

