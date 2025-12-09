---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXFZLQC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHQ%2BX%2BlZFGPrIF6r1bwVl8TTPLcdfcHYcUSSLn4XZo4gIhAJLxFBbNrarKSMo2NtvdSD73FkM6PvL0XsTRR0taJYvHKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaE9TAfMbWH0w7Cdgq3ANh3JCpDhQOQezxCHuc0kdzjmAEboNPcOVqIUaukXHUgCv7JEIaWwtqS78mO9lhysMvItg%2FTpN20X3FG9paqrCSWL70IB9hRMklt6piqL8mCmGDm2WBRZmPFFdrXdrlqKAOcN4pmBJdqb3TIMS2THhG2mGJDcaowCGynU6pifU%2BXey5CI2iT3T9c95F%2BeLYiiiCpGdTDDwoY%2Bp49CVOvzYVw%2B0aboJmqBNimIpgR7AtVD8IMy2V2rrkKtMZ3uKTwWnRl0xTIOuinPbdKrfyHgpCp%2B2txz%2B0Ruf82dPRx%2FZvTC8aX4rjL%2BoghzuNv9fqn2oV7r%2F4aLlDpBsT52i00FnaviDefKGUn0Wp4bLqGi5j6rAMVVrbq9DmggvsCzuHGIzajPXcvmqXlzDqo%2F8ET4Fe7TQZyu5S9i2d8Yj3CMXQt1eLi3GZMYUTu4yVDbd9LOEP74Kom9csvVlH7ErlfZzysFoNRy1uAAwSut9Yt3fQJqFIu0T8Vds3fYCMdLRPypV6hONEnEXHmDzaRpxKjWuM%2F2R1Ljiom%2BqQ2waXcoEVIPfmEAio7eIuqgkWSRpXNexrbeGVZO91M7DC5uKYw9l2faFnxyp7WkpzPnqyURllTuk1IUTkKgw36nBTNTC%2BpN%2FJBjqkAcbQtN0PE3y5Ishkvhe7UVrGzj3pWV3pEWkM87%2FCOrx1EhlRq8mMruJba4XG6P%2BzT3Rh33y7fV8UF%2FEPIfe6w1CX%2BsXiDY7UsLJdIv22XcHIoiudxJedPaG3UAJ2y526o4kymNDuadKiKzqJfj4khuDfglWxvri4k0XR74hd8aNdBpQIUizQ7G1h%2FKGMWzcuW647Kvu7Gm9qB4k6dZDA5BG68uio&X-Amz-Signature=5bbb9cf8333d814c2af2b6ba27b2acbc3cfb29ea27566eea53f4f5a610e090c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXFZLQC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHQ%2BX%2BlZFGPrIF6r1bwVl8TTPLcdfcHYcUSSLn4XZo4gIhAJLxFBbNrarKSMo2NtvdSD73FkM6PvL0XsTRR0taJYvHKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaE9TAfMbWH0w7Cdgq3ANh3JCpDhQOQezxCHuc0kdzjmAEboNPcOVqIUaukXHUgCv7JEIaWwtqS78mO9lhysMvItg%2FTpN20X3FG9paqrCSWL70IB9hRMklt6piqL8mCmGDm2WBRZmPFFdrXdrlqKAOcN4pmBJdqb3TIMS2THhG2mGJDcaowCGynU6pifU%2BXey5CI2iT3T9c95F%2BeLYiiiCpGdTDDwoY%2Bp49CVOvzYVw%2B0aboJmqBNimIpgR7AtVD8IMy2V2rrkKtMZ3uKTwWnRl0xTIOuinPbdKrfyHgpCp%2B2txz%2B0Ruf82dPRx%2FZvTC8aX4rjL%2BoghzuNv9fqn2oV7r%2F4aLlDpBsT52i00FnaviDefKGUn0Wp4bLqGi5j6rAMVVrbq9DmggvsCzuHGIzajPXcvmqXlzDqo%2F8ET4Fe7TQZyu5S9i2d8Yj3CMXQt1eLi3GZMYUTu4yVDbd9LOEP74Kom9csvVlH7ErlfZzysFoNRy1uAAwSut9Yt3fQJqFIu0T8Vds3fYCMdLRPypV6hONEnEXHmDzaRpxKjWuM%2F2R1Ljiom%2BqQ2waXcoEVIPfmEAio7eIuqgkWSRpXNexrbeGVZO91M7DC5uKYw9l2faFnxyp7WkpzPnqyURllTuk1IUTkKgw36nBTNTC%2BpN%2FJBjqkAcbQtN0PE3y5Ishkvhe7UVrGzj3pWV3pEWkM87%2FCOrx1EhlRq8mMruJba4XG6P%2BzT3Rh33y7fV8UF%2FEPIfe6w1CX%2BsXiDY7UsLJdIv22XcHIoiudxJedPaG3UAJ2y526o4kymNDuadKiKzqJfj4khuDfglWxvri4k0XR74hd8aNdBpQIUizQ7G1h%2FKGMWzcuW647Kvu7Gm9qB4k6dZDA5BG68uio&X-Amz-Signature=d78a80c17964f125880d182137aa8567c8708c863cd58f098f0b3bb679e06423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

