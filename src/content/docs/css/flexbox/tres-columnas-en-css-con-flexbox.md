---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJU225ON%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeQfPdITt5hjQAANaPuc%2Boz3kC3zkB%2BoXSduLne0w3UwIgQcLrJw7ehiXpvnqm0qJKFYc5%2FlFFc7B6nbB2zYSCqJgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbELW3pkXoandrkiyrcA8%2BeUtiAYU9PXWPXmqHpLDcN4f4%2BNjPefJEoGR52E1z4splub4q4xMANjpzBwtAmap8SHKCzSBovOZumlJMI%2FmT21h71lyUk7IvyDOAHpxbVxwga3494GInRiELD69nZjXrBVl2BJcOkaqZ9O%2F7ImIYXLDKi79%2B1PFxHJS6LRLtE8k%2FtwaqOvoD5BORqv6S9LVtg%2FahqQphUWeBbHEkUVMb%2FZuy0yIW2g3QBYRFWCN6lVfrCEnECIr5%2Bnc%2F%2BoMCBziJVzEWFcZEAiCu2eQwdUlyXUoxsxp82AFn1sOuz6oH27v6MmcOWjgYjiNwE%2FimWBChx13JWADTqkdtIJhBfNZcqrjzwts4fslE3f%2B1FdLwJgidl1AhujsP7I91meinBMXFXfn02AQb5hmp3v7cD0hW6cj6HqO0pFTKMxPh5yu45RnfsDKOtIiudSHYBSZwZa0WHlRok6tlCqlacIL1ZwMrVWvb8kAcHkQO9rPlpJjwkVe9OH3hqc4wUo0Spe6KHFapmCMUUfDEH%2Bkb67g7g5Lz8TLPeU2NyQlvZLOCJt79gWt4FKLi5dE0okeBnOVpy8Pf8hI6X53LKzm3A5qR2IgxicafPr7SHDlN9Mbxu6wpLtAYpW6uRtJijCQipMLy02ckGOqUBriZjfl6CnEqwdBTLCEV502UznLyplteQDsqATxhIYx75%2Bm0cMoF4M%2BEDim%2FpWgQA%2BuKnpP393%2FBTkrQezJRDhDyPhauq1jKbhu2O7IAjbGnQBVxn84KDPh2yTZmpjzBBa44VsHttaQSzQltZ4oyE3zABRZl%2BrBCUTp%2F5X2sfe%2BY598%2FX4%2FlazugiDtUYZlbZvxBLcJKjvE5FlTuGy%2FJS8ikst7Ls&X-Amz-Signature=d1afc2478111fc2ffb421c4712628b8cd3821cf133581679bdcb7f5fc59f0a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJU225ON%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeQfPdITt5hjQAANaPuc%2Boz3kC3zkB%2BoXSduLne0w3UwIgQcLrJw7ehiXpvnqm0qJKFYc5%2FlFFc7B6nbB2zYSCqJgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbELW3pkXoandrkiyrcA8%2BeUtiAYU9PXWPXmqHpLDcN4f4%2BNjPefJEoGR52E1z4splub4q4xMANjpzBwtAmap8SHKCzSBovOZumlJMI%2FmT21h71lyUk7IvyDOAHpxbVxwga3494GInRiELD69nZjXrBVl2BJcOkaqZ9O%2F7ImIYXLDKi79%2B1PFxHJS6LRLtE8k%2FtwaqOvoD5BORqv6S9LVtg%2FahqQphUWeBbHEkUVMb%2FZuy0yIW2g3QBYRFWCN6lVfrCEnECIr5%2Bnc%2F%2BoMCBziJVzEWFcZEAiCu2eQwdUlyXUoxsxp82AFn1sOuz6oH27v6MmcOWjgYjiNwE%2FimWBChx13JWADTqkdtIJhBfNZcqrjzwts4fslE3f%2B1FdLwJgidl1AhujsP7I91meinBMXFXfn02AQb5hmp3v7cD0hW6cj6HqO0pFTKMxPh5yu45RnfsDKOtIiudSHYBSZwZa0WHlRok6tlCqlacIL1ZwMrVWvb8kAcHkQO9rPlpJjwkVe9OH3hqc4wUo0Spe6KHFapmCMUUfDEH%2Bkb67g7g5Lz8TLPeU2NyQlvZLOCJt79gWt4FKLi5dE0okeBnOVpy8Pf8hI6X53LKzm3A5qR2IgxicafPr7SHDlN9Mbxu6wpLtAYpW6uRtJijCQipMLy02ckGOqUBriZjfl6CnEqwdBTLCEV502UznLyplteQDsqATxhIYx75%2Bm0cMoF4M%2BEDim%2FpWgQA%2BuKnpP393%2FBTkrQezJRDhDyPhauq1jKbhu2O7IAjbGnQBVxn84KDPh2yTZmpjzBBa44VsHttaQSzQltZ4oyE3zABRZl%2BrBCUTp%2F5X2sfe%2BY598%2FX4%2FlazugiDtUYZlbZvxBLcJKjvE5FlTuGy%2FJS8ikst7Ls&X-Amz-Signature=96c93c43b016971e18b10755df42f3f82e74d43c358dc39fbe479496d5a88c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

