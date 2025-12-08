---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EQL2Q5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM9l0Ez72sjWJp7Q%2BTBqWg19xxB3gJRKNG92ckqd5hgwIgIqTiQZKYMOCAAgn85UYhh5VnJSOXS849lEdo1o4C79UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2dXt8KIzbLBUDW9SrcAwinyJ2u9fU26J9ujYZnqhvHvw5QnQAls%2BLsD%2FAeS1rIavcEEeC6eVVhjhOwSDGQDrrCLmR2fuNSI%2FtuWB7SgQoW0QI1dWpGYoqBHTUygGxPcVCSZQXC%2B1oIFORyIJJdznccHnJjDSirMm1QXlF6yN54OamnfBMJKqJGA9Vu3DafCtQpSHyTe4ndxbQxS83gMzmsTjU915eK2KGuybv%2BrGMnVYxaAY2GqNpcQUu2RLYDjRnGySDKFTLBikoylofsm%2BGZlE2yizlw%2Fqas%2BG2wgjmmkPkeX5RbEmrvkwskE00Zke7Dmvl%2FXiFf8rFGqT%2BJPw%2BIyhDNr64N%2BrDOt1RO1PYCmaJ%2FnYphmxtMwQ3ATZ8ttcoJ5dfTr8YrM0s%2BMh5PTNvsnVLFCjBRHWiXjwfIkbQNEl6a5JEkNhrfzNBsd0PNio9GSOw3lGFt7o4r7WYGpNGi96CyHELI7AlM2F5buUinEaCRPCl9XaF6oFKSXx6MFBlrOvo2OKSuG%2BcPyxWM41bfUbXuektwhEB9GYDHq6LVTsrGnupyi%2BXnrirIO4uJbxX85GSgUV7%2BZKluEr%2FxyMIEjqTEboutAwqPUK464fSV7ar6R2hXEO7LcQ2imF%2Fei7S%2B%2BqmGdFPXjznCMJLR2ckGOqUBpqG1jLwgQn54cNLtRd1TLIq%2Bbc9tFX3J682p6XEQdKh3eYkkZ31OdAV4ZWynPGtassmMl41hx3U%2BqB%2BMyi7yNzHYnLUPQma5E97hs28PHcwKl3VN9viGwV5qYo8wwPgoY04OKPhM%2F3ZwjM7fjCuae%2BbAeLTMTFPlp2%2B6AqkOvV4KwXIiujmZs9HRrtqfAhuhVQPxCAdBQHIn5MGobtrlF0swCZkJ&X-Amz-Signature=5b0bda4241fdf1c51492f191a22dfe7347e0a9cc453d415c9a14995e901ecc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EQL2Q5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM9l0Ez72sjWJp7Q%2BTBqWg19xxB3gJRKNG92ckqd5hgwIgIqTiQZKYMOCAAgn85UYhh5VnJSOXS849lEdo1o4C79UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2dXt8KIzbLBUDW9SrcAwinyJ2u9fU26J9ujYZnqhvHvw5QnQAls%2BLsD%2FAeS1rIavcEEeC6eVVhjhOwSDGQDrrCLmR2fuNSI%2FtuWB7SgQoW0QI1dWpGYoqBHTUygGxPcVCSZQXC%2B1oIFORyIJJdznccHnJjDSirMm1QXlF6yN54OamnfBMJKqJGA9Vu3DafCtQpSHyTe4ndxbQxS83gMzmsTjU915eK2KGuybv%2BrGMnVYxaAY2GqNpcQUu2RLYDjRnGySDKFTLBikoylofsm%2BGZlE2yizlw%2Fqas%2BG2wgjmmkPkeX5RbEmrvkwskE00Zke7Dmvl%2FXiFf8rFGqT%2BJPw%2BIyhDNr64N%2BrDOt1RO1PYCmaJ%2FnYphmxtMwQ3ATZ8ttcoJ5dfTr8YrM0s%2BMh5PTNvsnVLFCjBRHWiXjwfIkbQNEl6a5JEkNhrfzNBsd0PNio9GSOw3lGFt7o4r7WYGpNGi96CyHELI7AlM2F5buUinEaCRPCl9XaF6oFKSXx6MFBlrOvo2OKSuG%2BcPyxWM41bfUbXuektwhEB9GYDHq6LVTsrGnupyi%2BXnrirIO4uJbxX85GSgUV7%2BZKluEr%2FxyMIEjqTEboutAwqPUK464fSV7ar6R2hXEO7LcQ2imF%2Fei7S%2B%2BqmGdFPXjznCMJLR2ckGOqUBpqG1jLwgQn54cNLtRd1TLIq%2Bbc9tFX3J682p6XEQdKh3eYkkZ31OdAV4ZWynPGtassmMl41hx3U%2BqB%2BMyi7yNzHYnLUPQma5E97hs28PHcwKl3VN9viGwV5qYo8wwPgoY04OKPhM%2F3ZwjM7fjCuae%2BbAeLTMTFPlp2%2B6AqkOvV4KwXIiujmZs9HRrtqfAhuhVQPxCAdBQHIn5MGobtrlF0swCZkJ&X-Amz-Signature=b1cb094df5c2b03a37b9e189694e5bebb3b2b7603fe9ffe04b0ea385b9fc6dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

