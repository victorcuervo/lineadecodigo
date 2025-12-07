---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIV3YSLD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FVfJDfYcu8ruDL3kE48X1mb3YStb9svsJqheLmBhBfAiABqERWNCKCKj7EzbJEeFZtKiMScgQ36vMioAcbHZsyqSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHDV77mU1GOZ5hVHHKtwDsJbC%2FtPeM1rE4UzpqnxBVXATR%2BzwoglhWtAW8Ab474EOSl25Nc4A3nqn701kbgcum4b0UuWom0fcGOYVvrPk3JqZ8cvsTjxkFXa965IhKOmbSLAYESwX3fM8Ir5EEcumYOo%2B%2BaBY1lkkbscdfTvE2hGInpQA9kTgn%2FONW3Py%2BSFl%2FTqCs%2FydVLsgAU%2BQeZsf596TI8DmKVbsCp3kUSkVNwpBj%2FaS5Xk8P9hp%2FuPzSKhqkrSiA%2FDKMY7YyPqRdnbOV7ROjo9or4vhxZUwK6V%2Fj9Xr6DQBh00YzjjzqXKwBtPra1XP5rSiYf3g%2BlS%2Fyt7AgzMiCsOmW%2FjOvjh1y4xiGCjsLToHQUYB2K8CWcb1yq%2BiUs6f1xQtvqCXVsZuYHwhd5zoN71ipb0RFBJlOYWcJGx6IS32xP3gfJDNapjTua%2FbwHFmqzYlOqz87sdgBV%2BDv39WShugiKi44jquxkqy6jNGKGXrtXp7K8kcpLlfnscP4Q6IEiJcJZ4gJ0VRYwdwoOK7R2gwXUwDEwodyQ6l6kD0A9ebiGCYu6XkWY27qxaU08Zqv5sv20iu%2BvE6E3tjQBRWUjpFWOzSn7ILz9hUp1OeuLJMuDEdPz23Dpn9dgbnMquNitxxyr3A8Xww%2F%2F3SyQY6pgFvWM4saK85U5YTn5%2BXpF%2BJUvTpKEEELrzHS6tdpYEwW6WbPPqW85WO7FaSlDezuDQQHEFatNoNHC6QyaJNKMAa6XzvhPlkVKcBBbu2XKBPVVfYsBaMEfuyk2VZDwzf2iRv%2FfhQomvWeJVEeVfnFHFYaXtk7SQBiQ0jP8ug3eISpuUs93%2BSXpav2Cs8s1LeNrWyXr1VoMlhtbV6a0EHxJa3LOGeyJ%2BK&X-Amz-Signature=9041355d7e0c4b3665592ddf726b264d58a140d423f392c1027a95c88458e10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIV3YSLD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FVfJDfYcu8ruDL3kE48X1mb3YStb9svsJqheLmBhBfAiABqERWNCKCKj7EzbJEeFZtKiMScgQ36vMioAcbHZsyqSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHDV77mU1GOZ5hVHHKtwDsJbC%2FtPeM1rE4UzpqnxBVXATR%2BzwoglhWtAW8Ab474EOSl25Nc4A3nqn701kbgcum4b0UuWom0fcGOYVvrPk3JqZ8cvsTjxkFXa965IhKOmbSLAYESwX3fM8Ir5EEcumYOo%2B%2BaBY1lkkbscdfTvE2hGInpQA9kTgn%2FONW3Py%2BSFl%2FTqCs%2FydVLsgAU%2BQeZsf596TI8DmKVbsCp3kUSkVNwpBj%2FaS5Xk8P9hp%2FuPzSKhqkrSiA%2FDKMY7YyPqRdnbOV7ROjo9or4vhxZUwK6V%2Fj9Xr6DQBh00YzjjzqXKwBtPra1XP5rSiYf3g%2BlS%2Fyt7AgzMiCsOmW%2FjOvjh1y4xiGCjsLToHQUYB2K8CWcb1yq%2BiUs6f1xQtvqCXVsZuYHwhd5zoN71ipb0RFBJlOYWcJGx6IS32xP3gfJDNapjTua%2FbwHFmqzYlOqz87sdgBV%2BDv39WShugiKi44jquxkqy6jNGKGXrtXp7K8kcpLlfnscP4Q6IEiJcJZ4gJ0VRYwdwoOK7R2gwXUwDEwodyQ6l6kD0A9ebiGCYu6XkWY27qxaU08Zqv5sv20iu%2BvE6E3tjQBRWUjpFWOzSn7ILz9hUp1OeuLJMuDEdPz23Dpn9dgbnMquNitxxyr3A8Xww%2F%2F3SyQY6pgFvWM4saK85U5YTn5%2BXpF%2BJUvTpKEEELrzHS6tdpYEwW6WbPPqW85WO7FaSlDezuDQQHEFatNoNHC6QyaJNKMAa6XzvhPlkVKcBBbu2XKBPVVfYsBaMEfuyk2VZDwzf2iRv%2FfhQomvWeJVEeVfnFHFYaXtk7SQBiQ0jP8ug3eISpuUs93%2BSXpav2Cs8s1LeNrWyXr1VoMlhtbV6a0EHxJa3LOGeyJ%2BK&X-Amz-Signature=911223b09fa902390f3c3cbd83e1a28c7eee66418cd345880fa5480dd0d893a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

