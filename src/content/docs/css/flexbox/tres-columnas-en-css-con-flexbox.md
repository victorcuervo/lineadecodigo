---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMZG53IE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWut6VIxecUEVsRD5FqqyrK5CouqlAyudDz1ZmkYirxAIhAPWnvGX%2FtfQqF75DphmUhK69RDmhIbD%2FTGXYFzltfrXTKv8DCFUQABoMNjM3NDIzMTgzODA1Igy4l%2BU2g4IBNotvzfMq3APaDRC8P5VE9fHbo6%2FUIdhLXKfsJ2sPXnTl%2BQtJQKdTb8NFKLrSXXG2zr%2F5J15tRLrsUzKEIfHnF0hqxiy6Rs73zgLk8EeWXF6SKdqryPJASNJTzreRWVoHC4P7IfyUzJosPMK3bFIEafIWCrw4%2FnZjmDezf4XMDfozk9CpT8KPuGLcXy1V%2BD5Xx%2Fod5PGJdSX%2BtkLs5EVrzpVgPtXW3r%2FnMru2AWRQNk0oIOIu3uUHqfvjLBIP2SutEsOhW7DJWhnYQ9EC0DY%2B%2BQTja08O0%2FNXeO%2FKYGj39bQ1r9wUQ6NZW7ppC9%2FLT5D1IX0mYx2m%2FHLJeTokOvvCpoQe32nX8piE4XoC%2FZ18aVe3r9jnAyrPeRlohCSA97mkD4k%2BZEg9rTOerkp886npzX3iq1e2ubH9jj108U3Y2j6PbU8NcyVEZ77x%2B9wTTPRle5b4ruLeQkcVUH7xb1jCdX11c%2FBH2wE%2FjPPlf5lIUn%2B3P3MEE722FFrN96OvNFUK43f1TV4QuZKsXciDm8V0wsL0bSf0YpNaIGGv6m%2BCwR1ILkrHD67Kkga2evm2D2bVF5eTJeQcZBZdBEPb8%2BxYfmOleIw9dFCr6foPpc5z7%2BQDwgtdPhiLyKggPP8tdrfylddydTDWsMnJBjqkAX6aHOttDtWKJ%2BuAJxiyOn8AvAUB9719v7J5mOybhl%2Fe7x393gIYOYQyIj8C9NoIzU6PM2V%2FgBJR4trzIavZMXTetdk6Km0u2BLH1uZ5BkCTcP3wiGZg28P%2F4fm8nA3iZp%2FTeF6NZ9YZEl%2BIchphiyb9%2Fir0nveNYz8kWvhwm2S03nsRznf72Ml%2B7GpP9R9261Zfm1GhA0CfI474S2Doj3M20gRy&X-Amz-Signature=9dec587815eb343d73049f71b96a862c25170edcfd15535ece449ce83268549f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMZG53IE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWut6VIxecUEVsRD5FqqyrK5CouqlAyudDz1ZmkYirxAIhAPWnvGX%2FtfQqF75DphmUhK69RDmhIbD%2FTGXYFzltfrXTKv8DCFUQABoMNjM3NDIzMTgzODA1Igy4l%2BU2g4IBNotvzfMq3APaDRC8P5VE9fHbo6%2FUIdhLXKfsJ2sPXnTl%2BQtJQKdTb8NFKLrSXXG2zr%2F5J15tRLrsUzKEIfHnF0hqxiy6Rs73zgLk8EeWXF6SKdqryPJASNJTzreRWVoHC4P7IfyUzJosPMK3bFIEafIWCrw4%2FnZjmDezf4XMDfozk9CpT8KPuGLcXy1V%2BD5Xx%2Fod5PGJdSX%2BtkLs5EVrzpVgPtXW3r%2FnMru2AWRQNk0oIOIu3uUHqfvjLBIP2SutEsOhW7DJWhnYQ9EC0DY%2B%2BQTja08O0%2FNXeO%2FKYGj39bQ1r9wUQ6NZW7ppC9%2FLT5D1IX0mYx2m%2FHLJeTokOvvCpoQe32nX8piE4XoC%2FZ18aVe3r9jnAyrPeRlohCSA97mkD4k%2BZEg9rTOerkp886npzX3iq1e2ubH9jj108U3Y2j6PbU8NcyVEZ77x%2B9wTTPRle5b4ruLeQkcVUH7xb1jCdX11c%2FBH2wE%2FjPPlf5lIUn%2B3P3MEE722FFrN96OvNFUK43f1TV4QuZKsXciDm8V0wsL0bSf0YpNaIGGv6m%2BCwR1ILkrHD67Kkga2evm2D2bVF5eTJeQcZBZdBEPb8%2BxYfmOleIw9dFCr6foPpc5z7%2BQDwgtdPhiLyKggPP8tdrfylddydTDWsMnJBjqkAX6aHOttDtWKJ%2BuAJxiyOn8AvAUB9719v7J5mOybhl%2Fe7x393gIYOYQyIj8C9NoIzU6PM2V%2FgBJR4trzIavZMXTetdk6Km0u2BLH1uZ5BkCTcP3wiGZg28P%2F4fm8nA3iZp%2FTeF6NZ9YZEl%2BIchphiyb9%2Fir0nveNYz8kWvhwm2S03nsRznf72Ml%2B7GpP9R9261Zfm1GhA0CfI474S2Doj3M20gRy&X-Amz-Signature=af5c9c094095fae2683914aa5cbfdf6526f8390f305d1ec59d4f6652433555fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

