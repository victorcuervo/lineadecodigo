---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQFSIZ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwkExboiUPBVZhd8xF5boCqez7OKChTow30tZmomfCMCIQDs2qNbt0yHNL76nB%2B9JiYg4TLEGNBZ1y0rBGqRcgDGTSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmM607rFDFVYgWg%2BQKtwD83mkcDN0J1eZyyZFH1oBNvPgmRIi3iwsaLaR%2B2j6sEsB5oRxT0c8gxXkrWesbdCzDzbKIOCtzaHDwyBf0YFB2L6MQ4Yv7LCcayVkFJuQMPi6DcWIZZxbmg6fTfjskbs9XQVqCd7SPpehxjeqYYnorZO59CQNy%2FKrEdBqaFlF%2BQ1P8YRnZf1%2FVX4mjorEB7B6kmqNjhiqc2PvTd4ax4bAwEOre2Hjmxni0Uvs4jQdsaW2Q8t3xPZpwNn5SMDUH7PXBP%2FtBSeZbIqu0AXu3dR1eSoANbmJYmGUrMEcEe51ijIjCX4api5jC1ZxL2YWjMMNDzA0SVbrgIn0EHUH3JshePCbuJNdiQ2tt46Bp22rsu5FwuzFl3a5XyX3WJvPmwwn3Gv0OGqFwPH2N38MA70hmtlnf0a%2F%2FAnb0%2FW5KefQs1bQljkxsfEhJ64%2Fy80TrEU%2Fd8i4osU%2BZ2jbNnoVWNKDT%2FG46d3lblTwTiIG0M1DRf0l9R7JL2%2FcIoQ9UfRidvx8tqmGVc2TRQIFBsCMsyQOS79IYi5kjcH%2Fnzj2ePPXUPLHV1o4sJWH3hfqCgdYirt0Sv6qhgmMIEsA%2BUrGbM1S2KdR%2BrfDlsZNgVFX14ydvqI5L5mieiTloAZCDhUwpu3ZyQY6pgEmKHVR%2F93ELM3FYVjQnt7rRU8kqF04e9WBl2rVbTCthmtj%2FcS294CnLLTT9YEA%2FUJoTOGDdV5aex8Qn99pCWjEOEPEu45NoYnRd9bnDGaV3uyC4Hvh%2BhNbQYxUjbba0%2B9CLzdtPcJ6vHcayaTW24NdrAIHsyh5RIgh73pnwgJbNAYkx286WHWFZ7ctbJYu9HWKJsaIMpXZxy%2BswgL8fkvm8GmQF%2FM%2F&X-Amz-Signature=8d62465a6a9304c74cec9ce7ac57d325127a214ea77d923a3b4c240e325c3dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQFSIZ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwkExboiUPBVZhd8xF5boCqez7OKChTow30tZmomfCMCIQDs2qNbt0yHNL76nB%2B9JiYg4TLEGNBZ1y0rBGqRcgDGTSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmM607rFDFVYgWg%2BQKtwD83mkcDN0J1eZyyZFH1oBNvPgmRIi3iwsaLaR%2B2j6sEsB5oRxT0c8gxXkrWesbdCzDzbKIOCtzaHDwyBf0YFB2L6MQ4Yv7LCcayVkFJuQMPi6DcWIZZxbmg6fTfjskbs9XQVqCd7SPpehxjeqYYnorZO59CQNy%2FKrEdBqaFlF%2BQ1P8YRnZf1%2FVX4mjorEB7B6kmqNjhiqc2PvTd4ax4bAwEOre2Hjmxni0Uvs4jQdsaW2Q8t3xPZpwNn5SMDUH7PXBP%2FtBSeZbIqu0AXu3dR1eSoANbmJYmGUrMEcEe51ijIjCX4api5jC1ZxL2YWjMMNDzA0SVbrgIn0EHUH3JshePCbuJNdiQ2tt46Bp22rsu5FwuzFl3a5XyX3WJvPmwwn3Gv0OGqFwPH2N38MA70hmtlnf0a%2F%2FAnb0%2FW5KefQs1bQljkxsfEhJ64%2Fy80TrEU%2Fd8i4osU%2BZ2jbNnoVWNKDT%2FG46d3lblTwTiIG0M1DRf0l9R7JL2%2FcIoQ9UfRidvx8tqmGVc2TRQIFBsCMsyQOS79IYi5kjcH%2Fnzj2ePPXUPLHV1o4sJWH3hfqCgdYirt0Sv6qhgmMIEsA%2BUrGbM1S2KdR%2BrfDlsZNgVFX14ydvqI5L5mieiTloAZCDhUwpu3ZyQY6pgEmKHVR%2F93ELM3FYVjQnt7rRU8kqF04e9WBl2rVbTCthmtj%2FcS294CnLLTT9YEA%2FUJoTOGDdV5aex8Qn99pCWjEOEPEu45NoYnRd9bnDGaV3uyC4Hvh%2BhNbQYxUjbba0%2B9CLzdtPcJ6vHcayaTW24NdrAIHsyh5RIgh73pnwgJbNAYkx286WHWFZ7ctbJYu9HWKJsaIMpXZxy%2BswgL8fkvm8GmQF%2FM%2F&X-Amz-Signature=8f659d14734657efd8c68e227745197f1cb411e2382b02fe022cecc1ae408053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

