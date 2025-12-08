---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CZ2FFY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvhv3DHIDLmGZTygQ2gyDu5XkE%2FYB0SoiMx2y%2BCdCbEgIgG63D76RPk7uvwayo55z%2BRxv7KTicUjtSVSCf7blBrvEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4e%2F1PNI%2BLntVlkpyrcAxfYnkduSHyQIW9ENrHqlyjU1j2SUbe2z5iYy9dXdxpxFoRqn9R%2F5G63Tty5bc1xz5ecPdnSHfSAc1N7eo5DUptLqKs4%2FuK4%2BaGzlw4VWQ8eA8S%2FJN1OEYpte27hOPSkM25npaLyD7L%2FDalGB4sczzMgZwJziib80FHHLXOJozdvcAc4ZUt9Z7EWmlYyJnJ23CGeGsVlxpQSL7HbM2rDNroMG3bVtpdqDArfg%2BgwAXH3j3%2FYoHcx9CW2mvo5FSJZD9p2o6ONb2GrSQUbxh2PEh8MuBq1YP9FxiPp383x0LTlsLOU3UdV8SOYYnZGShGHrer8VjzchQ0I3PvCvZzTkyNXf40RcSX%2FFQPlZYxeGuhByvnaUAg80kpfkIfHJwSOHfA4mBc5cUcv81BndLiUf%2BhlEL4GS%2F3ymTvPm3cIral8onEd4Zpqzqiv46KFMcw2EB6G9ZUARxgXAHpkAMUomcbU1OrqAciW%2FL6uSyrLKkmRSWZ9HeJ3Q3vs3dSC%2BilOwtg84bNcnETlHeBou8eRVZdDnk89G3uNzfIULI8obyuHEHQ9OaXt5mcnur3MGsg4oDR7UarjhDX6yObpfuIoegIUcV7f5lLu%2FBopSLzFiPqPMwP4L4LE5JKK2vmSMJOA3ckGOqUB7CofcMfwTQj4sQhxrwnvDXoOejhRqCmnUJFfJF3LZsq3FjLrqRwuczICax6hG2UwZQ%2Bg2v8rrppl2FmNoio7vYXhtyLCAwZBCdkCUvZy9kHxLin%2FAvbJWEIu5JM0uL9bdxkElJnG5CewzUWfYF7XtgLvbpRn5Merr78MoVpI9lI0ew3%2Bmgrj67kBOxqpCoRRgCWCwwsh89%2FIeLvPO9CaxR8zZkHW&X-Amz-Signature=be584a077031f5fb097de059c329a1b594ec71a2d12d709690d3f79257cc47e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CZ2FFY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvhv3DHIDLmGZTygQ2gyDu5XkE%2FYB0SoiMx2y%2BCdCbEgIgG63D76RPk7uvwayo55z%2BRxv7KTicUjtSVSCf7blBrvEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4e%2F1PNI%2BLntVlkpyrcAxfYnkduSHyQIW9ENrHqlyjU1j2SUbe2z5iYy9dXdxpxFoRqn9R%2F5G63Tty5bc1xz5ecPdnSHfSAc1N7eo5DUptLqKs4%2FuK4%2BaGzlw4VWQ8eA8S%2FJN1OEYpte27hOPSkM25npaLyD7L%2FDalGB4sczzMgZwJziib80FHHLXOJozdvcAc4ZUt9Z7EWmlYyJnJ23CGeGsVlxpQSL7HbM2rDNroMG3bVtpdqDArfg%2BgwAXH3j3%2FYoHcx9CW2mvo5FSJZD9p2o6ONb2GrSQUbxh2PEh8MuBq1YP9FxiPp383x0LTlsLOU3UdV8SOYYnZGShGHrer8VjzchQ0I3PvCvZzTkyNXf40RcSX%2FFQPlZYxeGuhByvnaUAg80kpfkIfHJwSOHfA4mBc5cUcv81BndLiUf%2BhlEL4GS%2F3ymTvPm3cIral8onEd4Zpqzqiv46KFMcw2EB6G9ZUARxgXAHpkAMUomcbU1OrqAciW%2FL6uSyrLKkmRSWZ9HeJ3Q3vs3dSC%2BilOwtg84bNcnETlHeBou8eRVZdDnk89G3uNzfIULI8obyuHEHQ9OaXt5mcnur3MGsg4oDR7UarjhDX6yObpfuIoegIUcV7f5lLu%2FBopSLzFiPqPMwP4L4LE5JKK2vmSMJOA3ckGOqUB7CofcMfwTQj4sQhxrwnvDXoOejhRqCmnUJFfJF3LZsq3FjLrqRwuczICax6hG2UwZQ%2Bg2v8rrppl2FmNoio7vYXhtyLCAwZBCdkCUvZy9kHxLin%2FAvbJWEIu5JM0uL9bdxkElJnG5CewzUWfYF7XtgLvbpRn5Merr78MoVpI9lI0ew3%2Bmgrj67kBOxqpCoRRgCWCwwsh89%2FIeLvPO9CaxR8zZkHW&X-Amz-Signature=d7fc947e85b5c1059b1912ce74094b611bc3464809215ad0a7bf286bf3c25108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

