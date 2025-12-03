---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M4UIITK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA9uZ3zDUvt9QTy%2BVtLzaYUIi8hH4Wrst1kcESZkOpVzAiEApNsUT4HPVEzmKDG08a2h8CLv6St6XYa5v%2FOZfipXa3Yq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLeEVOkya63XaxsR7ircA%2BePw96PzmsrLxIQjpEU8K9AvX6Ih2smVH%2Fs8RQfAXs0RnoVwEA4qOiR8xjIeHDBMa7on16nyyuuu9lK9%2F1qk4RQ92T2uSskmScQOZCYS9xlmJ7S3U8oZ1Aw7VF2xyoQS5DZfRQpjBNzYdAIA4pD2tFHCS3YC8eJgS1VH9wAyM5CDynhyc0377gKrjdFAI5mwQ8%2Fn5Vx9fdj63LOOfQ1HUMLjMwfw%2FrPB7fpBI3WPvbaKekrKna1urN0kdgO%2BlZvrB6PfU55G4QKTgLm2guK1uBjYk7jKbKCj5qRnWuStVheO7eGH75L385%2F0WE0kxgCGJds0%2F9tjix2j1eQ8OJr9%2BXmKH8WQ2%2FapBj6NqZkP4ceGqpBkNE3gsOc6kLDmQHfGMzXDgT1O6vvvIFq%2FuYbT9T5Plc88C%2BNbNCqCkE30HjzW%2BUJ3Wt%2BXkZl9rW9M9E8rINjzZnoRtDGfAU7ikuaRRJj5893INGlrGjgREwB94xorA5HpA2r89ZBYMAegWXY9TwRJ7um%2FgZplOrEXzvoH%2Ft2F18DbjLfis%2FRmsUN8xjPaE5v6Rh%2FigiaO7OJJiIbOYx0hMRCq0pn2I88J%2B%2BkRUDCLoiyFM%2BWsQ1Ud6BlLLHjK0Pr4tkWNQb9E7O%2FMMCUvskGOqUBLL6aFHsbgYmskNDmkNG%2F8qsNXwQgx%2F9kG6fmTqpPUbbDUULWoe8wQkZWKK413GFtKq1mCNa9blc3QwneTEKF6jRgUPxKynoFQJiEgzLAXwj6sFPGOPiX818pLX0T5tDegMUXr1VmhK1DOWCf7cOGJSNsXbjZMka3k6st8uxMq7TR1gGkcTOfJkJExvFq8TGhWt0DSOATmypFzZxyDkRVBvtxDkZq&X-Amz-Signature=fa979c827f1d6a2e23c9027ca5faedf63dbe33b5e568567833ad57995ddb81af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M4UIITK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA9uZ3zDUvt9QTy%2BVtLzaYUIi8hH4Wrst1kcESZkOpVzAiEApNsUT4HPVEzmKDG08a2h8CLv6St6XYa5v%2FOZfipXa3Yq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLeEVOkya63XaxsR7ircA%2BePw96PzmsrLxIQjpEU8K9AvX6Ih2smVH%2Fs8RQfAXs0RnoVwEA4qOiR8xjIeHDBMa7on16nyyuuu9lK9%2F1qk4RQ92T2uSskmScQOZCYS9xlmJ7S3U8oZ1Aw7VF2xyoQS5DZfRQpjBNzYdAIA4pD2tFHCS3YC8eJgS1VH9wAyM5CDynhyc0377gKrjdFAI5mwQ8%2Fn5Vx9fdj63LOOfQ1HUMLjMwfw%2FrPB7fpBI3WPvbaKekrKna1urN0kdgO%2BlZvrB6PfU55G4QKTgLm2guK1uBjYk7jKbKCj5qRnWuStVheO7eGH75L385%2F0WE0kxgCGJds0%2F9tjix2j1eQ8OJr9%2BXmKH8WQ2%2FapBj6NqZkP4ceGqpBkNE3gsOc6kLDmQHfGMzXDgT1O6vvvIFq%2FuYbT9T5Plc88C%2BNbNCqCkE30HjzW%2BUJ3Wt%2BXkZl9rW9M9E8rINjzZnoRtDGfAU7ikuaRRJj5893INGlrGjgREwB94xorA5HpA2r89ZBYMAegWXY9TwRJ7um%2FgZplOrEXzvoH%2Ft2F18DbjLfis%2FRmsUN8xjPaE5v6Rh%2FigiaO7OJJiIbOYx0hMRCq0pn2I88J%2B%2BkRUDCLoiyFM%2BWsQ1Ud6BlLLHjK0Pr4tkWNQb9E7O%2FMMCUvskGOqUBLL6aFHsbgYmskNDmkNG%2F8qsNXwQgx%2F9kG6fmTqpPUbbDUULWoe8wQkZWKK413GFtKq1mCNa9blc3QwneTEKF6jRgUPxKynoFQJiEgzLAXwj6sFPGOPiX818pLX0T5tDegMUXr1VmhK1DOWCf7cOGJSNsXbjZMka3k6st8uxMq7TR1gGkcTOfJkJExvFq8TGhWt0DSOATmypFzZxyDkRVBvtxDkZq&X-Amz-Signature=5a2dc5ec55b5f937d6acb9513473473100b0e481865e600b80d007fbd3edbe5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

