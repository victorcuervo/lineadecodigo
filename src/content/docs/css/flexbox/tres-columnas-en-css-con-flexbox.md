---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJ6NULW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRkpcFm2VB%2FJpEaP%2FWqpTg%2Bd5GMpsvOZA5QHk5zNodAQIgDy3uRNHJVbpx7ljEPhMsienD9dc31l%2BM7NcFb17uySkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLJd4fo%2FLval9AcsdyrcA7xhcxwyu6rWikvtD9vX3dXIyQ6BRliUFpb%2FJQS9LbZbzQByIExLobiuIDhs58NssmbytFY9a8z4VuA5buj9oPRJwBPrtoy98k0QYHoLxPmxN8jBuQe2frnC0BCJTfOzC7paoDuWrIqk4gs8R%2B2jtpCT0Drrs4O1d6GCVg%2FtRb7su7%2BmMHYnvMv0ogIintzGhifIXe9k8comsdNaegq%2BLQWFfzoxtbBNx0XZ8P5XIOStde3ULepOWEttHOFZ5lJoTgH2XEnq%2FWpEgym%2FoLBFuW%2F6DLYIa97EFEqd0UYf7hKrz3RgFJvhYxFqyvIeTYPfD2sLn%2FyYwZpNwLpzwJk5rPefsCW1JPR7tDivLCBcIb36H4OI%2BPKtrWNjbUT9fH2DwIx%2FhSIqI6Y2H%2FhwB6Euc8I7fZVxjEJzp0xalxSdnsqTpC83bfiwZ%2FsuSkW4nQG84VhJIROe6nIEVB6g%2FPKuA8pYQRGvGpNPhQ%2FzgEgQLvFEstpNdHJ6bdRgrRZKPosEkIB0wTn0tMgs248Jj6T7xYUdH8v%2FksQaih91Flgrx%2F72w%2Fk9sGeRicFIl%2BKCWHXByXDtCd5HjiKXzI36YRIfi%2BlHNwdtjKDAiLspo8vHwFLbk723f7SVGsf2Q1cNMKmMyMkGOqUBsHRMKX7D6tASskU7pXkCMgClb7xlR9hp%2BmrJMv3g1Cs9I2%2BNuUgpnKWaMnXhNPh9GMABDfmZ38CnV6%2FWOtMbOXJ6viKG9xFil9AVMmX%2FEbyZWI6u2MxBmjY3Fcx7sf3Fa3Xw%2B9cxh5dt9y7lrys99ZeZIEZeMImtMyHilBs5RNGpu%2Bujxmv5FfeVSw%2FYfXPvH3MNiWmFVPAh6cJGakBBpjqChgl%2B&X-Amz-Signature=103193a1ef8e4a770801bac1b0feb38911e3d39beb37f6ab75e2d0555182c40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJ6NULW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRkpcFm2VB%2FJpEaP%2FWqpTg%2Bd5GMpsvOZA5QHk5zNodAQIgDy3uRNHJVbpx7ljEPhMsienD9dc31l%2BM7NcFb17uySkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLJd4fo%2FLval9AcsdyrcA7xhcxwyu6rWikvtD9vX3dXIyQ6BRliUFpb%2FJQS9LbZbzQByIExLobiuIDhs58NssmbytFY9a8z4VuA5buj9oPRJwBPrtoy98k0QYHoLxPmxN8jBuQe2frnC0BCJTfOzC7paoDuWrIqk4gs8R%2B2jtpCT0Drrs4O1d6GCVg%2FtRb7su7%2BmMHYnvMv0ogIintzGhifIXe9k8comsdNaegq%2BLQWFfzoxtbBNx0XZ8P5XIOStde3ULepOWEttHOFZ5lJoTgH2XEnq%2FWpEgym%2FoLBFuW%2F6DLYIa97EFEqd0UYf7hKrz3RgFJvhYxFqyvIeTYPfD2sLn%2FyYwZpNwLpzwJk5rPefsCW1JPR7tDivLCBcIb36H4OI%2BPKtrWNjbUT9fH2DwIx%2FhSIqI6Y2H%2FhwB6Euc8I7fZVxjEJzp0xalxSdnsqTpC83bfiwZ%2FsuSkW4nQG84VhJIROe6nIEVB6g%2FPKuA8pYQRGvGpNPhQ%2FzgEgQLvFEstpNdHJ6bdRgrRZKPosEkIB0wTn0tMgs248Jj6T7xYUdH8v%2FksQaih91Flgrx%2F72w%2Fk9sGeRicFIl%2BKCWHXByXDtCd5HjiKXzI36YRIfi%2BlHNwdtjKDAiLspo8vHwFLbk723f7SVGsf2Q1cNMKmMyMkGOqUBsHRMKX7D6tASskU7pXkCMgClb7xlR9hp%2BmrJMv3g1Cs9I2%2BNuUgpnKWaMnXhNPh9GMABDfmZ38CnV6%2FWOtMbOXJ6viKG9xFil9AVMmX%2FEbyZWI6u2MxBmjY3Fcx7sf3Fa3Xw%2B9cxh5dt9y7lrys99ZeZIEZeMImtMyHilBs5RNGpu%2Bujxmv5FfeVSw%2FYfXPvH3MNiWmFVPAh6cJGakBBpjqChgl%2B&X-Amz-Signature=8fb5ac4383fc58ff20a67e288c27f5a200eaa7a3753efe068b918beccbd85ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

