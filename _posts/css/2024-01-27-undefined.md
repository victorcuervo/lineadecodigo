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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CIWNXP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH1txGiRdbdra7bPoR2sDB%2BZzb48IMl2IYKinOPAjMaECIQDTja9QLIYDreUF8td13UDm7BKLydgGXg2qpesv9%2BJ%2BVCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMDEXxMELouXlqGfmXKtwDfeLrlr41tRQx%2Fokgo2DShIcExza%2BB9MpitiKF6SX52yhOdIeO4LrbdKtjfNk12i9Seovjof%2FEYE9trT7gMXE7G7eOcGO19vVpjTVFccu%2F4OCVSTxCA91pcQZJ8IPnPOKX%2BlcRlw%2BGGhfzxJpzIZGrMe7Qh6JCvE0qUl1pT8ytwsPZO1c5mVLL8BSl5cHye0fcD1%2BVddn5Pn%2BtNeApCJQx5x77pqVLmu%2Figr2iYv1yuUxBHLrSwakCL8xY9W9C%2B2Kuym8zWmkp4wKPcWc%2BDQgHp2S60dfOfpOEgAFOFOsM6iKtPx4TmyoRNr6pPSFz6ILYwrAX3z1kCCXaBznbUqvsJ7JZO6MzwhgwYOXZ%2FcklUcyHDnWVkQ4Y2pHlp5cazKiZw%2BdrW4DDbK1G3bu0Hk7PYKFbwE1F1todc7GccYLnjA33J6E9TIfj6fCLqwTCx6M7lgjwYl3Spj1mg4o8%2FmMIoRPm4NnZ0E28lRkqeffKwmf4shcYC0LJzPX5RwnVpZE6napCMfGm93tBS0QeVIcSJs7LLdQBk96GzcbbRvkFomK8LKHjR6BmnHuShZgFCLupIJjUc4M3CCpyjZSToWQd5Syw3FdDK0PNO7Jrds%2FKcde0tc5zvtsmJV54SkwnK%2FAyQY6pgF9Flh%2BpkJIU%2BgNjqJmOcbGrehMO6MfU9ySWeTk0o7UzuKCBeO0Cu6JSUiEBGpvT2O0rdmuym0i%2FBKmylcVTmNMvO60Eg7UBLKudLkMudVC2tyU6IwbmAs5SQkeQopAa84sqhDvwj7umEo1gvhpfMuLbKntuQ04lVrh45XgJPTGROxSh4LDEe%2FV%2FKfvxwWXkgsKzm7fDkhEEjkz2M%2FeSVzG97S8%2Bi9U&X-Amz-Signature=b60af402723bd21254976a838df926275249c5b5561be1a427e1e29d32240f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CIWNXP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH1txGiRdbdra7bPoR2sDB%2BZzb48IMl2IYKinOPAjMaECIQDTja9QLIYDreUF8td13UDm7BKLydgGXg2qpesv9%2BJ%2BVCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMDEXxMELouXlqGfmXKtwDfeLrlr41tRQx%2Fokgo2DShIcExza%2BB9MpitiKF6SX52yhOdIeO4LrbdKtjfNk12i9Seovjof%2FEYE9trT7gMXE7G7eOcGO19vVpjTVFccu%2F4OCVSTxCA91pcQZJ8IPnPOKX%2BlcRlw%2BGGhfzxJpzIZGrMe7Qh6JCvE0qUl1pT8ytwsPZO1c5mVLL8BSl5cHye0fcD1%2BVddn5Pn%2BtNeApCJQx5x77pqVLmu%2Figr2iYv1yuUxBHLrSwakCL8xY9W9C%2B2Kuym8zWmkp4wKPcWc%2BDQgHp2S60dfOfpOEgAFOFOsM6iKtPx4TmyoRNr6pPSFz6ILYwrAX3z1kCCXaBznbUqvsJ7JZO6MzwhgwYOXZ%2FcklUcyHDnWVkQ4Y2pHlp5cazKiZw%2BdrW4DDbK1G3bu0Hk7PYKFbwE1F1todc7GccYLnjA33J6E9TIfj6fCLqwTCx6M7lgjwYl3Spj1mg4o8%2FmMIoRPm4NnZ0E28lRkqeffKwmf4shcYC0LJzPX5RwnVpZE6napCMfGm93tBS0QeVIcSJs7LLdQBk96GzcbbRvkFomK8LKHjR6BmnHuShZgFCLupIJjUc4M3CCpyjZSToWQd5Syw3FdDK0PNO7Jrds%2FKcde0tc5zvtsmJV54SkwnK%2FAyQY6pgF9Flh%2BpkJIU%2BgNjqJmOcbGrehMO6MfU9ySWeTk0o7UzuKCBeO0Cu6JSUiEBGpvT2O0rdmuym0i%2FBKmylcVTmNMvO60Eg7UBLKudLkMudVC2tyU6IwbmAs5SQkeQopAa84sqhDvwj7umEo1gvhpfMuLbKntuQ04lVrh45XgJPTGROxSh4LDEe%2FV%2FKfvxwWXkgsKzm7fDkhEEjkz2M%2FeSVzG97S8%2Bi9U&X-Amz-Signature=ef101ee0738976554b3893e05a8cffe04f7339144f25f761ebca06fc395a45e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

