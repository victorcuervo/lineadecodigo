---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSW4IPW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD6XqjrixiD5BiFPFE5oBpcrnvC0lYLoCMPNvVxC1fUrQIhAMItCDif8H2MHqEls4R2yugLJ%2FE27ultwJnZ8XfQnsL7Kv8DCDwQABoMNjM3NDIzMTgzODA1IgwLEF7jTnjrYqVPZTkq3AOYtjsOzIw5ms1yGKfFfWzAmIXQ7fK34YWXnm61GZqJ4j81zsgaHtGZT%2FQXLyAmH60Gct%2FmB%2FodHObk6wI7KsZmmRsENxzHn7QJuytYDCSc98Lp9kMDwaR6tUs2nHXBduEMawn%2BPtiDqBBjEp8cs6vVgfwV1DO8gHVgpkC%2FjOuGrx3mQin6lnzLrvUzHDJ4XKLukrT7qIYxpYfiqQ3EqFKfXZ5OfUzp9G%2F8lf2mrn6FWPb91c3bJsozrHWb%2FpI9hnMqBLsOyxenLuta67YRnIViEHPb5MwZJesSThz00MwneNXlzEyG0TGlcSnGJNro92kXTTX2E3nQDu1qV2MV88%2BltPGpuOG%2Bc277RBSqE%2Bj1dkiE0GCJ5jhNyGqKaf8y6ziX5WiyjEYPrENdKnV08jlyUhvXTlvx1x7O2gDaCQXfk2qTx5P5PI%2Bh7bPWigod7il%2Bd%2BPpFuyzUwZ%2FJ7htTf7RazgKlQw3v8mhAHQaNB6X8U6JXgMdqeiKANTuhbed06B33FJISjQSkLyeCnvTG7VMNNE8E47SLlYC8fie6aKiettooNFtWXpd9RaRubvzvq0ZA1EUiI4nFKgMhCPZRVZFFUMaxkVu2wfuJcLmrJ%2BOZXtKiYXzwGQVCJ3VrzCH88PJBjqkAcv9yRjdqR8plnelBsqHRk9PuEEtF1MqLDq4BCSeiC4Fz6mN%2FyKvgs%2FPD0poWkbpmMCgbwkOWKKYg6%2FxHk5uV82qn4XChztHD3hzAg5qJ%2FKwmUP%2FeyhwqRlGaRVi5iC7ok6ej%2FPXBymcRW48NPx1JkFsgPsGSOapc6LKqskhdtmun8f8YPe2bv9FYEVNLoOtPnn9EOo0yNZ8uCZ8dEFsczZ%2FvaPl&X-Amz-Signature=5557b6165120d38abe1397fe90551d75f2c063f7ef9574acd0560f01691e05e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSW4IPW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD6XqjrixiD5BiFPFE5oBpcrnvC0lYLoCMPNvVxC1fUrQIhAMItCDif8H2MHqEls4R2yugLJ%2FE27ultwJnZ8XfQnsL7Kv8DCDwQABoMNjM3NDIzMTgzODA1IgwLEF7jTnjrYqVPZTkq3AOYtjsOzIw5ms1yGKfFfWzAmIXQ7fK34YWXnm61GZqJ4j81zsgaHtGZT%2FQXLyAmH60Gct%2FmB%2FodHObk6wI7KsZmmRsENxzHn7QJuytYDCSc98Lp9kMDwaR6tUs2nHXBduEMawn%2BPtiDqBBjEp8cs6vVgfwV1DO8gHVgpkC%2FjOuGrx3mQin6lnzLrvUzHDJ4XKLukrT7qIYxpYfiqQ3EqFKfXZ5OfUzp9G%2F8lf2mrn6FWPb91c3bJsozrHWb%2FpI9hnMqBLsOyxenLuta67YRnIViEHPb5MwZJesSThz00MwneNXlzEyG0TGlcSnGJNro92kXTTX2E3nQDu1qV2MV88%2BltPGpuOG%2Bc277RBSqE%2Bj1dkiE0GCJ5jhNyGqKaf8y6ziX5WiyjEYPrENdKnV08jlyUhvXTlvx1x7O2gDaCQXfk2qTx5P5PI%2Bh7bPWigod7il%2Bd%2BPpFuyzUwZ%2FJ7htTf7RazgKlQw3v8mhAHQaNB6X8U6JXgMdqeiKANTuhbed06B33FJISjQSkLyeCnvTG7VMNNE8E47SLlYC8fie6aKiettooNFtWXpd9RaRubvzvq0ZA1EUiI4nFKgMhCPZRVZFFUMaxkVu2wfuJcLmrJ%2BOZXtKiYXzwGQVCJ3VrzCH88PJBjqkAcv9yRjdqR8plnelBsqHRk9PuEEtF1MqLDq4BCSeiC4Fz6mN%2FyKvgs%2FPD0poWkbpmMCgbwkOWKKYg6%2FxHk5uV82qn4XChztHD3hzAg5qJ%2FKwmUP%2FeyhwqRlGaRVi5iC7ok6ej%2FPXBymcRW48NPx1JkFsgPsGSOapc6LKqskhdtmun8f8YPe2bv9FYEVNLoOtPnn9EOo0yNZ8uCZ8dEFsczZ%2FvaPl&X-Amz-Signature=a80798f18eac98f094d596846a505ccb04a48849105d2a87bb32a14f86ae05b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

