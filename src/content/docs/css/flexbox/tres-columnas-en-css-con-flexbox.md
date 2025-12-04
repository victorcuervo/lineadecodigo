---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHJACIY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFxdWKq0mW7%2FYS3mnSP1ytvjh2z6CVjjy0lVlch3%2FwR9AiEAuyVtF5corq%2FN0%2Bsja%2FVMtLiz4h86Q7e4Ho3FN8JxCV8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKV4xfYf0d3JSnC3XyrcA1qPCdS85A5R092jjqX0hOkn1TuNzTSinw2rJzwpVyQCsvNvCezJH9%2FOBuekjHOkOkF%2BF8c6jKHUi1%2FOlbO7XljI68J9huNoktTbbZulDZukr%2BNhg0pxOpaDOa6gQ31hjZ4CsySR8XFUTrmXzY7lwXS3EYP2mhLYONxyCeEX3bqLOp6ISp9Bve6skGXk666Rin%2BrQfucwXBpQQHlqszPZvygod4BY6jZcGtTcFVi%2FJQCxvrvknGarBas081mO2JmJXCDrrC0XAvZ9ktXTjQ%2FxbElqLhAzuxKOJZ2QZt0sWk9oB4KANImONwAzH8FFRdVdylM2g7L1wHwn8mkkaFufhQPhhadwLWSVBkr1YeSHzuYz%2FxCWg%2BzTeSav%2FOHzyOxJRKARDFhbOnjPkAhN2s9cNNrvLAtgg9pi0awKSw3K7Bt8XHeKMNRTaml89gl9OSnw2OKxF9SLV%2Fb4ir4fqIickTyG0Ve3h3o03KlpHOssChX71Yr0XgWov2Cq%2FN%2FsOfwU5fFxk2wm9P%2FGMVN4TVM0NKoyhW%2BQy60I4DbPrEScSa67TEWx9NRifNWnadM80tn2KbbMc%2FdY%2F6kpRnyWMfJByYkBn6hnufwXHqtb3vTl%2FeVivZXktJYFwT%2BgpfEMLq1w8kGOqUBuAxMoV7l93NAortzsXMmDw6M0eP0oGOZX8BJtPvd%2BpezyHwT6U8iOw9PK3PF8nI0WlwWInI5wOfHgAvvTWGyQUFgLwGFq7lnWgmElwPWmabq9cXHKwfMf%2F0Ewno0WF2jqvaHLwBpDRzksEa%2BkG7VD8VNF0JIPX29egBhF38sC2P6OvD2b%2FzE3yq3X0nyggEsoHZrWlpuR3ely1JaWV3l1XqLHmBX&X-Amz-Signature=44d01ba8fd3ed67e4facb860469598412d7ede59616d6cfcb737cac34b57d167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHJACIY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFxdWKq0mW7%2FYS3mnSP1ytvjh2z6CVjjy0lVlch3%2FwR9AiEAuyVtF5corq%2FN0%2Bsja%2FVMtLiz4h86Q7e4Ho3FN8JxCV8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKV4xfYf0d3JSnC3XyrcA1qPCdS85A5R092jjqX0hOkn1TuNzTSinw2rJzwpVyQCsvNvCezJH9%2FOBuekjHOkOkF%2BF8c6jKHUi1%2FOlbO7XljI68J9huNoktTbbZulDZukr%2BNhg0pxOpaDOa6gQ31hjZ4CsySR8XFUTrmXzY7lwXS3EYP2mhLYONxyCeEX3bqLOp6ISp9Bve6skGXk666Rin%2BrQfucwXBpQQHlqszPZvygod4BY6jZcGtTcFVi%2FJQCxvrvknGarBas081mO2JmJXCDrrC0XAvZ9ktXTjQ%2FxbElqLhAzuxKOJZ2QZt0sWk9oB4KANImONwAzH8FFRdVdylM2g7L1wHwn8mkkaFufhQPhhadwLWSVBkr1YeSHzuYz%2FxCWg%2BzTeSav%2FOHzyOxJRKARDFhbOnjPkAhN2s9cNNrvLAtgg9pi0awKSw3K7Bt8XHeKMNRTaml89gl9OSnw2OKxF9SLV%2Fb4ir4fqIickTyG0Ve3h3o03KlpHOssChX71Yr0XgWov2Cq%2FN%2FsOfwU5fFxk2wm9P%2FGMVN4TVM0NKoyhW%2BQy60I4DbPrEScSa67TEWx9NRifNWnadM80tn2KbbMc%2FdY%2F6kpRnyWMfJByYkBn6hnufwXHqtb3vTl%2FeVivZXktJYFwT%2BgpfEMLq1w8kGOqUBuAxMoV7l93NAortzsXMmDw6M0eP0oGOZX8BJtPvd%2BpezyHwT6U8iOw9PK3PF8nI0WlwWInI5wOfHgAvvTWGyQUFgLwGFq7lnWgmElwPWmabq9cXHKwfMf%2F0Ewno0WF2jqvaHLwBpDRzksEa%2BkG7VD8VNF0JIPX29egBhF38sC2P6OvD2b%2FzE3yq3X0nyggEsoHZrWlpuR3ely1JaWV3l1XqLHmBX&X-Amz-Signature=8f7d3a4cc9dfc1072fc71aae3a476a1a5c99f377986a75f0ad746f59d9dcc525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

