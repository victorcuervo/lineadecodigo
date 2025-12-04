---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEUBDZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHtubRoFNGRIiE%2FO6Z%2F0hrkDSQ9eKGg4bfZAA%2FLyxmi0AiEAmQSpInVvchNfHUnUtJ5bli412r9seqY19PZE0aH4JhUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDAUScUCNMcsBhGnKtSrcA26tZsPDdvsdJUNZQF0haPj1KSM0SrQo9mXXmi3rHBU5oNsH4pNe1CqC7GocedmQM4Wj2FJzaLXgPcCI1wVeZuVXVJE8KhIDjjUf%2BIIITThs5jyQ8GSemBiDbi4bcz9y51oamP4FvPTi0sQ7pWKA%2BjdvExw3qcgzfY3YZV5BURfOFzspgLC%2FneBqAz7Nq69B3RoQ%2FayJVz770R3eghtuO7xwb0CzBBQ1CWEwXyml4e1rVsC0zvGYCUOIziF0zPDLo82qHJXUu%2FXsCZJhQc7FDEfBO65ReQtqORx7Zg5YLk7aYobafnGV7lb0iganIdA5q2GsVznbQ3AKEvrntkyRQUd7UqMJy%2Fd1wqa8YCxc5UAyobdX9ed8T9EeYuyH1eW4tNiZ3KszAQQk2FgOh7d77mAL2RxdLwhe06PGsC1FqO1hjo4V7SYa8hzhGESxevQI2S0uRkX4LoE4cS%2BxiTng3OoP32BU8F7YT9aQGqZs3j1vVikLv2ICeW%2BxYoAfVHB4Xl7PCLsHDGJ76Jdu0%2BVoWPVki%2BTQOe5%2BRO835gVWPMT%2BxJCCGXKSDFh%2F4Z%2FHHQisMeGMyoSk8w7%2BUmo1Ww1jqNU7DThOBlF9NCnpkqj9VyauYDPnj4vV3DN3H9%2BNMPG0w8kGOqUB1jkM%2BYJo95oWx0kzxD6P%2B07vRayS366%2Fa6cdwSDk64g5Keeun5%2FM8JruXxLmkauF7sJoVsrkZENC3d5FZJ8XiHGd6mKk4QYxAzOpxYOxW%2FCl5yu5%2BEwXBTTtzei51N%2FhJEoiuHlXj68HplnMyiow5ZpL0m7kqgfr8V2wfyl03Xn0CkahjQDZwt2VPT4iEw7WCiH%2FPqq%2Fgo%2F5AAqtmXyEgGoh6UB1&X-Amz-Signature=112ac698ecd64665ede519b0002deb237ea0179e97a0cab2644fe7cc8284911a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEUBDZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHtubRoFNGRIiE%2FO6Z%2F0hrkDSQ9eKGg4bfZAA%2FLyxmi0AiEAmQSpInVvchNfHUnUtJ5bli412r9seqY19PZE0aH4JhUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDAUScUCNMcsBhGnKtSrcA26tZsPDdvsdJUNZQF0haPj1KSM0SrQo9mXXmi3rHBU5oNsH4pNe1CqC7GocedmQM4Wj2FJzaLXgPcCI1wVeZuVXVJE8KhIDjjUf%2BIIITThs5jyQ8GSemBiDbi4bcz9y51oamP4FvPTi0sQ7pWKA%2BjdvExw3qcgzfY3YZV5BURfOFzspgLC%2FneBqAz7Nq69B3RoQ%2FayJVz770R3eghtuO7xwb0CzBBQ1CWEwXyml4e1rVsC0zvGYCUOIziF0zPDLo82qHJXUu%2FXsCZJhQc7FDEfBO65ReQtqORx7Zg5YLk7aYobafnGV7lb0iganIdA5q2GsVznbQ3AKEvrntkyRQUd7UqMJy%2Fd1wqa8YCxc5UAyobdX9ed8T9EeYuyH1eW4tNiZ3KszAQQk2FgOh7d77mAL2RxdLwhe06PGsC1FqO1hjo4V7SYa8hzhGESxevQI2S0uRkX4LoE4cS%2BxiTng3OoP32BU8F7YT9aQGqZs3j1vVikLv2ICeW%2BxYoAfVHB4Xl7PCLsHDGJ76Jdu0%2BVoWPVki%2BTQOe5%2BRO835gVWPMT%2BxJCCGXKSDFh%2F4Z%2FHHQisMeGMyoSk8w7%2BUmo1Ww1jqNU7DThOBlF9NCnpkqj9VyauYDPnj4vV3DN3H9%2BNMPG0w8kGOqUB1jkM%2BYJo95oWx0kzxD6P%2B07vRayS366%2Fa6cdwSDk64g5Keeun5%2FM8JruXxLmkauF7sJoVsrkZENC3d5FZJ8XiHGd6mKk4QYxAzOpxYOxW%2FCl5yu5%2BEwXBTTtzei51N%2FhJEoiuHlXj68HplnMyiow5ZpL0m7kqgfr8V2wfyl03Xn0CkahjQDZwt2VPT4iEw7WCiH%2FPqq%2Fgo%2F5AAqtmXyEgGoh6UB1&X-Amz-Signature=7145ad29d6fecda9cdab81b3ccea1fb0658baebe1b07926979b10f70e34a4914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

