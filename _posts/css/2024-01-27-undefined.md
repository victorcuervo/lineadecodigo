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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7IB2HN6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtx5vCeOZN3TMH8sY8gJSRH6RYlCzRHnBuevfdKEziVwIgZwzEoyxxIKIRqWQrpFhuiotIXcYzdCqMg81kR0el%2B7Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGcXrvku8N9Fwv9ynircA1UN9yQFCW5bbJwqn%2FhXo8ps5ZeBuKmWQegLyidVZVEWuy2rEtb0gmSnAc%2BlzqQHCHxTfvszd7oXUt62i75JdSVpbyahCEZHHtk924bHKB5oFCtXVIJ8tT5fyxzIA8W5%2BZ0JYgw0J%2Bbv9b53iE9xwf9hXvQdVPsSlTbg%2BM2hQAO4CUob9X7gb%2FtDFCVePiySTm2ZjmMj6mZj%2Ft5ZxavFjvl%2FbIW1SXNSe%2BXYyFNatRj5u2BxVCoJPl6cIstzZfVsQ54Y%2Bod2w7XDVD0C97ahXtFofKAE%2FxxEqVDrbt%2BDd7GQ%2Bmj%2BDZWOPvtubIPmJKvuMi%2FdawmMbrWVk62uPmrxeb982vZOBwu92scq8wyXxtmRp8mEXpv8ueacDOIDo6pHV6ZeusvCuIzquJIX%2B9Oj3mRTVpn7myiMOa9BKMj4G0%2FVzlYKrty1hnDduVCckpV8955pz0FdmYJIcQCGLfE2xg1jcsufY0L1udQsVciU%2FIAIP30vxDTZ8f2qMfkHNI3ExbR5deA%2BaIbLX%2BbAIrtzySUSHmcThLvCGOqDi101lFh2WRzA8mSf%2BE27M8y8w8ka3x8KYzwTnVH8gWBljXfGYCvWOpnION%2Bcwyn%2FqE6HRqbMHVpmyNBL93mk9M1bML6IwckGOqUBz0e4D5FV8Gz3VnRIID2iRj4o7Z5W4oJ9js%2BDtrT3enjvykr9Mr0Trvg0c9M1dvHv3RB5ULSW69XeoVSqb%2FifK9T%2FMwJaNx2awlu%2FZXPtw6poX7HUIc7dD3Ubqk1odCqQTQ4MS7tUTOKZlfFgyJe55aD3sfdnphpgZuRGe8rVjsm4ktzYkwkWojE6GxUzUXKtHDe1cNYKrWmmY4XD%2Fn3QkKACs%2FP7&X-Amz-Signature=465be59b782071a36ce2ff62be0dc42701ca0e4206910610507e2cffbc67d930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7IB2HN6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtx5vCeOZN3TMH8sY8gJSRH6RYlCzRHnBuevfdKEziVwIgZwzEoyxxIKIRqWQrpFhuiotIXcYzdCqMg81kR0el%2B7Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGcXrvku8N9Fwv9ynircA1UN9yQFCW5bbJwqn%2FhXo8ps5ZeBuKmWQegLyidVZVEWuy2rEtb0gmSnAc%2BlzqQHCHxTfvszd7oXUt62i75JdSVpbyahCEZHHtk924bHKB5oFCtXVIJ8tT5fyxzIA8W5%2BZ0JYgw0J%2Bbv9b53iE9xwf9hXvQdVPsSlTbg%2BM2hQAO4CUob9X7gb%2FtDFCVePiySTm2ZjmMj6mZj%2Ft5ZxavFjvl%2FbIW1SXNSe%2BXYyFNatRj5u2BxVCoJPl6cIstzZfVsQ54Y%2Bod2w7XDVD0C97ahXtFofKAE%2FxxEqVDrbt%2BDd7GQ%2Bmj%2BDZWOPvtubIPmJKvuMi%2FdawmMbrWVk62uPmrxeb982vZOBwu92scq8wyXxtmRp8mEXpv8ueacDOIDo6pHV6ZeusvCuIzquJIX%2B9Oj3mRTVpn7myiMOa9BKMj4G0%2FVzlYKrty1hnDduVCckpV8955pz0FdmYJIcQCGLfE2xg1jcsufY0L1udQsVciU%2FIAIP30vxDTZ8f2qMfkHNI3ExbR5deA%2BaIbLX%2BbAIrtzySUSHmcThLvCGOqDi101lFh2WRzA8mSf%2BE27M8y8w8ka3x8KYzwTnVH8gWBljXfGYCvWOpnION%2Bcwyn%2FqE6HRqbMHVpmyNBL93mk9M1bML6IwckGOqUBz0e4D5FV8Gz3VnRIID2iRj4o7Z5W4oJ9js%2BDtrT3enjvykr9Mr0Trvg0c9M1dvHv3RB5ULSW69XeoVSqb%2FifK9T%2FMwJaNx2awlu%2FZXPtw6poX7HUIc7dD3Ubqk1odCqQTQ4MS7tUTOKZlfFgyJe55aD3sfdnphpgZuRGe8rVjsm4ktzYkwkWojE6GxUzUXKtHDe1cNYKrWmmY4XD%2Fn3QkKACs%2FP7&X-Amz-Signature=b3529ef608f1f5040d04b87685f5175bfa7c06c9f2b9e6649cdbf198f9a706f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

