---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFJ2T6Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTGBvJQGTr2cGrC%2FszlJkYhzidS6fgqTePyoaSAZviYAiBBjV9772mmyaxW4%2FPQLzjoZG2KesP6eMgz8uhzdoOToSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzaK89aQpwO5fzDBsKtwDIIzMUfrMBfrCkxSXzRxsSflazbPC4Q4LoEeMdTroBaY%2FJP75Z66l01kpVpAYsKU0bX1U0UzC86qSCjXWKrQ7hrkLpj7ZBNRMxR28etefUs3gyq7kWB6xDksaQgfszVnQWY1UZlZWBnxLykB%2BsuQIc7GOUzY0yMNv61rXI9CIN5KSgYGVjf6FaXHqzklqoyNGHEyCGVkTobMWhJeTPhUuIvK8NwYcwThPPvCZ7KbHcO8IpKNV4az50BlDMEsIZEQupuWwNA2GR7UmxR45aFC4ovSSKcApPwtDKVmXJNJjLJLzUfbyg7fdTIb4c7vGYKucWHAxAG%2BhRdgVG8eBshYhpBKhrWublnmpePNdii7ZrdQDi9T9Ml58UfNRxh5cDJZ8PFSYwh7ggAAUv8XXLW4G%2BTsY5qmNGb7NTo3jI%2BDwOMbo8fGOAdMl6JFe7fBI9hH5NI0Cg91%2FkRCyr1xJ%2FGjZdAGifB%2F3e%2B8QW%2Bwsu5Ao%2BiS%2BLFgN%2FoXZISWb5oGw1zovE2KLcNzZxK29AKOwkkqdQ0thOuJ3%2FeUWja1fWugCImvlSuKwnTFCoBhevBKcp2IerEg%2B116FhsOnM9x%2FgrRZOQRtEVVB7kcyM42mGObbmQqoYPhINO9YPArPdekwo9DZyQY6pgHI3MApyaX%2FAQ8%2ByXU%2FLq1nMqdaFL0Aaczvzru986d8NILi9dm0Ozfb758zPQ6pVeJsNj4aU6hExBnAZ8OAKVb9yWrQqXuBT3VSKb1CUJN5DUW8zjwRDmUI2BBj%2B8sgqk1NLxAaKcF1l%2B%2FjSMcKw1JoNIgMLLDqOn6dyqWksGiHswAdD4%2F8ZuyKJxg2Jplv6Hbdc9f3%2FENd8wu2Z25OvaZ%2FPYPw9fW4&X-Amz-Signature=5754adb0106706d67a431dd229ec3a05a08fe2ec18ac46f0d9b411c4b96b7805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFJ2T6Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTGBvJQGTr2cGrC%2FszlJkYhzidS6fgqTePyoaSAZviYAiBBjV9772mmyaxW4%2FPQLzjoZG2KesP6eMgz8uhzdoOToSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzaK89aQpwO5fzDBsKtwDIIzMUfrMBfrCkxSXzRxsSflazbPC4Q4LoEeMdTroBaY%2FJP75Z66l01kpVpAYsKU0bX1U0UzC86qSCjXWKrQ7hrkLpj7ZBNRMxR28etefUs3gyq7kWB6xDksaQgfszVnQWY1UZlZWBnxLykB%2BsuQIc7GOUzY0yMNv61rXI9CIN5KSgYGVjf6FaXHqzklqoyNGHEyCGVkTobMWhJeTPhUuIvK8NwYcwThPPvCZ7KbHcO8IpKNV4az50BlDMEsIZEQupuWwNA2GR7UmxR45aFC4ovSSKcApPwtDKVmXJNJjLJLzUfbyg7fdTIb4c7vGYKucWHAxAG%2BhRdgVG8eBshYhpBKhrWublnmpePNdii7ZrdQDi9T9Ml58UfNRxh5cDJZ8PFSYwh7ggAAUv8XXLW4G%2BTsY5qmNGb7NTo3jI%2BDwOMbo8fGOAdMl6JFe7fBI9hH5NI0Cg91%2FkRCyr1xJ%2FGjZdAGifB%2F3e%2B8QW%2Bwsu5Ao%2BiS%2BLFgN%2FoXZISWb5oGw1zovE2KLcNzZxK29AKOwkkqdQ0thOuJ3%2FeUWja1fWugCImvlSuKwnTFCoBhevBKcp2IerEg%2B116FhsOnM9x%2FgrRZOQRtEVVB7kcyM42mGObbmQqoYPhINO9YPArPdekwo9DZyQY6pgHI3MApyaX%2FAQ8%2ByXU%2FLq1nMqdaFL0Aaczvzru986d8NILi9dm0Ozfb758zPQ6pVeJsNj4aU6hExBnAZ8OAKVb9yWrQqXuBT3VSKb1CUJN5DUW8zjwRDmUI2BBj%2B8sgqk1NLxAaKcF1l%2B%2FjSMcKw1JoNIgMLLDqOn6dyqWksGiHswAdD4%2F8ZuyKJxg2Jplv6Hbdc9f3%2FENd8wu2Z25OvaZ%2FPYPw9fW4&X-Amz-Signature=44214b92b3a3705f87678029b2a424279a4431b125ba2aeb444b5af97da75af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

