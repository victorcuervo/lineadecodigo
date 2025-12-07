---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7ZVXG6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAF1fPEry5FOjIi67BykcOVskkpKQVZdbAWDuDITeLUwIgMVb0wCWsp1ayL7bjgfCObU48DODH4W88WaKyvEEI%2F7kqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsMfgbdV03Ez6RZFircA6OMDaeDJ8wgq3m%2F6ZI2NPD9zK7284BoClr2v%2FmHlTKCuiiVdxZ6XN8Mj013%2BAEdO6NwMiENUFVJ22BcynmAj5wURCfC7eZ1j%2FcIUf7Km70nGOP0pyStvL132mX94f4H7wVZNZwkCL2ekLGcWT0r4%2Fs9mQ624WMStL%2FxHDWrPIJxDpt1ufUwkkiNaN8tBRyqqKk%2F%2FVwfU0Oe3pzyEmhriOU33%2FgLHNtzqPXwPGlGavSvyIxDf8hrYb0EHC8X4KanNSERsJ3wkWfRaUWsspEosgsiYNT11O8p0q1D8v9QGeJ37DNXGcbW0cVXegQpjcH9DcfRT0Uq8isgzCd8lAfl3HbnyffB67klynO29Ijrd68PEJEhfe3q4QiDi%2F47wghXoHa%2BY54LOKIkfYVeqSWnlElaWAvc%2BTgxG8V3jF61Hjw7fiIDeqOvlxdxiQB28TKergSWLgjDrcO3GKBHyxiQgMGKs8Bg8tSxgFH15%2FlxckUcYY0UuemH8ku5MUiDR2pYV9zUVnW08JXceexQlefgLI%2FrTG9axYR7TyLnV9dUKbCF8Xh35PSi3HV7ISx%2BM08hj4UbF0ji5hSPZU8SSV8%2FReK6ipIPnTbnBOp%2BIGHJEhKWLNU9e0AlmKhJX1QQMMiZ1ckGOqUB7BPe59h5Hp2JFFRS57kH%2BukZ7SSzQ9LBHAwXNhwQTIFPOI6jMuY3YjH0Wj8SDbzPGgYTTw6dU8rEyjd9Vd%2FGMn31dbdDHUkE0wBR2xEc%2BnH9P6hXS8UzaT271tXQnA53CZTjCJ5vaoFrOUjZlge06%2FKUkA3bMXNjN0QjMSxvfYIytK%2FSauY0nXgXkAeM%2FnZf0drkL7Zzpy%2B%2BrzqmRY6aTSQDS9YH&X-Amz-Signature=de8114ae2a6db4a5cc379416491eb3f8913d162600d4c0aa0da2fe9d8d414dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7ZVXG6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAF1fPEry5FOjIi67BykcOVskkpKQVZdbAWDuDITeLUwIgMVb0wCWsp1ayL7bjgfCObU48DODH4W88WaKyvEEI%2F7kqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsMfgbdV03Ez6RZFircA6OMDaeDJ8wgq3m%2F6ZI2NPD9zK7284BoClr2v%2FmHlTKCuiiVdxZ6XN8Mj013%2BAEdO6NwMiENUFVJ22BcynmAj5wURCfC7eZ1j%2FcIUf7Km70nGOP0pyStvL132mX94f4H7wVZNZwkCL2ekLGcWT0r4%2Fs9mQ624WMStL%2FxHDWrPIJxDpt1ufUwkkiNaN8tBRyqqKk%2F%2FVwfU0Oe3pzyEmhriOU33%2FgLHNtzqPXwPGlGavSvyIxDf8hrYb0EHC8X4KanNSERsJ3wkWfRaUWsspEosgsiYNT11O8p0q1D8v9QGeJ37DNXGcbW0cVXegQpjcH9DcfRT0Uq8isgzCd8lAfl3HbnyffB67klynO29Ijrd68PEJEhfe3q4QiDi%2F47wghXoHa%2BY54LOKIkfYVeqSWnlElaWAvc%2BTgxG8V3jF61Hjw7fiIDeqOvlxdxiQB28TKergSWLgjDrcO3GKBHyxiQgMGKs8Bg8tSxgFH15%2FlxckUcYY0UuemH8ku5MUiDR2pYV9zUVnW08JXceexQlefgLI%2FrTG9axYR7TyLnV9dUKbCF8Xh35PSi3HV7ISx%2BM08hj4UbF0ji5hSPZU8SSV8%2FReK6ipIPnTbnBOp%2BIGHJEhKWLNU9e0AlmKhJX1QQMMiZ1ckGOqUB7BPe59h5Hp2JFFRS57kH%2BukZ7SSzQ9LBHAwXNhwQTIFPOI6jMuY3YjH0Wj8SDbzPGgYTTw6dU8rEyjd9Vd%2FGMn31dbdDHUkE0wBR2xEc%2BnH9P6hXS8UzaT271tXQnA53CZTjCJ5vaoFrOUjZlge06%2FKUkA3bMXNjN0QjMSxvfYIytK%2FSauY0nXgXkAeM%2FnZf0drkL7Zzpy%2B%2BrzqmRY6aTSQDS9YH&X-Amz-Signature=d0451b42255668a5f2bd68a893a2b98666bbcecc9183ea31d2093aaf83ee73c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

