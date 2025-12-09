---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7TINFW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb1ZtznlYNRgOwjUx5KxeSrL9OMAUdE9FCE7armQXoXQIgfEwIbWeIL2LsIHPYmH6WNk7aL3mY%2F94E5%2B6Am95WT%2BQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR9MTZNXiBnLks9qyrcAxJSaSigNWOWChIc416EkXNEAMKCFxUCE5ddCCWjyjMaB3A9jkmtFjZcbbkLyKrEb3AVBiHug8LbhS0FdtCbI8xFVWzo0v4QIoUyEiSJUbhRKizmIzD6dp5le2HHkqzCKyKS3Pp3zQrrgUBDhHBAGxf7YcURhu6Q3FD3Sqy%2BQ0%2FWytYBT%2F2%2FP6K8j56Gtw%2BA5490trwbf3wNm7tq1fL1ULM30ziTSwyR7xlPdpd%2B4DJo2Md0DmSP1diqS%2FgyaHgXZaYWuvykoGeo1vA1O6GqkHUXDrDO8kY%2FlEUB9P89OCbTquES%2B9FH2%2F%2F7i71Tc6izKN8zC5EQNhbo1aYR70MmUthD7xmYchboGe6gPKVGfTTWFhJeMeLb05gPSLQVSmLKabFNBxomdMYwweoaDxmxaaxWJYRtQ1PZqw3PLsaoNtIxLHsSnre9RuGRTWh9PZVRpVX1guD2kEEvRi%2FIORvD%2Fq2sJXtfyxW9lSNBZym6VqlIYMia3HvO%2Fzw7Mw5GDKVpUe4EbRo%2FkV7cM1Tu4IyMxXRHDMJonZ0keMRwX2vMUcrIP8oARA2lSVT6AKabQI0%2FW3xoQCG%2BzQ7ZLHvolvcyVrgWNAaIiwEh7QDiLFdKzDhLXkTb8VMskfQwkAohMNGk38kGOqUBqwa2xCVedzX%2BbAql1zdhAhmj3rzxN1sDIdVYVORwnguyY1cj7MQEnWDjcRIc3EzSI%2B%2F6wsQeikk7UPikKFhWW6ZU4j9rRVFvo%2BptFZH0xjrAehXdUrtcH%2FnUq3tyBVrrf1xC%2FfMVB7j64z%2FVrEOreFMnbPpGc9KRThoF5pIbZrmlPluuQVsHVscNAgEjord9Cre8aCB%2FzlGR7IrZ4U2%2B1NgwpDFf&X-Amz-Signature=0038f7204f38319b07042f855c8474bc478889d5112f8db6445d40984ce2bb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7TINFW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb1ZtznlYNRgOwjUx5KxeSrL9OMAUdE9FCE7armQXoXQIgfEwIbWeIL2LsIHPYmH6WNk7aL3mY%2F94E5%2B6Am95WT%2BQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR9MTZNXiBnLks9qyrcAxJSaSigNWOWChIc416EkXNEAMKCFxUCE5ddCCWjyjMaB3A9jkmtFjZcbbkLyKrEb3AVBiHug8LbhS0FdtCbI8xFVWzo0v4QIoUyEiSJUbhRKizmIzD6dp5le2HHkqzCKyKS3Pp3zQrrgUBDhHBAGxf7YcURhu6Q3FD3Sqy%2BQ0%2FWytYBT%2F2%2FP6K8j56Gtw%2BA5490trwbf3wNm7tq1fL1ULM30ziTSwyR7xlPdpd%2B4DJo2Md0DmSP1diqS%2FgyaHgXZaYWuvykoGeo1vA1O6GqkHUXDrDO8kY%2FlEUB9P89OCbTquES%2B9FH2%2F%2F7i71Tc6izKN8zC5EQNhbo1aYR70MmUthD7xmYchboGe6gPKVGfTTWFhJeMeLb05gPSLQVSmLKabFNBxomdMYwweoaDxmxaaxWJYRtQ1PZqw3PLsaoNtIxLHsSnre9RuGRTWh9PZVRpVX1guD2kEEvRi%2FIORvD%2Fq2sJXtfyxW9lSNBZym6VqlIYMia3HvO%2Fzw7Mw5GDKVpUe4EbRo%2FkV7cM1Tu4IyMxXRHDMJonZ0keMRwX2vMUcrIP8oARA2lSVT6AKabQI0%2FW3xoQCG%2BzQ7ZLHvolvcyVrgWNAaIiwEh7QDiLFdKzDhLXkTb8VMskfQwkAohMNGk38kGOqUBqwa2xCVedzX%2BbAql1zdhAhmj3rzxN1sDIdVYVORwnguyY1cj7MQEnWDjcRIc3EzSI%2B%2F6wsQeikk7UPikKFhWW6ZU4j9rRVFvo%2BptFZH0xjrAehXdUrtcH%2FnUq3tyBVrrf1xC%2FfMVB7j64z%2FVrEOreFMnbPpGc9KRThoF5pIbZrmlPluuQVsHVscNAgEjord9Cre8aCB%2FzlGR7IrZ4U2%2B1NgwpDFf&X-Amz-Signature=1ff90db8e2f366bb458a6cfba5d28d09d7df531b9123fc973a0b64a7b3ac44ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

