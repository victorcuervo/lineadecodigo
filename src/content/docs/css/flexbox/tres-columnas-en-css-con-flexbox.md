---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C742C3W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo7ey%2B9W5hQDy%2FOV1g9GqBEcKt62xINU5XcBs56B7rgAiEAh9duKyqdi1O%2Bqd8AKbdgoAL1yIWVQGwfTfs6Mm9mvYcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDTImfIQzMuM1hB%2FyrcAwED%2BK7tjpR4q7I0mx%2FRYyV2fXHpHRKqkG8TjfRRoxluQ0JMfKxWxy%2FqMLoQAlLWJbBSn1NSKoAReOeIbMll7n3UDzAwevN5bvSh2oDotJCSfSz5owENx3MzzfNIeN1UFZ7PGui4mKuVorca8R3GnJBNFixuxSkHLIZ%2BuH2YnvgmzMu8ti7km3oKiARS0ft067m8Fi%2FA5knNnzTqHyvJzEVtgz9gH6FSd0eLUXDEE31LfouPrMiAI3Zfl%2FwFQDCsLfRiRBip5Af%2BCsH2gzx0gZ7rIHcM28PTFR2afUfiN0aEOy9a7sgypIjHw0wgAxMbPXf2nDAYPpqJPqnSgw0WneYvafNL2eCmOFHr9YIxflIyM4gu5eh98nkTz%2FlPecdtyjZec73o4WB1USPq5Motf54pApJkswpIKDSOiEyC0O49gmyFaZ6dqeq0wc%2BfMvn2MxHrsDAfV%2B8OHWqrYFeAtOCAFdde3fFlFCfnHCZK7xaP5eyT%2FOa0%2FQGW0cXuCT7amdhBWXUtYgMRwjyffsP9Z84uJ%2BDzqncwKUUNuA6j1sXbMXxyWvgfOedfqMp06Nz1tunYAlQeEvhwTZRHpSokiipooJC9umkQGEIwyURzEn6mOlR%2BnbVyAUeoMILoMM%2Bo18kGOqUBtYZeh9GDTk56LfTqAJHhY7yDs2SgxReMj9A2YFrJGEpZ0wsn6z%2F8E4G9wixtdhtIOVE98q7kcXvVZrFZb14NGbpy8eEXcxaTxXBcl8JkV7%2BkUk%2Bx7TSMLvLh7bIGU4uh1HdyN3Rge1f6nUX1ZQMtMVHktxid3MMg1OO0MoFd4L4s4r%2BjE5XJNeRyu2MihOHW7aVmmbJJcr1u4M4AMAC8WOHg7mUi&X-Amz-Signature=852db22089b8728e08eb4003f7c137481c31f64653e7e7a0ef70fc6d0440b6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C742C3W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo7ey%2B9W5hQDy%2FOV1g9GqBEcKt62xINU5XcBs56B7rgAiEAh9duKyqdi1O%2Bqd8AKbdgoAL1yIWVQGwfTfs6Mm9mvYcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDTImfIQzMuM1hB%2FyrcAwED%2BK7tjpR4q7I0mx%2FRYyV2fXHpHRKqkG8TjfRRoxluQ0JMfKxWxy%2FqMLoQAlLWJbBSn1NSKoAReOeIbMll7n3UDzAwevN5bvSh2oDotJCSfSz5owENx3MzzfNIeN1UFZ7PGui4mKuVorca8R3GnJBNFixuxSkHLIZ%2BuH2YnvgmzMu8ti7km3oKiARS0ft067m8Fi%2FA5knNnzTqHyvJzEVtgz9gH6FSd0eLUXDEE31LfouPrMiAI3Zfl%2FwFQDCsLfRiRBip5Af%2BCsH2gzx0gZ7rIHcM28PTFR2afUfiN0aEOy9a7sgypIjHw0wgAxMbPXf2nDAYPpqJPqnSgw0WneYvafNL2eCmOFHr9YIxflIyM4gu5eh98nkTz%2FlPecdtyjZec73o4WB1USPq5Motf54pApJkswpIKDSOiEyC0O49gmyFaZ6dqeq0wc%2BfMvn2MxHrsDAfV%2B8OHWqrYFeAtOCAFdde3fFlFCfnHCZK7xaP5eyT%2FOa0%2FQGW0cXuCT7amdhBWXUtYgMRwjyffsP9Z84uJ%2BDzqncwKUUNuA6j1sXbMXxyWvgfOedfqMp06Nz1tunYAlQeEvhwTZRHpSokiipooJC9umkQGEIwyURzEn6mOlR%2BnbVyAUeoMILoMM%2Bo18kGOqUBtYZeh9GDTk56LfTqAJHhY7yDs2SgxReMj9A2YFrJGEpZ0wsn6z%2F8E4G9wixtdhtIOVE98q7kcXvVZrFZb14NGbpy8eEXcxaTxXBcl8JkV7%2BkUk%2Bx7TSMLvLh7bIGU4uh1HdyN3Rge1f6nUX1ZQMtMVHktxid3MMg1OO0MoFd4L4s4r%2BjE5XJNeRyu2MihOHW7aVmmbJJcr1u4M4AMAC8WOHg7mUi&X-Amz-Signature=92e9d3b7cbfec920a34bb7335891fa422ce3ee4453592c8a0ec8fee34cd943de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

