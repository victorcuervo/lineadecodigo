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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS5KZ4Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDq%2BRrV22XbFhA8ZaSwtZbwl6vrSFxvvkWpj2YJbBVcUAIgY6ShkGeeBYvm95Xq2iu%2FglTNbKearfdXMbq6Q%2B4zqu4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLG3%2FC%2BeZ4uhVOhkRyrcAywFwxhqrZORu6YGY2KjjnNf%2BgkNKjlU41qyHTwbAtTcAywZ2KkcmoaCjBUN7Qew%2Fmu1kF3tXug82IbAcLknShv8v1opUzUdqM6QMtvoyfhpbKUKrWzVgwFyCGGvJCJ%2BHEfRCiP3SyyGxV34hVwW%2BgAt%2F7ks3CdBYHdepw%2BNW1HDtBlWJ05OJBJkByqw42GTwbfTBdrpe5aGEkj9rz5UXV1xcjVKFNGcoLxAqyYkZ2Q1B2oJG3fyLdw5Vp3jcKFDKTpqAEnCCNXIIuMDeZERiBmiUSqXOVVGwla1poMyzwyB6L5Qle60g4y9qqm56MitB3o5ofxF5k3G70cyocMrjxqermiAi8jvCz194yxdhpEMJqE%2Fik%2BHFA9vQhX1Z%2BFn%2FJrX4CbFS4fy%2FjDf3li0zUPjqgntvtJl8N9vZtvhI0GIRhvqBU2fAYT4%2FbkKQEDk6Blg%2Fjy2TrGJKYAJnu5qvGzxH33SHufJ5z1%2Fyl0Bfx263z22j%2BI0Fyy2%2F0x4AG2m3s9aFX4GoLDucNaPn%2F52qX%2BjogLP%2FcNmOFHncAb%2BAD0Mp1x6QIJpuHw%2B1q4fuWEt2KTkcbQN8EETruJmMrNqKXaGwF8tU5QbLn6IrTQnY6hVL1pgs9KoErkp0%2FDcMI3qwMkGOqUB%2Fnz1bima7eVtccHdJa2FHQd8zigCYY6Jxbt4fKZfUyNQWn%2FYYaRG224uwe3XM1WWq2ViDu4uNUtfR7d3irGAJ3lxVakay8zG8y2zCYUovnK76bhba3GxBKB1SoFvH%2F5J7B7h7XD%2BNUj6yNIFjC27%2BhJmte%2FV5o5k3Vw%2FuZCIi7xYCtbQEhoBnksc2wzxUBkYprRXdZ4nv7RTk66%2FIJQRcep4BAPv&X-Amz-Signature=1f49ab9c39d0c4b103039d972e820fde9ccc79ed0e12bb5a9a35716fdcb84d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRS5KZ4Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDq%2BRrV22XbFhA8ZaSwtZbwl6vrSFxvvkWpj2YJbBVcUAIgY6ShkGeeBYvm95Xq2iu%2FglTNbKearfdXMbq6Q%2B4zqu4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLG3%2FC%2BeZ4uhVOhkRyrcAywFwxhqrZORu6YGY2KjjnNf%2BgkNKjlU41qyHTwbAtTcAywZ2KkcmoaCjBUN7Qew%2Fmu1kF3tXug82IbAcLknShv8v1opUzUdqM6QMtvoyfhpbKUKrWzVgwFyCGGvJCJ%2BHEfRCiP3SyyGxV34hVwW%2BgAt%2F7ks3CdBYHdepw%2BNW1HDtBlWJ05OJBJkByqw42GTwbfTBdrpe5aGEkj9rz5UXV1xcjVKFNGcoLxAqyYkZ2Q1B2oJG3fyLdw5Vp3jcKFDKTpqAEnCCNXIIuMDeZERiBmiUSqXOVVGwla1poMyzwyB6L5Qle60g4y9qqm56MitB3o5ofxF5k3G70cyocMrjxqermiAi8jvCz194yxdhpEMJqE%2Fik%2BHFA9vQhX1Z%2BFn%2FJrX4CbFS4fy%2FjDf3li0zUPjqgntvtJl8N9vZtvhI0GIRhvqBU2fAYT4%2FbkKQEDk6Blg%2Fjy2TrGJKYAJnu5qvGzxH33SHufJ5z1%2Fyl0Bfx263z22j%2BI0Fyy2%2F0x4AG2m3s9aFX4GoLDucNaPn%2F52qX%2BjogLP%2FcNmOFHncAb%2BAD0Mp1x6QIJpuHw%2B1q4fuWEt2KTkcbQN8EETruJmMrNqKXaGwF8tU5QbLn6IrTQnY6hVL1pgs9KoErkp0%2FDcMI3qwMkGOqUB%2Fnz1bima7eVtccHdJa2FHQd8zigCYY6Jxbt4fKZfUyNQWn%2FYYaRG224uwe3XM1WWq2ViDu4uNUtfR7d3irGAJ3lxVakay8zG8y2zCYUovnK76bhba3GxBKB1SoFvH%2F5J7B7h7XD%2BNUj6yNIFjC27%2BhJmte%2FV5o5k3Vw%2FuZCIi7xYCtbQEhoBnksc2wzxUBkYprRXdZ4nv7RTk66%2FIJQRcep4BAPv&X-Amz-Signature=123ce1a76c6e5a4b6c1e3b654ed06835361708aea581b4c6f56404562c8b9995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

