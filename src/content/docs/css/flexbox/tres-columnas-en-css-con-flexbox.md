---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFUYIOI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7wA163sXUHvJOxTmPDNvTxqWthmorqRhUsrZ6HABYcAiAaUTHM%2Funjx2EewOO3BmHW3g7F8MUXUU%2F0ptL0MkWEJiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOI4zH6l01gQCNEuwKtwDdvCB5z1ak8NzCjzx%2BqZUqMy6x%2B3sh4fBFeMSGSvQIl%2FXM2UmPIiak6b%2FlLJArFSyFBbySkbXfyrpW0b22henkUJ9Y9ikXF3sAdBSEXHSpjtUXx4XTLB4nNrVTwaa4i2Cvbpm4UDXUxDhCIntgrZVpN4kD7DTOxr3244%2FifMMSp%2F6Qs8Jlnc9RvnrVuaZ0lIzCYW8GAVCJv9wdPBa09RQfD%2FWDU7SpZY4LOEguQwCERu6NgCw4BibahsND6DkI7nwqwEC8H97928694ggtP9wMrtO1j%2Fa2r8CLlZCcki3ustBOp8m2OkIFymqsO3Kq%2BPUAOszD7RJ5Ux4auteJw%2FirfdWwCNmLA5FB%2BRW2GbYn1IvqW6g7oDnkIkhpMse3P7BSJGpF6zhV9luZXTJXOPsKMzuBnShyXBm4IrEXC9teuBaa3q1ffg6PritkcS7OYnpaiR3akdn3sTSilhxTMwGRtt66tP%2FVkiQ27m4HNQP%2BKVIoytU9ARjc6LA2wNbg%2B5US%2BNs00cfsCYXPF9%2Bv4vN7paE80a3llZsuz1oacc9Hpj2h2hX%2F%2FBwOfINgbpwjMOrBe87aGgL59%2BN8WEGTRMJ29pR%2BEnQTOCBGP9IRZ%2FvE9CSJLuj3Z8J9%2FDxSfswvJrVyQY6pgFtQVIJWdCWG8kxWFBjBOQxOxtTZTeYHN4rnK1qvuPVsyMQ2v7Q5fRz0y2a6U4wGRSESQhUDLYJNEX3wrJnRrCNyra0kqTKfJmsLAEqXLFp%2F1U2nozyAxIer7S402S%2BEUOBtg1LAb9I2p%2BYd1maTdcVklYAtoGBAULEKu8%2BxwCGaABB7h0z5aT%2F6EKe01fY4%2Bm4vdrZJkS28PbkgXWV3u4BrrsFXP%2Fg&X-Amz-Signature=83c04f7be8b29c74519f471b8181518e1c6ef30146922b11b6c74c5744787686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFUYIOI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7wA163sXUHvJOxTmPDNvTxqWthmorqRhUsrZ6HABYcAiAaUTHM%2Funjx2EewOO3BmHW3g7F8MUXUU%2F0ptL0MkWEJiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOI4zH6l01gQCNEuwKtwDdvCB5z1ak8NzCjzx%2BqZUqMy6x%2B3sh4fBFeMSGSvQIl%2FXM2UmPIiak6b%2FlLJArFSyFBbySkbXfyrpW0b22henkUJ9Y9ikXF3sAdBSEXHSpjtUXx4XTLB4nNrVTwaa4i2Cvbpm4UDXUxDhCIntgrZVpN4kD7DTOxr3244%2FifMMSp%2F6Qs8Jlnc9RvnrVuaZ0lIzCYW8GAVCJv9wdPBa09RQfD%2FWDU7SpZY4LOEguQwCERu6NgCw4BibahsND6DkI7nwqwEC8H97928694ggtP9wMrtO1j%2Fa2r8CLlZCcki3ustBOp8m2OkIFymqsO3Kq%2BPUAOszD7RJ5Ux4auteJw%2FirfdWwCNmLA5FB%2BRW2GbYn1IvqW6g7oDnkIkhpMse3P7BSJGpF6zhV9luZXTJXOPsKMzuBnShyXBm4IrEXC9teuBaa3q1ffg6PritkcS7OYnpaiR3akdn3sTSilhxTMwGRtt66tP%2FVkiQ27m4HNQP%2BKVIoytU9ARjc6LA2wNbg%2B5US%2BNs00cfsCYXPF9%2Bv4vN7paE80a3llZsuz1oacc9Hpj2h2hX%2F%2FBwOfINgbpwjMOrBe87aGgL59%2BN8WEGTRMJ29pR%2BEnQTOCBGP9IRZ%2FvE9CSJLuj3Z8J9%2FDxSfswvJrVyQY6pgFtQVIJWdCWG8kxWFBjBOQxOxtTZTeYHN4rnK1qvuPVsyMQ2v7Q5fRz0y2a6U4wGRSESQhUDLYJNEX3wrJnRrCNyra0kqTKfJmsLAEqXLFp%2F1U2nozyAxIer7S402S%2BEUOBtg1LAb9I2p%2BYd1maTdcVklYAtoGBAULEKu8%2BxwCGaABB7h0z5aT%2F6EKe01fY4%2Bm4vdrZJkS28PbkgXWV3u4BrrsFXP%2Fg&X-Amz-Signature=14135aff7bfa81e2a82b93a37230fa50889b315886b64855a9718f7439c94ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

