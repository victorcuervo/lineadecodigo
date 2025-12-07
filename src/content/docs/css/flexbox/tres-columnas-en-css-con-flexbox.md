---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THQUYHB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRPoQa5FyemEf0%2FFhi2NTgtckgY82SQRJbQl2uxtO%2FhgIgRqYkGAA6iFnroeZe3oWXuFhaztsElEfexmTWA1QAR%2FsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyz8EDzPU5EVdXZFyrcAxUVK1tX%2Fia%2B9J6r8AS0ouwWtUiyb1ZVvH6wgt4X2Whbvb906j7HFm%2Fb2zIUS88EvcjsVX96BeE%2FZmhlAoqUwPAcKTitGUKt8tVW88dCkPsM6feqNNLm%2FTLIz3mXV4TyoJQdls1I9kCY6HxQS3fH3r3n4CpXvoenTvFdQw9kT%2B27mSWBDmBcviYbANx0eRr0z5q1jx8a1fGrMIz70qnKgF3Wcn5Vc7JQtbFYSy64Ij54pqNnl%2FxEqze7ysGS5F9zVvFeMsGZXx3RVLlqALnC9fqeRM5qFHttY6eQIEOxboiFdcXhfLOXaE6qU3sPfxaZ57BW0%2FaX4xi832VAHBAaMACVzB5tSzHPHRa4QxA5LL8IRhxnEYde%2F6a17jfFnc47CihGY8%2BOlGMjnANgIhNOdobI3vdzikMGv4ML7fvOSPtpe%2BwbCyvKOzjhkRdaTIema6i7UiqYL3BRqslWLRvC1Bmas7NpmZTxsB9G2qR4UtLCk4J%2FwTSHfLnHwVBdnxd%2FA5eFowplznfPS8p6qhyFEgYlWlxcseNlAXvE32UX88RAquhZJcixFdnS5pX7UwjWsiXiQ2pXBj1iyBl2IPNZp32XmP3cvEZrEopIqTbm2y9SOErEqPr%2FvxUM5ls4MPfH18kGOqUB7v2nQ5cP7ZSvisIs7do%2B%2BXkFlTu78Qm2ISp7fxXem6t974NF3h0B5ST9Dz9dGxTbOC5gdxab%2F5UPyHp8%2BfUPj4RhdeL4w%2F3%2F3HQIfiwgYw8FPNkDcu7MbR2P3KutyOT2yA%2Fo3Va4CK%2BTsXqK0StptmSkOI%2BeDAJhQtMvgoms0WWfzcGgsJxFLet7AsMwpV9eT9DVbwIelNfElxkK2cLg7RP%2FIlav&X-Amz-Signature=3d8f5af99b537a6fe79b921093c9998b6f746fec9c544deefdec13c10996c845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THQUYHB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRPoQa5FyemEf0%2FFhi2NTgtckgY82SQRJbQl2uxtO%2FhgIgRqYkGAA6iFnroeZe3oWXuFhaztsElEfexmTWA1QAR%2FsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyz8EDzPU5EVdXZFyrcAxUVK1tX%2Fia%2B9J6r8AS0ouwWtUiyb1ZVvH6wgt4X2Whbvb906j7HFm%2Fb2zIUS88EvcjsVX96BeE%2FZmhlAoqUwPAcKTitGUKt8tVW88dCkPsM6feqNNLm%2FTLIz3mXV4TyoJQdls1I9kCY6HxQS3fH3r3n4CpXvoenTvFdQw9kT%2B27mSWBDmBcviYbANx0eRr0z5q1jx8a1fGrMIz70qnKgF3Wcn5Vc7JQtbFYSy64Ij54pqNnl%2FxEqze7ysGS5F9zVvFeMsGZXx3RVLlqALnC9fqeRM5qFHttY6eQIEOxboiFdcXhfLOXaE6qU3sPfxaZ57BW0%2FaX4xi832VAHBAaMACVzB5tSzHPHRa4QxA5LL8IRhxnEYde%2F6a17jfFnc47CihGY8%2BOlGMjnANgIhNOdobI3vdzikMGv4ML7fvOSPtpe%2BwbCyvKOzjhkRdaTIema6i7UiqYL3BRqslWLRvC1Bmas7NpmZTxsB9G2qR4UtLCk4J%2FwTSHfLnHwVBdnxd%2FA5eFowplznfPS8p6qhyFEgYlWlxcseNlAXvE32UX88RAquhZJcixFdnS5pX7UwjWsiXiQ2pXBj1iyBl2IPNZp32XmP3cvEZrEopIqTbm2y9SOErEqPr%2FvxUM5ls4MPfH18kGOqUB7v2nQ5cP7ZSvisIs7do%2B%2BXkFlTu78Qm2ISp7fxXem6t974NF3h0B5ST9Dz9dGxTbOC5gdxab%2F5UPyHp8%2BfUPj4RhdeL4w%2F3%2F3HQIfiwgYw8FPNkDcu7MbR2P3KutyOT2yA%2Fo3Va4CK%2BTsXqK0StptmSkOI%2BeDAJhQtMvgoms0WWfzcGgsJxFLet7AsMwpV9eT9DVbwIelNfElxkK2cLg7RP%2FIlav&X-Amz-Signature=a2ae9576e8e4a2d77aea6a6069c8aecbb14532874497a7575c0fa6e2be1119f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

