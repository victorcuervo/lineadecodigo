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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWEL5BA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHjaQE8MbZNCe8Bjl4uoSj8idlvE9cI8R%2FmhZ%2BLc2aZNAiB7uieWqiOkbH0JlOEtGcfFg9OtCp7gkUrjJUXoiWlR4ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMom47B0UydgOU%2B9r8KtwD1%2FBeSjh0Iarha2UaRsGUFn1buxVbW6ZIcaTciiRlBF%2F%2F9KVMzEvZwSErkUVWx2C4FR7XFeT1eWFQasY%2FWNVeAd3fgfM91dQDB%2F1ikqXo2vJvy3xK9UfxPXW4hgyDg1gh1nGoby92m2DCHpEqL4VWiOBBwiXJN8u%2BG%2Feg1cZWjvTS%2Fmw1iovMdZwbbK2PpYECsWYsMO2%2Bcr%2BcFVJX9wXIy4QU1DZKuN3O1TA%2FdZFzaxusaUIBIU9jotEjzzmi70SqyyPZnfKL3whlYyDKZNhfmzATVlP9E4BPabRBE62oxGrj9D96qUumb3D0J07Cr0LhW%2BukU4eJyGkD8Zqd8ISBxcrUUi11y%2Fx7QR9W%2F1YRduTVW4MFZKfQ7JveMKf3oVs0AV6P%2B620UA3iGZQX7kTuPfpATzdJPHmymPBkob%2BtGND1RmRoPdmvBx90zJHmmRMbsHP59BUF%2BsF8wVT6BiX5xs2EBixyH7o8qhlkrUnvW3OQs2TTqBOTNnyiztDvV2iLCnD3lU%2FFde7Gd%2BtZwIAmcmpC%2FSzeqCZl6dk81iOR5J%2FYgz4YDeDOuKlqTUm2CbkhqOEjOtwWeErQP4nc54sjI1NzRwtgRNGDO%2FRWsRkS4P2kyA9Ez6LJB3RGStowsaXByQY6pgGcGItRySMYqDLbOgTwOoCsmzvoia6Wo%2BfzXHSa56P%2FT16IlorsrksC7n29X69XO5S24a%2FEgcph%2FzU0PEEW%2FAkFAiPBpYV%2Bw%2FWw2108W%2B5cAR%2FvK6OKtTeu5ROfWSqpeHmVPmkoJJm8nYT3fFkaO1Qz49uCm6tlSwdDAqoETCnF4f1X8cZ7CrRWBevSG5J4V800hd0W9b%2FI7X%2BtwtpXRiQwmG461H3U&X-Amz-Signature=c2dc238fb186730db48a59a0e441b189bb897bc8ee3d34628977a5e19f488860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWEL5BA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHjaQE8MbZNCe8Bjl4uoSj8idlvE9cI8R%2FmhZ%2BLc2aZNAiB7uieWqiOkbH0JlOEtGcfFg9OtCp7gkUrjJUXoiWlR4ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMom47B0UydgOU%2B9r8KtwD1%2FBeSjh0Iarha2UaRsGUFn1buxVbW6ZIcaTciiRlBF%2F%2F9KVMzEvZwSErkUVWx2C4FR7XFeT1eWFQasY%2FWNVeAd3fgfM91dQDB%2F1ikqXo2vJvy3xK9UfxPXW4hgyDg1gh1nGoby92m2DCHpEqL4VWiOBBwiXJN8u%2BG%2Feg1cZWjvTS%2Fmw1iovMdZwbbK2PpYECsWYsMO2%2Bcr%2BcFVJX9wXIy4QU1DZKuN3O1TA%2FdZFzaxusaUIBIU9jotEjzzmi70SqyyPZnfKL3whlYyDKZNhfmzATVlP9E4BPabRBE62oxGrj9D96qUumb3D0J07Cr0LhW%2BukU4eJyGkD8Zqd8ISBxcrUUi11y%2Fx7QR9W%2F1YRduTVW4MFZKfQ7JveMKf3oVs0AV6P%2B620UA3iGZQX7kTuPfpATzdJPHmymPBkob%2BtGND1RmRoPdmvBx90zJHmmRMbsHP59BUF%2BsF8wVT6BiX5xs2EBixyH7o8qhlkrUnvW3OQs2TTqBOTNnyiztDvV2iLCnD3lU%2FFde7Gd%2BtZwIAmcmpC%2FSzeqCZl6dk81iOR5J%2FYgz4YDeDOuKlqTUm2CbkhqOEjOtwWeErQP4nc54sjI1NzRwtgRNGDO%2FRWsRkS4P2kyA9Ez6LJB3RGStowsaXByQY6pgGcGItRySMYqDLbOgTwOoCsmzvoia6Wo%2BfzXHSa56P%2FT16IlorsrksC7n29X69XO5S24a%2FEgcph%2FzU0PEEW%2FAkFAiPBpYV%2Bw%2FWw2108W%2B5cAR%2FvK6OKtTeu5ROfWSqpeHmVPmkoJJm8nYT3fFkaO1Qz49uCm6tlSwdDAqoETCnF4f1X8cZ7CrRWBevSG5J4V800hd0W9b%2FI7X%2BtwtpXRiQwmG461H3U&X-Amz-Signature=b455da44283488a8da3b5f8f3d71b07a03d655afb4bbb74accfb8ea1968793e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

