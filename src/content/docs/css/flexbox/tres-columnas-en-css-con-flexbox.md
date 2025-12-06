---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZLDR4HZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHyY7sdidbcNz0iKGch24%2Fpe0Y1oeFsKl5QnAZiWMYp0CIGMw088%2FJSJUtxWm%2FhYU9OgXeuBvaZb9hWOdmEhx%2B7gYKv8DCHEQABoMNjM3NDIzMTgzODA1IgzH737pqA9znYvfG%2Fkq3AM2UuJNvfOK1Ro3vr9GXmF%2FSelJw%2Ff%2F%2FtuvqORxtlx73RuDhmAQacIjWpvTF%2FWu9GgGNeVfgn7mOrajdkJg5uoPPrgmYn%2FWzxTbgat0Di2Vup64R0aSS6Py%2BukGcaq%2BSbIewU8pHQ0ID6LrA%2FsPbr2U%2BEcgpVnR3lgKj7KeLi%2FHHz76caLHvrHeqmtv1UU7VQCo5yu5fQzgcqZwBNyzq9MyskHppEMpvNxhaGcklGqpKsMC5GZngCM2LmY%2BcfC%2BebF%2FYAz75k09BVLN7tyQzBRC9QzE62clPNLebWw8H5pelqVtqxKVV%2FkgHU627%2FM%2BMOQHbtzMeC9CgvIC9EagQpT36m6jV84j4y5ew9sWIJL1AO3SJMcDK8IimF%2BgxBrVx9uoMIOtWPeXyoSI37fJKqx3Iar%2BTOjtSDD1T0NmDqajE6pyxOnFtv15jfqCw%2BtS54Mf0c0t7hEh1A%2FvOTRiAfzK94r8DLcsWhZfRPQKZCjsW9r79RmLvcSpo%2FXBEZ06hQ%2BC4aMeVpk%2FEhsdY%2F9GuU5%2Bm02oRPyx91cJo%2FTpXI9SUJkjKq3ZCem%2F4KMYksLKTJyalIsAVMG35w50uYwgy71W9NwU3P5kH8ey%2BVSVdRWqkQz9B0ysE4OYyYZBfjD0vM%2FJBjqnAdyGwUXgsDhANXWMs0ZeL1PHXf3fZ5CF8wGig9jdieuFifHPlQO62sCrmOTbNdXCoeL7H3Ae1dZhb06YqK6%2FIIOnfPRANFAD9UJpty%2FccfnJaH%2FSZBsbE34PLHFSlA5WkM1mVKArDElOLPcmG6Dgzlv8I48ClXOs3g6iZTvJumtwv%2FSuW6Hhr4FDdBjNtpENYfy90SDw1aDxFNITGtFIRI3Enj7xewzM&X-Amz-Signature=1f7affe07e6c5b97962c7fa1d5b4b7e01080a567010d3d4c6bff13bcce359b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZLDR4HZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHyY7sdidbcNz0iKGch24%2Fpe0Y1oeFsKl5QnAZiWMYp0CIGMw088%2FJSJUtxWm%2FhYU9OgXeuBvaZb9hWOdmEhx%2B7gYKv8DCHEQABoMNjM3NDIzMTgzODA1IgzH737pqA9znYvfG%2Fkq3AM2UuJNvfOK1Ro3vr9GXmF%2FSelJw%2Ff%2F%2FtuvqORxtlx73RuDhmAQacIjWpvTF%2FWu9GgGNeVfgn7mOrajdkJg5uoPPrgmYn%2FWzxTbgat0Di2Vup64R0aSS6Py%2BukGcaq%2BSbIewU8pHQ0ID6LrA%2FsPbr2U%2BEcgpVnR3lgKj7KeLi%2FHHz76caLHvrHeqmtv1UU7VQCo5yu5fQzgcqZwBNyzq9MyskHppEMpvNxhaGcklGqpKsMC5GZngCM2LmY%2BcfC%2BebF%2FYAz75k09BVLN7tyQzBRC9QzE62clPNLebWw8H5pelqVtqxKVV%2FkgHU627%2FM%2BMOQHbtzMeC9CgvIC9EagQpT36m6jV84j4y5ew9sWIJL1AO3SJMcDK8IimF%2BgxBrVx9uoMIOtWPeXyoSI37fJKqx3Iar%2BTOjtSDD1T0NmDqajE6pyxOnFtv15jfqCw%2BtS54Mf0c0t7hEh1A%2FvOTRiAfzK94r8DLcsWhZfRPQKZCjsW9r79RmLvcSpo%2FXBEZ06hQ%2BC4aMeVpk%2FEhsdY%2F9GuU5%2Bm02oRPyx91cJo%2FTpXI9SUJkjKq3ZCem%2F4KMYksLKTJyalIsAVMG35w50uYwgy71W9NwU3P5kH8ey%2BVSVdRWqkQz9B0ysE4OYyYZBfjD0vM%2FJBjqnAdyGwUXgsDhANXWMs0ZeL1PHXf3fZ5CF8wGig9jdieuFifHPlQO62sCrmOTbNdXCoeL7H3Ae1dZhb06YqK6%2FIIOnfPRANFAD9UJpty%2FccfnJaH%2FSZBsbE34PLHFSlA5WkM1mVKArDElOLPcmG6Dgzlv8I48ClXOs3g6iZTvJumtwv%2FSuW6Hhr4FDdBjNtpENYfy90SDw1aDxFNITGtFIRI3Enj7xewzM&X-Amz-Signature=4e37eb98c614a1824cbaf1004cfd4350e85fdcf068cc6134c84c271b29f54468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

