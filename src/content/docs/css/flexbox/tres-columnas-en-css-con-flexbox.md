---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YZ7WLRW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRkSXTULNJ15D%2FVbC2q28xwTEUsd%2BuWQIbixqagofF5AiEAi8%2F7CUzT6zml7JhylPbmwynZv8HXjMzAMQfhmsCLKKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGKXrCEVvvuh1FrrXCrcA5fYF0A57%2FmwDvF4KwrGv5IwLuXgtQ58pCUMgOA%2B8Maj7IZJLlAuMfVUjzCU%2B9317iyKhQWb5CgVUWcbiasfKYRGGGezEtQ3as1HUOmsc9mdsxXl6Sy5k8pvKfA8Huip8Gdt6Bh4XCoQmbjs20JiZtYgTmvHzeNDpzPYz3KZmzs%2FOnrqR4EVzo57MDo6PVa3lSA8z3lmUgd4PyVPlXsFsTS6h3ObiVfbQFAjHG%2BVNsN5JSRFlyxPMmBKFs2B%2F9YYWv4H8gphMU3vXo%2BtGVuY8trNi2jPkNEHpV%2Flw1sk3ESe0HCUkz6UsRWqb7t28ZIYROE20xnNO8QeZe5%2B%2FBE%2B6lEfhU01gAfWE%2F3yA5MaIBHwlohcHuvEVWL5FXdSoDgqyA%2FOmT%2BsgU4KlrD25NxjVt2188Lpf89VJE8mxYKKXo2%2BZaoMUKO%2F74dWuINK8s9GMHKg%2FA65lBlC%2BUeZ0ylCbVks9aCrI9a5Xr9LDRj7vv7d1BS9et%2BWzORz8F8mj8DHJKBLNr7%2FCEDtGRXpZz8Xt0T%2BSK4oPB%2B%2F9e9jox8t%2Fk5LNUl13UumKMHzqHSSjKneGQPC6l8B4Fnsj4ffyuShOzgDdnUTampZV3%2Fm7sdA73ehAcIeET7kEJuF%2BE5LMKCNyMkGOqUBrjedUQUt2EwZUUqK4hhtcboNbK6n3Mn9nQPHG8AwCDlbMxAUMWnsOu%2BnXnOAck0JAp%2BR4mh%2BUPvvTkt7HRmRz4Dv3YTqmYLBSHvQDEfdHVJa24w%2BJ0yi5h5c5EAm9gzh9W40d2fv4taI18czOirM9ccsk1J49XUSewv3PU1gncbCwA7pxOeiX5H7rZDcFhmNtVc1qkSxZu5KG5hb%2Bp3JqDtCFSg%2F&X-Amz-Signature=9f1e5229c1fd8343f9dc50640fdc097d836e1319e50343cd274b5906e730b65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YZ7WLRW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRkSXTULNJ15D%2FVbC2q28xwTEUsd%2BuWQIbixqagofF5AiEAi8%2F7CUzT6zml7JhylPbmwynZv8HXjMzAMQfhmsCLKKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGKXrCEVvvuh1FrrXCrcA5fYF0A57%2FmwDvF4KwrGv5IwLuXgtQ58pCUMgOA%2B8Maj7IZJLlAuMfVUjzCU%2B9317iyKhQWb5CgVUWcbiasfKYRGGGezEtQ3as1HUOmsc9mdsxXl6Sy5k8pvKfA8Huip8Gdt6Bh4XCoQmbjs20JiZtYgTmvHzeNDpzPYz3KZmzs%2FOnrqR4EVzo57MDo6PVa3lSA8z3lmUgd4PyVPlXsFsTS6h3ObiVfbQFAjHG%2BVNsN5JSRFlyxPMmBKFs2B%2F9YYWv4H8gphMU3vXo%2BtGVuY8trNi2jPkNEHpV%2Flw1sk3ESe0HCUkz6UsRWqb7t28ZIYROE20xnNO8QeZe5%2B%2FBE%2B6lEfhU01gAfWE%2F3yA5MaIBHwlohcHuvEVWL5FXdSoDgqyA%2FOmT%2BsgU4KlrD25NxjVt2188Lpf89VJE8mxYKKXo2%2BZaoMUKO%2F74dWuINK8s9GMHKg%2FA65lBlC%2BUeZ0ylCbVks9aCrI9a5Xr9LDRj7vv7d1BS9et%2BWzORz8F8mj8DHJKBLNr7%2FCEDtGRXpZz8Xt0T%2BSK4oPB%2B%2F9e9jox8t%2Fk5LNUl13UumKMHzqHSSjKneGQPC6l8B4Fnsj4ffyuShOzgDdnUTampZV3%2Fm7sdA73ehAcIeET7kEJuF%2BE5LMKCNyMkGOqUBrjedUQUt2EwZUUqK4hhtcboNbK6n3Mn9nQPHG8AwCDlbMxAUMWnsOu%2BnXnOAck0JAp%2BR4mh%2BUPvvTkt7HRmRz4Dv3YTqmYLBSHvQDEfdHVJa24w%2BJ0yi5h5c5EAm9gzh9W40d2fv4taI18czOirM9ccsk1J49XUSewv3PU1gncbCwA7pxOeiX5H7rZDcFhmNtVc1qkSxZu5KG5hb%2Bp3JqDtCFSg%2F&X-Amz-Signature=b2a88256c002c04716f5493c989a87f0049f182914c32a000e578f1555fdb921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

