---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7LSVUSE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6ZB7UCOFqisa5p5tY0UNYJrJrxmViEu1lp8Y8w9tZIgIgXbM8%2F%2BLbJJPNkfzC%2BwKxcW8KBooSe2%2B%2BHZOtqWpMJnsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgVzk27NlBPsKAGECrcA3kSEDcTxb1NuZ%2B9EMKmbcntvi4PvgL1MtHJqdRhQQU3o4iC6iLbgphzI8McrwYWOiZr7zbqU%2BK0HUN3pYt4ggcpqe1kp8%2B8MQjzODhObgrzGzXK1pDuna%2FKeBNixNY5butLcylOH7h8Jvwbu0fh3DQVTU5fKUHeYCg30nbdna3wOzScGiSdbrDL6JWGt1SCJUAi1cA0RV5yXMT4b0FvzuoduRHXDhOkNltxqffrPIS1pIbt2UkRkMiI5Js79Q2K1t8Aly0Ohhh5%2FNU%2Bi2oF330Cti5nLvn9Ld5O%2FwnCEdBs4UoGkSJ6I4upLYGCrRaabKA7j6MX0xchzQSLJu1%2FJSGQKLTcoJSHxgKW3fgKIJmJJ4zUsnyhJryUhDTzTAYc2B0l5DCRAdXbLeVvMv6ncTk%2BW%2B6H4zbsJSgRWD447cLM4bLuGuGlKf7tG2Y8ijhe%2BFs%2FE4u4VWypbAeox701BsU7%2FLS%2Fy5DwIm%2BpMJvubuS7KzS81urUJ1VhyrcQSsmYo3LV7Ey2s01qmJqo4%2FeX0NxnSkEW2Xjnx7tYjsqjlC95lQMgzvuXX6Ih1%2B539WL9mvITQsHw3gjKWhzpSJrnSxll7WQ7dAUBQmIG3r69sx%2BPCBlsX19UN%2BBTbYY0MIOk38kGOqUBdHDFrLBvdzjEcbbBQH6Uy5LvqjsUgZ%2BMpvAJG4jjIJDm9foixP8MFAqN%2FNPyjyv8ajGqaww3oDoaBIsD3F7gsnDNjZW23q2n9TCRyh%2BPD5N%2FLY8cF1x2Q2tOsuMnQAXgAO2LQitmlE5uKmcC4tYv9MX41VuTxFqUeEmlsHYA8AUMNIF65bbOzoyubUkGHzJrvU1Sch5E%2BgWS24MpgVRWVo5fduvl&X-Amz-Signature=4a405ebbc355a60592774a0bdf7f13d78763d9fab8f7263942df7e448a3a1ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7LSVUSE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6ZB7UCOFqisa5p5tY0UNYJrJrxmViEu1lp8Y8w9tZIgIgXbM8%2F%2BLbJJPNkfzC%2BwKxcW8KBooSe2%2B%2BHZOtqWpMJnsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgVzk27NlBPsKAGECrcA3kSEDcTxb1NuZ%2B9EMKmbcntvi4PvgL1MtHJqdRhQQU3o4iC6iLbgphzI8McrwYWOiZr7zbqU%2BK0HUN3pYt4ggcpqe1kp8%2B8MQjzODhObgrzGzXK1pDuna%2FKeBNixNY5butLcylOH7h8Jvwbu0fh3DQVTU5fKUHeYCg30nbdna3wOzScGiSdbrDL6JWGt1SCJUAi1cA0RV5yXMT4b0FvzuoduRHXDhOkNltxqffrPIS1pIbt2UkRkMiI5Js79Q2K1t8Aly0Ohhh5%2FNU%2Bi2oF330Cti5nLvn9Ld5O%2FwnCEdBs4UoGkSJ6I4upLYGCrRaabKA7j6MX0xchzQSLJu1%2FJSGQKLTcoJSHxgKW3fgKIJmJJ4zUsnyhJryUhDTzTAYc2B0l5DCRAdXbLeVvMv6ncTk%2BW%2B6H4zbsJSgRWD447cLM4bLuGuGlKf7tG2Y8ijhe%2BFs%2FE4u4VWypbAeox701BsU7%2FLS%2Fy5DwIm%2BpMJvubuS7KzS81urUJ1VhyrcQSsmYo3LV7Ey2s01qmJqo4%2FeX0NxnSkEW2Xjnx7tYjsqjlC95lQMgzvuXX6Ih1%2B539WL9mvITQsHw3gjKWhzpSJrnSxll7WQ7dAUBQmIG3r69sx%2BPCBlsX19UN%2BBTbYY0MIOk38kGOqUBdHDFrLBvdzjEcbbBQH6Uy5LvqjsUgZ%2BMpvAJG4jjIJDm9foixP8MFAqN%2FNPyjyv8ajGqaww3oDoaBIsD3F7gsnDNjZW23q2n9TCRyh%2BPD5N%2FLY8cF1x2Q2tOsuMnQAXgAO2LQitmlE5uKmcC4tYv9MX41VuTxFqUeEmlsHYA8AUMNIF65bbOzoyubUkGHzJrvU1Sch5E%2BgWS24MpgVRWVo5fduvl&X-Amz-Signature=c7f7d2983db0dcf965c34c3f9f6beb04bc1a927a37aa27ff4bab429b145ccc49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

