---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5TULBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGi8ejuOJAgLiunThntS4EH5bP0OBsAu2qfOHYCDU1ySAiACvlJ6nrGyVF3sjcGeQJOj9DoINktBaa7ff5cLmg6uzyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGdLeE1NgvkgafMjFKtwDhrgfkySZ19ezYvdr4iNNLDwdKKlpDp%2FquYKY7%2FoZj2uMlrVH55DWC7TCQU89rBcQWunAzhtsOKCAVjLtbMEIzKaoo%2FGGtwyvjonlJMB37pU0zyttM0BOIOLuVn%2BfEuZhRp5BTvmmHJB8QqGkrvV023HalpCgQgXs9T6IlcB2xfMVvNo6VZ0gO5bQN7Um4ciZyLycG7vg%2BQq8g6zJoo%2FxNLlJrQxw0ze3EZ7uaZ6Y6%2FfgWnQEUWCh0yUptsme1IkCJwOJnKnYwV1dS5i1zygoQ1o9b93C1yrH5X4RezX9tWcvLcUma4wChiVMEX%2FDh6tD83gkBcdrv6Pf1e9OhEfcnKWt9GY%2FoUn6hFFQQcZsP9ujN0rUdu7WFzSNuqGCiY%2BWvWFVO0%2Bn3RTryEBoKPeeuQepYP05fhErS8X9ddIMrwF6Zu6QZJxVxJjyBGVbbSBE2x9MTVYyVO7STE3Cu635fz37uHb8Est9Kw9kSYV682dYDLPv0IzdYlP%2FpBYkxTU7CZBWRj9wXteKzZkN4QOX%2BzyCufrc2GR%2BNdEH3dHyC6aZFebJaty4CekLMn%2FoDcPGbWgHKdntiIaWd5lcRZPF4CM2Qk135nm%2FWcikkrWM57XDFEosSQLvUK2XLY0wlfHLyQY6pgFrrBwPR9OyetsDzUqqlPwp6bMbVKcXtxnT12UyA5coU%2F13%2BmCr8cBit0xvjXolXCGLlgDS0jEDouKQMfp0NNa1ljW5Yf3Ab3LGZKbyBkcVMZH3pweQeD7i%2FjrMgKx6UGKgQAK4EjEqXwNxlJ%2B2A1t69evBf%2Fj4rr3Z2UDrgFd1AyfkNQunkbhIuLvNLyDJ%2F2vzg%2F8ieUgffNHasxIYMlWivm5816Q5&X-Amz-Signature=e1e40b1f179201f721506de4fb57e3047b39d7485a85fb396b7238ba5b74802c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5TULBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGi8ejuOJAgLiunThntS4EH5bP0OBsAu2qfOHYCDU1ySAiACvlJ6nrGyVF3sjcGeQJOj9DoINktBaa7ff5cLmg6uzyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGdLeE1NgvkgafMjFKtwDhrgfkySZ19ezYvdr4iNNLDwdKKlpDp%2FquYKY7%2FoZj2uMlrVH55DWC7TCQU89rBcQWunAzhtsOKCAVjLtbMEIzKaoo%2FGGtwyvjonlJMB37pU0zyttM0BOIOLuVn%2BfEuZhRp5BTvmmHJB8QqGkrvV023HalpCgQgXs9T6IlcB2xfMVvNo6VZ0gO5bQN7Um4ciZyLycG7vg%2BQq8g6zJoo%2FxNLlJrQxw0ze3EZ7uaZ6Y6%2FfgWnQEUWCh0yUptsme1IkCJwOJnKnYwV1dS5i1zygoQ1o9b93C1yrH5X4RezX9tWcvLcUma4wChiVMEX%2FDh6tD83gkBcdrv6Pf1e9OhEfcnKWt9GY%2FoUn6hFFQQcZsP9ujN0rUdu7WFzSNuqGCiY%2BWvWFVO0%2Bn3RTryEBoKPeeuQepYP05fhErS8X9ddIMrwF6Zu6QZJxVxJjyBGVbbSBE2x9MTVYyVO7STE3Cu635fz37uHb8Est9Kw9kSYV682dYDLPv0IzdYlP%2FpBYkxTU7CZBWRj9wXteKzZkN4QOX%2BzyCufrc2GR%2BNdEH3dHyC6aZFebJaty4CekLMn%2FoDcPGbWgHKdntiIaWd5lcRZPF4CM2Qk135nm%2FWcikkrWM57XDFEosSQLvUK2XLY0wlfHLyQY6pgFrrBwPR9OyetsDzUqqlPwp6bMbVKcXtxnT12UyA5coU%2F13%2BmCr8cBit0xvjXolXCGLlgDS0jEDouKQMfp0NNa1ljW5Yf3Ab3LGZKbyBkcVMZH3pweQeD7i%2FjrMgKx6UGKgQAK4EjEqXwNxlJ%2B2A1t69evBf%2Fj4rr3Z2UDrgFd1AyfkNQunkbhIuLvNLyDJ%2F2vzg%2F8ieUgffNHasxIYMlWivm5816Q5&X-Amz-Signature=28bbee516dac82ad1f793be40712d52405c78cb2d7170706b8b97f55be83da0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

