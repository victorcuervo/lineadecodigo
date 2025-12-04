---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EU2EKTN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC5Nvw5tcdoLQTtME9hFvE6HpZ9eGE6WIGJT5S%2B7awvDQIhALGvTkga7aQpvDLv4hAbJMcxxXcjJLgnG3Zqblz2JNgGKv8DCDsQABoMNjM3NDIzMTgzODA1IgzScjWFrJfLhVPPqU4q3APHU5XkwlZdKXC7tiC2nbg28Lkl55XUtGJOwtJ0UmRv60mjzFJrdEVNVFrk4RwMP06BwG%2BmATFxUtuhnuoj7AkCaag1v9CaUckI8jTz%2B20z60OVuQczOAx6ylCRD8AncywoCz%2BQ6klkB9J04HIdRpFHbnwG7Q5tcYzjjMItDAgobMYE8p9rn%2BPx%2BrDmGhiljq%2B%2FSoemeKCPvdNbZs9gP%2FpxR%2FEoyZiZv4jKzqVtkfDciJRyfAXlXCodDmWbVl6nXIZ8TGT97cJRAyyq5rc8od7t2J3Cdyft6WkrVJ7n6qxWfSoMs5EumZwprcMerYEXP5U2PfwoTIYDgFIIntXzxm4I7ZXNUwZb2GOytF05xbj6ZXhq8e7XRoVtldPTemxW2cYvNeE1R0Ovz%2FKPLxHnpNTY4I5PqfQlt0bX8%2BOyxetczZlQhGJHqoSDt1Qgq8tGFwd6apkxUARUDt2%2FWH22oIrv%2BeC1RgtDDSlLx1RCNT10bbOqoMqTDDxCuUIpKWGKxSzM2F3Woq0Ntbr5Uh5yA7QtzD9Cn5Q2Mw75II2QtIZWPKMvDz4WPQ7nffKnF6xr93Z9LlpwxCeJZ12mc8PSaHyEP2O3eX%2BienhBRoKjY8JC%2FbiryZzv3orlaf1X1DCG1cPJBjqkAT0dY%2FxvUu9EE8u8h5Z6vc3WipCN2A5lyzpDNGG%2BCD%2Fdqu63%2BHoZ%2FYC%2FFjv5piniqmyZ6LzeDcsGFRFim43SDQOG8UL0JCaMyGy7xhvwtkbuA1yiXs%2FUzwFx%2BwiLSa7VZfDmHuhXbMAsiE5IailuC5otEijX3FYquyBGhe6vjP0hys8ZQPqQ%2BBRcbdpc7j8iI4k7CDDKAht8JCfOMVtCYJwriHTg&X-Amz-Signature=827f469e9572e9ccf0062db6fc2d1e8004ae957b8935c356ffc64af9661c98af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EU2EKTN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC5Nvw5tcdoLQTtME9hFvE6HpZ9eGE6WIGJT5S%2B7awvDQIhALGvTkga7aQpvDLv4hAbJMcxxXcjJLgnG3Zqblz2JNgGKv8DCDsQABoMNjM3NDIzMTgzODA1IgzScjWFrJfLhVPPqU4q3APHU5XkwlZdKXC7tiC2nbg28Lkl55XUtGJOwtJ0UmRv60mjzFJrdEVNVFrk4RwMP06BwG%2BmATFxUtuhnuoj7AkCaag1v9CaUckI8jTz%2B20z60OVuQczOAx6ylCRD8AncywoCz%2BQ6klkB9J04HIdRpFHbnwG7Q5tcYzjjMItDAgobMYE8p9rn%2BPx%2BrDmGhiljq%2B%2FSoemeKCPvdNbZs9gP%2FpxR%2FEoyZiZv4jKzqVtkfDciJRyfAXlXCodDmWbVl6nXIZ8TGT97cJRAyyq5rc8od7t2J3Cdyft6WkrVJ7n6qxWfSoMs5EumZwprcMerYEXP5U2PfwoTIYDgFIIntXzxm4I7ZXNUwZb2GOytF05xbj6ZXhq8e7XRoVtldPTemxW2cYvNeE1R0Ovz%2FKPLxHnpNTY4I5PqfQlt0bX8%2BOyxetczZlQhGJHqoSDt1Qgq8tGFwd6apkxUARUDt2%2FWH22oIrv%2BeC1RgtDDSlLx1RCNT10bbOqoMqTDDxCuUIpKWGKxSzM2F3Woq0Ntbr5Uh5yA7QtzD9Cn5Q2Mw75II2QtIZWPKMvDz4WPQ7nffKnF6xr93Z9LlpwxCeJZ12mc8PSaHyEP2O3eX%2BienhBRoKjY8JC%2FbiryZzv3orlaf1X1DCG1cPJBjqkAT0dY%2FxvUu9EE8u8h5Z6vc3WipCN2A5lyzpDNGG%2BCD%2Fdqu63%2BHoZ%2FYC%2FFjv5piniqmyZ6LzeDcsGFRFim43SDQOG8UL0JCaMyGy7xhvwtkbuA1yiXs%2FUzwFx%2BwiLSa7VZfDmHuhXbMAsiE5IailuC5otEijX3FYquyBGhe6vjP0hys8ZQPqQ%2BBRcbdpc7j8iI4k7CDDKAht8JCfOMVtCYJwriHTg&X-Amz-Signature=167cb5bcca038897e7eba2885050c311a6edece955145afb4d9877ff1045644c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

