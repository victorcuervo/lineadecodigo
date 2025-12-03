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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTXTPU2I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAGUzjF4CEuZ0H2ViMCne0o9kqwM9uZ3Y7n%2Bq9IVBcU8AiBjwTGFKGBl3rnY18Xz1UyPvTZm5LucHWLOkG%2BYqv33sCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMrwbuSdIy7LTPzsi4KtwD%2BN8MO8OLw1y512PqVEnwSXQ0ZXy8OniCip47CIs%2F%2FRm3p3%2Fzp0Lmgccqby02jS63MUipaDStwlyzPv2HbCQ7tEWpSmF5ifaTwVluLmT%2BxJW2Jj3CG26hoRrE7iVk5Tnt2tHng0GrdEyufPQWFLrpM9tafteqEpitk%2FTNeVLkYcboiyY5O6%2BMhoJpXIE4W%2BTNc%2FakjwA%2FdmeNliprS2hZTv4yfwTvq%2FvhQleyPvD3zLGZtxXVcuJMrrXHfSmyktP4xnBCfn6OsMawHQmoD9POgZz8n49%2BjcSsZ1ZnWhLgUHB78m1%2BHsKuYH8B2ECEFC%2FedyOZlFtm1OTqGUd5wzqgfXacW0Ak2ILwxl87TRielYFFWvStS4LnAJ9avS6YyaR1tiMVvfovZzgCl1iqD9%2BaxFxQGNm8QnXD7wCHYq0KgrrAsnuuu2815Na70cTc89VcoafkAaM%2BWuyynYR%2FFfATdOc8AxpYc80bQGVp4mnAiX0R45SYYkaKSSN1vw7mjFHuSsmkZL8mwrQGq2Rxjz4gVtnDP114TWnWLVPprDj5Y%2B4plDB97tHEDYzf5jf%2Bqx6z2SYRKrRwllhGXrioVObjnkKoCAWZMFpsjLcZX2UhU%2B2ySXhMW85dr%2FoOkeUwxJS%2ByQY6pgGD2hR1OoTMnxSCrv3upVv1A2ybvzy1inUUBjU35tIgJYTq4ZW%2F%2FDOzIKKCbT%2B1C2MjLwnShsYcU2%2F8ubz%2Btn7Oq5tXOsg23EhaI7OB%2B7%2Byrbb2vUocnDeC58BStgDo2jYlB9ex63tk40KR8ngqDHbtQ8TfNEhVlpEaCB6%2BmUeMn4uI%2BALwWWVpVrOStJ5HoFb5aXE7cwU9rI92uMUk8KjW%2F5EZDtl5&X-Amz-Signature=a3cb97de7eecf36f5eeae68ce666ba39790ea3ebec8d4a7300e9e0ce7949470c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTXTPU2I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAGUzjF4CEuZ0H2ViMCne0o9kqwM9uZ3Y7n%2Bq9IVBcU8AiBjwTGFKGBl3rnY18Xz1UyPvTZm5LucHWLOkG%2BYqv33sCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMrwbuSdIy7LTPzsi4KtwD%2BN8MO8OLw1y512PqVEnwSXQ0ZXy8OniCip47CIs%2F%2FRm3p3%2Fzp0Lmgccqby02jS63MUipaDStwlyzPv2HbCQ7tEWpSmF5ifaTwVluLmT%2BxJW2Jj3CG26hoRrE7iVk5Tnt2tHng0GrdEyufPQWFLrpM9tafteqEpitk%2FTNeVLkYcboiyY5O6%2BMhoJpXIE4W%2BTNc%2FakjwA%2FdmeNliprS2hZTv4yfwTvq%2FvhQleyPvD3zLGZtxXVcuJMrrXHfSmyktP4xnBCfn6OsMawHQmoD9POgZz8n49%2BjcSsZ1ZnWhLgUHB78m1%2BHsKuYH8B2ECEFC%2FedyOZlFtm1OTqGUd5wzqgfXacW0Ak2ILwxl87TRielYFFWvStS4LnAJ9avS6YyaR1tiMVvfovZzgCl1iqD9%2BaxFxQGNm8QnXD7wCHYq0KgrrAsnuuu2815Na70cTc89VcoafkAaM%2BWuyynYR%2FFfATdOc8AxpYc80bQGVp4mnAiX0R45SYYkaKSSN1vw7mjFHuSsmkZL8mwrQGq2Rxjz4gVtnDP114TWnWLVPprDj5Y%2B4plDB97tHEDYzf5jf%2Bqx6z2SYRKrRwllhGXrioVObjnkKoCAWZMFpsjLcZX2UhU%2B2ySXhMW85dr%2FoOkeUwxJS%2ByQY6pgGD2hR1OoTMnxSCrv3upVv1A2ybvzy1inUUBjU35tIgJYTq4ZW%2F%2FDOzIKKCbT%2B1C2MjLwnShsYcU2%2F8ubz%2Btn7Oq5tXOsg23EhaI7OB%2B7%2Byrbb2vUocnDeC58BStgDo2jYlB9ex63tk40KR8ngqDHbtQ8TfNEhVlpEaCB6%2BmUeMn4uI%2BALwWWVpVrOStJ5HoFb5aXE7cwU9rI92uMUk8KjW%2F5EZDtl5&X-Amz-Signature=aeee073e9ac3e315a8207c168f797f2d7033c04b092ac5f352683f193fb5f4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

