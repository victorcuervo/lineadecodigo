---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CE6ZDM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1SO%2BNabPYLdcnuVintLTM%2FyrpSJtxbYBWQ79P3WpEmAiEAmQVYp1woxtD8YOaRmhF%2By2iT6AfGv8c%2BeqTD6qZAyz4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ%2BMFnWltCETdrINyrcA%2Bf98xn24mS9GgZyyozJut3Ky%2FjT755igz72gao0lbuXu%2FGcm4TgP2gqNGmtiWhpgVsQ6yyuehwEybuS2btCxuYgIcdPiSsr6VX7dVeTJU21lOfsD2hJLnZqHRrytSVCzYvL9JNDg%2Fu3wcW9k%2B9rgaqCEV9T3GvDTbD4T4mJVnnAs9eXtlSLfLteFzvbRMpGBZJcTXBP%2FxqjnUsBFip7aERt5B2muqVRZCPZg9WVxmOAs88Byld8vtmzmDiLTxO2qm5jD8Nk3rBB8u2PZAnOjY9i2CO7w%2BOvsD3UfZfr4l%2Bb%2F1zOKmseTrxWDuw%2BMh0mQJYeJCYRmEBGPA3uMmeiBWelhDfgjjlkLoNcdA%2FiszAwyo%2F4uOKhu6alp1Peqfdg5BPWP%2Br2aX9KFR8qHQ85GV5hIPL%2FSCxuUK9GhOrXcBV1VV8ye1yRyzupZYVEVacRZQZrQmFyP0PR7mnJYT%2BtFKcW02jrQVhaX%2FAEmjOOS3b%2FSyN%2F3PYct1PlpYolrA0Nl3%2BOrBvgrNNAFFTqRAukxL5ieAaUv1nq4nyNmd%2BlTgPJjV1aaaE9pKg5x%2F3WcAP1mU6N3Ce98WhILYl%2FFzw4UyDr%2FFn7weASYuR2gwTjEyWS%2FTQJdnzFoCIUWLLuMPvs2ckGOqUBo2RP15%2BOiibqytvawHgkav4KA32uQ0LNS0enzuyRq0SPoMvTBHfmU%2FYPrsvz2GpTWT%2BPETwYWpDftPd7fW4te%2BAkDEcBsMBZ6quv7G6QTfVy4JHs5vWC1ctUVY5euH%2BReokvMS3iTrCHDFNRQUgd760cXBqEc1msXZLK9LUnh6tPToT3PS1ToPZEhFAF5hV%2F29Jgo784kvX7FrIBjn%2F8qzvu1c%2Fv&X-Amz-Signature=d10be0143fa173c9c4772149e714ee074e44741b5419e51b97a66d7cdb31ec17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CE6ZDM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1SO%2BNabPYLdcnuVintLTM%2FyrpSJtxbYBWQ79P3WpEmAiEAmQVYp1woxtD8YOaRmhF%2By2iT6AfGv8c%2BeqTD6qZAyz4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ%2BMFnWltCETdrINyrcA%2Bf98xn24mS9GgZyyozJut3Ky%2FjT755igz72gao0lbuXu%2FGcm4TgP2gqNGmtiWhpgVsQ6yyuehwEybuS2btCxuYgIcdPiSsr6VX7dVeTJU21lOfsD2hJLnZqHRrytSVCzYvL9JNDg%2Fu3wcW9k%2B9rgaqCEV9T3GvDTbD4T4mJVnnAs9eXtlSLfLteFzvbRMpGBZJcTXBP%2FxqjnUsBFip7aERt5B2muqVRZCPZg9WVxmOAs88Byld8vtmzmDiLTxO2qm5jD8Nk3rBB8u2PZAnOjY9i2CO7w%2BOvsD3UfZfr4l%2Bb%2F1zOKmseTrxWDuw%2BMh0mQJYeJCYRmEBGPA3uMmeiBWelhDfgjjlkLoNcdA%2FiszAwyo%2F4uOKhu6alp1Peqfdg5BPWP%2Br2aX9KFR8qHQ85GV5hIPL%2FSCxuUK9GhOrXcBV1VV8ye1yRyzupZYVEVacRZQZrQmFyP0PR7mnJYT%2BtFKcW02jrQVhaX%2FAEmjOOS3b%2FSyN%2F3PYct1PlpYolrA0Nl3%2BOrBvgrNNAFFTqRAukxL5ieAaUv1nq4nyNmd%2BlTgPJjV1aaaE9pKg5x%2F3WcAP1mU6N3Ce98WhILYl%2FFzw4UyDr%2FFn7weASYuR2gwTjEyWS%2FTQJdnzFoCIUWLLuMPvs2ckGOqUBo2RP15%2BOiibqytvawHgkav4KA32uQ0LNS0enzuyRq0SPoMvTBHfmU%2FYPrsvz2GpTWT%2BPETwYWpDftPd7fW4te%2BAkDEcBsMBZ6quv7G6QTfVy4JHs5vWC1ctUVY5euH%2BReokvMS3iTrCHDFNRQUgd760cXBqEc1msXZLK9LUnh6tPToT3PS1ToPZEhFAF5hV%2F29Jgo784kvX7FrIBjn%2F8qzvu1c%2Fv&X-Amz-Signature=1017a7e14ea2f87d8ac38376849ec0fe9dbb800a7eb10d039b7484309ac0023b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

