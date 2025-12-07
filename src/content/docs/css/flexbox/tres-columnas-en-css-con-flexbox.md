---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCLK3VW3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpOM2bim7UdBMEAR3tYV0FLUQiMEbV%2FabiVW9MERb1VAIgHRrsA9s9Umw%2FBIZYgaU%2FDf2l0IdgtbUjC2VAoS%2B7I9EqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDoE2BuvqZJ740s5SrcA%2BC0fGShzuELkRsYu3Z0C02n0s%2Fre30Xvw%2FZZIAK8VK%2Be6gPGyPxWZ12Jk6cRsujXRN8xwwE%2F4OqCppjSfHlLbTJ2BoEhD9v8VF58Jd0Z23ocsEKMDIq49MV8BRPsmwlNKjsz8rhRpLUI8PKTipPphtdAJGUp1uyQtln46dXlQ%2Fb6T5O9evap04rNmLSePJoeNbEWQp5%2BU8gRtpiAozSDuI%2BNNjSaUkCnCjhPiMIy5vBmCSwefU2jYPQ7I%2FhL3vtNEoRYk%2BIIJQSlS0tuYshN%2B2WrS29hleZon8UlcSQgTWgSfFx9BJTC0eBhD8MTZPxQUQlUsxigDw6p9Slp3BBV%2FBr2%2F2xkic7gLZI7arSsrgdjN0nCyzf05%2F8IKHPhr0N5%2FdD3xZsqST3gU6bXrtaC3j3EH%2BaONjulYHLbIDIaJmCzfRGuQdEog8KlZPAkSBeYmSm5xiY%2FEOGH0F1%2FFRAw6XWLvVEy6MN%2Bibgc2y5A%2B0%2BdsuqeOa9LR6PYKZFLOKNeWvrpOCCXctf4i68%2BKpu8%2Bbc8j62puB2g47iOgwrGevsC86ikb0a8FaLaBRWLTNVgDR%2BqdkoxPFLgROv%2Bccx3ANGv7SdjIRd2TjJw7PAAiUoQ0lp12IBN%2FIwXaihMNyo18kGOqUBoQkq6YtHvC%2BzaHb3Js7qUdD%2FXqW0jsF%2Bc6j%2FoM55StwggHkge1cdRXIHd7SMrz4q2sQljed7sXpyqL9ToCv1Cz4RZhVfzcfAI3%2FzbOagL4eGHyj54xEDf1l%2FWFvEnrvvSEUWIL%2FleD0O6swgf2ucUhokvqdWcJlSJ16gPOuYLcaudOBxGbGa4RKbOsL94c5%2BSbVO118JPMgmdBXuuFYL8u3m%2Ffmq&X-Amz-Signature=3170dbe8269a5ef32c93cfd427110e22a6388f861a48ad92d01513618b28893d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCLK3VW3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpOM2bim7UdBMEAR3tYV0FLUQiMEbV%2FabiVW9MERb1VAIgHRrsA9s9Umw%2FBIZYgaU%2FDf2l0IdgtbUjC2VAoS%2B7I9EqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDoE2BuvqZJ740s5SrcA%2BC0fGShzuELkRsYu3Z0C02n0s%2Fre30Xvw%2FZZIAK8VK%2Be6gPGyPxWZ12Jk6cRsujXRN8xwwE%2F4OqCppjSfHlLbTJ2BoEhD9v8VF58Jd0Z23ocsEKMDIq49MV8BRPsmwlNKjsz8rhRpLUI8PKTipPphtdAJGUp1uyQtln46dXlQ%2Fb6T5O9evap04rNmLSePJoeNbEWQp5%2BU8gRtpiAozSDuI%2BNNjSaUkCnCjhPiMIy5vBmCSwefU2jYPQ7I%2FhL3vtNEoRYk%2BIIJQSlS0tuYshN%2B2WrS29hleZon8UlcSQgTWgSfFx9BJTC0eBhD8MTZPxQUQlUsxigDw6p9Slp3BBV%2FBr2%2F2xkic7gLZI7arSsrgdjN0nCyzf05%2F8IKHPhr0N5%2FdD3xZsqST3gU6bXrtaC3j3EH%2BaONjulYHLbIDIaJmCzfRGuQdEog8KlZPAkSBeYmSm5xiY%2FEOGH0F1%2FFRAw6XWLvVEy6MN%2Bibgc2y5A%2B0%2BdsuqeOa9LR6PYKZFLOKNeWvrpOCCXctf4i68%2BKpu8%2Bbc8j62puB2g47iOgwrGevsC86ikb0a8FaLaBRWLTNVgDR%2BqdkoxPFLgROv%2Bccx3ANGv7SdjIRd2TjJw7PAAiUoQ0lp12IBN%2FIwXaihMNyo18kGOqUBoQkq6YtHvC%2BzaHb3Js7qUdD%2FXqW0jsF%2Bc6j%2FoM55StwggHkge1cdRXIHd7SMrz4q2sQljed7sXpyqL9ToCv1Cz4RZhVfzcfAI3%2FzbOagL4eGHyj54xEDf1l%2FWFvEnrvvSEUWIL%2FleD0O6swgf2ucUhokvqdWcJlSJ16gPOuYLcaudOBxGbGa4RKbOsL94c5%2BSbVO118JPMgmdBXuuFYL8u3m%2Ffmq&X-Amz-Signature=731eeb60c87fa8ad75944ed1157a24e5ae5cbe90089836cd016ca825d35aea45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

