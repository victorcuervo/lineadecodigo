---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZGYHBRL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdNA81p7igacwmi3ljWDvj8nI2uaGtTmQXRDAun33arAiEA4QEZvMZaiLBuQn%2B0H8Z3zhEFgUbqBIUetZGOhTbhzREqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTQ%2BHnKgB6WVihWQSrcA31sYT4i2LHiQxSc8EZpUlSi54il%2FWsX6FZMdzio8KdIhL82UXhPDGwgyEKiEF8xp%2BPDbybvy6HEYkoG%2B3SDlFv1Wqd%2Byv1qdJIIKLP31D6%2FN4EntAvZz8mSsnuzb%2BH1uHQ%2FrQ7akorWmAPTV52hnq4vCW%2BzaW3wQ3fBgA3B2ePsEGWJKlDcH4cLqUsKps1FXk8ZWSAXNol2MzbdZMFhUY7u558TtQd2BHb4DhxtJCofDENsGSNl5TBrDMniCQfO3VAwcSaDe2m%2BKshiDCZ3CJgmKy0MXiWJuzHsQCPRXRe755CVyHLH7VGOmWRZAzo4ZGCW73%2FKYHHduJclDi%2FGbA1FW8EZtLi5aNoi4APIY2bmBEM7uN9fyAMiWTGXhUC4gEpCliCRrat5VApAVPdkiEplBCg3jKcP2fS%2Bd6MnOnF7eZa895K6jpPveOOncKtt20MZOjBkHWijhddKCwvkB44hUGvo72FxgWfl%2Bc154GcG69bBh1KsNnuXF7OA%2BR%2Bi4DOVotR3VGCyET54lI6wIkBfjTTPOO8XR4oEEOFjO5%2BfZlNzmkGpWNNv9WK5XZ7I%2BoGy7ufcceAf%2FHcIcCnUYOUeo4SLNWkFNdl%2BzJGkYXh6YjM2LZ6%2BqXhAqRz4MNez3MkGOqUBE4HlZ5k%2BkkhD7TYnfbh3dwHdfpsFK18WFsGUSNY4pvfwcy8yqJnG9yJkuQsmGTVww6wuZ7V%2FI0LoIqLdlFhzgNs4BufAS9EUyuSGk09le%2BULaQZogBFGZ2nWjsSn%2BU9Bye1ZXzBUp4%2BjQiuP%2Baex4paLhJUn62CQ7YS%2BMNV8lpxtYTYIOYpRjk3qod%2BhGJZU3InbnWgnNCzZAXS4LPKewLCv31xk&X-Amz-Signature=c40aae396c90e7822016d2a48921d88b8070c6bd43b1a5681564706eef7d116f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZGYHBRL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdNA81p7igacwmi3ljWDvj8nI2uaGtTmQXRDAun33arAiEA4QEZvMZaiLBuQn%2B0H8Z3zhEFgUbqBIUetZGOhTbhzREqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTQ%2BHnKgB6WVihWQSrcA31sYT4i2LHiQxSc8EZpUlSi54il%2FWsX6FZMdzio8KdIhL82UXhPDGwgyEKiEF8xp%2BPDbybvy6HEYkoG%2B3SDlFv1Wqd%2Byv1qdJIIKLP31D6%2FN4EntAvZz8mSsnuzb%2BH1uHQ%2FrQ7akorWmAPTV52hnq4vCW%2BzaW3wQ3fBgA3B2ePsEGWJKlDcH4cLqUsKps1FXk8ZWSAXNol2MzbdZMFhUY7u558TtQd2BHb4DhxtJCofDENsGSNl5TBrDMniCQfO3VAwcSaDe2m%2BKshiDCZ3CJgmKy0MXiWJuzHsQCPRXRe755CVyHLH7VGOmWRZAzo4ZGCW73%2FKYHHduJclDi%2FGbA1FW8EZtLi5aNoi4APIY2bmBEM7uN9fyAMiWTGXhUC4gEpCliCRrat5VApAVPdkiEplBCg3jKcP2fS%2Bd6MnOnF7eZa895K6jpPveOOncKtt20MZOjBkHWijhddKCwvkB44hUGvo72FxgWfl%2Bc154GcG69bBh1KsNnuXF7OA%2BR%2Bi4DOVotR3VGCyET54lI6wIkBfjTTPOO8XR4oEEOFjO5%2BfZlNzmkGpWNNv9WK5XZ7I%2BoGy7ufcceAf%2FHcIcCnUYOUeo4SLNWkFNdl%2BzJGkYXh6YjM2LZ6%2BqXhAqRz4MNez3MkGOqUBE4HlZ5k%2BkkhD7TYnfbh3dwHdfpsFK18WFsGUSNY4pvfwcy8yqJnG9yJkuQsmGTVww6wuZ7V%2FI0LoIqLdlFhzgNs4BufAS9EUyuSGk09le%2BULaQZogBFGZ2nWjsSn%2BU9Bye1ZXzBUp4%2BjQiuP%2Baex4paLhJUn62CQ7YS%2BMNV8lpxtYTYIOYpRjk3qod%2BhGJZU3InbnWgnNCzZAXS4LPKewLCv31xk&X-Amz-Signature=b19372f72e853bcc48c4d3cd03a5db942573e84a81544ac475d96eeb87e81041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

