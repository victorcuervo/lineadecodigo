---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP5OIOO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBTwDJR%2BfYzB%2Bmmj0aa%2BndXQjKKcaS8Oylwy0UfYB9KwIgdOUnOjxIlfmgkpH8QT%2FlEl8OaZjYHg22jzPhUw0c8NAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCM92bdoP886inDvircA8YlLF52udHxySXjtGclPcLQGi%2BD5zvFOn5pcZQ%2B9CCgDoWmZS7cyMCh82s4nFX1IsfEQbnTPbKEPUPaiIuj1%2FNvZba1Aqnv77oui8QPAKaCfjahnyCAoOrVVZqDC2oWK8ktjfMmU7Lge54pkiU4w7uu%2BKbRK4FZGqvIk7lfOYrxbMffEZx9a22hguGT5AJZCkiOxBx2%2B9x%2FSK3sH3YpMZJeldI3LXvTXq4KWPKTLGifL%2Fq3SLtFMF17owTdFFHWXJ4lEo5KbSCUq6PEUVH7bLAvJA5GXVoRECDNU8QGXf%2BSWbcbexumY0aHoiJLAb%2F6DqFH%2FnNrzIa%2BGXDG%2BAK3bcec8RVYHLrLIzCvbSKYSv3g4tujOkBRz%2FF91NIsFlIl8A9dfrEv6O%2B%2B3OFlmKNX2NVFz00S4L%2FEx7mrz6L9GUu44vDMc8hNh3sQE1YfSi5SND5r8CosY8oNW7K%2F9OXs6095Y8%2FHZGzeP7x5U9SR5h4HCMZqOPvuOOEOquBxsptb1T2WYkWILd%2FAE0Zck2Kit7jetXgkLTca%2FuJ9MNIF6Zp71m5O9435YnSbdIbpnIINzz4SGa4LO5vpBpsaWYl2ASckpFpxHMrpnYxmC56yn8OUA9md3i8BZOV%2FbkN6MKGu3skGOqUBfswq8f6vy08qBs9ZuR5q0jTa11nrcUXcXMCyw6KHXfcOcFjrKXU0IRlcDrxUtyiJ79HApiLAGqDOl70JPfz3SyTCsimK0Ay%2BlDlrJ8IXaBGx9Re7cN8c0LNMaTxxnKxcKuG%2Fw4IX6H0PVn7%2FTlBb7eRzH9AUSMfSbFTOAZnxrdMD2ctBSWcCklgx%2F0NUEkMi0Jh7tPW%2FA9s3rSutXWK4zGTxdyau&X-Amz-Signature=94ccbd68437e181f2db7585763d03a8dd80b45c9d4a633e7205fb9a32cd43bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGP5OIOO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBTwDJR%2BfYzB%2Bmmj0aa%2BndXQjKKcaS8Oylwy0UfYB9KwIgdOUnOjxIlfmgkpH8QT%2FlEl8OaZjYHg22jzPhUw0c8NAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCM92bdoP886inDvircA8YlLF52udHxySXjtGclPcLQGi%2BD5zvFOn5pcZQ%2B9CCgDoWmZS7cyMCh82s4nFX1IsfEQbnTPbKEPUPaiIuj1%2FNvZba1Aqnv77oui8QPAKaCfjahnyCAoOrVVZqDC2oWK8ktjfMmU7Lge54pkiU4w7uu%2BKbRK4FZGqvIk7lfOYrxbMffEZx9a22hguGT5AJZCkiOxBx2%2B9x%2FSK3sH3YpMZJeldI3LXvTXq4KWPKTLGifL%2Fq3SLtFMF17owTdFFHWXJ4lEo5KbSCUq6PEUVH7bLAvJA5GXVoRECDNU8QGXf%2BSWbcbexumY0aHoiJLAb%2F6DqFH%2FnNrzIa%2BGXDG%2BAK3bcec8RVYHLrLIzCvbSKYSv3g4tujOkBRz%2FF91NIsFlIl8A9dfrEv6O%2B%2B3OFlmKNX2NVFz00S4L%2FEx7mrz6L9GUu44vDMc8hNh3sQE1YfSi5SND5r8CosY8oNW7K%2F9OXs6095Y8%2FHZGzeP7x5U9SR5h4HCMZqOPvuOOEOquBxsptb1T2WYkWILd%2FAE0Zck2Kit7jetXgkLTca%2FuJ9MNIF6Zp71m5O9435YnSbdIbpnIINzz4SGa4LO5vpBpsaWYl2ASckpFpxHMrpnYxmC56yn8OUA9md3i8BZOV%2FbkN6MKGu3skGOqUBfswq8f6vy08qBs9ZuR5q0jTa11nrcUXcXMCyw6KHXfcOcFjrKXU0IRlcDrxUtyiJ79HApiLAGqDOl70JPfz3SyTCsimK0Ay%2BlDlrJ8IXaBGx9Re7cN8c0LNMaTxxnKxcKuG%2Fw4IX6H0PVn7%2FTlBb7eRzH9AUSMfSbFTOAZnxrdMD2ctBSWcCklgx%2F0NUEkMi0Jh7tPW%2FA9s3rSutXWK4zGTxdyau&X-Amz-Signature=a774d776ea19fd0a3afc4814a9dfdade4b8d8643df74a3df61f05dbc4452309b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

