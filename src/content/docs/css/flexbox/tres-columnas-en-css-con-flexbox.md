---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WWUWKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfstnMOaCK2zpwuGnMOKVurkVS%2B%2BE7%2Boiyh9TGVT6ONwIhAM%2F5oa3KjpIB4IWtDiaHPtM%2BsPS40iS1DIx%2B%2FC845PxTKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYglILoeTutSVIghUq3AMPIsseIMZmQGZIZSqAFyw0RRVBN%2BkO%2BLqR0VilGADE06InYDIgWRzzD7V4g0Mh2u7wZvY%2BBAMGe9yDaBTA2b4Mq8ee0RYf5A%2F9K9IMS0hFpvWQ6LTyJz0ZOsIDmZBzj10iugSDxZN2t0fB39%2FdimXR7aXQLD1lPslwWP0Nd7l2IKcCQYAnzDsr4OzXtu90Ed7HynVtWGby%2BJUaAEljT3YxJ5SPB7ASIGRJMrTkGURl9eUJ2%2FpI6IX%2BMx6gsSv16XcLluyNexRwETrjLg5UdAqk1LnTupOFl%2Bv2liU0ksvYc0Lf2hNMzgTmUV%2FT58JMdGq0j8vYcccMjnqg3AA9HJl4v%2BhIPQTDtaPYngqggpJHfM7oRmjJ6Q7GRUYh5n8IYTk4q2blgYJCeKnQHAZB4fRZi3H3irbLqPYE2pCVzab0nZQQqC6CgPGAAFmNyq4Qk%2FXFAmtWH205yIwLw4KVcVIzRJ0khJmgBy9jucRkMFW0dMXLQQLvaIDghZG5Dr9sppyaAtx%2FCFLk0Uo14bFaxyNCb2x%2B3ecAoEk9emO2qk1bjOkelsuA%2BFs1%2BS6rTgu74wC9MGCZVHaMhv7e0QyfWEjyH6R2wVa%2BXSvq6oOW5wTYUzI42mK8IGqtA4%2B4JDCo7dnJBjqkAesy1OX65LBaR9d77cUU3nF2F8Ru0wq3DdvR8exqu6Qub6a2N86OeBTPdZyZYFwvu4E7%2BfWsOP%2FrYNBVgKiwLxE6hTU06nzBJtlwoONQErTZMxHvSvvsVThz7IxDWUB%2BOQB3bFhKxtdELtOntpVL1WQhCu%2FgixVbbAGzCc1oDVWH6tvsf8SDUhKdcMbHzneYUS2x4ryPywSmF2XGcoQ1%2B0PTcX%2F8&X-Amz-Signature=15bbd489a1b7f133eb65b353f97d22778fe05c5b8d9bb832e9f5058c6a8cacb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WWUWKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfstnMOaCK2zpwuGnMOKVurkVS%2B%2BE7%2Boiyh9TGVT6ONwIhAM%2F5oa3KjpIB4IWtDiaHPtM%2BsPS40iS1DIx%2B%2FC845PxTKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYglILoeTutSVIghUq3AMPIsseIMZmQGZIZSqAFyw0RRVBN%2BkO%2BLqR0VilGADE06InYDIgWRzzD7V4g0Mh2u7wZvY%2BBAMGe9yDaBTA2b4Mq8ee0RYf5A%2F9K9IMS0hFpvWQ6LTyJz0ZOsIDmZBzj10iugSDxZN2t0fB39%2FdimXR7aXQLD1lPslwWP0Nd7l2IKcCQYAnzDsr4OzXtu90Ed7HynVtWGby%2BJUaAEljT3YxJ5SPB7ASIGRJMrTkGURl9eUJ2%2FpI6IX%2BMx6gsSv16XcLluyNexRwETrjLg5UdAqk1LnTupOFl%2Bv2liU0ksvYc0Lf2hNMzgTmUV%2FT58JMdGq0j8vYcccMjnqg3AA9HJl4v%2BhIPQTDtaPYngqggpJHfM7oRmjJ6Q7GRUYh5n8IYTk4q2blgYJCeKnQHAZB4fRZi3H3irbLqPYE2pCVzab0nZQQqC6CgPGAAFmNyq4Qk%2FXFAmtWH205yIwLw4KVcVIzRJ0khJmgBy9jucRkMFW0dMXLQQLvaIDghZG5Dr9sppyaAtx%2FCFLk0Uo14bFaxyNCb2x%2B3ecAoEk9emO2qk1bjOkelsuA%2BFs1%2BS6rTgu74wC9MGCZVHaMhv7e0QyfWEjyH6R2wVa%2BXSvq6oOW5wTYUzI42mK8IGqtA4%2B4JDCo7dnJBjqkAesy1OX65LBaR9d77cUU3nF2F8Ru0wq3DdvR8exqu6Qub6a2N86OeBTPdZyZYFwvu4E7%2BfWsOP%2FrYNBVgKiwLxE6hTU06nzBJtlwoONQErTZMxHvSvvsVThz7IxDWUB%2BOQB3bFhKxtdELtOntpVL1WQhCu%2FgixVbbAGzCc1oDVWH6tvsf8SDUhKdcMbHzneYUS2x4ryPywSmF2XGcoQ1%2B0PTcX%2F8&X-Amz-Signature=31446571a6e1f2a36540789e724e547c76f48de4b63dfce671ae1eb94b0a20c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

