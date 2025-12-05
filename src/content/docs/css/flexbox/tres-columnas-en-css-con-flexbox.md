---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3CYKC4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDlI%2FL9vQN6NRcPEPMPvsC%2F2T1wIz79%2BfY95X4lpiWGQIgP2%2BECRrNE65ATtP1angX%2FRhW7BGProIYZdZPsrLGW6Yq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDACs94bDLAyA3rdMKyrcA1E0AvVWzecXW8cEna%2BbHLRwAf0wiXsxwL204Qm8HnzFWtlEneabboOP8gpOGABdvOiOgaVwKNQHTxkGowEfgxMYbN%2BYk3dFleYxYQded%2BoQD%2B02LS5h7g44gVcCK6RfUwuKhXvuGv5DwREsreMO3xz5S3FoV8WK7GPtCMLko%2Fw3WKPPiWKWEgwfS043qR1Qu%2Flt638XyM4WdT1tmDoAFbKFaDq7h2BD3YbruMbfpqc1hWf3ZVPlvoyASnAOFxBAXe7eBVXkXMRJQ4Dx3RTilTs5xCIqQH8qrpLyF91XHAG%2FAYy%2Fpi80SLXHytYTO8oDFG%2FYzOkJwAM3x8X3%2BJJ16zgHrLhLzifocD29QN6%2BDqoIY5UMzmPCTNxoW2WbX1jHEX1Zuodo0AANEHAnbPtp1fmIVARtfIEt6naqsG%2F8AruvtrsPgHnie7YR6oqt8hJ0SbB21EgZvfpHTVADHXigQCwWEE70rBH%2FpB3VjpHvONkHEroVMlCzt6AAEJivkHvE1%2FrB65dcAqSq69x0fivd3MDxoQ73a%2FIuMme0fOEhAD1cnAdxED3PUDzQwNPD66SM9zFqfAG1HPuL1U08OOwPPJvgE74v4calPuZw8S0e8PKrIcMTFugAELtipGAIMIfIyskGOqUB0xpystY%2BiZ7hpcU5MFgb0x86UdjZsJlHyUqeEL79G0KRklu%2FDZckfjtq1x1sbrw%2F3EDN2rNBlgS3KV20L0KKhwDveEmh1l68kp3UrAzf9qmjuak3nc0pTfm%2FEoYVstSA41iWe4HE6Kx0Z3H9TU94Y%2Fyrth%2FZYpZYFuGfxN89zkrX5jMwRK%2FCrsMnuP3PMLLimDrjkg3Gy6TXl1YPRcBil4n%2BLKFm&X-Amz-Signature=e7a41c96a17c360aa1e9109dac4d8a68c2b5bb64dfcd164f1c258c5b6871df74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3CYKC4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDlI%2FL9vQN6NRcPEPMPvsC%2F2T1wIz79%2BfY95X4lpiWGQIgP2%2BECRrNE65ATtP1angX%2FRhW7BGProIYZdZPsrLGW6Yq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDACs94bDLAyA3rdMKyrcA1E0AvVWzecXW8cEna%2BbHLRwAf0wiXsxwL204Qm8HnzFWtlEneabboOP8gpOGABdvOiOgaVwKNQHTxkGowEfgxMYbN%2BYk3dFleYxYQded%2BoQD%2B02LS5h7g44gVcCK6RfUwuKhXvuGv5DwREsreMO3xz5S3FoV8WK7GPtCMLko%2Fw3WKPPiWKWEgwfS043qR1Qu%2Flt638XyM4WdT1tmDoAFbKFaDq7h2BD3YbruMbfpqc1hWf3ZVPlvoyASnAOFxBAXe7eBVXkXMRJQ4Dx3RTilTs5xCIqQH8qrpLyF91XHAG%2FAYy%2Fpi80SLXHytYTO8oDFG%2FYzOkJwAM3x8X3%2BJJ16zgHrLhLzifocD29QN6%2BDqoIY5UMzmPCTNxoW2WbX1jHEX1Zuodo0AANEHAnbPtp1fmIVARtfIEt6naqsG%2F8AruvtrsPgHnie7YR6oqt8hJ0SbB21EgZvfpHTVADHXigQCwWEE70rBH%2FpB3VjpHvONkHEroVMlCzt6AAEJivkHvE1%2FrB65dcAqSq69x0fivd3MDxoQ73a%2FIuMme0fOEhAD1cnAdxED3PUDzQwNPD66SM9zFqfAG1HPuL1U08OOwPPJvgE74v4calPuZw8S0e8PKrIcMTFugAELtipGAIMIfIyskGOqUB0xpystY%2BiZ7hpcU5MFgb0x86UdjZsJlHyUqeEL79G0KRklu%2FDZckfjtq1x1sbrw%2F3EDN2rNBlgS3KV20L0KKhwDveEmh1l68kp3UrAzf9qmjuak3nc0pTfm%2FEoYVstSA41iWe4HE6Kx0Z3H9TU94Y%2Fyrth%2FZYpZYFuGfxN89zkrX5jMwRK%2FCrsMnuP3PMLLimDrjkg3Gy6TXl1YPRcBil4n%2BLKFm&X-Amz-Signature=33872a1daedd98d43004097cd9e770a5d7d23ca19b44ca88ec1edbcca7b99c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

