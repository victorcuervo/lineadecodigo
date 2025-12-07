---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBBFBF2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFEG6IcgfWWAo9JSsp1MQXXeo4aoh6lhNnbf4iSDw2SgIgf3mNbngEWuPbhmJS3hDj8m1a5zVvxDLudN6rHeTJASUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUTSzkoaAKr2Vbr7SrcA9MCW2U88DNYmPSjd9iaLiVY6WSvKmvJeSTIO%2BJRgLaouIlVEDfZ%2BkaEWbgTZAo85sON8vgEpQUkq9Me4A1GvF7j6Bzk2iZrYjKHJeVaJzQ9iafUE40593Kt5ScjyGz7jooCyHvhfxBYV35jodMgJdtnECGtRGYetkNid%2Fhj98jBvMe3IRvJukoWy7FRIJtj15lYd70HzMfiRXslMLHqKATviFUN7jMNzwiQBsOz%2BQ6EIwEOhm%2BvZSoQftnipwmgr%2B%2FSoP1uzKg81B2C39FyLXEhmYvz8VLVgS1JCoa6%2FjDzMeq1iTnBtPeBSJkru%2FyuXQ0E6qzkvGhzyBP05MLDvuReUtx5Y45%2BQHKuhTP06zhOnhTi7lCFIP0X2RM1NC%2BprRfsYFIDf97LixQ6X7rgcT3qU4MqBNkwdHZl6GExFsik%2Bi8lakbTDNcTdxQyAuf16NI0Fp95xCb7m0a5Utb%2FihvlLbIguPf6M48Z65E90aY3S60S4obz4WKFevOnyiSLfNBBr%2BEFQ6MEgrxyz%2Bx8c1kajkkZ78LdYAgDxQfDwzaBam7aQA%2F7RQWXid%2FByUnLSG2Y05UnivKrm0Wd8G%2BnTBWC7r4pvuvcJu%2FmaKkgYDQD%2BFKaB2aknFGLBhrCMN6a1ckGOqUBQbv6hPZ8ifTflpjdA2s5dmP8cQnLMgmF8C%2Fja%2BqH6cxkULd8AAIU5jqkxw%2B%2FB4%2B1y7UMyyUoYMkqrkDww3NuaVz%2B1mW2%2BuWEaeZ1YtGKoRUkGpknKVw5lj%2B%2BBBhr1Sk0TFL%2B30%2FyE3w3AiLnfK2%2BZvEICXg2jPtRRIOkshejZTBO%2BEV4DSiTS7GXq75V9OaXVeqU6NcFwdOR%2Bfh%2BJvI1Ya1qFRnk&X-Amz-Signature=b38db36576f7d190e89f507e3e09ec5999c81ffc507064aa3a43fbfba01ac722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBBFBF2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFEG6IcgfWWAo9JSsp1MQXXeo4aoh6lhNnbf4iSDw2SgIgf3mNbngEWuPbhmJS3hDj8m1a5zVvxDLudN6rHeTJASUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUTSzkoaAKr2Vbr7SrcA9MCW2U88DNYmPSjd9iaLiVY6WSvKmvJeSTIO%2BJRgLaouIlVEDfZ%2BkaEWbgTZAo85sON8vgEpQUkq9Me4A1GvF7j6Bzk2iZrYjKHJeVaJzQ9iafUE40593Kt5ScjyGz7jooCyHvhfxBYV35jodMgJdtnECGtRGYetkNid%2Fhj98jBvMe3IRvJukoWy7FRIJtj15lYd70HzMfiRXslMLHqKATviFUN7jMNzwiQBsOz%2BQ6EIwEOhm%2BvZSoQftnipwmgr%2B%2FSoP1uzKg81B2C39FyLXEhmYvz8VLVgS1JCoa6%2FjDzMeq1iTnBtPeBSJkru%2FyuXQ0E6qzkvGhzyBP05MLDvuReUtx5Y45%2BQHKuhTP06zhOnhTi7lCFIP0X2RM1NC%2BprRfsYFIDf97LixQ6X7rgcT3qU4MqBNkwdHZl6GExFsik%2Bi8lakbTDNcTdxQyAuf16NI0Fp95xCb7m0a5Utb%2FihvlLbIguPf6M48Z65E90aY3S60S4obz4WKFevOnyiSLfNBBr%2BEFQ6MEgrxyz%2Bx8c1kajkkZ78LdYAgDxQfDwzaBam7aQA%2F7RQWXid%2FByUnLSG2Y05UnivKrm0Wd8G%2BnTBWC7r4pvuvcJu%2FmaKkgYDQD%2BFKaB2aknFGLBhrCMN6a1ckGOqUBQbv6hPZ8ifTflpjdA2s5dmP8cQnLMgmF8C%2Fja%2BqH6cxkULd8AAIU5jqkxw%2B%2FB4%2B1y7UMyyUoYMkqrkDww3NuaVz%2B1mW2%2BuWEaeZ1YtGKoRUkGpknKVw5lj%2B%2BBBhr1Sk0TFL%2B30%2FyE3w3AiLnfK2%2BZvEICXg2jPtRRIOkshejZTBO%2BEV4DSiTS7GXq75V9OaXVeqU6NcFwdOR%2Bfh%2BJvI1Ya1qFRnk&X-Amz-Signature=e47cd5817f30b9bc05e88548765c6371c61712833f0560acb5d6e891e6ae84ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

