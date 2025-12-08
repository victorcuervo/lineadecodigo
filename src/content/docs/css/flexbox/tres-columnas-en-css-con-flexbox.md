---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEV32OFY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZz0DK1BlUHECY2KCl9tndnFUjDzxdHWCTOE68eLd2ugIhANPoLwAykzXQCdrIFOnRxnOLWfSyHFeNFi%2FdzpqtxGkUKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyjnOxxUKgQGlw8bUq3AMuTd7ZTIK9qAGFNmXbMoEgFx0TKGtsqRkhYxUcVQZsDKkXJgcnfwkTF2W6yhAs7y63Xt%2B6yb67d2OZ7qblBUUPcgjvFpPjX2vQr8xYSvXK5qn7b%2BbDmew79Kn9lLAWR9kVn5Ko5B8Zo%2BhrctROKMqq3hNmA0RAivFZQwfWLC%2Bn1A9gVvovZb5isEwS3NNiGBYnRMpbYfn6ee1E9vFlteSis3MYliJduZubTEnG7cUWXCdSC8UUKcNkRE%2FApkdblKNf3xiH3htYCI5b%2FujTSBGvDLm8jI6KtZ%2BcAgb4x%2FGWD3XwEu5WBdSYmYvd7tXlmU0YmZ8zyndT7jT%2FGNjankjaChiDSBj%2BTlloYL8uJ70tSbfrzM7Gu9F0p9%2F57OMadpROcSFGoCogAMaTV3CJJWmdeN9p9%2B7YzSiRIO7GpnAgZnqVh0aRsK6FU6UZJ4Datbz9QCNnsBEcdkIez1iTw5vFl1RYHbO7UhmLlUsX5Qq9uQwn3JcsaoMi7of8GpGtHiAqOee%2FcInerOQnREyoadAXtKTtxeIEzBPS1KP4S0%2BezzwSheF67Scee2n2MLWVAIcHDTNeSSql%2FKNQ7FZloa%2Fi1rH%2BOdjXm%2BVG46HJfVFHujA4JL5iocFyIua85TCo7dnJBjqkAQBgHtfCwrQ8JgC0UuAC7RvHpJwo7hV1NbuFtW26LN%2FUge7lx7fD4i2NcbFIABUV%2BD6WfWA13AxNsQBw4k5meNeBpIYBEsDZ6zzybcLEB1TDIwFrKP71P33Go9I8vGTzIYhu1d88IKT%2F5jyv70StheF9ohlXneL1puAjuNjv1LNPGGt7LlP3EtI6hBsjsD2lM5vSTuFq%2BuuzI37u95ngDk8bLHCW&X-Amz-Signature=88edd3cbf8b984a3fbb5ae568c759fdc9b376c7792ea86d0f3ab1c7fd69db6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEV32OFY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZz0DK1BlUHECY2KCl9tndnFUjDzxdHWCTOE68eLd2ugIhANPoLwAykzXQCdrIFOnRxnOLWfSyHFeNFi%2FdzpqtxGkUKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyjnOxxUKgQGlw8bUq3AMuTd7ZTIK9qAGFNmXbMoEgFx0TKGtsqRkhYxUcVQZsDKkXJgcnfwkTF2W6yhAs7y63Xt%2B6yb67d2OZ7qblBUUPcgjvFpPjX2vQr8xYSvXK5qn7b%2BbDmew79Kn9lLAWR9kVn5Ko5B8Zo%2BhrctROKMqq3hNmA0RAivFZQwfWLC%2Bn1A9gVvovZb5isEwS3NNiGBYnRMpbYfn6ee1E9vFlteSis3MYliJduZubTEnG7cUWXCdSC8UUKcNkRE%2FApkdblKNf3xiH3htYCI5b%2FujTSBGvDLm8jI6KtZ%2BcAgb4x%2FGWD3XwEu5WBdSYmYvd7tXlmU0YmZ8zyndT7jT%2FGNjankjaChiDSBj%2BTlloYL8uJ70tSbfrzM7Gu9F0p9%2F57OMadpROcSFGoCogAMaTV3CJJWmdeN9p9%2B7YzSiRIO7GpnAgZnqVh0aRsK6FU6UZJ4Datbz9QCNnsBEcdkIez1iTw5vFl1RYHbO7UhmLlUsX5Qq9uQwn3JcsaoMi7of8GpGtHiAqOee%2FcInerOQnREyoadAXtKTtxeIEzBPS1KP4S0%2BezzwSheF67Scee2n2MLWVAIcHDTNeSSql%2FKNQ7FZloa%2Fi1rH%2BOdjXm%2BVG46HJfVFHujA4JL5iocFyIua85TCo7dnJBjqkAQBgHtfCwrQ8JgC0UuAC7RvHpJwo7hV1NbuFtW26LN%2FUge7lx7fD4i2NcbFIABUV%2BD6WfWA13AxNsQBw4k5meNeBpIYBEsDZ6zzybcLEB1TDIwFrKP71P33Go9I8vGTzIYhu1d88IKT%2F5jyv70StheF9ohlXneL1puAjuNjv1LNPGGt7LlP3EtI6hBsjsD2lM5vSTuFq%2BuuzI37u95ngDk8bLHCW&X-Amz-Signature=b2e0ff58b99f300e40e6b77573a418654b57ffbc8cc49758c64091d23d072d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

