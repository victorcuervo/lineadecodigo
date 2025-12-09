---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMHBYMG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEnnMTs3GJ8fDIiUUX0luT2iMWKoIlMyvFpsT%2BA1NXJAiEA3ZTxwF1GaaS%2F1ZYgBdDT3twbI5K1zdkqmdzAsjTUlJ4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlIx6U8I%2BV%2BjieXpCrcA7%2B4ed%2B9zbwc4gaboqOf3InP3WwmGkVXXRyUT%2FynvObjKHSOHifrsT%2BHFSSBshQstUnicYjgb0dYRf7bVaToo8MiC%2FZRyNcRV4kqdN8jS%2BjpvcVHeW4cGfJVkdZdndMEeV8tLmVXw%2BI7jVfoI4cazJvPuES1ZCK9U3U1m6brFf25rGNL6sYLMLpZBgi1yCP4MVUsZn0vggSrdIQuCK6qOPEU%2FZAX2%2BfLkqWIeAJdZw8P7d73SFJb8zS1TsRs%2FLxGImE%2BfcH%2FE194peYxQmu2yaNtPAq%2BTa%2BqP4fzjGgDc8x%2F9XoSFvGUs5PxvKvspnMWrqMSuzwIVh59ep60ig9XrR1goiVaASy02%2BG8Nf0tKFaBLwseSWQNVATkveTiad6c5SNwwJFUN2%2BUUEqJWHC9PnLKxmCpUWubLqfHTZotz2WkWx7oRZ3CrzCa53rzKZmj65hbEqmiuAPpMuWKgNe0AhV56w1dQh7AMQEqGat7SiDTabWeeR%2BzRW80IgZ9EmXFj%2BVLRBDdwHmlJDeL992aUUzi%2BWPSL1INPHyrUOmcasaw5VwBrp%2BstXSBdpaX8VIeJgVmrphKjCNAVYSUDFZSmtIS3tdj7No3VUS67RSS0NhE34xxEFh1nQEPGPo%2FMM%2Fl3skGOqUBOfh1HSoA11s5ATr4vhgmH%2FUmql18cbRboQ1WEk31P4%2FJkAcVkR1YVLiSWuBwYxQUA1UOxcpJJ8ImaZnF7yu6qo7igRlRTmRSclmoTtPawISzu1obDCuCOhBMu2%2BvsIKN0RqxI6jLDtWnUV8kyw3zE5RRaIfv228R9WAI%2FCBKLm%2FnLuRNA3riZEBB4jkM1MOPW%2FtgdgV4c%2BBJ0BB6xmvVFkfFiy1K&X-Amz-Signature=cb61aa2417c6869e3d15798285423ce137f1e3054e7941d8263cf504afc78923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMHBYMG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEnnMTs3GJ8fDIiUUX0luT2iMWKoIlMyvFpsT%2BA1NXJAiEA3ZTxwF1GaaS%2F1ZYgBdDT3twbI5K1zdkqmdzAsjTUlJ4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlIx6U8I%2BV%2BjieXpCrcA7%2B4ed%2B9zbwc4gaboqOf3InP3WwmGkVXXRyUT%2FynvObjKHSOHifrsT%2BHFSSBshQstUnicYjgb0dYRf7bVaToo8MiC%2FZRyNcRV4kqdN8jS%2BjpvcVHeW4cGfJVkdZdndMEeV8tLmVXw%2BI7jVfoI4cazJvPuES1ZCK9U3U1m6brFf25rGNL6sYLMLpZBgi1yCP4MVUsZn0vggSrdIQuCK6qOPEU%2FZAX2%2BfLkqWIeAJdZw8P7d73SFJb8zS1TsRs%2FLxGImE%2BfcH%2FE194peYxQmu2yaNtPAq%2BTa%2BqP4fzjGgDc8x%2F9XoSFvGUs5PxvKvspnMWrqMSuzwIVh59ep60ig9XrR1goiVaASy02%2BG8Nf0tKFaBLwseSWQNVATkveTiad6c5SNwwJFUN2%2BUUEqJWHC9PnLKxmCpUWubLqfHTZotz2WkWx7oRZ3CrzCa53rzKZmj65hbEqmiuAPpMuWKgNe0AhV56w1dQh7AMQEqGat7SiDTabWeeR%2BzRW80IgZ9EmXFj%2BVLRBDdwHmlJDeL992aUUzi%2BWPSL1INPHyrUOmcasaw5VwBrp%2BstXSBdpaX8VIeJgVmrphKjCNAVYSUDFZSmtIS3tdj7No3VUS67RSS0NhE34xxEFh1nQEPGPo%2FMM%2Fl3skGOqUBOfh1HSoA11s5ATr4vhgmH%2FUmql18cbRboQ1WEk31P4%2FJkAcVkR1YVLiSWuBwYxQUA1UOxcpJJ8ImaZnF7yu6qo7igRlRTmRSclmoTtPawISzu1obDCuCOhBMu2%2BvsIKN0RqxI6jLDtWnUV8kyw3zE5RRaIfv228R9WAI%2FCBKLm%2FnLuRNA3riZEBB4jkM1MOPW%2FtgdgV4c%2BBJ0BB6xmvVFkfFiy1K&X-Amz-Signature=b146caf9a7c12e75c314c177cd1a9ee8ac4fa41d683fb6409a33f6b6f9d415b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

