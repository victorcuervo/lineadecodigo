---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6HEZJN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCGmuQtMo%2BQgLQWL2DxzW7rgC2gUfILVkObwVt8GhboAIhAPJRw1sAeRn5X%2FcPR8XPhzbSquZiMyFB9oD0XLUHBEO2KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzkivqSQDPlxc5doUq3AP67XPtZGNFblxA3G0GiFNuy4kfGBpxwWqsgGDyKHsDvSSDqUhl4ai0jw%2FSCh3F6KK1WA53AYJkPI4jfcU1QcU2DH50gOhj8iYKuWnDqpp%2FXElYx%2FMrVuUAQSM5GerXxxplgHm1pJLrPgN8R98Ld9JozmzUrRUdeWt7maYk37nBMDwSQWmAFlv5UAv2ub60FLS2It5BnZY42HmcK6QRJAfj%2BryjIlne4WkUP4LuVzrCqAq%2BCLB8P%2FP0eLHnd7pcbYIN%2Bs%2BemRVuSoJnnL8VWDtcbqQR6AXDTlzExWfvEeMLyvUP2tneDJOuGCFnAaCeuSI%2BoVcdej6JcEBIx8TkKGkrvpNK0ChJ4rs6dN3%2BZX11APmit5J5tngz4KO5J%2FqyGuCbfbwh7PzLnhf08sGSrYCqWK6kPm90z45PJhZQc63xHvyBixOys1kUi0UmxA2CHPA8HimIcRTZTVskAD8D9ETb0jCjEYmTDraQsLx1gkYdx8zYOYL1abONN%2FB6d0VGLoPmjgs5%2F%2Bj3qxjqRoRNpB1aU2X3BvojmnZ0RytdrXCBFr%2Byv44m1wa2KP%2BHrSltZdrFSYqk%2FEKA5%2FbSLriIrJ5%2FCo85ue5jqbpJ%2FW6HtYL0Wr1IhJBRKsgO%2B9DjFTCcyNfJBjqkAcCO%2FdTg8qb2%2B2%2FhHOJX15OtqG35AUSmy8LlOSPQHvlLKdL8VUtMB2j4iLXhydn9vZTMcr7L0ZSqds6afrD00lDL0AzbOw%2FtFR3impFT%2F1BjDpBQb9yhfv7hLCIZ2vQ4KQ%2Bb7imeRviV12EQpfHUCb66Ky8HJ2rnymtr42yU%2BWoFTgj2cGqAgGxUp7whdXO5JnndHeQToY8HmAhHRyLrmTWBA9fl&X-Amz-Signature=868dcb692a98814f014e0d87794ad48e3697464faaee9c7149cdf8b02f74494a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6HEZJN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCGmuQtMo%2BQgLQWL2DxzW7rgC2gUfILVkObwVt8GhboAIhAPJRw1sAeRn5X%2FcPR8XPhzbSquZiMyFB9oD0XLUHBEO2KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzkivqSQDPlxc5doUq3AP67XPtZGNFblxA3G0GiFNuy4kfGBpxwWqsgGDyKHsDvSSDqUhl4ai0jw%2FSCh3F6KK1WA53AYJkPI4jfcU1QcU2DH50gOhj8iYKuWnDqpp%2FXElYx%2FMrVuUAQSM5GerXxxplgHm1pJLrPgN8R98Ld9JozmzUrRUdeWt7maYk37nBMDwSQWmAFlv5UAv2ub60FLS2It5BnZY42HmcK6QRJAfj%2BryjIlne4WkUP4LuVzrCqAq%2BCLB8P%2FP0eLHnd7pcbYIN%2Bs%2BemRVuSoJnnL8VWDtcbqQR6AXDTlzExWfvEeMLyvUP2tneDJOuGCFnAaCeuSI%2BoVcdej6JcEBIx8TkKGkrvpNK0ChJ4rs6dN3%2BZX11APmit5J5tngz4KO5J%2FqyGuCbfbwh7PzLnhf08sGSrYCqWK6kPm90z45PJhZQc63xHvyBixOys1kUi0UmxA2CHPA8HimIcRTZTVskAD8D9ETb0jCjEYmTDraQsLx1gkYdx8zYOYL1abONN%2FB6d0VGLoPmjgs5%2F%2Bj3qxjqRoRNpB1aU2X3BvojmnZ0RytdrXCBFr%2Byv44m1wa2KP%2BHrSltZdrFSYqk%2FEKA5%2FbSLriIrJ5%2FCo85ue5jqbpJ%2FW6HtYL0Wr1IhJBRKsgO%2B9DjFTCcyNfJBjqkAcCO%2FdTg8qb2%2B2%2FhHOJX15OtqG35AUSmy8LlOSPQHvlLKdL8VUtMB2j4iLXhydn9vZTMcr7L0ZSqds6afrD00lDL0AzbOw%2FtFR3impFT%2F1BjDpBQb9yhfv7hLCIZ2vQ4KQ%2Bb7imeRviV12EQpfHUCb66Ky8HJ2rnymtr42yU%2BWoFTgj2cGqAgGxUp7whdXO5JnndHeQToY8HmAhHRyLrmTWBA9fl&X-Amz-Signature=cad99c0478f8d720bb8ae8126bbeab1c4d8a5a4a7ff1f6d204365a082404f64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

