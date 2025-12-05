---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJH3FTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpHSvaonrN6xbfT7yWqDWHE%2BNlku9Z4tRyRVdHAIGRAgIhAKBQEflJ2gaArkRjjeUHALYSe3kDtyPQXctb6GBvtHfYKv8DCE8QABoMNjM3NDIzMTgzODA1IgwE%2FqAQ22n949DCp6oq3AMUmPXPYUdSR5Dujco%2BWb1GADQDUoONu6tC7vncIoUGy23RvkZRYP9IVu4%2Fq9vODhNW0UNnx2HAig9IIMdFlGR%2BBSz6wiO1l05GB%2F%2FxyyT5kyPFOaYfrg6CIb%2Fl2HSHDblncJkTrNWd7vOy%2B%2B7QhirfnRkxS5em5w9maODKhY7Hl4o2RLqYhxVXL08Wd7KsIm%2BDt0qpDpKghaZS%2Fo2VMYJti6vNN5WwK%2BtlNAC46TM1bL8nJBBL%2Bk7f6NBi6C4XktSH3932g2Vx392kTZrEzTh%2Bc4HtuDOy3HdPTc8f%2F7trvlFJrjVAX8SI3BT5lXssB7BtOu3A%2BMMTrpMiBSfI2Fo3tqE8B1SjnPsnW4CUD5UbvLZVEj7F3RkEvgWplB%2B6MZyv3aj9OaJ4yoVRixcXNuQRlQDfrdD4jddAdTNZ50nvTBLeogoXlpfpmQiLl4gP1LvMHDJbMlgvcbALJ3m85LsRjwNqLROeZn%2BKKFCOQFXeIFdfJH4P3U2L6iblTNFalRL7e7r%2BGzSaY1MbtqxYy%2Fe5qXRpOWdW00hkVRcKdJpd3ok8tsAHXKGb4X4%2BR2CoETMAhA2L3tDvzILdSY9keecIRDI%2Fi4tGcBiTLd3XP9MjD5XWlAFc%2FEWN7r0znjDzi8jJBjqkAUV56rqKwAFaXar3INAuXHYjhmd1YkoJdUCIUKUjiLWyQfBssfXIFNiyjmQQV2Dv9h3egR%2BLHMyfbgku8Px6AUECuZr0C7Z9P4XRlIUVc3uMBFYrWAX7hvNQruY617ihZxLc7A3HRA54OVpsvRQkWxmK07D7U2vv47MFOGLgRvYFNXYvySctMa%2Fpa%2B0anl6LcmC%2BillTkTOjELu6EZ%2BbI7mKcwN6&X-Amz-Signature=915759b0d5ba8bbd51f02790789d9410183d751605474a9a3d295386f7b3182a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJH3FTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpHSvaonrN6xbfT7yWqDWHE%2BNlku9Z4tRyRVdHAIGRAgIhAKBQEflJ2gaArkRjjeUHALYSe3kDtyPQXctb6GBvtHfYKv8DCE8QABoMNjM3NDIzMTgzODA1IgwE%2FqAQ22n949DCp6oq3AMUmPXPYUdSR5Dujco%2BWb1GADQDUoONu6tC7vncIoUGy23RvkZRYP9IVu4%2Fq9vODhNW0UNnx2HAig9IIMdFlGR%2BBSz6wiO1l05GB%2F%2FxyyT5kyPFOaYfrg6CIb%2Fl2HSHDblncJkTrNWd7vOy%2B%2B7QhirfnRkxS5em5w9maODKhY7Hl4o2RLqYhxVXL08Wd7KsIm%2BDt0qpDpKghaZS%2Fo2VMYJti6vNN5WwK%2BtlNAC46TM1bL8nJBBL%2Bk7f6NBi6C4XktSH3932g2Vx392kTZrEzTh%2Bc4HtuDOy3HdPTc8f%2F7trvlFJrjVAX8SI3BT5lXssB7BtOu3A%2BMMTrpMiBSfI2Fo3tqE8B1SjnPsnW4CUD5UbvLZVEj7F3RkEvgWplB%2B6MZyv3aj9OaJ4yoVRixcXNuQRlQDfrdD4jddAdTNZ50nvTBLeogoXlpfpmQiLl4gP1LvMHDJbMlgvcbALJ3m85LsRjwNqLROeZn%2BKKFCOQFXeIFdfJH4P3U2L6iblTNFalRL7e7r%2BGzSaY1MbtqxYy%2Fe5qXRpOWdW00hkVRcKdJpd3ok8tsAHXKGb4X4%2BR2CoETMAhA2L3tDvzILdSY9keecIRDI%2Fi4tGcBiTLd3XP9MjD5XWlAFc%2FEWN7r0znjDzi8jJBjqkAUV56rqKwAFaXar3INAuXHYjhmd1YkoJdUCIUKUjiLWyQfBssfXIFNiyjmQQV2Dv9h3egR%2BLHMyfbgku8Px6AUECuZr0C7Z9P4XRlIUVc3uMBFYrWAX7hvNQruY617ihZxLc7A3HRA54OVpsvRQkWxmK07D7U2vv47MFOGLgRvYFNXYvySctMa%2Fpa%2B0anl6LcmC%2BillTkTOjELu6EZ%2BbI7mKcwN6&X-Amz-Signature=1c7f4769b55f153a7b362f40aff72b114153b1f9ee355d449c5ff8e08247ef35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

