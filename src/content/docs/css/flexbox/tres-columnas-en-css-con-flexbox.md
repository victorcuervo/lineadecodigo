---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKCC6R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFmhA6mW0%2F1oL1w7SgdxNAvd97%2FeiHIOiszg55MSgOHwIhAIqyvvfs3ggyCanyWty3Sxr%2F8ui%2BL1qwI8YTiyjqnvtZKv8DCGAQABoMNjM3NDIzMTgzODA1IgznevkF4nmUrbbDW7Mq3APjettAJZbJ1E6mGwkCWSYky1hmph8dHvK%2FsohB8w0%2FMXE59%2F932NsDZnPxdVVdjPWXLB8vNgWRsHQosqJjvVmKaqzDuT4ZHkR%2F3LjfHvxLa15TeQ0YdNP%2BTA2H6JaaqNAsbYyoME7WkIj%2FcN%2BAIWZ%2FinBy4slrELQgzYgCkfQ6Jea4Qh6zmMR6gc4qzRR%2BLAzW6AgReOcprgleaOc7r8UBLMfZSBMZ8kzKeFY%2FQnG%2BM5KPBdFb4dak0UO%2BuqNzdxTgD2uRnzJDso3m8lvP6dbfpZ%2FSblvlTA3s60lNjb1tBOizHMXVtRAQyNK865jM3gJ5htZj2sGhN72nHZfDRNgKsr5VszPWlm3Ibcmks4415tenjzgaYKU4aw5nBi2uwBkoSnSxY1AKoZGR%2FWMtq31dTssqm%2BIVVl30Fov%2F4f9nPiS3Mpx5ynfPfMijUlKu11nGDXJAR%2BRnFCK2TW0KwTrqMegP6prjTbwEdWR0CnZ4LHVCUICGj4M5XH3KJJq7EWQYM82y7Ss2BeOZ%2FeJjFFQX1IxDKmClNe8Dvbpf5KmggILTVTT6L4y%2BpDf%2FXmqX%2BLSDJbdNknxh5Dz1oDGiKBvDuwDof5z%2FdqLc%2BdGW2SVG54OkqGov8iKMPEZTnDC77cvJBjqkARSHHCUfv4BIYKVEdyals6hW7EuCMugwuP0HlHm0qJWewlf8NGe46wK1aGVAsfU2EkyFVO9B7e9A2%2F3r3kohgwXrFt%2Fe8nV6Yf2QVLlvJXGqnp8ppcXMLbIWXYYAhTnecVfdotZNLshtDO0F9aPCt9nbWqr5iLgy5QmoHhDrNpYXFfedOGLzqg55IH%2B6JK4hZDnMAk301seWImthv%2FAW3E%2B5dobL&X-Amz-Signature=c468c3f4fc265741c3927bb531dac939e3cecc3f95adcec741df515f2657c92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKCC6R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFmhA6mW0%2F1oL1w7SgdxNAvd97%2FeiHIOiszg55MSgOHwIhAIqyvvfs3ggyCanyWty3Sxr%2F8ui%2BL1qwI8YTiyjqnvtZKv8DCGAQABoMNjM3NDIzMTgzODA1IgznevkF4nmUrbbDW7Mq3APjettAJZbJ1E6mGwkCWSYky1hmph8dHvK%2FsohB8w0%2FMXE59%2F932NsDZnPxdVVdjPWXLB8vNgWRsHQosqJjvVmKaqzDuT4ZHkR%2F3LjfHvxLa15TeQ0YdNP%2BTA2H6JaaqNAsbYyoME7WkIj%2FcN%2BAIWZ%2FinBy4slrELQgzYgCkfQ6Jea4Qh6zmMR6gc4qzRR%2BLAzW6AgReOcprgleaOc7r8UBLMfZSBMZ8kzKeFY%2FQnG%2BM5KPBdFb4dak0UO%2BuqNzdxTgD2uRnzJDso3m8lvP6dbfpZ%2FSblvlTA3s60lNjb1tBOizHMXVtRAQyNK865jM3gJ5htZj2sGhN72nHZfDRNgKsr5VszPWlm3Ibcmks4415tenjzgaYKU4aw5nBi2uwBkoSnSxY1AKoZGR%2FWMtq31dTssqm%2BIVVl30Fov%2F4f9nPiS3Mpx5ynfPfMijUlKu11nGDXJAR%2BRnFCK2TW0KwTrqMegP6prjTbwEdWR0CnZ4LHVCUICGj4M5XH3KJJq7EWQYM82y7Ss2BeOZ%2FeJjFFQX1IxDKmClNe8Dvbpf5KmggILTVTT6L4y%2BpDf%2FXmqX%2BLSDJbdNknxh5Dz1oDGiKBvDuwDof5z%2FdqLc%2BdGW2SVG54OkqGov8iKMPEZTnDC77cvJBjqkARSHHCUfv4BIYKVEdyals6hW7EuCMugwuP0HlHm0qJWewlf8NGe46wK1aGVAsfU2EkyFVO9B7e9A2%2F3r3kohgwXrFt%2Fe8nV6Yf2QVLlvJXGqnp8ppcXMLbIWXYYAhTnecVfdotZNLshtDO0F9aPCt9nbWqr5iLgy5QmoHhDrNpYXFfedOGLzqg55IH%2B6JK4hZDnMAk301seWImthv%2FAW3E%2B5dobL&X-Amz-Signature=bbd1e33bdb0e21d64361446820741feb2d303db6ef8df16d1dffa9f16d1e57bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

