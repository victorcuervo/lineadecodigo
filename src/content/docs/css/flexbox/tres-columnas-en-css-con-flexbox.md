---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IK5PU6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6OsGrO2mWiTu0LYpcEw1zW1k24n7GkUd%2Bq22h37%2BHdwIgeNXMv%2B2TtGsx9C9RxR15RTpW4UBZvkfliz4gTi%2BqO48q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEFCFmgdyUXgL8t8qSrcAwfUDxhD1%2FutQvr6sYKtXJR%2F%2F%2FXcPwl6fRfiBWo7kazZNy7UZlCBJDM35m%2FRaZI289ZzjMSWBrpKGKsLqZWqmt8JqHnjeK%2Bvwk1F9aV5eUiYbAI9GX0LPviHCqn1p9bB7XgI7zgtpTlQGI62wnLDIXOy8o1UxjoHhmd8aa%2BpHqgPN3YJ4fMzQgBJBnBaEi7QPa6tnq1Z1lI0plGSm095VTZjiCkJLYxJ2P5AoJmMTMG9rn6lCmUkxvGiNpqHxkDS3zgjn1wJuobvdgyo58nf2A4UDqzvfRXpOLPT2mtpMyYR13BB7jeDvtfiFmG4zkO4oiHHL55Qo2kIWU4vQJQYlXuZEm1waAYGuVsRsasH2fTmxemK3TaK2gGbRT%2FTi2jZFGz2B7fKMeGZEufufTKIUXkwLpNE4y9ZEb0fatJlyvpuvXXUS%2FmP%2FyTXoZQPEoEZx6e99l9ghcuDguAaevss943b6IWm05iJL9P6X0SBL40xziqcHe84jTB2bSNB0tyUpLz%2B6EsUS6omZK9KFdCe%2FdqKzDUu6MkRaQjfjx14tTle%2BObwwo3fN6TsJXbyyMe7N9uyCb8r3CrbURv5YtPL5uuJwl2hAtXUbd7ll9%2BWus%2BGQ4hZckhLWghQjhu%2BMIvzy8kGOqUBI0TRkYvqOQ%2BO1%2F8Ry%2Bnj%2F1nKMlOQmmtDM8I2X2sMZNlXA3PK6yhNPuuzxShSwL%2BWPaCEAWZLqKUsIbKy02Yd6SxbCzEi8GvHZroZzomUcRh58gm78sIgCYjnWRRDGG3IzU2M8J0tZSIjSAmUkLoUzJTRWxcIezN%2FUmCWEyOys1bRRwh4wtv0H%2BrwEgUHQfCrTD7bkxBazchGQWCy3UviRBEP0s%2Fc&X-Amz-Signature=a719cc62e96fd7374d24cac97c3d8b1b402d21480792ea2eec8e0e25aeea7622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IK5PU6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6OsGrO2mWiTu0LYpcEw1zW1k24n7GkUd%2Bq22h37%2BHdwIgeNXMv%2B2TtGsx9C9RxR15RTpW4UBZvkfliz4gTi%2BqO48q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEFCFmgdyUXgL8t8qSrcAwfUDxhD1%2FutQvr6sYKtXJR%2F%2F%2FXcPwl6fRfiBWo7kazZNy7UZlCBJDM35m%2FRaZI289ZzjMSWBrpKGKsLqZWqmt8JqHnjeK%2Bvwk1F9aV5eUiYbAI9GX0LPviHCqn1p9bB7XgI7zgtpTlQGI62wnLDIXOy8o1UxjoHhmd8aa%2BpHqgPN3YJ4fMzQgBJBnBaEi7QPa6tnq1Z1lI0plGSm095VTZjiCkJLYxJ2P5AoJmMTMG9rn6lCmUkxvGiNpqHxkDS3zgjn1wJuobvdgyo58nf2A4UDqzvfRXpOLPT2mtpMyYR13BB7jeDvtfiFmG4zkO4oiHHL55Qo2kIWU4vQJQYlXuZEm1waAYGuVsRsasH2fTmxemK3TaK2gGbRT%2FTi2jZFGz2B7fKMeGZEufufTKIUXkwLpNE4y9ZEb0fatJlyvpuvXXUS%2FmP%2FyTXoZQPEoEZx6e99l9ghcuDguAaevss943b6IWm05iJL9P6X0SBL40xziqcHe84jTB2bSNB0tyUpLz%2B6EsUS6omZK9KFdCe%2FdqKzDUu6MkRaQjfjx14tTle%2BObwwo3fN6TsJXbyyMe7N9uyCb8r3CrbURv5YtPL5uuJwl2hAtXUbd7ll9%2BWus%2BGQ4hZckhLWghQjhu%2BMIvzy8kGOqUBI0TRkYvqOQ%2BO1%2F8Ry%2Bnj%2F1nKMlOQmmtDM8I2X2sMZNlXA3PK6yhNPuuzxShSwL%2BWPaCEAWZLqKUsIbKy02Yd6SxbCzEi8GvHZroZzomUcRh58gm78sIgCYjnWRRDGG3IzU2M8J0tZSIjSAmUkLoUzJTRWxcIezN%2FUmCWEyOys1bRRwh4wtv0H%2BrwEgUHQfCrTD7bkxBazchGQWCy3UviRBEP0s%2Fc&X-Amz-Signature=0374d3f59e1fd5696551e53cee876f9d5d292e0379b5a9e1ed8f57563ae6dcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

