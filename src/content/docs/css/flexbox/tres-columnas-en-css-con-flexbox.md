---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HERBB7G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuPHyGHM6Sh83o7iCkSZSokP6iPCb%2FyGNnn%2BzMFaEbUgIhALxAUPRXCv78MkNanACmHugWQyv14jTXlBiE9XJiT16WKv8DCE8QABoMNjM3NDIzMTgzODA1IgyKxE8s3o078c6WJSgq3AMMGmH%2FkS%2FT1YYv7x9000e%2FIyfUsOMvTut38L%2F3th%2BYbYaKSCtCfgCEfqag0vNEAJUHq%2BCF9DTXfAOa1q5i0fpfm9QYufAoIpfYUi6YW%2FRYZ74wAw1HaY4Sr57cTS0zZBgnn2jVUBlj5eRTkO3fEnI01YiMQtOsQzZd4JA4ID9ncxkZ2vr07HNm9Wla0p59ifMDmhsJ3H%2FeOdPxak5bL7BIgZhQC354EhNLaRTDDFtO8upXCffgoduEsDTMcJd8Ad5DOuICJdP0lwPcoeXYxPM7UFlbGgBLe0tiX2n5G8dbLK5SEOBqUYCEbIrY0KLpl2XP9Nh3%2FR7nqgKvytH0JCRJbDO0Lw7qMcE7RKQ0TODtpBP0IimPHGg8moot62HBBvk3AL7b7%2BgqB6IwQXChlxXfYdRQt0bpqqQZon6cXsjYzrYHdzQn46LwL2xw6eiPeqyyEjSLYHHjwTeiIGjL7mpiwuw1DE1Q4Rm0602yChTVGdI4iBWvhAUyBKTjcTp2Cyyk6rktyUynRTW8HMUFkHZ4c6nwdKGde9x4gozK5wuRRgySOtbSeT76eSei097xiGH4N%2FZsbvgxqh41j%2B8fUSd5MFW1%2BvC%2B9lKXUBb2cEYkOiL9iNkIbNq0lS1sFzCLjMjJBjqkAbtml%2B5ewP497BvVmMFNjPqCjfHBrbmNxGH05ArBWwUhViReq6V2EhkX0jO96OseJE5ii2ozk7Jo%2FfUcsDsn9arnsIW2unRnAmMWOno%2BJWlh9wvSp2tJihDUp2L11DkO1v5y%2Fvf75eLeqPLomL%2BHnRgMjsVWzBCac7snrUiZMmntxPeEwS4K1TwoaRw0PNrq4WUduNO93cXlagoLn6uW4lB%2B507R&X-Amz-Signature=3a3f2adebd7c2d27ba41d6619dcec7d1feb8d83024e57e183b94494ad0450845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HERBB7G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuPHyGHM6Sh83o7iCkSZSokP6iPCb%2FyGNnn%2BzMFaEbUgIhALxAUPRXCv78MkNanACmHugWQyv14jTXlBiE9XJiT16WKv8DCE8QABoMNjM3NDIzMTgzODA1IgyKxE8s3o078c6WJSgq3AMMGmH%2FkS%2FT1YYv7x9000e%2FIyfUsOMvTut38L%2F3th%2BYbYaKSCtCfgCEfqag0vNEAJUHq%2BCF9DTXfAOa1q5i0fpfm9QYufAoIpfYUi6YW%2FRYZ74wAw1HaY4Sr57cTS0zZBgnn2jVUBlj5eRTkO3fEnI01YiMQtOsQzZd4JA4ID9ncxkZ2vr07HNm9Wla0p59ifMDmhsJ3H%2FeOdPxak5bL7BIgZhQC354EhNLaRTDDFtO8upXCffgoduEsDTMcJd8Ad5DOuICJdP0lwPcoeXYxPM7UFlbGgBLe0tiX2n5G8dbLK5SEOBqUYCEbIrY0KLpl2XP9Nh3%2FR7nqgKvytH0JCRJbDO0Lw7qMcE7RKQ0TODtpBP0IimPHGg8moot62HBBvk3AL7b7%2BgqB6IwQXChlxXfYdRQt0bpqqQZon6cXsjYzrYHdzQn46LwL2xw6eiPeqyyEjSLYHHjwTeiIGjL7mpiwuw1DE1Q4Rm0602yChTVGdI4iBWvhAUyBKTjcTp2Cyyk6rktyUynRTW8HMUFkHZ4c6nwdKGde9x4gozK5wuRRgySOtbSeT76eSei097xiGH4N%2FZsbvgxqh41j%2B8fUSd5MFW1%2BvC%2B9lKXUBb2cEYkOiL9iNkIbNq0lS1sFzCLjMjJBjqkAbtml%2B5ewP497BvVmMFNjPqCjfHBrbmNxGH05ArBWwUhViReq6V2EhkX0jO96OseJE5ii2ozk7Jo%2FfUcsDsn9arnsIW2unRnAmMWOno%2BJWlh9wvSp2tJihDUp2L11DkO1v5y%2Fvf75eLeqPLomL%2BHnRgMjsVWzBCac7snrUiZMmntxPeEwS4K1TwoaRw0PNrq4WUduNO93cXlagoLn6uW4lB%2B507R&X-Amz-Signature=f44f86d4f081a34d37d62ea51be3fe099f02b0d90bf4573c6e8d22ad2d9429f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

