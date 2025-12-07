---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKLFPWWU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQWd9RRAP7yCUVeLUVfwHiSp5%2BogBAQEOkRjchNGjxgIgMU1VbGssxIcSfUKai86nzAsp%2BqTxSKfnis3b0pxCG2gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BJQlq4h8WzGfZSRCrcA4z5e%2B9cBmMOqDe595%2BggRd2XGrep3sajpnx7eOPRiu6JoYzsZA%2B%2FLtjycCpv77Sr65Cs%2ByLpBYZwOONeTTFZdo9QW4SCEhuagRIp0VDWVmX2S9XECYzmAt9ztan4RF7ico34dAJ9PrEQaWSRMXsPYENIz93tGFOaHPovQw9nVkLAppb0RQhPc0LZFRVx0cx%2Fvr5wpf9U16%2BYgWX%2FRiyWKu3RSyBd7W8lmVrnFjh%2FmSSQkgpmM14rOBmHsANgSYXs8SumRf4d%2ByDvSnw61b3Bs1%2FvWyc16OpS5%2FKdpFIk0FUVMclb6MRlmxFUakVlNhHv1dj91NUTC9VdqxltyCLHcTAm4jDe7E4Gi9485HZ0CeHrx9qxcTXcKlZW%2Bd0O5zSV%2BdcZnSt2WGXGf%2BPJHwirEB8HYpIJD9mhJqbZjr4GxVDWNbLzW0FSbgPS4R1EISQKUaUccn0G8WWiosn5o4p7b7GXpc7qhV9YytAafn3JK9V6t7Oa3GwRIk%2Bm2Z8AT8yxcZdvDkE27ZVhrbtYU%2FH9C98yMJnv9W8V7y0Yl0SVeD4Hyzea3yJzCavgVqsTkW6cTpcink%2Bq26XvcfSqxDc0o3%2FeVZLSUyFs7smr2TuEGzicRNmYJR9aNlfa8%2F6MNL90skGOqUBuIVduPCrj0wkfPD%2FBQlUg69Of2VTdvuMVNXWYVSGAM1amrp1bbu%2B5qfiLJYCarv7IUpydXJ8kotuRCgCHUI2gfG1NAijwByz7TiY1LdFET4xnNafG3Q8ci%2Fk4WabRBJKLP2xxCWM6DWtVwJl8RVssQFvVC18AJzUHmXLbCiIotBP1i1PQ%2BWoCxlWMnHqh1U3Z3EhZQYAnGiBAxwgpbWfyjskoQ2l&X-Amz-Signature=51b4941a0dca6dae5efb73ed4027f044348824201847d4ecd7c0141a6b3edda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKLFPWWU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQWd9RRAP7yCUVeLUVfwHiSp5%2BogBAQEOkRjchNGjxgIgMU1VbGssxIcSfUKai86nzAsp%2BqTxSKfnis3b0pxCG2gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BJQlq4h8WzGfZSRCrcA4z5e%2B9cBmMOqDe595%2BggRd2XGrep3sajpnx7eOPRiu6JoYzsZA%2B%2FLtjycCpv77Sr65Cs%2ByLpBYZwOONeTTFZdo9QW4SCEhuagRIp0VDWVmX2S9XECYzmAt9ztan4RF7ico34dAJ9PrEQaWSRMXsPYENIz93tGFOaHPovQw9nVkLAppb0RQhPc0LZFRVx0cx%2Fvr5wpf9U16%2BYgWX%2FRiyWKu3RSyBd7W8lmVrnFjh%2FmSSQkgpmM14rOBmHsANgSYXs8SumRf4d%2ByDvSnw61b3Bs1%2FvWyc16OpS5%2FKdpFIk0FUVMclb6MRlmxFUakVlNhHv1dj91NUTC9VdqxltyCLHcTAm4jDe7E4Gi9485HZ0CeHrx9qxcTXcKlZW%2Bd0O5zSV%2BdcZnSt2WGXGf%2BPJHwirEB8HYpIJD9mhJqbZjr4GxVDWNbLzW0FSbgPS4R1EISQKUaUccn0G8WWiosn5o4p7b7GXpc7qhV9YytAafn3JK9V6t7Oa3GwRIk%2Bm2Z8AT8yxcZdvDkE27ZVhrbtYU%2FH9C98yMJnv9W8V7y0Yl0SVeD4Hyzea3yJzCavgVqsTkW6cTpcink%2Bq26XvcfSqxDc0o3%2FeVZLSUyFs7smr2TuEGzicRNmYJR9aNlfa8%2F6MNL90skGOqUBuIVduPCrj0wkfPD%2FBQlUg69Of2VTdvuMVNXWYVSGAM1amrp1bbu%2B5qfiLJYCarv7IUpydXJ8kotuRCgCHUI2gfG1NAijwByz7TiY1LdFET4xnNafG3Q8ci%2Fk4WabRBJKLP2xxCWM6DWtVwJl8RVssQFvVC18AJzUHmXLbCiIotBP1i1PQ%2BWoCxlWMnHqh1U3Z3EhZQYAnGiBAxwgpbWfyjskoQ2l&X-Amz-Signature=b7ec38a06bee80bc74340e361df9c7aaa755a7953ee433ec9e861e576e02c785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

