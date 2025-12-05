---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IOKOIJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJl06thbmHGNZLFx%2FtaLXb5Ckna9CYozzoBZiAEud9jAiB2nwZPA1uTNkywVKsdxtVQ2MNRAEI4FC808%2Fk5yGIc1Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMN9CHUZ5mW0UAUScFKtwDhmaUjdSmYEJQA48cyKzDgNVFKxNCTZVUQ4ULMqq%2BMzcLhpQM6g5GtIHbkGyExQ9Nv388FFonsHYtio5tClI4H8KS47TdNHDKEvCOSJtLBaWZbvo2p5vdQmY%2FaeGgAQFCLC5%2Fka9VzqCp5F3D%2BNk0tY4x8QmMc6tiGWosGoAMa6rnOMYXUL1yUxdtj9Y0qPDJU%2BsteRRvJoPS%2FLKfOKW7AAOZNXtSaUAI2YTkl00uiQ3RpiOuC9n%2FdE22GFCWPDdPcOgkExL9afXII6rZF%2FjMOL5I6CNKRS60JnzdFiyRUB9iq2wkbRCsUu17Pe%2FpxEe%2FtpS9xJDaexPAgHqKYDsjsTxw2GRp5JBym1Is8Y%2FKkOZE4D8ehPnlJSk1v6SXT%2BNdpfORDKiMBZCYoW6Xn9YWUI42HlmRSk0NO8FAP9y6gdQQ6tkL1chjwSq9kmFxLRrlCY4iIALyATcA47py8oJ3%2BUQIGOQL%2BbI55fnMXGxXOGfZRSX%2B8LzhK43MPWM4ux0nuAxuM%2F3TKQwJb%2FEZhhhX9w6lQBoXD5PWwFsZqtlO3ZiQSEqU3pd2VOh3U7hoPzqLmZ4EFUKO2sjhQ4EA1HNei%2FSrsgRsZeZDaCRYcgaL5q0G4BC1%2F92dfNqbBOgw4ozIyQY6pgHntcEn3psFTu9KNuPd4WKozIJkXLSlwmcVVm9BhCOa9u%2F6UXeHDVU8G5VpvcWlUwA2s4GOjJjaDUwVXhFfS6yTv2QxYLG6NN1NDvBgQ7%2B%2BEreXYrKmHgxLw%2BjLPoPPIMumKK2FNVjtwd2AlQbcl%2BvG0g8rdwguQxmlUu7q6sxd81pi4ZMt%2FY27jkH7xZ6qgOBx1NN70RZ12HqZrM4FmmMwGJgnN6ei&X-Amz-Signature=a3db1f2e8d1356b21c3f814c65cf5f6a6da63ff49f471f0b158cd5840c41e540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IOKOIJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJl06thbmHGNZLFx%2FtaLXb5Ckna9CYozzoBZiAEud9jAiB2nwZPA1uTNkywVKsdxtVQ2MNRAEI4FC808%2Fk5yGIc1Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMN9CHUZ5mW0UAUScFKtwDhmaUjdSmYEJQA48cyKzDgNVFKxNCTZVUQ4ULMqq%2BMzcLhpQM6g5GtIHbkGyExQ9Nv388FFonsHYtio5tClI4H8KS47TdNHDKEvCOSJtLBaWZbvo2p5vdQmY%2FaeGgAQFCLC5%2Fka9VzqCp5F3D%2BNk0tY4x8QmMc6tiGWosGoAMa6rnOMYXUL1yUxdtj9Y0qPDJU%2BsteRRvJoPS%2FLKfOKW7AAOZNXtSaUAI2YTkl00uiQ3RpiOuC9n%2FdE22GFCWPDdPcOgkExL9afXII6rZF%2FjMOL5I6CNKRS60JnzdFiyRUB9iq2wkbRCsUu17Pe%2FpxEe%2FtpS9xJDaexPAgHqKYDsjsTxw2GRp5JBym1Is8Y%2FKkOZE4D8ehPnlJSk1v6SXT%2BNdpfORDKiMBZCYoW6Xn9YWUI42HlmRSk0NO8FAP9y6gdQQ6tkL1chjwSq9kmFxLRrlCY4iIALyATcA47py8oJ3%2BUQIGOQL%2BbI55fnMXGxXOGfZRSX%2B8LzhK43MPWM4ux0nuAxuM%2F3TKQwJb%2FEZhhhX9w6lQBoXD5PWwFsZqtlO3ZiQSEqU3pd2VOh3U7hoPzqLmZ4EFUKO2sjhQ4EA1HNei%2FSrsgRsZeZDaCRYcgaL5q0G4BC1%2F92dfNqbBOgw4ozIyQY6pgHntcEn3psFTu9KNuPd4WKozIJkXLSlwmcVVm9BhCOa9u%2F6UXeHDVU8G5VpvcWlUwA2s4GOjJjaDUwVXhFfS6yTv2QxYLG6NN1NDvBgQ7%2B%2BEreXYrKmHgxLw%2BjLPoPPIMumKK2FNVjtwd2AlQbcl%2BvG0g8rdwguQxmlUu7q6sxd81pi4ZMt%2FY27jkH7xZ6qgOBx1NN70RZ12HqZrM4FmmMwGJgnN6ei&X-Amz-Signature=c9cb8476c5cdb0bdb7598c23011208d9073b74be764eca0bf11dcc84c0d3beb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

