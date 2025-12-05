---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWC67Y4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9uI1GojsFJMUktWU0fShON2d16Ish19yd%2FgZO41UN4AiEA3Zbbw0NtkDT4gB6VGKqR8wUQ6Iq8Sp0h7gvyYd%2Bgceoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIb4dECid0Efk0EKOircA1bDmUnVeOZe%2BDbiJUJy7XKAIVzoW62CS5UPW3BOAnXCya%2FVR%2Fr0bgrLm%2BLJxfGOK1m1BT%2F2BsJ4RxlUuS6tqB2WuBwBmokQg0QN2Oakh0c8UFyODiSrUH%2FDn7LWJUPu0o1qa5kriJAMaQj3aOAqVfrRIBgPxRCrNoA7sDxauTpvTq4OVmdJzmk%2FxImrH7DLpmp%2BHi2M39W8xgvZp%2BJ4edXBQann%2FidOnrsd4VpQubwTmSQsfceF3512dhlaitxZ8AyIJ%2BsY45XqwGu92A9YqT0LT1AQgblT9Qds%2FrjfUQY9NXR5ROu158jTq6re0HWIZjuJbfoVD0F%2BgY5UHOqiKaYWNqBqi8phgAUxNL6LEAoxs6mesVcvyHmxhuSfRJ41rBYUrUAPLlgI5kMUrZI3Bca%2B141QZ%2BLZqB5RUrm5oAgYMvX4n%2FwXW5DpFcj5j4TFUA6kda%2FZAv0myWeGIJstiFSwru8PIp2sifYUTW9jfOipqz%2BvsZS6KxxpUbaw5b4IoMmD06BOKldXkNLbD4Wab4Ew6mSWg5uCNEoz8SARy2nPy25OgOASs8EzvyHVTkwpMghlhA6D0rdRvIzHXvBZdCSUwf6D0AAUJtAWCZ65fpON5PZUqE343jejzc8FMKrey8kGOqUBwFugu3v2OxoxxGAQ9pp7iV4M3XWIervu1XS5z0FNefJHzCqybZisaZS2whZZYdoVK7uljGuCvnfYpff62fsjM%2FOKJhXLZfYk9XMjqhhHYu4TNGWc7OMkUrBdAgwIjen9Ij8k1RHkKxr7VzfOhgs3U205QvxMiOTlnJ0ix8r%2Bjy8phcF8qegpIByKSjjbpsMP5ehLPJUGXrLowl1WW3Uu726uFL5x&X-Amz-Signature=d32f9771d9cd7c98887db2ea4846a7bd2799dd1e21873c9d3974960bb399399b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWC67Y4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9uI1GojsFJMUktWU0fShON2d16Ish19yd%2FgZO41UN4AiEA3Zbbw0NtkDT4gB6VGKqR8wUQ6Iq8Sp0h7gvyYd%2Bgceoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIb4dECid0Efk0EKOircA1bDmUnVeOZe%2BDbiJUJy7XKAIVzoW62CS5UPW3BOAnXCya%2FVR%2Fr0bgrLm%2BLJxfGOK1m1BT%2F2BsJ4RxlUuS6tqB2WuBwBmokQg0QN2Oakh0c8UFyODiSrUH%2FDn7LWJUPu0o1qa5kriJAMaQj3aOAqVfrRIBgPxRCrNoA7sDxauTpvTq4OVmdJzmk%2FxImrH7DLpmp%2BHi2M39W8xgvZp%2BJ4edXBQann%2FidOnrsd4VpQubwTmSQsfceF3512dhlaitxZ8AyIJ%2BsY45XqwGu92A9YqT0LT1AQgblT9Qds%2FrjfUQY9NXR5ROu158jTq6re0HWIZjuJbfoVD0F%2BgY5UHOqiKaYWNqBqi8phgAUxNL6LEAoxs6mesVcvyHmxhuSfRJ41rBYUrUAPLlgI5kMUrZI3Bca%2B141QZ%2BLZqB5RUrm5oAgYMvX4n%2FwXW5DpFcj5j4TFUA6kda%2FZAv0myWeGIJstiFSwru8PIp2sifYUTW9jfOipqz%2BvsZS6KxxpUbaw5b4IoMmD06BOKldXkNLbD4Wab4Ew6mSWg5uCNEoz8SARy2nPy25OgOASs8EzvyHVTkwpMghlhA6D0rdRvIzHXvBZdCSUwf6D0AAUJtAWCZ65fpON5PZUqE343jejzc8FMKrey8kGOqUBwFugu3v2OxoxxGAQ9pp7iV4M3XWIervu1XS5z0FNefJHzCqybZisaZS2whZZYdoVK7uljGuCvnfYpff62fsjM%2FOKJhXLZfYk9XMjqhhHYu4TNGWc7OMkUrBdAgwIjen9Ij8k1RHkKxr7VzfOhgs3U205QvxMiOTlnJ0ix8r%2Bjy8phcF8qegpIByKSjjbpsMP5ehLPJUGXrLowl1WW3Uu726uFL5x&X-Amz-Signature=a310d966bfcf6b1e3c429dcb53e138ab3feb16adb18edc85633bde3365dcb65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

