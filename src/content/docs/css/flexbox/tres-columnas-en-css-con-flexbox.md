---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUZEIOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDmi3dRrP%2FSQHRP%2BCcngjxI9Ad4LOn3cNU7vtUQWnReAiAMWTD%2F765UPqgyv%2BRz5uZvHrwKxCQzGm6VVXf3acCfgCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfQUSqSB%2F9KqRD%2BYSKtwDTEXOeGU5bG8IOCRWUe3pwDjXPkXzSFGRP%2FfJpSVpUgJt3IpzO%2BPlHBbYbRrlWOccT%2BefP3jOgiVlgCHLj1Ljoj89ispzgwPHicR3B8C2kD7XDMv9wZph7%2FeahlScB5xlqw586OjaUXAfvMPlzry9ChWYCvzhcLvYGytso1exxlXh7UsQFBBIxPs6UXKGE7oEY5rQnMZsJQz9ivEdrog1gb00YRjY5MkpIiPbVh12Cvjx5il749ACmqBkrVdp6YmXFXmARBP3gum3nF3vW9uJMelA2qdi1YObz3Xj96MyPT8KRf0vqfBBzinWYjs8DYqQtyoukCirmIXXFU7Fj0CLLs8JKiI2b9g2R%2BfWLeQ2G8eOxNyYMlDaXCxRwnzhuIjsNswlPgJhpWSC5jVdmQvX8HosN0I9pU0PvQvAnD9IVsEyyZEu8k9fzTPkZm9xpwX61G%2Fvv6sr5MWilR0yaACIqfK7H0RfYjMaYvdk%2BYvQ9ctkQOXy4HCJGRQG11PWEBUlYu3681juSgHN4cixr2vPpC5q2fYc6bA96VJQROG1Nnx9GNreBry6Lw%2BE8dVCTKRC6wMnPKY6WeUHExAGkZaGjUAoA7KoF9Lx5hi8xxd5WN2XTAxkQ6ginvrw3q0wzKbQyQY6pgGztphNMjJlfyyC27A9XptJyv8IsEX0vwwk4GI9bfALcbL6saU4kDFGqhx0c4NZTW8u7DYT%2F%2FReJ9Jws726lqElJqYUO2Bo7XdwMprgsACqfrPyKfVqiYswLWex8TYD0gtzGuOmOfQdG4TXkdyOwgRJ2%2FxNfehinfaDF1DstGYzwj%2BwxvcJP7ND4aF12oobi%2Fs%2BEd9ZjUjFShPy%2BkNUomZN7XYfbX5e&X-Amz-Signature=78647502684cfcebde5fede63655c14ec0e7ae32e4283ed695419e72d2688244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUZEIOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDmi3dRrP%2FSQHRP%2BCcngjxI9Ad4LOn3cNU7vtUQWnReAiAMWTD%2F765UPqgyv%2BRz5uZvHrwKxCQzGm6VVXf3acCfgCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfQUSqSB%2F9KqRD%2BYSKtwDTEXOeGU5bG8IOCRWUe3pwDjXPkXzSFGRP%2FfJpSVpUgJt3IpzO%2BPlHBbYbRrlWOccT%2BefP3jOgiVlgCHLj1Ljoj89ispzgwPHicR3B8C2kD7XDMv9wZph7%2FeahlScB5xlqw586OjaUXAfvMPlzry9ChWYCvzhcLvYGytso1exxlXh7UsQFBBIxPs6UXKGE7oEY5rQnMZsJQz9ivEdrog1gb00YRjY5MkpIiPbVh12Cvjx5il749ACmqBkrVdp6YmXFXmARBP3gum3nF3vW9uJMelA2qdi1YObz3Xj96MyPT8KRf0vqfBBzinWYjs8DYqQtyoukCirmIXXFU7Fj0CLLs8JKiI2b9g2R%2BfWLeQ2G8eOxNyYMlDaXCxRwnzhuIjsNswlPgJhpWSC5jVdmQvX8HosN0I9pU0PvQvAnD9IVsEyyZEu8k9fzTPkZm9xpwX61G%2Fvv6sr5MWilR0yaACIqfK7H0RfYjMaYvdk%2BYvQ9ctkQOXy4HCJGRQG11PWEBUlYu3681juSgHN4cixr2vPpC5q2fYc6bA96VJQROG1Nnx9GNreBry6Lw%2BE8dVCTKRC6wMnPKY6WeUHExAGkZaGjUAoA7KoF9Lx5hi8xxd5WN2XTAxkQ6ginvrw3q0wzKbQyQY6pgGztphNMjJlfyyC27A9XptJyv8IsEX0vwwk4GI9bfALcbL6saU4kDFGqhx0c4NZTW8u7DYT%2F%2FReJ9Jws726lqElJqYUO2Bo7XdwMprgsACqfrPyKfVqiYswLWex8TYD0gtzGuOmOfQdG4TXkdyOwgRJ2%2FxNfehinfaDF1DstGYzwj%2BwxvcJP7ND4aF12oobi%2Fs%2BEd9ZjUjFShPy%2BkNUomZN7XYfbX5e&X-Amz-Signature=4206671fee43360d035dd30f55ee825c643e3148c8f6a4aeef826fd0dd18f257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

