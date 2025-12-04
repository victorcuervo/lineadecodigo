---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFL7KTTG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC%2FQQWN0RAcr9dujmI%2BrldxvT1yVuvraE%2B6HDoP6LTyUgIgf8JRrR%2F9CtRG2Nmo0LObqWBIIJaxSto4hQ3PdLkHjrYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFQbQzKy6bmln52%2BryrcA5sj349yGuWn3rljhIqd8scvj%2BftbKFAa66ARBN1gPcBgtj2Eser8DpRNyPhMiEHkjbym%2F7LEeoUU%2FtpcRmjo0u6Te1LLIm80hquxbnB6%2FqyEDSH5ggRJVxHQBhaX9zUyJST2ZY25myyEddG0gKmzw56auQVj0srfez5YK3FpqZcQMhbmwh6Z2ql9BOxKK9fMZlQM5sDj7cqFFw6RkrZoN7eEU2BtkgIG%2BcLtmjPP2VCqV%2Fyt0%2BMzMcGIEM4zV%2B69R2WIoOLaAs4q5WDaXdopdL2ymVuVmSr2CFLRaExHLoPVTIa3TGVptGpq8tDvLiCGyp13sPzIeHtB6fuDUs7Ivs09UuiCwYY65ixlXf394bg3FEiBmKXUq9%2FjLKXcx8RXIXblp%2B6C6s9KOEQEO2CY0qOV7atJG9q6Sotv2EGXyoeMPvqBGjMDEc812mZ6Z8rkYGz4pKYiNnl1h298l0NpYJUzrnbnQym7ugH6RoDTpKaSlE%2Beowu9wfSFGWcIu7oMWSJnY8ISzp69IP9rF3%2ByPmegaamp2vJeJ%2F60OMXYrnjNucopWQ5hp6PFiYWgSbl7PF5N3xUT0Lg0uLjHKN%2BcLgax0UAicNkvZoBiRUaE3Ovbw8W1HFO2U59P9v3MLGVw8kGOqUBNlwj75QTBnK7DJNW1YagQ3zRky52QVouiFhLCE5vQA292P2%2B7t00YtCQBU%2Fga6YQMMXcdvhpxMpu%2Br8l%2Fjaxdxs2yfbHdUKwfyEYzmZR2tTdcCK%2Bs1S62OhFb4JPOTbfoIFixz%2BVsQWWx6f%2BvdkZs2CW8aPfJykrkhEnOyj%2FAYyJvsTIMSS0GanBhiQ59JDxJKWoT9DjOPg4DwQr68LmbCNUGY1d&X-Amz-Signature=b36e154313d4a7c4d1117084a1154d4ebd1262d8468de793495918e9a69ab84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFL7KTTG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC%2FQQWN0RAcr9dujmI%2BrldxvT1yVuvraE%2B6HDoP6LTyUgIgf8JRrR%2F9CtRG2Nmo0LObqWBIIJaxSto4hQ3PdLkHjrYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFQbQzKy6bmln52%2BryrcA5sj349yGuWn3rljhIqd8scvj%2BftbKFAa66ARBN1gPcBgtj2Eser8DpRNyPhMiEHkjbym%2F7LEeoUU%2FtpcRmjo0u6Te1LLIm80hquxbnB6%2FqyEDSH5ggRJVxHQBhaX9zUyJST2ZY25myyEddG0gKmzw56auQVj0srfez5YK3FpqZcQMhbmwh6Z2ql9BOxKK9fMZlQM5sDj7cqFFw6RkrZoN7eEU2BtkgIG%2BcLtmjPP2VCqV%2Fyt0%2BMzMcGIEM4zV%2B69R2WIoOLaAs4q5WDaXdopdL2ymVuVmSr2CFLRaExHLoPVTIa3TGVptGpq8tDvLiCGyp13sPzIeHtB6fuDUs7Ivs09UuiCwYY65ixlXf394bg3FEiBmKXUq9%2FjLKXcx8RXIXblp%2B6C6s9KOEQEO2CY0qOV7atJG9q6Sotv2EGXyoeMPvqBGjMDEc812mZ6Z8rkYGz4pKYiNnl1h298l0NpYJUzrnbnQym7ugH6RoDTpKaSlE%2Beowu9wfSFGWcIu7oMWSJnY8ISzp69IP9rF3%2ByPmegaamp2vJeJ%2F60OMXYrnjNucopWQ5hp6PFiYWgSbl7PF5N3xUT0Lg0uLjHKN%2BcLgax0UAicNkvZoBiRUaE3Ovbw8W1HFO2U59P9v3MLGVw8kGOqUBNlwj75QTBnK7DJNW1YagQ3zRky52QVouiFhLCE5vQA292P2%2B7t00YtCQBU%2Fga6YQMMXcdvhpxMpu%2Br8l%2Fjaxdxs2yfbHdUKwfyEYzmZR2tTdcCK%2Bs1S62OhFb4JPOTbfoIFixz%2BVsQWWx6f%2BvdkZs2CW8aPfJykrkhEnOyj%2FAYyJvsTIMSS0GanBhiQ59JDxJKWoT9DjOPg4DwQr68LmbCNUGY1d&X-Amz-Signature=ac5e660e688ff67e542a5416ce88d42e180bdf229b18fd77ae1005c8e5637a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

