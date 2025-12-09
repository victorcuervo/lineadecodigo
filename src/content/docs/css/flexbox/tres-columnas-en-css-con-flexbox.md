---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWU4BMF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVrqvFTXABsqK9dIe4QbeTo%2Bd1RE%2Bze5XdQVWhLQOjkAiA%2FeiuNXR2MuBS%2BNh%2FDMq0XuKIs3ey7nsxOO74tYF3LlCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxoVsg8J0cOxdPscKtwDqVxGcEzVzvl%2F%2FIj8z476Mv3ePkDJqhJXKTxECtc56E4HWfaFa0Qh4ohQqheng5y%2BA3F6ZJDhOl7JjAz1Tyby2GH6IBFG4VNKg1FW%2B4sDcnxZGWyHPqWayD%2FQbYxJE1%2B2qBrAvGgSvvZYYA8dEHKbDAgp6Z8TPamFjGdstEumstQWJS3Oz9K0LKN7ioZrJliXdQbrd0dD7Z38RhbktBWENZiCLeoKl8yFK9nGUnnLZNhBTnLS6IjY7vbcEwRjTJb40LnlPA%2BhQ9R9aiR5xTGL4HQL%2B3RRtx1A5V9JwgNm9QvYVwCZS4e1q6dHDYNG03qtWxjKzU2%2Fzje3xNsiY7lmpb8cvwprfgEDw9sLR5I5U1ImBcu4XXexTHEF1tkUFMMX%2BClYPBFDRCvuqJXy1lVYfnVFg0mGVUql405r0r3iS800PKG6sqliDFk05ZsSsjLV5R6M4Ku5De4R4HVSXMcg%2FbKcB4xIJt53BxXaZYOdKDzK9ZFFD0gULZdpn9XJwn2i8e4a18T%2FNxcjyIQr2nUtRI%2BG4ajnQjIenbu3E7pUSYgxchHfXuHr7QFRjV5vxjSgyf0pZeuponyLS0r3fX6Yezld5hj6Xhke%2BQsGi2OuJONzafK9YwBO1bKPsaEw%2FI7eyQY6pgE7%2FhBJsGPrTVNa%2F4yAHx3jACwGe%2F5HYs4W%2FMDdJS61qj%2F8zrvkf215MXDnhDocfy9fML1izo7AKdakJ%2FwGdf2SBsGoj%2Bhp4TlLsRJabAgq8BgELNLD%2BhCRxmBZebSRg4p0gBhXwrrq6K28u%2FSnblJSCn8L8oTw8RAhXCv0Mn7pCz7F%2FkcabLKXtZwcFD58mbLpnrfxSXfZqSVk%2FvcbZwg1SbKrc7ko&X-Amz-Signature=af4cf43b56ebf8cda90dfc9fd7c44da69ea9fc1c48724ccf36aba917765f61d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWU4BMF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVrqvFTXABsqK9dIe4QbeTo%2Bd1RE%2Bze5XdQVWhLQOjkAiA%2FeiuNXR2MuBS%2BNh%2FDMq0XuKIs3ey7nsxOO74tYF3LlCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxoVsg8J0cOxdPscKtwDqVxGcEzVzvl%2F%2FIj8z476Mv3ePkDJqhJXKTxECtc56E4HWfaFa0Qh4ohQqheng5y%2BA3F6ZJDhOl7JjAz1Tyby2GH6IBFG4VNKg1FW%2B4sDcnxZGWyHPqWayD%2FQbYxJE1%2B2qBrAvGgSvvZYYA8dEHKbDAgp6Z8TPamFjGdstEumstQWJS3Oz9K0LKN7ioZrJliXdQbrd0dD7Z38RhbktBWENZiCLeoKl8yFK9nGUnnLZNhBTnLS6IjY7vbcEwRjTJb40LnlPA%2BhQ9R9aiR5xTGL4HQL%2B3RRtx1A5V9JwgNm9QvYVwCZS4e1q6dHDYNG03qtWxjKzU2%2Fzje3xNsiY7lmpb8cvwprfgEDw9sLR5I5U1ImBcu4XXexTHEF1tkUFMMX%2BClYPBFDRCvuqJXy1lVYfnVFg0mGVUql405r0r3iS800PKG6sqliDFk05ZsSsjLV5R6M4Ku5De4R4HVSXMcg%2FbKcB4xIJt53BxXaZYOdKDzK9ZFFD0gULZdpn9XJwn2i8e4a18T%2FNxcjyIQr2nUtRI%2BG4ajnQjIenbu3E7pUSYgxchHfXuHr7QFRjV5vxjSgyf0pZeuponyLS0r3fX6Yezld5hj6Xhke%2BQsGi2OuJONzafK9YwBO1bKPsaEw%2FI7eyQY6pgE7%2FhBJsGPrTVNa%2F4yAHx3jACwGe%2F5HYs4W%2FMDdJS61qj%2F8zrvkf215MXDnhDocfy9fML1izo7AKdakJ%2FwGdf2SBsGoj%2Bhp4TlLsRJabAgq8BgELNLD%2BhCRxmBZebSRg4p0gBhXwrrq6K28u%2FSnblJSCn8L8oTw8RAhXCv0Mn7pCz7F%2FkcabLKXtZwcFD58mbLpnrfxSXfZqSVk%2FvcbZwg1SbKrc7ko&X-Amz-Signature=4fa5d5799a9a7779b21f08692e54f26f65eda4e7f40accd040ed41a0965aaf13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

