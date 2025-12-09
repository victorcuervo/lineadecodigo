---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVRHH4P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOA6NO6imb%2FDYLlg938mBUA4b34PJ5fUFEDaUH3opu9gIhAJilfkfWNvoK%2F4roMnbdOgEzxQOqi01BcEk7x22dzd%2BlKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI1kHOoxSzIJIkp8Iq3AOZDi9haVRcoKTIjc0Qad8CggjpxVsR0Jbz6iP2LT4neuWQ8cEuN5h51HvWgKp3XEWqmX6lE2ZBQ%2BuM17ChTZ2u7FiCgak%2BBmyFcwlv5FvO0tywVhBWWnwFI94d97OlGA%2B%2FoAnMuVaW%2BcWRFB9jXgtZKXhvuc8md9YwjYLJtHtrE%2FAzyDWFkglOwQyrot1GPnk%2FSla0tocsqubcfU7uExwzp69DqGrX%2BR2OUQRJaFLeqXuwYptrmbP6iOD8zvoX7TIX72HtipMFWP%2BLo%2B6SAcJ1QFQ8jinJ%2FZX7m6%2F4D8bHd%2FN2YV8oA6cfd5nawe1NYcgu7NZYczhyqkoA6YSwxC6RYBt%2BThDLv%2BmpxQrpr%2BvsFHBLARq6gxanmZ1PCCDbv4XlkJxzijRWIh72s7jHFChSbJ0v19c8AD2k%2FQ6BOjcFqRzuX7Aj7H5ZasCWikKDmnMXNNQCEutyWspamHyrMDlB3RHOps41O58EczZ32vushCLR7t18%2BXjgVnD3qFIPtsyXPQdN7NLXbflpYTWiSxjgce4FmOfkVhjlMxYBNee79ZyAzdSuadDodv%2FE4lvlndACfbtfw4q41b4JrALqHQ3QIfVh82HrZXATjG12xbP1%2B0KII6xLaOtU%2B21T5DD5rd7JBjqkAeYnbf7xEwhe7f8TQrgfOojj5eClMGuRARhqb5imf027DtCyankGdHlzWZe1k%2Bk3G8AfQnIE2hgp2qGjwR%2Bf5vwcPGRdcxg2pN9W1TNJT1OUlNc2it%2Ba2hbe%2Fl4ASHTgR5UUO48cuyHUGaoZ5NhEEYnJ8A2XflrN2RpGYOFmBE47NGL6keGRlB7nBoM8G5WAaFNaHXXCwaMOlcIuNWlPyPE9UICZ&X-Amz-Signature=a6ce6d410640e7c791606d33cbf1fb9331960770590bc0a535b69dceb08dc6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVRHH4P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOA6NO6imb%2FDYLlg938mBUA4b34PJ5fUFEDaUH3opu9gIhAJilfkfWNvoK%2F4roMnbdOgEzxQOqi01BcEk7x22dzd%2BlKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI1kHOoxSzIJIkp8Iq3AOZDi9haVRcoKTIjc0Qad8CggjpxVsR0Jbz6iP2LT4neuWQ8cEuN5h51HvWgKp3XEWqmX6lE2ZBQ%2BuM17ChTZ2u7FiCgak%2BBmyFcwlv5FvO0tywVhBWWnwFI94d97OlGA%2B%2FoAnMuVaW%2BcWRFB9jXgtZKXhvuc8md9YwjYLJtHtrE%2FAzyDWFkglOwQyrot1GPnk%2FSla0tocsqubcfU7uExwzp69DqGrX%2BR2OUQRJaFLeqXuwYptrmbP6iOD8zvoX7TIX72HtipMFWP%2BLo%2B6SAcJ1QFQ8jinJ%2FZX7m6%2F4D8bHd%2FN2YV8oA6cfd5nawe1NYcgu7NZYczhyqkoA6YSwxC6RYBt%2BThDLv%2BmpxQrpr%2BvsFHBLARq6gxanmZ1PCCDbv4XlkJxzijRWIh72s7jHFChSbJ0v19c8AD2k%2FQ6BOjcFqRzuX7Aj7H5ZasCWikKDmnMXNNQCEutyWspamHyrMDlB3RHOps41O58EczZ32vushCLR7t18%2BXjgVnD3qFIPtsyXPQdN7NLXbflpYTWiSxjgce4FmOfkVhjlMxYBNee79ZyAzdSuadDodv%2FE4lvlndACfbtfw4q41b4JrALqHQ3QIfVh82HrZXATjG12xbP1%2B0KII6xLaOtU%2B21T5DD5rd7JBjqkAeYnbf7xEwhe7f8TQrgfOojj5eClMGuRARhqb5imf027DtCyankGdHlzWZe1k%2Bk3G8AfQnIE2hgp2qGjwR%2Bf5vwcPGRdcxg2pN9W1TNJT1OUlNc2it%2Ba2hbe%2Fl4ASHTgR5UUO48cuyHUGaoZ5NhEEYnJ8A2XflrN2RpGYOFmBE47NGL6keGRlB7nBoM8G5WAaFNaHXXCwaMOlcIuNWlPyPE9UICZ&X-Amz-Signature=d832a24c25e992770865178597e79f4faafa12fa04ced7d4060a4eb0c1dda835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

