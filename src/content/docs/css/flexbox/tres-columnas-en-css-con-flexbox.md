---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBP2R2X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0IoYlLZj5k6KhujzLGXRBfwm7xB4jlfwIZ3%2Fr1Fm7lAIgcAqt5lt3qBiWGxxA%2BWycTcmInKXItPA40lHCmDUk3RwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdedramIvb34CqIGSrcA3%2FTCLlvAXbePCa6Wf5mc6dXKfscSfz4VJ%2FiTMlloTvgjIJyWKEt9o7JJmVfIXBrfJ%2FLt5v0oEahZbm81bwInkmoJVJW7evjq7PrKI21TANtdgyh4zxE0vJpoooqCkWfODSHxQV8DgsXujVkOqkbaO%2BHsBO7WDMW7n3o%2F8w6IVMDJJ2xNad7VnVxVMMRljscpAE16XIzFHW99FwZr6ihDW43rA7Dc5uKloHZXrsXrExEp%2Fq1kXcJPOlmBXnKOwahiFYBKJQ6%2FkoZ0%2BBGtGMYRP8VXMWUdCWa%2FIITtiWv%2BBYWTQz1gZcoOebUDx3DIlgJXQZL5D26t8%2FCukU%2FhW5MZz6%2BshANofsHPQ%2Fhj5umpLja32K%2FFsGuL3F3NHIizjyz4EPIe75KqCjEy0feB4%2BeeIdco7ANZDsDRHwwQlZbQ%2BRYILZSnyb7AAc1SFkKjeUn%2F9EzLCHj45UPbQDTA%2BUmSkDBPvTHuNC%2Fvu8%2FrIrxfvhbFnGeMQRt6IIpTH4VvpzAt4ec3FhdUOrk2p6qd4yOJRYa%2FvAmYVVRXSVE2QhSD6fj56gRI%2BwBEaA6inEp3syzCXCj23nB7FBjYlrVsiWfascuOmzM4FfDv1Qb7vwL2kCtvFQ%2BF%2B0wB8JXNLyAMJvD3ckGOqUBI%2Bnw8daHcWZdwAD5tpdZZAJ4bfDuw7uwRunw09mPl8H7ut9gZtvF9Wxz0Eq01nKMQ8%2BIUIydik%2F7qxeTuiozvZnVXvvQSPuEHxG1dYdiE2iRf1h5lD9Qdt2Bg4W7mXMPJBDjlSZHF78ze2KhsEDAJI%2BrAMvxRvs7Q0buLtdAZlKPSuraXs1eXFgTmgLuTRxZS22d74w6icyIFQf0I61%2FtM13vSEZ&X-Amz-Signature=39b3d67ec26e18032e21a263f3c8c5dc65b6847b5e7027c6ca588a5614325990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBP2R2X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0IoYlLZj5k6KhujzLGXRBfwm7xB4jlfwIZ3%2Fr1Fm7lAIgcAqt5lt3qBiWGxxA%2BWycTcmInKXItPA40lHCmDUk3RwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdedramIvb34CqIGSrcA3%2FTCLlvAXbePCa6Wf5mc6dXKfscSfz4VJ%2FiTMlloTvgjIJyWKEt9o7JJmVfIXBrfJ%2FLt5v0oEahZbm81bwInkmoJVJW7evjq7PrKI21TANtdgyh4zxE0vJpoooqCkWfODSHxQV8DgsXujVkOqkbaO%2BHsBO7WDMW7n3o%2F8w6IVMDJJ2xNad7VnVxVMMRljscpAE16XIzFHW99FwZr6ihDW43rA7Dc5uKloHZXrsXrExEp%2Fq1kXcJPOlmBXnKOwahiFYBKJQ6%2FkoZ0%2BBGtGMYRP8VXMWUdCWa%2FIITtiWv%2BBYWTQz1gZcoOebUDx3DIlgJXQZL5D26t8%2FCukU%2FhW5MZz6%2BshANofsHPQ%2Fhj5umpLja32K%2FFsGuL3F3NHIizjyz4EPIe75KqCjEy0feB4%2BeeIdco7ANZDsDRHwwQlZbQ%2BRYILZSnyb7AAc1SFkKjeUn%2F9EzLCHj45UPbQDTA%2BUmSkDBPvTHuNC%2Fvu8%2FrIrxfvhbFnGeMQRt6IIpTH4VvpzAt4ec3FhdUOrk2p6qd4yOJRYa%2FvAmYVVRXSVE2QhSD6fj56gRI%2BwBEaA6inEp3syzCXCj23nB7FBjYlrVsiWfascuOmzM4FfDv1Qb7vwL2kCtvFQ%2BF%2B0wB8JXNLyAMJvD3ckGOqUBI%2Bnw8daHcWZdwAD5tpdZZAJ4bfDuw7uwRunw09mPl8H7ut9gZtvF9Wxz0Eq01nKMQ8%2BIUIydik%2F7qxeTuiozvZnVXvvQSPuEHxG1dYdiE2iRf1h5lD9Qdt2Bg4W7mXMPJBDjlSZHF78ze2KhsEDAJI%2BrAMvxRvs7Q0buLtdAZlKPSuraXs1eXFgTmgLuTRxZS22d74w6icyIFQf0I61%2FtM13vSEZ&X-Amz-Signature=20b777e1b30d80bd40df1c87c5a4e9e304de2e9403ff1b35aa026428f50d6239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

