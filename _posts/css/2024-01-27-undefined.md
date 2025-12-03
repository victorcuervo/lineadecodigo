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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTG4MRZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDnpsF%2FsJ2qoTxkoVi3dlDFsxwfSqUwP2JydP%2FKN3gQfgIgMa6M9VlXB4yVVEvyUCn84gn7WFHSr4my1H%2BnpngxxgYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKJ4GKWDIGP0tdOQgSrcA7RQU3p5uzy7KVZfWpkSqQYMGIcUYw7bD%2FrKaQss31yhK00qNCJynNLpYYDVYCwQnPfuuMV9uyTFyjkLRRQ63LlMdWCmPaH9vZPYIa24looE5KxiHcpTJXEB0GwH81jgLNADVvXj1RfU2sQGR8LVQvH1qoYY1MewNR2KVR%2FbWKMu8dYpcEM2cdKGIBmm6%2F9dchSaU9h5hnLBJ3%2BGo3%2F8aQ%2FyiPgZa1u414krXg7m0TQfTiwfg47GUcdBeeG0oT%2FO8%2BrJ2QvfyQfpsk3ep4YAJztbGIxJI5eaVqnK3dIgpjCGQAVgpHzYUCy7ZVFTpjuXbS16GCkavlBC3%2FbevRycTv3OIa47TKZFsO9wZy43WSaSeWgS33epjN7DI0n2TYkEkTbbPkCR4S1GabS4i2pD4aYWQLbGkEjQP3H9kZDDCvGxRrOSDdcSQ4zNrgbWJfTK%2Bd3vrzYaPvSh2BywNXom6%2BMv41%2B%2FR7gaiGevPBu7Ppy9zlM7g7BUCoYVCUBnHD42ryw8dGmO4uAMjMFjs6PeGGudlFnw2utYk2T2ASSMipC5h8fXCEDFC5ekcyPCcX8qPNcuoUuohE2tPhvP7dE9q5AMqv5Z0kyBeI6ORU2Swt7i%2BPiSpLCIsnBqvwVrMIWmwckGOqUB7ybaBe4jwXS4JYoLf8hzkmBTog%2FsiUZxHrCnYevgW5AVB%2BLFRhPBIuaFdG%2F5ixhe%2BU4alLBCjQ%2FhC6a%2FVYFAl5zyWg%2FkcO%2BB%2BPdJgT9Ja82qSafHb1BGaFIfU%2F%2B6wSJWKram49BsE7yVk5NvE31hupAc7%2BRm9jgQoiw3jdABeG361FfSKPDjxeu3tPgiV8WmbMQr5fEJ%2FyDeN%2Fll4OlpVzykWu8%2B&X-Amz-Signature=01966b2fe14ef4296442db6cba0084aff55968c914011b82de17541108a8941f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTG4MRZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDnpsF%2FsJ2qoTxkoVi3dlDFsxwfSqUwP2JydP%2FKN3gQfgIgMa6M9VlXB4yVVEvyUCn84gn7WFHSr4my1H%2BnpngxxgYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKJ4GKWDIGP0tdOQgSrcA7RQU3p5uzy7KVZfWpkSqQYMGIcUYw7bD%2FrKaQss31yhK00qNCJynNLpYYDVYCwQnPfuuMV9uyTFyjkLRRQ63LlMdWCmPaH9vZPYIa24looE5KxiHcpTJXEB0GwH81jgLNADVvXj1RfU2sQGR8LVQvH1qoYY1MewNR2KVR%2FbWKMu8dYpcEM2cdKGIBmm6%2F9dchSaU9h5hnLBJ3%2BGo3%2F8aQ%2FyiPgZa1u414krXg7m0TQfTiwfg47GUcdBeeG0oT%2FO8%2BrJ2QvfyQfpsk3ep4YAJztbGIxJI5eaVqnK3dIgpjCGQAVgpHzYUCy7ZVFTpjuXbS16GCkavlBC3%2FbevRycTv3OIa47TKZFsO9wZy43WSaSeWgS33epjN7DI0n2TYkEkTbbPkCR4S1GabS4i2pD4aYWQLbGkEjQP3H9kZDDCvGxRrOSDdcSQ4zNrgbWJfTK%2Bd3vrzYaPvSh2BywNXom6%2BMv41%2B%2FR7gaiGevPBu7Ppy9zlM7g7BUCoYVCUBnHD42ryw8dGmO4uAMjMFjs6PeGGudlFnw2utYk2T2ASSMipC5h8fXCEDFC5ekcyPCcX8qPNcuoUuohE2tPhvP7dE9q5AMqv5Z0kyBeI6ORU2Swt7i%2BPiSpLCIsnBqvwVrMIWmwckGOqUB7ybaBe4jwXS4JYoLf8hzkmBTog%2FsiUZxHrCnYevgW5AVB%2BLFRhPBIuaFdG%2F5ixhe%2BU4alLBCjQ%2FhC6a%2FVYFAl5zyWg%2FkcO%2BB%2BPdJgT9Ja82qSafHb1BGaFIfU%2F%2B6wSJWKram49BsE7yVk5NvE31hupAc7%2BRm9jgQoiw3jdABeG361FfSKPDjxeu3tPgiV8WmbMQr5fEJ%2FyDeN%2Fll4OlpVzykWu8%2B&X-Amz-Signature=6972db778d6c338d248bff0d40166bee098a8bbd00eda4bab747891c06264967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

