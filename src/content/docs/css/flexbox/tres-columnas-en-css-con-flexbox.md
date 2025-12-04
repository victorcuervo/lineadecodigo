---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAFPMPL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCKhz6E7Qok5%2BjcQkSJNlUCFRWcqal4nLM0c7OxRuyOBwIhAIkWac%2FuXyG0magi%2BUkI8zPYFr1sZ8eKAi8VsAJZszMVKv8DCD4QABoMNjM3NDIzMTgzODA1Igwp5yekDeYyYmQ5qb0q3AOwzszc05bXMRbYEKrW5xjEgJSPa9u4MuAI80xBPuRPudK9iDXKCbPbdqLQKjc644uSpVIGSjMYZtBYZmQA7Qa3z9PmAGMLGO9aogXMxACs4RPqtPbQIMu3EzJDLIZyTUF9ng2F4hZHvntyms038OB3fbwWP79Xb4iLO5uhPOyMX8M7nKMivHNAeRllPqkUKbQqQO8fEkYVyNMBikzhdMJYFxUNSwLKHe67CtjsVuzvpw8jb7o5Woyhtp3oK6qyGgSQ6EuweK6Ez6fpTA31H%2BCVUELi7l%2FyamC675LPnOsOrrkU0n7QChy8YzFyY2%2ByK3OH2nG3NwF0czi7X%2BDvoB9PGAOBMrEnrrYtTbApAQPhFOiMycrHPR6ZLZc44xq4v4EHMScWhTrElrvRyG4uK405EZx6uT%2FlFIxxBABT6HyJDJcxnLJtKntZEuAmNWwWWOuYO4RcjRX3t7lY%2BV6Di22F0W8FXtrtrZYYAmDXpFdbbQGGWzaG45wauuMr25hF09kTw%2FQBQuJodp1zKzULKmkryO8YcmrS2HxIORxamuaTVQ0BsqJTvzKjsYpZ8jD5OULiVZSfOtlubHY%2BSWTNihIzLAq0pffQ52IPbI3XIaHWJs9x6%2BQ%2BdG2mRda9dzDMrsTJBjqkAUegd4%2B77mopDLeoTjxHPf00lrOzwABGxwxSd028%2BooN7f2CLkCy5serg%2BY3j8IwVGhM73PlHpvuPTCTQJlths%2FvGLdD4VC1mM%2B9qI7q0%2FXHBOXWuB%2BLUEqAex17D72tf117bUMB8XRbGQ%2FEMMtaSEkh1Hhrx4WObBuEWdOJ6VleuZE%2F02sgg3x4LfQdFHAx80VEsB%2F3ZUyVN0QF6pfpcczyoFfo&X-Amz-Signature=13ddf4138d04d09dfc8b2a2c49a34352c5cf7b918c0a873bcf91f40ea5dedd73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAFPMPL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCKhz6E7Qok5%2BjcQkSJNlUCFRWcqal4nLM0c7OxRuyOBwIhAIkWac%2FuXyG0magi%2BUkI8zPYFr1sZ8eKAi8VsAJZszMVKv8DCD4QABoMNjM3NDIzMTgzODA1Igwp5yekDeYyYmQ5qb0q3AOwzszc05bXMRbYEKrW5xjEgJSPa9u4MuAI80xBPuRPudK9iDXKCbPbdqLQKjc644uSpVIGSjMYZtBYZmQA7Qa3z9PmAGMLGO9aogXMxACs4RPqtPbQIMu3EzJDLIZyTUF9ng2F4hZHvntyms038OB3fbwWP79Xb4iLO5uhPOyMX8M7nKMivHNAeRllPqkUKbQqQO8fEkYVyNMBikzhdMJYFxUNSwLKHe67CtjsVuzvpw8jb7o5Woyhtp3oK6qyGgSQ6EuweK6Ez6fpTA31H%2BCVUELi7l%2FyamC675LPnOsOrrkU0n7QChy8YzFyY2%2ByK3OH2nG3NwF0czi7X%2BDvoB9PGAOBMrEnrrYtTbApAQPhFOiMycrHPR6ZLZc44xq4v4EHMScWhTrElrvRyG4uK405EZx6uT%2FlFIxxBABT6HyJDJcxnLJtKntZEuAmNWwWWOuYO4RcjRX3t7lY%2BV6Di22F0W8FXtrtrZYYAmDXpFdbbQGGWzaG45wauuMr25hF09kTw%2FQBQuJodp1zKzULKmkryO8YcmrS2HxIORxamuaTVQ0BsqJTvzKjsYpZ8jD5OULiVZSfOtlubHY%2BSWTNihIzLAq0pffQ52IPbI3XIaHWJs9x6%2BQ%2BdG2mRda9dzDMrsTJBjqkAUegd4%2B77mopDLeoTjxHPf00lrOzwABGxwxSd028%2BooN7f2CLkCy5serg%2BY3j8IwVGhM73PlHpvuPTCTQJlths%2FvGLdD4VC1mM%2B9qI7q0%2FXHBOXWuB%2BLUEqAex17D72tf117bUMB8XRbGQ%2FEMMtaSEkh1Hhrx4WObBuEWdOJ6VleuZE%2F02sgg3x4LfQdFHAx80VEsB%2F3ZUyVN0QF6pfpcczyoFfo&X-Amz-Signature=dfee98053b04d69503357bd271b1eb3692d9e1bc79244ed97b249263aaae8959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

