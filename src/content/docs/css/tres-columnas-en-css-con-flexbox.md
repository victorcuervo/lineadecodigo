---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7DSHVUX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIB8m%2Bs5bo49qEbyhiyGJxijOJI3YdGj2aas6sPXFs78QAiEAvU1ik1HENenl7RyyBBInsQAGPGpKPhy3L8MNuqEOYTwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKhUd6jofwkHXj2Y4SrcAxZAC3%2FooE7AbPG1xSr3fy2ZlWEtLLxH12%2BhE5DpfdOEG87E7ZkdA4X%2FZDNdB7gMTtjghJb2kfRMeznRzDgdd7vKI2bgvP%2FGDEWObfq%2FzO0fdcPfmnyBmN1dMPXAL9IsETc8qX8pj5VUoqk%2B%2BQq5kpdbhkGHNAZG7JItG6tQ%2BSDP7H%2F4CSMnEDabqgrI7KpE%2Bnic87Z2WmCNhCb870I3tE3WzTjhzixqw0o6UljE6n39jvGgI8ferN12NtRQMqvMSVAtEOfw5QZN609fUt6XePgAeNZARPxvpsl6LZ7%2FLMfzwlTk4%2FwLz0ghak8QOHyvC7HQGbj0GN5W89GmhG4h6TgEScVB6Ep%2FbaaQf%2FqU4y4YxW2vK8QrmtVqDQD83NsW%2FXUUjL0xruUH4GwAy%2BDEDXJA36Q%2B1TKyCiENYCZ741UKq1BCUjYgMXkoMOyTPT8C2SsFrwXJ0UmD5lwhlkeOHKvi3EobskXtzP4KzC6d8mKlT0m8UYEQka3UlEOtJXgXeAPZaSKwVgytxM0KY4ALagfAwugmBbMx%2FJ93d2J5NtJjqqK4GJzGnlE%2BW%2BpdUPKTKJIjc4PAUR0BJ%2B82Q2UuwUIle6upRcYfdFDbnBFofS8D6CYB4Tqh4HSF5pk3MLa9wskGOqUBE3%2BYzR%2BuYd%2BdFeNvovACc9nlaBezqXwcRysZzFC5ekTOiak5FUM1QgswYIe32vLX%2F%2Bd550fMdX1f5OyIv7yf7dY8oykB7UHTSjIGKl3AbBjwHEv6QjOuuUbSgb3BGntcV9w9uc7A9pQKBVubpzYNoiofJVxRQZy36pgb37XdP500LBA%2FXfWnstpKgyb5iDzSAxC5okbmJcELC0YAFyW%2BJmuQ6U22&X-Amz-Signature=c622fc168a5cb477e38252197e5c18a4a1692792bf8a8566fd646fca2f8d55b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7DSHVUX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIB8m%2Bs5bo49qEbyhiyGJxijOJI3YdGj2aas6sPXFs78QAiEAvU1ik1HENenl7RyyBBInsQAGPGpKPhy3L8MNuqEOYTwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKhUd6jofwkHXj2Y4SrcAxZAC3%2FooE7AbPG1xSr3fy2ZlWEtLLxH12%2BhE5DpfdOEG87E7ZkdA4X%2FZDNdB7gMTtjghJb2kfRMeznRzDgdd7vKI2bgvP%2FGDEWObfq%2FzO0fdcPfmnyBmN1dMPXAL9IsETc8qX8pj5VUoqk%2B%2BQq5kpdbhkGHNAZG7JItG6tQ%2BSDP7H%2F4CSMnEDabqgrI7KpE%2Bnic87Z2WmCNhCb870I3tE3WzTjhzixqw0o6UljE6n39jvGgI8ferN12NtRQMqvMSVAtEOfw5QZN609fUt6XePgAeNZARPxvpsl6LZ7%2FLMfzwlTk4%2FwLz0ghak8QOHyvC7HQGbj0GN5W89GmhG4h6TgEScVB6Ep%2FbaaQf%2FqU4y4YxW2vK8QrmtVqDQD83NsW%2FXUUjL0xruUH4GwAy%2BDEDXJA36Q%2B1TKyCiENYCZ741UKq1BCUjYgMXkoMOyTPT8C2SsFrwXJ0UmD5lwhlkeOHKvi3EobskXtzP4KzC6d8mKlT0m8UYEQka3UlEOtJXgXeAPZaSKwVgytxM0KY4ALagfAwugmBbMx%2FJ93d2J5NtJjqqK4GJzGnlE%2BW%2BpdUPKTKJIjc4PAUR0BJ%2B82Q2UuwUIle6upRcYfdFDbnBFofS8D6CYB4Tqh4HSF5pk3MLa9wskGOqUBE3%2BYzR%2BuYd%2BdFeNvovACc9nlaBezqXwcRysZzFC5ekTOiak5FUM1QgswYIe32vLX%2F%2Bd550fMdX1f5OyIv7yf7dY8oykB7UHTSjIGKl3AbBjwHEv6QjOuuUbSgb3BGntcV9w9uc7A9pQKBVubpzYNoiofJVxRQZy36pgb37XdP500LBA%2FXfWnstpKgyb5iDzSAxC5okbmJcELC0YAFyW%2BJmuQ6U22&X-Amz-Signature=8dc8a9dac4aa2919714c3c4848abea3618421fe750eab0541bacea2d42a72e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

