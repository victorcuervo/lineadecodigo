---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO5WVQ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb6fFk7r4NbSVxmo%2BqYj4ZMXjCBRr4c34ECZCKjBOaYQIgSDMIlE%2F3NbUHzg4DU6Vp4jniqKW5yUWPmoIw0SpNsJ4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BpyXR2PLAKO7RTuircAzyk%2F%2Bi%2BhyllG8V4IBv2uR3jUrUjY2UFfVy7s5oIJ3Cs3BBaD68WonRK0pTyhVbC2tQVPnNcuzuR4vgoeBByyvBdzcfqO1TSIyZiZl2InKNmdI7c4KhL6im5CyLg9XOUjE%2B68R%2BVFlHnOEe9aEDp6mcLH6a%2FwIzbZbNUYSQPWsfh2EARh2D%2BGItUOl64lngkxkjR8ToXdl%2Fxbtu%2FmQQ7fUNEtCAp5VMkNKPHm2%2F0gcA0bEKuchB%2B8Mn5Fr2voAO80oAq6AU5Ee6GbXKWZrDoO3qi7lLeAgIGkPn1oIoBZRCURLOSkA63GL9TdIf%2F1QRDQMHXT7GBNEQF3esJxVBHPNsr4%2Fsk3zF1tVFt4ytZh22yUfogFsPbU%2BKABBKr4JMA2VBMTceWpZ%2F5t39%2F%2FoV7AYraLFXJs%2BxM3KAtdCxQ1lGFJ8sn3Ac0hWciHmOFNHXJykGGbZ%2F3N%2FBMspdrF1mZB6u2PvpkHLCQdzA3wcpysENDSDnVmXD03lfiWh29KtE9zdmV%2B6zpIS3ALvqQNp28ZkObc%2BAWKIqH5ZeWEJlFdPFdiPmqLPU2i35lgz4UmG2asQlpWOdPOKrAoo36SV9OgAUmr41%2B71YIhHlD1f1vKB%2FYrKR%2FrrFl%2FKAEtFy2MMPP2ckGOqUB2C57xNmhKVf3rWZxPO1ZQ69zWJl3wlZu2qtdirKmQTPF1SYNdAkaal8T25eT77fiT%2FcVAXhXA5bhD%2BWehxwN3wnfZ81hqTQvck%2FG64yO6I3vQx9tLfBOZvtRmS7kwTOeZfm88buMYuqRHDRiX7%2BSTZSZujGsq6MBSrpgiUnkcnSZLFV%2BPe3tJig1x3ZJP19vMv4wXeYDFkIF2FPmsNyH9eeqW7oE&X-Amz-Signature=c5fe40a88fcb06059ba7d0c3acc4790e67268dee145d58a6d8929da3d2f776b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO5WVQ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb6fFk7r4NbSVxmo%2BqYj4ZMXjCBRr4c34ECZCKjBOaYQIgSDMIlE%2F3NbUHzg4DU6Vp4jniqKW5yUWPmoIw0SpNsJ4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BpyXR2PLAKO7RTuircAzyk%2F%2Bi%2BhyllG8V4IBv2uR3jUrUjY2UFfVy7s5oIJ3Cs3BBaD68WonRK0pTyhVbC2tQVPnNcuzuR4vgoeBByyvBdzcfqO1TSIyZiZl2InKNmdI7c4KhL6im5CyLg9XOUjE%2B68R%2BVFlHnOEe9aEDp6mcLH6a%2FwIzbZbNUYSQPWsfh2EARh2D%2BGItUOl64lngkxkjR8ToXdl%2Fxbtu%2FmQQ7fUNEtCAp5VMkNKPHm2%2F0gcA0bEKuchB%2B8Mn5Fr2voAO80oAq6AU5Ee6GbXKWZrDoO3qi7lLeAgIGkPn1oIoBZRCURLOSkA63GL9TdIf%2F1QRDQMHXT7GBNEQF3esJxVBHPNsr4%2Fsk3zF1tVFt4ytZh22yUfogFsPbU%2BKABBKr4JMA2VBMTceWpZ%2F5t39%2F%2FoV7AYraLFXJs%2BxM3KAtdCxQ1lGFJ8sn3Ac0hWciHmOFNHXJykGGbZ%2F3N%2FBMspdrF1mZB6u2PvpkHLCQdzA3wcpysENDSDnVmXD03lfiWh29KtE9zdmV%2B6zpIS3ALvqQNp28ZkObc%2BAWKIqH5ZeWEJlFdPFdiPmqLPU2i35lgz4UmG2asQlpWOdPOKrAoo36SV9OgAUmr41%2B71YIhHlD1f1vKB%2FYrKR%2FrrFl%2FKAEtFy2MMPP2ckGOqUB2C57xNmhKVf3rWZxPO1ZQ69zWJl3wlZu2qtdirKmQTPF1SYNdAkaal8T25eT77fiT%2FcVAXhXA5bhD%2BWehxwN3wnfZ81hqTQvck%2FG64yO6I3vQx9tLfBOZvtRmS7kwTOeZfm88buMYuqRHDRiX7%2BSTZSZujGsq6MBSrpgiUnkcnSZLFV%2BPe3tJig1x3ZJP19vMv4wXeYDFkIF2FPmsNyH9eeqW7oE&X-Amz-Signature=791e988aa7c26cadf245c73938003f5ca19d446345920634468307ff6c0f0612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

