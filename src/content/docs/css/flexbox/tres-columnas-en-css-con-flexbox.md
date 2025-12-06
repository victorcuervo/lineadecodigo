---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLB56R3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2BXoKJ2EOXLCliFYYytLL%2BfCqYz6b7OP%2F6OUE%2FKkTrgIhAOZvUJwuNw8otV7c4R3Jzwabm5wv%2BfGblRkjzTYWXd%2BSKv8DCHQQABoMNjM3NDIzMTgzODA1IgyA1LRHtMGJNBFeLcYq3AP1Vw0drnIIXzmRuyWVua3MhcmiNTx30TzBSlRFWvBBj9k%2BTt%2FtZlj51RAZuj5lr82odz2q5%2FVaP4AIjbvCJ0ZqvjsroTzpuWI0WeDEx9uTilsV3oITIq1clQl%2BSiLw5LrTvw3gHWWW0pJaKo4%2FVd9JDBpWyBTRRwL1LQuis3wbqnja2CHRUzI3T7hE%2FEPtSgWQ7pE3m9cZqVEfrJhb5R8Kf0wiwRLKpMLAN0%2By5y%2BBQk2VHEtwEBgtYrvW%2FtTQAsz6eduNzWT%2FAEzsDYTfKFi6VFl9Vo4jZvEWgyLJIyRlyYndWY3ZGWC%2FQW0%2B%2BpEYUxFSZIz6gwhHxgDGc6GOw%2FCT2duBATG7v6jOHpR0a4GVrNBOGucxTMCx4jB9FPFdG9ujn1St4WAjM1u%2FKy8gM9mBsf0BXvrrU%2BXzr6iJfkeKn961h2fejQh8Op7fTQKB9NIYsArtiBhLs1n%2BD%2F2Yp6Hvbf5kiOHsAQh%2FprWHvFXRW%2BrhnrqC7yPeLAS37AaKqrGUPD%2Bix%2BBF5rSYewjQc3nRTDZi%2BT%2B7RMRraz4tHmS9v3DPnKJRLxC%2FygzxkVLjMhEw3%2F%2FNfoOqx3pn6KMknY3OR2iL%2B1YV3zq31Pv5erzmw3mRmZbqR2MPrfKc2zCCitDJBjqkARvi4jZ7aeYU9ZWnO5XrseVqLNEtTvRK9wSxsv7jjVI6jD%2FxYaeHbkxyAt06mJA28KeOpIgas7FCeDliDqJ6XlLgBIgwShLXaz78T851Va6p%2BQlNpm39C3QuZW6tXnKNevijzNlHh5GKdgFHTjKCbecnIIUUrCf2WCRTehswHOu1K7JcZltMOcri9fi6pQH7xPAdxmreZfYsDzzkTFBFjydmJv%2F6&X-Amz-Signature=3d6c48f7ed2e0d0ceffea7074347aa53a100c8fa4bc84091a1571a6a7a9b25df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLB56R3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ%2BXoKJ2EOXLCliFYYytLL%2BfCqYz6b7OP%2F6OUE%2FKkTrgIhAOZvUJwuNw8otV7c4R3Jzwabm5wv%2BfGblRkjzTYWXd%2BSKv8DCHQQABoMNjM3NDIzMTgzODA1IgyA1LRHtMGJNBFeLcYq3AP1Vw0drnIIXzmRuyWVua3MhcmiNTx30TzBSlRFWvBBj9k%2BTt%2FtZlj51RAZuj5lr82odz2q5%2FVaP4AIjbvCJ0ZqvjsroTzpuWI0WeDEx9uTilsV3oITIq1clQl%2BSiLw5LrTvw3gHWWW0pJaKo4%2FVd9JDBpWyBTRRwL1LQuis3wbqnja2CHRUzI3T7hE%2FEPtSgWQ7pE3m9cZqVEfrJhb5R8Kf0wiwRLKpMLAN0%2By5y%2BBQk2VHEtwEBgtYrvW%2FtTQAsz6eduNzWT%2FAEzsDYTfKFi6VFl9Vo4jZvEWgyLJIyRlyYndWY3ZGWC%2FQW0%2B%2BpEYUxFSZIz6gwhHxgDGc6GOw%2FCT2duBATG7v6jOHpR0a4GVrNBOGucxTMCx4jB9FPFdG9ujn1St4WAjM1u%2FKy8gM9mBsf0BXvrrU%2BXzr6iJfkeKn961h2fejQh8Op7fTQKB9NIYsArtiBhLs1n%2BD%2F2Yp6Hvbf5kiOHsAQh%2FprWHvFXRW%2BrhnrqC7yPeLAS37AaKqrGUPD%2Bix%2BBF5rSYewjQc3nRTDZi%2BT%2B7RMRraz4tHmS9v3DPnKJRLxC%2FygzxkVLjMhEw3%2F%2FNfoOqx3pn6KMknY3OR2iL%2B1YV3zq31Pv5erzmw3mRmZbqR2MPrfKc2zCCitDJBjqkARvi4jZ7aeYU9ZWnO5XrseVqLNEtTvRK9wSxsv7jjVI6jD%2FxYaeHbkxyAt06mJA28KeOpIgas7FCeDliDqJ6XlLgBIgwShLXaz78T851Va6p%2BQlNpm39C3QuZW6tXnKNevijzNlHh5GKdgFHTjKCbecnIIUUrCf2WCRTehswHOu1K7JcZltMOcri9fi6pQH7xPAdxmreZfYsDzzkTFBFjydmJv%2F6&X-Amz-Signature=341872bf1f134cb609c4606ff6a943c43cb5eb01045c8ed00bab067cc78313e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

