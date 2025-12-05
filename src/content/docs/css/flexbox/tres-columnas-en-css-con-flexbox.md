---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QEOFMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwwoLMEFLA%2BmBzVQahq45EyuDh2FEcPJn8UiCI4RFRAiAxat7hWrUeTmweZw25RX9nVOVlFM3%2BmxAxWk2v8cRIbSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMdMmeABDmwtxzyMVlKtwD1PyEVY1i4%2BwUuFV2TRCPHSPd55y9E5v4GwQYkCkEuHPSE2BTsCo4GNMAKh21I7MbDiq7yG8bDfkR8h%2FEN9tNC4Cfsfs1NRHL9W4DazDEyojujhta8l%2BRHS%2Baas%2FGBFXnU8TNQI0s1oR%2Ff%2FQ35h6qV%2Fls0Z8FTVeEIw92HGG2DAt0ph2intULZYntR%2BoRxLawSs3JRMSRoFoLcTUUmn%2FeYaqddyOctTibdBwa1mhFbxizWQKzNBJJr7uclk8ISwOs%2B29Ln3CIAjORB02cIOojGgQYE22v0m%2FtywrJRx%2BIgBSSjBQw%2BTzxJx4utwTNlfweClPqL%2BsF2fuzib%2FZAl%2F11Q5zdbHPw9m4NBnEXFoD%2BYQiQcsZROhZ%2BFwCKN9C3sgZEiEugcoEHHFROnkX2qvNzRx5DyHxLiStAMIDZt%2BEXgqQIXivOOO%2F%2FJePDrS8jqRTX6NB7FBAjnk54wz9FFjT0FhFArYWgshT0MOb13qQa20tFv055P4BKJqcRpWRC0aikK6g895cMgU5BjMno7d18A43Brontboqkl78Nmsh5vbWjKg7LFUBA9p0FqLuzcJUZ6s8K7TU6eItdtpVib8mNd9286iulxjBl%2Bk%2FmfPLUl7c%2FD22IKnrhnmHiLIw%2F6rJyQY6pgH%2FSWlPuPV9ICZ%2BSIgKoEx8f%2BaUCY%2FadPRi9AO71SmU81I2lD5VWsQsqRWnkNS4eW5MwMrPNHO6SHo1zLey%2FgTF2HytGwMsnox7TaJyscTSV%2B0ATmjO4%2BrrYcIB84RwYtNO%2BhYPk%2FxnA3NGJnjJGZl5zxOkwcoqHknECYdtRxnDzl73y6C4Pg%2BG56P1X1rJAV4mxSWyfEYvnFtp%2FZnPkwOpqxopQPoz&X-Amz-Signature=c39813617e6c5ee74a2956b701ebe276b469baba42a8f7e4ac996b46b41b8c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QEOFMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwwoLMEFLA%2BmBzVQahq45EyuDh2FEcPJn8UiCI4RFRAiAxat7hWrUeTmweZw25RX9nVOVlFM3%2BmxAxWk2v8cRIbSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMdMmeABDmwtxzyMVlKtwD1PyEVY1i4%2BwUuFV2TRCPHSPd55y9E5v4GwQYkCkEuHPSE2BTsCo4GNMAKh21I7MbDiq7yG8bDfkR8h%2FEN9tNC4Cfsfs1NRHL9W4DazDEyojujhta8l%2BRHS%2Baas%2FGBFXnU8TNQI0s1oR%2Ff%2FQ35h6qV%2Fls0Z8FTVeEIw92HGG2DAt0ph2intULZYntR%2BoRxLawSs3JRMSRoFoLcTUUmn%2FeYaqddyOctTibdBwa1mhFbxizWQKzNBJJr7uclk8ISwOs%2B29Ln3CIAjORB02cIOojGgQYE22v0m%2FtywrJRx%2BIgBSSjBQw%2BTzxJx4utwTNlfweClPqL%2BsF2fuzib%2FZAl%2F11Q5zdbHPw9m4NBnEXFoD%2BYQiQcsZROhZ%2BFwCKN9C3sgZEiEugcoEHHFROnkX2qvNzRx5DyHxLiStAMIDZt%2BEXgqQIXivOOO%2F%2FJePDrS8jqRTX6NB7FBAjnk54wz9FFjT0FhFArYWgshT0MOb13qQa20tFv055P4BKJqcRpWRC0aikK6g895cMgU5BjMno7d18A43Brontboqkl78Nmsh5vbWjKg7LFUBA9p0FqLuzcJUZ6s8K7TU6eItdtpVib8mNd9286iulxjBl%2Bk%2FmfPLUl7c%2FD22IKnrhnmHiLIw%2F6rJyQY6pgH%2FSWlPuPV9ICZ%2BSIgKoEx8f%2BaUCY%2FadPRi9AO71SmU81I2lD5VWsQsqRWnkNS4eW5MwMrPNHO6SHo1zLey%2FgTF2HytGwMsnox7TaJyscTSV%2B0ATmjO4%2BrrYcIB84RwYtNO%2BhYPk%2FxnA3NGJnjJGZl5zxOkwcoqHknECYdtRxnDzl73y6C4Pg%2BG56P1X1rJAV4mxSWyfEYvnFtp%2FZnPkwOpqxopQPoz&X-Amz-Signature=862df176033855fc2d62e4c43a116867d090275585fa040898edb5276dc0ffb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

