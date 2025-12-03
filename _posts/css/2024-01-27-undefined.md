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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OGCGLAR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDi1Pk9%2BvcPoI%2BwhRxe9lqohyiY4Ym2PYzf1PhkRiGvaQIgSU95BM3OHLCaybbuRUQtY5oCI8ESeuXmHUjmpAjs32Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGPiHHYZKm7ecdI1aSrcA1x%2B4mw2o%2FTBZ%2BZdVx2OqkzXZNyhDFBWFaNrE25Qa%2FcMuIfZNi01OXWnR9RHh6mhJ1lO3mWs5hh%2Fr5fXHyQQkj3kyiTb6MgQYGQn7kh8mYKY7q0EMBMSWbKJS5BpZBzDJLvUs9S2MAMqPzmUyviUXnW1xv7GX%2B%2Fzd55M1t6zaGYKFqJuMMabYr9hFlwaD%2FiXhh3ZiLz3vomk7MmnVPlZJA5GCWCSG111sfOgO76an8DTbq%2BU7wL7EdLe2B39RTpZtyh2CwOVwoYUNbqpcwNmAJL8OeltDL0bFCbbqsc6Ogz3jlMwYmap6N1TFD2Iu2VtMCywe%2FcY2QyvOx384OXoqNbxNbQlovDPltrkY%2BcjQ9EdQYQtE7u%2F%2FdNKbj1WpZzU2QWp%2FdmV2wnprVkXIxo1IzN1Uvtn4Bhekmi14zUYcJ9%2FpjVMFNqliS%2BkTRGmmDDCSO90Y%2B9t7YBVOadbD8FIfSVXTGxKrE2GD%2FiZYYx6OSmHIN7qUOfkID1pMNaVfvhKAM0%2FM6HNUkWEYFwMK9tesbHTkybbbZ%2B%2FLX3U%2FVWUi5PF9eDCEo7riEVJ9dQ81g8jiL%2FD7Dy659n9MwsLtFGfvUGJdXffn8Ggit%2FyX48Wv1ExaoqGC5JNIh7aR2FdMPbawckGOqUBUkIZcIR%2FovMjtB5i1AmlO5h0zE5kEIHty13UD0Iwm4g12X5Bl4hW9qw%2FvpkTn0M8SqTwlwVoWImmN8nEmjZuifKHPZwkMtacfc7HJNFOgVn7X2RB7OIlBAEGJC9KsqQ3qRk1q519%2BuiH6%2FDtBAlr1KciSxjsgA1hyTd%2BEUwxZ2mC8uGSxNEKYkRLMJ1%2BHUvsvi9um%2F5f%2FARO%2FKTJxG8EjHG9y7Aw&X-Amz-Signature=1915aac605dcad600e45cc4650eecb5f2f103ef2b6e6a702bf75589f42e51f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OGCGLAR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDi1Pk9%2BvcPoI%2BwhRxe9lqohyiY4Ym2PYzf1PhkRiGvaQIgSU95BM3OHLCaybbuRUQtY5oCI8ESeuXmHUjmpAjs32Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGPiHHYZKm7ecdI1aSrcA1x%2B4mw2o%2FTBZ%2BZdVx2OqkzXZNyhDFBWFaNrE25Qa%2FcMuIfZNi01OXWnR9RHh6mhJ1lO3mWs5hh%2Fr5fXHyQQkj3kyiTb6MgQYGQn7kh8mYKY7q0EMBMSWbKJS5BpZBzDJLvUs9S2MAMqPzmUyviUXnW1xv7GX%2B%2Fzd55M1t6zaGYKFqJuMMabYr9hFlwaD%2FiXhh3ZiLz3vomk7MmnVPlZJA5GCWCSG111sfOgO76an8DTbq%2BU7wL7EdLe2B39RTpZtyh2CwOVwoYUNbqpcwNmAJL8OeltDL0bFCbbqsc6Ogz3jlMwYmap6N1TFD2Iu2VtMCywe%2FcY2QyvOx384OXoqNbxNbQlovDPltrkY%2BcjQ9EdQYQtE7u%2F%2FdNKbj1WpZzU2QWp%2FdmV2wnprVkXIxo1IzN1Uvtn4Bhekmi14zUYcJ9%2FpjVMFNqliS%2BkTRGmmDDCSO90Y%2B9t7YBVOadbD8FIfSVXTGxKrE2GD%2FiZYYx6OSmHIN7qUOfkID1pMNaVfvhKAM0%2FM6HNUkWEYFwMK9tesbHTkybbbZ%2B%2FLX3U%2FVWUi5PF9eDCEo7riEVJ9dQ81g8jiL%2FD7Dy659n9MwsLtFGfvUGJdXffn8Ggit%2FyX48Wv1ExaoqGC5JNIh7aR2FdMPbawckGOqUBUkIZcIR%2FovMjtB5i1AmlO5h0zE5kEIHty13UD0Iwm4g12X5Bl4hW9qw%2FvpkTn0M8SqTwlwVoWImmN8nEmjZuifKHPZwkMtacfc7HJNFOgVn7X2RB7OIlBAEGJC9KsqQ3qRk1q519%2BuiH6%2FDtBAlr1KciSxjsgA1hyTd%2BEUwxZ2mC8uGSxNEKYkRLMJ1%2BHUvsvi9um%2F5f%2FARO%2FKTJxG8EjHG9y7Aw&X-Amz-Signature=d4d69c2c12640e789b9fb6410e03f0992998c29634763b78665838977a177729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

