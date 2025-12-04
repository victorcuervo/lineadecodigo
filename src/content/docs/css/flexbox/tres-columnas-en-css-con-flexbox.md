---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUTLXEE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEdf1ZJTSMEego8KDM2GHc8UZj0jFKcx0Nf832aIl7kwAiAVwJr3UlqnRV%2FroPL1UJplR9qL4Y7%2BztQSce8r%2FcxWuCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMi2TQKZLw1qaQ4kyGKtwD25uZiVUq2hn9PO1WQ6gA4CPK62kE1oZe7L2AWWn7T%2Fs7PRo%2FC080yE67VzgBYvk%2F7IPkbI42ya0da8y8BzhCWRTYK%2FomN6xy5LCQqL0FX%2BLjBllgTLPgvjQm3txHa1PgCcpXp06XqSQMmqJ2Cq1lF6FxRawc8bE5DNY%2FggD91CjRZlsxieP1EbVEYPZjqwBgbDF6qdSA9k%2Fw1paUcpehZPX8UlsqCsXbxB%2F0efjVEvDmYCown898If%2FEKw4PkjqsXR%2BybKZXRaDZn3nk8glYiL4wm8HStT8PcctT5EB7qLM3KUpyRS2oJdf9%2Bl9ileU4BU142Fmf6vTqiL9LlTfMfL%2B58%2FU9YI8iEx%2BWLl3X4Q%2B0zu1WABJR%2FXBpAQ3RUsuLImnnCqz1%2FuLODim2f%2FWHz8e4PEjcsyOZ0orsZe1LO4kjbO6BDgn4drd6edTrOcLuHxaDlQlbIa0fKTjmpvf9EAcY6Dt9B3yIMW1Kwe9qTbHeQKuC6mhmyrbpD1WtgtYKrwrqXOzpxhI20xBCaXYUOnU91QQk%2Fk1TAn%2BFSWaJt9Y9Dn9Nh54cfZWnr3A6iUgB9Plt3M2sqO1T2h7Nkkkw%2BtXKsgQWiXFzYTVjZJ2J6KKiG0mXc1pYG%2BS7zV0wrKLGyQY6pgE%2BrIL5Rb1AOqn743cR4j%2Fn%2F0XIRTPij01L2zZ5GZ7vOjh5RwW9EcbmWDxlq%2F3kr%2BWNuCw4WrPv%2F7aujh4VUCxDYrwKQcgePUsseflJb7NI9zi%2FIXghywXbOwxV4Uq6NZm1K5sS6QMg6RTzn81hZtRGztBlX2PIpfokX%2FH3M3eTW%2BZuuKU%2FCGaW6MC%2FO84eSbskUoaP5BZp3MGf3Jxx8PWExnQMs1H6&X-Amz-Signature=1d3b17231f91ec18b71fe23351ce802e303c4fa8e898264f744166a91dc7de46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUTLXEE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEdf1ZJTSMEego8KDM2GHc8UZj0jFKcx0Nf832aIl7kwAiAVwJr3UlqnRV%2FroPL1UJplR9qL4Y7%2BztQSce8r%2FcxWuCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMi2TQKZLw1qaQ4kyGKtwD25uZiVUq2hn9PO1WQ6gA4CPK62kE1oZe7L2AWWn7T%2Fs7PRo%2FC080yE67VzgBYvk%2F7IPkbI42ya0da8y8BzhCWRTYK%2FomN6xy5LCQqL0FX%2BLjBllgTLPgvjQm3txHa1PgCcpXp06XqSQMmqJ2Cq1lF6FxRawc8bE5DNY%2FggD91CjRZlsxieP1EbVEYPZjqwBgbDF6qdSA9k%2Fw1paUcpehZPX8UlsqCsXbxB%2F0efjVEvDmYCown898If%2FEKw4PkjqsXR%2BybKZXRaDZn3nk8glYiL4wm8HStT8PcctT5EB7qLM3KUpyRS2oJdf9%2Bl9ileU4BU142Fmf6vTqiL9LlTfMfL%2B58%2FU9YI8iEx%2BWLl3X4Q%2B0zu1WABJR%2FXBpAQ3RUsuLImnnCqz1%2FuLODim2f%2FWHz8e4PEjcsyOZ0orsZe1LO4kjbO6BDgn4drd6edTrOcLuHxaDlQlbIa0fKTjmpvf9EAcY6Dt9B3yIMW1Kwe9qTbHeQKuC6mhmyrbpD1WtgtYKrwrqXOzpxhI20xBCaXYUOnU91QQk%2Fk1TAn%2BFSWaJt9Y9Dn9Nh54cfZWnr3A6iUgB9Plt3M2sqO1T2h7Nkkkw%2BtXKsgQWiXFzYTVjZJ2J6KKiG0mXc1pYG%2BS7zV0wrKLGyQY6pgE%2BrIL5Rb1AOqn743cR4j%2Fn%2F0XIRTPij01L2zZ5GZ7vOjh5RwW9EcbmWDxlq%2F3kr%2BWNuCw4WrPv%2F7aujh4VUCxDYrwKQcgePUsseflJb7NI9zi%2FIXghywXbOwxV4Uq6NZm1K5sS6QMg6RTzn81hZtRGztBlX2PIpfokX%2FH3M3eTW%2BZuuKU%2FCGaW6MC%2FO84eSbskUoaP5BZp3MGf3Jxx8PWExnQMs1H6&X-Amz-Signature=8c42e671e78731b290e677d700cb53ac5f88c1576fb4a922c63b9be2ea179310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

