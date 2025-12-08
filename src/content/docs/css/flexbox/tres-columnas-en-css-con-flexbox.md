---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5KOSTP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWB%2FhV82AztWtQmG%2FIM1Zc9nf4EPDYrLIMhzayOc2SEAIhAPx4g2Nb%2Bn7bwD1pjHAm1IQyXdOn3dTV5PeTaGSxwlN0KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY1i6CmLilWSKyGdUq3ANwsNs6AZMesK8VvU3AltAD9TtZnzjP0FH%2BRTqVlOanbW1yauhZcE3eiTcYUjq99Q0AvLU5BEgfcSnlfDQWpTd9J1A7JMPM1QhcNkG2LHqo6%2FPlT1JM4qsfnhiLi6EAzwiyPoPLVCUQUKIloY%2F1h%2FDSlQdNejNKapBg4eSPoTRX3Z6qwhpuybzrIsVCTmecikg8HrgKkV0Na2AB6CsjKg3EDmaYk%2F8mJ9Ge1WgpsHHQZZOXCNYOV23ct6Rq0gepRvFTsA9%2Fcq7aJ3dTYR6v%2BIkZK8gU8%2FM3E4MTmo%2FS4a15trmGJPeDJNYrMijLJlV9xVucDjfG05hOSHyHcvv4OdlVphD4rCaLyzqs%2BtwPJrkC916AIi6O3jdUaJEJMHiXgjmHEoAObBZs7HP%2Flq3OPRWzQUtBzyBm8d5HElZBumkgfpgHjVkzbooQ8CvIhrdGPXIskKar8DdldJl7QdzARzJMfSXs9kHosaHUSfHQ%2BvtuHX6UeYhvvxOmYok9EEguYWu%2BDdHiA8qo4J54uLO2D3XRnhpjzQ1vx2UBWTSei4pzyzsWd7CwtOc7oASSutC1w7WsJFmaz3rvaHgNl7xCNVR51n%2B7X92n4ROV%2BC%2FpHN5LP%2BD0ZaGgymQgg2qDljDkod3JBjqkAXhHpIY89gpWqyBlAxY9gP7eVJwUZgCS05efnJlbqoK1l%2FoXys5JQn9eax1DNDio2up9lLQTFiT%2FTsSYDjEP3bcQniRZMzMd4PVoH0pPXbTRmjCxzBI7w2smBgakUjZFo7oMjzzm8e9JV65hLxoB93Y1spVv2yF6p1EXcSuLT0f%2Biy9k4ozLdWmKGeXLxAFsDDaK8SicKjqSMY6EF3p19rvgMQ1M&X-Amz-Signature=66323b0496489312f13a34af0efe69263ff92ac2981130cea85a560e6e7062fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5KOSTP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWB%2FhV82AztWtQmG%2FIM1Zc9nf4EPDYrLIMhzayOc2SEAIhAPx4g2Nb%2Bn7bwD1pjHAm1IQyXdOn3dTV5PeTaGSxwlN0KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY1i6CmLilWSKyGdUq3ANwsNs6AZMesK8VvU3AltAD9TtZnzjP0FH%2BRTqVlOanbW1yauhZcE3eiTcYUjq99Q0AvLU5BEgfcSnlfDQWpTd9J1A7JMPM1QhcNkG2LHqo6%2FPlT1JM4qsfnhiLi6EAzwiyPoPLVCUQUKIloY%2F1h%2FDSlQdNejNKapBg4eSPoTRX3Z6qwhpuybzrIsVCTmecikg8HrgKkV0Na2AB6CsjKg3EDmaYk%2F8mJ9Ge1WgpsHHQZZOXCNYOV23ct6Rq0gepRvFTsA9%2Fcq7aJ3dTYR6v%2BIkZK8gU8%2FM3E4MTmo%2FS4a15trmGJPeDJNYrMijLJlV9xVucDjfG05hOSHyHcvv4OdlVphD4rCaLyzqs%2BtwPJrkC916AIi6O3jdUaJEJMHiXgjmHEoAObBZs7HP%2Flq3OPRWzQUtBzyBm8d5HElZBumkgfpgHjVkzbooQ8CvIhrdGPXIskKar8DdldJl7QdzARzJMfSXs9kHosaHUSfHQ%2BvtuHX6UeYhvvxOmYok9EEguYWu%2BDdHiA8qo4J54uLO2D3XRnhpjzQ1vx2UBWTSei4pzyzsWd7CwtOc7oASSutC1w7WsJFmaz3rvaHgNl7xCNVR51n%2B7X92n4ROV%2BC%2FpHN5LP%2BD0ZaGgymQgg2qDljDkod3JBjqkAXhHpIY89gpWqyBlAxY9gP7eVJwUZgCS05efnJlbqoK1l%2FoXys5JQn9eax1DNDio2up9lLQTFiT%2FTsSYDjEP3bcQniRZMzMd4PVoH0pPXbTRmjCxzBI7w2smBgakUjZFo7oMjzzm8e9JV65hLxoB93Y1spVv2yF6p1EXcSuLT0f%2Biy9k4ozLdWmKGeXLxAFsDDaK8SicKjqSMY6EF3p19rvgMQ1M&X-Amz-Signature=bb26795eec2e11590f8db420c7c3d02326f99195262a1719fbc8fdfd7a369c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

