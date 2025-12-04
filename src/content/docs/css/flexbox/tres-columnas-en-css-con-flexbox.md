---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACPROBU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQClL58J2NnnW5lRxS2YFVXNjy16JVSIYexHgfU75s6%2BxwIgEkYTuhcufn%2FZ30FkHOTrksNMDUuAnVwtRgUlurvj1kIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFvAayELip7N1LvrGyrcA2MVjDqZoCJrkvcj0blwQF6TwsRHWvnp3%2FKTLFnhQKeXoudaO3guV5rmgaX7mkxTcPXc%2FeERHhud%2BqMZ%2B9UkJ2vAlqQ06Q5TwL8u4R%2FOUTVlDZgGBwt83LxrAQA2Ai%2FcLvD5gzeU%2FlkHw1C2tIXpX%2BBZIAJ6dPEuycwi4X2nsQgiBwDqw1Jsk7%2FOJDpp6By4EwOGfwvK%2BKLfc3hq%2FbBhkrCUbhR2gaQF15fte06J70ALsIKqO02J9%2FnNVG%2FdHqfetfDhrm16X17BwcHg3Nm%2F8pxxQO8Vs1sKgK5QIGErcH6%2FNRNbqHo0OgUKLQbsXj8ZuM7McME6YWTJZxECuQtx2fFqLW%2FZCUEKpKrFDOHO%2Fn21YW2VBaBIRLxcZyyHnux4P7eB9o6ryt1SiT%2F1QkRnolV4spZsmzz0MMOuDq81XI1b7jhem4Mt%2BrHapifCqHPzhIY%2BTz3xGHFl59w2gAWbqaxTD8U1QQgxQpag4DnBX0tOZJ4wiMKWd9a45dPC4%2BHqA%2BnfhjCcQd9ZdxcE%2F3oYiAd3aX3FhiFrhzIOpoapuVjeBrJIbN3eJdCIrVD%2B5impkSnlAOKjp7cWAwODP8HVoKclZdBEmdxg%2BRY9HswYz2TNXy0f9aNPtI63MUSXMK%2B1w8kGOqUBa16BEki2wf4F8iBFllpp3Wm5h9HmIRh3Uw2MZC7V7CHXwRO7tqqlLQzzxx6UhDmemACM%2Fj72TWoJGUxMZRCQVVUWlIjAO05v7P96VyXiG%2B2BDAROy%2FJIVblVbsk3kfGJgtUaIlsXuSQPR9cg3gjkaPYdBWs3p%2BOjH3ayvZQnbQijDiilNXrct0T8npIBGW%2FteaFg2vcYdMAAwoAHe0gvCbu%2FBPou&X-Amz-Signature=9502489247b437fb9a0f6546c18e862173304e167b182d1656a80e3c2d5925f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACPROBU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQClL58J2NnnW5lRxS2YFVXNjy16JVSIYexHgfU75s6%2BxwIgEkYTuhcufn%2FZ30FkHOTrksNMDUuAnVwtRgUlurvj1kIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFvAayELip7N1LvrGyrcA2MVjDqZoCJrkvcj0blwQF6TwsRHWvnp3%2FKTLFnhQKeXoudaO3guV5rmgaX7mkxTcPXc%2FeERHhud%2BqMZ%2B9UkJ2vAlqQ06Q5TwL8u4R%2FOUTVlDZgGBwt83LxrAQA2Ai%2FcLvD5gzeU%2FlkHw1C2tIXpX%2BBZIAJ6dPEuycwi4X2nsQgiBwDqw1Jsk7%2FOJDpp6By4EwOGfwvK%2BKLfc3hq%2FbBhkrCUbhR2gaQF15fte06J70ALsIKqO02J9%2FnNVG%2FdHqfetfDhrm16X17BwcHg3Nm%2F8pxxQO8Vs1sKgK5QIGErcH6%2FNRNbqHo0OgUKLQbsXj8ZuM7McME6YWTJZxECuQtx2fFqLW%2FZCUEKpKrFDOHO%2Fn21YW2VBaBIRLxcZyyHnux4P7eB9o6ryt1SiT%2F1QkRnolV4spZsmzz0MMOuDq81XI1b7jhem4Mt%2BrHapifCqHPzhIY%2BTz3xGHFl59w2gAWbqaxTD8U1QQgxQpag4DnBX0tOZJ4wiMKWd9a45dPC4%2BHqA%2BnfhjCcQd9ZdxcE%2F3oYiAd3aX3FhiFrhzIOpoapuVjeBrJIbN3eJdCIrVD%2B5impkSnlAOKjp7cWAwODP8HVoKclZdBEmdxg%2BRY9HswYz2TNXy0f9aNPtI63MUSXMK%2B1w8kGOqUBa16BEki2wf4F8iBFllpp3Wm5h9HmIRh3Uw2MZC7V7CHXwRO7tqqlLQzzxx6UhDmemACM%2Fj72TWoJGUxMZRCQVVUWlIjAO05v7P96VyXiG%2B2BDAROy%2FJIVblVbsk3kfGJgtUaIlsXuSQPR9cg3gjkaPYdBWs3p%2BOjH3ayvZQnbQijDiilNXrct0T8npIBGW%2FteaFg2vcYdMAAwoAHe0gvCbu%2FBPou&X-Amz-Signature=398cf77fbb0a76ac8000b5cf8e09f93251eeb0e965d002399338eb62ba84cb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

