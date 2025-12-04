---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKFW7FQQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIB%2Bgo2WoSncHJU1E1tY0qy5yoDsihBi%2BOuhadeW%2BMc2bAiBD9SSigYNI9LJan%2FGvhYB0B9709EGVZ0VAcU1LMnzIXir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMCm3pd6HxRLvF0FGPKtwDktbsYdhFd8D%2Fo2gtBZvydSX4%2BAYpNr8oYk3%2BlE2vEQLBILY9iLzmIN0%2F9cg79bLkMrKV78sQk8HdfJWH3dzSkE8FmC8TO4W87Mf395eY9t1HT%2BuL3QjfrmWLCF5rxkGbKqpig3GQTffqT1WOE8LOnmBs9Pm9zbPP40ljXwu2wdGRlJqNsidLEUMWdNBnzF7kNUMiUVbHw8dg6up6rzvOmp%2FTmcCfI1itMx53WvckK0YheDqnTb05Yr%2BCYFbPlYPvtjxs4NKHlxdzMRUxOJwWSXtvZe0Pr%2BaWVi%2Ffb1KUwrVBKlahiZm75xZJwXLzhbO%2BtE4nIyKVt0SvW3q9ghyY4gVtIHxfBTeRyvOH2TivMeIgIYNMkw2QaPpAW1WgD7K10liadnp0Ad9H7ldxkP1cN9kgLtbVI5IOaSDkmKOhT2W7hZ9MPabIUNhpj5%2B9UbMoGGDMXmS8lYeOE4rfm6hskidjPMAXV7kiR28jRlpldHseVyXfp1QqUh%2BOOM6k%2B5PWCwVm1DXsD%2FmYwEd%2BkC16HwWET9NbP8qA7bqEys4T%2F6WuOpd1SLJ4uUoMrUSN3QNIezu%2BbpDWPN%2Br8CMjkTPb7rB%2FVwq%2FB%2F4KtzCc%2FR8R%2BQuefjdRSiBXQh%2BZBEEwuqvFyQY6pgH0aPHcr4n%2FbMXeZQwhQUBexMs5fVm0ahxHOPOa2hK4FvFHXhXr2ovoEptAGVH%2BNXwxs8QXZHVbHO5sd27PseBY015isHWUfBLTxC9QLEDCy0YY5WmIVMbUTcYR8UaxTFIHQ5ogEdjAyn%2FtfPzd%2B3XkIanOiNVS4bl42IShjWgHJFGWtoXWFJUC37egBmHw14ksQij8KB%2B%2Fh%2BT6NaxtrMLUM3dgz7QY&X-Amz-Signature=286a7b3e6bc3e480d4407ef619a29eb5c5818d61e699399016cb6e7e7e2cc57d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKFW7FQQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIB%2Bgo2WoSncHJU1E1tY0qy5yoDsihBi%2BOuhadeW%2BMc2bAiBD9SSigYNI9LJan%2FGvhYB0B9709EGVZ0VAcU1LMnzIXir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMCm3pd6HxRLvF0FGPKtwDktbsYdhFd8D%2Fo2gtBZvydSX4%2BAYpNr8oYk3%2BlE2vEQLBILY9iLzmIN0%2F9cg79bLkMrKV78sQk8HdfJWH3dzSkE8FmC8TO4W87Mf395eY9t1HT%2BuL3QjfrmWLCF5rxkGbKqpig3GQTffqT1WOE8LOnmBs9Pm9zbPP40ljXwu2wdGRlJqNsidLEUMWdNBnzF7kNUMiUVbHw8dg6up6rzvOmp%2FTmcCfI1itMx53WvckK0YheDqnTb05Yr%2BCYFbPlYPvtjxs4NKHlxdzMRUxOJwWSXtvZe0Pr%2BaWVi%2Ffb1KUwrVBKlahiZm75xZJwXLzhbO%2BtE4nIyKVt0SvW3q9ghyY4gVtIHxfBTeRyvOH2TivMeIgIYNMkw2QaPpAW1WgD7K10liadnp0Ad9H7ldxkP1cN9kgLtbVI5IOaSDkmKOhT2W7hZ9MPabIUNhpj5%2B9UbMoGGDMXmS8lYeOE4rfm6hskidjPMAXV7kiR28jRlpldHseVyXfp1QqUh%2BOOM6k%2B5PWCwVm1DXsD%2FmYwEd%2BkC16HwWET9NbP8qA7bqEys4T%2F6WuOpd1SLJ4uUoMrUSN3QNIezu%2BbpDWPN%2Br8CMjkTPb7rB%2FVwq%2FB%2F4KtzCc%2FR8R%2BQuefjdRSiBXQh%2BZBEEwuqvFyQY6pgH0aPHcr4n%2FbMXeZQwhQUBexMs5fVm0ahxHOPOa2hK4FvFHXhXr2ovoEptAGVH%2BNXwxs8QXZHVbHO5sd27PseBY015isHWUfBLTxC9QLEDCy0YY5WmIVMbUTcYR8UaxTFIHQ5ogEdjAyn%2FtfPzd%2B3XkIanOiNVS4bl42IShjWgHJFGWtoXWFJUC37egBmHw14ksQij8KB%2B%2Fh%2BT6NaxtrMLUM3dgz7QY&X-Amz-Signature=4794f7cf9f3dd6836404c871c828ffb518c0316d6e6520e144ef419ae0743c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

