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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNGNEU2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC6IxTjFRV6ih5r%2FRghHhUjwd%2FtHcGv0907%2BalrMfXkKQIhALozeBmJQ03eN%2Bce4mNcV4fy9JNBIdHSV5ekjbNJEaxjKv8DCC4QABoMNjM3NDIzMTgzODA1IgySFGMk7sWHCIEcQTkq3ANeUeHTfbKH4HKN7CP0CrO8PfxwDgsug2m721mIGfZR46j5SnPjxfgyKWtEFeNr1HCB0wPqBlgvidEsUW2RI7HATHXBUHQfGMJqkeki%2F6AIB5gvHjazd6VifEqjM6Z%2FOV0H2VKsXB%2BzCK5XX5FrVC0rPQqchgfS%2B%2BkKVdLPIrOxHaSboGCYqqvHgFzXSEB7GkDvdkk1%2FH3tWRFLb3LZBkq%2F1oSrmS5hTu5WdtjIQiS9Aqg9lvEn4DL2bHgdcK8Rilx2nWGqCXwmPGEYiCcZWas6mqp0ckRAKadAKBdy3Fly05cVhCRORT%2BlwePfho64a5oHaJidfeyiPjny6d9sgBbs%2FYHUNd7mpmlhgt63IGGlIN83R4AwEuQO9O%2Fy7MBCmiQrpOp7CDrDlzcH0%2Bv3ZwmuqynPoijYm4MzdDHTXe%2FmE7MghUtKC1Xj4TVsKrd1yM%2BHK2iRQq5nAIuSZWsEUaf2Kwm3sIqyUVWIlB2yWJQOJXLKPxTLuKaKo%2BGjn5fS284LCkJCSmxHztAZjPjLUVYLGI4sSWscSLZ5Hwgj%2BRGGR%2BvBCuuFyJjEyDTmvYy2C5nqQkLwm5GVurADOCiMt7RCXru%2B%2F3%2FKaz6d7GYuQn4FEqWu542116LwE%2FrjOjDB6cDJBjqkAf2ue5xn5i%2BO17sashiLMTLJIyW0Z3gp7oClsGXE9jKHYzF1Q4pPYhDgtJjx9afTm8Dl2dKrze0IFDP%2BjtsUmnYkAbcrTr14IFbisT8YiPwfDNM8vJr8pyz1CMW9G2ltVgTXego609E4nhs8BbKabWNMjq%2FlYalqeVue8HYlcLXP9cC7rqI0x27hqBvDpTIyH97c6%2B45WJy43VblChveWbTCKqmg&X-Amz-Signature=e7a7e0926170af50b9250e47e4cbc3120d2c174b7a96686c0467953a5b93f99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNGNEU2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC6IxTjFRV6ih5r%2FRghHhUjwd%2FtHcGv0907%2BalrMfXkKQIhALozeBmJQ03eN%2Bce4mNcV4fy9JNBIdHSV5ekjbNJEaxjKv8DCC4QABoMNjM3NDIzMTgzODA1IgySFGMk7sWHCIEcQTkq3ANeUeHTfbKH4HKN7CP0CrO8PfxwDgsug2m721mIGfZR46j5SnPjxfgyKWtEFeNr1HCB0wPqBlgvidEsUW2RI7HATHXBUHQfGMJqkeki%2F6AIB5gvHjazd6VifEqjM6Z%2FOV0H2VKsXB%2BzCK5XX5FrVC0rPQqchgfS%2B%2BkKVdLPIrOxHaSboGCYqqvHgFzXSEB7GkDvdkk1%2FH3tWRFLb3LZBkq%2F1oSrmS5hTu5WdtjIQiS9Aqg9lvEn4DL2bHgdcK8Rilx2nWGqCXwmPGEYiCcZWas6mqp0ckRAKadAKBdy3Fly05cVhCRORT%2BlwePfho64a5oHaJidfeyiPjny6d9sgBbs%2FYHUNd7mpmlhgt63IGGlIN83R4AwEuQO9O%2Fy7MBCmiQrpOp7CDrDlzcH0%2Bv3ZwmuqynPoijYm4MzdDHTXe%2FmE7MghUtKC1Xj4TVsKrd1yM%2BHK2iRQq5nAIuSZWsEUaf2Kwm3sIqyUVWIlB2yWJQOJXLKPxTLuKaKo%2BGjn5fS284LCkJCSmxHztAZjPjLUVYLGI4sSWscSLZ5Hwgj%2BRGGR%2BvBCuuFyJjEyDTmvYy2C5nqQkLwm5GVurADOCiMt7RCXru%2B%2F3%2FKaz6d7GYuQn4FEqWu542116LwE%2FrjOjDB6cDJBjqkAf2ue5xn5i%2BO17sashiLMTLJIyW0Z3gp7oClsGXE9jKHYzF1Q4pPYhDgtJjx9afTm8Dl2dKrze0IFDP%2BjtsUmnYkAbcrTr14IFbisT8YiPwfDNM8vJr8pyz1CMW9G2ltVgTXego609E4nhs8BbKabWNMjq%2FlYalqeVue8HYlcLXP9cC7rqI0x27hqBvDpTIyH97c6%2B45WJy43VblChveWbTCKqmg&X-Amz-Signature=def8ecb8d41a1e550f4384ba13ddc57379a0f3ec1e6cdcdfc52d31fee292067c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

