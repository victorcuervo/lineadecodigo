---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YKFRK3W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCmsC5z1PJF6RPU7TEKYJUfCbBdm%2FXYJfEgBUO68XEUVAIgSUz9SENKK7yvgBTGkC%2FieC1uXRvoKscriNtWFnR2Y%2FAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJq%2FRlMZqdjk3Za%2F5ircAxvxINKyKTSvpOVuFEBSnyKu9Kjzuw%2BmqhcopAbMT%2Bkp60MP7G7rBJEHM2lgomSpyLixKW1rSzPH0cVzNIcRD0KVa4Oj4ndPymoVR43Ne4W2AHKDCxMsxnEly%2FCNrU2Q0mjTLIMXSyROjZs16Mt7Fm9kFDA1TchIGXu19uYg%2F9YLt8WnuxsAxkElU%2BzqyNyWE4XCeW0jGsaBAH5r2qlrfN1ZVBVjEP%2FJGh%2BnTCWIdRRDLZi%2Fk3%2F1Xai%2Bz2yqEqPAbKbXPMkLJ%2FTrWtosQ21c51SRyESMDb%2BWpa9JFc2YUya0aKtfqn0jCVPeaaNm9Qa6dWqrk0YRO6N64Amt1Q33aPN%2FZ3RdHSJd%2F3vq642OmWhrdx2CR73RVz5QmYelsqr5KWT%2FRaEditDWMO8cNq6IjzL1vy7gLLSJey1ceWdEbhHQuA8yZ1ygO80v%2FMjCkIXxZPKaUF1%2FFkj%2FP%2FIJ8H%2FNy8RS9%2FIDdqtu9TwkBCxZo%2FnemNFa7mVXmL5bRMvjODmUbLe6O4qw%2F5r9tj1r1n0%2FFjcwucPRmagUv88cVBPSGW2sOK9P1AiJSrsuggHF8smM0yTA3TOkkRwIsgsKTEkFw3xa9uhXD11KOSyAMM5TOginlvwKd7kGv8F%2F2MsiMMK%2FxskGOqUBeYurSR0AFgb0okZwH0sDA0J3bOFwPskGVVowHZesR4nPKZdUFsqqQYcDrJaTidTvZsBdnHDMmybtpgD3xRsDR90mqY6GMJcRLHU29%2B0SS97C1dH2UB2Tz2HYIP6y3mNk%2BZe0tRWXp%2BbHMAGcRAauDub7jKNNaMddsv44ZeYXduckK%2Bo20JrZZEaBlUK2IdSFBMhfGctv9EdMOwqRwkzsWtpMvo5Y&X-Amz-Signature=04345ee1ea706892af566640d622c9c0d07454a0ed8cb59ceb6a8a3e87422056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YKFRK3W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCmsC5z1PJF6RPU7TEKYJUfCbBdm%2FXYJfEgBUO68XEUVAIgSUz9SENKK7yvgBTGkC%2FieC1uXRvoKscriNtWFnR2Y%2FAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJq%2FRlMZqdjk3Za%2F5ircAxvxINKyKTSvpOVuFEBSnyKu9Kjzuw%2BmqhcopAbMT%2Bkp60MP7G7rBJEHM2lgomSpyLixKW1rSzPH0cVzNIcRD0KVa4Oj4ndPymoVR43Ne4W2AHKDCxMsxnEly%2FCNrU2Q0mjTLIMXSyROjZs16Mt7Fm9kFDA1TchIGXu19uYg%2F9YLt8WnuxsAxkElU%2BzqyNyWE4XCeW0jGsaBAH5r2qlrfN1ZVBVjEP%2FJGh%2BnTCWIdRRDLZi%2Fk3%2F1Xai%2Bz2yqEqPAbKbXPMkLJ%2FTrWtosQ21c51SRyESMDb%2BWpa9JFc2YUya0aKtfqn0jCVPeaaNm9Qa6dWqrk0YRO6N64Amt1Q33aPN%2FZ3RdHSJd%2F3vq642OmWhrdx2CR73RVz5QmYelsqr5KWT%2FRaEditDWMO8cNq6IjzL1vy7gLLSJey1ceWdEbhHQuA8yZ1ygO80v%2FMjCkIXxZPKaUF1%2FFkj%2FP%2FIJ8H%2FNy8RS9%2FIDdqtu9TwkBCxZo%2FnemNFa7mVXmL5bRMvjODmUbLe6O4qw%2F5r9tj1r1n0%2FFjcwucPRmagUv88cVBPSGW2sOK9P1AiJSrsuggHF8smM0yTA3TOkkRwIsgsKTEkFw3xa9uhXD11KOSyAMM5TOginlvwKd7kGv8F%2F2MsiMMK%2FxskGOqUBeYurSR0AFgb0okZwH0sDA0J3bOFwPskGVVowHZesR4nPKZdUFsqqQYcDrJaTidTvZsBdnHDMmybtpgD3xRsDR90mqY6GMJcRLHU29%2B0SS97C1dH2UB2Tz2HYIP6y3mNk%2BZe0tRWXp%2BbHMAGcRAauDub7jKNNaMddsv44ZeYXduckK%2Bo20JrZZEaBlUK2IdSFBMhfGctv9EdMOwqRwkzsWtpMvo5Y&X-Amz-Signature=68e3b6f35fef0cf6817a8d2825f2ad7111f12a3fd9fe91e192fbeb0ff8e44acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

