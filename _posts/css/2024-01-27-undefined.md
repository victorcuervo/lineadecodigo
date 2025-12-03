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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKTAD5P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDli%2BXMJMqyNVcKQ0NMrkd7vuvfYlXf4muPs6D01JF%2BkwIhALCGTtoZBn6gmh9qgMggtlCyDR8ClOxmS1ZvLyOdICUkKv8DCDIQABoMNjM3NDIzMTgzODA1IgwHgynbaKRr2xGh6Ngq3AMhJsf4IuFqXGI%2FkRIMrDLk5qNFvSCr4fwU3pUr6tnwOproVxtWiC5W%2Fz74Nj%2FLbybDZdYjBS7oWx6CEaQzG2xTC3cyKdNMc4f%2FymKhhS6dWh8Yk%2B0UmtmiseqQYVd4ipOgS7gjcNklFUCLc9U2VorKSf%2BiBtF71bg3LFk7viGRe5SEQW1KIXHJiv5hHrSi0Z0YKCQY404%2BWbSn5plSLuybs2hxjdA0fiA%2FGZH0e0qXlhF22aCNfoRUdk6%2BacdeAq%2F6sIR1l%2F8h2wantQGKDHW3DYOvmS3bzTrGftqMfSBeZAFIAYvQSLLCE4ZVU7jFrCGLzRnBXU64Qr5OkBQ8XYxfCQ0E3M1%2BFwkHrwzSmu9x%2FRHeaIEr2UiIbqUQ5k6HSi%2FMmNvxSEHPipKgebIhZcLHoJ2dQ0ULWTPFJ0e4EUhk8B6yIqTc03IXLcpGHSQb4LlTBO8eUQ93n%2FmhVqfnIguly39PigPpFRGkQsjsJFAxD%2F6pE7ZfejtObyP9BjTo%2FSOphvqE7u9Hun8a9Kv2c6zI3bRpljzk1qOK7z31RbeDeTCcPf0P44AK9blB%2BXgqSzJnptS0n2bCTnIuP8x34D9oxgSogtnLKUm9oByPRibIBApxe5CNunXMU0i3jjCU28HJBjqkAXKdOW8NbrZPKwIiCwg%2BglQKmlvP9%2FU8%2B5I%2FsXaGjNvTGySQ%2BN%2B3OftOuPYZ3gmelkPwt6A1e9UGMtgBWQNUJcO08OYwip4CckXCzOTyb0ilWzXN8IAdPoyIuRcS6qrhWuDRJQqA7%2BosDEZKrmnTMPF8tZW5TMRPIxScepXXxvzOIFI4FYCZ23LQh19iD4HFf%2ByobljM34d8kUmgUrkHlwIpN7Sm&X-Amz-Signature=19b4698808631b54e93cd6455e8d05612bc13edd2332b630509d92eb7f63013d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKTAD5P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDli%2BXMJMqyNVcKQ0NMrkd7vuvfYlXf4muPs6D01JF%2BkwIhALCGTtoZBn6gmh9qgMggtlCyDR8ClOxmS1ZvLyOdICUkKv8DCDIQABoMNjM3NDIzMTgzODA1IgwHgynbaKRr2xGh6Ngq3AMhJsf4IuFqXGI%2FkRIMrDLk5qNFvSCr4fwU3pUr6tnwOproVxtWiC5W%2Fz74Nj%2FLbybDZdYjBS7oWx6CEaQzG2xTC3cyKdNMc4f%2FymKhhS6dWh8Yk%2B0UmtmiseqQYVd4ipOgS7gjcNklFUCLc9U2VorKSf%2BiBtF71bg3LFk7viGRe5SEQW1KIXHJiv5hHrSi0Z0YKCQY404%2BWbSn5plSLuybs2hxjdA0fiA%2FGZH0e0qXlhF22aCNfoRUdk6%2BacdeAq%2F6sIR1l%2F8h2wantQGKDHW3DYOvmS3bzTrGftqMfSBeZAFIAYvQSLLCE4ZVU7jFrCGLzRnBXU64Qr5OkBQ8XYxfCQ0E3M1%2BFwkHrwzSmu9x%2FRHeaIEr2UiIbqUQ5k6HSi%2FMmNvxSEHPipKgebIhZcLHoJ2dQ0ULWTPFJ0e4EUhk8B6yIqTc03IXLcpGHSQb4LlTBO8eUQ93n%2FmhVqfnIguly39PigPpFRGkQsjsJFAxD%2F6pE7ZfejtObyP9BjTo%2FSOphvqE7u9Hun8a9Kv2c6zI3bRpljzk1qOK7z31RbeDeTCcPf0P44AK9blB%2BXgqSzJnptS0n2bCTnIuP8x34D9oxgSogtnLKUm9oByPRibIBApxe5CNunXMU0i3jjCU28HJBjqkAXKdOW8NbrZPKwIiCwg%2BglQKmlvP9%2FU8%2B5I%2FsXaGjNvTGySQ%2BN%2B3OftOuPYZ3gmelkPwt6A1e9UGMtgBWQNUJcO08OYwip4CckXCzOTyb0ilWzXN8IAdPoyIuRcS6qrhWuDRJQqA7%2BosDEZKrmnTMPF8tZW5TMRPIxScepXXxvzOIFI4FYCZ23LQh19iD4HFf%2ByobljM34d8kUmgUrkHlwIpN7Sm&X-Amz-Signature=a7cb27fbfcfb926f26138ed7ec33f5c19704a6212d9215a7562ecaf0c8f6051c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

