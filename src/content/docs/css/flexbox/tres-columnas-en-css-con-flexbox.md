---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW7YZH3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILRob9VYxEHosebWdn5NVUWoxqIKVFQzR8P2RyuI59AIhAMboCkdn5ljP%2BkQlbvyOdi7p9O2I4B9WIlrwotVAJE%2BNKv8DCGYQABoMNjM3NDIzMTgzODA1Igx1iUsmGO03LtkOVsEq3APgMxTqPqRZVtlI3Da86bbrCKhu8dKMnYsSodEBXLD32F0Kpf9QtMMS3L%2FkIXMljI0RdWyXolASEyfAPZ4Q6ZQNe4U8fvKgXgvmu1cFh%2B54Ixkd9NJWpyOQMu8CWcNFq1ZmLjLzwWe3%2Fe6cUBzNXCD41Uh6fqZo06ddTfymleVmoQPstvu08w8FaNbRI4LC%2FGaukIxFUer104TMIwTMI3207GYgFKpNXXLz%2FZZbHDctmW93ELA7AVb9A9sJQaFHn0DRQkG9eOkk1KmCm6OmvjbdZx1Icszb5iOFRDP%2Fg8RXzv1WVWuyXFxGvsH9%2Bs1truRpSkFt0MLr4m00foPeVrWPjRMzFhTlWB6hwBSle4X0l5%2FCih6GqorqoseWEy8%2FN8NJU5bIyP7%2B2Kur7eId7dvy8%2FnNRShtDgqz9zhR43kB0F0xe2QE%2BfEd4cdpNQsFIs1WYrYZAw0DIGjDVXE8mxV3rClvf4abJSwCF6AlgbRlIFsff2BixGrf%2BrMo3OU%2BGM7r61Y3sVaqxTiUDAc1ZKFMQ8ptgsUzfbDa%2Fn2hfjjqUkDf%2FsJvwPCawBGZhakUx2oYsbrmNY7dbFgIVF7KheeQqS6GE4%2BJP2Bycn1c5UzAMLIWOxKhqCjaqVOhrDCBls3JBjqkAcJE6dEmMFcemzPK70V4KGa3wAXH%2BNxiiedVQl47obVo6OUIdUZuYSc80l%2BnOpo6bF5mLaR%2B8R7ZHiJyJyZ9%2Fsalgig31QfQFhSvmrOUvcACVp8gmqlhEDSJFTnj%2Fw0vG0Eo40iIYT5wYes%2Bzs3FO87HvW4UAl4EZ3Ew%2FyIL6XFxYfZzOABC6O4nf8vd%2B8qNIBY%2BZpjKFxEdOgtt%2B3XXPR7g64ge&X-Amz-Signature=af07c0fcb9dfb1b85309d74f22bb70f2b84f7ada048b695ba1bf343f9e75ce1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW7YZH3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILRob9VYxEHosebWdn5NVUWoxqIKVFQzR8P2RyuI59AIhAMboCkdn5ljP%2BkQlbvyOdi7p9O2I4B9WIlrwotVAJE%2BNKv8DCGYQABoMNjM3NDIzMTgzODA1Igx1iUsmGO03LtkOVsEq3APgMxTqPqRZVtlI3Da86bbrCKhu8dKMnYsSodEBXLD32F0Kpf9QtMMS3L%2FkIXMljI0RdWyXolASEyfAPZ4Q6ZQNe4U8fvKgXgvmu1cFh%2B54Ixkd9NJWpyOQMu8CWcNFq1ZmLjLzwWe3%2Fe6cUBzNXCD41Uh6fqZo06ddTfymleVmoQPstvu08w8FaNbRI4LC%2FGaukIxFUer104TMIwTMI3207GYgFKpNXXLz%2FZZbHDctmW93ELA7AVb9A9sJQaFHn0DRQkG9eOkk1KmCm6OmvjbdZx1Icszb5iOFRDP%2Fg8RXzv1WVWuyXFxGvsH9%2Bs1truRpSkFt0MLr4m00foPeVrWPjRMzFhTlWB6hwBSle4X0l5%2FCih6GqorqoseWEy8%2FN8NJU5bIyP7%2B2Kur7eId7dvy8%2FnNRShtDgqz9zhR43kB0F0xe2QE%2BfEd4cdpNQsFIs1WYrYZAw0DIGjDVXE8mxV3rClvf4abJSwCF6AlgbRlIFsff2BixGrf%2BrMo3OU%2BGM7r61Y3sVaqxTiUDAc1ZKFMQ8ptgsUzfbDa%2Fn2hfjjqUkDf%2FsJvwPCawBGZhakUx2oYsbrmNY7dbFgIVF7KheeQqS6GE4%2BJP2Bycn1c5UzAMLIWOxKhqCjaqVOhrDCBls3JBjqkAcJE6dEmMFcemzPK70V4KGa3wAXH%2BNxiiedVQl47obVo6OUIdUZuYSc80l%2BnOpo6bF5mLaR%2B8R7ZHiJyJyZ9%2Fsalgig31QfQFhSvmrOUvcACVp8gmqlhEDSJFTnj%2Fw0vG0Eo40iIYT5wYes%2Bzs3FO87HvW4UAl4EZ3Ew%2FyIL6XFxYfZzOABC6O4nf8vd%2B8qNIBY%2BZpjKFxEdOgtt%2B3XXPR7g64ge&X-Amz-Signature=496c1daa43cd43c35bddec2ffeac2ac1000286f28d3c805085916732ab5efc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

