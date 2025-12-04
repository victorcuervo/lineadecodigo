---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THA7AOPX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCa%2FcT4aC9qcLfKtYqC8lElccqUTfsBBn9BdN4neqEhiQIgBuMRMWTbB%2FsQibrs8O%2F5gTQM%2Fa3nE93bMxZeVOHj%2BMIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBy5%2BTTgR9dUqHGSlCrcA1Wuqu2oDZ5xaB8hkjJepgkj5dL%2Bk5bWvwKdDvdLKBN2AJYoNPa8dzlCoHTcN33b7Rc8LyEYTYi4gsIyDf059Xzt%2BbEGlJlqS%2B1xB8QdR%2FHXr%2FucK1OkDoTR3JVuElTF6eH6tKv5c8grvSTQAdqqIUGw6Lvgx2njEvmaHR2o1qdSt%2Fy0sdIg7IQJV9HTvl5la45oGoaQg%2FGnMpUSCQo%2BqoQta2iFYG5TeZ5ouHpmjdx6YBoMfDDelxBJI%2Bd8hyrqoZ2t2reeN7n7YOH7Y6yiGnErrn67ixj5oxZ5qhGwDnLJ7dlJbIAnCcVNeAg6jV7Wv6pu%2Bmfgm4em%2BIf1gBT5t1vhUxiNhti2sAbAWHiRkkq2yTOHa%2FYdGhAGa4UJzQfxx7ik6EPeXtGmnipz6AcrjLEkNrHKAla8LNBy95dAWAwsG%2FZQAYlXhGu4t5Zk6gmAa7JyIrh5wEXke6pT%2BBxDX0HAdIFTtEB8D6xZjLgSAOdACZNHoRAT0JURabLFod%2BxNVexFSA05ODKNIWHX83LcLwUP%2BCMuB2EcjnBk0RKLEOl%2F%2FvS8cMZ2q2zWCW9lQrIHG1PTjMquRgnGLVZire2z35faW%2FslKUzG9Wx9ubJCguRRJahMJLoUNV2qEH7MNmExskGOqUBLd6FDDFgQ%2BomW3AyuUHlXz7TW%2FV8ctjzrGth%2BNrsKd5mDPLCwMTR%2FyytoPOoHbMmHoIxOYeb7bvm4mpp%2FzfPEAetEkc5h8KtgQWaQQuBgY0nKnnh2CqK7FVvi6WxfEeJsDcNBH0ehQKo6bfFZ3JshVyXV%2FLDi%2FOw44j1ieMD2j7JJff%2FH76e%2FbPSdCkrMNtn7ys2Ku5IvfsmGrACF6v5tAb9taJR&X-Amz-Signature=b855ed8fa8f2f8494c53c79ff07cca399ee05892bc66fb1d7887bd02b8effd71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THA7AOPX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCa%2FcT4aC9qcLfKtYqC8lElccqUTfsBBn9BdN4neqEhiQIgBuMRMWTbB%2FsQibrs8O%2F5gTQM%2Fa3nE93bMxZeVOHj%2BMIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBy5%2BTTgR9dUqHGSlCrcA1Wuqu2oDZ5xaB8hkjJepgkj5dL%2Bk5bWvwKdDvdLKBN2AJYoNPa8dzlCoHTcN33b7Rc8LyEYTYi4gsIyDf059Xzt%2BbEGlJlqS%2B1xB8QdR%2FHXr%2FucK1OkDoTR3JVuElTF6eH6tKv5c8grvSTQAdqqIUGw6Lvgx2njEvmaHR2o1qdSt%2Fy0sdIg7IQJV9HTvl5la45oGoaQg%2FGnMpUSCQo%2BqoQta2iFYG5TeZ5ouHpmjdx6YBoMfDDelxBJI%2Bd8hyrqoZ2t2reeN7n7YOH7Y6yiGnErrn67ixj5oxZ5qhGwDnLJ7dlJbIAnCcVNeAg6jV7Wv6pu%2Bmfgm4em%2BIf1gBT5t1vhUxiNhti2sAbAWHiRkkq2yTOHa%2FYdGhAGa4UJzQfxx7ik6EPeXtGmnipz6AcrjLEkNrHKAla8LNBy95dAWAwsG%2FZQAYlXhGu4t5Zk6gmAa7JyIrh5wEXke6pT%2BBxDX0HAdIFTtEB8D6xZjLgSAOdACZNHoRAT0JURabLFod%2BxNVexFSA05ODKNIWHX83LcLwUP%2BCMuB2EcjnBk0RKLEOl%2F%2FvS8cMZ2q2zWCW9lQrIHG1PTjMquRgnGLVZire2z35faW%2FslKUzG9Wx9ubJCguRRJahMJLoUNV2qEH7MNmExskGOqUBLd6FDDFgQ%2BomW3AyuUHlXz7TW%2FV8ctjzrGth%2BNrsKd5mDPLCwMTR%2FyytoPOoHbMmHoIxOYeb7bvm4mpp%2FzfPEAetEkc5h8KtgQWaQQuBgY0nKnnh2CqK7FVvi6WxfEeJsDcNBH0ehQKo6bfFZ3JshVyXV%2FLDi%2FOw44j1ieMD2j7JJff%2FH76e%2FbPSdCkrMNtn7ys2Ku5IvfsmGrACF6v5tAb9taJR&X-Amz-Signature=7e3f9d4c610eaabf74e2834f0bb6b49d5fe41dfa026f3de2dc0b0b0f311e7ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

