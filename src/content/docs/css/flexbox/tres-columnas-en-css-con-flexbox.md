---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37SVIAZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1fwjfPdQf%2BWRuqgAUVdaSHlki%2F5tSzn0ur2M0vN%2FcxQIhAPS5YxoRAb%2F%2BcnazUXlUBQDDSQgKfSX6Q96c2nTfSNMLKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXr2O9kjzgKmsHQF0q3ANkpMwwh6NE%2BgYQQH7ycpf0PD9RdAQh%2FuBWx9DytLYUkAXF1PoDn1gEr7L8ndIRx4ukUZ4kC4NHmFfJDXWsR%2Fp%2FWE1Q18kN8IeqrdQ7epS9R6EVh822efev8Ycb9wnTDT%2FnZ7PtR%2FnTecHZx%2FNXzpuLnFONEYWK1y1nRpFKJ2MJv%2Buo4FWoZczFhfqbBFHX3opWV%2FWbwtd0JQ73YfRauw85qIGbRxei0lfKs2vJiDBuLDeFFAtJ6hWIfoF5SZkWK9M%2FZXQ9oTHUl4SU2jknTQirQLdE1kUh4NTxz4sEJ6%2FDBqH9S4m1dxcLwLEAx990ibrY6BVa4nD0OyGhlVG5SToDWMaDqlEbX7ZoX%2BEh9i3vWotsnJSBAD37mLUKN4s20sKu7fSKdbmOZTgRrJOZeTYmPcjf0hWl3BJMy0cuzvmGpdj%2BUGlO7iqB3GJi1oq4eZdffqRBkn4mSPVQJBgJ6khskMc4WX1H1kQ7a6orFe19Nojdh5o2AO2NEnOWNCc2kVar972uavtPgbEBjridi36VeNKjG9IwMgLRqthwHtGpCY59okFNh%2BfopTMs7S2wzz%2BGEqapPv3moOw0NXvRO3Aw84hkn0iziADMzxp0e7jfegzh01xCb7DLW7hfLzClh9%2FJBjqkAekgitQn63Jigx51CwGyvrz8s9K%2BvBXhbOFMSlUozBVNuvj4tUGXjBkhQfZ7t1Gp1nmfZlw1cXOgvoY17N3IRPmq5OiXsErWkAd4JvaJaXuBw5iH16mvXeStz7q201RswFoFZ%2BqYMmes66p45sdXoS8YFeLRnjw6nKu3kc6YFD8DedMTEKPVO3gQdFdrzzUwNruifiJC8kiXH2uu%2F9Om9ESJyfgR&X-Amz-Signature=1aa9b5079c1f6546455c0f5a6cb1e6cc20b4cc8f4ee38a3413c40903eadb4c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37SVIAZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1fwjfPdQf%2BWRuqgAUVdaSHlki%2F5tSzn0ur2M0vN%2FcxQIhAPS5YxoRAb%2F%2BcnazUXlUBQDDSQgKfSX6Q96c2nTfSNMLKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXr2O9kjzgKmsHQF0q3ANkpMwwh6NE%2BgYQQH7ycpf0PD9RdAQh%2FuBWx9DytLYUkAXF1PoDn1gEr7L8ndIRx4ukUZ4kC4NHmFfJDXWsR%2Fp%2FWE1Q18kN8IeqrdQ7epS9R6EVh822efev8Ycb9wnTDT%2FnZ7PtR%2FnTecHZx%2FNXzpuLnFONEYWK1y1nRpFKJ2MJv%2Buo4FWoZczFhfqbBFHX3opWV%2FWbwtd0JQ73YfRauw85qIGbRxei0lfKs2vJiDBuLDeFFAtJ6hWIfoF5SZkWK9M%2FZXQ9oTHUl4SU2jknTQirQLdE1kUh4NTxz4sEJ6%2FDBqH9S4m1dxcLwLEAx990ibrY6BVa4nD0OyGhlVG5SToDWMaDqlEbX7ZoX%2BEh9i3vWotsnJSBAD37mLUKN4s20sKu7fSKdbmOZTgRrJOZeTYmPcjf0hWl3BJMy0cuzvmGpdj%2BUGlO7iqB3GJi1oq4eZdffqRBkn4mSPVQJBgJ6khskMc4WX1H1kQ7a6orFe19Nojdh5o2AO2NEnOWNCc2kVar972uavtPgbEBjridi36VeNKjG9IwMgLRqthwHtGpCY59okFNh%2BfopTMs7S2wzz%2BGEqapPv3moOw0NXvRO3Aw84hkn0iziADMzxp0e7jfegzh01xCb7DLW7hfLzClh9%2FJBjqkAekgitQn63Jigx51CwGyvrz8s9K%2BvBXhbOFMSlUozBVNuvj4tUGXjBkhQfZ7t1Gp1nmfZlw1cXOgvoY17N3IRPmq5OiXsErWkAd4JvaJaXuBw5iH16mvXeStz7q201RswFoFZ%2BqYMmes66p45sdXoS8YFeLRnjw6nKu3kc6YFD8DedMTEKPVO3gQdFdrzzUwNruifiJC8kiXH2uu%2F9Om9ESJyfgR&X-Amz-Signature=11c5588d0b4547f0f1023e51b8374094df84088642ebcf711cfe5622fc093752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

