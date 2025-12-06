---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKORBCQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YUxVug8nRDB8zjUwyTw7VHHSVc%2B3uTf55uqrBKnHqAiEAhzO6Bt7qQMNbFtsmTmZeCZ6GCtf9mtNxbnbqYwUXB5wq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMlpTwuOZQjedw2aVircA4RU1fDd7V6zv65FLfic9ILS5RcIxQ4pr8gmyHslvKt9CtPJGQTrttfrmZ8AihjZrENUe2T88bhmDbQyWbrhzra2wDbUQwkk%2F68CIRGr64bFFXoq7jlFjUayK2OcXBzGS6mLcn8%2FUb3Hn4ZNBfljL32O1W%2BkLZQyBfD6ja0T1KbPQ4zkFU%2BuzrHOCORml0Z4mMktENL6u4nC9FFJfBI8EhhUeU111XhCYq2vpcs2UNiPY3CJauAxbopugOPHtyJfEMpa8LvVNqGCN2LfStPwKdYUXbGUNiK2dUu7PKWaLuCHvcl%2F6uR%2Fujtzufw07LESV5OsKXj7%2Fr9IqCnP7RUUIpVu%2Bby5TQQnbB6z5wEo4oofw86JsdrxD1Mk3Opu1hf2THhen75PvQ6dFoVnD2gI0r13FUSShzdBsR4Om7JoggZE%2BdwoNUR6wG1h67AoYvktYyIK62IOcdfbK4Rlz71VJl0qUcp0kRx9ruqNTQkYyQjA%2Bpzp8lqWtB0n%2FuP01GkvM72AdgNOY00tNDVByY0tJsQMBPoyvPy0ulI0ubnNfOW3n371S%2FCNcQawOK2gu9NeJCmx8H1hTflQK4MxFk3IhQDdsOjSFPTbyNwYDsrPBvqaU2ZG3RaqR61mp%2FnyMOTT0skGOqUBVCTTvkGxOhZ7KDLw2qNONW8HUhHcAW%2FTzMNIyDASr3v%2F5AwLRGxm2rs2HWP2aPjwUgeuWsEBwfdLykKyEvTYIOuY83ZWs8yIlnfiDSMZRx8yaMPvwlvCXByjoqGkxXScOhvwNhCS%2FDAGia5Xxl9ZzbKO4I5kLHMEGrKW8estm3RMMj9%2FSGrfVofXLuw9CaPQJGu7I3S1HMs8Sc%2FXsMaMU7djhYJZ&X-Amz-Signature=9ca4db39ba2368bb9dc37ed5d636e206931e1fcf432b7d0c01e260c6cea824cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKORBCQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YUxVug8nRDB8zjUwyTw7VHHSVc%2B3uTf55uqrBKnHqAiEAhzO6Bt7qQMNbFtsmTmZeCZ6GCtf9mtNxbnbqYwUXB5wq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMlpTwuOZQjedw2aVircA4RU1fDd7V6zv65FLfic9ILS5RcIxQ4pr8gmyHslvKt9CtPJGQTrttfrmZ8AihjZrENUe2T88bhmDbQyWbrhzra2wDbUQwkk%2F68CIRGr64bFFXoq7jlFjUayK2OcXBzGS6mLcn8%2FUb3Hn4ZNBfljL32O1W%2BkLZQyBfD6ja0T1KbPQ4zkFU%2BuzrHOCORml0Z4mMktENL6u4nC9FFJfBI8EhhUeU111XhCYq2vpcs2UNiPY3CJauAxbopugOPHtyJfEMpa8LvVNqGCN2LfStPwKdYUXbGUNiK2dUu7PKWaLuCHvcl%2F6uR%2Fujtzufw07LESV5OsKXj7%2Fr9IqCnP7RUUIpVu%2Bby5TQQnbB6z5wEo4oofw86JsdrxD1Mk3Opu1hf2THhen75PvQ6dFoVnD2gI0r13FUSShzdBsR4Om7JoggZE%2BdwoNUR6wG1h67AoYvktYyIK62IOcdfbK4Rlz71VJl0qUcp0kRx9ruqNTQkYyQjA%2Bpzp8lqWtB0n%2FuP01GkvM72AdgNOY00tNDVByY0tJsQMBPoyvPy0ulI0ubnNfOW3n371S%2FCNcQawOK2gu9NeJCmx8H1hTflQK4MxFk3IhQDdsOjSFPTbyNwYDsrPBvqaU2ZG3RaqR61mp%2FnyMOTT0skGOqUBVCTTvkGxOhZ7KDLw2qNONW8HUhHcAW%2FTzMNIyDASr3v%2F5AwLRGxm2rs2HWP2aPjwUgeuWsEBwfdLykKyEvTYIOuY83ZWs8yIlnfiDSMZRx8yaMPvwlvCXByjoqGkxXScOhvwNhCS%2FDAGia5Xxl9ZzbKO4I5kLHMEGrKW8estm3RMMj9%2FSGrfVofXLuw9CaPQJGu7I3S1HMs8Sc%2FXsMaMU7djhYJZ&X-Amz-Signature=0f88b290210db7c77aaf151c13c9f18012b694870864740550b303fffee3547b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

