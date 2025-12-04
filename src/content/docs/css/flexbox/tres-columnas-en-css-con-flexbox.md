---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIPNTS5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCPTo9hzBOjOGg9w6HBNT%2BbVRvoTnJ5F3DVXBMRvklP4wIgRCoIekxMIJ%2FbcCQr2CtiRJ2CSp5BvPAOXJPJYE5iBUQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPNNJUdto95323aLfSrcA%2Fo%2Bi20OYXF%2BCNm%2Fsvv3vdrxmiyv6yZ2TAGt3Wp7uA8YqRDkIE7KLTFKrDCkX60kt%2BOqW9nLSypXletZlkRL%2BjyIQ9sPFkpKC3cCxdv6P9QK%2BakDJZlMqvnqKlXFVgxV6p3VhZr30aRvqlxlmIoif7vW8RRc63Nngw25QeLyHKKh4D%2BtbYi%2BFOSO0dsz9U%2BR6Eah0rGLAceENd%2Fxzu7fRCr4ghgrYRIhCjOfVe5hs%2B6ECwZS0UMRNeOMWM7788GZ9%2BWr1HwGVV%2FzXaA%2BEKCPpEUQ7ZeezUrrHBJBLLfU6wQgrO%2BImUnV2HsYtcIpnSfDmmo08%2FiF5%2BQ8zY04fR%2BZnja4b8v5KokZyAObCHvypvq2C1j0XtAxhfSgIN3slVTi3V3GnZ7zXb6S2MtnsZdMTtUEucNr33wSEAYUsdFMfH73uTjgWLVW0speBfsdIewIY1IPEzDD6oa2F5rldms776b3wnLzpPxr6VFiok4YmCbeVbmKb6%2FzJBoP3g7S%2FIERcQCJ071hmKe1q6qvy95o1paTT0GSpDpcYCfW1ginRnDjWqna7TA8EulrIqymZL6yji2FzrVqxQ9fkOd%2FxYktTFa57HZjV26DFYgzUGOylnt5%2Bk84JRmziL7f8rLsMMatxMkGOqUBy%2FkIAue0Jp%2F0miRxIk1rTB3LuwyDHzLA6kzJke%2BLMj9QmEZMY1E89%2FS2UKzVZR83b7Ushau431uz3LP7p8sN169DDQSqDU1mtLvuAMN4u4U2hgdO30p3LtV9UX2yP3jH5%2B1Oj2rJUFI0Liz%2Fbj6leXbiLKOQfb5iVYFl5sDIn%2Bj%2F5Am%2FgA2rOeZATLsUsJPdit4wCAmFV4G3asnggS9%2FiEyuV8oV&X-Amz-Signature=146eeec9580514487ae50b337fac03883974f9adfb800e9e74c19113ccb1b86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIPNTS5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCPTo9hzBOjOGg9w6HBNT%2BbVRvoTnJ5F3DVXBMRvklP4wIgRCoIekxMIJ%2FbcCQr2CtiRJ2CSp5BvPAOXJPJYE5iBUQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPNNJUdto95323aLfSrcA%2Fo%2Bi20OYXF%2BCNm%2Fsvv3vdrxmiyv6yZ2TAGt3Wp7uA8YqRDkIE7KLTFKrDCkX60kt%2BOqW9nLSypXletZlkRL%2BjyIQ9sPFkpKC3cCxdv6P9QK%2BakDJZlMqvnqKlXFVgxV6p3VhZr30aRvqlxlmIoif7vW8RRc63Nngw25QeLyHKKh4D%2BtbYi%2BFOSO0dsz9U%2BR6Eah0rGLAceENd%2Fxzu7fRCr4ghgrYRIhCjOfVe5hs%2B6ECwZS0UMRNeOMWM7788GZ9%2BWr1HwGVV%2FzXaA%2BEKCPpEUQ7ZeezUrrHBJBLLfU6wQgrO%2BImUnV2HsYtcIpnSfDmmo08%2FiF5%2BQ8zY04fR%2BZnja4b8v5KokZyAObCHvypvq2C1j0XtAxhfSgIN3slVTi3V3GnZ7zXb6S2MtnsZdMTtUEucNr33wSEAYUsdFMfH73uTjgWLVW0speBfsdIewIY1IPEzDD6oa2F5rldms776b3wnLzpPxr6VFiok4YmCbeVbmKb6%2FzJBoP3g7S%2FIERcQCJ071hmKe1q6qvy95o1paTT0GSpDpcYCfW1ginRnDjWqna7TA8EulrIqymZL6yji2FzrVqxQ9fkOd%2FxYktTFa57HZjV26DFYgzUGOylnt5%2Bk84JRmziL7f8rLsMMatxMkGOqUBy%2FkIAue0Jp%2F0miRxIk1rTB3LuwyDHzLA6kzJke%2BLMj9QmEZMY1E89%2FS2UKzVZR83b7Ushau431uz3LP7p8sN169DDQSqDU1mtLvuAMN4u4U2hgdO30p3LtV9UX2yP3jH5%2B1Oj2rJUFI0Liz%2Fbj6leXbiLKOQfb5iVYFl5sDIn%2Bj%2F5Am%2FgA2rOeZATLsUsJPdit4wCAmFV4G3asnggS9%2FiEyuV8oV&X-Amz-Signature=3b9dd1d13b1130d4ea849052a47b086593c040c19376187468ec7534fb028dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

