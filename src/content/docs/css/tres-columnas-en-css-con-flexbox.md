---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW424ISR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDHb55bxfQcS4rBlr3gU0YPNluAWaX8lx1LzfYWWWA2EwIhAJ0El5HSefdn509ECFWDuMCpkOElYMzjYDU09SbAZ7EtKv8DCDYQABoMNjM3NDIzMTgzODA1Igy2k1vbLQiDJNmVjsQq3APcq1I%2Beg5EI%2F349GYNHZjXNbTeXKgNXSP0NDVJ6x9MMsoFMhqAVholCdm7hOuIM4A%2Fl1D5n%2F7OmcBgArELYaZRtFGvr0taDo2CRe7PntC2acKfiBIDn6m6uGCbjTwGoX6Q5HjcBOc1Em3KNUfI1ziRxaCXNgD08vqcabdbySdunbl3h%2Fs%2B3Irkr7cbDABjuj99qEsfcwKt3fM6ZRQtukKegKsDOF4md7tEPHQzwAQi3izQTEIjHC%2B0UsNC7P6FImdKJWGX5zYqPaPxB5xgB225yIckQk8FQoU3q0zvgZj%2BlSR1dSBpMLC1fAuYfF4yZRVPn7jXMnJ6xOlWaVEAzm%2FhhXY4u0iwfN8a%2Fr5Tghuf6IEi67ybntXHaoDpCOtA7PxOO5wFFiYNH4R2IogPT%2FeRWKI343JEw7BGyLPYqGlUy3ohh%2FeYIOdnKQ7QcOOk6zCDBZYBXpW9JryGAWktlP87AoSFtzoUd2DwP2l4%2FiQxn6J30j6T5z6VMLtOkL4qqSZStlzi9VYex6ALKdB3jWCOmWFo0vYYH8oTk%2BwB1g9%2FfH8q5zIaA6szmO%2FcEkZnS4kfMaQW17VmwBeFlBmFMVC%2FUFGhdWgmpR8qwuTWdIg6DT3K5%2FfFXwI2hZNQlTC7vcLJBjqkAWh0emaVFynnoterDHzXZLiXPNlj7dYCbDiMaU6IoSGDeE44d02C2Mg62IizJCBSxZeBLoAwwryjlCGvSitFQsOprNoNSlApwhlDejXJv%2BPELHijBdDToBMWg7WjTEWEYMnu6Phu23Jh3wzYx7Bu%2BS4uqbzJfMolpzgeKMKkiztU2ZRS69vj99TPDWciWEQKtPk0evTtxwOw%2Bkmg3rclnnfjBvVp&X-Amz-Signature=bd778f8bb880e98dc4ab64ea5c2e174770fb723ece609b84b1332b9468ae635c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW424ISR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDHb55bxfQcS4rBlr3gU0YPNluAWaX8lx1LzfYWWWA2EwIhAJ0El5HSefdn509ECFWDuMCpkOElYMzjYDU09SbAZ7EtKv8DCDYQABoMNjM3NDIzMTgzODA1Igy2k1vbLQiDJNmVjsQq3APcq1I%2Beg5EI%2F349GYNHZjXNbTeXKgNXSP0NDVJ6x9MMsoFMhqAVholCdm7hOuIM4A%2Fl1D5n%2F7OmcBgArELYaZRtFGvr0taDo2CRe7PntC2acKfiBIDn6m6uGCbjTwGoX6Q5HjcBOc1Em3KNUfI1ziRxaCXNgD08vqcabdbySdunbl3h%2Fs%2B3Irkr7cbDABjuj99qEsfcwKt3fM6ZRQtukKegKsDOF4md7tEPHQzwAQi3izQTEIjHC%2B0UsNC7P6FImdKJWGX5zYqPaPxB5xgB225yIckQk8FQoU3q0zvgZj%2BlSR1dSBpMLC1fAuYfF4yZRVPn7jXMnJ6xOlWaVEAzm%2FhhXY4u0iwfN8a%2Fr5Tghuf6IEi67ybntXHaoDpCOtA7PxOO5wFFiYNH4R2IogPT%2FeRWKI343JEw7BGyLPYqGlUy3ohh%2FeYIOdnKQ7QcOOk6zCDBZYBXpW9JryGAWktlP87AoSFtzoUd2DwP2l4%2FiQxn6J30j6T5z6VMLtOkL4qqSZStlzi9VYex6ALKdB3jWCOmWFo0vYYH8oTk%2BwB1g9%2FfH8q5zIaA6szmO%2FcEkZnS4kfMaQW17VmwBeFlBmFMVC%2FUFGhdWgmpR8qwuTWdIg6DT3K5%2FfFXwI2hZNQlTC7vcLJBjqkAWh0emaVFynnoterDHzXZLiXPNlj7dYCbDiMaU6IoSGDeE44d02C2Mg62IizJCBSxZeBLoAwwryjlCGvSitFQsOprNoNSlApwhlDejXJv%2BPELHijBdDToBMWg7WjTEWEYMnu6Phu23Jh3wzYx7Bu%2BS4uqbzJfMolpzgeKMKkiztU2ZRS69vj99TPDWciWEQKtPk0evTtxwOw%2Bkmg3rclnnfjBvVp&X-Amz-Signature=aa59dcd42f5812fbadb6c8c6a812c713b58bb5e6e4d43f5e4970b8070aa4a0c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

