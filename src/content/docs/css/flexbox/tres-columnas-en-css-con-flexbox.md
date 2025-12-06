---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCYK4QX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7rKD9CSGD6%2FIT1la4rtYcZOzN7NcYN0aqjSxLd0TFYgIgfhnBChVL36qG%2B5E%2FUkbEL1tWqPKpo1lS%2Bq3zZ9PsBQwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCcTAjLZ5kv%2BFGr%2BUyrcA5glVV80JFk%2FoCZveQBXJrNnZbFtem9ss3guxYL4eBFvgccuWwEQRN%2FICWCYptLtEvSHG36EwvIv%2B2vR2J2JUXa2yVY7%2F1WpB%2BjapGSa%2BGNe7iy%2FA%2BLdgrbR4tI5qgUFahy6mdtaEG9NfSM0NZXuFOnPoYy61cl9e2iULFyBTJJj364vSrph%2BLq7RPmU0zR8WFi58T9jqxpNdqd%2F%2BOEb%2Bn8MJcq%2FzfcgTK%2FBJs1m16pNuP77s7NEjEjmNK2w42kwn0SrhpkVlr%2FXmAzeorZ4tPliqEOjTKuG2pn9nsmb%2BB%2BKjxA1fZgnDYFWwV%2FFRKry1zhWNji3OYDju4qsa2mVc1Fv18zNigtLPjnObZAzALz6CKRprxc8WX4hUWVRyBWtmVKeRSIjxG%2BuGFeYan8UEN2hatDBfkfp02Crsu2mUMVeFkCS72A0cOvYE7fmG%2BavqrOF6UEi5H0O3SqvWEXFs7qiHYs7opa3rtGVDOLyTkv6f2qBodWo305on9VM8OzAtNUEauwb%2BIudVF0qbjWFWA3yvzeK62PUXjnCigOu9oDsRtlSGZA4ZDMQ2zJ0KjqMbEDbk8L%2B6PSiApgIUud%2Bl0EQF8ZChwYqHfDhMjvIBqc5ruJb0g7JwVscI65KMKLG0ckGOqUBIeuypSPnOUX%2Bu74S6Ei%2FUnTAz3h%2BEbzFO7jY9DHJQHu3Tj3veLEY%2FTHaH1qsAOBQLjWXFSxytAoYHvfbuEeMJXtY%2BPISoADgc%2BTmiUGcEszhAY%2Bdo18CW%2BLXD%2FiKeDoZCI%2B8dVcAOkqW7ZjXUu6SO64uQg3jbkPa1NpL%2FQvweRsDPdUbNViJRN2xOod5XhHzPcVF1%2FBlK3fNsPTLlU8TcKnU388q&X-Amz-Signature=e70d4b816f71f5521217cc4d67158dffe784ef3972c7b28cb867f016c17fbfe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCYK4QX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7rKD9CSGD6%2FIT1la4rtYcZOzN7NcYN0aqjSxLd0TFYgIgfhnBChVL36qG%2B5E%2FUkbEL1tWqPKpo1lS%2Bq3zZ9PsBQwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCcTAjLZ5kv%2BFGr%2BUyrcA5glVV80JFk%2FoCZveQBXJrNnZbFtem9ss3guxYL4eBFvgccuWwEQRN%2FICWCYptLtEvSHG36EwvIv%2B2vR2J2JUXa2yVY7%2F1WpB%2BjapGSa%2BGNe7iy%2FA%2BLdgrbR4tI5qgUFahy6mdtaEG9NfSM0NZXuFOnPoYy61cl9e2iULFyBTJJj364vSrph%2BLq7RPmU0zR8WFi58T9jqxpNdqd%2F%2BOEb%2Bn8MJcq%2FzfcgTK%2FBJs1m16pNuP77s7NEjEjmNK2w42kwn0SrhpkVlr%2FXmAzeorZ4tPliqEOjTKuG2pn9nsmb%2BB%2BKjxA1fZgnDYFWwV%2FFRKry1zhWNji3OYDju4qsa2mVc1Fv18zNigtLPjnObZAzALz6CKRprxc8WX4hUWVRyBWtmVKeRSIjxG%2BuGFeYan8UEN2hatDBfkfp02Crsu2mUMVeFkCS72A0cOvYE7fmG%2BavqrOF6UEi5H0O3SqvWEXFs7qiHYs7opa3rtGVDOLyTkv6f2qBodWo305on9VM8OzAtNUEauwb%2BIudVF0qbjWFWA3yvzeK62PUXjnCigOu9oDsRtlSGZA4ZDMQ2zJ0KjqMbEDbk8L%2B6PSiApgIUud%2Bl0EQF8ZChwYqHfDhMjvIBqc5ruJb0g7JwVscI65KMKLG0ckGOqUBIeuypSPnOUX%2Bu74S6Ei%2FUnTAz3h%2BEbzFO7jY9DHJQHu3Tj3veLEY%2FTHaH1qsAOBQLjWXFSxytAoYHvfbuEeMJXtY%2BPISoADgc%2BTmiUGcEszhAY%2Bdo18CW%2BLXD%2FiKeDoZCI%2B8dVcAOkqW7ZjXUu6SO64uQg3jbkPa1NpL%2FQvweRsDPdUbNViJRN2xOod5XhHzPcVF1%2FBlK3fNsPTLlU8TcKnU388q&X-Amz-Signature=26f500a0271ad942b29baaef47644f4b8c32d8034b71c813de2f195ad6645764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

