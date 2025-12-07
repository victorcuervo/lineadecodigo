---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JF2VWOC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyNTt%2FM2rwIw%2BsT7jbFpWxrr4MD5Rvcw873C96%2BgtqdAiEApDvXtRUeLgVdtBg3QuTYOPHpoSzo3NfQMtiHJpE1yi4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONjIZ7EKenmvx9JeCrcA4U8gWtIQWM%2BA62h9iRgUntfTk8ZVQrZ%2BOmomc2fLSSIZ%2FliR%2FWDyeTz9v1GLgBbxx%2FAVCmtm2ksSG%2FHbbZrWvk%2B0o4ZY3uMw3jxq6kyAkDQMhGIZCsfKSI3GanmhEl%2BuJ4HBvOSI747v795NssW5EK1FL1FVQltQ0PF%2FVyN%2BwrHnPkMc3g57fchzt28OcGOcWXPNWvTGPgxo6eDwW84C0cQlDyxtJe%2FbwlmSi6Cdv6ExwR2TDhrvF5T%2FrD3ftV6118z0e1kTuEoWOx1ZG9L7l%2Fxcj%2FmgfoqE5ZvEkRYue4ZPhI6kt2Yp0tdNBaVd0kQffSPrLgGx5i9DpJRxflRkUoeDPC6oJNZdz5COf8lkhEZmwH92a0O2%2FrUX0OeRhRFu16tsijEKoWkfNeCaH92yszLKj1WB4wC4JpSrwexr1suhY0sWYJDfDSi1%2F9RA4CmiISWZ9eqSw0TN%2B4HG%2BLX%2F4eGq9hvad3otpxfN9GlGBsoRGo0aVe2eMuuTl6f0rrHtr%2FAmGSgsUvYROAS63SDJmCXzDma0jNr9D34KUlm4fXvPUZChTKadjbGuBltX77TATlvdZCqlMhSATYAQ0JbGASZxKxXRFZMHJaVECIXyRmn%2FvxHX3xDCKFsRu1wMLqb1MkGOqUBunAiOdFBfJlyvSO0ZygyVB31R3xzaUh1f2oimye4EwmfJ6cQeXXJeYSkazY9LP2%2BiGG6qo7uquTwCzLVTkNJ9SAGOtx6SxPda1vainelpKpZis7FAS7jprVnpK4j6OHf1rNskrIzHaMRz3hwd12JRV%2BEsgH9jwopPldaDmu2U2Y33binus0wbcGi0AVygKPcWd0oYITVtRuHfTb6V2HbAq8IyK6Q&X-Amz-Signature=5cd3d3fdd60d98ff23cca9a8a65120ac1a3521de8d78f48bda0724e85524d9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JF2VWOC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyNTt%2FM2rwIw%2BsT7jbFpWxrr4MD5Rvcw873C96%2BgtqdAiEApDvXtRUeLgVdtBg3QuTYOPHpoSzo3NfQMtiHJpE1yi4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONjIZ7EKenmvx9JeCrcA4U8gWtIQWM%2BA62h9iRgUntfTk8ZVQrZ%2BOmomc2fLSSIZ%2FliR%2FWDyeTz9v1GLgBbxx%2FAVCmtm2ksSG%2FHbbZrWvk%2B0o4ZY3uMw3jxq6kyAkDQMhGIZCsfKSI3GanmhEl%2BuJ4HBvOSI747v795NssW5EK1FL1FVQltQ0PF%2FVyN%2BwrHnPkMc3g57fchzt28OcGOcWXPNWvTGPgxo6eDwW84C0cQlDyxtJe%2FbwlmSi6Cdv6ExwR2TDhrvF5T%2FrD3ftV6118z0e1kTuEoWOx1ZG9L7l%2Fxcj%2FmgfoqE5ZvEkRYue4ZPhI6kt2Yp0tdNBaVd0kQffSPrLgGx5i9DpJRxflRkUoeDPC6oJNZdz5COf8lkhEZmwH92a0O2%2FrUX0OeRhRFu16tsijEKoWkfNeCaH92yszLKj1WB4wC4JpSrwexr1suhY0sWYJDfDSi1%2F9RA4CmiISWZ9eqSw0TN%2B4HG%2BLX%2F4eGq9hvad3otpxfN9GlGBsoRGo0aVe2eMuuTl6f0rrHtr%2FAmGSgsUvYROAS63SDJmCXzDma0jNr9D34KUlm4fXvPUZChTKadjbGuBltX77TATlvdZCqlMhSATYAQ0JbGASZxKxXRFZMHJaVECIXyRmn%2FvxHX3xDCKFsRu1wMLqb1MkGOqUBunAiOdFBfJlyvSO0ZygyVB31R3xzaUh1f2oimye4EwmfJ6cQeXXJeYSkazY9LP2%2BiGG6qo7uquTwCzLVTkNJ9SAGOtx6SxPda1vainelpKpZis7FAS7jprVnpK4j6OHf1rNskrIzHaMRz3hwd12JRV%2BEsgH9jwopPldaDmu2U2Y33binus0wbcGi0AVygKPcWd0oYITVtRuHfTb6V2HbAq8IyK6Q&X-Amz-Signature=eb9fa93b0182f6016361995619c759d902a978916c4f4194748f0d8972d349df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

