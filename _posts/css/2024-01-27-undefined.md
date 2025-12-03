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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3JQPJW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD3AD5SxSx0UNxFDvmwxLYLRdiM%2B8oCQJEfNbWprAsnZAIhAJ03nFNQaeGskdP8bm5VslrtGa9ofhwMo%2B1tCkQ5HQGXKv8DCDIQABoMNjM3NDIzMTgzODA1IgxcUHQCx8iTD5Pe8xcq3APFgRAtKCYhjwc0lYRMslmNgVCy9H4R9JVQIydHOjjZaLUTStuMSENjEJjVgNBPYtxBkE1%2BLiwRNKsOGrv5w6fBeM6kmE8FDrai9jddgoRedY6yGw6ju4X6%2F42G89rngaqjPNXXJCKR3sZ1NiEv%2B0t%2BomMcBZOHzlkUzrt%2BejNH1m3NGwN%2Bc6FTPxBzyO3IgRshPgqK59oQGtZNPvrthJJ28%2BSsYrKx22mgmweqViKZ0fdD%2Fe8f4cotjkjkAY4QzkQtrlp0jBaPUOG9giEALQiqUlqGA5bLWD8we3LLtsyzzQAlxm%2FN0sJkXr882u5lgtv7zngr%2BZ9%2B9o9Z8s5wZXLKmk88jS0f3KXeY6l5opsQKVNFMYIn9V9mDtxreBNiNjLG23Vl3fu7HngM2uUTKDFx4Q7kW08p514nY3FBrxJjfNEvCwv7msQ21hKd%2FTnSzlDTF71no1z4%2Fhv8hLLr3q3KIXrKbs1fL03LiYQs6ngbOYr%2FE3MemFuwBtK8cckYhg7XpyxXjhjBR%2BVIdxXmmjguPbz68OlOFP4rthxMZRhu18ttRtsHRecF27r1fgykv0relYQtTA0bMKR9%2BOe3LUJFUBvFnbxytz9OWt3n7qTzma%2F%2FYA%2BuzZ3%2BgrFruzDO2sHJBjqkAatEx7zqNN2DcfS%2BQX6wXMm6%2Fo4Prn%2BEQXDPNCXTA7qoDr05jAn4fIGbU6JRUN6A4Il5lIpiBB7Opx4xcLKJTHaDdW3NJhCIuMcm6A1Ebr1zDliSyPqZ9p1mVEnDuOAYpcXH3trewTu2X23MJaID5B1Oj40jo2RbvMcnFJH%2BexIi7hMOdx63rF9nnzbU429aOrS40kxSSrwyY3XNovAQbW7%2B4aJ1&X-Amz-Signature=75d9d5837896fe55e57b807da7787741838a93e07626bca1d7c9880102d6704d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3JQPJW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD3AD5SxSx0UNxFDvmwxLYLRdiM%2B8oCQJEfNbWprAsnZAIhAJ03nFNQaeGskdP8bm5VslrtGa9ofhwMo%2B1tCkQ5HQGXKv8DCDIQABoMNjM3NDIzMTgzODA1IgxcUHQCx8iTD5Pe8xcq3APFgRAtKCYhjwc0lYRMslmNgVCy9H4R9JVQIydHOjjZaLUTStuMSENjEJjVgNBPYtxBkE1%2BLiwRNKsOGrv5w6fBeM6kmE8FDrai9jddgoRedY6yGw6ju4X6%2F42G89rngaqjPNXXJCKR3sZ1NiEv%2B0t%2BomMcBZOHzlkUzrt%2BejNH1m3NGwN%2Bc6FTPxBzyO3IgRshPgqK59oQGtZNPvrthJJ28%2BSsYrKx22mgmweqViKZ0fdD%2Fe8f4cotjkjkAY4QzkQtrlp0jBaPUOG9giEALQiqUlqGA5bLWD8we3LLtsyzzQAlxm%2FN0sJkXr882u5lgtv7zngr%2BZ9%2B9o9Z8s5wZXLKmk88jS0f3KXeY6l5opsQKVNFMYIn9V9mDtxreBNiNjLG23Vl3fu7HngM2uUTKDFx4Q7kW08p514nY3FBrxJjfNEvCwv7msQ21hKd%2FTnSzlDTF71no1z4%2Fhv8hLLr3q3KIXrKbs1fL03LiYQs6ngbOYr%2FE3MemFuwBtK8cckYhg7XpyxXjhjBR%2BVIdxXmmjguPbz68OlOFP4rthxMZRhu18ttRtsHRecF27r1fgykv0relYQtTA0bMKR9%2BOe3LUJFUBvFnbxytz9OWt3n7qTzma%2F%2FYA%2BuzZ3%2BgrFruzDO2sHJBjqkAatEx7zqNN2DcfS%2BQX6wXMm6%2Fo4Prn%2BEQXDPNCXTA7qoDr05jAn4fIGbU6JRUN6A4Il5lIpiBB7Opx4xcLKJTHaDdW3NJhCIuMcm6A1Ebr1zDliSyPqZ9p1mVEnDuOAYpcXH3trewTu2X23MJaID5B1Oj40jo2RbvMcnFJH%2BexIi7hMOdx63rF9nnzbU429aOrS40kxSSrwyY3XNovAQbW7%2B4aJ1&X-Amz-Signature=6457887a4cde9406e6a40423be4f1b369227d757dc3149b900e44d05b22f2250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

