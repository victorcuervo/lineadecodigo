---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQKIBQ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWrsKyA4C9IvxtLBcJgrAF3kOk6xgx%2FJuLRCK0uwxSKgIhAJXOV9lGsqaA3v1ueCJXxmZU4sihSSqbcBExW9yBl8fuKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLIIH2WP%2FjaTEAO3wq3APjseQiPm0YnVexuf%2FelrL42Bcns10OWZL9xH4cgoctAEnIZaoZvfmhQBkdmua6DD4q0c8dy8oDt%2FzmGWrcVR5XtBCxrdF8xc0jNz7euGyj%2FrzDgJAQjdpPR0j1U99wkjtwCknAqLKdDazDKcWP%2BrGO3zCteDVIU878WCkuobBjauP61PoAJhuJ7d%2F8i6DoRIOLuGiBTDGUwyCFUVpLzG4Rwoq38KsXmK9l0q4q2LmA%2F%2Bd6GLVvjqyUcSruZl6pbnSNz5Lp7Dj5zzLfjOJwKnoY%2B%2BGBLP6%2BKOPr9daETdNb7RsqTbxCorHPVltgdOSOvVf%2B2%2F25HxwFStEzL4KiuTy1E8cNDbC2V6vY4VmGU5gt4k5TW%2BYMO37DOKJn1VTH6Q7a%2FsV1eAV8Hg0iD5KAK%2BrJyAtRq6tSrzo%2FCM6iyrPpcgAQ592rZ8jcVShD%2BR0wiLxO2sD3lDmBDucNzbKU0RWRE3bxgdIYZ8KM%2B3JtklXnMr2FKG0B5m4MwFHvzs%2FRKuQtV6VaeAVY9N4yLsgx%2F7F3UItQ6taT8K7LOIuxVfzYVQHpROuI99oFaibqBfpNO%2Br7ojn4PV4YnTqMLSsASC4GltVyfcrsLO7OaLVE5izqdJfeVJ5WRliBqgX2njCj79jJBjqkAWAQbrNT640%2FtoXDEUt54LKk2PA8XQ3A%2BIEZE6fUtwAFOi6aWk7ZGmp%2F%2FRJJ0MSgqhPEecliMW5PWxs3Vo6V2LoOSFcYYJ%2FE7oUOe%2FoLCK6bug4DoE%2FaeYM5%2FEMvVlI2sjfZaF%2Br0mhO5tcLfzqEK0o%2FPBahDoRN3JtCthSicto0UWz%2BRhCRYls1%2BMLIuVmaA9YDk2qj%2FJTPWk8GRFUdFTdbVZGx&X-Amz-Signature=49bbb1f7bf95504f04a55921c4db075c9f090b3a81e7c69c67baa765dfb97b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQKIBQ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWrsKyA4C9IvxtLBcJgrAF3kOk6xgx%2FJuLRCK0uwxSKgIhAJXOV9lGsqaA3v1ueCJXxmZU4sihSSqbcBExW9yBl8fuKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLIIH2WP%2FjaTEAO3wq3APjseQiPm0YnVexuf%2FelrL42Bcns10OWZL9xH4cgoctAEnIZaoZvfmhQBkdmua6DD4q0c8dy8oDt%2FzmGWrcVR5XtBCxrdF8xc0jNz7euGyj%2FrzDgJAQjdpPR0j1U99wkjtwCknAqLKdDazDKcWP%2BrGO3zCteDVIU878WCkuobBjauP61PoAJhuJ7d%2F8i6DoRIOLuGiBTDGUwyCFUVpLzG4Rwoq38KsXmK9l0q4q2LmA%2F%2Bd6GLVvjqyUcSruZl6pbnSNz5Lp7Dj5zzLfjOJwKnoY%2B%2BGBLP6%2BKOPr9daETdNb7RsqTbxCorHPVltgdOSOvVf%2B2%2F25HxwFStEzL4KiuTy1E8cNDbC2V6vY4VmGU5gt4k5TW%2BYMO37DOKJn1VTH6Q7a%2FsV1eAV8Hg0iD5KAK%2BrJyAtRq6tSrzo%2FCM6iyrPpcgAQ592rZ8jcVShD%2BR0wiLxO2sD3lDmBDucNzbKU0RWRE3bxgdIYZ8KM%2B3JtklXnMr2FKG0B5m4MwFHvzs%2FRKuQtV6VaeAVY9N4yLsgx%2F7F3UItQ6taT8K7LOIuxVfzYVQHpROuI99oFaibqBfpNO%2Br7ojn4PV4YnTqMLSsASC4GltVyfcrsLO7OaLVE5izqdJfeVJ5WRliBqgX2njCj79jJBjqkAWAQbrNT640%2FtoXDEUt54LKk2PA8XQ3A%2BIEZE6fUtwAFOi6aWk7ZGmp%2F%2FRJJ0MSgqhPEecliMW5PWxs3Vo6V2LoOSFcYYJ%2FE7oUOe%2FoLCK6bug4DoE%2FaeYM5%2FEMvVlI2sjfZaF%2Br0mhO5tcLfzqEK0o%2FPBahDoRN3JtCthSicto0UWz%2BRhCRYls1%2BMLIuVmaA9YDk2qj%2FJTPWk8GRFUdFTdbVZGx&X-Amz-Signature=5d8c91ac811b35d90e017d8910633ead70aa147f7e0c9cd8812538a9e5f796e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

