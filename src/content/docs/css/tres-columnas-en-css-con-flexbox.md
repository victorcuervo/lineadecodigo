---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJEVBQT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFbwSkhZVfiIuM133H30FfOYCov%2FPCxrKpuOjO4%2F4eJtAiA8ssOB9Bx6TnFAngwwxf1kUzsM77FcI2IL3I4ef5SBACr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjYnFfqPRqo%2Bl4Y3wKtwDvzLCWEPFdfgCfId%2BIgBosquudoEYpJEb%2FAYpmDxE%2FSk7pDPFum0%2BBB9HI5uZeL6DQx7DreYNu0k%2FVwcjbWAtyp%2FGP2U31dcoSkYk354MtoWZx553kkx%2B%2FEteuW7%2BI7v9j4lAU%2FMWeF%2F89LSZmR0UBhGdL1gOpHGi8InCJM6e82oisW%2BISnxFx7KxzK2YuNXkib03NpxpHIJVysYJMWxulzj5g1rxGN%2FFKqgLTsUSPARv0yGq%2B34H9g7hvoipubNr4wk2dTqsfNnwHdduArUfcM%2FJsQfHco%2ByojwO80lqwCWdX4yyzZnbYm0aG6%2BoOeb%2FCSV6%2F3PwCqzuxgUNVIZr%2BugKQ4r2sSn0JK4MoGYnbFB5MGTIutgdOyJWmz02LPrJV5EUdvhk80X1ZiKSaeIX%2F9nCVQFd9frEq0St61iw3ccKa94DcyyCFzmGGiiYF%2B0eRDabVTHznA7cUZ5Cs3VPWvq67tuZbDmj%2BZHJA6H77%2BtpW6PWkuITX2qYdRKROnZBWFMjcY9gUPqtzNdLxql9HkuLJ1cFnzjoIMcdS%2FrOJQ6rp%2FHxxs%2FlV6UePOhNwvS8L8CCqcpG2rtamTxnOUZV%2F1Mr72kksawhuK%2FVAjsrnw157HPmtSdQ0RlgM%2F8wh93CyQY6pgFFGSMoLqzMvh8fxLCUCrgO3h3k0Jx8VcdfO%2FQBxSrU9%2BWhY81y3fLR89xTo20%2F%2FDcR%2BN%2FkgR4UE5OOiDmccMnv1Ay%2BfoJOUo1Hg0SZItLxt2ke3jZ8X%2BX%2BVpxUEwSqTp1962fUJrUQh57PyZK2XzYVjBop4EbywYo5XGA1cpl4KaiKYVfg4fAZVGn3IbwZDbGjWxAg8kIK0rzZMyddW8fm1YJfU4ix&X-Amz-Signature=53380bd6d0026f3c092b26d35afd8be152d31cc13afc50d652d1089dc711da70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJEVBQT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFbwSkhZVfiIuM133H30FfOYCov%2FPCxrKpuOjO4%2F4eJtAiA8ssOB9Bx6TnFAngwwxf1kUzsM77FcI2IL3I4ef5SBACr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMjYnFfqPRqo%2Bl4Y3wKtwDvzLCWEPFdfgCfId%2BIgBosquudoEYpJEb%2FAYpmDxE%2FSk7pDPFum0%2BBB9HI5uZeL6DQx7DreYNu0k%2FVwcjbWAtyp%2FGP2U31dcoSkYk354MtoWZx553kkx%2B%2FEteuW7%2BI7v9j4lAU%2FMWeF%2F89LSZmR0UBhGdL1gOpHGi8InCJM6e82oisW%2BISnxFx7KxzK2YuNXkib03NpxpHIJVysYJMWxulzj5g1rxGN%2FFKqgLTsUSPARv0yGq%2B34H9g7hvoipubNr4wk2dTqsfNnwHdduArUfcM%2FJsQfHco%2ByojwO80lqwCWdX4yyzZnbYm0aG6%2BoOeb%2FCSV6%2F3PwCqzuxgUNVIZr%2BugKQ4r2sSn0JK4MoGYnbFB5MGTIutgdOyJWmz02LPrJV5EUdvhk80X1ZiKSaeIX%2F9nCVQFd9frEq0St61iw3ccKa94DcyyCFzmGGiiYF%2B0eRDabVTHznA7cUZ5Cs3VPWvq67tuZbDmj%2BZHJA6H77%2BtpW6PWkuITX2qYdRKROnZBWFMjcY9gUPqtzNdLxql9HkuLJ1cFnzjoIMcdS%2FrOJQ6rp%2FHxxs%2FlV6UePOhNwvS8L8CCqcpG2rtamTxnOUZV%2F1Mr72kksawhuK%2FVAjsrnw157HPmtSdQ0RlgM%2F8wh93CyQY6pgFFGSMoLqzMvh8fxLCUCrgO3h3k0Jx8VcdfO%2FQBxSrU9%2BWhY81y3fLR89xTo20%2F%2FDcR%2BN%2FkgR4UE5OOiDmccMnv1Ay%2BfoJOUo1Hg0SZItLxt2ke3jZ8X%2BX%2BVpxUEwSqTp1962fUJrUQh57PyZK2XzYVjBop4EbywYo5XGA1cpl4KaiKYVfg4fAZVGn3IbwZDbGjWxAg8kIK0rzZMyddW8fm1YJfU4ix&X-Amz-Signature=575f5823cef6a74f8d784638eb9590ea16d6e54f419b254e70fbfff0125e5679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

