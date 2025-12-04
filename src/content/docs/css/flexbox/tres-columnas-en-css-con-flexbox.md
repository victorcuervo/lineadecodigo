---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SYZBYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGs6RuC37lb6Ce%2BO3Q%2Bo%2BihPeS2X1wNgSe0wkLJYQCXwAiEAqQ3rwXG25w3Oaq3pD2xqMU2nMV46cSwYM%2FTq6Dt3Owsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJAsL%2F4iSPIRkxZiSyrcA9z4BO0oNLSy%2FQn%2B3eWYNA2VtXL9dA8u3%2FyHJ0POgMaWLFXpKteyCvljceVwARtF0AoIZ7S14XknwgWXzNyI%2BuEz4fWn8do6KIg5bsKqU9KGpK0OHziq9QMnZqn1SLEG64mTR9byGVwAxFIUrQhAUiPjEbAacFQ8LtDrb%2FO2xwQVecn8AvRqA9iDLLzbmnMHxn1e02XdsYI%2B9M1HjrfNT5KQnw7fO6zW3MALjJDQUSueA3C2FDG%2FSBl36gJMar00Vg0loedUvCrh41Ts9RMT9aEvmJT5Z%2FR0OnfkdIoBBq0W0vqy525iIpfWlcduQGIbWWZML%2FE99mO17btmTCP5bU7iaeyDEXWpC04s%2B5C0WwlO7lAtW80kteF09mgDv69bwFrt26oLJn2sma8lXMagPpccyWw6oaqQBQJmIqn5A0ZEqa7KJVd8zi%2F9flLha%2BcGVqTB%2FlY29Y4rdfLypUTPrlJgcECKDTpG4Yd%2B%2F4Juq2FRzCwkaMvyT9L1rr6q2uweTVI8%2B83t4t9pf9o9T18GiBZCAdWnva9H2JyUcb9chGM6JT7XDdikVuBpfgt45vfKaZYemj72CGUpIkYS3jKHnDNmNSJ3jZQN1rC9UMkrGsRHb4x8PLb1bFVXUAEGMOGExckGOqUBTlUXzx4AI6TDRymowwPVeAeDPSQ2dCR1LY3E1mziI9oC8t89mjiAFdbXxzKBSinWxSJHBw5IzGzt8z1bnTvHekZkf2dwl%2BaBDul2ypMtqUqMjfKLcaqb%2FTzciNmC6H4r2DUtysh4nHw8BklNe3c6d5knB37sZtB1yAUt2H6ybJQgq6s6MUiJLQRfqRnA7VcNGCK31LDni%2Bo7lOEp3Z4oC1UZgwNb&X-Amz-Signature=2c0fa764ee316ea96fa79977293c0c95e44cf53aedcb85380adc3b1f6eca90ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SYZBYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGs6RuC37lb6Ce%2BO3Q%2Bo%2BihPeS2X1wNgSe0wkLJYQCXwAiEAqQ3rwXG25w3Oaq3pD2xqMU2nMV46cSwYM%2FTq6Dt3Owsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJAsL%2F4iSPIRkxZiSyrcA9z4BO0oNLSy%2FQn%2B3eWYNA2VtXL9dA8u3%2FyHJ0POgMaWLFXpKteyCvljceVwARtF0AoIZ7S14XknwgWXzNyI%2BuEz4fWn8do6KIg5bsKqU9KGpK0OHziq9QMnZqn1SLEG64mTR9byGVwAxFIUrQhAUiPjEbAacFQ8LtDrb%2FO2xwQVecn8AvRqA9iDLLzbmnMHxn1e02XdsYI%2B9M1HjrfNT5KQnw7fO6zW3MALjJDQUSueA3C2FDG%2FSBl36gJMar00Vg0loedUvCrh41Ts9RMT9aEvmJT5Z%2FR0OnfkdIoBBq0W0vqy525iIpfWlcduQGIbWWZML%2FE99mO17btmTCP5bU7iaeyDEXWpC04s%2B5C0WwlO7lAtW80kteF09mgDv69bwFrt26oLJn2sma8lXMagPpccyWw6oaqQBQJmIqn5A0ZEqa7KJVd8zi%2F9flLha%2BcGVqTB%2FlY29Y4rdfLypUTPrlJgcECKDTpG4Yd%2B%2F4Juq2FRzCwkaMvyT9L1rr6q2uweTVI8%2B83t4t9pf9o9T18GiBZCAdWnva9H2JyUcb9chGM6JT7XDdikVuBpfgt45vfKaZYemj72CGUpIkYS3jKHnDNmNSJ3jZQN1rC9UMkrGsRHb4x8PLb1bFVXUAEGMOGExckGOqUBTlUXzx4AI6TDRymowwPVeAeDPSQ2dCR1LY3E1mziI9oC8t89mjiAFdbXxzKBSinWxSJHBw5IzGzt8z1bnTvHekZkf2dwl%2BaBDul2ypMtqUqMjfKLcaqb%2FTzciNmC6H4r2DUtysh4nHw8BklNe3c6d5knB37sZtB1yAUt2H6ybJQgq6s6MUiJLQRfqRnA7VcNGCK31LDni%2Bo7lOEp3Z4oC1UZgwNb&X-Amz-Signature=a4741deed8ffcdd14338d1001a40b456046214ab322272f137ad24fb0a8ffd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

