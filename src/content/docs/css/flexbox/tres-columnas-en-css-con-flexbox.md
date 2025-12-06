---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDOSEIA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF55bAOcHsX%2F3ivwAcVqwl%2Fn1bKpQuY%2FPs1%2FqBqPqb0SAiEA1ZHDXjwo0C0JJC9zYfjRPPSNQv0AsMnztgDC6Tow0Jgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH%2FbW%2BHq%2B2D2wyh%2BEyrcA95nMmveLgnnQ4kCuujXdu4Kvaj9xmZvjyG7uZEYNerqE2i5kvc1UvBtuheNb%2ByLcU%2FPgUXiLw93%2BnivaQJcFWJKrsj4cuqeVgG%2F8RBO6hToKBAbZVaWvbxRpkIdAhoWTwf2oCzeJc83yCm%2FkStCoFba1AtuSax2%2BLJhgWzRqZFT0u16GrOywiXFr2VB%2B7al43DCqRyH4%2F55esSLtd3RlINz%2F8ivwkzISiXwSbFQBiT9Rfsb%2FCENj1jMVxw9k8roFMI6Xh08kVp%2BGA2TGa5%2F9gQlLFwkkXcHgOO%2BlIs6dLA9pgoDUPk5mc9NUhoBAQQjNN5R83MRKCWKo570N3zMYgfRbc8ZsKkTH43PTnbwO4xxnQ4OYY%2BoCkd8oa5Ldh1NSfN6LDk0AlyQ5oNJRy3fGLyWxe32DEpC5vi6Mc7BvAMrLjHkEelKHLTbgrha6VEtOi2c6Rumjt%2B74JhescmTKMR%2FF5jL5Hz8sSxvtRsiOQY1rdfyR6iEhYyTauX5ifr8QA0Q6QWUA8BrCokf8wn0ipC3qzKaf5eDARHbYa7149oEqdz7EbumCkCkhORwJ9OLrb7kuvKBThaoAzgvv4YdIoJApBtvtpiIVlH5RPVLVdKXX%2FPsnVbodX3TBtipMIvN0ckGOqUB36az85mnxYd4Vug1U1Spl6Ss14eNR6%2Blg5N8ZcxPsU6oiMB%2FjwZM%2F%2Bqv62GLhGjiWOSu%2BCj4tZ%2FVQGIya7KReQQ%2B3oLagq%2F6evbQMR2yKT0KkbJjLkHMflrj0QlozkKR7%2B%2F012Fd1o9iYgTzWsXzlI%2Fi6duqcpN2QV1h6U48RWs62UV5lS9qdHdh3PJv0BMZ5gY8PWmbRrVcjEedmCnbQ%2Fo3uyhj&X-Amz-Signature=8576cb2a98b560b0a1d79a573d1e9732f9ee7c1de890b08f4bc1c1a7ad3f0ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDOSEIA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF55bAOcHsX%2F3ivwAcVqwl%2Fn1bKpQuY%2FPs1%2FqBqPqb0SAiEA1ZHDXjwo0C0JJC9zYfjRPPSNQv0AsMnztgDC6Tow0Jgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH%2FbW%2BHq%2B2D2wyh%2BEyrcA95nMmveLgnnQ4kCuujXdu4Kvaj9xmZvjyG7uZEYNerqE2i5kvc1UvBtuheNb%2ByLcU%2FPgUXiLw93%2BnivaQJcFWJKrsj4cuqeVgG%2F8RBO6hToKBAbZVaWvbxRpkIdAhoWTwf2oCzeJc83yCm%2FkStCoFba1AtuSax2%2BLJhgWzRqZFT0u16GrOywiXFr2VB%2B7al43DCqRyH4%2F55esSLtd3RlINz%2F8ivwkzISiXwSbFQBiT9Rfsb%2FCENj1jMVxw9k8roFMI6Xh08kVp%2BGA2TGa5%2F9gQlLFwkkXcHgOO%2BlIs6dLA9pgoDUPk5mc9NUhoBAQQjNN5R83MRKCWKo570N3zMYgfRbc8ZsKkTH43PTnbwO4xxnQ4OYY%2BoCkd8oa5Ldh1NSfN6LDk0AlyQ5oNJRy3fGLyWxe32DEpC5vi6Mc7BvAMrLjHkEelKHLTbgrha6VEtOi2c6Rumjt%2B74JhescmTKMR%2FF5jL5Hz8sSxvtRsiOQY1rdfyR6iEhYyTauX5ifr8QA0Q6QWUA8BrCokf8wn0ipC3qzKaf5eDARHbYa7149oEqdz7EbumCkCkhORwJ9OLrb7kuvKBThaoAzgvv4YdIoJApBtvtpiIVlH5RPVLVdKXX%2FPsnVbodX3TBtipMIvN0ckGOqUB36az85mnxYd4Vug1U1Spl6Ss14eNR6%2Blg5N8ZcxPsU6oiMB%2FjwZM%2F%2Bqv62GLhGjiWOSu%2BCj4tZ%2FVQGIya7KReQQ%2B3oLagq%2F6evbQMR2yKT0KkbJjLkHMflrj0QlozkKR7%2B%2F012Fd1o9iYgTzWsXzlI%2Fi6duqcpN2QV1h6U48RWs62UV5lS9qdHdh3PJv0BMZ5gY8PWmbRrVcjEedmCnbQ%2Fo3uyhj&X-Amz-Signature=3eb6ab8d7903e68cd0bb357f36b007ebe513d5e3b072e9897fd28b331569031a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

