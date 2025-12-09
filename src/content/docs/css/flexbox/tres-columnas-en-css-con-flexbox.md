---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7I4GWG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvoihouEFGx221QDJeiatZ8rM4uLoxYBBWjl4zGMUwcAiBsZ5IaDy2eId%2BgZBmHu2E94jy6R1GrD%2FACBEL%2Burn03yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT2B0E0hLebLVPtciKtwDRYlIghVkIUq2bhQuXUcVfooM4ckvApiEhlvIsuyFU4kwLujK7JuRGRdNGiIqzdZ46KdJ9KowiE2ivIR%2FNCTU6ZC1N33Mt3Glut5e%2BIlBc290Kl8QDnrHq9ZEtwVjiWOJA1hOr5smjJZI44fGtT%2Ffz2H3kTMvxuNF9E%2FT3AUFuSxGUZZK%2F9E3t1HrIQFBHUduMuhreHx5%2FZG2AMMaJIq%2F2AVViT0ZMw5pv5M8VgnejoYueQjlzBTxe11GjlrLSsuoJ%2BATumHJ7hZb6ms10Df9sanzvRGqr77367%2F1mAGzKloCv0%2Fh0lE4b%2FE41im0f0jYmgIF7BKjBo7DPxVHq2lvRWV%2Fzs9KLTMmbKb7ah8cHb5eWNtPGngWOaNgCa3vyFVvWM5oU1AJssaCQmGlRaBt1TrYa7ZfA5VVQ88W5vyhKqM%2FJz1WahfavKh6ltB%2FgsbOmpf4CowBEPZCmgxSbcKiBlw6E0bNlcaFTDTWFsh3sdQtp9qFl7E%2BfA9nZgF%2FwgRqf7G4mH2yoVJ4SsNFPAXCkXH%2FqI28NGUTmHXgvWY%2FHucl1f5SprmIAip5iIjQF2QjjGh2GvnAal2VJe0aPcJPgR%2FDyBxM4Gq5zFnhcCyzP8quK2YKSFKnbO7b4g8w0I3eyQY6pgHsnWhJmHSqvJQ8r4eYz3SYn5Ilf6porFCq5kz86Z9KBiKKuz03WtjCEBgUxTl2lTEDC3gBl1%2B2xpuhR2GFO2hZygYhAPRy5%2FtRKkr1BPVtUnP9X7K8uno5vcYTr4oxQtStefTuGE7gmhgvhjLWDu%2FQ6hK%2FWHHSVz2h%2FneiN27RlJJNt%2BIZvr3y%2BLcds2QmMv0xCndjDiM4K0Tht%2BrJBV73PXMQexg8&X-Amz-Signature=a72458a402744f4a1806e7938330ee038d6a83f5e89573e79dc5f16c5d557995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7I4GWG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvoihouEFGx221QDJeiatZ8rM4uLoxYBBWjl4zGMUwcAiBsZ5IaDy2eId%2BgZBmHu2E94jy6R1GrD%2FACBEL%2Burn03yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT2B0E0hLebLVPtciKtwDRYlIghVkIUq2bhQuXUcVfooM4ckvApiEhlvIsuyFU4kwLujK7JuRGRdNGiIqzdZ46KdJ9KowiE2ivIR%2FNCTU6ZC1N33Mt3Glut5e%2BIlBc290Kl8QDnrHq9ZEtwVjiWOJA1hOr5smjJZI44fGtT%2Ffz2H3kTMvxuNF9E%2FT3AUFuSxGUZZK%2F9E3t1HrIQFBHUduMuhreHx5%2FZG2AMMaJIq%2F2AVViT0ZMw5pv5M8VgnejoYueQjlzBTxe11GjlrLSsuoJ%2BATumHJ7hZb6ms10Df9sanzvRGqr77367%2F1mAGzKloCv0%2Fh0lE4b%2FE41im0f0jYmgIF7BKjBo7DPxVHq2lvRWV%2Fzs9KLTMmbKb7ah8cHb5eWNtPGngWOaNgCa3vyFVvWM5oU1AJssaCQmGlRaBt1TrYa7ZfA5VVQ88W5vyhKqM%2FJz1WahfavKh6ltB%2FgsbOmpf4CowBEPZCmgxSbcKiBlw6E0bNlcaFTDTWFsh3sdQtp9qFl7E%2BfA9nZgF%2FwgRqf7G4mH2yoVJ4SsNFPAXCkXH%2FqI28NGUTmHXgvWY%2FHucl1f5SprmIAip5iIjQF2QjjGh2GvnAal2VJe0aPcJPgR%2FDyBxM4Gq5zFnhcCyzP8quK2YKSFKnbO7b4g8w0I3eyQY6pgHsnWhJmHSqvJQ8r4eYz3SYn5Ilf6porFCq5kz86Z9KBiKKuz03WtjCEBgUxTl2lTEDC3gBl1%2B2xpuhR2GFO2hZygYhAPRy5%2FtRKkr1BPVtUnP9X7K8uno5vcYTr4oxQtStefTuGE7gmhgvhjLWDu%2FQ6hK%2FWHHSVz2h%2FneiN27RlJJNt%2BIZvr3y%2BLcds2QmMv0xCndjDiM4K0Tht%2BrJBV73PXMQexg8&X-Amz-Signature=c3fd3874a6e3786686d3d90ecc638281cba48d424be786a575dfff03bb73b17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

