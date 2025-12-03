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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUSTR3JU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCgJLvAz6q%2F1MEbW6bIYtpYbXSCh%2BafAiglY8HHc62tgwIgUd592c%2BNX5C5BAFm37LCNJybTm06O2%2FTBxaVrjLVqtMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOr5erISItYA8TctFSrcA%2BDRuM91vTEeS99aFo7Z1SLDD9lwYmR9RRgMEP03YTYrA3wCVmr8Zm%2F7V3zZQtmMJEcL%2F%2FucWTIJnAwuCBI28tDinzj0c7otX66Q2rFmnv7n2vZ%2F%2Fo7IM93VgOnXpfYONRwU3iFXhcc48VkTfSTINKNflQomU5B85MqyqmP448nOkcrY2yA2svcZyDahpS0CI18caPpGxvhoV%2Bpy%2BxoWzYiXZJ50J2Bo0UR4tDlua3DNmrI4XkdsLVF71iB0jr8ZX4XO3IqdLD7shvnDP8%2B6zaQ6Bx4wHDR9vQIvlGepRuBbyQkyknxhwVFL%2FKQjvhaibPxUqCzN%2BZ2OYslA3xw9Pg6g4NthYt%2BDsYKjvVBB8KqkU6BCvRQ82R6L2rTeEBFIXooEEvRwOAb0Vf21w96ZZzoI6ZsKyVT%2BC8xfI8OoLB4odHbU%2B0Yvp48iwJPGUYDUfzxbN%2FnzGLzpdjk7VGZiiH33%2Bt724v714y%2FXVkA%2BW4z9wzY21hDdVIahMKuwTDTR8ZET4xNrg7lVtbvT0bfCLj71uwJXh1JNTgJ6oUCUexRZXFpC3Vhc3HjZu6%2BDS8wfSDPR4eb9q6varetUOcic4Xa%2BIbIrOmnQ7IlK5OCW%2BFpblJXcOkiFLS%2BRm6%2B0MOiSwMkGOqUB9mgVPAEzEcPkPO67tGprf3EPIBVmjkgcfjGt9uJr0gWuG65QI%2FMDPhrrUygw%2F1JNr%2BGNC1OiTwwCew8dmeOOqiwsUy%2Bw64TqBiO%2BwGYpOLFz8578qRyYh8eb7nnQOd2M3VvR3FMkRoMPD%2BULDI19J4TtNdEDBwLvAJIFBlo4gpcd4XERbgj1Kv%2Fwo85Y8U7ajKcXE%2BPnYWxsdr%2FfOLRfSZLyQOIy&X-Amz-Signature=42f7d977da439321de6642af13a9f4fb1e17cf2363f357789bfbc67e20a00fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUSTR3JU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCgJLvAz6q%2F1MEbW6bIYtpYbXSCh%2BafAiglY8HHc62tgwIgUd592c%2BNX5C5BAFm37LCNJybTm06O2%2FTBxaVrjLVqtMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOr5erISItYA8TctFSrcA%2BDRuM91vTEeS99aFo7Z1SLDD9lwYmR9RRgMEP03YTYrA3wCVmr8Zm%2F7V3zZQtmMJEcL%2F%2FucWTIJnAwuCBI28tDinzj0c7otX66Q2rFmnv7n2vZ%2F%2Fo7IM93VgOnXpfYONRwU3iFXhcc48VkTfSTINKNflQomU5B85MqyqmP448nOkcrY2yA2svcZyDahpS0CI18caPpGxvhoV%2Bpy%2BxoWzYiXZJ50J2Bo0UR4tDlua3DNmrI4XkdsLVF71iB0jr8ZX4XO3IqdLD7shvnDP8%2B6zaQ6Bx4wHDR9vQIvlGepRuBbyQkyknxhwVFL%2FKQjvhaibPxUqCzN%2BZ2OYslA3xw9Pg6g4NthYt%2BDsYKjvVBB8KqkU6BCvRQ82R6L2rTeEBFIXooEEvRwOAb0Vf21w96ZZzoI6ZsKyVT%2BC8xfI8OoLB4odHbU%2B0Yvp48iwJPGUYDUfzxbN%2FnzGLzpdjk7VGZiiH33%2Bt724v714y%2FXVkA%2BW4z9wzY21hDdVIahMKuwTDTR8ZET4xNrg7lVtbvT0bfCLj71uwJXh1JNTgJ6oUCUexRZXFpC3Vhc3HjZu6%2BDS8wfSDPR4eb9q6varetUOcic4Xa%2BIbIrOmnQ7IlK5OCW%2BFpblJXcOkiFLS%2BRm6%2B0MOiSwMkGOqUB9mgVPAEzEcPkPO67tGprf3EPIBVmjkgcfjGt9uJr0gWuG65QI%2FMDPhrrUygw%2F1JNr%2BGNC1OiTwwCew8dmeOOqiwsUy%2Bw64TqBiO%2BwGYpOLFz8578qRyYh8eb7nnQOd2M3VvR3FMkRoMPD%2BULDI19J4TtNdEDBwLvAJIFBlo4gpcd4XERbgj1Kv%2Fwo85Y8U7ajKcXE%2BPnYWxsdr%2FfOLRfSZLyQOIy&X-Amz-Signature=a2505057116e60bfb77dc8f859ebb3388dca1038039188857d58da0408672011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

