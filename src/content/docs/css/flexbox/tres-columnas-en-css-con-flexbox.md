---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJ7TLP6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtZEw%2BaghTt7o11dgBGAAKN6VZx2Qyo6rbsbq6j0HYZAiEAkEPBuGJlGHXrIzfad9xu2fdOLoEfiMatPcgPnzuBCmgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL26e4BgfDdkTXX%2FfircAxOTfpHVAcG8FWejbSn5NjXGRryK20woYa62VbJ40Z%2BLSbXPcZ8NYuODQXKT7G88bw3Muq95iQmOhXM66Z4rc0q2SASH%2FoePMLTfYgwm%2B6IgsJNPRbUB2Sd%2Bk%2FR04MzGw8ta9BBg%2BO6QBBnqMjg2UnfV10JpHXCVSRmdbozhIAMRe6sO7%2FuWyEsaayUJS%2B1xXF8M0x1uR5AWxT8EdgAIst%2Fm91LdMN%2FjBA0X3QXXTvpqDy1F6yHN6Vizqb4VxWNigT46GUq13yqAIIcDwR5ct6WuIwxizyRRZ6LRJl%2F4rOSBXlJE8SB%2BLyA2hzAGe%2Fe22Ozfm4l2iNrl1%2FBImA2fgyOXxPJu8oIwusCDkczXaF%2F29LQzEYY6wZf%2BsPryQLVcp9na2gl3PQWIlga2Ux8G%2Fz%2FvVDwXiAGZp7vAaneO2T%2FWZEqwZRIxVqBcIiHadJuUrlpO5fG%2FynMEm8TV8kPelxgE5ot2S0y4Hl8r0aLMTwcovhoNp%2FA6WawfzIs5%2FjohHh%2Fewt3ajCLzod1ZMvi2Csj%2BeTnYX%2BMNppSmB%2FG0XyulEmjuq8Xx%2F03QcQpQDoTTq8kJ3Ih%2F4LyLQgJfdZwQnjzliMD%2FW1pWyeWi6O3XPWJKcIc5Db3VqV9hAV2BMP7t2ckGOqUBFOcGs2QELCEz5fIJVQwwhz5oTuXIYUWix5pZ9Miyg6mxHtUw4Axivg4cePtz5xO702gWxEN6NWfacP6Sb9CfTzhdUUXLJrW36iuP7GQsgIFA5p%2B741%2BH%2BXaSeGydFRPGLo7q98NUzBX9hjqdIFyFaYOf3I3WIjob4a2njwwRdzD%2FjXmGUaoaZysIYziip9IvnbDXfaGJTfrnJdVTAbGCHUW3PJHk&X-Amz-Signature=2e14b06cbbad69f2614cb2dd0e13f3d5db3635bf4c821c3c864fc9e17116c61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJ7TLP6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtZEw%2BaghTt7o11dgBGAAKN6VZx2Qyo6rbsbq6j0HYZAiEAkEPBuGJlGHXrIzfad9xu2fdOLoEfiMatPcgPnzuBCmgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL26e4BgfDdkTXX%2FfircAxOTfpHVAcG8FWejbSn5NjXGRryK20woYa62VbJ40Z%2BLSbXPcZ8NYuODQXKT7G88bw3Muq95iQmOhXM66Z4rc0q2SASH%2FoePMLTfYgwm%2B6IgsJNPRbUB2Sd%2Bk%2FR04MzGw8ta9BBg%2BO6QBBnqMjg2UnfV10JpHXCVSRmdbozhIAMRe6sO7%2FuWyEsaayUJS%2B1xXF8M0x1uR5AWxT8EdgAIst%2Fm91LdMN%2FjBA0X3QXXTvpqDy1F6yHN6Vizqb4VxWNigT46GUq13yqAIIcDwR5ct6WuIwxizyRRZ6LRJl%2F4rOSBXlJE8SB%2BLyA2hzAGe%2Fe22Ozfm4l2iNrl1%2FBImA2fgyOXxPJu8oIwusCDkczXaF%2F29LQzEYY6wZf%2BsPryQLVcp9na2gl3PQWIlga2Ux8G%2Fz%2FvVDwXiAGZp7vAaneO2T%2FWZEqwZRIxVqBcIiHadJuUrlpO5fG%2FynMEm8TV8kPelxgE5ot2S0y4Hl8r0aLMTwcovhoNp%2FA6WawfzIs5%2FjohHh%2Fewt3ajCLzod1ZMvi2Csj%2BeTnYX%2BMNppSmB%2FG0XyulEmjuq8Xx%2F03QcQpQDoTTq8kJ3Ih%2F4LyLQgJfdZwQnjzliMD%2FW1pWyeWi6O3XPWJKcIc5Db3VqV9hAV2BMP7t2ckGOqUBFOcGs2QELCEz5fIJVQwwhz5oTuXIYUWix5pZ9Miyg6mxHtUw4Axivg4cePtz5xO702gWxEN6NWfacP6Sb9CfTzhdUUXLJrW36iuP7GQsgIFA5p%2B741%2BH%2BXaSeGydFRPGLo7q98NUzBX9hjqdIFyFaYOf3I3WIjob4a2njwwRdzD%2FjXmGUaoaZysIYziip9IvnbDXfaGJTfrnJdVTAbGCHUW3PJHk&X-Amz-Signature=1e8a9ee06c95a79683296cd24fd580902641a9189c3c882b7f1a29a36549c114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

