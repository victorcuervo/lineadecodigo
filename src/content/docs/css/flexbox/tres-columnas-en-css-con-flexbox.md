---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4TI4TE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXQ4eoei0HiMhNSH2Qm7otdwlIZ9ULn3vtgl9FP0Rx3wIhALu%2FhL2s0dm5I2ilUV7TKijSKqc0ds5FlZfDYr6bZde%2BKv8DCHoQABoMNjM3NDIzMTgzODA1IgyrHgnuVLqtHwpYDiEq3ANAdKqdeNMyWm8YY0Asp4quVZCmwVwbk0TgZvzDK67G3OAcCigCiGzXz9hqY2%2F%2BbpvRsj8Xs1tq0ZrVqJv%2FT02qEq6nGDfigGuDO0q8nKQhPV2pSJbJwxJEO5qLBA65TcXl6pojVxZX8l3HghX6wnSNIsRkQZuSbqCSha1S%2B4Mtv35fZCFUaQG5eCYREjDEsdCl%2B0onUri9x0nm1jZ92Se3AeKe2o005dOAHZsPqeRDUFKOHd7SZZBNL1H%2B%2Bw3SiPTLztc4qX%2F5I2Ot0n3o4p0KBvGzaIpJAW%2FRb0eO1Ar%2BgMG7UQplLF3Tw4vk1DOL0BN2c%2Fax%2BAHsLDxDAbZoiRk%2FOkkDTK7rlEgZWgjAoYusCtr7WowghBYglYHulrFxGz1loE8%2FYH68oOJywoVRqaswjbbCNu6FFsZMbGrkA7Bs5gRK8xTqoUaHmini9DnsfwI5yaCZ0bX00FAp%2F5VdgRqH%2FEHF1IQ9xx1aJmLVs6BYkVAyTNi2aL5gbcDip6enDdM2qqU9Y73rrSEmm2GNbpEfYrCtQ7vxnECZ5dyHJLPMi%2FFP3trL87xQFPt7ghiIx%2BKVNQkz2aoXki6068iIUY9POJBX5rTfY%2BVdRJ%2BK3ddyTPJvPuplCaFy5Tki%2BjCLytHJBjqkAQn2YFxt853JRiWsbsFxPfSnOxGQP%2BS5GphDJZT9z7Ee%2BMe%2FbTH%2FX8r%2BpfJszfBJdPB3fDz9lEyq4MzjBbdBg8XyJIwqh7O5tTTQa8C67wGSj3thSb3I3uA5jRSwWVTEjg3NHdnVvkroprLO8t48O3UGYuBfkTHFxg%2FSXpdezndoK9bs88bqWwSpGaRxcSrTCKZh42oTLUfpH9y%2FZiGliQyF4JP9&X-Amz-Signature=7917c4c6fcceffb1783a74e55788e4a70b02335cc6aed98d24f8cee66bc8beaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4TI4TE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXQ4eoei0HiMhNSH2Qm7otdwlIZ9ULn3vtgl9FP0Rx3wIhALu%2FhL2s0dm5I2ilUV7TKijSKqc0ds5FlZfDYr6bZde%2BKv8DCHoQABoMNjM3NDIzMTgzODA1IgyrHgnuVLqtHwpYDiEq3ANAdKqdeNMyWm8YY0Asp4quVZCmwVwbk0TgZvzDK67G3OAcCigCiGzXz9hqY2%2F%2BbpvRsj8Xs1tq0ZrVqJv%2FT02qEq6nGDfigGuDO0q8nKQhPV2pSJbJwxJEO5qLBA65TcXl6pojVxZX8l3HghX6wnSNIsRkQZuSbqCSha1S%2B4Mtv35fZCFUaQG5eCYREjDEsdCl%2B0onUri9x0nm1jZ92Se3AeKe2o005dOAHZsPqeRDUFKOHd7SZZBNL1H%2B%2Bw3SiPTLztc4qX%2F5I2Ot0n3o4p0KBvGzaIpJAW%2FRb0eO1Ar%2BgMG7UQplLF3Tw4vk1DOL0BN2c%2Fax%2BAHsLDxDAbZoiRk%2FOkkDTK7rlEgZWgjAoYusCtr7WowghBYglYHulrFxGz1loE8%2FYH68oOJywoVRqaswjbbCNu6FFsZMbGrkA7Bs5gRK8xTqoUaHmini9DnsfwI5yaCZ0bX00FAp%2F5VdgRqH%2FEHF1IQ9xx1aJmLVs6BYkVAyTNi2aL5gbcDip6enDdM2qqU9Y73rrSEmm2GNbpEfYrCtQ7vxnECZ5dyHJLPMi%2FFP3trL87xQFPt7ghiIx%2BKVNQkz2aoXki6068iIUY9POJBX5rTfY%2BVdRJ%2BK3ddyTPJvPuplCaFy5Tki%2BjCLytHJBjqkAQn2YFxt853JRiWsbsFxPfSnOxGQP%2BS5GphDJZT9z7Ee%2BMe%2FbTH%2FX8r%2BpfJszfBJdPB3fDz9lEyq4MzjBbdBg8XyJIwqh7O5tTTQa8C67wGSj3thSb3I3uA5jRSwWVTEjg3NHdnVvkroprLO8t48O3UGYuBfkTHFxg%2FSXpdezndoK9bs88bqWwSpGaRxcSrTCKZh42oTLUfpH9y%2FZiGliQyF4JP9&X-Amz-Signature=e94ca52a1501c27a97ddee94422f52026e1498df5c8a7a4167144633640ad030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

