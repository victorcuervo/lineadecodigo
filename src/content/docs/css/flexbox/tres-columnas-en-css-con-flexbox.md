---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPYCIX3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvMbSu8YyILp46cFT85%2FshFyf50Pbku8fLsz3um4tC4AiEAhXYiTXrHWCqblCvY2672XVCZwhiU4HvkX%2BFmfjFpuS8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdDH7IXybqGTGyhbircA3T1MSSSVNkvftzygQqvYAtnHbwDN7NvYxSImmQXQQj69uiW2Ioox6HUYIC%2BghKs4iudhNrnGZjRHDXG5TNErClR%2FepbMbfMBRixx7x9uJCp6dn9tqc3GE%2FtetMnMh%2BjNE%2FLG8zgA7aGhRmlvzBuwMKDB2rJLbChDx8G%2BNJEkcIa3FZNA%2Fb38aN1UVqumw2IywnG7hXYFt5msQy6O%2BbI%2BhhHzOrz8l%2BDE%2FHG2QQSvwHU%2BCliAxlFlhpU0yhse3hjpeoU%2BFW4MfK8lHrG7ijXhe0%2FflX1qVTyqIwPJZD%2BokNfUDdHDmtHDIEfFKQ773YiSG%2FrdGThhvhFYlTuXkl5hw73f3PfBH%2BJdoHKsaeDFQvaWWbXS2VrmOzJB9sHd0GVnwSNyIy36NC%2FLrPttn7y2U3gEPrih%2BGlcr14Zws6R6tq6%2B9cOm1YNikKKN3u2ptKoFA1ULcYKKSL4KVKaJhGs81dA%2FZuMIPnZBsv5JlxeNoEiYviaVitUwP3%2Bo5QyF80HxheNkdYua2YUSV5yM69Rb0stRaf8AVYiDDfae2E1STaA0phRKc08tq%2FsOkjtshfLPZKrXmBJbNvZ8s3okaKISV10BUAK%2F5NpYDYtb%2B8N6x2Vtfa7VvEiJ1PuJRwMKjt2ckGOqUBvQyZPDjTsYa7YCa563qIlvzkF6RgeERR%2BziZrB3DHHEw1gaUBbPW%2BFPBlffXEaairEpRPtvVJdQqfKJUpxwKQ5GgqtjGIO3XjEKjA6etyhMgp9aeLfMkHx%2FjZWyPUQgV6buW9jsd6Va7ajiZWJgTsxubn3sSUSqTOFZBfMxGhqg9Cs8lXVISQohKfc3M5yACgGVYUOtBsYYRksiYKynqukCCOzTW&X-Amz-Signature=5d83f300141320db60dfe44888680e3a710e878e67b3c0d1475ba1fd02365690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPYCIX3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvMbSu8YyILp46cFT85%2FshFyf50Pbku8fLsz3um4tC4AiEAhXYiTXrHWCqblCvY2672XVCZwhiU4HvkX%2BFmfjFpuS8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdDH7IXybqGTGyhbircA3T1MSSSVNkvftzygQqvYAtnHbwDN7NvYxSImmQXQQj69uiW2Ioox6HUYIC%2BghKs4iudhNrnGZjRHDXG5TNErClR%2FepbMbfMBRixx7x9uJCp6dn9tqc3GE%2FtetMnMh%2BjNE%2FLG8zgA7aGhRmlvzBuwMKDB2rJLbChDx8G%2BNJEkcIa3FZNA%2Fb38aN1UVqumw2IywnG7hXYFt5msQy6O%2BbI%2BhhHzOrz8l%2BDE%2FHG2QQSvwHU%2BCliAxlFlhpU0yhse3hjpeoU%2BFW4MfK8lHrG7ijXhe0%2FflX1qVTyqIwPJZD%2BokNfUDdHDmtHDIEfFKQ773YiSG%2FrdGThhvhFYlTuXkl5hw73f3PfBH%2BJdoHKsaeDFQvaWWbXS2VrmOzJB9sHd0GVnwSNyIy36NC%2FLrPttn7y2U3gEPrih%2BGlcr14Zws6R6tq6%2B9cOm1YNikKKN3u2ptKoFA1ULcYKKSL4KVKaJhGs81dA%2FZuMIPnZBsv5JlxeNoEiYviaVitUwP3%2Bo5QyF80HxheNkdYua2YUSV5yM69Rb0stRaf8AVYiDDfae2E1STaA0phRKc08tq%2FsOkjtshfLPZKrXmBJbNvZ8s3okaKISV10BUAK%2F5NpYDYtb%2B8N6x2Vtfa7VvEiJ1PuJRwMKjt2ckGOqUBvQyZPDjTsYa7YCa563qIlvzkF6RgeERR%2BziZrB3DHHEw1gaUBbPW%2BFPBlffXEaairEpRPtvVJdQqfKJUpxwKQ5GgqtjGIO3XjEKjA6etyhMgp9aeLfMkHx%2FjZWyPUQgV6buW9jsd6Va7ajiZWJgTsxubn3sSUSqTOFZBfMxGhqg9Cs8lXVISQohKfc3M5yACgGVYUOtBsYYRksiYKynqukCCOzTW&X-Amz-Signature=6c2218d477fb976195e3071154f71942c51cdb51424809c43170e1d2da14e5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

