---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPCXW6M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFz39JLHw0P5c%2Ff4TNwoA4Rt7MFamfyARiV0yX0yRCmHAiEAzK2LXXWQEWqMk9obBsBunLfM0BBXnAQG6HaUW8PQvOIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBTYp28wSEP7CHdaGircA5xI7XbldxfEVOyIWHp2fIL%2F0MbSkq8uzdQKxUOkzipNTcgYPua2yKKg9md5yO9XR%2BJxXyU0y%2BufCDrLSvZ4WYuk0qGIUPV6NCj%2BK%2FDvyQCdoz5mONQQtDQ5x3wprbWQ77riBNgaRgf5q7xARbkTMo025AMbFr70JC%2Bfkc9W%2BRztgLLb957AWJtCTjwN9whNh45cUsTK%2BWqGf3qamLvYxFo0%2FaE2T63ph%2FGQv0SIxL5wTaTB0kCSWzCbGVrPBTB3pzCmlQWQN2%2B%2FXol5r8TYuA74nEym5IsyMYLZN62%2Ft7D5VJvRkZCDY%2BtDk5bIKgquszJQ4m7F1AWZheylO9W0PRoPPQk2EDV5d8rvLIx1ciIJBEQXicaiEKYIRhbVo0EBW5V8lknZ7%2Fejcc%2Bz7j%2BDhadYC3sjWYn5O%2F%2BV0%2B%2BMd6%2F%2FAJl%2FCkf0ZiagzDej3N3Hutk%2FaVcCbyp2rKzq6kTWDq6Mi326VbVIXnCzLpV1Ex%2BQ%2B0TC1y4veIOiiYcPywI9cdofKr%2B8V%2B6JRJedeuDD1FLMURRZVWs5QAE9oJUUFcRElRE9nltxzgqpcSVTyfY%2BDG6jSKAhGtNK3MTT4efMqsN9x7nLujCY0DLYgid7AvtiFonQEkxYTw%2Bto7BjMNvozckGOqUBHbg1af0fA05R1uoJWjILkhdQOrkYk9GgeXBuz0Y6YSDV7nAWQ%2F27JtD8mHd%2BDFL4cOM2Q7wChMjuXXQDIc%2FeZ%2Bv3OmU10rUc0OEoyXD6DmjrG%2F1GBTL2HPhY7m6yKvAYKBV4LfxFQGY1vcUKaaySXSpA0UPvd5LeAri%2Fp%2BrsAXVqnobJSQD8KJGIy1tmqWFvqHFmNqEkPpeSaUdIvkaXaSsfcvAX&X-Amz-Signature=7f78d4eaf7f3c673f60c17d7de4c97169faac89acadbb6e0331e0d3873be5df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPCXW6M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFz39JLHw0P5c%2Ff4TNwoA4Rt7MFamfyARiV0yX0yRCmHAiEAzK2LXXWQEWqMk9obBsBunLfM0BBXnAQG6HaUW8PQvOIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBTYp28wSEP7CHdaGircA5xI7XbldxfEVOyIWHp2fIL%2F0MbSkq8uzdQKxUOkzipNTcgYPua2yKKg9md5yO9XR%2BJxXyU0y%2BufCDrLSvZ4WYuk0qGIUPV6NCj%2BK%2FDvyQCdoz5mONQQtDQ5x3wprbWQ77riBNgaRgf5q7xARbkTMo025AMbFr70JC%2Bfkc9W%2BRztgLLb957AWJtCTjwN9whNh45cUsTK%2BWqGf3qamLvYxFo0%2FaE2T63ph%2FGQv0SIxL5wTaTB0kCSWzCbGVrPBTB3pzCmlQWQN2%2B%2FXol5r8TYuA74nEym5IsyMYLZN62%2Ft7D5VJvRkZCDY%2BtDk5bIKgquszJQ4m7F1AWZheylO9W0PRoPPQk2EDV5d8rvLIx1ciIJBEQXicaiEKYIRhbVo0EBW5V8lknZ7%2Fejcc%2Bz7j%2BDhadYC3sjWYn5O%2F%2BV0%2B%2BMd6%2F%2FAJl%2FCkf0ZiagzDej3N3Hutk%2FaVcCbyp2rKzq6kTWDq6Mi326VbVIXnCzLpV1Ex%2BQ%2B0TC1y4veIOiiYcPywI9cdofKr%2B8V%2B6JRJedeuDD1FLMURRZVWs5QAE9oJUUFcRElRE9nltxzgqpcSVTyfY%2BDG6jSKAhGtNK3MTT4efMqsN9x7nLujCY0DLYgid7AvtiFonQEkxYTw%2Bto7BjMNvozckGOqUBHbg1af0fA05R1uoJWjILkhdQOrkYk9GgeXBuz0Y6YSDV7nAWQ%2F27JtD8mHd%2BDFL4cOM2Q7wChMjuXXQDIc%2FeZ%2Bv3OmU10rUc0OEoyXD6DmjrG%2F1GBTL2HPhY7m6yKvAYKBV4LfxFQGY1vcUKaaySXSpA0UPvd5LeAri%2Fp%2BrsAXVqnobJSQD8KJGIy1tmqWFvqHFmNqEkPpeSaUdIvkaXaSsfcvAX&X-Amz-Signature=fa5a85cc405097397ad77cf7e3870311bdc35f4f204c19f7c22a91ece64bbbc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

