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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BP2WDAI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDqEecLEJzfMVazfHf1gD3%2BzK%2FBgEn5c2Vzq66Rj5KlIwIgEEwfQ46%2FM7CJpTamfPcehvHz2ZSgyLiySzvIL4gYCzUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFS2%2Fo1NejdDqqhISSrcA8wAfMbuSM4PXo7pnn%2FNenpR4k46IToRthjXpyROfBfhb1IBaoebtDGRxhVpGmvO6t%2BiOIFJtNig0wyUzxAeMuoR2iJQ0ymmlHkzKl0w%2F0bszhUWVyuLEhaexzeyM9bUk15g6pWZRUefiQBPuGa%2F%2FGUm2VIBpOEeOvJ8%2BuXSUDLOjuyHxW3%2BqTaReoDSLH7g3EGmlMqR13aAXYnzcE4NEiovT2ZBkfBaM%2FzX0xE3JPTnCxqxL3iCileQe2ffctxtXn6GAOWG0mfwqqiKb1EbK%2FlNOS3wyuSD6UkSDcyTKN9IIFyIU0at8kEfEPqxUjw%2BUSCsMSsqRpRE2nEl2flO86Cs7R7EnFjcfANO4HdPQKzwjqMLqvIY6SBuj8Lq3fkXPOJ6kt66RRTAW0c1NM5s3YlntYM28MiUUhVwH%2FcDQhqFzt0cpdyTb2enOX9LIcEkU1NZ6Fj6fgI2wilvMlFm4mEbumWCMF1UD54AkNEyFSwAh%2Bn8UfNNAPfCfrCsl1g1lroepwoxB%2BGMA8bm4tpd59cry946makScKwpKi7oOR7IJy6U06mdgdGuv%2BfmAfIw6Uxpm0d7fTISUpMKZWaNvDCcjKdwgKpk9I%2BRnumKSN%2BT7n7sdp1CDP58XS%2FeMO3pwMkGOqUBFKtooYV6OfFxqDgqjqW5avZXyOkoqVlKVpphQ0nD3h8g5N3G%2Bp6ClNQXYMh9c0rp%2B8WFVBII%2BrUetckrWtHFkKhlW4%2B0A497hp5xK8X6xZJ0B4NK%2FMbyu%2B1orCvkNLVwQQVImuSTOaQayfJQQrXpJLQUY2UGT1zlqA8AiGuxER%2FwZnDNSrwiu1ywugq0Wwm%2FrozeD%2BT0egbb%2BDhO9EM2s7cMZSGq&X-Amz-Signature=3753321fb09333388db0f1704cfe62c26bf46879a2ca3e3585d05339110ae654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BP2WDAI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDqEecLEJzfMVazfHf1gD3%2BzK%2FBgEn5c2Vzq66Rj5KlIwIgEEwfQ46%2FM7CJpTamfPcehvHz2ZSgyLiySzvIL4gYCzUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFS2%2Fo1NejdDqqhISSrcA8wAfMbuSM4PXo7pnn%2FNenpR4k46IToRthjXpyROfBfhb1IBaoebtDGRxhVpGmvO6t%2BiOIFJtNig0wyUzxAeMuoR2iJQ0ymmlHkzKl0w%2F0bszhUWVyuLEhaexzeyM9bUk15g6pWZRUefiQBPuGa%2F%2FGUm2VIBpOEeOvJ8%2BuXSUDLOjuyHxW3%2BqTaReoDSLH7g3EGmlMqR13aAXYnzcE4NEiovT2ZBkfBaM%2FzX0xE3JPTnCxqxL3iCileQe2ffctxtXn6GAOWG0mfwqqiKb1EbK%2FlNOS3wyuSD6UkSDcyTKN9IIFyIU0at8kEfEPqxUjw%2BUSCsMSsqRpRE2nEl2flO86Cs7R7EnFjcfANO4HdPQKzwjqMLqvIY6SBuj8Lq3fkXPOJ6kt66RRTAW0c1NM5s3YlntYM28MiUUhVwH%2FcDQhqFzt0cpdyTb2enOX9LIcEkU1NZ6Fj6fgI2wilvMlFm4mEbumWCMF1UD54AkNEyFSwAh%2Bn8UfNNAPfCfrCsl1g1lroepwoxB%2BGMA8bm4tpd59cry946makScKwpKi7oOR7IJy6U06mdgdGuv%2BfmAfIw6Uxpm0d7fTISUpMKZWaNvDCcjKdwgKpk9I%2BRnumKSN%2BT7n7sdp1CDP58XS%2FeMO3pwMkGOqUBFKtooYV6OfFxqDgqjqW5avZXyOkoqVlKVpphQ0nD3h8g5N3G%2Bp6ClNQXYMh9c0rp%2B8WFVBII%2BrUetckrWtHFkKhlW4%2B0A497hp5xK8X6xZJ0B4NK%2FMbyu%2B1orCvkNLVwQQVImuSTOaQayfJQQrXpJLQUY2UGT1zlqA8AiGuxER%2FwZnDNSrwiu1ywugq0Wwm%2FrozeD%2BT0egbb%2BDhO9EM2s7cMZSGq&X-Amz-Signature=50b4d9c466b3cf0eb2de5f1586eed8b84d3c63f5ca3d125777681fcd36018eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

