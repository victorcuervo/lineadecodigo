---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA62HBAF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDB57ZOndqvQODOBj1EID27%2Bay71hDYc0ct7%2FBfxwL81AIhAOgCMLWiSz5kHPl8A%2F3aZxJVZaSq88B27f9AI7PGwI5pKv8DCCoQABoMNjM3NDIzMTgzODA1IgxtPF7WMvqJ8euqXJIq3ANId0b%2F3tPsPObcRe7HFpQ4WCU9%2FfsssLzZDK%2BFwYfCvpdbh7O6orLY91H9Vg3ESaAwhylmkMeH10Y%2B91z8q2n9hWr7952DawFuVBTVYIH43xjObRxxwA9ncFeTJPq%2FbuLF61nwUngP%2FKm%2F2sM4ijc79SOXADt3j%2Fz55ikqWPTL3DzpzVXyVdGvRUsnHhArojqZ039Hf%2BptaxlN%2Fgp2Q283cznKc4MQRZdIIplQAA64o6oo0sEye0OVMQPz%2FRXmcGbqjMPdTHLZzvHppG3hajhAQq1IY6usL%2FOjhAAmlDcJ1JYCKwv%2BSNkaTeHr9UOswHiBr%2F4Y%2BIY7wQ3T0F8BotR9DQAtp4uHcYOPK6nVyGwXhvUczxi6rvYrP69HtHeeBG%2FmlNiky5aLxjNSvxce04FUNbmI8ezRhXXpvm0ZrRmnw99XmzLPl%2B3%2FHO1NMdceiJZxhBkvwwmcWVQMAp5B3t%2BnwR6WXW3ZjaO%2BT6FBdD7b2Qy1uzRYx%2BLhIg2rBnYlEaOVR5Ha7U6sv%2FRbRuJ%2FuJqMrVIAN9O%2Fj%2BCVKHisz0TE0bg5CBzW%2B8feJuHsvii29HNvczDmm9V7DF8%2FeXdQdlcHyOdP8vRpZUq7zCI19CNFeWrqNjQ0Slqp7h99kzDj9r%2FJBjqkAedyqdXShlV7tfITNgTMOgg6YQJ63T%2FVdAl4NFp7O3q0vkIAJZInc13dxY6%2BmZWB2osKORzPIzw3ZMKInGwQV6GHtD7GpUZ4l7FQc%2Fm5R6sjTUVNvE3PkAHOJ1oSlHDcyzW8lYx4bVIW7JfwDJN7KnC609WqvsWTsVh%2BoWUIhV6CrHpKcWEFNoGpo%2Fvo8KnBPTomWAApJPP9WP1MaYP1rNaQuSvv&X-Amz-Signature=a652068d881f1d39682ab750bf17f51a06610fd3030a56ad8748b671c8c9e468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA62HBAF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDB57ZOndqvQODOBj1EID27%2Bay71hDYc0ct7%2FBfxwL81AIhAOgCMLWiSz5kHPl8A%2F3aZxJVZaSq88B27f9AI7PGwI5pKv8DCCoQABoMNjM3NDIzMTgzODA1IgxtPF7WMvqJ8euqXJIq3ANId0b%2F3tPsPObcRe7HFpQ4WCU9%2FfsssLzZDK%2BFwYfCvpdbh7O6orLY91H9Vg3ESaAwhylmkMeH10Y%2B91z8q2n9hWr7952DawFuVBTVYIH43xjObRxxwA9ncFeTJPq%2FbuLF61nwUngP%2FKm%2F2sM4ijc79SOXADt3j%2Fz55ikqWPTL3DzpzVXyVdGvRUsnHhArojqZ039Hf%2BptaxlN%2Fgp2Q283cznKc4MQRZdIIplQAA64o6oo0sEye0OVMQPz%2FRXmcGbqjMPdTHLZzvHppG3hajhAQq1IY6usL%2FOjhAAmlDcJ1JYCKwv%2BSNkaTeHr9UOswHiBr%2F4Y%2BIY7wQ3T0F8BotR9DQAtp4uHcYOPK6nVyGwXhvUczxi6rvYrP69HtHeeBG%2FmlNiky5aLxjNSvxce04FUNbmI8ezRhXXpvm0ZrRmnw99XmzLPl%2B3%2FHO1NMdceiJZxhBkvwwmcWVQMAp5B3t%2BnwR6WXW3ZjaO%2BT6FBdD7b2Qy1uzRYx%2BLhIg2rBnYlEaOVR5Ha7U6sv%2FRbRuJ%2FuJqMrVIAN9O%2Fj%2BCVKHisz0TE0bg5CBzW%2B8feJuHsvii29HNvczDmm9V7DF8%2FeXdQdlcHyOdP8vRpZUq7zCI19CNFeWrqNjQ0Slqp7h99kzDj9r%2FJBjqkAedyqdXShlV7tfITNgTMOgg6YQJ63T%2FVdAl4NFp7O3q0vkIAJZInc13dxY6%2BmZWB2osKORzPIzw3ZMKInGwQV6GHtD7GpUZ4l7FQc%2Fm5R6sjTUVNvE3PkAHOJ1oSlHDcyzW8lYx4bVIW7JfwDJN7KnC609WqvsWTsVh%2BoWUIhV6CrHpKcWEFNoGpo%2Fvo8KnBPTomWAApJPP9WP1MaYP1rNaQuSvv&X-Amz-Signature=02e24f68c3de85259a7220c9a331e999c6597ec8d1ba3acb34c1bad8ae9a2080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

