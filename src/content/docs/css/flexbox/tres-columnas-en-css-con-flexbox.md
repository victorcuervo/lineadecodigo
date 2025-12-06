---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZLGGUO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwV4BCA9E%2B4zyrx8OZRHwteFHduR6jRgJU15RNVsjMpwIhALpGXacFI%2FvFPvk02%2B2DZCmiZsk8TizEDJWOjq4nUcZkKv8DCHUQABoMNjM3NDIzMTgzODA1IgyHeTiI5Zu%2FqFa9duYq3ANmoZdn2J%2FIeRRjEygyefu9B%2FjHIR%2BUCt4OzL9J14YVNvwcDb8T1W%2BNVoPmyP%2B77UetD92hNSZtl%2F1YwQNNJhYvNPKBcwuBHKz4UDwgkpjAiZu9SbcwccLUfoitttbAk1o4sCEf%2BPZpdYjbkM31hmwqUKC403cPFONYVb6WqOstmw3%2FQ%2FtUcl2QjS3OYr8mmWsdsIE8wuoysP8zYugFRcXkxOm8AgCegSALsfP5vqyjnK4nf7Szqo13TpszO2LtW07c1tUrK7cK8iWaOX430CxH8MzTMIaB0Kd%2BUBaeZZgLqG17YEYz2Gc0f6cJ0NQg2Y9xR3mRgwqKi%2FMR%2FspVdJ59%2FUPHTpM0fRS%2FWrS99KtbBV1hDK96b0mzst6X03Lg4w2AVuiOK3YmbVxppHsKPcbBPp0U8D5IjXxU5zroaJcWJHj2vE9yzbZuWnfmwOII6PlBJ1Fzz2%2FvlmYzNCQKc4iGrILD9VQiZnC3cZqPZPCds%2BnTnmfbxOgrPTrj%2F4A5nQtGmXEcGQ%2Bt5N3Vk1Yzm0Ev4NbxrE42GSSrSABO%2BBu6tHqmIJSn6vMwH84Fu%2FAgG4zr9ncbUFzMK6v%2F9kLjwMOCwps4mWKnPQwmEQiGcVlUjIYSOhjxdEldkWK%2BfTCoptDJBjqkAeIp8on2Q3CB86%2FBtikOJKjqIyXGj9Q%2BlG0bTTMGyvK1qzvTV4H%2BD4RvGOGAq38jjsParSbavufE62PN%2F7lQ1xz4qdnMaFeFb6FWj6yuZEdFhIo0teRrRHQW%2BhdedhHhtYX6iHVCvF1k973UUfljikD2sRkbKZAGRaamWMn9bWE4m4pnX83Cow4nQX1jp4tn6xOGs8gFDXbkVsU7jCR%2BCTQNYqAC&X-Amz-Signature=331d76b7a416c31aacc86815c5e0bda7a79e7d1b8a358ce46f0237ce33ad5d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZLGGUO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwV4BCA9E%2B4zyrx8OZRHwteFHduR6jRgJU15RNVsjMpwIhALpGXacFI%2FvFPvk02%2B2DZCmiZsk8TizEDJWOjq4nUcZkKv8DCHUQABoMNjM3NDIzMTgzODA1IgyHeTiI5Zu%2FqFa9duYq3ANmoZdn2J%2FIeRRjEygyefu9B%2FjHIR%2BUCt4OzL9J14YVNvwcDb8T1W%2BNVoPmyP%2B77UetD92hNSZtl%2F1YwQNNJhYvNPKBcwuBHKz4UDwgkpjAiZu9SbcwccLUfoitttbAk1o4sCEf%2BPZpdYjbkM31hmwqUKC403cPFONYVb6WqOstmw3%2FQ%2FtUcl2QjS3OYr8mmWsdsIE8wuoysP8zYugFRcXkxOm8AgCegSALsfP5vqyjnK4nf7Szqo13TpszO2LtW07c1tUrK7cK8iWaOX430CxH8MzTMIaB0Kd%2BUBaeZZgLqG17YEYz2Gc0f6cJ0NQg2Y9xR3mRgwqKi%2FMR%2FspVdJ59%2FUPHTpM0fRS%2FWrS99KtbBV1hDK96b0mzst6X03Lg4w2AVuiOK3YmbVxppHsKPcbBPp0U8D5IjXxU5zroaJcWJHj2vE9yzbZuWnfmwOII6PlBJ1Fzz2%2FvlmYzNCQKc4iGrILD9VQiZnC3cZqPZPCds%2BnTnmfbxOgrPTrj%2F4A5nQtGmXEcGQ%2Bt5N3Vk1Yzm0Ev4NbxrE42GSSrSABO%2BBu6tHqmIJSn6vMwH84Fu%2FAgG4zr9ncbUFzMK6v%2F9kLjwMOCwps4mWKnPQwmEQiGcVlUjIYSOhjxdEldkWK%2BfTCoptDJBjqkAeIp8on2Q3CB86%2FBtikOJKjqIyXGj9Q%2BlG0bTTMGyvK1qzvTV4H%2BD4RvGOGAq38jjsParSbavufE62PN%2F7lQ1xz4qdnMaFeFb6FWj6yuZEdFhIo0teRrRHQW%2BhdedhHhtYX6iHVCvF1k973UUfljikD2sRkbKZAGRaamWMn9bWE4m4pnX83Cow4nQX1jp4tn6xOGs8gFDXbkVsU7jCR%2BCTQNYqAC&X-Amz-Signature=e07daf278912949509435e3856cbfbd8b6d78e16c6b4e024bfb2e5291b41193e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

