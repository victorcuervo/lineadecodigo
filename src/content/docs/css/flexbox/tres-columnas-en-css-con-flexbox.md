---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VKSZMW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7c15NSN1hbuAfhgaUVE62IPJFLk6DZqQ7Ug5L52iyAAiBuftGgR76mk2WivI8E4SQ6pX6f9xR0pirirNssNIzjVir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMpjqM1GQHLxkzLF50KtwD1PZvXvA3TQWMww78D6UfQ63AWbGVNcC%2FyfoRIr4wN80rdH%2B%2FOqlvapbAeg6QPAsu8m%2BiwCBAlXjyCut2zqf8skoLrwDQu76sRHemK09kYce2HsO6Op8I8WBcZup%2BvnPfyxsn8ZJ1091Qak0n8Bp1MqIRH%2FGXxwzyOYYlwo9TXNgeWss5mzwYIFbCkvm91mTeU8x%2FawknxXIgQziIPxFyDZnxWnHzhrfP6PkO6QGIWaU94KdDz%2FusvPWhLL3A8VOsvBM3pusFxg8M59k6evxRLwKiFJUhNH5EpH%2FCAJvQmpw60iq3iIh6mwEuwHo0AXczIzFHOkZEjgxkwVMZLCRmV2CTxv8Nsee6mG5nB34Ur9QgqYdPwcfySov9q1aB1lxua7L6hrRR8qIcT2IzH4w0HbdF%2Fdxr0%2BTAItJmm40Ulxdi%2FQMJK6nhFZ4ZeC5qc6ZYX1vHv4V%2BszGUPxoE6tsKQ851KUp7fEXu7UfIsYOwhs%2FW5lQlKvSQH6Rwy6LFxVYlyjGLPoOLTjItyM%2BXqhgxVz%2BHNqm1aZmQwgBh7PQ9KeU96CDHj6PhVVbfPC70UAHCwhorSCy91NGzRZHAN79pV%2Fx0X47FNPrXxmV%2FSl62YaKZ%2B1m0KCBiX93UO74wyejNyQY6pgEUOO6K4BlErZ5wadSeRJMeIsD3fFfAm1c4NyVcVHLgqrfTgbsKmR0HjygA1jiv2qKMQsK0nu2nfvZuSGDaS7Nkrj6fYSNJ9FdY9ydR9qby3CQ%2BL%2Bh72LohWUvQIY9xL2wSav6paNQtjTwXbaCq%2BRqUrqS9bttwxFOOJMFtG503EcG5puDp6bpLItoxXt71bxSxCmqQmAii%2B9rRxn8%2FmbB%2BIMQilzO0&X-Amz-Signature=4dd457bbe482352d59dc864e535fdb7bd9c3e30c58137035ab8bfd55fe6e2b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662VKSZMW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7c15NSN1hbuAfhgaUVE62IPJFLk6DZqQ7Ug5L52iyAAiBuftGgR76mk2WivI8E4SQ6pX6f9xR0pirirNssNIzjVir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMpjqM1GQHLxkzLF50KtwD1PZvXvA3TQWMww78D6UfQ63AWbGVNcC%2FyfoRIr4wN80rdH%2B%2FOqlvapbAeg6QPAsu8m%2BiwCBAlXjyCut2zqf8skoLrwDQu76sRHemK09kYce2HsO6Op8I8WBcZup%2BvnPfyxsn8ZJ1091Qak0n8Bp1MqIRH%2FGXxwzyOYYlwo9TXNgeWss5mzwYIFbCkvm91mTeU8x%2FawknxXIgQziIPxFyDZnxWnHzhrfP6PkO6QGIWaU94KdDz%2FusvPWhLL3A8VOsvBM3pusFxg8M59k6evxRLwKiFJUhNH5EpH%2FCAJvQmpw60iq3iIh6mwEuwHo0AXczIzFHOkZEjgxkwVMZLCRmV2CTxv8Nsee6mG5nB34Ur9QgqYdPwcfySov9q1aB1lxua7L6hrRR8qIcT2IzH4w0HbdF%2Fdxr0%2BTAItJmm40Ulxdi%2FQMJK6nhFZ4ZeC5qc6ZYX1vHv4V%2BszGUPxoE6tsKQ851KUp7fEXu7UfIsYOwhs%2FW5lQlKvSQH6Rwy6LFxVYlyjGLPoOLTjItyM%2BXqhgxVz%2BHNqm1aZmQwgBh7PQ9KeU96CDHj6PhVVbfPC70UAHCwhorSCy91NGzRZHAN79pV%2Fx0X47FNPrXxmV%2FSl62YaKZ%2B1m0KCBiX93UO74wyejNyQY6pgEUOO6K4BlErZ5wadSeRJMeIsD3fFfAm1c4NyVcVHLgqrfTgbsKmR0HjygA1jiv2qKMQsK0nu2nfvZuSGDaS7Nkrj6fYSNJ9FdY9ydR9qby3CQ%2BL%2Bh72LohWUvQIY9xL2wSav6paNQtjTwXbaCq%2BRqUrqS9bttwxFOOJMFtG503EcG5puDp6bpLItoxXt71bxSxCmqQmAii%2B9rRxn8%2FmbB%2BIMQilzO0&X-Amz-Signature=5499365fbbce85726033146ed7594f9ef73340ffa533fb222e14cdeb9911f86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

