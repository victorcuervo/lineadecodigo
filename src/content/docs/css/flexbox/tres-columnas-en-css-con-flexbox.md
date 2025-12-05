---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6R5PGW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWnNj9OyB7po3ffX5utfIZKfpDZRnXDNyfkrs3zihW7AIgVLpRZLq0mfHCfXKBz9BIjvZzWebDmNaT3eAiQWqFs44q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPu9lwdZf030kM6j0SrcAzVgLYDpScENAHXttE2D4B0isPFOKPwVu8zbz9fubzFDDAcIpjzkGz2DjNOLhvNekiV85cXYWeZbhH9CKPmzJRhaK39PKJFiuF1n4JC1ErWBiBhVX8H7liW5bRBwzO60Xpgrhr5ZTgwbgvICJRNWgKUqNFODT4S1XCj6RWQYc5e04AT5W7UW3jbPVBPYQsjslP083gnWn280ErWH1IM6ks1DaV%2BYwWjNCmoG7IJpWGc5QZGKuhc9ZRhA2zX2mfVyjI32ebO4iGrBFKOkdQZ7hKs40XGdITXoZ8NVlw49ByvSGbJhK4HocFzvQ%2FM2Nhc1MfXtXP3kfbJTshjzLBc3E6lHgKhA4oZlfZdw3fE9A1%2FDpvQEDdcELZa5YLG3Jv7Nz1uOZVZPWa2ZEWzlw8lj5PfF7BPn50vQMR1VNGg4h6ATD1pgRkTjqzi8v%2BLXUCqrFCeLK7gjuMM2aO819gRLWRafCFPQqMNNstfdCquY7EjgXAKum8K%2F1S93RhyS%2BrhZuVUiLwKjpOi1pWZPpHE%2BVh%2FuvJ%2BHaIsHQmPNE4QTdvMzItNzCQgKxQVlxxLN%2B0r1BMjzjNRJdWJnwiXg5yivk8snj7HQvTfjm5saoa%2BNx6CJtkXtTzNiiaKiRhYGMNTWyskGOqUBClmry1FiWwcZA0njQfpEHXOJaFU2eHmeUusisSc80plmQd44rlmcciKW%2FhpC%2Fif%2BfDxskxCht2HktqouSRtSz3Pkm4VKAnLhvwtxo4jYx5%2FOk9pvOhqhcZYyvKUy9Ssb8ORBN0Fld%2BLYpVYmikVWkzC9pevZzdQkc7vFo5pD5kI5pi%2BhzwjPgMR77YFPtQlezJJrJOtHipvhDXud1YPkXlaefBnj&X-Amz-Signature=b1c544b6f210891cec6c26b79ac82f88f074cd37bbdf0a67d4195499a7823afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6R5PGW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWnNj9OyB7po3ffX5utfIZKfpDZRnXDNyfkrs3zihW7AIgVLpRZLq0mfHCfXKBz9BIjvZzWebDmNaT3eAiQWqFs44q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPu9lwdZf030kM6j0SrcAzVgLYDpScENAHXttE2D4B0isPFOKPwVu8zbz9fubzFDDAcIpjzkGz2DjNOLhvNekiV85cXYWeZbhH9CKPmzJRhaK39PKJFiuF1n4JC1ErWBiBhVX8H7liW5bRBwzO60Xpgrhr5ZTgwbgvICJRNWgKUqNFODT4S1XCj6RWQYc5e04AT5W7UW3jbPVBPYQsjslP083gnWn280ErWH1IM6ks1DaV%2BYwWjNCmoG7IJpWGc5QZGKuhc9ZRhA2zX2mfVyjI32ebO4iGrBFKOkdQZ7hKs40XGdITXoZ8NVlw49ByvSGbJhK4HocFzvQ%2FM2Nhc1MfXtXP3kfbJTshjzLBc3E6lHgKhA4oZlfZdw3fE9A1%2FDpvQEDdcELZa5YLG3Jv7Nz1uOZVZPWa2ZEWzlw8lj5PfF7BPn50vQMR1VNGg4h6ATD1pgRkTjqzi8v%2BLXUCqrFCeLK7gjuMM2aO819gRLWRafCFPQqMNNstfdCquY7EjgXAKum8K%2F1S93RhyS%2BrhZuVUiLwKjpOi1pWZPpHE%2BVh%2FuvJ%2BHaIsHQmPNE4QTdvMzItNzCQgKxQVlxxLN%2B0r1BMjzjNRJdWJnwiXg5yivk8snj7HQvTfjm5saoa%2BNx6CJtkXtTzNiiaKiRhYGMNTWyskGOqUBClmry1FiWwcZA0njQfpEHXOJaFU2eHmeUusisSc80plmQd44rlmcciKW%2FhpC%2Fif%2BfDxskxCht2HktqouSRtSz3Pkm4VKAnLhvwtxo4jYx5%2FOk9pvOhqhcZYyvKUy9Ssb8ORBN0Fld%2BLYpVYmikVWkzC9pevZzdQkc7vFo5pD5kI5pi%2BhzwjPgMR77YFPtQlezJJrJOtHipvhDXud1YPkXlaefBnj&X-Amz-Signature=4024eec35f5f99ae886ff2f52421d47daa7a5fad8b37e80135c57356f2c2cc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

