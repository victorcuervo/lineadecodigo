---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDGICGR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwgji%2BX9%2Bat9%2Bp9hswLZacuz7bWvxk%2BZ7wAtaKY8McxAiEAva8e3Azm%2FbHcKlpVtYgbuWWjZeEu2Bd37Gt0eFCyADYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWRsDy1HTVZKOz3HSrcA1b9R0Q5WWag5amq3oKFLwTg%2Bpn186AJAKWKbidnH8MkB%2FfnJ%2Ffi%2F0%2FXt5XOJQLW6sKum%2B9rfe96f%2Beslrw2qSCMNaJ6LMcpM4ysQsiN3nDP4%2FeBlUpbmXTBgdMey2nayOke1KQd70YUOjgrMuFqFpxK3JxJLOBi6RCUcgr233n%2BjAwQyRo%2BbeCbHUa2fGBR%2Fy2yzBIpaqruaUTh36IjdouA4ZgiffWazgNWSZgf1NnxagVEX2F1LXcZJpT7y%2ByhU8Fu06z5pmRtS9rcuNiKrQx1RXURnLPino8jALzg7GSsFHH0iPlqi%2BR2BqrvQcUKtBmbwuHWFAHendoTf2ImTzxjkYorwwR0d6G55FuDRj1VyXd4nhu8tiZahk0oJoEF6iaj1gZc0o4wJmjB1n5oo97ZsjgGGkj1sQ%2FWhENA5zqZsLok8PYsKiwW4NxoXyEFzBz52V4f3%2BC5xn3XQA1Ej5vQS30NBu1raZnB%2FUqU6jDpklxKQhUg0oBW%2FWTybCFjVHHH76KWILgksmBFwrcOtmlQbpaGNfKtFFPx08bjNBIIMpwsHdlGIn6FVYpHs8Qnxd2U2l%2BCESnxLhAsG5s3abCLLrVr7hG%2Bt%2BfhKEvc6mhNNtHKdihw5k0qgRvFMLea1ckGOqUBqlHHi%2BLl3bnZiMEI3SthumRrwLYN76OcZiQE0qKXWT8A7TuYJNlhQqn0kfu2%2FsxhHzeirVxtDG3NRdM5D9eXHYg1y8wxBAr7TQUhtmFMDPUgxT8NtpAgnMxT018TUgjzO3yexNYgOuoJqtocIiVzXUYE2AC5FQtauV8VFon77wZOcv%2BIR0CoQOe8cDjEPHZcpxrWnvklulZ6vrvrYEXwoWc3x72I&X-Amz-Signature=927b5efc5ff0f34264b54586066b676e70b75cc31015853b0449cf4f2186bdfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDGICGR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwgji%2BX9%2Bat9%2Bp9hswLZacuz7bWvxk%2BZ7wAtaKY8McxAiEAva8e3Azm%2FbHcKlpVtYgbuWWjZeEu2Bd37Gt0eFCyADYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWRsDy1HTVZKOz3HSrcA1b9R0Q5WWag5amq3oKFLwTg%2Bpn186AJAKWKbidnH8MkB%2FfnJ%2Ffi%2F0%2FXt5XOJQLW6sKum%2B9rfe96f%2Beslrw2qSCMNaJ6LMcpM4ysQsiN3nDP4%2FeBlUpbmXTBgdMey2nayOke1KQd70YUOjgrMuFqFpxK3JxJLOBi6RCUcgr233n%2BjAwQyRo%2BbeCbHUa2fGBR%2Fy2yzBIpaqruaUTh36IjdouA4ZgiffWazgNWSZgf1NnxagVEX2F1LXcZJpT7y%2ByhU8Fu06z5pmRtS9rcuNiKrQx1RXURnLPino8jALzg7GSsFHH0iPlqi%2BR2BqrvQcUKtBmbwuHWFAHendoTf2ImTzxjkYorwwR0d6G55FuDRj1VyXd4nhu8tiZahk0oJoEF6iaj1gZc0o4wJmjB1n5oo97ZsjgGGkj1sQ%2FWhENA5zqZsLok8PYsKiwW4NxoXyEFzBz52V4f3%2BC5xn3XQA1Ej5vQS30NBu1raZnB%2FUqU6jDpklxKQhUg0oBW%2FWTybCFjVHHH76KWILgksmBFwrcOtmlQbpaGNfKtFFPx08bjNBIIMpwsHdlGIn6FVYpHs8Qnxd2U2l%2BCESnxLhAsG5s3abCLLrVr7hG%2Bt%2BfhKEvc6mhNNtHKdihw5k0qgRvFMLea1ckGOqUBqlHHi%2BLl3bnZiMEI3SthumRrwLYN76OcZiQE0qKXWT8A7TuYJNlhQqn0kfu2%2FsxhHzeirVxtDG3NRdM5D9eXHYg1y8wxBAr7TQUhtmFMDPUgxT8NtpAgnMxT018TUgjzO3yexNYgOuoJqtocIiVzXUYE2AC5FQtauV8VFon77wZOcv%2BIR0CoQOe8cDjEPHZcpxrWnvklulZ6vrvrYEXwoWc3x72I&X-Amz-Signature=29938c069282517b6d0dd99695fe95ff6543b1c77fa448c0bcc5a9afe54ca627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

