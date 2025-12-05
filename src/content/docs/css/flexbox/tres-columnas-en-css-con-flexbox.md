---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLDMRKUY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvUWXmwU%2FcBrdKBXaXsJFepiCoC6BNevwHa5FJvs41NwIhAPjNMtG2d%2FEWML5ZON9JX9m%2FVbYvX0KITnTvJ367XrEQKv8DCE8QABoMNjM3NDIzMTgzODA1IgxES%2Bf7edFqnjmjpbsq3AMCKr8AsRXQpt2xhFc%2Bolv%2FmVheosnTLdxCB9dR3XwgAgEHYpX69hajxtkAdq%2FcMkQQgX8rv0gYjx4zU44xfoykT%2BiV0R4ECbZML8sp0aE1yrE0C1L0EPWXIjGpfFhodjMs2k8pLAx1HkQINF0R4Kgc6m6TiVO11vJAV7xYCEH9haPitccclEyny3vNvHC4jRXn70tUgDHxd2wdAkV6TKm0mey2HAn9%2F57iEPGjEpFDt9dMhQjiH5Qe7ZhH%2BnSmQYnL%2BQm6hFUHxdL4jJ%2BG6k1CDN6Q1mElvKsjPh1hG0qR5QiK5FOLz6FVpSxi3VI8aW3tfQhctSxtPpJ%2B%2F55bqkJIPgUioM47YUbxKY8SI%2BZ%2BmEeCmASmFWyyCi7GikjMth%2BvSIapAjxQl2uExCVR7i6sKk8hVN99bhj00LZEjuN1%2FLG5ftx%2FWrOa7qNahu%2F5znQE%2BD1%2FuyzW0Sy6h7e8nuSLHtswhgF%2BmgVHy52aiGfZf0fJWYr%2BRwmbJYcs%2B172x3aypnCShBtPBUMOaqNIyY0YGhAT3q%2BCCi43pIVXp%2BSHpdVFJvkFdGwEiMTn%2BAfZoONy8yMMo7TAYl%2FhcMW7l9PllX7nQi3piTFdJrVNtQsrvnYUwXz3eZcbgO7nFDDWjMjJBjqkAXX1wxCzEOWvvlR7nUy%2BgnGRoJDGPmkURxkKuuPsXLuUn%2FiabSRZZhWHE6U3uJZxVsTNnjLFp0sVf4COfXofow2fUDic1Jkiqiiwu7A4BkBRU%2BL3yGBat8LP5KlrteEc%2BBVpcJknTBIqznD4ZQGlnK6llOWuH%2BW86SAsOxC2OwfUoJnzA8Uf1lnCwMI8W84A2Bj8PvcVyK%2BjUAq6%2ByaBS0%2FE1KhZ&X-Amz-Signature=edec65193e6fd1738c2f2bb438f8a2c3d359fb89c5d19ccbef815c483bfe6139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLDMRKUY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvUWXmwU%2FcBrdKBXaXsJFepiCoC6BNevwHa5FJvs41NwIhAPjNMtG2d%2FEWML5ZON9JX9m%2FVbYvX0KITnTvJ367XrEQKv8DCE8QABoMNjM3NDIzMTgzODA1IgxES%2Bf7edFqnjmjpbsq3AMCKr8AsRXQpt2xhFc%2Bolv%2FmVheosnTLdxCB9dR3XwgAgEHYpX69hajxtkAdq%2FcMkQQgX8rv0gYjx4zU44xfoykT%2BiV0R4ECbZML8sp0aE1yrE0C1L0EPWXIjGpfFhodjMs2k8pLAx1HkQINF0R4Kgc6m6TiVO11vJAV7xYCEH9haPitccclEyny3vNvHC4jRXn70tUgDHxd2wdAkV6TKm0mey2HAn9%2F57iEPGjEpFDt9dMhQjiH5Qe7ZhH%2BnSmQYnL%2BQm6hFUHxdL4jJ%2BG6k1CDN6Q1mElvKsjPh1hG0qR5QiK5FOLz6FVpSxi3VI8aW3tfQhctSxtPpJ%2B%2F55bqkJIPgUioM47YUbxKY8SI%2BZ%2BmEeCmASmFWyyCi7GikjMth%2BvSIapAjxQl2uExCVR7i6sKk8hVN99bhj00LZEjuN1%2FLG5ftx%2FWrOa7qNahu%2F5znQE%2BD1%2FuyzW0Sy6h7e8nuSLHtswhgF%2BmgVHy52aiGfZf0fJWYr%2BRwmbJYcs%2B172x3aypnCShBtPBUMOaqNIyY0YGhAT3q%2BCCi43pIVXp%2BSHpdVFJvkFdGwEiMTn%2BAfZoONy8yMMo7TAYl%2FhcMW7l9PllX7nQi3piTFdJrVNtQsrvnYUwXz3eZcbgO7nFDDWjMjJBjqkAXX1wxCzEOWvvlR7nUy%2BgnGRoJDGPmkURxkKuuPsXLuUn%2FiabSRZZhWHE6U3uJZxVsTNnjLFp0sVf4COfXofow2fUDic1Jkiqiiwu7A4BkBRU%2BL3yGBat8LP5KlrteEc%2BBVpcJknTBIqznD4ZQGlnK6llOWuH%2BW86SAsOxC2OwfUoJnzA8Uf1lnCwMI8W84A2Bj8PvcVyK%2BjUAq6%2ByaBS0%2FE1KhZ&X-Amz-Signature=e47bcc421c8e167aac8fa1c7b5538239ca74247ef203d2d8871e0a1f1bccd96a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

