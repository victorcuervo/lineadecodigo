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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGBVKCYR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC%2BcUmCaaLbIyyN2ij8uKYo39xJj9MqIZsdEq4FSIeWZQIgSIHHUNn9j5i2YXXMzz2YJrtS1xidl92MaK4qkQNcmokq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPTfyjUFzKwzLPeSiyrcAzVkBXgdoaOZLKqaYVUmTVemFyilNWPBQC03bvgM1TUrrPZGsNbguYph0mL0rygjKLrmXZJIxv%2F8JC23vvS9xEh29uP4d6L0JVSxmhzGvFoatF8PKJJ9wbI3Brox%2Fi1uKhxC%2BmA7QvNIfJCHYV%2BU6fihTVFr4RccTkU8rTkG%2FGjBvV%2FBhC2KhKc4W%2B7ijdXtoRFoq4HMAfgTHboYxEysWaWoOaPjXMEvdswAEzIwNLCCHhQ6n25T7aPZwWYcUeEcAVW%2FWFfexSa4oyDpaShoY3begE23tI1YCPx3tCM989hjzfj%2BNykpYpkO8IobtYZKs%2BwgeTrpMjygfnbWN%2BNNgZygqQ5Wkw3p7x7f4VcxMiqLEp0RV1%2BnjYQZREc5Ttr18N8GYrA4iJZt2MQu18zdI%2BhA2EpxHTq3L8RDcjHKgQusYv%2FNj3LXy5UxxjLY9DCoTFJoVSOYxmhsO2RrPUvl%2FzAulE%2BcCDKcbbxPUi4gG%2Br9sCTEmKAz6yE74rDpJKjswj9sDziXisdkSrUlOveNn24s0lmy6AEYPCCDUAQVDU%2BGdTHF7tUqI6H5APb5iMFSDg4WgHzRy4lTDlPBQQwtE0lS9K3vtC67z1gOXaix8T4PHeQJ8KP7f6QVd9aQMKHpwMkGOqUBFmL9UXzkHen11OBVG0lbzGjPUkOVd%2F8KsSWqWQBxf591%2Fy3bAYh51h3x1GI8I1bktRfusACTcdxeMjyxZ2JNYaLLDDGEiW2EE1YUajV2n%2BAf1cdTqlq2ljw7mrTkreqH3CDutx7JR3sCkkxlb%2B0iWb0U85BgDtz%2BKoFgI5p%2FLR5lJxNiMGTcs8h2lz9n31K7gkd7vjUUAOcirfiH0j%2FE1gXVk6KC&X-Amz-Signature=d8e83491fcf7ff1e13f4e60e8e43e85a1e77f9ad98ab39e9f92dfac911933b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGBVKCYR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC%2BcUmCaaLbIyyN2ij8uKYo39xJj9MqIZsdEq4FSIeWZQIgSIHHUNn9j5i2YXXMzz2YJrtS1xidl92MaK4qkQNcmokq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPTfyjUFzKwzLPeSiyrcAzVkBXgdoaOZLKqaYVUmTVemFyilNWPBQC03bvgM1TUrrPZGsNbguYph0mL0rygjKLrmXZJIxv%2F8JC23vvS9xEh29uP4d6L0JVSxmhzGvFoatF8PKJJ9wbI3Brox%2Fi1uKhxC%2BmA7QvNIfJCHYV%2BU6fihTVFr4RccTkU8rTkG%2FGjBvV%2FBhC2KhKc4W%2B7ijdXtoRFoq4HMAfgTHboYxEysWaWoOaPjXMEvdswAEzIwNLCCHhQ6n25T7aPZwWYcUeEcAVW%2FWFfexSa4oyDpaShoY3begE23tI1YCPx3tCM989hjzfj%2BNykpYpkO8IobtYZKs%2BwgeTrpMjygfnbWN%2BNNgZygqQ5Wkw3p7x7f4VcxMiqLEp0RV1%2BnjYQZREc5Ttr18N8GYrA4iJZt2MQu18zdI%2BhA2EpxHTq3L8RDcjHKgQusYv%2FNj3LXy5UxxjLY9DCoTFJoVSOYxmhsO2RrPUvl%2FzAulE%2BcCDKcbbxPUi4gG%2Br9sCTEmKAz6yE74rDpJKjswj9sDziXisdkSrUlOveNn24s0lmy6AEYPCCDUAQVDU%2BGdTHF7tUqI6H5APb5iMFSDg4WgHzRy4lTDlPBQQwtE0lS9K3vtC67z1gOXaix8T4PHeQJ8KP7f6QVd9aQMKHpwMkGOqUBFmL9UXzkHen11OBVG0lbzGjPUkOVd%2F8KsSWqWQBxf591%2Fy3bAYh51h3x1GI8I1bktRfusACTcdxeMjyxZ2JNYaLLDDGEiW2EE1YUajV2n%2BAf1cdTqlq2ljw7mrTkreqH3CDutx7JR3sCkkxlb%2B0iWb0U85BgDtz%2BKoFgI5p%2FLR5lJxNiMGTcs8h2lz9n31K7gkd7vjUUAOcirfiH0j%2FE1gXVk6KC&X-Amz-Signature=958ffd84937c18eda3ae6f6c2d314ff0c0a1b86074abcdf7bb0e11c93ee2f6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

