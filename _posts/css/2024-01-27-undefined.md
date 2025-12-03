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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUIHQZH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIExGcWuHn%2Fejtqy5LFO8Kte5n0wMPcZWi80YS16U7HwMAiEAgW5ET0VkTOIdO9Ox44PPRI4i9mhFQ7XwpxM8SDE3jCYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLyWxoDNYa3jEq5utSrcA5y7UVT4zjmp2aCTd3AE8l41CcS33XLwWtTDrLmVCdTpdxdtUupBT9kNHW2bNyl2Qp1a%2BlO9FyBFXZusPkAK2hsrUJeYYNhkf8OLSG5xIjESzVPowh0Zr1WSKOW2W0741ewMv56huF55v3iDvMO4Cb5y3qaaT%2BxarFcBsU04MVqIlHSSkTR44k%2BnAqWyJeDr%2BOHw2RNkGALTazfiKKOfyM4qaTH7G5DZ0DQfeGOF45QaSWnKullx%2FIpUPbUgtJyxV7noBOejV7KkGMz6%2BwJ07oosCNGO%2FOZlyQpJDytqP25E8KHRCDHqjrCCkvDw5NtyP1AjCUOmmLayxxOh12K1o7%2BKjjS5uT%2FhajQA4M5PkSIFHYSOgqo6Vp5EMW9calUQlEUCIoQukyiT3rePNNmJzgLZzTf6nfUbCxxaLUFbY1vRE7ENuDYFkPfESm4fMDqFw7yb5mj5N7RvgDPn5%2FfhJ9y%2B6bIl2X3mknlf2hluhyYIQBbT%2FfooV69VfmanD1MMgHDGec2uslTqSwPlZw%2FxdsdUisDG8QN48S17UylTiAOjHkUSoqpsEDnXm2ZPJun8bEKjbOIlbQrN2oy5ZYm6uZxP6G7VIT09PnbchwTt%2FM%2Fvyxzq8f6PF43SdtxPMNKbv8kGOqUBsh3aI5nQwxTHv2o1jUU9kz02%2FfAbK%2F4F7rUg56lNMEwjgDba2ZvIhiGfdei5WYRv%2Fa1vWTlAf8Je5sFLwTZbcrtk5in%2BSlWY8vpufIzsFXRELVOV2K16ZSCyoUNj%2FUJwHSWGu9%2FqTCIp65MNpNmvKdJUNDG7CN6IvTNHPWdKpHiDeN175vGQ4ImbuT0wl4uBTfHESQ2fL6XsCmw1OhKtRaft9lj4&X-Amz-Signature=6d307a9121fe6f0c40b139d47121d7eb7eebeb4b00ed7342c69232939633ec2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUIHQZH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIExGcWuHn%2Fejtqy5LFO8Kte5n0wMPcZWi80YS16U7HwMAiEAgW5ET0VkTOIdO9Ox44PPRI4i9mhFQ7XwpxM8SDE3jCYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLyWxoDNYa3jEq5utSrcA5y7UVT4zjmp2aCTd3AE8l41CcS33XLwWtTDrLmVCdTpdxdtUupBT9kNHW2bNyl2Qp1a%2BlO9FyBFXZusPkAK2hsrUJeYYNhkf8OLSG5xIjESzVPowh0Zr1WSKOW2W0741ewMv56huF55v3iDvMO4Cb5y3qaaT%2BxarFcBsU04MVqIlHSSkTR44k%2BnAqWyJeDr%2BOHw2RNkGALTazfiKKOfyM4qaTH7G5DZ0DQfeGOF45QaSWnKullx%2FIpUPbUgtJyxV7noBOejV7KkGMz6%2BwJ07oosCNGO%2FOZlyQpJDytqP25E8KHRCDHqjrCCkvDw5NtyP1AjCUOmmLayxxOh12K1o7%2BKjjS5uT%2FhajQA4M5PkSIFHYSOgqo6Vp5EMW9calUQlEUCIoQukyiT3rePNNmJzgLZzTf6nfUbCxxaLUFbY1vRE7ENuDYFkPfESm4fMDqFw7yb5mj5N7RvgDPn5%2FfhJ9y%2B6bIl2X3mknlf2hluhyYIQBbT%2FfooV69VfmanD1MMgHDGec2uslTqSwPlZw%2FxdsdUisDG8QN48S17UylTiAOjHkUSoqpsEDnXm2ZPJun8bEKjbOIlbQrN2oy5ZYm6uZxP6G7VIT09PnbchwTt%2FM%2Fvyxzq8f6PF43SdtxPMNKbv8kGOqUBsh3aI5nQwxTHv2o1jUU9kz02%2FfAbK%2F4F7rUg56lNMEwjgDba2ZvIhiGfdei5WYRv%2Fa1vWTlAf8Je5sFLwTZbcrtk5in%2BSlWY8vpufIzsFXRELVOV2K16ZSCyoUNj%2FUJwHSWGu9%2FqTCIp65MNpNmvKdJUNDG7CN6IvTNHPWdKpHiDeN175vGQ4ImbuT0wl4uBTfHESQ2fL6XsCmw1OhKtRaft9lj4&X-Amz-Signature=8e309e61108affc3a8f65ad66ad6e1e6ab5f1d31ff05175ad2fb618ab08abc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

