---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4M5WN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAE9cKKWwqI22IqHY1K28KfMQ5B4pRq2OGW6ixA0zmbKAiEAlhHlwFUbDbwUUEoDLWwTT1TFpJwfe1b4lio4z5R1zccq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLSmeYTE48KLje8tCircAzyQQBm%2BfYgpx9HtrWwHbkfp3mSwdO%2FJvk0r8ZJW8CWuz8aiVX%2BnLN9KWMCrkRRSwqrZKr08AQOd9jgPGgn8Ks7gD%2BuvZ5F1jvgSjUphC4PFlu2dsYduuWkd9KyOtdWpuRADtFtyTqG5Y7baLbRS8CV7J%2BF6gOYa8yawc3bEgScZe%2BlcR%2BW1GxCG3kg05s4Xska1kT%2Fxl6ho3ChSfHyoWUMkkjSekwE4XEFHHffZVQlzXesWchnHpa%2BqlRiSfEAsUCYOw5qLXFxW4sngi8KurWSeFvmDLgZNNy25%2FDA3jL6LE4OE9SGdrBjhTRoBUfo8hafUByy4e0GPuTfkzEWnd8Sucgpx0SJ12IltxIIML9gEtBOg%2FmqBDwA78BlNbr2VZDzMT3VWpmvq%2FjdaQLrdBs7iHWWgG0e0Kom8fmBUauPbDMh0g6GeYw3epuVZoEs7vIp%2FoU%2BQ5NmVrryQcUiTtFW%2BX1KAQykODjBw1f5Ta6bdjwgFNFpYyW0F2huVzAuoVNTi4bzcK97DykQidMzb4Cu4qIKoihZQiMrPhZefR4bapaiCug7jHAuzRdyspYG7Gb7TtR1U8r2H%2FNIRZm%2B%2BR02yBFqInN8606vnhBAWG0bsEMYthS5oIQ0agM6WMLjcwskGOqUBlvfXOgk1eJuoxzxVrp9jU9M7VBwxMCS536c6Zstqyqv5kQogmsN%2B8Was9HLVXZ7OMyXQ%2BE6tJe8GVu6MxvGYKE8iLMde8ZeW1B8Pl6WlNvkwGYskIjeznBN%2Bj7vnz5yoVGzFQMZgTC%2FGGNlxyEtuW62zV%2BBy8v8nXfW1n3VU8UYbF9ju1GfO9acUiUF2Lnw%2Fibp0g%2BUK5BIRfQeLTTXDXAB7PqXA&X-Amz-Signature=de05ecde1dae7de77fb912d692ac848466d28dec2a42abfccbb2a8d52f06b143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ4M5WN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAE9cKKWwqI22IqHY1K28KfMQ5B4pRq2OGW6ixA0zmbKAiEAlhHlwFUbDbwUUEoDLWwTT1TFpJwfe1b4lio4z5R1zccq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLSmeYTE48KLje8tCircAzyQQBm%2BfYgpx9HtrWwHbkfp3mSwdO%2FJvk0r8ZJW8CWuz8aiVX%2BnLN9KWMCrkRRSwqrZKr08AQOd9jgPGgn8Ks7gD%2BuvZ5F1jvgSjUphC4PFlu2dsYduuWkd9KyOtdWpuRADtFtyTqG5Y7baLbRS8CV7J%2BF6gOYa8yawc3bEgScZe%2BlcR%2BW1GxCG3kg05s4Xska1kT%2Fxl6ho3ChSfHyoWUMkkjSekwE4XEFHHffZVQlzXesWchnHpa%2BqlRiSfEAsUCYOw5qLXFxW4sngi8KurWSeFvmDLgZNNy25%2FDA3jL6LE4OE9SGdrBjhTRoBUfo8hafUByy4e0GPuTfkzEWnd8Sucgpx0SJ12IltxIIML9gEtBOg%2FmqBDwA78BlNbr2VZDzMT3VWpmvq%2FjdaQLrdBs7iHWWgG0e0Kom8fmBUauPbDMh0g6GeYw3epuVZoEs7vIp%2FoU%2BQ5NmVrryQcUiTtFW%2BX1KAQykODjBw1f5Ta6bdjwgFNFpYyW0F2huVzAuoVNTi4bzcK97DykQidMzb4Cu4qIKoihZQiMrPhZefR4bapaiCug7jHAuzRdyspYG7Gb7TtR1U8r2H%2FNIRZm%2B%2BR02yBFqInN8606vnhBAWG0bsEMYthS5oIQ0agM6WMLjcwskGOqUBlvfXOgk1eJuoxzxVrp9jU9M7VBwxMCS536c6Zstqyqv5kQogmsN%2B8Was9HLVXZ7OMyXQ%2BE6tJe8GVu6MxvGYKE8iLMde8ZeW1B8Pl6WlNvkwGYskIjeznBN%2Bj7vnz5yoVGzFQMZgTC%2FGGNlxyEtuW62zV%2BBy8v8nXfW1n3VU8UYbF9ju1GfO9acUiUF2Lnw%2Fibp0g%2BUK5BIRfQeLTTXDXAB7PqXA&X-Amz-Signature=46fab61b29344445bba37e6a3577b8769c62493d62228f56d62ca1d24fe9fa6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

