---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRBK4DL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEQA%2ByGzYVXZNhQSX%2F4ZSjQ8Dnvd6NbSxVWBRw0KR9NAiBn2YWUm85qav4gb5u%2BC6wATC0yyFWJ1Inkt9OdAdqdoSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMztRgZ5qk57gxVOWXKtwD64l8cLD4ztCsVO5zD4xB3NGHWArc4G2rr0HE3DWb0tmUihE9LQc9RLSInCCsQ6oV5rtN2mLeo51PPBqRJcjidHpn4v89XpUKvKngGlvizk8Vu3zLjf0afPFbnMfNUN5KqqkheZftVxXZJvJzb8pW%2BWW1KM04Gd1oxbay0c9ZzRahZEw77G3yhje4l2nndRAxLbPxvVH14PkZSt8PkPoc3Yhua1R2r4VM8rSHdzDFSmb0DHAuDZl96YOEuXDcGbop%2B7q%2BCt40P4o%2B9QbPi3NInMciN8GUEsFay1ZvPnVz4FjIRQpL3STg8vw9RFpJJTnAk9ZMiVOBJcLCs0i7YxfggSCcRC4fV28t8RBMEa6u1d5Vv3NIKb%2FxTdEzgHuDQhk3SM%2BIOZTleQjZQzdwfrHiT3cFtPwGkJqbegnWaDZVIMaoy8HfoGuqBuaBg1PkgiB7N6D0yBTWf20BsugfLkFiiWZ%2F75hRvM5E9XaqSf6loZh8JmN5vWBHw7XZAZEpJ638%2FStttkdbwrBY1qmbsfgPByM5C%2BI3myGCgXhOymqknfwE5crF8OJSJeAJhWHKK3RGFKLD8E%2FkzLLFjOB8kpjxs0XUDUrw02fAU6qF2A27c6wfbbj%2BlyEL2GNNCTYwscDWyQY6pgHdeOaQTHQURSgihPAqgag8AWhNaDlW8p1%2BDqUuQdBv3KhbwcshABj2tUBB6SLNZmcsMJLRbCJBoSkkqfZkMfnEsaJu8uQSSgoD6kBPnQ9%2F4osvypzEMb0P3NxxcToHa4j4liujGQpxMAjXwSJYZ7Rf%2FeWF%2Fko2gs9DElNa8cBOgcbvMJlSf1CF3tOeincp53K%2Ff9Iz%2FQy0mfjcqmIUCs2WTpqYyCna&X-Amz-Signature=8e96a48930df0cad459e46cabaa65209447d05892755e34b1777d765195d013d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRBK4DL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEQA%2ByGzYVXZNhQSX%2F4ZSjQ8Dnvd6NbSxVWBRw0KR9NAiBn2YWUm85qav4gb5u%2BC6wATC0yyFWJ1Inkt9OdAdqdoSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMztRgZ5qk57gxVOWXKtwD64l8cLD4ztCsVO5zD4xB3NGHWArc4G2rr0HE3DWb0tmUihE9LQc9RLSInCCsQ6oV5rtN2mLeo51PPBqRJcjidHpn4v89XpUKvKngGlvizk8Vu3zLjf0afPFbnMfNUN5KqqkheZftVxXZJvJzb8pW%2BWW1KM04Gd1oxbay0c9ZzRahZEw77G3yhje4l2nndRAxLbPxvVH14PkZSt8PkPoc3Yhua1R2r4VM8rSHdzDFSmb0DHAuDZl96YOEuXDcGbop%2B7q%2BCt40P4o%2B9QbPi3NInMciN8GUEsFay1ZvPnVz4FjIRQpL3STg8vw9RFpJJTnAk9ZMiVOBJcLCs0i7YxfggSCcRC4fV28t8RBMEa6u1d5Vv3NIKb%2FxTdEzgHuDQhk3SM%2BIOZTleQjZQzdwfrHiT3cFtPwGkJqbegnWaDZVIMaoy8HfoGuqBuaBg1PkgiB7N6D0yBTWf20BsugfLkFiiWZ%2F75hRvM5E9XaqSf6loZh8JmN5vWBHw7XZAZEpJ638%2FStttkdbwrBY1qmbsfgPByM5C%2BI3myGCgXhOymqknfwE5crF8OJSJeAJhWHKK3RGFKLD8E%2FkzLLFjOB8kpjxs0XUDUrw02fAU6qF2A27c6wfbbj%2BlyEL2GNNCTYwscDWyQY6pgHdeOaQTHQURSgihPAqgag8AWhNaDlW8p1%2BDqUuQdBv3KhbwcshABj2tUBB6SLNZmcsMJLRbCJBoSkkqfZkMfnEsaJu8uQSSgoD6kBPnQ9%2F4osvypzEMb0P3NxxcToHa4j4liujGQpxMAjXwSJYZ7Rf%2FeWF%2Fko2gs9DElNa8cBOgcbvMJlSf1CF3tOeincp53K%2Ff9Iz%2FQy0mfjcqmIUCs2WTpqYyCna&X-Amz-Signature=27c3021fdd9e434d5ae41db36a3841b1dcbe53305283174f5bb8a75dbd4e5c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

