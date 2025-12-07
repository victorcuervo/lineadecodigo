---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN6IYAGH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk5pDXDE%2FifXjc6OTBF9%2FeM2kfITsXs1FXkcAVliifXAiEAkorxdRYK6f5sR3eeBLucohcITtgC9OaiXerCxCLfSusqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuVHyROByGY3PtkiircA2WabpECVs%2FVp%2FTs%2BANdvgyaCZOn6iuadXk9UiQU5%2BImX3y6VB%2FY6oMGedwgPDl8UlpC%2BYjT3ivZeQR0ZlVPx0Ua6Czo5dlN9pATcTpELTBqbJKTyaJUhEWp6YbfWjr6PsNo9Tib7l7UybYa0NwYMYgbap%2BKuyfiK%2FhB1ifx2tDZed09RCDMjHQdt7lx4sUnG%2FhwFpRXRCjYRv3KzeMYKBfYtFlPINPlLQCIaBUbs7VHH9%2Bmjqa8lFakZ7cPz2p0MFX8N0IYX7b7Viu8GHgygPkfPGqsaBY9nKgh7pAWDZJSXPikAvrJlaKShVPanJh9Nvv9ArjY1BBPPWhr9ASj4Iy7OfhSSavIac%2B3tzL9oEGnBnzIYwKTI47WdpkfaUtw%2FznyFxWnNu9%2B25ipckplsvE1SbljleoNDLkEG2kkfAjjoR6OnjeeBG7h41lvecNo%2Fgjs59eHFL6m5AZRnXZHq%2F7CjXnDQnxiXhn8Wjk3UPhrEJlcl0aBfxLugHEiVn0m52tiFS43wCAR5kAMUzQtHA9%2BseoZLidzX6yxRYhz26Nm84rvQdWJtzNS0TUxRtk1MiU%2BxOEb%2Fs7QQSEsd2aC%2FkYr4TPKRFDNR7XcQ67Qmbup3itTADNBJ87X0xVTMPio18kGOqUBP%2FSxcRxIimA1%2B9GVitzKJL%2BVzQRKwTfZzdo6PvIE1hI%2FRY9kJe2uAJtF%2B9oe4DgcCWRd53RFpSpdNHXOJEWB41AoPaymOCXSGA5UJSLRLJLXOp02zlR38Cmt7febGb4F6wELDaUVsgmeOiMzXrqGW7lbjXw1Y4fVzulFVsNZdrlbwcvXbQQpFLOVhtALsO5LhtJQb5fyB11vlugG8L9PhPjew7i6&X-Amz-Signature=807014b9ef8164003da9679cefac2c5613af814aaf221fd2acc9951696e1fc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN6IYAGH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk5pDXDE%2FifXjc6OTBF9%2FeM2kfITsXs1FXkcAVliifXAiEAkorxdRYK6f5sR3eeBLucohcITtgC9OaiXerCxCLfSusqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuVHyROByGY3PtkiircA2WabpECVs%2FVp%2FTs%2BANdvgyaCZOn6iuadXk9UiQU5%2BImX3y6VB%2FY6oMGedwgPDl8UlpC%2BYjT3ivZeQR0ZlVPx0Ua6Czo5dlN9pATcTpELTBqbJKTyaJUhEWp6YbfWjr6PsNo9Tib7l7UybYa0NwYMYgbap%2BKuyfiK%2FhB1ifx2tDZed09RCDMjHQdt7lx4sUnG%2FhwFpRXRCjYRv3KzeMYKBfYtFlPINPlLQCIaBUbs7VHH9%2Bmjqa8lFakZ7cPz2p0MFX8N0IYX7b7Viu8GHgygPkfPGqsaBY9nKgh7pAWDZJSXPikAvrJlaKShVPanJh9Nvv9ArjY1BBPPWhr9ASj4Iy7OfhSSavIac%2B3tzL9oEGnBnzIYwKTI47WdpkfaUtw%2FznyFxWnNu9%2B25ipckplsvE1SbljleoNDLkEG2kkfAjjoR6OnjeeBG7h41lvecNo%2Fgjs59eHFL6m5AZRnXZHq%2F7CjXnDQnxiXhn8Wjk3UPhrEJlcl0aBfxLugHEiVn0m52tiFS43wCAR5kAMUzQtHA9%2BseoZLidzX6yxRYhz26Nm84rvQdWJtzNS0TUxRtk1MiU%2BxOEb%2Fs7QQSEsd2aC%2FkYr4TPKRFDNR7XcQ67Qmbup3itTADNBJ87X0xVTMPio18kGOqUBP%2FSxcRxIimA1%2B9GVitzKJL%2BVzQRKwTfZzdo6PvIE1hI%2FRY9kJe2uAJtF%2B9oe4DgcCWRd53RFpSpdNHXOJEWB41AoPaymOCXSGA5UJSLRLJLXOp02zlR38Cmt7febGb4F6wELDaUVsgmeOiMzXrqGW7lbjXw1Y4fVzulFVsNZdrlbwcvXbQQpFLOVhtALsO5LhtJQb5fyB11vlugG8L9PhPjew7i6&X-Amz-Signature=c860eae7ebfadf527a288a365a403afef8c8d6606164022b34726f629b3f28de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

