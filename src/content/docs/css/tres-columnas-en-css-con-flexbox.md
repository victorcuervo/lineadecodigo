---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DWULLU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICLo2%2F98rH8g1wk1yBfdwFlK7EWdycCA9PAM%2FzpqEdYaAiEAolX7O5rmU3vUxLU61c9eSGmBAe4Tx1yTbuO6GCePqQgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDA%2FaZ%2F9fk9FFYN48ISrcA3aqokXq9YtsBXhN8V4c5XGcryKJE26C2BbhBV3gNcD3Dwk5NC3H%2BLYGtlne9C%2BmmiWY46Vr2Md6iuxa5gxYJWblSRlezwvfAYRs8jUhdMYzdd1xPL0oHJlrZc9QagxJWgM2PZB2Wfq51%2FgD%2FFqX3C1Sc%2BCEXPG4xtSQQCbhHzp3Jbx9Kzcv6pCImhrCj6%2BJHH9e9qhtJlSs7XHrD3aJfAPZ%2BbLF%2F2WVGA1P9FprHuodmZPLfuqU7I0%2BPwnbDoaBfp3Ng%2B9vgHMzwCZfxx5k1XgzjL54u%2F7yGzV8Tqs4CUhM6ouhPvVRaeVdnGtwIHVBOqWyoApGBLOiCd6GeqA6ZvM3vqYs5g4wTZnrQaPKqRT04kMW0Hi017ibH%2B0G95AalIDhy7T1tYhrCqzAo8F%2Fk0Cbevlso3DaO47GRI9GwMtZnRyuhfOC8lVtX28yd0q3uRZiXqyUk8OnDDlZqv4pI%2FhTPJgPdLmBilWkUqg1cBbeNlEALCN6Xmnrof8OONLKmCe7o%2B4ZS8KFkaFggs0B13rCwlS6qj3hkbiA8DBhW%2BWqUmUa68Rb8EitcnL0Iol2P6e9vMeic9y8LQDv7m61rh2nJEaj9zn2QBKtf%2FmK6hVsW%2F4YSxwJ%2FaDKtnE6MJjcwskGOqUB2Krk1Pwwg2pe3ytQn%2BscUAwO91Dj1Wqwu%2FOoEAW3o%2BMP%2BkWN6Q3hGzfERTol4oAB3b3NTSX21NGemze8TRysuUpeGDMQCnIRw0BGmQbo9ROiw1VY8aBr2NR%2F3cUppFk7wUI%2FvjDWfjbSesKNY41B6IlSLhzrI51gYObTQxMSWTRCup5AdbUVqlteXyhTybqTR22kdNL%2BGRL0MxhPdRv48zuKDmoS&X-Amz-Signature=5bef2da911cfadf66c9d4d7e983f29c693a6601ef0f1ab1b6b8aa84171c335c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DWULLU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICLo2%2F98rH8g1wk1yBfdwFlK7EWdycCA9PAM%2FzpqEdYaAiEAolX7O5rmU3vUxLU61c9eSGmBAe4Tx1yTbuO6GCePqQgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDA%2FaZ%2F9fk9FFYN48ISrcA3aqokXq9YtsBXhN8V4c5XGcryKJE26C2BbhBV3gNcD3Dwk5NC3H%2BLYGtlne9C%2BmmiWY46Vr2Md6iuxa5gxYJWblSRlezwvfAYRs8jUhdMYzdd1xPL0oHJlrZc9QagxJWgM2PZB2Wfq51%2FgD%2FFqX3C1Sc%2BCEXPG4xtSQQCbhHzp3Jbx9Kzcv6pCImhrCj6%2BJHH9e9qhtJlSs7XHrD3aJfAPZ%2BbLF%2F2WVGA1P9FprHuodmZPLfuqU7I0%2BPwnbDoaBfp3Ng%2B9vgHMzwCZfxx5k1XgzjL54u%2F7yGzV8Tqs4CUhM6ouhPvVRaeVdnGtwIHVBOqWyoApGBLOiCd6GeqA6ZvM3vqYs5g4wTZnrQaPKqRT04kMW0Hi017ibH%2B0G95AalIDhy7T1tYhrCqzAo8F%2Fk0Cbevlso3DaO47GRI9GwMtZnRyuhfOC8lVtX28yd0q3uRZiXqyUk8OnDDlZqv4pI%2FhTPJgPdLmBilWkUqg1cBbeNlEALCN6Xmnrof8OONLKmCe7o%2B4ZS8KFkaFggs0B13rCwlS6qj3hkbiA8DBhW%2BWqUmUa68Rb8EitcnL0Iol2P6e9vMeic9y8LQDv7m61rh2nJEaj9zn2QBKtf%2FmK6hVsW%2F4YSxwJ%2FaDKtnE6MJjcwskGOqUB2Krk1Pwwg2pe3ytQn%2BscUAwO91Dj1Wqwu%2FOoEAW3o%2BMP%2BkWN6Q3hGzfERTol4oAB3b3NTSX21NGemze8TRysuUpeGDMQCnIRw0BGmQbo9ROiw1VY8aBr2NR%2F3cUppFk7wUI%2FvjDWfjbSesKNY41B6IlSLhzrI51gYObTQxMSWTRCup5AdbUVqlteXyhTybqTR22kdNL%2BGRL0MxhPdRv48zuKDmoS&X-Amz-Signature=4d6381f93eeefb8a874db44f3fb42ea3c232ee09d00cd805e13a641c188475b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

