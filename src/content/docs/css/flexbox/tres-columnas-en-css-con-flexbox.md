---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VESGRC3U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLoai5klicFi8CqUhNqckHAfasonKLTnY9z3SkJVmt%2BAiBsRr5PXtRj40BO31lb2Z1t099K8cylWWGTwDyN9pPaRiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeJdNsETCTUf4aN6SKtwDBreTJmCiqWfbWXudiIVA0tf0S5brHwh3vE3MEMEKMtcpSHnaNfB%2FH5DDNOGurQoOf3lsQaRMtDd8BgROHhPfl2q69op0OyE7g6WBI3NswrvmQeYCIDmFD3E4EZgDRuXeXlbigLqh%2BPk83NL75JDNg1J%2FAXpKxT5Pa%2Bq5FC1yDyxPrfCezC4hr4ddx%2FvEzAnGR58c2fueKt0de68wii9u66Hxf8n64e8YKEnnu66YJIjGDLuHVUEf3sxusMBAtX4wqI%2BS%2FeXtvOwhrlVhzgcVSPZC5cGBwCFg%2B9Qfpdut4pEcP4a7%2F%2FZIwETFw75AvIVUdjufS%2FowVOsPu2646P0RkVxms4OiBrtq21El6oFX%2B6ngwqQa0x8N0%2FDWEDOcSMsPy%2BLRlItxmswarR0zV%2B2aJuLBvfQ%2Bvj7%2BUsVUYluH81S7twhqFgoC0h3hbYBkS4gvs8RggfXRFVKYjuK%2Fq6rQrbH0RPJ%2B0aUGEf0Wcr5lYEzEvzHgp1gaYDUHBFov7XJqJd6P0aNq5xPjVxrdnSX%2BplZqPN5McG9yTKTkrMIJcLsO7xzyERZvw1cVIUpakv4oneyytG0mJsg6yxSnFzGdOtZ3FLsdDFMqyJMOou5c8Ah6vgoOHBmlRzbs%2BKUw4YfcyQY6pgHwDHCvf3HOXpjYlGAUGiTMKJklwLCbohj70Qy%2Fh8Y3ATXxBiRUNePunczIAYAHhlHPvJpSh830b2cNE%2F3tYru7ijOH40tDXOm4WM173HC5NyldHCmGR%2BeFQkaYEBhCi1eq%2BjZVeDnEHLJMFhZ3Syi4jYtnEohje0bAd8eDPDsgY6rwvz4OgsWN0JsGHQ0qSLPuqiUrigSpKnZ7%2F5m2tJ7pLH9XuaHe&X-Amz-Signature=fb9cde9b37ee098df9990a7082c3976af8c1fef22a0f4d4df7872eabddccb271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VESGRC3U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLoai5klicFi8CqUhNqckHAfasonKLTnY9z3SkJVmt%2BAiBsRr5PXtRj40BO31lb2Z1t099K8cylWWGTwDyN9pPaRiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeJdNsETCTUf4aN6SKtwDBreTJmCiqWfbWXudiIVA0tf0S5brHwh3vE3MEMEKMtcpSHnaNfB%2FH5DDNOGurQoOf3lsQaRMtDd8BgROHhPfl2q69op0OyE7g6WBI3NswrvmQeYCIDmFD3E4EZgDRuXeXlbigLqh%2BPk83NL75JDNg1J%2FAXpKxT5Pa%2Bq5FC1yDyxPrfCezC4hr4ddx%2FvEzAnGR58c2fueKt0de68wii9u66Hxf8n64e8YKEnnu66YJIjGDLuHVUEf3sxusMBAtX4wqI%2BS%2FeXtvOwhrlVhzgcVSPZC5cGBwCFg%2B9Qfpdut4pEcP4a7%2F%2FZIwETFw75AvIVUdjufS%2FowVOsPu2646P0RkVxms4OiBrtq21El6oFX%2B6ngwqQa0x8N0%2FDWEDOcSMsPy%2BLRlItxmswarR0zV%2B2aJuLBvfQ%2Bvj7%2BUsVUYluH81S7twhqFgoC0h3hbYBkS4gvs8RggfXRFVKYjuK%2Fq6rQrbH0RPJ%2B0aUGEf0Wcr5lYEzEvzHgp1gaYDUHBFov7XJqJd6P0aNq5xPjVxrdnSX%2BplZqPN5McG9yTKTkrMIJcLsO7xzyERZvw1cVIUpakv4oneyytG0mJsg6yxSnFzGdOtZ3FLsdDFMqyJMOou5c8Ah6vgoOHBmlRzbs%2BKUw4YfcyQY6pgHwDHCvf3HOXpjYlGAUGiTMKJklwLCbohj70Qy%2Fh8Y3ATXxBiRUNePunczIAYAHhlHPvJpSh830b2cNE%2F3tYru7ijOH40tDXOm4WM173HC5NyldHCmGR%2BeFQkaYEBhCi1eq%2BjZVeDnEHLJMFhZ3Syi4jYtnEohje0bAd8eDPDsgY6rwvz4OgsWN0JsGHQ0qSLPuqiUrigSpKnZ7%2F5m2tJ7pLH9XuaHe&X-Amz-Signature=b15979ee3f127fc7dbbe730b0d9d61926762777fa462d1f5eabd47a22ae5fc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

