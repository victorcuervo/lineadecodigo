---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRKCTIO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5eYceJcYksBXCc%2BM5PVtAH8qnmrrRacsLujsTD8nFmwIgW5SNY7%2BftuTovKVxNmzPbZuO2b%2FiEAzJlU9yRgKiOb4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMB6HZQOB6jgPEUKqircA7%2BBygu66h06TW2foJqXhUIhB1FfY5lDH5Y%2FWLLD8QipsaQIhHTqX66shnRvgKVsLflfIJp1RqU6paRAh2l9eqgutHIIIdCIkQobrO8BQ0EVrp%2FygQsWuqW6AOJnQJ79fCRIOb1vRB%2BEeXBEi4jV8tkqN%2BxBT7iauMHJStrcSpqNnFmOfj5%2Fcz5YidnwUyERDGeaJ3J9qr5%2BrJCy9uY1xF0jRvY1ejkAkVVc5jOnLwpcIDk6DqYxXQ%2FRkjy2D8RwH95BnzRa5DNKS%2Fu6VYHBFdL2GeTdsx0BXLjgUZ%2Bu8JQhy84QYRQVceYuqRhwG9xQJwN%2BOeJrhNd29mhzDEJ%2Fhx5lWKm%2FD5UIongkh5HMlfACmeO%2FxGN0pfkMukfD1gLLDZAeMnbX1%2FczS%2Bz%2FlvJOLQAWN6R%2BtkBRncIqd6OkGgcAZGYE1W7jXpm4i%2FCTHxzLxZlyfCj3Wm1LGwDUpD4E7blql5%2ByX2HHTF4EhLa8HlG3nsTPZ3VeZQzyR1dWjmaIfCHmTzHZpwUIGQaoFZVW0cTHn4fbbn4CXDuUugPFo9UTqDoxYri4Tr%2FmR5TAs6LfA2c1gkWrNckl10AyWmbSYJrTcYg7w8FyB2tDwKa25b4nbxt1zockfiLv1FHlMK%2FJ0ckGOqUBgns8CBQ5FTbNJqgVUBYRSofUrYy9G7FSAAfy1vj48tTqPHeRqZ5ZXEZpZQejIZJf1jz%2BgQSvPpTkps27VMCl8X87cQ%2Fr5%2FHTK6vqostPCBQMcXYSQDkoCdPhb23NY1ZBsMH46JcNaR4ohkJ13128Yz1Yv7K4T0S1hz5bts4iYPphVq%2Fs8c4ZeRJfqD9u42xZlU9SLqe3xlOZ8hF7OESx6J%2FB23XO&X-Amz-Signature=ad6ed8e77175630bf2848af1b88d8c30ce67d628196399eef48022af55391e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRKCTIO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5eYceJcYksBXCc%2BM5PVtAH8qnmrrRacsLujsTD8nFmwIgW5SNY7%2BftuTovKVxNmzPbZuO2b%2FiEAzJlU9yRgKiOb4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMB6HZQOB6jgPEUKqircA7%2BBygu66h06TW2foJqXhUIhB1FfY5lDH5Y%2FWLLD8QipsaQIhHTqX66shnRvgKVsLflfIJp1RqU6paRAh2l9eqgutHIIIdCIkQobrO8BQ0EVrp%2FygQsWuqW6AOJnQJ79fCRIOb1vRB%2BEeXBEi4jV8tkqN%2BxBT7iauMHJStrcSpqNnFmOfj5%2Fcz5YidnwUyERDGeaJ3J9qr5%2BrJCy9uY1xF0jRvY1ejkAkVVc5jOnLwpcIDk6DqYxXQ%2FRkjy2D8RwH95BnzRa5DNKS%2Fu6VYHBFdL2GeTdsx0BXLjgUZ%2Bu8JQhy84QYRQVceYuqRhwG9xQJwN%2BOeJrhNd29mhzDEJ%2Fhx5lWKm%2FD5UIongkh5HMlfACmeO%2FxGN0pfkMukfD1gLLDZAeMnbX1%2FczS%2Bz%2FlvJOLQAWN6R%2BtkBRncIqd6OkGgcAZGYE1W7jXpm4i%2FCTHxzLxZlyfCj3Wm1LGwDUpD4E7blql5%2ByX2HHTF4EhLa8HlG3nsTPZ3VeZQzyR1dWjmaIfCHmTzHZpwUIGQaoFZVW0cTHn4fbbn4CXDuUugPFo9UTqDoxYri4Tr%2FmR5TAs6LfA2c1gkWrNckl10AyWmbSYJrTcYg7w8FyB2tDwKa25b4nbxt1zockfiLv1FHlMK%2FJ0ckGOqUBgns8CBQ5FTbNJqgVUBYRSofUrYy9G7FSAAfy1vj48tTqPHeRqZ5ZXEZpZQejIZJf1jz%2BgQSvPpTkps27VMCl8X87cQ%2Fr5%2FHTK6vqostPCBQMcXYSQDkoCdPhb23NY1ZBsMH46JcNaR4ohkJ13128Yz1Yv7K4T0S1hz5bts4iYPphVq%2Fs8c4ZeRJfqD9u42xZlU9SLqe3xlOZ8hF7OESx6J%2FB23XO&X-Amz-Signature=92a11974a9c083f053d2112ab05b5313af8e9e68720644f9ea4994f99d83c7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

