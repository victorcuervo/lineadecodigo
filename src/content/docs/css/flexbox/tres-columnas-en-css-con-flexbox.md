---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEC5QJM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOPWUx1CFB5W%2BAYthT8NAfyvdfWANJvrY3GnJaPdSh%2FAiA2WUHzxaCfzcnvIR481ZBV8knTUdQ8YpblHK3f9jFSxSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPEGkBr8nUrcvPEtqKtwD%2F0momR2CWGpq5yj40RQPYUQ%2FC2gMCcVY2CS68XeMjhw4yres4jZP3GHEe6SuV1CkulgVrsOo8ODM%2BsI%2FzxDoIpRfLT7RHnw%2FXhLIDI1fhgz9zDVF90GGUUxG%2FvEkH4LDFRUbs7zCaawe4lkoST1Qso0r6sT5CDQN0iqlMR34LuRAo73yquSEd4rxkZbdHa1cWIqbjsZRd%2FfQz0S6cfALQJIQ%2F%2FpT5sN6RcemsJvM3y5xDlGpFieo38%2BLDAhHGe9l3dGiHX%2FyBaawgZcL2fS6g0du9EtFsl9whVkmFCZrXyiAPay6k8NWDTDuYJABg%2FaohPYZXKhyheVi8wnOnzEyoBuPPic5CHIgYt9SSXDNQOlsRZ%2BPPNuSLR2srvrBiCIyHEs3xJs%2FO7FioC57q1M8xjuc9XRRuiYlMyOSF1SvvKcnAtnO8%2Bj2HsZTzBmY%2B%2F7BVrZDjmZU2mL586C6CLj7fh0ISDkLHR7%2FTi72E6PzvguGBGImigqDuOGQqxi6HPiM1%2B0EqK5GXhcMsMJ9JNIi2j%2F6IMW3s8xh5GhEVrcgAO4IcTiKncdTyKIUhy4uwFYV%2FVh6QPdv%2F3xrrQ7VDCcMrTwIvWhf3V3Eriecp7CBeM63viVOckwaecBWe1wwgMjXyQY6pgEr65HovS990lNWRB5rnN02S0rCDr7d%2BEjn3kJugtkv4VAPTY0%2FsT3AMK8iQCaJ5%2BEt8tgJOlsTCpuhG9d%2B1pvV7vVjZByb%2FPOzSQhixmRiCA34BQmPlqNljcS792MmGlo5TtXodVgrH%2Bjmrvi0kjjZ1GoRxsn76N%2BUTcrU5AlLYbibqrysVI3JwbmERqRLMQDSN5WsRekjeyyBguN2m7UEb92cLFs4&X-Amz-Signature=8daecb47c50ab89c144148b0592fb13d72901a718697e2c4bfd6f151b54071a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEC5QJM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOPWUx1CFB5W%2BAYthT8NAfyvdfWANJvrY3GnJaPdSh%2FAiA2WUHzxaCfzcnvIR481ZBV8knTUdQ8YpblHK3f9jFSxSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPEGkBr8nUrcvPEtqKtwD%2F0momR2CWGpq5yj40RQPYUQ%2FC2gMCcVY2CS68XeMjhw4yres4jZP3GHEe6SuV1CkulgVrsOo8ODM%2BsI%2FzxDoIpRfLT7RHnw%2FXhLIDI1fhgz9zDVF90GGUUxG%2FvEkH4LDFRUbs7zCaawe4lkoST1Qso0r6sT5CDQN0iqlMR34LuRAo73yquSEd4rxkZbdHa1cWIqbjsZRd%2FfQz0S6cfALQJIQ%2F%2FpT5sN6RcemsJvM3y5xDlGpFieo38%2BLDAhHGe9l3dGiHX%2FyBaawgZcL2fS6g0du9EtFsl9whVkmFCZrXyiAPay6k8NWDTDuYJABg%2FaohPYZXKhyheVi8wnOnzEyoBuPPic5CHIgYt9SSXDNQOlsRZ%2BPPNuSLR2srvrBiCIyHEs3xJs%2FO7FioC57q1M8xjuc9XRRuiYlMyOSF1SvvKcnAtnO8%2Bj2HsZTzBmY%2B%2F7BVrZDjmZU2mL586C6CLj7fh0ISDkLHR7%2FTi72E6PzvguGBGImigqDuOGQqxi6HPiM1%2B0EqK5GXhcMsMJ9JNIi2j%2F6IMW3s8xh5GhEVrcgAO4IcTiKncdTyKIUhy4uwFYV%2FVh6QPdv%2F3xrrQ7VDCcMrTwIvWhf3V3Eriecp7CBeM63viVOckwaecBWe1wwgMjXyQY6pgEr65HovS990lNWRB5rnN02S0rCDr7d%2BEjn3kJugtkv4VAPTY0%2FsT3AMK8iQCaJ5%2BEt8tgJOlsTCpuhG9d%2B1pvV7vVjZByb%2FPOzSQhixmRiCA34BQmPlqNljcS792MmGlo5TtXodVgrH%2Bjmrvi0kjjZ1GoRxsn76N%2BUTcrU5AlLYbibqrysVI3JwbmERqRLMQDSN5WsRekjeyyBguN2m7UEb92cLFs4&X-Amz-Signature=1bcb0a4a80b57e9702f6d99dc38c3b75b54da010716a6b53e9022d5db7a732d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

