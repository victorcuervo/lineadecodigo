---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVKBXZ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpzWYGfCl4hWMgItZJ4fk5pu%2BKqzQZk9UCJTMpADVbUwIgCeS6WgckuW88G7P1yOhrb3VYNIV6hN4HOylO%2B47nocwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEr3tYSVF%2F3X1no3zircAxGV%2FsRL0No8fWFq8%2B07Z13eeIBTumNXLFBrSDH8XEJs4X0faWf82%2F%2FXM613xtGcaGn3otzJIbWPjLkDWln3sXif7xoq9bZc2J5AszV38WLkQpLjWwWsQO68uHpvFm5ktPXOGafqLMY2vLpZeRo3iNQ0YAZV6gIQLv2R9tz1XHLMykZTG6gGlJ3a0Xg4mErrHay1OkEnFITITpmr%2BRssa98q9Mv56E%2Bt087SFN7dqWpXJ68n0oZq%2FRNGeFIY8HmONGQOhJk%2BDXKfqX%2FgtR0MFaICLVLNXSiXRkQ%2FeOscMsOpu%2Ffx0ZS%2BuPeNshAHcaGekQOXB8xHhaYE3PRTOlr3aGiY6Tcyapm3IjhKlyC6C0VKBPGA8zTCkW8SQQg9crDbnc6Uv%2Fg6X5BZlMqI95cRtr2uoM1IqvubkMow%2Fub6UbRdBeBsEfkpghebJEXsR6LXcVVyHTZC5gpuf%2FxABL2EJ%2FG1pguS5EQTw0F1kFK4wsihdUOyM75An967x1Di6mFtQ59DcHlZrldxXCxpLk1LGy6dc3rhpoQ7qGjET6fmk9eQNNvKTNgiioQGfhxL5OBf8e8P79dNZUN9M86rEMN3Ir4hZhIxGthykGisvgyAoytbj1W8mEXexwzfKo9MMIrcxskGOqUB7T0OO8NvSVF9TXxjSc0KssG6SP7oNDVaKVNn9JysyHPaev4HWkIgqQcNJtTQImL1RYTdFW%2FeU3kV8fkFW9VHtpXSzR9Pv1crMAyZxCMwhJmn4sxhgWJ6njp%2BHXDopGzUC8Ji7BYDm9nlaxWvwFS4cJzP7KT1JSJAlsXrykZ7xniFzQWVD9rvBmFEBtSFsmOcTp9rjPjmFRZHl0mDfULY6qNNe%2FvZ&X-Amz-Signature=ce76ae4d455d5d91f19d596eb1e37bdfd5ed2876f1c968ea08f4f64eee5c850e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVKBXZ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpzWYGfCl4hWMgItZJ4fk5pu%2BKqzQZk9UCJTMpADVbUwIgCeS6WgckuW88G7P1yOhrb3VYNIV6hN4HOylO%2B47nocwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEr3tYSVF%2F3X1no3zircAxGV%2FsRL0No8fWFq8%2B07Z13eeIBTumNXLFBrSDH8XEJs4X0faWf82%2F%2FXM613xtGcaGn3otzJIbWPjLkDWln3sXif7xoq9bZc2J5AszV38WLkQpLjWwWsQO68uHpvFm5ktPXOGafqLMY2vLpZeRo3iNQ0YAZV6gIQLv2R9tz1XHLMykZTG6gGlJ3a0Xg4mErrHay1OkEnFITITpmr%2BRssa98q9Mv56E%2Bt087SFN7dqWpXJ68n0oZq%2FRNGeFIY8HmONGQOhJk%2BDXKfqX%2FgtR0MFaICLVLNXSiXRkQ%2FeOscMsOpu%2Ffx0ZS%2BuPeNshAHcaGekQOXB8xHhaYE3PRTOlr3aGiY6Tcyapm3IjhKlyC6C0VKBPGA8zTCkW8SQQg9crDbnc6Uv%2Fg6X5BZlMqI95cRtr2uoM1IqvubkMow%2Fub6UbRdBeBsEfkpghebJEXsR6LXcVVyHTZC5gpuf%2FxABL2EJ%2FG1pguS5EQTw0F1kFK4wsihdUOyM75An967x1Di6mFtQ59DcHlZrldxXCxpLk1LGy6dc3rhpoQ7qGjET6fmk9eQNNvKTNgiioQGfhxL5OBf8e8P79dNZUN9M86rEMN3Ir4hZhIxGthykGisvgyAoytbj1W8mEXexwzfKo9MMIrcxskGOqUB7T0OO8NvSVF9TXxjSc0KssG6SP7oNDVaKVNn9JysyHPaev4HWkIgqQcNJtTQImL1RYTdFW%2FeU3kV8fkFW9VHtpXSzR9Pv1crMAyZxCMwhJmn4sxhgWJ6njp%2BHXDopGzUC8Ji7BYDm9nlaxWvwFS4cJzP7KT1JSJAlsXrykZ7xniFzQWVD9rvBmFEBtSFsmOcTp9rjPjmFRZHl0mDfULY6qNNe%2FvZ&X-Amz-Signature=15aca490e646bac2df96145840719945f8e4218aa66ac21d577ce98f5079cd6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

