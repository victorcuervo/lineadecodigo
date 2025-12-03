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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4EPIJB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHAqpHjrlx2DVkC8vKGEolQjSkztu0RggXbA2TiP1dULAiBArYrxtNP4v6AB2z85bnPpMs%2Ff%2F4ltrxFtPqMt5PENJSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMKTiv2bMoh%2B0pVW9NKtwDk6Sa5hizKUjPZ8qj7Syr6PBv8m%2F5OEWi%2FS7cct2wTEw6OZRn3qRBEGg6kGOrk6AraKVg0MewdH0n4swYlNFRr05CX5rC1e%2Bf%2BKXKT7mMFvmreN7G%2B%2BOMmrvuczR4fjaEg62T1QBY8bo4heaLz3r0Lf%2B5963D0U0fziMzfqBi%2FoSXsvBC6BRQhi8v9TLA9Q1l5df4BmU3%2FC3r5LpmGY3BoGjsI6gw0IWfzh1jAXLPV4tFQTw6M8yKQs7Jzty%2BMTIfNbpSFqGLDUcWE0MixNxc1zoNfdbLZMNDzpqSKl5ZeHYvLdpdfGQs%2Bt6RqVwsRJ8r8nCO34xZKUAoGv0iMYoG27bTKApJVR1z4rMgZYNG502t0TUoKpdzi52XVNFKkwOEMHJowiK0XQ%2Bn0fTzk%2BVOJ24%2BohhmtIK3S4PTS7sMOBjCNBbf0ls%2FIJOTS95Cv5UOpznJwOWMD9EM7vk0GMJEscmPzMJGDHPLRukuGHmSZgZnWfWm9ulK3PHzOQO0OdIfWuwGfUcHJQgFeU4n81jpDVPolTFPjbjGcEUh9%2Bps59njggI9uWJUrJ382rHkxXeWai%2B4dqCL%2BZCLQ5fJ1g8JFeOZtr2wr%2FuTlPlNGsmarGRPAAgVFcYIXlvcZTIw0va%2FyQY6pgEb0bkl9CdyIA8pwFsyjdYdmDu2fnvGutzCFWkMQHV4hPEp5YRzeQB9zwT8SuGvqAmtAcFVXCrTC0G5r9KtLtRoEvGNIdaCooUnj0f7LPRhzgFcdj%2BYFJ1AG6AYRkJopkaJsqsVHpvtpIUZprRpPmxGOu6pq0hEiIwC6DgdSg6IbyGrw62mjk9CPhyPU%2F2Qxm9Do1yQ0tTwRbXC6BWxFx5TcYmZsHWL&X-Amz-Signature=d93b1db91c0e32882f35d96bb8b28eb8fc7bb1c45f82cb7f6511783ab3e6e0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4EPIJB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHAqpHjrlx2DVkC8vKGEolQjSkztu0RggXbA2TiP1dULAiBArYrxtNP4v6AB2z85bnPpMs%2Ff%2F4ltrxFtPqMt5PENJSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMKTiv2bMoh%2B0pVW9NKtwDk6Sa5hizKUjPZ8qj7Syr6PBv8m%2F5OEWi%2FS7cct2wTEw6OZRn3qRBEGg6kGOrk6AraKVg0MewdH0n4swYlNFRr05CX5rC1e%2Bf%2BKXKT7mMFvmreN7G%2B%2BOMmrvuczR4fjaEg62T1QBY8bo4heaLz3r0Lf%2B5963D0U0fziMzfqBi%2FoSXsvBC6BRQhi8v9TLA9Q1l5df4BmU3%2FC3r5LpmGY3BoGjsI6gw0IWfzh1jAXLPV4tFQTw6M8yKQs7Jzty%2BMTIfNbpSFqGLDUcWE0MixNxc1zoNfdbLZMNDzpqSKl5ZeHYvLdpdfGQs%2Bt6RqVwsRJ8r8nCO34xZKUAoGv0iMYoG27bTKApJVR1z4rMgZYNG502t0TUoKpdzi52XVNFKkwOEMHJowiK0XQ%2Bn0fTzk%2BVOJ24%2BohhmtIK3S4PTS7sMOBjCNBbf0ls%2FIJOTS95Cv5UOpznJwOWMD9EM7vk0GMJEscmPzMJGDHPLRukuGHmSZgZnWfWm9ulK3PHzOQO0OdIfWuwGfUcHJQgFeU4n81jpDVPolTFPjbjGcEUh9%2Bps59njggI9uWJUrJ382rHkxXeWai%2B4dqCL%2BZCLQ5fJ1g8JFeOZtr2wr%2FuTlPlNGsmarGRPAAgVFcYIXlvcZTIw0va%2FyQY6pgEb0bkl9CdyIA8pwFsyjdYdmDu2fnvGutzCFWkMQHV4hPEp5YRzeQB9zwT8SuGvqAmtAcFVXCrTC0G5r9KtLtRoEvGNIdaCooUnj0f7LPRhzgFcdj%2BYFJ1AG6AYRkJopkaJsqsVHpvtpIUZprRpPmxGOu6pq0hEiIwC6DgdSg6IbyGrw62mjk9CPhyPU%2F2Qxm9Do1yQ0tTwRbXC6BWxFx5TcYmZsHWL&X-Amz-Signature=dcdb550a89786d1cab60697abea5aef170d42e1467b96ff5d2d6c1124b26dcd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

