---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVCMJR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEOZrhGp378ustuSCA94kNt4gcy%2B7VcAJJRH8J8hsHtZAiBTSf6LNbKoKgPd39XbcvLUQ%2BLOEeDrrARpFD%2BU%2B1ggbSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhPZe4R669W%2Fo62FNKtwDRCJGA7QE0G3n%2BaZdyNwYNFuy39oFrQwM3VXebmCotqZiofEBRNs5k5yBU9i%2BQ5Og%2FaCdQ5SPv4Z7EQ9CwRFRuH9lU67LdGyqhQA%2BIE55xTa082cv7v3eAdcTrAWtsuhv%2FT0A1SGCzDtu7n7S2%2FW7uaZQbpbL%2FUN8qfkFnilLPEneVyKttMHN4TV9gVver710ruSe1ZomPgJgX3SIpfZD6bjeDM0LvEafl6SbGaUYn%2BcyESZSm9ooTZKM0FTG9oCJL6m%2Fpds9BKlf%2F3PbkNJEwJWGJYz0N%2BcUqeGUSox9F7RTzAcwgTnvlbWE0gBAVVN0tE6zYV1qEj3KGbR1LIadafl5ymtzm%2FKXfyLu%2Fk7z6cj0qTqB4Sq5WwfCyr1fFykCubBPp0UKKDwoe6AxTja5nu5AjBXMRTXh65jdThBYUSPL%2F6XfHhknRfzOyJfkUnS9xxwhdIN090CoNbuDJsiI0HfR%2F41QNh6raIju83PPdV0Mg3VwL5LN9oquoTvBE0rG8njL0In9RitemHkxpH32MF%2BLKt%2B6yCTCJDKWRbOyvK%2FI6bvmLAaCiTg7cDjJLWR4cL7Da0tC%2B58dSJ33uYCexTl%2F5PGPWizShaGIP1MkQPgcnx2NmwQ0UlkvZ5Uwl4bFyQY6pgGWCVowAfmQ0uCwevaofkQjrmjfcaEvXLaMEqg3uQhELSqZ%2FeNWWkW48evEYkS5zYbNr%2B3TZ1B%2BQrI8cxZMmAIULwAcXlomd0Ww04QFhTIH%2FIgN4N%2B4e3etCJvS1D8%2Bxl2ana4fjOYYCb66JV0wwyW4xU3inhyK%2B3gZ%2Ffkq5EwirSwWGvSN%2BIsZjr%2Fpguhrnr0kvxDwiC5kjl5oTmAhUb9JmDKK%2FtdR&X-Amz-Signature=99849cb48b99567260f183747dc9270eace46f5c085e97dd4e29a92733b01107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVCMJR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEOZrhGp378ustuSCA94kNt4gcy%2B7VcAJJRH8J8hsHtZAiBTSf6LNbKoKgPd39XbcvLUQ%2BLOEeDrrARpFD%2BU%2B1ggbSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhPZe4R669W%2Fo62FNKtwDRCJGA7QE0G3n%2BaZdyNwYNFuy39oFrQwM3VXebmCotqZiofEBRNs5k5yBU9i%2BQ5Og%2FaCdQ5SPv4Z7EQ9CwRFRuH9lU67LdGyqhQA%2BIE55xTa082cv7v3eAdcTrAWtsuhv%2FT0A1SGCzDtu7n7S2%2FW7uaZQbpbL%2FUN8qfkFnilLPEneVyKttMHN4TV9gVver710ruSe1ZomPgJgX3SIpfZD6bjeDM0LvEafl6SbGaUYn%2BcyESZSm9ooTZKM0FTG9oCJL6m%2Fpds9BKlf%2F3PbkNJEwJWGJYz0N%2BcUqeGUSox9F7RTzAcwgTnvlbWE0gBAVVN0tE6zYV1qEj3KGbR1LIadafl5ymtzm%2FKXfyLu%2Fk7z6cj0qTqB4Sq5WwfCyr1fFykCubBPp0UKKDwoe6AxTja5nu5AjBXMRTXh65jdThBYUSPL%2F6XfHhknRfzOyJfkUnS9xxwhdIN090CoNbuDJsiI0HfR%2F41QNh6raIju83PPdV0Mg3VwL5LN9oquoTvBE0rG8njL0In9RitemHkxpH32MF%2BLKt%2B6yCTCJDKWRbOyvK%2FI6bvmLAaCiTg7cDjJLWR4cL7Da0tC%2B58dSJ33uYCexTl%2F5PGPWizShaGIP1MkQPgcnx2NmwQ0UlkvZ5Uwl4bFyQY6pgGWCVowAfmQ0uCwevaofkQjrmjfcaEvXLaMEqg3uQhELSqZ%2FeNWWkW48evEYkS5zYbNr%2B3TZ1B%2BQrI8cxZMmAIULwAcXlomd0Ww04QFhTIH%2FIgN4N%2B4e3etCJvS1D8%2Bxl2ana4fjOYYCb66JV0wwyW4xU3inhyK%2B3gZ%2Ffkq5EwirSwWGvSN%2BIsZjr%2Fpguhrnr0kvxDwiC5kjl5oTmAhUb9JmDKK%2FtdR&X-Amz-Signature=de99a28d74758b8a0b7844219317e0bd63be83e62ce447f667f8a7d95d23dafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

