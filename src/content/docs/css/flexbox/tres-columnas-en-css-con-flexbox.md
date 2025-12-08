---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4J5QK4P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuFqAUzdEuqnRkNTtcUZzqZi5CLm%2FxGoEAfAQl3%2FoKXAiAikOtxLnTVzfNan6QXygxFOCblA3%2FKhbE3PeS5FUuxOyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwBrO1vRpL8XNpj02KtwDi1nziiL6gDKzSINlZv5k4X3HxGsz8YO9DG2kugSuClbRimUieEnLDCLL8%2BVXbfy7SrVUbEQI0JJOBW2QYLYjaBx6zRuysP0O3NAUv5ziJxLNqbx4AjqOs6Wy22di94C4DtuJg8dCNZGKL%2FLaJ%2F7rURI9tJt%2FcjIxWtGNKH2KRPYQOIqd6jU%2BR7qxJU4TL2RREIB9ao8Q2tW8w4mr%2Fj%2FJ%2FVqpKzjVik4EGnOndTGALwNqtgUSOuSM26KuuZtfgzZeXW9EZSEObVv3l5PHoOgFsClWnZo0%2FXooOaH6sCAgxIRqeUiRct5Y%2Fm15oa8tRMEc08lZvhYzYgop7A7hKw%2FQuRWoDWFiNLopipd5DIYfcrvadcpd%2Bn%2FNmEKS4d2Y%2FhOJjCHlJxO%2BNyf%2BhFXfdoY3uM6Aamnbm5M%2FrRNmuTxAkwq8KKE%2FJYig6upMfzT6a5c7C077Ffi8FhlX46GHb3MmZE%2B%2Fnp%2B1vQXw9Uu9TvIJXTtrn3MgbjNCvhOIPC%2F%2FpW0xR6rR9VUjyKt%2BwWtv1La8jwlwzHPWnsNc%2FK%2BHpZ%2Fo0tuxEITp%2FzE1FyFFQR%2F4nGgzPRK8VaCILZUVjq8DWg89myvwoFi7wpEUkNN6YHaAqzrIItkOFq8utME8HD4w%2FOTbyQY6pgGHy%2FLXAzvcIM%2Fs53lcf%2FLcQYJB03AqJVghtrxNJoDqnH5KEzje0pt6KgSdT1hEIQJkVe3nR9aKEAi%2FbfkDAxNPnxu0St4HS2blraVxViGQJ%2FcraBoNhO1zk%2B%2BnsJhJ6rVf6w3xku%2FSBWocNhWKlUtojErVqSkJ5yw2Fe38orNNIB6Qf53vjRBX2zd1bn7pBKnxHf%2ByU9Tj6dFG16AoQ3UQMsUXMsv7&X-Amz-Signature=7ddce0f1ebd061361804652848bc6c6856be1a98107446881d99321f7dcda9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4J5QK4P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuFqAUzdEuqnRkNTtcUZzqZi5CLm%2FxGoEAfAQl3%2FoKXAiAikOtxLnTVzfNan6QXygxFOCblA3%2FKhbE3PeS5FUuxOyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwBrO1vRpL8XNpj02KtwDi1nziiL6gDKzSINlZv5k4X3HxGsz8YO9DG2kugSuClbRimUieEnLDCLL8%2BVXbfy7SrVUbEQI0JJOBW2QYLYjaBx6zRuysP0O3NAUv5ziJxLNqbx4AjqOs6Wy22di94C4DtuJg8dCNZGKL%2FLaJ%2F7rURI9tJt%2FcjIxWtGNKH2KRPYQOIqd6jU%2BR7qxJU4TL2RREIB9ao8Q2tW8w4mr%2Fj%2FJ%2FVqpKzjVik4EGnOndTGALwNqtgUSOuSM26KuuZtfgzZeXW9EZSEObVv3l5PHoOgFsClWnZo0%2FXooOaH6sCAgxIRqeUiRct5Y%2Fm15oa8tRMEc08lZvhYzYgop7A7hKw%2FQuRWoDWFiNLopipd5DIYfcrvadcpd%2Bn%2FNmEKS4d2Y%2FhOJjCHlJxO%2BNyf%2BhFXfdoY3uM6Aamnbm5M%2FrRNmuTxAkwq8KKE%2FJYig6upMfzT6a5c7C077Ffi8FhlX46GHb3MmZE%2B%2Fnp%2B1vQXw9Uu9TvIJXTtrn3MgbjNCvhOIPC%2F%2FpW0xR6rR9VUjyKt%2BwWtv1La8jwlwzHPWnsNc%2FK%2BHpZ%2Fo0tuxEITp%2FzE1FyFFQR%2F4nGgzPRK8VaCILZUVjq8DWg89myvwoFi7wpEUkNN6YHaAqzrIItkOFq8utME8HD4w%2FOTbyQY6pgGHy%2FLXAzvcIM%2Fs53lcf%2FLcQYJB03AqJVghtrxNJoDqnH5KEzje0pt6KgSdT1hEIQJkVe3nR9aKEAi%2FbfkDAxNPnxu0St4HS2blraVxViGQJ%2FcraBoNhO1zk%2B%2BnsJhJ6rVf6w3xku%2FSBWocNhWKlUtojErVqSkJ5yw2Fe38orNNIB6Qf53vjRBX2zd1bn7pBKnxHf%2ByU9Tj6dFG16AoQ3UQMsUXMsv7&X-Amz-Signature=7dd616c394f2c90b0391d928d66cf7334a2116d6efe4acb578cb5241fb59b29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

