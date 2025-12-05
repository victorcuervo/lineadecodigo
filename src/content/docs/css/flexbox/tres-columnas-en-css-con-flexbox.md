---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVEJ264%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPl6whnECxUSw3%2BpVQnkHYSvCca9YXm67uYvcaAxc7UAiAmkmtztosrPyzCmQafy%2FXZTvrphA2CjGnxO9FtHTO%2Bmir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNf%2F%2FrVyJngx1PTbHKtwDfvnPQBOBd06CZSS7no%2BJ7d7e7tlVPjxpI693qDC6JWT7%2FWtJU1YrNeYiw7d1xHUthMDYZiC%2FaibxPqSLQDT3kqAEyJPwThhBK8OJaUiBnneFEOcBk6nS4dE5ILcS9iqKW%2B7zI7VI5bl8DS7NjAC3brjvJAaJWendcpVKfLcc6jIQgosTwhbdU%2FqMKjT3c5ezbAO9yOTP7q9q6e8pBnVrY5B6NHdJsfrizujJAoQUA%2BUmabbv4LULHN14XmcSmoLTKmwf3mrAFT4QzGLtCsbQvnqAynrkwGR25Riq0hk87JaVy31it62y8vPJ2e7bWkjrM7SwvuZWsNwV%2Bno0meeGrss2qweBWVGRCeaP6FycIWRKrpis%2B5qqfmLzldxT9hycE%2F7tHnZXtZPYbo5p1GFjSs%2BTRsyDjSZ5NGYDp0v7BlqEeZe32auT9QZHLTGDL7geJzWaI9nmb1YEaxwoDKO3aW4CA1mfcLykDSfcZ%2FLcEnKZr3gtfd7u0wHwjFElQ0t04M96ju1EDH29m7K5PMkQiLmRm8epYY3lpci%2B97v85Yt6VQvlgVPIRUXfMQ0ZfLHpgSu6wrEktuhfi9%2BSXdOOzA09nJPlL%2FidJax6eSyz8CkkN9w3ZhU8NhnOevkwwYzIyQY6pgE9lAtrFo1fAYzROnOdiLFSntbxHQRsTUxSYUS4J2c3UB1wTIvpIPem9sP6WPTiVRoJUyVToPFz7KP65s%2Fol1ET%2F00aq7sAAdMzhE9ESF%2B6pk9STjOO5x96YJ9kS5dTjU7TZi0igQ%2FjzFft%2BsG%2BP8czmPF%2F8UQMBG9qZ8bRXX7VjEvEQpoRRSh5sOM72ChECHewMB4Hv6K4EJjv6lQNNS1f6kgbZO5g&X-Amz-Signature=1524955172165e45968ae7ed99654007b05281633a6d07f926b0718beaf1f1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVEJ264%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPl6whnECxUSw3%2BpVQnkHYSvCca9YXm67uYvcaAxc7UAiAmkmtztosrPyzCmQafy%2FXZTvrphA2CjGnxO9FtHTO%2Bmir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNf%2F%2FrVyJngx1PTbHKtwDfvnPQBOBd06CZSS7no%2BJ7d7e7tlVPjxpI693qDC6JWT7%2FWtJU1YrNeYiw7d1xHUthMDYZiC%2FaibxPqSLQDT3kqAEyJPwThhBK8OJaUiBnneFEOcBk6nS4dE5ILcS9iqKW%2B7zI7VI5bl8DS7NjAC3brjvJAaJWendcpVKfLcc6jIQgosTwhbdU%2FqMKjT3c5ezbAO9yOTP7q9q6e8pBnVrY5B6NHdJsfrizujJAoQUA%2BUmabbv4LULHN14XmcSmoLTKmwf3mrAFT4QzGLtCsbQvnqAynrkwGR25Riq0hk87JaVy31it62y8vPJ2e7bWkjrM7SwvuZWsNwV%2Bno0meeGrss2qweBWVGRCeaP6FycIWRKrpis%2B5qqfmLzldxT9hycE%2F7tHnZXtZPYbo5p1GFjSs%2BTRsyDjSZ5NGYDp0v7BlqEeZe32auT9QZHLTGDL7geJzWaI9nmb1YEaxwoDKO3aW4CA1mfcLykDSfcZ%2FLcEnKZr3gtfd7u0wHwjFElQ0t04M96ju1EDH29m7K5PMkQiLmRm8epYY3lpci%2B97v85Yt6VQvlgVPIRUXfMQ0ZfLHpgSu6wrEktuhfi9%2BSXdOOzA09nJPlL%2FidJax6eSyz8CkkN9w3ZhU8NhnOevkwwYzIyQY6pgE9lAtrFo1fAYzROnOdiLFSntbxHQRsTUxSYUS4J2c3UB1wTIvpIPem9sP6WPTiVRoJUyVToPFz7KP65s%2Fol1ET%2F00aq7sAAdMzhE9ESF%2B6pk9STjOO5x96YJ9kS5dTjU7TZi0igQ%2FjzFft%2BsG%2BP8czmPF%2F8UQMBG9qZ8bRXX7VjEvEQpoRRSh5sOM72ChECHewMB4Hv6K4EJjv6lQNNS1f6kgbZO5g&X-Amz-Signature=f9157292ce189b23c9a857084c1c8c91fa3180f2042fafe64248ef00aba2cc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

