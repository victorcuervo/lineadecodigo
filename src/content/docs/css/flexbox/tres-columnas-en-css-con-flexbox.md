---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIAKXKP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9RAQvuy08ojVBeLDPFH%2FJsfE74agOQEJDtfr%2BEmvtmgIhAOra%2BDdXWIfyEBf3SnblL05E95oeqJz3io3dmLUtUemoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL8RdsdxZPHTo4eRkq3AN3Ojx31zSDds7zzQ%2FOVHLt5e9CqHRtv1mpUL0k3ICKa6CMA4aZEbAOg%2BRWtlTG5qv83qoC%2BUA5I91pZHysjwaBr4qZj7hv4W%2Ba6J7JYNEJIvxZcL6TQZGB8JSw3P1zSz4s5eDQEskPs0UNaGuVCcMO%2B6QHhxMXo0DyKJCIjao15YN1wNxyDOGkGSrrFg9Z0K1%2BOgYzynsY0QkzFgckaUBujxB6j0gId3QgDOvAbSNQ9uOh5I1rWR%2BN0vxNGQ6ABg%2BcAilW%2BJ2ChLABVRTpEjCRfQpAJvClFDCo%2Bt5v8t75SbNDMMveNuj4PQ9VsU68MIotIBfOt0%2FZV0WrV%2F2OamALanJ53jLHuw7OEB5iea3qAoT%2B%2FnmDu14cA8ZalzS0pB%2Ft%2FV1kIPuXoQVe6tdxToc%2FN2mMEjAW4mkJ22lsYkI1B9FIdRq1pMGODyP71a8jouzK0Y1tFs3NKrZ6VW7tDP253KgQJibT1y8k8hgEh8n4qSC8XIJpt%2BqeEWTeL7y3u3dKZmON%2BPsIHZqZqxa%2BiJzMKcrxrbUOgFwdtOck0afVAH6OTF3jgpz1QcV%2BgB5Jo66z27WADwuy3gkLS8erFWDo%2Bujf%2FKDR5AcRWp4%2Br3pggnEKkRVXtaJXRhLWozD%2BmtXJBjqkAW0wTQBD65JlKYTr2e3Nppmx6GDIjzX4flj4vfp%2FUB4bDFlm6GeRniBSKL05ZiLbFXfoLSalakFOt5tipqAlBjTYXdB8ywNZh7Obqljw4iqygCLXN8UZh090OAbV62ugBSOahmUm0%2FjKOHz%2FGabZ%2BHyAfaaZBQHFEaR3zyd379V1c%2FwVX5s7VwC4DbSehefZnkDMo7oXyj1zQ5gpdVNb1%2FBDSyMz&X-Amz-Signature=213379f74952837e447522488f93aa1a56759917ba07994bb8f4c0eb628e7ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIAKXKP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9RAQvuy08ojVBeLDPFH%2FJsfE74agOQEJDtfr%2BEmvtmgIhAOra%2BDdXWIfyEBf3SnblL05E95oeqJz3io3dmLUtUemoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL8RdsdxZPHTo4eRkq3AN3Ojx31zSDds7zzQ%2FOVHLt5e9CqHRtv1mpUL0k3ICKa6CMA4aZEbAOg%2BRWtlTG5qv83qoC%2BUA5I91pZHysjwaBr4qZj7hv4W%2Ba6J7JYNEJIvxZcL6TQZGB8JSw3P1zSz4s5eDQEskPs0UNaGuVCcMO%2B6QHhxMXo0DyKJCIjao15YN1wNxyDOGkGSrrFg9Z0K1%2BOgYzynsY0QkzFgckaUBujxB6j0gId3QgDOvAbSNQ9uOh5I1rWR%2BN0vxNGQ6ABg%2BcAilW%2BJ2ChLABVRTpEjCRfQpAJvClFDCo%2Bt5v8t75SbNDMMveNuj4PQ9VsU68MIotIBfOt0%2FZV0WrV%2F2OamALanJ53jLHuw7OEB5iea3qAoT%2B%2FnmDu14cA8ZalzS0pB%2Ft%2FV1kIPuXoQVe6tdxToc%2FN2mMEjAW4mkJ22lsYkI1B9FIdRq1pMGODyP71a8jouzK0Y1tFs3NKrZ6VW7tDP253KgQJibT1y8k8hgEh8n4qSC8XIJpt%2BqeEWTeL7y3u3dKZmON%2BPsIHZqZqxa%2BiJzMKcrxrbUOgFwdtOck0afVAH6OTF3jgpz1QcV%2BgB5Jo66z27WADwuy3gkLS8erFWDo%2Bujf%2FKDR5AcRWp4%2Br3pggnEKkRVXtaJXRhLWozD%2BmtXJBjqkAW0wTQBD65JlKYTr2e3Nppmx6GDIjzX4flj4vfp%2FUB4bDFlm6GeRniBSKL05ZiLbFXfoLSalakFOt5tipqAlBjTYXdB8ywNZh7Obqljw4iqygCLXN8UZh090OAbV62ugBSOahmUm0%2FjKOHz%2FGabZ%2BHyAfaaZBQHFEaR3zyd379V1c%2FwVX5s7VwC4DbSehefZnkDMo7oXyj1zQ5gpdVNb1%2FBDSyMz&X-Amz-Signature=f87faed6ba704b48c0cd349e7ac5442862e4c2dbd72374710475f018328afce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

