---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPILQ2Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbpDQeOMyUviJykHAD5UNJ260v2TQdzAst%2BPHKm6jqXgIgPDFFDueGsu0h5eVkq3011HiKxnojiKGcH4zBRFkhxLYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoWQIODtAYaGE6XXyrcA3biOHqFnauxxDzPaMie2C1gNT61y79t9OS7qdFd%2F8przrHspDXX6HWPeIQ0zyRFxtj%2Bb5pYMz09bFEdDg%2FMSmPMlICmQhl4Bha0aQqOVP1DhXGOfIJGMu02EMc1%2FP9rGGub1mgwfTSK2nch4lt5bwR91UUajrhHQHF9oZkPZmM8dEgKvXcG%2FwRzH2CUCdJsBZFAOH8h4GfplSGHu2R5yOhNP5cBM9PnU0%2Fu80700tVmRAZmWV9GzWoA%2BdqAGEqfhLsxOgNaEb22gGMWXAB4tyeIVNHIeRYSGo3vt4%2F8BVObncjUvySBHmxgOA4N8ErFiF%2FKHJsDZyqKxEmWotjiN3OuWA6AjGLoNwMAzhiPEoxI1EkaneEf12ZUqWnCRvgMVVtLgXXO1IrEFiLVBa90myuVw65A%2FP7YQF6q3gcqw3xeDEdA8Pd1O3%2B264S7476R9dlyapHJY86cLrzJEKz6D%2FmXRbqUx2ySYD6vl%2BzVSRlFbxEjq8AJKFofuyX98T%2B9KdQJDnnwBplTqE6p%2FzvfQm8iozK%2FzAhJhZkgyRH4EKQzGUz98N1TWU4kI1Mtk2Cbcs90OuKqNb4Dk92H4yWsdm24g1aEVbK0%2FTNRt292ijQWpfuvzl5N8R7Qjl1YMLez3MkGOqUBsnVjKPew371cgrYRSjX3xce0srCWoum%2BeeO4ZA4HShNNrspWZzlosKJ3wqRZ2DNXEk%2BD0AQLGBC0X1gAF3DedGah%2FxD5ovNoayHfVW2BW5ewKFyCSYnQVCy5uyXWe0xJWYkYF9y2Wo9cpqIIrXrVov5j0m4cOjD%2FXI40Wid5pA8GFnDJAQhuNItoHZ3u0uB1D1b0kKHYtEbHnBH5u0FeSc5TR9Of&X-Amz-Signature=f9cee24541c61ddc802b49d4986b1b95c7eb5f2a43a878f8faa46d059c0fb09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPILQ2Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbpDQeOMyUviJykHAD5UNJ260v2TQdzAst%2BPHKm6jqXgIgPDFFDueGsu0h5eVkq3011HiKxnojiKGcH4zBRFkhxLYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoWQIODtAYaGE6XXyrcA3biOHqFnauxxDzPaMie2C1gNT61y79t9OS7qdFd%2F8przrHspDXX6HWPeIQ0zyRFxtj%2Bb5pYMz09bFEdDg%2FMSmPMlICmQhl4Bha0aQqOVP1DhXGOfIJGMu02EMc1%2FP9rGGub1mgwfTSK2nch4lt5bwR91UUajrhHQHF9oZkPZmM8dEgKvXcG%2FwRzH2CUCdJsBZFAOH8h4GfplSGHu2R5yOhNP5cBM9PnU0%2Fu80700tVmRAZmWV9GzWoA%2BdqAGEqfhLsxOgNaEb22gGMWXAB4tyeIVNHIeRYSGo3vt4%2F8BVObncjUvySBHmxgOA4N8ErFiF%2FKHJsDZyqKxEmWotjiN3OuWA6AjGLoNwMAzhiPEoxI1EkaneEf12ZUqWnCRvgMVVtLgXXO1IrEFiLVBa90myuVw65A%2FP7YQF6q3gcqw3xeDEdA8Pd1O3%2B264S7476R9dlyapHJY86cLrzJEKz6D%2FmXRbqUx2ySYD6vl%2BzVSRlFbxEjq8AJKFofuyX98T%2B9KdQJDnnwBplTqE6p%2FzvfQm8iozK%2FzAhJhZkgyRH4EKQzGUz98N1TWU4kI1Mtk2Cbcs90OuKqNb4Dk92H4yWsdm24g1aEVbK0%2FTNRt292ijQWpfuvzl5N8R7Qjl1YMLez3MkGOqUBsnVjKPew371cgrYRSjX3xce0srCWoum%2BeeO4ZA4HShNNrspWZzlosKJ3wqRZ2DNXEk%2BD0AQLGBC0X1gAF3DedGah%2FxD5ovNoayHfVW2BW5ewKFyCSYnQVCy5uyXWe0xJWYkYF9y2Wo9cpqIIrXrVov5j0m4cOjD%2FXI40Wid5pA8GFnDJAQhuNItoHZ3u0uB1D1b0kKHYtEbHnBH5u0FeSc5TR9Of&X-Amz-Signature=4005321eb664da1bda7fd80967691cca5752494df03c5efa6797219c6678a0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

