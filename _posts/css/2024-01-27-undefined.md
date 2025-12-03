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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNI2LDR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAOD7sESGqs%2B9DYRD21USJcb9aYxuDfTQGeJV8SpOuclAiEA5SGZuYzywF24jnAli3VIYrwdSe1Jjs8v3zZr90UvnA0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEqXg3l7gpe%2BJIZ0oSrcA5Q9bQfZYo%2BcoKJ5oicn61yfdJlCYPcb6lxTv%2F5s7bA%2FkPpjDCreq7baSML6ukKLvEugtF7qqyegJljHAUKYgQuoHZixSidTRaDv7SnFE8aTCQh46CSj6kDg9Vr3TLWsIpAP3NAFezRJc0d5u7thxrif9jvKEmPH3lSU0WpM3xxPzW6Joc36SSMeXRtjlQrzC4cNQpyXjJqzMc4W7h6tWStg3vVK09iKZSkHve9M9hjFo%2Bc3rKuHKhXIaKaiKzLp9zCc5VI6wkt0XKlYwr0A2noqOE2jhgMHWoO8HMo%2BDQUrPv%2FpYo38f7ViWZonsS980mBt6pHAqkvnOCJSM3d0Ro9xptf9Ix%2FZl7uREcOXdC3zHKrWvc70ftPyD%2Fm63z1rRb85IW%2FB%2FRYUUxVO6K9pMaK%2Fbhq7ukSuM2pSesAFjhmqN7bn1IBVJpQahGQeaiWbrqqOcaMrRAVYRrbOR4pVHcjdl6h33Gjz7C88LbTAfa6pNcWvbYv%2FRXZmrK2eHOwCB5jkevJBOHXsVpdotc4Lx8tjlAO1G%2BPRmqpaNvgHeP%2FE8SThx5FYixvwFcF9byeF%2FTr%2BkVC6pMnp8UcioprLamE711iw89Q2fmpb1f2z2XA%2FlnNOpGxnleRHbyh9MLCIwckGOqUBTQKESHXwkwu0JDO7xaywcQKutVkFIaYvRJIl2LtbFaQy023IQ0WlJMwkSC6Vv0Ek5FJepnKvo485%2FaPC%2F7ITwtQ%2BC1X1%2B13hGIbiL0TxZFFaIozwj9QPigTt1TKpx2BxVkD43O58l8KpNm%2FHSU4RXBa61j2RqJW%2BWryoPZZ6IeBMtyyoSPNB3l39kI2y94lrCydnzmvkG8%2Bt1h%2F89bIwWB1Kw4vp&X-Amz-Signature=6aee58d3344e4e716a01508e5036d9b15bf4f47fa517f67aeb8801423393130a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNI2LDR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAOD7sESGqs%2B9DYRD21USJcb9aYxuDfTQGeJV8SpOuclAiEA5SGZuYzywF24jnAli3VIYrwdSe1Jjs8v3zZr90UvnA0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEqXg3l7gpe%2BJIZ0oSrcA5Q9bQfZYo%2BcoKJ5oicn61yfdJlCYPcb6lxTv%2F5s7bA%2FkPpjDCreq7baSML6ukKLvEugtF7qqyegJljHAUKYgQuoHZixSidTRaDv7SnFE8aTCQh46CSj6kDg9Vr3TLWsIpAP3NAFezRJc0d5u7thxrif9jvKEmPH3lSU0WpM3xxPzW6Joc36SSMeXRtjlQrzC4cNQpyXjJqzMc4W7h6tWStg3vVK09iKZSkHve9M9hjFo%2Bc3rKuHKhXIaKaiKzLp9zCc5VI6wkt0XKlYwr0A2noqOE2jhgMHWoO8HMo%2BDQUrPv%2FpYo38f7ViWZonsS980mBt6pHAqkvnOCJSM3d0Ro9xptf9Ix%2FZl7uREcOXdC3zHKrWvc70ftPyD%2Fm63z1rRb85IW%2FB%2FRYUUxVO6K9pMaK%2Fbhq7ukSuM2pSesAFjhmqN7bn1IBVJpQahGQeaiWbrqqOcaMrRAVYRrbOR4pVHcjdl6h33Gjz7C88LbTAfa6pNcWvbYv%2FRXZmrK2eHOwCB5jkevJBOHXsVpdotc4Lx8tjlAO1G%2BPRmqpaNvgHeP%2FE8SThx5FYixvwFcF9byeF%2FTr%2BkVC6pMnp8UcioprLamE711iw89Q2fmpb1f2z2XA%2FlnNOpGxnleRHbyh9MLCIwckGOqUBTQKESHXwkwu0JDO7xaywcQKutVkFIaYvRJIl2LtbFaQy023IQ0WlJMwkSC6Vv0Ek5FJepnKvo485%2FaPC%2F7ITwtQ%2BC1X1%2B13hGIbiL0TxZFFaIozwj9QPigTt1TKpx2BxVkD43O58l8KpNm%2FHSU4RXBa61j2RqJW%2BWryoPZZ6IeBMtyyoSPNB3l39kI2y94lrCydnzmvkG8%2Bt1h%2F89bIwWB1Kw4vp&X-Amz-Signature=d85a706608629a1984e62201b56b3e11016bcf3a23c02b84edd0b5e52f87b08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

