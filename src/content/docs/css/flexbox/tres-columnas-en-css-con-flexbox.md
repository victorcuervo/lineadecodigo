---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCOBJPU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCgjgHz98%2B1JrlXrIHRkwxhfbGuG26t%2BLUxpuna05y%2B5QIgRVuR9gkNmwNA7huADsB5M0up3Xv8JSdOysgMpZarvRQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNkQyDP96Azln%2Bat4ircA9GuXaypM6RIKoIrnt6kuMzjvY6UtqXxC4dHNQSKLdi5F519FZmN8zKFrYawOFrjG%2BUTzZ2jZt06mrNWmgHkuJyHGva974srXeIh3MRwp8GZPht3liZeApaUxkrx8KHJZogdVtRl0hQgCTbuxy3TirqPawhVsy4TzvnXK3er6tCZ5dBTTVih3L9VuFgpYep3L0iWe0GdY2wC9UU1fjhSOW8Eait3xhQZGUPapsPN6I6joOeO5Y6JyTmjYxLIZupRI%2Bm6%2Bvr4eLiDKZZeSAwIL5HyMVvjZD6hSD4lctXwY5KDSEfFsSKeK4w0CsXECOdS4SP%2BPj5z%2FKlVkq5Ti8T9VMnFHpCn1pCjbqWWGxMRci4vbGa9XwAze47uPa6hhpLmLPl0fU8b6N7bSho8MK9cx7dwP%2B9cLvHnjOuFj1r%2FHq2MCK5ym%2FR1sHys8hTpB3atijIJsGvLA2ASn4v3YhFF3pIxUJ5UGzsaiXrVCxg8wmLL9hWR4IzsaLBXo5ezNThGdv%2BLMjg7cw2cnz4F0s2upc3Li0NXAUHz6%2FH51p7ecmOAS7QxnbUuq%2Bz3SAAhPtkLv1ooy%2FNc2cHDBojCZhdRDAJCEHFUBO7FWEOJwI1D%2F9iWk8%2Bj5EqZR4JK3dAhMNT3wskGOqUBlPDXYY6mZ1ORHawJn2Gpy1B8RH8MZXjnZSKL1RrgSkBI90NPQluHMepT8kxX8Vp81VLrPQjLzrRb3AbQUPFUpJbsPkqPdHeJLToz93rXiMpNXGWOAg0y%2FxSKpkqCpyixkTNlQw1o5WRNWpD6Ysn7wQxkSdBtMg5%2FuwBjrBfU%2FfIeshiwzZY2cXvF3yshViNUV1mUz%2BHaoQ25bS%2BQCWvYCEPBtatP&X-Amz-Signature=ce04740f1fb27cc84416f002667c27239625b8d1e882cd9f48a09946a9a434d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCOBJPU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCgjgHz98%2B1JrlXrIHRkwxhfbGuG26t%2BLUxpuna05y%2B5QIgRVuR9gkNmwNA7huADsB5M0up3Xv8JSdOysgMpZarvRQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNkQyDP96Azln%2Bat4ircA9GuXaypM6RIKoIrnt6kuMzjvY6UtqXxC4dHNQSKLdi5F519FZmN8zKFrYawOFrjG%2BUTzZ2jZt06mrNWmgHkuJyHGva974srXeIh3MRwp8GZPht3liZeApaUxkrx8KHJZogdVtRl0hQgCTbuxy3TirqPawhVsy4TzvnXK3er6tCZ5dBTTVih3L9VuFgpYep3L0iWe0GdY2wC9UU1fjhSOW8Eait3xhQZGUPapsPN6I6joOeO5Y6JyTmjYxLIZupRI%2Bm6%2Bvr4eLiDKZZeSAwIL5HyMVvjZD6hSD4lctXwY5KDSEfFsSKeK4w0CsXECOdS4SP%2BPj5z%2FKlVkq5Ti8T9VMnFHpCn1pCjbqWWGxMRci4vbGa9XwAze47uPa6hhpLmLPl0fU8b6N7bSho8MK9cx7dwP%2B9cLvHnjOuFj1r%2FHq2MCK5ym%2FR1sHys8hTpB3atijIJsGvLA2ASn4v3YhFF3pIxUJ5UGzsaiXrVCxg8wmLL9hWR4IzsaLBXo5ezNThGdv%2BLMjg7cw2cnz4F0s2upc3Li0NXAUHz6%2FH51p7ecmOAS7QxnbUuq%2Bz3SAAhPtkLv1ooy%2FNc2cHDBojCZhdRDAJCEHFUBO7FWEOJwI1D%2F9iWk8%2Bj5EqZR4JK3dAhMNT3wskGOqUBlPDXYY6mZ1ORHawJn2Gpy1B8RH8MZXjnZSKL1RrgSkBI90NPQluHMepT8kxX8Vp81VLrPQjLzrRb3AbQUPFUpJbsPkqPdHeJLToz93rXiMpNXGWOAg0y%2FxSKpkqCpyixkTNlQw1o5WRNWpD6Ysn7wQxkSdBtMg5%2FuwBjrBfU%2FfIeshiwzZY2cXvF3yshViNUV1mUz%2BHaoQ25bS%2BQCWvYCEPBtatP&X-Amz-Signature=f2b8acf4d7fb8d1b583157725074120546075c5f5231dee4ea035cd6b01f33cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

