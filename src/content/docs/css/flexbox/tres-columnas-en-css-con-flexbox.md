---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSY6NANZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxalzJ1HEELKCcA%2BY8hWQqb62OzTV8zYkERUwAG6YMCAIgGfTYv856268LTedMYYKZ5YvuW6x0kAVfEY1liHE%2FSg4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6p09JgT4psgBS2nCrcA4QA5fy1dYu0Iiy5fq48lEqAtV894WMPgu%2BAaRVnTXz5wFdIeZAEWqcSlM4lcbYbDVnRudAFMToIG1nwE0ppb4nAqdZaW13BvUNX4B3QSfDc7DlzaAbXvO64nLWyeJsqCs4f4uZz2f7j75uea3KfBG9fx9Je5P2MeV%2B61bWwrvjTK9zfxVEauRnABIuPBZf0hqEDyACANmdTh7eZ32gSOSIStahM1n1wdHYrvZ0IAMWSdIZGpxkr0Mc2UnEVJ2UQOLaTPA3zQ%2B15NjBzsrR50V0duh8xz4IMjliW5ulKW1PImGA7PszXbrvuaMZMJBpwSsJF8zRh2TplGMnrF34QxkTfP6DZHE3TXSA3UG%2FujzNxTdLIflTzB4y2kg2gwsMjhkUVsqRXxAXRxMCcix3ZneuSDPIyFIcaWZqFJNhMQ%2FDgsJYTHjj1va7EMbf2aWnwTehvcaJHm36Xvth%2F1ripa0L9%2FxFl5q6Nev0Jik3pPZHkp5FLHqmSYeE9RM2xQoyGom95zg5qXVgjw7y%2BQM7sWyBrchBameelTAN63q6j%2Fu25U6XH%2BRQQIFOeKvd%2BhINdomXV%2BP95JmW5D6sYaMXbNXGoDT9E8Gg2xYf1sxJnFcJA%2Bobt3FW%2FHbRx8%2Fs6MIqA3ckGOqUB8HJMAtmlpB14TRSWC0KnvK1iCsF7RTyNFij3fEjxd%2FRCQTwYd4UdNx7TBYu45bMseeXJj7p%2BSmcXq9fzFvpvN1skXlh9%2F3FAudGkgFamlt16KwtGIb0XJ6Qn1yI20D%2BfK1T%2F%2F3Slp1DVESulGtIvzG7oqdMOTy3DvFcKHbckYPb2k1IZAWX7HTisSz4ripwkPIfs0%2FauBN%2FarVxFq3JrDH75MIEk&X-Amz-Signature=1292fb0b424a3ff8e89623a01035af9f4f641e87dc74df1aef252feb067cb352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSY6NANZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxalzJ1HEELKCcA%2BY8hWQqb62OzTV8zYkERUwAG6YMCAIgGfTYv856268LTedMYYKZ5YvuW6x0kAVfEY1liHE%2FSg4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6p09JgT4psgBS2nCrcA4QA5fy1dYu0Iiy5fq48lEqAtV894WMPgu%2BAaRVnTXz5wFdIeZAEWqcSlM4lcbYbDVnRudAFMToIG1nwE0ppb4nAqdZaW13BvUNX4B3QSfDc7DlzaAbXvO64nLWyeJsqCs4f4uZz2f7j75uea3KfBG9fx9Je5P2MeV%2B61bWwrvjTK9zfxVEauRnABIuPBZf0hqEDyACANmdTh7eZ32gSOSIStahM1n1wdHYrvZ0IAMWSdIZGpxkr0Mc2UnEVJ2UQOLaTPA3zQ%2B15NjBzsrR50V0duh8xz4IMjliW5ulKW1PImGA7PszXbrvuaMZMJBpwSsJF8zRh2TplGMnrF34QxkTfP6DZHE3TXSA3UG%2FujzNxTdLIflTzB4y2kg2gwsMjhkUVsqRXxAXRxMCcix3ZneuSDPIyFIcaWZqFJNhMQ%2FDgsJYTHjj1va7EMbf2aWnwTehvcaJHm36Xvth%2F1ripa0L9%2FxFl5q6Nev0Jik3pPZHkp5FLHqmSYeE9RM2xQoyGom95zg5qXVgjw7y%2BQM7sWyBrchBameelTAN63q6j%2Fu25U6XH%2BRQQIFOeKvd%2BhINdomXV%2BP95JmW5D6sYaMXbNXGoDT9E8Gg2xYf1sxJnFcJA%2Bobt3FW%2FHbRx8%2Fs6MIqA3ckGOqUB8HJMAtmlpB14TRSWC0KnvK1iCsF7RTyNFij3fEjxd%2FRCQTwYd4UdNx7TBYu45bMseeXJj7p%2BSmcXq9fzFvpvN1skXlh9%2F3FAudGkgFamlt16KwtGIb0XJ6Qn1yI20D%2BfK1T%2F%2F3Slp1DVESulGtIvzG7oqdMOTy3DvFcKHbckYPb2k1IZAWX7HTisSz4ripwkPIfs0%2FauBN%2FarVxFq3JrDH75MIEk&X-Amz-Signature=07ced8692876bd92d346bdc78bbfd4d016a31dd6b8039fc54dc80b904f450425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

