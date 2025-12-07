---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO7XLOUP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH2VmrHSXG3U7TzLzLjTbSBQG0qWOCBkXptF814AL4XQIhAKp4UKMpzrkMM%2BMXCx7YUHX7qTRp2%2FLZnamPiquVBFlUKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhyDohAy4ToMuRAJkq3AOg2VEZ4bF%2BPIUYhlJkr5sgNz%2BlB%2FpTyHog2F%2FATji3QBE%2Fvf%2FUQN39NS5PWpOcksW2DT45Jzw4IH02ewqMY6lqdO4Xxjju%2Fti5W%2BBK0XdW%2BuEAwHFnYLOsZGgF0KqZbVy0d0XnT3GF7R3V3ahFehHUNl0tk27ITUcZRhnNWeKiw05KSOhn4D5ZMRNpZdKhlKiKnusg6x%2BqsFf5M7ixG2rnBh21r4DDjD%2Fxngl3AaAhUoNBGwz0VXULuGJrrfpuNI9Y1wQX9HHkJmfWcS9BioISdOQw1I4KdnIdDtl1as%2FGlH1MjYwAK%2BgJWXqJ1P9F6g9I1n4iWBPZY28qhutWcdxl5jU1b%2B7phDwmZ0T5KX7ie3qJxRn5V94gjAj%2FbwWXxtMlwprVRm5PYcksc1IW114mmu9J176X7IMdbKug%2Bl7GMBWP1xGV20D1rBsbGKPSJ75mqQyQsgd2QL5rlYVdPC1MIHHLEcyicOjPrfegCvF8cZRP49HY926%2BMfonduAtn8aGmwK6AVxapiv5Xf%2Bl%2Bhm7FpZAnfiht67c%2B6V7FtPa%2F35w68qGNvJwc1nLOdwiUElnYF4Gaxmy%2FLFk%2FRPQfE92AjczVjh37o4tJ1uPW1F3CajD0in%2BsuT%2BGsoiNjDahdjJBjqkAb%2FWvNcgP1nY8zCP2tP%2BfiOhDj%2FPDT58Yk8JEocXVwJlW%2BVen3B35EFdwqFk9kg%2BzYr7BuJhaGr75XtT9EbUvYR1bx9R1tVs4caQR3H7avVWZwmUgrH24Mi9A1UznqpVdW6tgGVSH057FDu4ONRLXdZ7fv8x0DcFes0sWu7XtOD0LhtwVMsXaPFgt1pG2w14djnlzWQQ2OksQwM9S3LplXyk0fVb&X-Amz-Signature=afbef9aa4ce32da47f88947a4f182508df87bcbc7706f2f16d1271bb1580527b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO7XLOUP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH2VmrHSXG3U7TzLzLjTbSBQG0qWOCBkXptF814AL4XQIhAKp4UKMpzrkMM%2BMXCx7YUHX7qTRp2%2FLZnamPiquVBFlUKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhyDohAy4ToMuRAJkq3AOg2VEZ4bF%2BPIUYhlJkr5sgNz%2BlB%2FpTyHog2F%2FATji3QBE%2Fvf%2FUQN39NS5PWpOcksW2DT45Jzw4IH02ewqMY6lqdO4Xxjju%2Fti5W%2BBK0XdW%2BuEAwHFnYLOsZGgF0KqZbVy0d0XnT3GF7R3V3ahFehHUNl0tk27ITUcZRhnNWeKiw05KSOhn4D5ZMRNpZdKhlKiKnusg6x%2BqsFf5M7ixG2rnBh21r4DDjD%2Fxngl3AaAhUoNBGwz0VXULuGJrrfpuNI9Y1wQX9HHkJmfWcS9BioISdOQw1I4KdnIdDtl1as%2FGlH1MjYwAK%2BgJWXqJ1P9F6g9I1n4iWBPZY28qhutWcdxl5jU1b%2B7phDwmZ0T5KX7ie3qJxRn5V94gjAj%2FbwWXxtMlwprVRm5PYcksc1IW114mmu9J176X7IMdbKug%2Bl7GMBWP1xGV20D1rBsbGKPSJ75mqQyQsgd2QL5rlYVdPC1MIHHLEcyicOjPrfegCvF8cZRP49HY926%2BMfonduAtn8aGmwK6AVxapiv5Xf%2Bl%2Bhm7FpZAnfiht67c%2B6V7FtPa%2F35w68qGNvJwc1nLOdwiUElnYF4Gaxmy%2FLFk%2FRPQfE92AjczVjh37o4tJ1uPW1F3CajD0in%2BsuT%2BGsoiNjDahdjJBjqkAb%2FWvNcgP1nY8zCP2tP%2BfiOhDj%2FPDT58Yk8JEocXVwJlW%2BVen3B35EFdwqFk9kg%2BzYr7BuJhaGr75XtT9EbUvYR1bx9R1tVs4caQR3H7avVWZwmUgrH24Mi9A1UznqpVdW6tgGVSH057FDu4ONRLXdZ7fv8x0DcFes0sWu7XtOD0LhtwVMsXaPFgt1pG2w14djnlzWQQ2OksQwM9S3LplXyk0fVb&X-Amz-Signature=d35859f38c4ae5f10ae80bff27a7d466ceaefb81919ab4441f23fbdce54ce073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

