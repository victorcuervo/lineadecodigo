---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXP6WPE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCthpduh6kIlHKNd2nplPFdcNfNjf80FMB1hcD90mlVIgIhAI9VR4XXk77tamyQCAcirqasXOfVfLhkzLjdp3i5zcLHKv8DCGEQABoMNjM3NDIzMTgzODA1Igw8gxMRwPsBEPaR%2BFQq3AP67M6M9Uf84jGeL%2BsMVXKNzpGJgjbHegAuebqYvUUsmtL98KoG9tDsnEFNOyE%2B%2B1woa%2F3q66uX17%2B1d3aInNuqVYnpWAVCHo1%2FprkzxaVij6WGuLmuRNtsYiUiT3YQN%2B6%2FIABONBkJM6fVStAO8f%2FgReDKH4ke0qed61CJHaPEuyKAbQ6sO%2BbGHcKdzdg9oPt6yT7CzRinza9WFEs6CgvoLS66ZNjQT7CL%2FIDbZq0b%2BdOXsHlq42qYLe2GSNQ%2FAnxm7y9eZZOqFcuqMv%2F%2B1YmBvnnqsaZJrc4T%2BLmDjx%2BcId2gNEI8ka0uMwC9oWSOn0QSMBWvqFvT%2BvTqWuME5svtJsnnqXchdsCQWDy4lQNyuQC3unro4%2BmJepqKUkZw9GWR8HxDViGJn2XvbGNaE7lhwx4qQx%2BZ5d%2FnZ6%2FsZFXpqSOqgC%2FTjice0qqjPuar8CxpZIywM7CG4KOEtIhT8xQIshLXU6VUe4CkD2rpDgP9e5Oc5BRZFoSHBrkwoLLBv5dQb%2BPjc1OTdnPse25Y0RI4LNkyHUw%2Fgc6ftU8QDJl%2BOyWNmVMs9DCwKYS61lhYw%2B144epyHRM6c%2Fo6vH%2Fd%2FtQFNyIn6g5gq7VLKmGfIgBX2Cqc5%2BkQMFAA0ePgFTCu9svJBjqkARoVi6lUCofWpBqqQeat4IQHpgHBk6WFbTS64pOfozzAphZlpo7fm0D5HUTElVgOoWQpk57EXYQn6hRtQytTf4ujsYZfWGKdGMUOnv70%2FuXN3YzefLOdgW3SVegOvinP%2ByzC9LrrvHclbkeTAdBjj7GMmXCCLzARzwGrRlqHO1qI%2FKbrDfPvNAyoYA9oFTXVZ1e5PWgbezAhJNvQ5bo9SOOBxIQW&X-Amz-Signature=4d18ff151ccf979925f7253ba1814aca03281340289da5699d54fb4a17e1b963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXP6WPE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCthpduh6kIlHKNd2nplPFdcNfNjf80FMB1hcD90mlVIgIhAI9VR4XXk77tamyQCAcirqasXOfVfLhkzLjdp3i5zcLHKv8DCGEQABoMNjM3NDIzMTgzODA1Igw8gxMRwPsBEPaR%2BFQq3AP67M6M9Uf84jGeL%2BsMVXKNzpGJgjbHegAuebqYvUUsmtL98KoG9tDsnEFNOyE%2B%2B1woa%2F3q66uX17%2B1d3aInNuqVYnpWAVCHo1%2FprkzxaVij6WGuLmuRNtsYiUiT3YQN%2B6%2FIABONBkJM6fVStAO8f%2FgReDKH4ke0qed61CJHaPEuyKAbQ6sO%2BbGHcKdzdg9oPt6yT7CzRinza9WFEs6CgvoLS66ZNjQT7CL%2FIDbZq0b%2BdOXsHlq42qYLe2GSNQ%2FAnxm7y9eZZOqFcuqMv%2F%2B1YmBvnnqsaZJrc4T%2BLmDjx%2BcId2gNEI8ka0uMwC9oWSOn0QSMBWvqFvT%2BvTqWuME5svtJsnnqXchdsCQWDy4lQNyuQC3unro4%2BmJepqKUkZw9GWR8HxDViGJn2XvbGNaE7lhwx4qQx%2BZ5d%2FnZ6%2FsZFXpqSOqgC%2FTjice0qqjPuar8CxpZIywM7CG4KOEtIhT8xQIshLXU6VUe4CkD2rpDgP9e5Oc5BRZFoSHBrkwoLLBv5dQb%2BPjc1OTdnPse25Y0RI4LNkyHUw%2Fgc6ftU8QDJl%2BOyWNmVMs9DCwKYS61lhYw%2B144epyHRM6c%2Fo6vH%2Fd%2FtQFNyIn6g5gq7VLKmGfIgBX2Cqc5%2BkQMFAA0ePgFTCu9svJBjqkARoVi6lUCofWpBqqQeat4IQHpgHBk6WFbTS64pOfozzAphZlpo7fm0D5HUTElVgOoWQpk57EXYQn6hRtQytTf4ujsYZfWGKdGMUOnv70%2FuXN3YzefLOdgW3SVegOvinP%2ByzC9LrrvHclbkeTAdBjj7GMmXCCLzARzwGrRlqHO1qI%2FKbrDfPvNAyoYA9oFTXVZ1e5PWgbezAhJNvQ5bo9SOOBxIQW&X-Amz-Signature=c7f7eef727fa5874bc67964e5b44bc281cf3c80f4b01fcb4d722d081c8c0f04e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

