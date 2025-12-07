---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZQ73TB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTD%2BS5IqhbXEZts3lUAXR09x9vA4SAa4h1RtLqp4hyYAiEAwj3jQ%2FFxoAQkYViaLkBis5%2F%2FzR%2Bj1ElfCvhTYVlfb5gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY1FR4365%2BoSfcI5ircA2yxWuMCPBkjfdAwHtcKLMISoo7TEbbP4EA%2F3iaGBjMQSdclCuHVL08zh1RwT7vg8Zts2oSzG%2Bg%2Bw0eBpxVvTyE0obImuIakyjsw57R8hmWHzWoHvWvg3sYNpotQuCyUT1izxV4CmnNxVIPowpnzwBTZI1IxGw5ujDAJq7taJZYcIXBb%2BpJv0VP6JtlVQnLUsziH9DxstEljajk2flkQ9SqA9MkOKvQDzxxo0GvSR2uTwNj8bZQgawdHrltxok%2BLxCaUTwTpu3qKzIOOa%2Bm36x%2B9an%2B8hOBH8gLndR%2BjiBUX4flgXnLX6nobqmKyc%2BSyw79dcKVDKP%2FKSRWSojXE2dwcPwoTd2yIbza2f%2FG1vD1Ic2dgilIOkpkGzsET%2F0nOYfmY8PwDcmoMaBzTMcp1TVlxtH9a69n8GsKaOrhG%2FyuKX9zgtjlGeCSw7iRJ5b6vpHn7uLUCsD4Ah5GD6tCzf%2F5JOjlNTMsLEI%2BI2fF56B9AmkaZxhujpbP0pi3X0Lx%2BV%2BuU1YeWDQoyclcITb%2BbTCAw534k%2BX6IbRZ2d25WDeRIzVc6zJhXuYSyw5rpOzN%2BgTJSQQRzLkLEFlFNr5%2F9mjd1asgRRtBjkVMvkoD9yEaZrmpx5yIybDsxbLDUMIz%2B0skGOqUBlxmGDJ3TtCwDA7vpupAQqcPYggRmdBew2eJGrD61CoNrricj33CC6DNMeEfs8FyEWuQYq1WC4OYG8ZfCNWS7mDLqttJcWESbrFmYzBs%2B1FCuNXHwMKwwPhLXc68VODDdpTv7y6BbcAgs4W%2FUSYd5wmKTgidP6hVDh0s3qcTuDxBGsFkD19guqKvxuyh8eXTLsMH7F32uGc9MoHS0mg0EbrYH60yB&X-Amz-Signature=bfdc04219cc364921c1e79e33e3dac0489ff3a41b1cd8fd1950517c56ae2e594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZQ73TB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTD%2BS5IqhbXEZts3lUAXR09x9vA4SAa4h1RtLqp4hyYAiEAwj3jQ%2FFxoAQkYViaLkBis5%2F%2FzR%2Bj1ElfCvhTYVlfb5gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY1FR4365%2BoSfcI5ircA2yxWuMCPBkjfdAwHtcKLMISoo7TEbbP4EA%2F3iaGBjMQSdclCuHVL08zh1RwT7vg8Zts2oSzG%2Bg%2Bw0eBpxVvTyE0obImuIakyjsw57R8hmWHzWoHvWvg3sYNpotQuCyUT1izxV4CmnNxVIPowpnzwBTZI1IxGw5ujDAJq7taJZYcIXBb%2BpJv0VP6JtlVQnLUsziH9DxstEljajk2flkQ9SqA9MkOKvQDzxxo0GvSR2uTwNj8bZQgawdHrltxok%2BLxCaUTwTpu3qKzIOOa%2Bm36x%2B9an%2B8hOBH8gLndR%2BjiBUX4flgXnLX6nobqmKyc%2BSyw79dcKVDKP%2FKSRWSojXE2dwcPwoTd2yIbza2f%2FG1vD1Ic2dgilIOkpkGzsET%2F0nOYfmY8PwDcmoMaBzTMcp1TVlxtH9a69n8GsKaOrhG%2FyuKX9zgtjlGeCSw7iRJ5b6vpHn7uLUCsD4Ah5GD6tCzf%2F5JOjlNTMsLEI%2BI2fF56B9AmkaZxhujpbP0pi3X0Lx%2BV%2BuU1YeWDQoyclcITb%2BbTCAw534k%2BX6IbRZ2d25WDeRIzVc6zJhXuYSyw5rpOzN%2BgTJSQQRzLkLEFlFNr5%2F9mjd1asgRRtBjkVMvkoD9yEaZrmpx5yIybDsxbLDUMIz%2B0skGOqUBlxmGDJ3TtCwDA7vpupAQqcPYggRmdBew2eJGrD61CoNrricj33CC6DNMeEfs8FyEWuQYq1WC4OYG8ZfCNWS7mDLqttJcWESbrFmYzBs%2B1FCuNXHwMKwwPhLXc68VODDdpTv7y6BbcAgs4W%2FUSYd5wmKTgidP6hVDh0s3qcTuDxBGsFkD19guqKvxuyh8eXTLsMH7F32uGc9MoHS0mg0EbrYH60yB&X-Amz-Signature=3314253b2a761c060e446b165cdb12c2fc1d9962049ac5c3a742ea66b2dad6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

