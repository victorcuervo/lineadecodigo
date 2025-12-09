---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6CYWOQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY9ciGj3EJHUFT0T%2BqQUlL73%2FcCZ0aJwWn0nm0Lj6qtAiBOiUQaKRfZJlrOFdBX9ym2kR%2FinwDSiJe%2FQWpW7EXDrSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtzjZ8d8VJ6OM2%2FzAKtwDB%2FdxUqMtpxvH%2FzL69yX5i%2FL%2B54%2F8QjT02izlRR9esdm%2F83tDIhr3hs63%2FF6sE2C0amLXw43rR%2BB6alCQmzCMHmDZEJ9n1sSLgA%2Fth0yAUAFlHHbKlInKELRTJWAd2hwqygiyklYrHomNnhUOKXXBaxo7ck%2Bbl0gq%2FXnN4hBJJea94EwrsLPEQMmdVvY8Y7VZoB4tvm%2F6PcuPTkqrfypM1HrXv5OPvA7pu4tO%2FBBgFMnAbVE4%2Fm2uQkdNb4O%2BwL5rKCAtNxBJWIyjEho5gLw6fAJjFaYdeHogrroiyvM7mR0MlLM0YMstUOVF%2BPNbN1Q%2FALW9f3V3LwrPfY%2Fl7c%2FIDR3iU9qFEcfVIFaUb9cbofmnlu6DmLTfs5OzIfyMNoDnWL2JwRoIgQt1TYJEXo1ILrFgK9Ns4qlYldsh1TO76W8nezq96cK2G%2BXVQHOPOBugNOkAiZ%2BxN8VZ2x%2BJUPNKNAnkCMa%2FZ2%2BNMtDTPnQxHn74P5scQIsCcTRBuc5gax0f298DHPQbFq8GIwH2HAaXRFyvlofy2V5kX%2BEcthJVDQT29QZb1Rigyv%2FL%2B%2FAgo1165D9pA%2BH7tOnpEKGHwzxCr%2BzqHj8a2wZ0dkqONQOxlQA8KZH6uWPiv%2B1SFWowo67eyQY6pgGUSVha83i9QiptlNVRF%2B1Bly6wbJ9afvb%2BPgn%2BfuMyDXOWFz3RnkwZgkmJMzKzJENVlGMlNiTHywEMpLbzsGpdFLEKgV%2BacWQIycR3ETRFAdOqdtuNWY%2F7GPKAiwtqbd%2BwMM1oUzGtCnsYWZ5u1lRhMn7WiQKqCFAWSm9PBYjn219z14iBdlFDnYz%2Ft26OSXp6Q6Ru71KVVMuwNFcC6ooeF2b3E2oo&X-Amz-Signature=db397fa561d13d2dbf2d494ee34331a9c3d3d68fccb5e081182160ce2e767c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6CYWOQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY9ciGj3EJHUFT0T%2BqQUlL73%2FcCZ0aJwWn0nm0Lj6qtAiBOiUQaKRfZJlrOFdBX9ym2kR%2FinwDSiJe%2FQWpW7EXDrSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtzjZ8d8VJ6OM2%2FzAKtwDB%2FdxUqMtpxvH%2FzL69yX5i%2FL%2B54%2F8QjT02izlRR9esdm%2F83tDIhr3hs63%2FF6sE2C0amLXw43rR%2BB6alCQmzCMHmDZEJ9n1sSLgA%2Fth0yAUAFlHHbKlInKELRTJWAd2hwqygiyklYrHomNnhUOKXXBaxo7ck%2Bbl0gq%2FXnN4hBJJea94EwrsLPEQMmdVvY8Y7VZoB4tvm%2F6PcuPTkqrfypM1HrXv5OPvA7pu4tO%2FBBgFMnAbVE4%2Fm2uQkdNb4O%2BwL5rKCAtNxBJWIyjEho5gLw6fAJjFaYdeHogrroiyvM7mR0MlLM0YMstUOVF%2BPNbN1Q%2FALW9f3V3LwrPfY%2Fl7c%2FIDR3iU9qFEcfVIFaUb9cbofmnlu6DmLTfs5OzIfyMNoDnWL2JwRoIgQt1TYJEXo1ILrFgK9Ns4qlYldsh1TO76W8nezq96cK2G%2BXVQHOPOBugNOkAiZ%2BxN8VZ2x%2BJUPNKNAnkCMa%2FZ2%2BNMtDTPnQxHn74P5scQIsCcTRBuc5gax0f298DHPQbFq8GIwH2HAaXRFyvlofy2V5kX%2BEcthJVDQT29QZb1Rigyv%2FL%2B%2FAgo1165D9pA%2BH7tOnpEKGHwzxCr%2BzqHj8a2wZ0dkqONQOxlQA8KZH6uWPiv%2B1SFWowo67eyQY6pgGUSVha83i9QiptlNVRF%2B1Bly6wbJ9afvb%2BPgn%2BfuMyDXOWFz3RnkwZgkmJMzKzJENVlGMlNiTHywEMpLbzsGpdFLEKgV%2BacWQIycR3ETRFAdOqdtuNWY%2F7GPKAiwtqbd%2BwMM1oUzGtCnsYWZ5u1lRhMn7WiQKqCFAWSm9PBYjn219z14iBdlFDnYz%2Ft26OSXp6Q6Ru71KVVMuwNFcC6ooeF2b3E2oo&X-Amz-Signature=a68c04be7f56b3bc8649eb4bffa391e5ba52593664588e2e14a5504d0d8bc98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

