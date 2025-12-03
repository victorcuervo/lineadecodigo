---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIEASZQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGkHhuU3LYhKyTbDC%2FkqF6VTyvhbItdxIgiGg3LD2uNmAiEA53s4O7F8qrukuNrYEViNW2DbCywfTGgNlZkOwNEZuKoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPNXSJjDhs%2BoX3vGmircA60WHE5l%2BGwU23eLnquT4dpkf5qnB9nnsH011raL03Hgc%2F%2B0bIFV3jo4gsvmnjXwZbem5oDuFCJc8jLO8Xz64C7scYx2uh8gnkfkjFgLdQHY4VvLgWCmoBVrWL7%2FZ3oRF8SWA4%2BBJwDCwICfezmFgl8p62tZ4dtR6cKP%2BAzBrQ%2FKSHIREUIj39EzURgQNN1APbp9v1mc3WKdtTYPoj68XwLAeWuafXumisEsmESKXjm9hQsizbRXLflDBAoSYhzzvaB9zINpYUJDVL31DBB0AmFgMlkID14od3k5PhADtUr5FoOkKEBmRDCbU63ga7ud3DKTBZy9tjIc%2FzOMExA%2F%2FAknFbA6XQM%2FWBYdcjkeEXbNd67nIy8LdJhHctqK6UA9Qan9DYnnYgjCAuaiNmUCfk1DFRyOX3WhfIrJSZZuE34XxH%2FGChDD9MHnXexhHVsmGE%2BLYIOxN5DM61kO5wcF%2FnWwfFuCMhXQcOVmhaO4CMgtYg%2FOh7L4gkcn7gwUf3cWP%2FnC9tGOyqUc35IqkTGI1Iqryn1Zx1oYYaOd4W22URP0gO70wnxHrPK7gsRzrDe3urEPab4s6vxRRDkdzN7prdVnG2%2F0rMYKcRPt6sXkejm1f%2FU5cjLQw2i%2FpcxNMJCav8kGOqUBqRb6%2FkIlXvsY1khEe3IejvI%2FdxS0%2BVnG%2F2WBkg6Eq89cCeZrvk8dcJezcvvnRUWGyoS5quOY%2Fl1Cs7iVD2nI7Lv8cp6s8ISG5nLjg0X2wUi8EEc%2FQ4kUdH3homBotAjZeroz0KfVPwCdleg8Q3SHKln%2FR2fyVy6TnaIHFEGFp0QtjIqXR%2BVuSuOrT5DWgisS4FlBHT5cyQb1lfgrkWaxBcjqd6RT&X-Amz-Signature=808f006819c304fdb231ae52e1dc9e6a43478d4e38f63951787b78f185fb9dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIEASZQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGkHhuU3LYhKyTbDC%2FkqF6VTyvhbItdxIgiGg3LD2uNmAiEA53s4O7F8qrukuNrYEViNW2DbCywfTGgNlZkOwNEZuKoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPNXSJjDhs%2BoX3vGmircA60WHE5l%2BGwU23eLnquT4dpkf5qnB9nnsH011raL03Hgc%2F%2B0bIFV3jo4gsvmnjXwZbem5oDuFCJc8jLO8Xz64C7scYx2uh8gnkfkjFgLdQHY4VvLgWCmoBVrWL7%2FZ3oRF8SWA4%2BBJwDCwICfezmFgl8p62tZ4dtR6cKP%2BAzBrQ%2FKSHIREUIj39EzURgQNN1APbp9v1mc3WKdtTYPoj68XwLAeWuafXumisEsmESKXjm9hQsizbRXLflDBAoSYhzzvaB9zINpYUJDVL31DBB0AmFgMlkID14od3k5PhADtUr5FoOkKEBmRDCbU63ga7ud3DKTBZy9tjIc%2FzOMExA%2F%2FAknFbA6XQM%2FWBYdcjkeEXbNd67nIy8LdJhHctqK6UA9Qan9DYnnYgjCAuaiNmUCfk1DFRyOX3WhfIrJSZZuE34XxH%2FGChDD9MHnXexhHVsmGE%2BLYIOxN5DM61kO5wcF%2FnWwfFuCMhXQcOVmhaO4CMgtYg%2FOh7L4gkcn7gwUf3cWP%2FnC9tGOyqUc35IqkTGI1Iqryn1Zx1oYYaOd4W22URP0gO70wnxHrPK7gsRzrDe3urEPab4s6vxRRDkdzN7prdVnG2%2F0rMYKcRPt6sXkejm1f%2FU5cjLQw2i%2FpcxNMJCav8kGOqUBqRb6%2FkIlXvsY1khEe3IejvI%2FdxS0%2BVnG%2F2WBkg6Eq89cCeZrvk8dcJezcvvnRUWGyoS5quOY%2Fl1Cs7iVD2nI7Lv8cp6s8ISG5nLjg0X2wUi8EEc%2FQ4kUdH3homBotAjZeroz0KfVPwCdleg8Q3SHKln%2FR2fyVy6TnaIHFEGFp0QtjIqXR%2BVuSuOrT5DWgisS4FlBHT5cyQb1lfgrkWaxBcjqd6RT&X-Amz-Signature=3c1602280c31a24db09730416369098b66911415f80dd3412f0b3f69cf8f5767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

