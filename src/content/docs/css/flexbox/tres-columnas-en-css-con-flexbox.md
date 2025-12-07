---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UDX6T5E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCucdgnTCldscW6UXhyJJgQligFTK0a6L%2Fy%2BGiKcLfYIgIgBrJX%2BNX5Y%2BUZPsCnrIfWnnj2pO8iIxUFxdErrB%2FuPEEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpFknZ2rC3xZI26SircAxzN4hMfG413zJCHT54BgcvTJeTskE4uwZEgmAfNGBUrfdnpJET6L5Izu8rmR8kIhd34nhLllQeK%2BtkVkXk4JImNz2bbWqexY%2BDkof%2BzUZVjEgOyt8YeFIADO5jryY4EoQHWpo0Fxt1xVlDcegWSVgRTrY10W9okBAjQEDgsPqyJTcw%2B75%2F6os8z71DtDWA0ESsEIU0O7glOeOFhBkBblzeH3zBZP3LWHsExHXfeYKgLgaOXmv%2B%2FO7ELw1j%2FhDIIuvD01pikrMa0mBNcwd0jmS8Kmqi1nx9nyBKTtCG5jOuj3WEcmxNLEtw7s%2BYRg%2Bc%2FK5pgOhbDWYKnRa9k5Ze1BFbaTLsGfHPYyz877zssSX06jaUjXNgxzP2NrY79OEigJNfvqy3yVRBdZUTbeNPVklSLUADvywNvHz1fu4K5WZznygBkoxjE6ENf8j6v0PNCYQZpVbGqmU4GqSpdI0fz4WqbdKB2rAZBJxW7MrLID9LGIBySv64Hg8rN94mgzJUnIoahPfaSWFkmddHb718Mj57fKZ2dbw72rCOkWshIEq5tUlGLngFGvyKFxIwngWKffu5s3R7SI6d5OfxLWKhTDryoAI3fHInm3TBhNcUtzPj01wQwpKK9BEkja7e1MO%2B61skGOqUBVzWLGguD67raRofosT%2FSiATnM3UL7E0sfnvXUrfn2r%2F1WAurRB3XFvcGn12DX9Q1ISHnQ%2Fpt15%2FBPdToxLCQyWB%2FPrtvlDLZ80%2FH%2FMdYenWQfjICckkDGH8sQuIFC4FRjHjgynanKJV6Snsgq2yBlxuTtk3hV4FvaJ4LHZA3Zifd7VNqYdxxmoSCyPOZibRjNC1fS665VdubPRT8OdYnJ2BaUs0x&X-Amz-Signature=8ee4595dd4cfd94dd48891a28d1da66ded53bf07b8a3d252232f029f22a98cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UDX6T5E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCucdgnTCldscW6UXhyJJgQligFTK0a6L%2Fy%2BGiKcLfYIgIgBrJX%2BNX5Y%2BUZPsCnrIfWnnj2pO8iIxUFxdErrB%2FuPEEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpFknZ2rC3xZI26SircAxzN4hMfG413zJCHT54BgcvTJeTskE4uwZEgmAfNGBUrfdnpJET6L5Izu8rmR8kIhd34nhLllQeK%2BtkVkXk4JImNz2bbWqexY%2BDkof%2BzUZVjEgOyt8YeFIADO5jryY4EoQHWpo0Fxt1xVlDcegWSVgRTrY10W9okBAjQEDgsPqyJTcw%2B75%2F6os8z71DtDWA0ESsEIU0O7glOeOFhBkBblzeH3zBZP3LWHsExHXfeYKgLgaOXmv%2B%2FO7ELw1j%2FhDIIuvD01pikrMa0mBNcwd0jmS8Kmqi1nx9nyBKTtCG5jOuj3WEcmxNLEtw7s%2BYRg%2Bc%2FK5pgOhbDWYKnRa9k5Ze1BFbaTLsGfHPYyz877zssSX06jaUjXNgxzP2NrY79OEigJNfvqy3yVRBdZUTbeNPVklSLUADvywNvHz1fu4K5WZznygBkoxjE6ENf8j6v0PNCYQZpVbGqmU4GqSpdI0fz4WqbdKB2rAZBJxW7MrLID9LGIBySv64Hg8rN94mgzJUnIoahPfaSWFkmddHb718Mj57fKZ2dbw72rCOkWshIEq5tUlGLngFGvyKFxIwngWKffu5s3R7SI6d5OfxLWKhTDryoAI3fHInm3TBhNcUtzPj01wQwpKK9BEkja7e1MO%2B61skGOqUBVzWLGguD67raRofosT%2FSiATnM3UL7E0sfnvXUrfn2r%2F1WAurRB3XFvcGn12DX9Q1ISHnQ%2Fpt15%2FBPdToxLCQyWB%2FPrtvlDLZ80%2FH%2FMdYenWQfjICckkDGH8sQuIFC4FRjHjgynanKJV6Snsgq2yBlxuTtk3hV4FvaJ4LHZA3Zifd7VNqYdxxmoSCyPOZibRjNC1fS665VdubPRT8OdYnJ2BaUs0x&X-Amz-Signature=baac0ba4bde65ac74876bcecace6c86f3de7a532edd4d4f77a2e93f37b4a35a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

