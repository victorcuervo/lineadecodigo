---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXIJVP2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxoTshu%2BrBwoa5M7amqvU2e8Z4VO6fhijlociGV11zeAiEAnBDtRsqX55QslXlJ4mxM1QagNP%2BgWNyMvcFjwy%2B5KbwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8YJRE79YgkRjVE0yrcA7g88l%2BdzHI78YbvKIl3T0UBUlfZFuyPXInlwBc7x%2BJCCr1cMSp1pFx6vSCbcvoBsZl2XPfA4ndYMMHV8y2cY7xW%2BBPGlFCR%2FHVUSgCNT2l2w1ZFu8S70dWlzTOPyRWaD8X7NvQ61%2F6jLmvw%2BmGM6%2Bg8jQkCjbODbgUGmrEwaSSdsHMnKZgij3HmKuA%2B%2FrkFwqkugXI6GEg%2FwunupeiFR6AOjrQfcJW8b6ay14LzF0G%2BEwwGRVM296VTvMOoBC6dIH1KUo8ZU246xj5r56jMA82OxJPsHoOvUVVHDDOEeMy%2BVyvBQGHv6rDdFqm357DGtFJVJ9PMVRzSySMq5gwpOKOCpSgmeFME4VwzyR%2BSYBA8zFWf2cvdKzI7dQjHLCBPasqlNCRGfdAsA4KAck%2F%2BEOk%2BR7ha%2BxP36%2Bp3i%2BfA9ThZqkJAO2i%2BIzfAjDfxbyZdIlqyoCKI74%2FyJmcrsOtCdb8NiEpQ9PuHu2lZszonged7f6Ywo9IsYeOQDkzFhxKa%2FwBXfw9UF%2BJ%2FdZYHXktcazL2eHSLKpN2O4%2Boay5OD7QdXZWjYoHRvz%2Fyib%2FzDdNqVTA2cNutYjvxfi9e1N4yh4sFjT1JVJtSU6ixcSoRvgYoaajQDZQTwG2b0kajMOKG3MkGOqUB6xhO9bz5Ki3yFg4OOsPY%2B06aSglBXDcmJ4ShDkls30mU8lXfeQsz4gRhQC8ePk31fpZtHgXoRn%2F%2FLbDkGBCyCmqFq%2FLGLlYFYdNBUBiCkGNSqNiCt4vm2MajrKWsYtWcM5EGvM5Z8LihAQ2XWq5K3frMyRlEuGYaMuTW41boTxvaiqv46KEMih%2BVhHkqiWxvOEdZGXeJwbwZRtrQPoFp%2Fp%2BZC0gg&X-Amz-Signature=bf3345d4a2c01a5cac5581c323985a3fb5766bfdc050956a47ab8bad468ea991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXIJVP2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxoTshu%2BrBwoa5M7amqvU2e8Z4VO6fhijlociGV11zeAiEAnBDtRsqX55QslXlJ4mxM1QagNP%2BgWNyMvcFjwy%2B5KbwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8YJRE79YgkRjVE0yrcA7g88l%2BdzHI78YbvKIl3T0UBUlfZFuyPXInlwBc7x%2BJCCr1cMSp1pFx6vSCbcvoBsZl2XPfA4ndYMMHV8y2cY7xW%2BBPGlFCR%2FHVUSgCNT2l2w1ZFu8S70dWlzTOPyRWaD8X7NvQ61%2F6jLmvw%2BmGM6%2Bg8jQkCjbODbgUGmrEwaSSdsHMnKZgij3HmKuA%2B%2FrkFwqkugXI6GEg%2FwunupeiFR6AOjrQfcJW8b6ay14LzF0G%2BEwwGRVM296VTvMOoBC6dIH1KUo8ZU246xj5r56jMA82OxJPsHoOvUVVHDDOEeMy%2BVyvBQGHv6rDdFqm357DGtFJVJ9PMVRzSySMq5gwpOKOCpSgmeFME4VwzyR%2BSYBA8zFWf2cvdKzI7dQjHLCBPasqlNCRGfdAsA4KAck%2F%2BEOk%2BR7ha%2BxP36%2Bp3i%2BfA9ThZqkJAO2i%2BIzfAjDfxbyZdIlqyoCKI74%2FyJmcrsOtCdb8NiEpQ9PuHu2lZszonged7f6Ywo9IsYeOQDkzFhxKa%2FwBXfw9UF%2BJ%2FdZYHXktcazL2eHSLKpN2O4%2Boay5OD7QdXZWjYoHRvz%2Fyib%2FzDdNqVTA2cNutYjvxfi9e1N4yh4sFjT1JVJtSU6ixcSoRvgYoaajQDZQTwG2b0kajMOKG3MkGOqUB6xhO9bz5Ki3yFg4OOsPY%2B06aSglBXDcmJ4ShDkls30mU8lXfeQsz4gRhQC8ePk31fpZtHgXoRn%2F%2FLbDkGBCyCmqFq%2FLGLlYFYdNBUBiCkGNSqNiCt4vm2MajrKWsYtWcM5EGvM5Z8LihAQ2XWq5K3frMyRlEuGYaMuTW41boTxvaiqv46KEMih%2BVhHkqiWxvOEdZGXeJwbwZRtrQPoFp%2Fp%2BZC0gg&X-Amz-Signature=03576d9182222be59153687f044a06104602651b1c9921fecc8dc6bc83d8e39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

