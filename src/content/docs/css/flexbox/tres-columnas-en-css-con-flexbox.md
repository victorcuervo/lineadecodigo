---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQAVUR4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlz4qAkLTRECg4zSz9vM5rNMlyqZg4uVJ9To4WjNbbsgIgHJ%2BV4rzXxUqcmOIHql%2BtCFlrBfXLf%2BjmNaOZ%2Fwo7XmwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFnv8AwWvWS%2BH1pjircA%2FVJiiwxJc0PcibskQPTgnGbFu7kf37QfaFZGZJnxP%2BPbMw2chU1FdDtD42acNy%2Bqbdm2110bxwQY3GeW1Ivieza3DN7Yj0Sftf%2F4CKDm0FLVIxG8%2BtN%2B4rz%2B2qnIha9RoahG8fxLQCZJaYQH3kpIyr2kyX8Ni2gzuQNFfoVPon5VcNWR54xMjL3KjJBZbc%2F1IhM9If4rWU2nFee%2FSV2HtLBFVT0ISPwQRKVKHAkRPNaWE8ZFy%2B%2BCCPATdpf7Qgdsk1WrZo%2FOqABu0c3Gg22WIgP5pnqNE7aczgzzat6ASqiHg02tMNhDBIbYmORCBjMFNDv8ZL0c3OdTuFR7W2Vn8iYbBOcpvdWGq6GjVun9tRg1Pn36HSgMK91oUUc9wHfPubBZTMwKKadzdkMASTtkPkU7Sh9qF4AbkYuP9Bo5wEXGjie%2BAWPenYYUDA4OHUA%2F8bHEpLJGCSBiVIJTTEVK5v622zktd9Mbphzu0VsZ6DiVIg%2Bwl47icadOlF163czFvpzTCLFiCmYlfq8HZ9GUGHxhn4f3WBrkSPqbtNGGX2YdcyfLrarEdCFu0Sr94rF2BvjnW4IchehTbqn36%2B5leN1PLFn4EYnRzROXC0wWGqLmuAy00I%2Bvum0c5ipMPbt2ckGOqUBm%2B0p3EzBtgHTDULTh4bA9n0MFKfviuBHHU%2FHIPuDAvdgAGvhtrXTA29VwZ91qmwMQ5hp1XZCVPkFb9%2B2FkRYSqS29yTVXJjK15lw6ecupO5NYAA6K3Is7vf3SXc4YcSpRRU9u2LaRBQ%2B3XKJ5wYB4HQGzjqdwWN5m9xVZfyWQiVM%2FDJQtKOjKD7dgJ8OwDdoSA2I%2Fl%2BTtjbppaw2Vbju4JelWVDm&X-Amz-Signature=ef15b8a99d75d5dd074b8adec05a5919dd6b0de4af2b748c5f41150a86ffd9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQAVUR4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlz4qAkLTRECg4zSz9vM5rNMlyqZg4uVJ9To4WjNbbsgIgHJ%2BV4rzXxUqcmOIHql%2BtCFlrBfXLf%2BjmNaOZ%2Fwo7XmwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFnv8AwWvWS%2BH1pjircA%2FVJiiwxJc0PcibskQPTgnGbFu7kf37QfaFZGZJnxP%2BPbMw2chU1FdDtD42acNy%2Bqbdm2110bxwQY3GeW1Ivieza3DN7Yj0Sftf%2F4CKDm0FLVIxG8%2BtN%2B4rz%2B2qnIha9RoahG8fxLQCZJaYQH3kpIyr2kyX8Ni2gzuQNFfoVPon5VcNWR54xMjL3KjJBZbc%2F1IhM9If4rWU2nFee%2FSV2HtLBFVT0ISPwQRKVKHAkRPNaWE8ZFy%2B%2BCCPATdpf7Qgdsk1WrZo%2FOqABu0c3Gg22WIgP5pnqNE7aczgzzat6ASqiHg02tMNhDBIbYmORCBjMFNDv8ZL0c3OdTuFR7W2Vn8iYbBOcpvdWGq6GjVun9tRg1Pn36HSgMK91oUUc9wHfPubBZTMwKKadzdkMASTtkPkU7Sh9qF4AbkYuP9Bo5wEXGjie%2BAWPenYYUDA4OHUA%2F8bHEpLJGCSBiVIJTTEVK5v622zktd9Mbphzu0VsZ6DiVIg%2Bwl47icadOlF163czFvpzTCLFiCmYlfq8HZ9GUGHxhn4f3WBrkSPqbtNGGX2YdcyfLrarEdCFu0Sr94rF2BvjnW4IchehTbqn36%2B5leN1PLFn4EYnRzROXC0wWGqLmuAy00I%2Bvum0c5ipMPbt2ckGOqUBm%2B0p3EzBtgHTDULTh4bA9n0MFKfviuBHHU%2FHIPuDAvdgAGvhtrXTA29VwZ91qmwMQ5hp1XZCVPkFb9%2B2FkRYSqS29yTVXJjK15lw6ecupO5NYAA6K3Is7vf3SXc4YcSpRRU9u2LaRBQ%2B3XKJ5wYB4HQGzjqdwWN5m9xVZfyWQiVM%2FDJQtKOjKD7dgJ8OwDdoSA2I%2Fl%2BTtjbppaw2Vbju4JelWVDm&X-Amz-Signature=38a7d93493477f301cae62aa6bec367b6d6af554edafab6611cfc642c8d03c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

