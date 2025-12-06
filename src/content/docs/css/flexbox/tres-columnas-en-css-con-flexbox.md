---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DZFZE2A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRdHJECb7W6Z5LrGmMfC7MOOSiezaeKOiN0fcNLT3hAgIhAIJLXw3K2O1YBSRq9b772inlQMvjrZ6XWTlr2iAHslL6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzS2fq%2FWxHZx63xB2Mq3AMZ5eVtN4DZLRKWRFKEILUPT23BY0tzj66cNwGpS5YHkE44N5ENnVLaW61nzOEugzAczgg8gdDhXU4fAgBPwcVs%2FiOzoab%2BuvR4W8ETEMUol%2BeNBzlo2bxHRpQKzcARdRZxOnh8bx%2Fb2FCNmXG8jZxOGwsCdRg9W%2Fl1Hh2ODeo9w%2F4ZTKg3pZQnerid%2FMQ4T8yopceL6bZtE1wHXbSVKtccRv983QJgOncKnIRPo1e2xoNnzyFNjIFqYxzMQ5HnOvTMlBmqVHFCHyy6g0mXJE24FkFZcAx%2BCbzqXtOGMjhw2eXvSYU4chATZTkAJrH9ncrFtDoCVJS17ITW23TWqOuj8%2Bbp5zP6Wh%2BrU5am5ucOSPuXKyJWpE%2BVvMgg0qMA5XvMl2xjBZm5laxxBsb%2Fjj4mdCJknUpwz6LNgG2Et8iwRS8oJDdMkLxN9HoFt7y%2BkNgMbrziLRXZ%2F15zXPtQCXS7ZOPiDy6i1RX8lIX0Ky6AU1lYat%2F4TqmnacyjoJm6AsPT7GVj4fNg2tZgY0lWy9%2BqdW1r6g%2Fz5Zq8OamvcoGn3N%2BIZCgcMzMuT5HXN77NCZDewI0O6xMmwJy564EllsqCEd5caJ6EsJDz9uY2Vf%2BjG%2FC%2BmOOq4ybKE%2FtQSDCkptDJBjqkAVTNwd1WcsYYD%2F3Plm%2FKY%2FKjsGLm%2Ft%2FKo2mvPHjZKvzTQ4uFnMwbbqUPz2OC9N3iIneJzgfx8eZQaCG3XOz6oIsENVp1JBEVABq4V16JUxPHSWdSOYs7j4FevBRayYDf9G7lquiOheBn20DtaYn7%2B2w4gtzPgNFOp1ugqsOL7omhvt%2FGwUABgFRvuyCEmyPLava9GtOetlZk5ZRP8M3GyltU42q5&X-Amz-Signature=464ecb58b122a9cfa9faa5b636a256a13a8804562dde7361c3e831149a5b220d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DZFZE2A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRdHJECb7W6Z5LrGmMfC7MOOSiezaeKOiN0fcNLT3hAgIhAIJLXw3K2O1YBSRq9b772inlQMvjrZ6XWTlr2iAHslL6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzS2fq%2FWxHZx63xB2Mq3AMZ5eVtN4DZLRKWRFKEILUPT23BY0tzj66cNwGpS5YHkE44N5ENnVLaW61nzOEugzAczgg8gdDhXU4fAgBPwcVs%2FiOzoab%2BuvR4W8ETEMUol%2BeNBzlo2bxHRpQKzcARdRZxOnh8bx%2Fb2FCNmXG8jZxOGwsCdRg9W%2Fl1Hh2ODeo9w%2F4ZTKg3pZQnerid%2FMQ4T8yopceL6bZtE1wHXbSVKtccRv983QJgOncKnIRPo1e2xoNnzyFNjIFqYxzMQ5HnOvTMlBmqVHFCHyy6g0mXJE24FkFZcAx%2BCbzqXtOGMjhw2eXvSYU4chATZTkAJrH9ncrFtDoCVJS17ITW23TWqOuj8%2Bbp5zP6Wh%2BrU5am5ucOSPuXKyJWpE%2BVvMgg0qMA5XvMl2xjBZm5laxxBsb%2Fjj4mdCJknUpwz6LNgG2Et8iwRS8oJDdMkLxN9HoFt7y%2BkNgMbrziLRXZ%2F15zXPtQCXS7ZOPiDy6i1RX8lIX0Ky6AU1lYat%2F4TqmnacyjoJm6AsPT7GVj4fNg2tZgY0lWy9%2BqdW1r6g%2Fz5Zq8OamvcoGn3N%2BIZCgcMzMuT5HXN77NCZDewI0O6xMmwJy564EllsqCEd5caJ6EsJDz9uY2Vf%2BjG%2FC%2BmOOq4ybKE%2FtQSDCkptDJBjqkAVTNwd1WcsYYD%2F3Plm%2FKY%2FKjsGLm%2Ft%2FKo2mvPHjZKvzTQ4uFnMwbbqUPz2OC9N3iIneJzgfx8eZQaCG3XOz6oIsENVp1JBEVABq4V16JUxPHSWdSOYs7j4FevBRayYDf9G7lquiOheBn20DtaYn7%2B2w4gtzPgNFOp1ugqsOL7omhvt%2FGwUABgFRvuyCEmyPLava9GtOetlZk5ZRP8M3GyltU42q5&X-Amz-Signature=4ff94a6a75e8588bd2e3a3cda8b54b60ada9caf833542c194cde7482a3572f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

