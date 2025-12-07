---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4AZKJN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAUTKmLq3OVEqgWVUV0ezUltql%2FSmxTcVlUHILYOPxiAiEA2NjIDE6qt22jx89ISPfFgyOlHNc9HXr0LzcPful7xRAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZW7UBXYahF4fDEbCrcA%2Bvgl%2FOCtT7%2F1MioF9NU0d%2FTA%2Fi5s9GQl%2FwAxyoCHNp9I4XBFwn6k69xw3J%2BQxQ7wQ8xyCeBbJBBTLDj7krjD8xxIBw5c%2BKNFAhrFdUknEWdp2IUbjbsw6efFZAiP%2Fe%2BRe5FOx8zeLu6lfspMxedA9bc3WBg4ROKatYJSKWyKdh7nLpkQIgwv0ShgIyXw8rT5xJCPx8Ich20JDhXUWehiiu6XCT%2BIaaMd7%2B0mJVx6gg41%2F325wJSpuVsPh65Zd1ZETkgju7ZI3axqBxWDg4Mvi5m7NjKEBPN6C8VBS6jN3c8gXOEZtHBtVY1o108jXB6SGUGWetLV1fPQLM6teNseo48P12q8Zxhgpt79OorjyaWANPlaY%2BCzeBDze%2BGka51DIYwptPqQtBBOxzIViPcjb1hirD8vz6QaUGsjTSwSgcAFfT4FwPMNG41ui9SqndP1D6xZiRpFgPGXqczHigJzTUxwVxoUu2GhITuZ6yI32dfXObw6dYEhnD6d%2FP2%2F%2FcrcejF75cWy4ojdjoHsyRde2x7IYoi%2FJb6cwHR8NCSJ7lVW1btOF4RBJUiJJl10lJpZSMYhFoBWN7GAl5z2oLDrA4oSFLkt1N1ggSeJiv2bzZDmSi6QynEg0lHnTntMOia1MkGOqUBK6wR5y2BkNtYcrOROa%2BG4sVvPMZTSSUj%2BgNz4%2FfYLqURhu4GqYvVOFC4Wx6LajO21EUpkomI3AXEDcaeS0CDkRyMqZmQo7qPs105%2BFok%2B2MGkTBStO9PgUQQoXj2FAETqJ0elA5MrxshV0otu4vpHfpfM5X%2BIzXiSi9U4O79Jf6Epq%2Ba6PqfOT3080NPzoABS4ckuX6flbBlLQRyAcMWr4r9dP9C&X-Amz-Signature=91dc72cd258afb932125fa56a449c22d098accdcb5ca941a5a2230bd264a4264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4AZKJN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAUTKmLq3OVEqgWVUV0ezUltql%2FSmxTcVlUHILYOPxiAiEA2NjIDE6qt22jx89ISPfFgyOlHNc9HXr0LzcPful7xRAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZW7UBXYahF4fDEbCrcA%2Bvgl%2FOCtT7%2F1MioF9NU0d%2FTA%2Fi5s9GQl%2FwAxyoCHNp9I4XBFwn6k69xw3J%2BQxQ7wQ8xyCeBbJBBTLDj7krjD8xxIBw5c%2BKNFAhrFdUknEWdp2IUbjbsw6efFZAiP%2Fe%2BRe5FOx8zeLu6lfspMxedA9bc3WBg4ROKatYJSKWyKdh7nLpkQIgwv0ShgIyXw8rT5xJCPx8Ich20JDhXUWehiiu6XCT%2BIaaMd7%2B0mJVx6gg41%2F325wJSpuVsPh65Zd1ZETkgju7ZI3axqBxWDg4Mvi5m7NjKEBPN6C8VBS6jN3c8gXOEZtHBtVY1o108jXB6SGUGWetLV1fPQLM6teNseo48P12q8Zxhgpt79OorjyaWANPlaY%2BCzeBDze%2BGka51DIYwptPqQtBBOxzIViPcjb1hirD8vz6QaUGsjTSwSgcAFfT4FwPMNG41ui9SqndP1D6xZiRpFgPGXqczHigJzTUxwVxoUu2GhITuZ6yI32dfXObw6dYEhnD6d%2FP2%2F%2FcrcejF75cWy4ojdjoHsyRde2x7IYoi%2FJb6cwHR8NCSJ7lVW1btOF4RBJUiJJl10lJpZSMYhFoBWN7GAl5z2oLDrA4oSFLkt1N1ggSeJiv2bzZDmSi6QynEg0lHnTntMOia1MkGOqUBK6wR5y2BkNtYcrOROa%2BG4sVvPMZTSSUj%2BgNz4%2FfYLqURhu4GqYvVOFC4Wx6LajO21EUpkomI3AXEDcaeS0CDkRyMqZmQo7qPs105%2BFok%2B2MGkTBStO9PgUQQoXj2FAETqJ0elA5MrxshV0otu4vpHfpfM5X%2BIzXiSi9U4O79Jf6Epq%2Ba6PqfOT3080NPzoABS4ckuX6flbBlLQRyAcMWr4r9dP9C&X-Amz-Signature=2de9c42851891c2ba6c04514f307eb44a89e1c8232d26f0a485928fb50b275b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

