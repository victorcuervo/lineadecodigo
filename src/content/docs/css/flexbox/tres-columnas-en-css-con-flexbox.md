---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQWSXR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCNZnkEeRRAuH8PqdDp%2B6qtAQF8jSGv07QO%2FrykGR6mRAIgASoKUY%2B79lUj3AHEBw1DZLMbv9Juv7twydSw3c%2FL%2Bsgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMu0epLfRhsnOYLeqircA%2BXY%2F7CV%2FYLm%2FOrvltRjGlLn%2BnGq31tMzDbbMU6XxTrPya8l5GEHZWl4rt%2BGt%2Bh2Lo%2FJW7H5Qikx%2BubkcJ58BrPjmYWuChkujeEELISLyYN%2FmXvOZcxEroFog72pAXYtZf2w4BM7zKXCvPU9Sd48LVk7uc%2Fo0L3xQIxIa2gTGpeHfyygpB49%2B8uwe2XxRfuAupjQyhVLFYgRpKGsec1L2h9y1%2B1NuiLidGuH4zRMplo6YQTb8g3zMZtJXsfP4rBEv73mK26R8%2FQZn5YDmx%2Bjz8PfCpoBaib9HgY4VosAiKcnjLKxiV%2FQPydY4Z%2BizpgvjgLnAG3gAqXiWo41t%2B7xLS4rwygRWValMtSEWrIb2NMvqOw1I%2B9Gp7gbRnmqJHxGe%2FS7rkhtewDfS%2FbM6GLyX78vFWg5A9dsOr3q86UvFwF6UsiI88hBo40NemDNafPN%2FY3aQF%2Fj03SxczSvQebfGIb15avdSKZS5nGoMmeOEfhxi4SfQuCcaKX%2FmQqeyW9nz%2Bl7ZVIx4Fb2L5HSaSYWGm0ewmvS7TGtuqJY8QtMeF%2BCmGA7EYPHnXhrzieu8YawCcCd8MCF9v2ksxj%2BWohIKVNji6KiylHdokagACWGb9vSVsP7%2B2ZgswhBJqX3MPrUw8kGOqUBjARe0%2FXzq26kIVhB5xnS%2Fm7DOvQgtX1eoaWUcCZBP9v1Pg6uj2pvQATkUGOVElAdHt0xpV3kiW59GXgl0jhmucHlRKKiafkO%2FmXin9sU6NUKK1VAFeFDxZaAlVNfkB4iKaXyA2Qj8edDOFZ57zD8MfAJGI7yv4siehqy6wvO08FJBQsBcZjlP9V0An31YLVIcjp74ncXFbpVa6uQdkqWuQR62jdr&X-Amz-Signature=5d85ebc141c25aeb4759e234e3dd5cc98247822e5161edcb670546e2724390b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQWSXR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCNZnkEeRRAuH8PqdDp%2B6qtAQF8jSGv07QO%2FrykGR6mRAIgASoKUY%2B79lUj3AHEBw1DZLMbv9Juv7twydSw3c%2FL%2Bsgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMu0epLfRhsnOYLeqircA%2BXY%2F7CV%2FYLm%2FOrvltRjGlLn%2BnGq31tMzDbbMU6XxTrPya8l5GEHZWl4rt%2BGt%2Bh2Lo%2FJW7H5Qikx%2BubkcJ58BrPjmYWuChkujeEELISLyYN%2FmXvOZcxEroFog72pAXYtZf2w4BM7zKXCvPU9Sd48LVk7uc%2Fo0L3xQIxIa2gTGpeHfyygpB49%2B8uwe2XxRfuAupjQyhVLFYgRpKGsec1L2h9y1%2B1NuiLidGuH4zRMplo6YQTb8g3zMZtJXsfP4rBEv73mK26R8%2FQZn5YDmx%2Bjz8PfCpoBaib9HgY4VosAiKcnjLKxiV%2FQPydY4Z%2BizpgvjgLnAG3gAqXiWo41t%2B7xLS4rwygRWValMtSEWrIb2NMvqOw1I%2B9Gp7gbRnmqJHxGe%2FS7rkhtewDfS%2FbM6GLyX78vFWg5A9dsOr3q86UvFwF6UsiI88hBo40NemDNafPN%2FY3aQF%2Fj03SxczSvQebfGIb15avdSKZS5nGoMmeOEfhxi4SfQuCcaKX%2FmQqeyW9nz%2Bl7ZVIx4Fb2L5HSaSYWGm0ewmvS7TGtuqJY8QtMeF%2BCmGA7EYPHnXhrzieu8YawCcCd8MCF9v2ksxj%2BWohIKVNji6KiylHdokagACWGb9vSVsP7%2B2ZgswhBJqX3MPrUw8kGOqUBjARe0%2FXzq26kIVhB5xnS%2Fm7DOvQgtX1eoaWUcCZBP9v1Pg6uj2pvQATkUGOVElAdHt0xpV3kiW59GXgl0jhmucHlRKKiafkO%2FmXin9sU6NUKK1VAFeFDxZaAlVNfkB4iKaXyA2Qj8edDOFZ57zD8MfAJGI7yv4siehqy6wvO08FJBQsBcZjlP9V0An31YLVIcjp74ncXFbpVa6uQdkqWuQR62jdr&X-Amz-Signature=6d2f035913b261bb77dcaca641770f6c0a8f952624be805b36b7636bee04ff42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

