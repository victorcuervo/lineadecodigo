---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEIYEWD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8qp4kv2rhmKgrFwymMNK0kJp%2BY9xJXYqL7bs9h5wqBAiEA36MvSVUxahJmnnet372t9x3VHHbx1AavJ6PvMKxKg6oqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbr8LJ0mfyJcqfukSrcA9h34S447r6OW2E%2B4Mc041cLHPKPo%2BDCOY%2BPGuUKMqNNH4%2BsBIeSPZuSEe%2BZyihsphQPyLBrDJYH1utadOKqvGL%2FS%2FC%2BboKKuBFgCL%2FfGhMbr6ySBmDpknWgUNQGhJrroMRCvVps1Gm3%2FEroqRtkMlgqPYfcyQ%2BoOp9b36wh5jIVNEs6SWupcNkaGdKiiylbDi%2Bt3vh0L7XZR9YGtD38Go4kS9bLDj8ug68LjS8Emupnwlpr%2BWO3lR3RxO3PJR%2FAJZoT8F9KPz2hGITOPmc7XHTeA6Sk9wlpKcWIa%2FJquMKKJ9rMkVYXhMpROj9esPAYLnfwURObdu1ExW2O1SCRRi6%2BSBC8%2BmzGcqzDwFWrjW%2Bfa0sxeMK8vfzxqmN0wS8q%2FIrKGXC%2F0yYlyw1V9mlCyNVCoudqo%2FK1hVg4ZyccgimKVAUSs1wF8UzLdyAGyN085ZhQrsUNbDx0EBp5NSqX6CExa15KVdJiP2Kk%2FY9ILlJ0gP8QsNi9oeGNR%2BNBg3%2Bk6bSH6cEeZb%2FMyL61etTV4777FlwgWLdo1qKCu1eq4wyTCFag226ZpxXYRlbJpMR5kCaNnOlLJXX4d3BsnM0HxuLhBpf3cJOUBgO7Sc2iITo5J4rkSpBEWROPMAShMNih3ckGOqUBIhkphPE6wWDIUsHndJ58vUg3%2FUXvqfBWBgTsl%2BHCGGFsd5URxHuLxAKSiozr4qhiJkrqKQ8YMTYT7BdRotFdzO4fHqGrGYQnELzSlKyiIm4CJo4InMjuBA4woko49Q0gOI7C%2FfpRVbFPX%2FZvLz1qpRXfvgz5MGt7y8F9CTW5atdyFdYry%2BiyYkJDPKxRobe71JM18qACrPoTgnD62Z1V%2B9nhfxgx&X-Amz-Signature=449ecf4cdc4a0d279ad45f5561183022a0858b42eb87560adb6b650ef639def2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEIYEWD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8qp4kv2rhmKgrFwymMNK0kJp%2BY9xJXYqL7bs9h5wqBAiEA36MvSVUxahJmnnet372t9x3VHHbx1AavJ6PvMKxKg6oqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbr8LJ0mfyJcqfukSrcA9h34S447r6OW2E%2B4Mc041cLHPKPo%2BDCOY%2BPGuUKMqNNH4%2BsBIeSPZuSEe%2BZyihsphQPyLBrDJYH1utadOKqvGL%2FS%2FC%2BboKKuBFgCL%2FfGhMbr6ySBmDpknWgUNQGhJrroMRCvVps1Gm3%2FEroqRtkMlgqPYfcyQ%2BoOp9b36wh5jIVNEs6SWupcNkaGdKiiylbDi%2Bt3vh0L7XZR9YGtD38Go4kS9bLDj8ug68LjS8Emupnwlpr%2BWO3lR3RxO3PJR%2FAJZoT8F9KPz2hGITOPmc7XHTeA6Sk9wlpKcWIa%2FJquMKKJ9rMkVYXhMpROj9esPAYLnfwURObdu1ExW2O1SCRRi6%2BSBC8%2BmzGcqzDwFWrjW%2Bfa0sxeMK8vfzxqmN0wS8q%2FIrKGXC%2F0yYlyw1V9mlCyNVCoudqo%2FK1hVg4ZyccgimKVAUSs1wF8UzLdyAGyN085ZhQrsUNbDx0EBp5NSqX6CExa15KVdJiP2Kk%2FY9ILlJ0gP8QsNi9oeGNR%2BNBg3%2Bk6bSH6cEeZb%2FMyL61etTV4777FlwgWLdo1qKCu1eq4wyTCFag226ZpxXYRlbJpMR5kCaNnOlLJXX4d3BsnM0HxuLhBpf3cJOUBgO7Sc2iITo5J4rkSpBEWROPMAShMNih3ckGOqUBIhkphPE6wWDIUsHndJ58vUg3%2FUXvqfBWBgTsl%2BHCGGFsd5URxHuLxAKSiozr4qhiJkrqKQ8YMTYT7BdRotFdzO4fHqGrGYQnELzSlKyiIm4CJo4InMjuBA4woko49Q0gOI7C%2FfpRVbFPX%2FZvLz1qpRXfvgz5MGt7y8F9CTW5atdyFdYry%2BiyYkJDPKxRobe71JM18qACrPoTgnD62Z1V%2B9nhfxgx&X-Amz-Signature=af8c605fa46aa3518c1628d33ea751a4de9954bc19c40ac081b30fcfd8cdbf36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

