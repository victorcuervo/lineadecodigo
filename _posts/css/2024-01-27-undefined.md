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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UUV6NB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD5EtUGW1s5DpkVELzgqmJhKA5jRewaL1M1TNtb6HlVRgIgYZemm507RuYIol1TXHiAli4efzolqAFbzOom4j3jv3Aq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC5qPA0W1Tc%2Br3IgIyrcAzusc8tNkkr34anI2gBNzyw7w4LAMvb6Xp4eQ8zPqyz9YAy%2BEAyzPGWtO6dxHUVz7uk1WVZ3uHXRtTrErPA3alOALhDYBzTAdGlbz7yvv%2Bn2KtvJ0sHI1OP061ZV0y7saTrJwggAL1gpZCNNaxUVXGbQYAewRnIMoIblVyMWACfubfFhFYRa3A12%2FGLcMLLKuGHiDsfttyFdAPgLih4htCkw00MVdOxZtghMR%2F46YCjE%2FKpgesnt5Q%2BRK%2FKQUnLxnpFQF2oqXdDnrUY907wT0ENW1JKTAIx5Uim1GBu92Anl596vmMhMrxxp4R9Fd9VE9EZoi4d8JhQDoAJMo80Rm2lgVw5dQTgdZ8MlSnJ7yIxU57%2BkPtEsn95XzuU0zVaBrxekqkLZ3RHZ7AeBe37YLZ%2BtXADrUCZZ165Rk%2BjOQFVjcb6WtRnOOZ3%2BxnX7DbRjhPQiv2Brrk1vxYaCXtSnkg2J8E0okBTuWpYQR5fEsJuVvc%2Fj5zVnW2z9ORa1CexfYefP943dLxc0laUpgiJ7%2BREGkRtQmDIz1%2Bp2LE6TcUqD5WPfDHU%2BzcaipXW8iDFZDAnRAwNmAf9qSukGY3G4IWdN3tUC0BPgmzqT0l0Jak355tnt3BVLDSlm0fQEMJHNwMkGOqUBAmLNllYvF1woOLZsH5HNkir%2F%2BynM%2B%2FM5mtnCgjI4ZEN1bGJaixmmVRt9%2F3UjTYm7Li8fTX%2FCDTltq2DSB9HqO4sCB2ejngUkp1NooSLGCMZi4ZzISC2ilQA1wFadEi92L2QvZ0TMCs2iTVDfrzexJniobLDL3l9TOM9eTKx6c53EmF71B0fsXsxrb8lAG4E1HHqljLpS9%2BIGLpXD5s7omVV8J9%2BD&X-Amz-Signature=d197ecac6dfe44c8220b50c6076310587b8a933ff08b3ff175f8b28fb814737f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UUV6NB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD5EtUGW1s5DpkVELzgqmJhKA5jRewaL1M1TNtb6HlVRgIgYZemm507RuYIol1TXHiAli4efzolqAFbzOom4j3jv3Aq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC5qPA0W1Tc%2Br3IgIyrcAzusc8tNkkr34anI2gBNzyw7w4LAMvb6Xp4eQ8zPqyz9YAy%2BEAyzPGWtO6dxHUVz7uk1WVZ3uHXRtTrErPA3alOALhDYBzTAdGlbz7yvv%2Bn2KtvJ0sHI1OP061ZV0y7saTrJwggAL1gpZCNNaxUVXGbQYAewRnIMoIblVyMWACfubfFhFYRa3A12%2FGLcMLLKuGHiDsfttyFdAPgLih4htCkw00MVdOxZtghMR%2F46YCjE%2FKpgesnt5Q%2BRK%2FKQUnLxnpFQF2oqXdDnrUY907wT0ENW1JKTAIx5Uim1GBu92Anl596vmMhMrxxp4R9Fd9VE9EZoi4d8JhQDoAJMo80Rm2lgVw5dQTgdZ8MlSnJ7yIxU57%2BkPtEsn95XzuU0zVaBrxekqkLZ3RHZ7AeBe37YLZ%2BtXADrUCZZ165Rk%2BjOQFVjcb6WtRnOOZ3%2BxnX7DbRjhPQiv2Brrk1vxYaCXtSnkg2J8E0okBTuWpYQR5fEsJuVvc%2Fj5zVnW2z9ORa1CexfYefP943dLxc0laUpgiJ7%2BREGkRtQmDIz1%2Bp2LE6TcUqD5WPfDHU%2BzcaipXW8iDFZDAnRAwNmAf9qSukGY3G4IWdN3tUC0BPgmzqT0l0Jak355tnt3BVLDSlm0fQEMJHNwMkGOqUBAmLNllYvF1woOLZsH5HNkir%2F%2BynM%2B%2FM5mtnCgjI4ZEN1bGJaixmmVRt9%2F3UjTYm7Li8fTX%2FCDTltq2DSB9HqO4sCB2ejngUkp1NooSLGCMZi4ZzISC2ilQA1wFadEi92L2QvZ0TMCs2iTVDfrzexJniobLDL3l9TOM9eTKx6c53EmF71B0fsXsxrb8lAG4E1HHqljLpS9%2BIGLpXD5s7omVV8J9%2BD&X-Amz-Signature=46035c91147f95f4b463f786870b4dc54897b199a7eb73cad543f288ad4b8c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

