---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULTCD3VI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvmlUWBaR36h0WWgJzrXfW2E9Fj7fkfGZAi1hUXwP1mQIgYX7nqY5G%2FGbPRWD8U%2FA9RVE5GJvdXK1Ro9f6BuwV5BEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7wiNkZDJ1FfBaqZyrcA2AiptRsWELSu0Y%2FftQgwAyw6KQHzcWTmkMXPmPowbXZ4fI0HIbWF119ESDrYrGWt9I7GSeXHsTOtmeLA%2F8JWttgB3sYkBrzNyebTmWGXGJ4%2B3tBZjaW8KR24DGJhrgvm5Mmi3t0KavCAaPhCvGNXuIULYbLlCVf9SQL3pJl%2FyOclotzqVZee8XoMUQlTsvs%2FDDpF9vcpA6pCiILljaBJ0%2FoK%2FBdFrQT%2FUk3iIYHNaJZ0dHmme1CQDH1atNVnsmZRpid%2B9I0OjYGELKV3gP5kkECRSXadbocQeJpqbTXlJXS46BV4vzpSbbkDnFRZwo4YLr6wJ8danoyNJLf0HLifkx%2B%2FQ86Swbhf9iPG8OwQSMrQSRdPRbQN7assmIzTN6xNRLblG1alteZm1ovFy18ML5CZIzHKRAcMoZFaZiIjLDr3DeKGceqB5DICnOnbUi2KOtd34FoxJWvjqpxT4ZuUsmyBh1jRxEkDOKullBz9V7vFKuyVI1igvQNgoIsFaw2yyvwhLCJRt9jkC1TuEA8BQ9F5QwoNf%2BdxedscCxNw1lSWozGQL3iVHUfD3Pk2xd8yYfauJAk4PH%2By1EnyJ8Z%2BAxEeoXuODmKsuVfl8%2FTTE3SowgIgaua3BhLQhIPMNS81skGOqUB3xwrjeeVgaJKA56j6eH7FreYIRfnPhQJn%2FlsmEtxvQlezPyNd9LKQJv1PuBKrSrc7MLo8Czdmt0o7LRq7%2BSy0QF7tn8hN%2BHw%2BI%2Fi6JLqwZSyt4c7Oo49RaqomJktZv4Vq5VW4e7sbGsEKUiV8qOFVTu9dSZ8fL8SmqChiui0rr4A73YZ3ulaM4%2BbxAQpcyI7XqadccNSfo%2Fu3yUpF4OEuiat3tFT&X-Amz-Signature=a21f88a5f6ec80788e5ae731b0ddb23bc532a3134bacd3b5963d1065addb6caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULTCD3VI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvmlUWBaR36h0WWgJzrXfW2E9Fj7fkfGZAi1hUXwP1mQIgYX7nqY5G%2FGbPRWD8U%2FA9RVE5GJvdXK1Ro9f6BuwV5BEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7wiNkZDJ1FfBaqZyrcA2AiptRsWELSu0Y%2FftQgwAyw6KQHzcWTmkMXPmPowbXZ4fI0HIbWF119ESDrYrGWt9I7GSeXHsTOtmeLA%2F8JWttgB3sYkBrzNyebTmWGXGJ4%2B3tBZjaW8KR24DGJhrgvm5Mmi3t0KavCAaPhCvGNXuIULYbLlCVf9SQL3pJl%2FyOclotzqVZee8XoMUQlTsvs%2FDDpF9vcpA6pCiILljaBJ0%2FoK%2FBdFrQT%2FUk3iIYHNaJZ0dHmme1CQDH1atNVnsmZRpid%2B9I0OjYGELKV3gP5kkECRSXadbocQeJpqbTXlJXS46BV4vzpSbbkDnFRZwo4YLr6wJ8danoyNJLf0HLifkx%2B%2FQ86Swbhf9iPG8OwQSMrQSRdPRbQN7assmIzTN6xNRLblG1alteZm1ovFy18ML5CZIzHKRAcMoZFaZiIjLDr3DeKGceqB5DICnOnbUi2KOtd34FoxJWvjqpxT4ZuUsmyBh1jRxEkDOKullBz9V7vFKuyVI1igvQNgoIsFaw2yyvwhLCJRt9jkC1TuEA8BQ9F5QwoNf%2BdxedscCxNw1lSWozGQL3iVHUfD3Pk2xd8yYfauJAk4PH%2By1EnyJ8Z%2BAxEeoXuODmKsuVfl8%2FTTE3SowgIgaua3BhLQhIPMNS81skGOqUB3xwrjeeVgaJKA56j6eH7FreYIRfnPhQJn%2FlsmEtxvQlezPyNd9LKQJv1PuBKrSrc7MLo8Czdmt0o7LRq7%2BSy0QF7tn8hN%2BHw%2BI%2Fi6JLqwZSyt4c7Oo49RaqomJktZv4Vq5VW4e7sbGsEKUiV8qOFVTu9dSZ8fL8SmqChiui0rr4A73YZ3ulaM4%2BbxAQpcyI7XqadccNSfo%2Fu3yUpF4OEuiat3tFT&X-Amz-Signature=53465ea444baee241c6bb51e42c5099aef87dda6f93886775caa55c098720924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

