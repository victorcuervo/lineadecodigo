---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57XVIYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBz5YzFaoGnqfAu1crB%2FL6dpoEDyVoILb%2Fzdboin3gYAiEAg%2B2d6wESJiQ2CH1aJpPf%2BmY97FeB43n8UzLeis3Nz0AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbvuKRWm1awSy8OmyrcAzoJstjYXnztEciYQD4IAgPYh8EE4pDCFUNUbqaSYxEpacg%2FSgSusyCp9CxnP%2BYrMRzrKyyf6iczcuEqgTyncnADWfqSQgI02BOjQ7ZnT2PCsjjIM0nkjfKKxkevXtgFbsFDPDB%2BveknEu04CRTiLbjLnNzjLSJ%2B%2F4eXComyq7MjLc5Wkwa5cBiK7nz8Mw4B9NBBHzICxBV%2B7Hbdlr%2F%2B281nL23b5G2C864OS5vFk4cDo1mR4QoU1XHl5V8spSU7VlX4%2Bp4z6sNBKB%2Bn0eMw2hEp%2BDIGUHXpN%2FbNW1VPynNCo5NkdkybkFLh2zJ7E9TtPefNWjYyMaq8xpnF%2F4fxpcEgyw%2Bui5bdrrcLWH3TOgGC9V8zk%2BmmWDKuALO3YsYwEhymG4oE30AatutuEg8OvBYQdFfNOjHlNOHlnwiG%2BetI9xuiq%2Fg55zN2RbQ0xnXEWvYvwd2fome5DmQNNNx1Jvk%2FxE96Zpjyel9xpluKRrmzY%2BU3CE%2B8cRhrH1I%2B1wjvre%2BuiE%2FA9Z87ukBSOgDa0IYH9PCVtH5fWr9xkWC9nN2%2FKGdcFSJCCeEhm4%2FoB9SHCKIpdMLCa7t5oVUbUSXMCrYdo78D0jDAx6El10bGYfhv9IrKHP7sT7NrqxC5MLm03MkGOqUBbhNo2hOVbOEueFoJYzxKlcicBWSGfR02kyLe%2Fxch1z4YPKlid1ZtFauORU%2B3SS9c0Ikaqt7CjFNJEaoRuxE8xxlONQxc2DITHwPQD5D1qqo%2FUvas8crOY0ud0Z3Na0CoWFEJJe59I8egDqPqJ2TMI0Z%2FNd2%2FLUp62OVFHaCJv9kVRMzDs4Z4ewE03WGBnAFCmIJvvmwJ7YxCTTUiX6zGDS5LEZWD&X-Amz-Signature=06912be73c98a39b7934b00abee3e3333013002af74c3cae14f787748ae7a6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57XVIYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBz5YzFaoGnqfAu1crB%2FL6dpoEDyVoILb%2Fzdboin3gYAiEAg%2B2d6wESJiQ2CH1aJpPf%2BmY97FeB43n8UzLeis3Nz0AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbvuKRWm1awSy8OmyrcAzoJstjYXnztEciYQD4IAgPYh8EE4pDCFUNUbqaSYxEpacg%2FSgSusyCp9CxnP%2BYrMRzrKyyf6iczcuEqgTyncnADWfqSQgI02BOjQ7ZnT2PCsjjIM0nkjfKKxkevXtgFbsFDPDB%2BveknEu04CRTiLbjLnNzjLSJ%2B%2F4eXComyq7MjLc5Wkwa5cBiK7nz8Mw4B9NBBHzICxBV%2B7Hbdlr%2F%2B281nL23b5G2C864OS5vFk4cDo1mR4QoU1XHl5V8spSU7VlX4%2Bp4z6sNBKB%2Bn0eMw2hEp%2BDIGUHXpN%2FbNW1VPynNCo5NkdkybkFLh2zJ7E9TtPefNWjYyMaq8xpnF%2F4fxpcEgyw%2Bui5bdrrcLWH3TOgGC9V8zk%2BmmWDKuALO3YsYwEhymG4oE30AatutuEg8OvBYQdFfNOjHlNOHlnwiG%2BetI9xuiq%2Fg55zN2RbQ0xnXEWvYvwd2fome5DmQNNNx1Jvk%2FxE96Zpjyel9xpluKRrmzY%2BU3CE%2B8cRhrH1I%2B1wjvre%2BuiE%2FA9Z87ukBSOgDa0IYH9PCVtH5fWr9xkWC9nN2%2FKGdcFSJCCeEhm4%2FoB9SHCKIpdMLCa7t5oVUbUSXMCrYdo78D0jDAx6El10bGYfhv9IrKHP7sT7NrqxC5MLm03MkGOqUBbhNo2hOVbOEueFoJYzxKlcicBWSGfR02kyLe%2Fxch1z4YPKlid1ZtFauORU%2B3SS9c0Ikaqt7CjFNJEaoRuxE8xxlONQxc2DITHwPQD5D1qqo%2FUvas8crOY0ud0Z3Na0CoWFEJJe59I8egDqPqJ2TMI0Z%2FNd2%2FLUp62OVFHaCJv9kVRMzDs4Z4ewE03WGBnAFCmIJvvmwJ7YxCTTUiX6zGDS5LEZWD&X-Amz-Signature=d3f416bf544390545930803f13b906495f369c4eaefbc6f5f59c285036b43235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

