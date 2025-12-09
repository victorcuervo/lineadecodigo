---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTMGAK2D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUCtOmrAzS6XFskCCoIytqNXa8jp%2F3cr50xeafFdcdpwIhAO7EoxK5%2FSTKtTw5WgezkRvZwMdOAxr%2BHnWbci7nDd%2BNKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxoAHIUxiHh8oRXocq3AP9%2F%2FqKctSJt3xFSB23WjW8sa4zaJeNMr2oKXQe3zb4T5str3YHICNNyumepFsYi1yFUgNKJVIw6Hg4w3jkMs%2B1uo2LPQFAfT%2FPXZCNkOQlzTEyIYA8MaJmflC4CrRnXz97lCC6m5mEEnqFDQPjecTXeJKIRsV2tLe%2FH%2FHOdodI4LItUcVjkSlIXqkeMztre%2BaJ6j%2FOuiIeYzeJ%2BH%2BtdZioImqpVJgDZl7IF7hVNiPFu%2F39EnE2t81oMTEqIokzHTe%2FpJ9PsrZSgwr4e97Mt1d8z6IjzJr4P5cjftTPPkdmrL30bMjqS3EDGXOU%2Bh8TwSkhO2yjS2L3IPeGV8v02PzHn37r%2Ba%2BXfceF6ik2QueuS4xjNTlYao88VK6UN2wj4Ml3i5e2xu7bdHWPDIgjfWe7XuytM3gVtBoBBZbgUVfMazTaWCGXncDLHJRWjBAvoRYpG2P1Bs%2FSHykJxePWxB7YDOOhcrXmN9z7thKTZffL78Sv6iXcMrBzJqJvvLFS78tNOvj8BBrFDN8Y4gruztSL034D7Ct2%2Fb3QfXLOUJ5ZsDG1gUTOw0iBCq5oju60uJgXyK%2FVZqilK363tY4loCbNtE6oh5L6z1VjwE0QO0lrsmoTYdGzG0ls0FKimTCc6t3JBjqkAd9UbjraQULKAEhtrPDdY4f3ld1l7dflmMI6W3ySKnDEEHdagZaGZcSXu77BmPW7CF8p6fYdCHj3eF2ZZrsNlgOY0H1iyyAsNfsEBo1yq4HHC6ZupP1gTgRYHpoIycuzYz4MxyMuP7ZrJa15FWnU8i6lE3usU90pDehhOQNJjU97QP6lRywaEabHGdG4vDdN3gD6SS84ANbVn%2F9wgVls9vtEhQkO&X-Amz-Signature=891a50f8e1cd7fff85574ea5c3abe8c29d7824f6b5ae878a2ea494719b967bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTMGAK2D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUCtOmrAzS6XFskCCoIytqNXa8jp%2F3cr50xeafFdcdpwIhAO7EoxK5%2FSTKtTw5WgezkRvZwMdOAxr%2BHnWbci7nDd%2BNKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxoAHIUxiHh8oRXocq3AP9%2F%2FqKctSJt3xFSB23WjW8sa4zaJeNMr2oKXQe3zb4T5str3YHICNNyumepFsYi1yFUgNKJVIw6Hg4w3jkMs%2B1uo2LPQFAfT%2FPXZCNkOQlzTEyIYA8MaJmflC4CrRnXz97lCC6m5mEEnqFDQPjecTXeJKIRsV2tLe%2FH%2FHOdodI4LItUcVjkSlIXqkeMztre%2BaJ6j%2FOuiIeYzeJ%2BH%2BtdZioImqpVJgDZl7IF7hVNiPFu%2F39EnE2t81oMTEqIokzHTe%2FpJ9PsrZSgwr4e97Mt1d8z6IjzJr4P5cjftTPPkdmrL30bMjqS3EDGXOU%2Bh8TwSkhO2yjS2L3IPeGV8v02PzHn37r%2Ba%2BXfceF6ik2QueuS4xjNTlYao88VK6UN2wj4Ml3i5e2xu7bdHWPDIgjfWe7XuytM3gVtBoBBZbgUVfMazTaWCGXncDLHJRWjBAvoRYpG2P1Bs%2FSHykJxePWxB7YDOOhcrXmN9z7thKTZffL78Sv6iXcMrBzJqJvvLFS78tNOvj8BBrFDN8Y4gruztSL034D7Ct2%2Fb3QfXLOUJ5ZsDG1gUTOw0iBCq5oju60uJgXyK%2FVZqilK363tY4loCbNtE6oh5L6z1VjwE0QO0lrsmoTYdGzG0ls0FKimTCc6t3JBjqkAd9UbjraQULKAEhtrPDdY4f3ld1l7dflmMI6W3ySKnDEEHdagZaGZcSXu77BmPW7CF8p6fYdCHj3eF2ZZrsNlgOY0H1iyyAsNfsEBo1yq4HHC6ZupP1gTgRYHpoIycuzYz4MxyMuP7ZrJa15FWnU8i6lE3usU90pDehhOQNJjU97QP6lRywaEabHGdG4vDdN3gD6SS84ANbVn%2F9wgVls9vtEhQkO&X-Amz-Signature=08f56e917ddb5f230ebe5e8244a6e29f525e040c1333ff2c1e6864827abe3893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

