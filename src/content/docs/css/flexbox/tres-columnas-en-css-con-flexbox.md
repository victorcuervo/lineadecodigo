---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZOPJMM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvS3mchdH9ljKRKq3hLCtRILhKXpcjdqf6lh8oIkJSJAiEAoSWpm9ArmT2NKkxX2u7mafaj5jgvRVuJx2aAN5bFtKwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfLgciX3W%2F3IPv%2FdSrcA5ocs7XWszAVpm5mgM17stDntAWalD%2B7wEeH4n1a2Zb5mTBWs10vxCljjVcxbSp9uhVf5XT9Y3FOwEZObRs2NZ2Dc9KRuTqaM%2FtC2EVIm2YUBSuR3R0nPt%2FnbNBPhNb4zeodtxM%2B6br0Tp8u7W3WGt%2FumY53QV2myp%2BAx6FIrNoExPNNmLkdMPCMWsjT%2BlobI5sPH%2Fybb34ZJKmVufxI44gTcwnRJ%2FYdqk%2Fc%2BlKAwgVaidfOPPcUOgZJNfKhD91evZ51O0Bzt3ExNJH0%2Fl28kIISqFjd%2Bqu9vqoGEJcPB7md4JdrK1C4FJ2mLTcRlgMvJ9aHFPzD3eQ6hJS%2FLvCEPQp%2FcPUeMAMIGkdC2Yoo9dPkMxbnOmRMivaRL4txWEWK9x2AZO%2BbHQCa6Y0y9GQRDLutdSNBJSojH%2FR2XUHv4gMl4q3M6LM74V1tqYM1ooLqNLB5iq3x67TLA8AqMG%2FZjtwPyeQOTTG4KsmYCgRZHx8bug47di8dBkqkLg8g1jKFFUSmbgoRrJFQkySe%2Fd3UKFVXkzY9nI2ZW7BZReR3rEfv4gTCDzWXCE7HkPkvgxmDXqtC5aPC7VHJHZbLuzR6XfMTG8QevgZoaiDiOS5aMNeNa0OicjFsz9Eaqz1XMOuZ1ckGOqUBtX%2Bv9wXC3jKKkMPIC7p4OOyjg3gNWq4MvADm9OdYpYy8TWXeQ4L9mW7x4azIoOJ9nrZgnXNMyo6Cx9WXpFmSPPfxeZ1S62IZNtjQuY8g7c1WaTtqJKTh5gZZGwhag3oNMG0F6TcScC4naQjWV6enOffkucxDWKjYEmZk04mDaumGlZgH3pXiL0Y%2BWp8ZuOKh9mXkRLXt0n%2FDsmySU5zYyMs3Kuj3&X-Amz-Signature=c21ebe3fc2ef1a54d3190e9adf62d3f64f327d3770314e17a7dd3b000b473f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZOPJMM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvS3mchdH9ljKRKq3hLCtRILhKXpcjdqf6lh8oIkJSJAiEAoSWpm9ArmT2NKkxX2u7mafaj5jgvRVuJx2aAN5bFtKwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfLgciX3W%2F3IPv%2FdSrcA5ocs7XWszAVpm5mgM17stDntAWalD%2B7wEeH4n1a2Zb5mTBWs10vxCljjVcxbSp9uhVf5XT9Y3FOwEZObRs2NZ2Dc9KRuTqaM%2FtC2EVIm2YUBSuR3R0nPt%2FnbNBPhNb4zeodtxM%2B6br0Tp8u7W3WGt%2FumY53QV2myp%2BAx6FIrNoExPNNmLkdMPCMWsjT%2BlobI5sPH%2Fybb34ZJKmVufxI44gTcwnRJ%2FYdqk%2Fc%2BlKAwgVaidfOPPcUOgZJNfKhD91evZ51O0Bzt3ExNJH0%2Fl28kIISqFjd%2Bqu9vqoGEJcPB7md4JdrK1C4FJ2mLTcRlgMvJ9aHFPzD3eQ6hJS%2FLvCEPQp%2FcPUeMAMIGkdC2Yoo9dPkMxbnOmRMivaRL4txWEWK9x2AZO%2BbHQCa6Y0y9GQRDLutdSNBJSojH%2FR2XUHv4gMl4q3M6LM74V1tqYM1ooLqNLB5iq3x67TLA8AqMG%2FZjtwPyeQOTTG4KsmYCgRZHx8bug47di8dBkqkLg8g1jKFFUSmbgoRrJFQkySe%2Fd3UKFVXkzY9nI2ZW7BZReR3rEfv4gTCDzWXCE7HkPkvgxmDXqtC5aPC7VHJHZbLuzR6XfMTG8QevgZoaiDiOS5aMNeNa0OicjFsz9Eaqz1XMOuZ1ckGOqUBtX%2Bv9wXC3jKKkMPIC7p4OOyjg3gNWq4MvADm9OdYpYy8TWXeQ4L9mW7x4azIoOJ9nrZgnXNMyo6Cx9WXpFmSPPfxeZ1S62IZNtjQuY8g7c1WaTtqJKTh5gZZGwhag3oNMG0F6TcScC4naQjWV6enOffkucxDWKjYEmZk04mDaumGlZgH3pXiL0Y%2BWp8ZuOKh9mXkRLXt0n%2FDsmySU5zYyMs3Kuj3&X-Amz-Signature=4b7e72f02a6038584a25d3f03fddf0c42b0b644a1a12cbfedfb29036cb3bf666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

