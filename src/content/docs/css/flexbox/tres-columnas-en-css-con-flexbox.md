---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAZX3VN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyga%2FLb%2B1QogWWKpV67RSW8mNBzeoBIOQuBfQxRD1IFQIhANGxYgwHhRYDqPmL2AushhaY7F%2Fvda5fCJ76KOYsq5stKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTumZeE81n%2FtALgqYq3ANf8qsSVWsM1MZiT21mnwENveBmj14Js0delBxDAB4OL4aOYOkZwSf0%2BkP%2Bjv8ofxO6pTYwu6%2BgZJjqcCgj1bSdt0CCImAoidUoRMEVqy0CoFj%2BD0IS5lCa5EDYiLrjCyoQ7amNuIji242SXhCNXCyVBK1f6IgL5MGFiJq2KJNBikABPBInhEozdHtlIejtjeMjqqQ%2Bj6xhkg5atQvQDKjtVAHVkpUzzvQEmTEZArjhPJHN2rYLtxovoCefFAC3EYjI%2F4tRJpvXAhsq4XGgUaDt5XwlrVL2yrFbBFVZnnxhH8%2FnTgKNLVKhz42fbX9MIEE%2F50VXMKGOmhbd7%2BcI80CRG6ixGAwXCtyu5Si5zn8pR0Mv5dtTK63WEkA5R9EJ3DrXRiX2Kj1xrLsWJTTlHLgUs4xMrbKcBIKhkErqdM7oqSR2kP3WSTrPeD9DztRlVLcH1csw7K9oOZrvPh1TU3RTrbwg3SF560vAaf62Sb48%2BmAcwyLFNYYErfMnXAI8lyEkNoMp7V3IBQYnhSC9S0hWH4IHupUlyNPuw7yXiHYV2o5ThifNrqDacTJSH1aovngjEYC5DtKH9QS8%2Bc8WTXEv%2Fwa77uqTpI0DK6fcrpQAUkyxu1TtIuYdnQHO%2BDDf7dnJBjqkAUJhKDUDMbzdmpSAKcQiinj4rHLSma9lZM6KIxcuE0JyqsgUrX7KXkrUDKvNWR5Kl9yOiu3CVWcWou%2F3FHVVG6CXgN24q1yTPejzhinsMZxTr9coeB6Fin1fWCO9HUv6XgIaohLQFEEkJCr6oMTTiaqQLBEzK62P5L3dM2DtuKTDFklLN9S2dXyt%2BAnR558RfJxSpL5ft7VDMCQFDoyiLn7c9HBZ&X-Amz-Signature=c656bdf00d3f37f62254ea61977c652fb8f45f9eb915dd403cb6e45b1ce0210c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAZX3VN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyga%2FLb%2B1QogWWKpV67RSW8mNBzeoBIOQuBfQxRD1IFQIhANGxYgwHhRYDqPmL2AushhaY7F%2Fvda5fCJ76KOYsq5stKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTumZeE81n%2FtALgqYq3ANf8qsSVWsM1MZiT21mnwENveBmj14Js0delBxDAB4OL4aOYOkZwSf0%2BkP%2Bjv8ofxO6pTYwu6%2BgZJjqcCgj1bSdt0CCImAoidUoRMEVqy0CoFj%2BD0IS5lCa5EDYiLrjCyoQ7amNuIji242SXhCNXCyVBK1f6IgL5MGFiJq2KJNBikABPBInhEozdHtlIejtjeMjqqQ%2Bj6xhkg5atQvQDKjtVAHVkpUzzvQEmTEZArjhPJHN2rYLtxovoCefFAC3EYjI%2F4tRJpvXAhsq4XGgUaDt5XwlrVL2yrFbBFVZnnxhH8%2FnTgKNLVKhz42fbX9MIEE%2F50VXMKGOmhbd7%2BcI80CRG6ixGAwXCtyu5Si5zn8pR0Mv5dtTK63WEkA5R9EJ3DrXRiX2Kj1xrLsWJTTlHLgUs4xMrbKcBIKhkErqdM7oqSR2kP3WSTrPeD9DztRlVLcH1csw7K9oOZrvPh1TU3RTrbwg3SF560vAaf62Sb48%2BmAcwyLFNYYErfMnXAI8lyEkNoMp7V3IBQYnhSC9S0hWH4IHupUlyNPuw7yXiHYV2o5ThifNrqDacTJSH1aovngjEYC5DtKH9QS8%2Bc8WTXEv%2Fwa77uqTpI0DK6fcrpQAUkyxu1TtIuYdnQHO%2BDDf7dnJBjqkAUJhKDUDMbzdmpSAKcQiinj4rHLSma9lZM6KIxcuE0JyqsgUrX7KXkrUDKvNWR5Kl9yOiu3CVWcWou%2F3FHVVG6CXgN24q1yTPejzhinsMZxTr9coeB6Fin1fWCO9HUv6XgIaohLQFEEkJCr6oMTTiaqQLBEzK62P5L3dM2DtuKTDFklLN9S2dXyt%2BAnR558RfJxSpL5ft7VDMCQFDoyiLn7c9HBZ&X-Amz-Signature=9714b45a87e90b93b25c3509a5f641316c5d15a388756bcf3e84a747b7110b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

