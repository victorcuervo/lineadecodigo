---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFBQQ6D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDUfHwaV3VveUfHC17OaPztMk1r6ngyL8vmZL5hjoRECAIgcRwKguAnUNpM3UojMwZQUjFbToelEsSMiPN80MM6PSgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNyaDqTgg2Sxt50lnSrcA%2FN0qAenNWvAZOZ8yWfMnmgUnJpjGlgRodVNKG63mwwEGiGeLAquCpkfntUTy5KU5khLh%2Fyd%2BOG3KiARDIprRpwj8n35%2B749VwOTh6oTtCYJBmO5Xz6F%2Bm5xuqIGYUad4smkOxnEL1%2BBnfoKg%2B7khjQnwyrArBgyd56bFq%2FR6IMnQD1mh%2BthHYBMYFivKCknaRYaaQZVLyi2k2NqTenTiUX1wfankUXO5pQ%2FPkK7rCVJTGIbBFLqt8to2nsAoqhcWgswQHN82IQBrtIKii9Vb8mbTFKGjq5Mn0h5YGgraBMIhO8yt58zNBSFyGJ1rF8NUFLkTZAaxDkU1%2BOku%2BOmEQQFbGkzSecuq029AD84HfzzGpH98RoTUpBNOFiXhPpM5lslNPmxubUiPTZuYZVh1f7K5g8cbyueZSzTZdPKu1U3SRWYri%2BuSR3GMHP3YyQNk6OXoGGGbkP%2Fu%2FM2jxoRwIfPdfrDf%2BjJHbyeWO%2BO7SzQXuPMbfbHzUDmn%2FusWYQo7YKL55aKkAqrYDAaSEuC61991gBeA%2F%2Br2yOpHBA3xxC3JtQp4SvPHKFXPodsVd4PPrC3PfivttfQlywgHBtyMx5LlNRSj2qJOfKWkJrZQOExjR%2BnLBsXkrchof80MM3Tw8kGOqUBbFBKbBbpHCUmzciyOhyoq8y2oX0QEmReHSj2G8MdCJe1tJXLGHuNpHpNCJdC8yovmNvMhHbipTHblRrqbM41HO3LdNYMVTHryUqHrtAMXwdZJMphl82Jil3T4IfkCQ2QXF1mlK0XqklzxeiVMcQSIWNd8mi%2BkQ%2BzjVphzuapPiY2hneXMi%2FSfDTfG%2BbmTADzLLIzAQF98UsEEvZgN7YZ3PDSLane&X-Amz-Signature=25da26e6f6c8866f153d968156448a59cc6da0c16d9abd149cddda285ef690b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFBQQ6D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDUfHwaV3VveUfHC17OaPztMk1r6ngyL8vmZL5hjoRECAIgcRwKguAnUNpM3UojMwZQUjFbToelEsSMiPN80MM6PSgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNyaDqTgg2Sxt50lnSrcA%2FN0qAenNWvAZOZ8yWfMnmgUnJpjGlgRodVNKG63mwwEGiGeLAquCpkfntUTy5KU5khLh%2Fyd%2BOG3KiARDIprRpwj8n35%2B749VwOTh6oTtCYJBmO5Xz6F%2Bm5xuqIGYUad4smkOxnEL1%2BBnfoKg%2B7khjQnwyrArBgyd56bFq%2FR6IMnQD1mh%2BthHYBMYFivKCknaRYaaQZVLyi2k2NqTenTiUX1wfankUXO5pQ%2FPkK7rCVJTGIbBFLqt8to2nsAoqhcWgswQHN82IQBrtIKii9Vb8mbTFKGjq5Mn0h5YGgraBMIhO8yt58zNBSFyGJ1rF8NUFLkTZAaxDkU1%2BOku%2BOmEQQFbGkzSecuq029AD84HfzzGpH98RoTUpBNOFiXhPpM5lslNPmxubUiPTZuYZVh1f7K5g8cbyueZSzTZdPKu1U3SRWYri%2BuSR3GMHP3YyQNk6OXoGGGbkP%2Fu%2FM2jxoRwIfPdfrDf%2BjJHbyeWO%2BO7SzQXuPMbfbHzUDmn%2FusWYQo7YKL55aKkAqrYDAaSEuC61991gBeA%2F%2Br2yOpHBA3xxC3JtQp4SvPHKFXPodsVd4PPrC3PfivttfQlywgHBtyMx5LlNRSj2qJOfKWkJrZQOExjR%2BnLBsXkrchof80MM3Tw8kGOqUBbFBKbBbpHCUmzciyOhyoq8y2oX0QEmReHSj2G8MdCJe1tJXLGHuNpHpNCJdC8yovmNvMhHbipTHblRrqbM41HO3LdNYMVTHryUqHrtAMXwdZJMphl82Jil3T4IfkCQ2QXF1mlK0XqklzxeiVMcQSIWNd8mi%2BkQ%2BzjVphzuapPiY2hneXMi%2FSfDTfG%2BbmTADzLLIzAQF98UsEEvZgN7YZ3PDSLane&X-Amz-Signature=d671f15c9309ed7cff961d87756c2a56cb4ff651c2cc9cfe48c21822a9cd8cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

