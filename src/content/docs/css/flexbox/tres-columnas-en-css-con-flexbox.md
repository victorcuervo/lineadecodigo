---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHC43JE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZk7prBxLxRHYs2zWBTMd%2BmuKgyaRpbN4wdmsAO%2BBFyAiEArn%2Bcs2xi%2BqrE0YIeTxJTdyYPB9o8o1Dj0xz9EuZfgj0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPDuyPPi%2F6xHI0S%2F%2FircA%2FBMuDAW4RlNzNy5S3RHvQ%2Bl7h5ZZq1kDJ8dyMUhYUIUjONawU1Qy5fs9rKUDB7rxLIQbqEtLSvL0%2BJMJSIiR718xEBTsKrwWtdWqAehbXGKi5VCJnCN27GvIksk4fhqcMSiD4lnlhcXeEs13LlHmISwkKA7KWZ2N9b1z0PL1odEm7QHrXzDnfj4DlR2qFTVxR7z5FR5bBSRN%2Fry5xQNshCEBgaqcohtBRDimhW5OV18D9KnKb7w7oTS%2B%2BgUS9pvziz9kV3N6ZbwVlF5d2xzbOhnlS1z7ZzFzUFa%2BV4%2B6YpUWEtH3FxFkopSuecf9h0DCM0UV1CXn%2FS77oBSKDCOeWv2FCa0%2F8tKM7gCxezNUyOAOsjczdGH5hNYLniaezS7Suvvhl%2FLhKFIdgfvxdSq8T1%2B0e5%2FpgORhJ2pfrPv%2BnVQmTce%2BiDN4NqiIbJZQ4tdfJZrhkJZyhq3I2piX4KS2j0Kczx8woAh3%2FLyRs2vYOd3og0meRrSx0xub143DeNzWHdxVTgaFM%2FwByh37lSuUWSTfiMPjUdyx7CBhgooqPdUEr4TRfUEQjSE%2BJ9hREKMaiRzt1zAW9VJ0IEeqGyXwWx3HgRZ2AQlEb1Vc%2F65FMg6Rp2yVebsJNATK7tqMO3M0ckGOqUBsinQn81L%2BEW%2BjyI1AUdk5m%2BBDBRhOsVSOkabDZCua7VuzClk%2BgipsvDPga5dbmhRKYyRPGbefZkSVTpJuL%2BS5VZxJCJF455kVdYQpLCBrgaAlKXnlIE9qrLvFlWQaMjBu6myBvywCn2l3nmAxBfJCH2jvTbJU7Sy7wjy0Wq1anGb%2FCkqD3Hrsy%2FQD2J4%2FeSJ6SKTiCb%2BRUZhlb%2BpbylU5Naeu5sH&X-Amz-Signature=190ef34ca56f2570cebaef35cd944939def9677216cca96223d02bda3f33fdc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHC43JE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZk7prBxLxRHYs2zWBTMd%2BmuKgyaRpbN4wdmsAO%2BBFyAiEArn%2Bcs2xi%2BqrE0YIeTxJTdyYPB9o8o1Dj0xz9EuZfgj0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPDuyPPi%2F6xHI0S%2F%2FircA%2FBMuDAW4RlNzNy5S3RHvQ%2Bl7h5ZZq1kDJ8dyMUhYUIUjONawU1Qy5fs9rKUDB7rxLIQbqEtLSvL0%2BJMJSIiR718xEBTsKrwWtdWqAehbXGKi5VCJnCN27GvIksk4fhqcMSiD4lnlhcXeEs13LlHmISwkKA7KWZ2N9b1z0PL1odEm7QHrXzDnfj4DlR2qFTVxR7z5FR5bBSRN%2Fry5xQNshCEBgaqcohtBRDimhW5OV18D9KnKb7w7oTS%2B%2BgUS9pvziz9kV3N6ZbwVlF5d2xzbOhnlS1z7ZzFzUFa%2BV4%2B6YpUWEtH3FxFkopSuecf9h0DCM0UV1CXn%2FS77oBSKDCOeWv2FCa0%2F8tKM7gCxezNUyOAOsjczdGH5hNYLniaezS7Suvvhl%2FLhKFIdgfvxdSq8T1%2B0e5%2FpgORhJ2pfrPv%2BnVQmTce%2BiDN4NqiIbJZQ4tdfJZrhkJZyhq3I2piX4KS2j0Kczx8woAh3%2FLyRs2vYOd3og0meRrSx0xub143DeNzWHdxVTgaFM%2FwByh37lSuUWSTfiMPjUdyx7CBhgooqPdUEr4TRfUEQjSE%2BJ9hREKMaiRzt1zAW9VJ0IEeqGyXwWx3HgRZ2AQlEb1Vc%2F65FMg6Rp2yVebsJNATK7tqMO3M0ckGOqUBsinQn81L%2BEW%2BjyI1AUdk5m%2BBDBRhOsVSOkabDZCua7VuzClk%2BgipsvDPga5dbmhRKYyRPGbefZkSVTpJuL%2BS5VZxJCJF455kVdYQpLCBrgaAlKXnlIE9qrLvFlWQaMjBu6myBvywCn2l3nmAxBfJCH2jvTbJU7Sy7wjy0Wq1anGb%2FCkqD3Hrsy%2FQD2J4%2FeSJ6SKTiCb%2BRUZhlb%2BpbylU5Naeu5sH&X-Amz-Signature=2805cfaf6b1cf382881b63dc00492331154f5cbfad8d881a465ed7cca3f9bbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

