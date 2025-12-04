---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFAJFHGY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhjxxZKt%2F0U5MlwRF%2FNd7pJvhSQXJ2gfKLmF99g8kfRAiBh%2Fj4HwDcS0ymysiCa7Wnjzlnbvw%2BUhCR9DcLA1oYKySr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMiYdJfj6SMX1jj779KtwDsjczi7cM%2BKSoXzZdOi96hbG9alDeJH2N2xWoTD4RgkfiFv4BjDkf9XWSOuWMljavSKE9VdZbPyFColG6aC9qFFDIBh4OoIZzlXy1woOXeTQ96zW5zEQfQ6X9m0ZXthZHFRjVBdrtjC391tDRQUED8ulQWyhILtqlxLtrnZedUvN9C5qulM2uHhfWuWsj38tbgUeQojcfVNUvXCBxhfF9WUY27%2FT8wepGvajEzY2xDM6CiK7TwYMJQfnsLIUb64zNaZgWDQclVUyKb1zVznnhGA4qMPAfDWZdt3isqySdvzoP2TV7kqzFL8uQuhGXLkq0OjY974Y0y9BnFgSUUdvTVzK9suga9RpwsfN7ZbkDk6G%2F0yHNwAazYysCeLxP9%2FMRU9%2Fj8APrPCVNfbDzN9LiZT1Xp%2FxjWbYs4koR3Ql3BVAMMR5EN6WEL2RcNMSbaAaqUJ%2FNsnoqNT7Epds6pWtw9ng%2BWFyA0l7w4QVDtAQQVgYazB%2BKXsRurS8eZorPSDWoxJFZETwVI%2BH4tupKr5J8Fliwy3a%2BMa%2FjRZCUJsutdkRKaGe0tg5DQdb7VSNHNEjUljiXp6oHm7M0aPiHt6X6le4mBW%2B2cDv6D55YH4xr%2Fa%2FR8%2FCBK%2Fiu1GvsSoYwy4zIyQY6pgGXfFgXHRnwbTpv0H14VOe%2Fu65qoh%2Bo5i2Yi1oSXj15yHWEC1ohuxEcRJ9v2y%2BpR1pozvs%2Bg14pS3t5h4hdkwBAWoqhnLzuZFSgbn23WJMH%2FdCm3mWXKdb%2BVXcNesQd%2BrpGJawXix1wd6v6LoyY4hl0H29%2BL7ftnFGj6DIHaoy9Y4RIF%2F5walX8tA%2B68LGk5ogM5sgZWe3BbeSu%2F2S6IbDH4Eu6oDtJ&X-Amz-Signature=16803b37306e228f26fb8f5721d55771626500c9fd6d571de778bf20ce5b6475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFAJFHGY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhjxxZKt%2F0U5MlwRF%2FNd7pJvhSQXJ2gfKLmF99g8kfRAiBh%2Fj4HwDcS0ymysiCa7Wnjzlnbvw%2BUhCR9DcLA1oYKySr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMiYdJfj6SMX1jj779KtwDsjczi7cM%2BKSoXzZdOi96hbG9alDeJH2N2xWoTD4RgkfiFv4BjDkf9XWSOuWMljavSKE9VdZbPyFColG6aC9qFFDIBh4OoIZzlXy1woOXeTQ96zW5zEQfQ6X9m0ZXthZHFRjVBdrtjC391tDRQUED8ulQWyhILtqlxLtrnZedUvN9C5qulM2uHhfWuWsj38tbgUeQojcfVNUvXCBxhfF9WUY27%2FT8wepGvajEzY2xDM6CiK7TwYMJQfnsLIUb64zNaZgWDQclVUyKb1zVznnhGA4qMPAfDWZdt3isqySdvzoP2TV7kqzFL8uQuhGXLkq0OjY974Y0y9BnFgSUUdvTVzK9suga9RpwsfN7ZbkDk6G%2F0yHNwAazYysCeLxP9%2FMRU9%2Fj8APrPCVNfbDzN9LiZT1Xp%2FxjWbYs4koR3Ql3BVAMMR5EN6WEL2RcNMSbaAaqUJ%2FNsnoqNT7Epds6pWtw9ng%2BWFyA0l7w4QVDtAQQVgYazB%2BKXsRurS8eZorPSDWoxJFZETwVI%2BH4tupKr5J8Fliwy3a%2BMa%2FjRZCUJsutdkRKaGe0tg5DQdb7VSNHNEjUljiXp6oHm7M0aPiHt6X6le4mBW%2B2cDv6D55YH4xr%2Fa%2FR8%2FCBK%2Fiu1GvsSoYwy4zIyQY6pgGXfFgXHRnwbTpv0H14VOe%2Fu65qoh%2Bo5i2Yi1oSXj15yHWEC1ohuxEcRJ9v2y%2BpR1pozvs%2Bg14pS3t5h4hdkwBAWoqhnLzuZFSgbn23WJMH%2FdCm3mWXKdb%2BVXcNesQd%2BrpGJawXix1wd6v6LoyY4hl0H29%2BL7ftnFGj6DIHaoy9Y4RIF%2F5walX8tA%2B68LGk5ogM5sgZWe3BbeSu%2F2S6IbDH4Eu6oDtJ&X-Amz-Signature=f1601632f7c2fc69d852fa8ea264050cffc16e976d08bb37ced31a7a778884f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

