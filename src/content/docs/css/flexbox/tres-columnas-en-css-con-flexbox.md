---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H6L7OC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Y7%2BkpIbjdlfRPFxjEhVOo0ZR%2FpxEwNHn5x8XMm0e0gIgQ0OEavpBCoJXqAOyGPrumqkrOeJViKyGoHOLMgB2yXkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIULIoxiCqECovNHSrcA910VDDe1%2B8WVpLfZXFE4Ktb9PI4ZrKu%2BwFgU4bcd2LJJg3QT9Yct%2BBcHiF37WJKm4FfN%2F7ok89yQrLGsQs7wttcnNPNivjr7EXMKz66eodGdEm80Zo0bvEVPcmw3VWzLp2T6yOTKChoUtNn%2Fh%2Buhy9jcYn2IrpEJR%2F6iSvwineXQux8iQwMJ5Ipp2UDiQ4tLIcfrmRkZ9%2BP5ieMMJrSUgsCMtl%2FhTkPYOCATwPggRcCYtR7mZsvQczjrKufqDl70nF4RStM06mugNKoJZ8tpEliAnMYZ5AAFI70UBgpCXEHI3FrSVxTEt7cCizAIttUQPfLXVxFt5Jatcq7yd12QXr4X09v3yrLbGD7kzkCK7c6MngnxnIP2z4hr9nIRCorApsclT8Y2kAd6zgPMlZ4FVjo59YCjBslNEuMNwa8DyJmcog37CVy1e1OPzu5vBrAzUrr1S%2B30ZN0jajnVpTS2m4Ycu%2BxYe4gppoSHfss1mwAh1M7QDQh%2FvtutH1DsnaTFYpZmDVrf0f%2F%2FmopOZSqyGNsRTmoMbpjU8wAx6%2B2stJIlEpO0Hrp8edlK6b4FbcNIkhsQrgpL11w05moC45lIb%2FRs%2Bubzb8m3i5Gmv0SciZ7jlzHBwk3X07q7hfFMOSo18kGOqUB0L9ArQF1GPS%2Bz%2BqaH4Gp2eYeqNYo4K6glP%2F3odn5vSeEG0cQMiOvCHDkg1pZlmHvtJEhf31mjNwZbG1jMQt7xVlvRaKaICafxgf0o5IAXwUjls4sCRbbWckvQLexTpt%2FzBtky4CxgsgPLqmv3y9cuoafUH17kE%2B0IgB7mZc%2BTUpWMuV7mnOma1BDt9rKR42bcRzRpXo6SFGODLH6nTk3zs%2FPTRox&X-Amz-Signature=67ae4aa518a82fe444a09c150d27fb9390041a60b343f52672df64054701b0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H6L7OC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Y7%2BkpIbjdlfRPFxjEhVOo0ZR%2FpxEwNHn5x8XMm0e0gIgQ0OEavpBCoJXqAOyGPrumqkrOeJViKyGoHOLMgB2yXkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIULIoxiCqECovNHSrcA910VDDe1%2B8WVpLfZXFE4Ktb9PI4ZrKu%2BwFgU4bcd2LJJg3QT9Yct%2BBcHiF37WJKm4FfN%2F7ok89yQrLGsQs7wttcnNPNivjr7EXMKz66eodGdEm80Zo0bvEVPcmw3VWzLp2T6yOTKChoUtNn%2Fh%2Buhy9jcYn2IrpEJR%2F6iSvwineXQux8iQwMJ5Ipp2UDiQ4tLIcfrmRkZ9%2BP5ieMMJrSUgsCMtl%2FhTkPYOCATwPggRcCYtR7mZsvQczjrKufqDl70nF4RStM06mugNKoJZ8tpEliAnMYZ5AAFI70UBgpCXEHI3FrSVxTEt7cCizAIttUQPfLXVxFt5Jatcq7yd12QXr4X09v3yrLbGD7kzkCK7c6MngnxnIP2z4hr9nIRCorApsclT8Y2kAd6zgPMlZ4FVjo59YCjBslNEuMNwa8DyJmcog37CVy1e1OPzu5vBrAzUrr1S%2B30ZN0jajnVpTS2m4Ycu%2BxYe4gppoSHfss1mwAh1M7QDQh%2FvtutH1DsnaTFYpZmDVrf0f%2F%2FmopOZSqyGNsRTmoMbpjU8wAx6%2B2stJIlEpO0Hrp8edlK6b4FbcNIkhsQrgpL11w05moC45lIb%2FRs%2Bubzb8m3i5Gmv0SciZ7jlzHBwk3X07q7hfFMOSo18kGOqUB0L9ArQF1GPS%2Bz%2BqaH4Gp2eYeqNYo4K6glP%2F3odn5vSeEG0cQMiOvCHDkg1pZlmHvtJEhf31mjNwZbG1jMQt7xVlvRaKaICafxgf0o5IAXwUjls4sCRbbWckvQLexTpt%2FzBtky4CxgsgPLqmv3y9cuoafUH17kE%2B0IgB7mZc%2BTUpWMuV7mnOma1BDt9rKR42bcRzRpXo6SFGODLH6nTk3zs%2FPTRox&X-Amz-Signature=0148463d239fd45f1498c399390755245ba06c5e4b34fe30b7e18e808c832224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

