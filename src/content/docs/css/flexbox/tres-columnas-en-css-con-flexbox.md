---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NDDUDF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD70lHKJ6%2BWMOrUFgvnA%2FWRWy2ZPxp9F5vev8q8M33bIAIhAN3%2BoBXz68cjjCLdQcX9XgzBrwmMupHCs8GmkO1IA8zJKv8DCEcQABoMNjM3NDIzMTgzODA1IgxG7IOjQEMEm09xuc4q3AO5s84mcNxIOfmqpNPyiwfre5kjys81cY70kSszc9TlPZYfAPX8UTAFajn8iK8lal1Bta5aeoC%2F%2BLkxwUBL%2BoTvWEpCftfdzutvO7DF03QFUt0Cb9pmIaMFiL6BPx%2BelUDrU3RTUqNBcEMGxDMcSCO88TUDa5InmnhvwmURVjGg2H7%2B5p0nxu%2FjS9viNNuT4%2FwTSvOSQRnzitd%2B%2BoQEuxFYkwfOuo5PLW%2B7Y8%2FRW1JghJRuat4Na4w9GdWq2WeGsi5XSd3I272o%2FJ3B4K%2Foglp7jQOxUZlUz0nDdcL9ucZ26%2FlhX2Lx2jxO54f3MV5Jb5MWo%2Bn7JyEzl1d%2BKePYjhxqoAmxZXzksY%2B6aS9%2FWOJnBET5BR9zPAEq%2FX%2BMwLGGn%2F5Vs6YyraKJaV2FTFLOIfM87d0lyMLTN%2Bzm6a6DxFUBBBCh06p9eLzuxu9p%2BlKxNlCgsPm5I5lE9uJ57lkhCVg1hVIhVGFJ4ffn6J7r1rX959ujh8g1BSTiFSd3iCU3YrCAvOjcQgFsHqxn9naXmj9A6TFb6pny6OC%2ByReeZhzT%2FJPeqURgY0Z2gmT8Cfvu4EP2OAi7gDeOcQUO%2B2vuI66cmtBq9pIbsRd9CufQlkIONj%2BaO4KqBZ1Y6AAb2DCWosbJBjqkAf1nWbj9oVqhEnRi63tqCd8zjhnkuIXE4b7zEZXVgdRjCfjAVh0kw0kwOdPjnwjxPQOYoC5FErhknYGHrckb9LvIk7CTWWreOVhVloJOVKt57qVthCCwWDnaQClYPjt2d68WRAvzu4EQdC6W0ZpvAQcGzit9mXRPJwQ1%2FQG5%2F%2BqOLnYeKVhrp%2FZ0%2Bybguq12TDSWaC%2FqYwGY54PWnIuz6BQ2H%2FpG&X-Amz-Signature=a6d264e4ab9ba4a365716af78aeb5a189d3c65d5d96fad709374accc57dd991c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NDDUDF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD70lHKJ6%2BWMOrUFgvnA%2FWRWy2ZPxp9F5vev8q8M33bIAIhAN3%2BoBXz68cjjCLdQcX9XgzBrwmMupHCs8GmkO1IA8zJKv8DCEcQABoMNjM3NDIzMTgzODA1IgxG7IOjQEMEm09xuc4q3AO5s84mcNxIOfmqpNPyiwfre5kjys81cY70kSszc9TlPZYfAPX8UTAFajn8iK8lal1Bta5aeoC%2F%2BLkxwUBL%2BoTvWEpCftfdzutvO7DF03QFUt0Cb9pmIaMFiL6BPx%2BelUDrU3RTUqNBcEMGxDMcSCO88TUDa5InmnhvwmURVjGg2H7%2B5p0nxu%2FjS9viNNuT4%2FwTSvOSQRnzitd%2B%2BoQEuxFYkwfOuo5PLW%2B7Y8%2FRW1JghJRuat4Na4w9GdWq2WeGsi5XSd3I272o%2FJ3B4K%2Foglp7jQOxUZlUz0nDdcL9ucZ26%2FlhX2Lx2jxO54f3MV5Jb5MWo%2Bn7JyEzl1d%2BKePYjhxqoAmxZXzksY%2B6aS9%2FWOJnBET5BR9zPAEq%2FX%2BMwLGGn%2F5Vs6YyraKJaV2FTFLOIfM87d0lyMLTN%2Bzm6a6DxFUBBBCh06p9eLzuxu9p%2BlKxNlCgsPm5I5lE9uJ57lkhCVg1hVIhVGFJ4ffn6J7r1rX959ujh8g1BSTiFSd3iCU3YrCAvOjcQgFsHqxn9naXmj9A6TFb6pny6OC%2ByReeZhzT%2FJPeqURgY0Z2gmT8Cfvu4EP2OAi7gDeOcQUO%2B2vuI66cmtBq9pIbsRd9CufQlkIONj%2BaO4KqBZ1Y6AAb2DCWosbJBjqkAf1nWbj9oVqhEnRi63tqCd8zjhnkuIXE4b7zEZXVgdRjCfjAVh0kw0kwOdPjnwjxPQOYoC5FErhknYGHrckb9LvIk7CTWWreOVhVloJOVKt57qVthCCwWDnaQClYPjt2d68WRAvzu4EQdC6W0ZpvAQcGzit9mXRPJwQ1%2FQG5%2F%2BqOLnYeKVhrp%2FZ0%2Bybguq12TDSWaC%2FqYwGY54PWnIuz6BQ2H%2FpG&X-Amz-Signature=800e784e9020b4c226db55495a439929cc7c3b7453e8f5672c1b4e46622e007b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

