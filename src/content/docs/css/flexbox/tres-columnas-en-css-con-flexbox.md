---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5AO7EF4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEdtXaGxtk%2FvLAx%2FRoYpYyWyWOPDdCru2JaAhfoYVBdAiEAsLWib%2B6V9xSb3W5r%2BslJVFwzYekPznHwBFLQ3mWWHmQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPGNxsksqBYuva9h9ircAx2P%2B1xRto05JKptRcun7UQx%2FipgZTWj4KUblSd3Y34dht5oPFQ%2BhFGIRkiJ4ykRCULOIgAsh9EwLbWixJ9d9tdSWaqJcLGD2su0g%2FSfDXkOccXiW3Vpcgd3ugabo79egE9NTGdR0pnCvGjcSwaiIxh93zjuOvqG0wLQHIYNsxgKohyLBVNq5Id0Dza%2F8Akh9A5h55GU1GH9Tl3hDhCfk7%2FZ0JNg4VBRNtOc9emAPdMO4JnwOahss%2Fq84OEckJVcL7P2cc21AC63BfPHwTiBlwpagx9NAo%2FEB72ObUsUVXwEX%2FpKPOMdWo7GHcF6FQ8b5bA1unmtxB3y571Uf6gMFKLYVe5gFAQkIAtV4LKMU92uKmMewWsO5Gmcpr1jvx8mVadwCvgFe1jAsWfQuGE30o%2FQpDo7myGN4%2FVdWn4mSJ6cJXA55akZDBAjuuq0P5MBTiX5aGO6TZDOCm9dlTRwf%2F8IRC4I%2BY%2Fkvpc11JTRSN62hhg6HL4XOu1KV%2F8pFuz5vo0jb25XXv7sQPdhdMq%2BsWKvrK9MZJfjJtbUMHZ0VBYgDyo8bHe16L1HxrsYDeFiSnGTiJipNGKTkFBV3RMFS3UtRf4OuGfqFIrV3Jmtn%2FOjAgM%2Bj4P732v7Cl1%2BMIfVw8kGOqUBEmqnnFvsxwXbTAnOjhk0Mk6ZXNJ1d09jMEB6BPA6hh9OKXalWWcYAKgLD6XZ3sDm1w7TvQOZs1cLANRoh%2BnB04ov4jGSg5M15T%2FztME3P%2FF9j37aCupR%2FXRGYNGCR%2FKPJBYhlU%2Fv%2FbpT8ebEjWI9sx0a2Eog8luTPZ0p1NImB9Lm4YD8AQH3JeHHzyWe4gFNi6kUnglqGhNFvbbc4fU4tR74Cetj&X-Amz-Signature=86333929342d45fd73ebc3f902c555954272eb77344c262122727fee4174fee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5AO7EF4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEdtXaGxtk%2FvLAx%2FRoYpYyWyWOPDdCru2JaAhfoYVBdAiEAsLWib%2B6V9xSb3W5r%2BslJVFwzYekPznHwBFLQ3mWWHmQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPGNxsksqBYuva9h9ircAx2P%2B1xRto05JKptRcun7UQx%2FipgZTWj4KUblSd3Y34dht5oPFQ%2BhFGIRkiJ4ykRCULOIgAsh9EwLbWixJ9d9tdSWaqJcLGD2su0g%2FSfDXkOccXiW3Vpcgd3ugabo79egE9NTGdR0pnCvGjcSwaiIxh93zjuOvqG0wLQHIYNsxgKohyLBVNq5Id0Dza%2F8Akh9A5h55GU1GH9Tl3hDhCfk7%2FZ0JNg4VBRNtOc9emAPdMO4JnwOahss%2Fq84OEckJVcL7P2cc21AC63BfPHwTiBlwpagx9NAo%2FEB72ObUsUVXwEX%2FpKPOMdWo7GHcF6FQ8b5bA1unmtxB3y571Uf6gMFKLYVe5gFAQkIAtV4LKMU92uKmMewWsO5Gmcpr1jvx8mVadwCvgFe1jAsWfQuGE30o%2FQpDo7myGN4%2FVdWn4mSJ6cJXA55akZDBAjuuq0P5MBTiX5aGO6TZDOCm9dlTRwf%2F8IRC4I%2BY%2Fkvpc11JTRSN62hhg6HL4XOu1KV%2F8pFuz5vo0jb25XXv7sQPdhdMq%2BsWKvrK9MZJfjJtbUMHZ0VBYgDyo8bHe16L1HxrsYDeFiSnGTiJipNGKTkFBV3RMFS3UtRf4OuGfqFIrV3Jmtn%2FOjAgM%2Bj4P732v7Cl1%2BMIfVw8kGOqUBEmqnnFvsxwXbTAnOjhk0Mk6ZXNJ1d09jMEB6BPA6hh9OKXalWWcYAKgLD6XZ3sDm1w7TvQOZs1cLANRoh%2BnB04ov4jGSg5M15T%2FztME3P%2FF9j37aCupR%2FXRGYNGCR%2FKPJBYhlU%2Fv%2FbpT8ebEjWI9sx0a2Eog8luTPZ0p1NImB9Lm4YD8AQH3JeHHzyWe4gFNi6kUnglqGhNFvbbc4fU4tR74Cetj&X-Amz-Signature=485adc52f22e4143b2e54aab4da09d1986562b4e5f53977dcbccf1d6e512bdf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

