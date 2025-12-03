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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3QPWX5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFEb97HyAQKi2QseAKRrPe%2B1JlNPTpv6bEa3lzQNPdKeAiEA5zx247PRjmfH9DZxsUfkwQaF2yZZ5vkefmn5GKjBw2Aq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMr8fREB8i0E024l9SrcAygU1nZ6Xa4ct7%2BvjlkcIEfJHC5qu4K8oNsaFG8xiDNkkkfTnu0D9%2FR7gPhN1f4B0PF9wTa66dTj6l%2BgyRZhbI8D7%2BqP7v5p%2FoqX8BFTBV4lDL0QdEJcqRic83QALwVK%2BU3nz%2FzdmymZJac5iwP%2Brm4pQRY%2FfeWdlpUgWZP44n9DEvsaCb8j6i9qSDiDu8LEZLUZpbfohZ6rndAZO6gXQ9HJZqSpNAEh6sKcdeIk65v%2BVMkQRiomFxDxnnk3PyNj47JnqTbatMAN0QaRD%2BMrG3sZrYdtxaviAe%2FNtLq12yZhzdFO0e0b1TptEo2%2BBqQEkpNMyAqfWPmuOXHTeYeBf1J%2FiwECO36cISsyzmO5BeuUo5CHf%2BTuub655eg%2FPpZi3s6BAG2cAlYCVfrr2rNirn8xscbHoPbN6TmiEbPkOi8OWIg5HWXb4QMjZcP%2Bs%2Bw%2BDJBYxEKVhOpy9gYwqbSm7n8%2FhOG2mAhzaJ6nhCA3LXrt%2BQuHtmu52cH57iYcbnwKGNFiv1Coyu70C%2BEzxLM0RchxAQrBfvdqoXVmdVV73EewSfczdiyxhQFezxcsEJjMqkZnkpQekZJb5OopQrcOO0KLHe6kALxHLW8I0%2BJ8eNXWkSm0FFaGa5TK2FSgMK6lwckGOqUBM70l8S10Fqkdak8xUrqxrZlikXVQsoUQADz4RoofJSbhA4hXpEi8Ohap7jNFJzkxC2X353PRwMYnDqEelxv5ajMGQBaTgsIJrnWFb0fsKSPB9DbKVRwKtII9xQL8ZTjtF%2B9bs0rCivzy2BVxWIzoGOzvk7oH9Mi38oap1jg2luIffCb39So%2F5cIyI7slNBPhC2Y285QZcGtgX4NhxLRpqBW8Si4b&X-Amz-Signature=6f5eb4f447ce20ba1e24aed50911699a5b01106df3bb828a0d31d66bbd04f15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3QPWX5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFEb97HyAQKi2QseAKRrPe%2B1JlNPTpv6bEa3lzQNPdKeAiEA5zx247PRjmfH9DZxsUfkwQaF2yZZ5vkefmn5GKjBw2Aq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMr8fREB8i0E024l9SrcAygU1nZ6Xa4ct7%2BvjlkcIEfJHC5qu4K8oNsaFG8xiDNkkkfTnu0D9%2FR7gPhN1f4B0PF9wTa66dTj6l%2BgyRZhbI8D7%2BqP7v5p%2FoqX8BFTBV4lDL0QdEJcqRic83QALwVK%2BU3nz%2FzdmymZJac5iwP%2Brm4pQRY%2FfeWdlpUgWZP44n9DEvsaCb8j6i9qSDiDu8LEZLUZpbfohZ6rndAZO6gXQ9HJZqSpNAEh6sKcdeIk65v%2BVMkQRiomFxDxnnk3PyNj47JnqTbatMAN0QaRD%2BMrG3sZrYdtxaviAe%2FNtLq12yZhzdFO0e0b1TptEo2%2BBqQEkpNMyAqfWPmuOXHTeYeBf1J%2FiwECO36cISsyzmO5BeuUo5CHf%2BTuub655eg%2FPpZi3s6BAG2cAlYCVfrr2rNirn8xscbHoPbN6TmiEbPkOi8OWIg5HWXb4QMjZcP%2Bs%2Bw%2BDJBYxEKVhOpy9gYwqbSm7n8%2FhOG2mAhzaJ6nhCA3LXrt%2BQuHtmu52cH57iYcbnwKGNFiv1Coyu70C%2BEzxLM0RchxAQrBfvdqoXVmdVV73EewSfczdiyxhQFezxcsEJjMqkZnkpQekZJb5OopQrcOO0KLHe6kALxHLW8I0%2BJ8eNXWkSm0FFaGa5TK2FSgMK6lwckGOqUBM70l8S10Fqkdak8xUrqxrZlikXVQsoUQADz4RoofJSbhA4hXpEi8Ohap7jNFJzkxC2X353PRwMYnDqEelxv5ajMGQBaTgsIJrnWFb0fsKSPB9DbKVRwKtII9xQL8ZTjtF%2B9bs0rCivzy2BVxWIzoGOzvk7oH9Mi38oap1jg2luIffCb39So%2F5cIyI7slNBPhC2Y285QZcGtgX4NhxLRpqBW8Si4b&X-Amz-Signature=239cf6b040287ea591a9363d4953af6cf3c62955b38323b1ed8cbad24228bd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

