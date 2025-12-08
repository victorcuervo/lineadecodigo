---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUEKGKFC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzZ6xO8CMm2T5grHJTEfZbuPIUVj8gzN6LGbA%2Fl91mJQIgCWu1pVUZPsmum1%2FEpsXrpQDAG13IeU4q68ZVU5giSRoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf4pdbWlSbFDGIYXircA8yuuPcg747TXqVyEwsJPXF7Zo7Gm7VXeYdm%2FoTTYuow5Yhuas699WPCg6AA%2Frcfd8vqeumPOFqTSseYQlUBoTsaS%2Bs6j5BiggSps30Hoa4%2FOYX7V4WAB2xLZap5rM7itQ7vFTGQ1S%2Fcr8Get7xQqSTAir2c08KvICHI8HIjXmrrGXYpIFhduy2ruGHMe%2FdULZYvWLz0%2FXopoldiWumb9Ir9Q%2F9TARODVyB%2FiX7V5teEvbdfm0QkaK96mZyJJKdz9aTG%2FP6d4Sg51gBVrmVhT%2BQa9XUY8mZodHEuhLhbPJkfdnDOynRL8GFVHHMKvnWV4lKahXBTxTH4DOalNoHErydrsVJ8GaNGB3Jxg1v%2FO7ON8g4xi3Cbm31htVzILcPcikmHEg6E6IY%2BeUXt3nUEG%2FDvfTNgRfC5nAF2SXKKCgEJo1mjCEHAloXA%2FwqkU2gWKVdsKAVGITwG81EyamxK%2BBh4wabN2SxZM%2BrJZfin7e96NDi10LWjG%2FWrTscXmS%2Fc4XJNQd5obHnQYABTKXCJ%2FIKs2sr2TEwGtzKHfFy%2FcN36R3tk9FMIEAi%2FJpn%2F3fYuBotxVIyOYTyCEUHX4azFLdnediFglsK4DEZULpDA0SajYm%2Bwrbnnv6CGa%2BRgMPTs2ckGOqUBHAa%2BTwWKjs39mlOL3lTykiRe1gELmU2gCq9BnLIeyDUZpc9GGAYaQu%2F9oPaTlodJkW3f5ZwRPeVL9VAIwOT5Wc12JZDO2%2FqkR6mX7h3WYhW%2F53cToB8EMrFjFNew%2Fh0MTOsIpeOaeUoU2TjyyD6Z5IYEUjBZ8oa7ve5%2FFc8vinDf60uoCJ3uE7uNcPGRlBjAo5ObXGOLkY9A8OzdmginEpHuAEAE&X-Amz-Signature=5666848346cb1f46e68b37b2aa2f0aaf047852496f0a08d8738a1717640c2f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUEKGKFC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzZ6xO8CMm2T5grHJTEfZbuPIUVj8gzN6LGbA%2Fl91mJQIgCWu1pVUZPsmum1%2FEpsXrpQDAG13IeU4q68ZVU5giSRoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf4pdbWlSbFDGIYXircA8yuuPcg747TXqVyEwsJPXF7Zo7Gm7VXeYdm%2FoTTYuow5Yhuas699WPCg6AA%2Frcfd8vqeumPOFqTSseYQlUBoTsaS%2Bs6j5BiggSps30Hoa4%2FOYX7V4WAB2xLZap5rM7itQ7vFTGQ1S%2Fcr8Get7xQqSTAir2c08KvICHI8HIjXmrrGXYpIFhduy2ruGHMe%2FdULZYvWLz0%2FXopoldiWumb9Ir9Q%2F9TARODVyB%2FiX7V5teEvbdfm0QkaK96mZyJJKdz9aTG%2FP6d4Sg51gBVrmVhT%2BQa9XUY8mZodHEuhLhbPJkfdnDOynRL8GFVHHMKvnWV4lKahXBTxTH4DOalNoHErydrsVJ8GaNGB3Jxg1v%2FO7ON8g4xi3Cbm31htVzILcPcikmHEg6E6IY%2BeUXt3nUEG%2FDvfTNgRfC5nAF2SXKKCgEJo1mjCEHAloXA%2FwqkU2gWKVdsKAVGITwG81EyamxK%2BBh4wabN2SxZM%2BrJZfin7e96NDi10LWjG%2FWrTscXmS%2Fc4XJNQd5obHnQYABTKXCJ%2FIKs2sr2TEwGtzKHfFy%2FcN36R3tk9FMIEAi%2FJpn%2F3fYuBotxVIyOYTyCEUHX4azFLdnediFglsK4DEZULpDA0SajYm%2Bwrbnnv6CGa%2BRgMPTs2ckGOqUBHAa%2BTwWKjs39mlOL3lTykiRe1gELmU2gCq9BnLIeyDUZpc9GGAYaQu%2F9oPaTlodJkW3f5ZwRPeVL9VAIwOT5Wc12JZDO2%2FqkR6mX7h3WYhW%2F53cToB8EMrFjFNew%2Fh0MTOsIpeOaeUoU2TjyyD6Z5IYEUjBZ8oa7ve5%2FFc8vinDf60uoCJ3uE7uNcPGRlBjAo5ObXGOLkY9A8OzdmginEpHuAEAE&X-Amz-Signature=dc55157107dbbd96de43baa0687f3fc084bc3a40f0be8ef7072bdff995986424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

