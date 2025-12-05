---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNFVW3XV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGteTw7vEWhhg3PBTUs3k2F9ay84ncvgMQ0h43iM%2FGynAiEAoEW7S%2BACXYteVlLEXrzoLdP0UvsO9abdhWDd6%2B%2BORHQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMpRSrh2sIQ7%2FZp5CyrcAwpTZ7ZzwC1zDhZGG18A%2FwJhxeY1YEanWb4WTXQAqgfvcf1nHuGjuZdfQM46YorbPc0JtMT6Il7l3yqSrCZaUAaPAC075eG37nBll%2BLTACTnY69VLec9IDhDyDjmN6zhsEo0ywgwPpya3gvO1Raw1vhKqHyk4YFIvfJQRwI5RzGgBcobLefMVZcSjcupP3RrdZkwVnDjskk1f3BD7CIAUhajomI%2Bqzo6v8njhLNHUW6YlYLlqqAPWClRmQxBYcRD1nu11L%2FwvnvT0Pz6xk87zO6wJ%2BdftjObjDvWUpjxo%2Br03%2BIFCg0hL9tgRfpZ0Mx3U9QqOmaSU5RrTf%2Flx4Fxu8p5p9%2FwxuTjLidLiqQHSHz%2F5j5ldZ61c%2FlvRhhIXHNgBfawwkC0WOJKHHkXOuwiIJAj97pAwDQ%2BJgHX7eesPrXQbcGmCYE55EAq6f3rvnd%2BO0jTbIb0sOQZbDKCjHISHVoUTNiNLlfLLmPyymYD7PAQTuibo8nZuWj%2BTBrO%2F7jnP2bGQ0DuD0YSj0z5OFn2gIHf22l4ffyfSiDVAMlSJl2ktOiAup0N0HQCfPzt0%2B9sfE19wG1h7aUZyPhkjls9fSRbr2N9gOdilvmQH4QTv4qKbkwAfsJbH16UIRwzMJ3oy8kGOqUB5%2FYQ2sTSJAkEVcQOBamIY%2BZZBKz9rsZLcPkzG5mFY00Wh76CyhvMtYqZEwlSgqcDNpL1CHutCVs%2BiIapZRPgfI9KAe59EBR47oTheA78rLp7TV3IJQAHYfzJxHcdmrjsUkuUlqpxdyXUuY%2FpOh1czf1%2BRXl7vxc6LVP7icGdTMqyDq5dBU2NsdNumqN6krR4Wc%2FC%2Ffci95H7v%2F9x62tHOmMs04Y6&X-Amz-Signature=566f6968eb26ede7e6079e4691ceadc68d6a12ceb6504df6a80ed148a3c047e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNFVW3XV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGteTw7vEWhhg3PBTUs3k2F9ay84ncvgMQ0h43iM%2FGynAiEAoEW7S%2BACXYteVlLEXrzoLdP0UvsO9abdhWDd6%2B%2BORHQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMpRSrh2sIQ7%2FZp5CyrcAwpTZ7ZzwC1zDhZGG18A%2FwJhxeY1YEanWb4WTXQAqgfvcf1nHuGjuZdfQM46YorbPc0JtMT6Il7l3yqSrCZaUAaPAC075eG37nBll%2BLTACTnY69VLec9IDhDyDjmN6zhsEo0ywgwPpya3gvO1Raw1vhKqHyk4YFIvfJQRwI5RzGgBcobLefMVZcSjcupP3RrdZkwVnDjskk1f3BD7CIAUhajomI%2Bqzo6v8njhLNHUW6YlYLlqqAPWClRmQxBYcRD1nu11L%2FwvnvT0Pz6xk87zO6wJ%2BdftjObjDvWUpjxo%2Br03%2BIFCg0hL9tgRfpZ0Mx3U9QqOmaSU5RrTf%2Flx4Fxu8p5p9%2FwxuTjLidLiqQHSHz%2F5j5ldZ61c%2FlvRhhIXHNgBfawwkC0WOJKHHkXOuwiIJAj97pAwDQ%2BJgHX7eesPrXQbcGmCYE55EAq6f3rvnd%2BO0jTbIb0sOQZbDKCjHISHVoUTNiNLlfLLmPyymYD7PAQTuibo8nZuWj%2BTBrO%2F7jnP2bGQ0DuD0YSj0z5OFn2gIHf22l4ffyfSiDVAMlSJl2ktOiAup0N0HQCfPzt0%2B9sfE19wG1h7aUZyPhkjls9fSRbr2N9gOdilvmQH4QTv4qKbkwAfsJbH16UIRwzMJ3oy8kGOqUB5%2FYQ2sTSJAkEVcQOBamIY%2BZZBKz9rsZLcPkzG5mFY00Wh76CyhvMtYqZEwlSgqcDNpL1CHutCVs%2BiIapZRPgfI9KAe59EBR47oTheA78rLp7TV3IJQAHYfzJxHcdmrjsUkuUlqpxdyXUuY%2FpOh1czf1%2BRXl7vxc6LVP7icGdTMqyDq5dBU2NsdNumqN6krR4Wc%2FC%2Ffci95H7v%2F9x62tHOmMs04Y6&X-Amz-Signature=c1477aa33c3b275c85bc2273b9882352715959d5700cf766941275949d83b5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

