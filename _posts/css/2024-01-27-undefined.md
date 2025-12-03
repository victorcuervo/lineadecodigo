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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPPC3IC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCf6VRF34t6iqlV9ESbmk%2BgO2Y5FZs5Oel96SCJ2At%2BPgIhAOeYY3djUKZ6KGyJHHVvpXiJZy1mOCEcHtSlfLxphNwjKv8DCDIQABoMNjM3NDIzMTgzODA1IgwLfOORXSg%2FlSpnoF0q3APigyoyGFJsl9t5H%2FUyjuysnRNl2UaNXf%2BEh1M2%2Bsu0n50qH%2FhYsH1TurPasTTOAERVGnqukI6rilGJF3Gas82gbzZ0ntBYtOFJVwF%2BdFravuNXaI5kZGM0R5ocqtuDuakQNBsOnORG3k0MnV9DjjThU%2FNhF8rA5ySwMqvcZqn%2BaWHArTutN9M91i3sTnFzidWLAbUJPKe6JWPp0pT%2BYaey4W%2BSBacJMwNnyCRP4jyPBheGzFyv7lpHDZ8D50vwYkLDONHQdC5Ftl4trvK0HRoKH5SS2VEg5uI7lLTFFGIt928zFx8TKkO%2FpRWbOFqjmbr5Hzn%2BdbE2daG320rG52GKkPme5zKU1Z9FdoyCMzzX7YA4Z7d80cqkwJRg4lboTnD2f9SDV20dcv8BXPYE32Hxu5peSK9avGQg9UDmwidh%2FVblpjuj%2BZi75SZaqm673BCGtfkAahw1KK4jCPcNwnFVaTpCKDT9%2FLRMjJScbM8beL64f9yzqpJ1CCgVB3PXVItdc5clmBisS1q8w1oKRXta6zbIC373xArnyRv6Ln6aAreA0pGl6CiclzWfywoj4RjpV5nOarHNmD8n%2FJB9fXyccE96gXuPoJdZ%2B7gm7ndoF3%2F26Aed0vPz6P%2FdMDDb2sHJBjqkAafOuim8TNL8orq34YV%2FTu6r8hNl2dMOMOOP3Tdf%2B9SzYYnpm1h8UBkEwjvcQ2M6EivowKaytLKWw0U898If8cw00xNULMbZXuI0A27rTpYzZJCvGsMe3P74n%2FYCre9cnmxwDQvOI2KTS8HgYpWMrwlDOwFnX7ruMpRGVH1OdVMnpVvJWqQOhLfYEXbajAoPNiIvbeSrUCSpPW6Dxed%2BlVYU4UKL&X-Amz-Signature=61980cc331ec73cc9527eb3e47a506bacbc60cf387b8762b74dd75ccbf8c64f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPPC3IC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCf6VRF34t6iqlV9ESbmk%2BgO2Y5FZs5Oel96SCJ2At%2BPgIhAOeYY3djUKZ6KGyJHHVvpXiJZy1mOCEcHtSlfLxphNwjKv8DCDIQABoMNjM3NDIzMTgzODA1IgwLfOORXSg%2FlSpnoF0q3APigyoyGFJsl9t5H%2FUyjuysnRNl2UaNXf%2BEh1M2%2Bsu0n50qH%2FhYsH1TurPasTTOAERVGnqukI6rilGJF3Gas82gbzZ0ntBYtOFJVwF%2BdFravuNXaI5kZGM0R5ocqtuDuakQNBsOnORG3k0MnV9DjjThU%2FNhF8rA5ySwMqvcZqn%2BaWHArTutN9M91i3sTnFzidWLAbUJPKe6JWPp0pT%2BYaey4W%2BSBacJMwNnyCRP4jyPBheGzFyv7lpHDZ8D50vwYkLDONHQdC5Ftl4trvK0HRoKH5SS2VEg5uI7lLTFFGIt928zFx8TKkO%2FpRWbOFqjmbr5Hzn%2BdbE2daG320rG52GKkPme5zKU1Z9FdoyCMzzX7YA4Z7d80cqkwJRg4lboTnD2f9SDV20dcv8BXPYE32Hxu5peSK9avGQg9UDmwidh%2FVblpjuj%2BZi75SZaqm673BCGtfkAahw1KK4jCPcNwnFVaTpCKDT9%2FLRMjJScbM8beL64f9yzqpJ1CCgVB3PXVItdc5clmBisS1q8w1oKRXta6zbIC373xArnyRv6Ln6aAreA0pGl6CiclzWfywoj4RjpV5nOarHNmD8n%2FJB9fXyccE96gXuPoJdZ%2B7gm7ndoF3%2F26Aed0vPz6P%2FdMDDb2sHJBjqkAafOuim8TNL8orq34YV%2FTu6r8hNl2dMOMOOP3Tdf%2B9SzYYnpm1h8UBkEwjvcQ2M6EivowKaytLKWw0U898If8cw00xNULMbZXuI0A27rTpYzZJCvGsMe3P74n%2FYCre9cnmxwDQvOI2KTS8HgYpWMrwlDOwFnX7ruMpRGVH1OdVMnpVvJWqQOhLfYEXbajAoPNiIvbeSrUCSpPW6Dxed%2BlVYU4UKL&X-Amz-Signature=7b3efb49a093a218f4fa748025b3ea38caab80ac3074df994981c5834be79b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

