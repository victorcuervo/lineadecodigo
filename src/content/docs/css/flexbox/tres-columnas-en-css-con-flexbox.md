---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ25XRKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERHWqHyqeiGlIrWau4y0T5D9ei42yb3r77E41zUQ3pQAiAPx3DJwLK6HE7TCVRcQTeXKLpq3UYkQEPE1X0n0llJnSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMFB4YTQ2GKNT2cwFKtwDoAm8i4QNHYsOQP85iUXE02UVTReDEOZ6tO2dB4HSn2jomZL1yRS%2BCR5PrE5DAqVGSN8GMNO657RyFImFptp%2BTp6A%2FE1qlG%2F%2Bq8QcqhPs3U%2FynIM8%2BRQqwpoWjfB21LiQzYLeXwlMsC8R9MjtPEdAjcGHO1w1UMpSFLHNujl6BQ%2BqUilv%2BdKz1XOkRB%2ByCKRXE8GzxWCLhQ%2BddTjl6gcCvoi%2B6DNqOcbO%2FCVN%2FWLcumBOdF03XvfWgmEyuexI9jnqtRhp1Jz0f3A3BWNNR8S%2FZB9KkTNzx1Tm8dM4MbUGajaCr3DUuW3%2Fea3pXlXv%2Bt0W9hMA3eYX2URL8drweBpMHDd5vWpldLvVnwp6RplYbUe1H3Eq%2BnIVymhERygfQ2K7ZAy%2FHnUc56G1BTYxjjaKkrmd086QM%2BUVwF%2BAzNI%2BloFHSqS6VQ3w32%2BBC%2BPYuqDAJHLQNIRbbkr8gc5rWjor%2FQDEl4FHVAQfcDj9RVfzqPCMNSZPW2MNvycLcNO05t70MpvHHwLq9T2FXQk9nk7aO4YATd9xCYJgUB%2B%2BT0TSrYIejr%2Brdg5aR%2F0OmPC0%2Bohr74y5bFHsAB3HVxPkUNb3bjO%2Bg7CkquKrvk8IxtBhJmZQ7CkQgGuLa7UU5NEw0MfXyQY6pgGRKdiy0dwomdPtKWKONvesXWY61YHOue1T6tFnRhS2xLo2Jl5kNMNUeK%2FmheZhxdrE%2F1v%2B%2FtrVlo7%2FlbSRHaJ08uEzaj%2BT9pZPcGGBlIpnzsuW43WwAedjxQftsrIUuCbZnkL6nT%2Bvf%2FZ4I5PLxKzUm9%2Fg14kdlVFGf5qpWJxASd9zVtufQ7K72ct5iNE31IBc9qLi%2FCchf1jnOBD3Zlb6zyTNBNxa&X-Amz-Signature=854b0d82725c60c5df3423772c1262d7f44164d8a2af8f1246fe23779797afd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ25XRKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERHWqHyqeiGlIrWau4y0T5D9ei42yb3r77E41zUQ3pQAiAPx3DJwLK6HE7TCVRcQTeXKLpq3UYkQEPE1X0n0llJnSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMFB4YTQ2GKNT2cwFKtwDoAm8i4QNHYsOQP85iUXE02UVTReDEOZ6tO2dB4HSn2jomZL1yRS%2BCR5PrE5DAqVGSN8GMNO657RyFImFptp%2BTp6A%2FE1qlG%2F%2Bq8QcqhPs3U%2FynIM8%2BRQqwpoWjfB21LiQzYLeXwlMsC8R9MjtPEdAjcGHO1w1UMpSFLHNujl6BQ%2BqUilv%2BdKz1XOkRB%2ByCKRXE8GzxWCLhQ%2BddTjl6gcCvoi%2B6DNqOcbO%2FCVN%2FWLcumBOdF03XvfWgmEyuexI9jnqtRhp1Jz0f3A3BWNNR8S%2FZB9KkTNzx1Tm8dM4MbUGajaCr3DUuW3%2Fea3pXlXv%2Bt0W9hMA3eYX2URL8drweBpMHDd5vWpldLvVnwp6RplYbUe1H3Eq%2BnIVymhERygfQ2K7ZAy%2FHnUc56G1BTYxjjaKkrmd086QM%2BUVwF%2BAzNI%2BloFHSqS6VQ3w32%2BBC%2BPYuqDAJHLQNIRbbkr8gc5rWjor%2FQDEl4FHVAQfcDj9RVfzqPCMNSZPW2MNvycLcNO05t70MpvHHwLq9T2FXQk9nk7aO4YATd9xCYJgUB%2B%2BT0TSrYIejr%2Brdg5aR%2F0OmPC0%2Bohr74y5bFHsAB3HVxPkUNb3bjO%2Bg7CkquKrvk8IxtBhJmZQ7CkQgGuLa7UU5NEw0MfXyQY6pgGRKdiy0dwomdPtKWKONvesXWY61YHOue1T6tFnRhS2xLo2Jl5kNMNUeK%2FmheZhxdrE%2F1v%2B%2FtrVlo7%2FlbSRHaJ08uEzaj%2BT9pZPcGGBlIpnzsuW43WwAedjxQftsrIUuCbZnkL6nT%2Bvf%2FZ4I5PLxKzUm9%2Fg14kdlVFGf5qpWJxASd9zVtufQ7K72ct5iNE31IBc9qLi%2FCchf1jnOBD3Zlb6zyTNBNxa&X-Amz-Signature=a4814f0392a7588b45d762d337c4d847f713a6e8f4ed6d63d7d5c1a73e2a94e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

