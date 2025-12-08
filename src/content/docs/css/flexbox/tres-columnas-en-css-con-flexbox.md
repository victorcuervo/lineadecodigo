---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFFY27UM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdFtJH%2Fd2WuJlZq2c1MJhe8PCDrYDdM9pfndEWDm3lQAiAXfYb%2BfC5tBtwce58Da%2BfwO8l2qr5QdeeeIvi0sWzMtSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDCJ3xZnH8%2FGyLUJoKtwDMHN8oXNcKd8mpV0x79GqqxOXe%2BDKREUqeprU1Ia5HXQTlIXCuGTcEb4VsdG1n%2BkbCXzXXND1Ud%2F%2BFut6UwcDkFTxPb6EktOz3TQP%2BAmQXkGf4DkkUTJ7SYVAUZsDDCV9wryqlHsxlbIX5KdSW%2F1RJRNBZpIBj6TZwlbSxDcamhB7msc8xxFaVHlQkFtfyS1W6hd8fmGMf3DjNpLUKR9WOLjeTfxPg7e81Kwm657g7bztixYFCJJLOGpk7iUcoDf9wyptysoiNN%2F34iKc56N4MKgpFaPNOhH2TaSVQ2ESaB1bh8IOMHs%2FYxRWM1QVmxpg%2Bc%2F55uxpdH2I5KXocGPZ%2FPO2Kkw2dHKgcIXANLq2No13RLA0DHK%2BI35%2FkNyHYE%2B3Jm4oKjIXM3G48pAzxnehiStXzrLrH0owyVOKif63H2E1FbIKmRk%2Fmrt8TIL0ACeK4zaD4taWT%2FF9UHxcWUwyHBNuW5wwES%2B%2FBbDogXHiPyLXAh6R0DUhueyx20RnO0EFWp25SG5AxK2gsEv%2BIX7NDNnzIkZ2p0UkBfcW2cmsxRiOrc59CHSH47M6%2BTa0TkOwvD7jVn9Mim7ya97dOUD3z4VgXoBNg%2BbWa4ETelAkMCC8l9DH7j%2BkuPoWl84wpYDdyQY6pgHUWJg9Eh07TUuHpsusMAVj4WqtJ6x0K%2B3Ke%2BBksRJFcnRqZUQFm2P2NVyCR%2Bf4XK0u9o2xIHSP%2FtMKq9CnhBDl99dscsBttH6D6kQw1w5L6A1ekDucoY0GCMMA3EG1boM8WrzjkOsJ5hE2vagYD4Ff%2BrBx0ctNTl2d%2BmbY3IKqBcF01TrjZEwT%2F8y55WrDfRcLUMkOfI7RUbCYaN2M97GFUrnCElJD&X-Amz-Signature=307571a95abb5be3f2383711fce9ebc63586cd906ed251c8c9822dd8d20e927d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFFY27UM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdFtJH%2Fd2WuJlZq2c1MJhe8PCDrYDdM9pfndEWDm3lQAiAXfYb%2BfC5tBtwce58Da%2BfwO8l2qr5QdeeeIvi0sWzMtSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDCJ3xZnH8%2FGyLUJoKtwDMHN8oXNcKd8mpV0x79GqqxOXe%2BDKREUqeprU1Ia5HXQTlIXCuGTcEb4VsdG1n%2BkbCXzXXND1Ud%2F%2BFut6UwcDkFTxPb6EktOz3TQP%2BAmQXkGf4DkkUTJ7SYVAUZsDDCV9wryqlHsxlbIX5KdSW%2F1RJRNBZpIBj6TZwlbSxDcamhB7msc8xxFaVHlQkFtfyS1W6hd8fmGMf3DjNpLUKR9WOLjeTfxPg7e81Kwm657g7bztixYFCJJLOGpk7iUcoDf9wyptysoiNN%2F34iKc56N4MKgpFaPNOhH2TaSVQ2ESaB1bh8IOMHs%2FYxRWM1QVmxpg%2Bc%2F55uxpdH2I5KXocGPZ%2FPO2Kkw2dHKgcIXANLq2No13RLA0DHK%2BI35%2FkNyHYE%2B3Jm4oKjIXM3G48pAzxnehiStXzrLrH0owyVOKif63H2E1FbIKmRk%2Fmrt8TIL0ACeK4zaD4taWT%2FF9UHxcWUwyHBNuW5wwES%2B%2FBbDogXHiPyLXAh6R0DUhueyx20RnO0EFWp25SG5AxK2gsEv%2BIX7NDNnzIkZ2p0UkBfcW2cmsxRiOrc59CHSH47M6%2BTa0TkOwvD7jVn9Mim7ya97dOUD3z4VgXoBNg%2BbWa4ETelAkMCC8l9DH7j%2BkuPoWl84wpYDdyQY6pgHUWJg9Eh07TUuHpsusMAVj4WqtJ6x0K%2B3Ke%2BBksRJFcnRqZUQFm2P2NVyCR%2Bf4XK0u9o2xIHSP%2FtMKq9CnhBDl99dscsBttH6D6kQw1w5L6A1ekDucoY0GCMMA3EG1boM8WrzjkOsJ5hE2vagYD4Ff%2BrBx0ctNTl2d%2BmbY3IKqBcF01TrjZEwT%2F8y55WrDfRcLUMkOfI7RUbCYaN2M97GFUrnCElJD&X-Amz-Signature=246352a60b98538eb1c185ac1741d41827e734fa2cab8d7b04037a40d0e6cd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

