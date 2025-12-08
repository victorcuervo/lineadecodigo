---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPQCR4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbSh1P7ISZOE3ULu4RPBQExT3X%2Fk%2BNlUZWQOnDSDhB%2FAiAFbYEv98gg6%2FqSN7f45idw9EgrvMmQ0dSH2IKjWdd7gSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiuDBxkCdeBTWBfAeKtwDFmg8uKoZCIiGy1FSC6PEtcXkxLcFtjlSvQpz4QUp8jmZwR05sX2HWw7aIKvxUgCHgQf6s5SCVnDVIkInybPFTSaXUmutXxnXP4phQGp327%2BEOp8nBRljk4BnX%2B69OQ5YUMyLengCptA3rbI9ltWTxrYULxK1toZE6eUOGRFn4heeTorRwypF9%2B828%2BbrsGSTNv0UHgz7IIvAB3%2FtqWwQrVRHgdY2H2r3Tr7gjoHB%2BGLXR6%2F%2Fm%2FB8bNYwtoXMA1bEyv4TMsLOVEi14tZkTXU8i1LIcgsC6OItPrtZZ%2BqZNOI9jNHtpJ6qcTpDOrYRRAH10IICDWvxltVuZysKJiTeG%2Fw3mnOlugdI37NMtgMMh9BGm3jQ9o%2BSiPML3viaHUXoseFl9u%2FUAeWwDzSy25yFGeMSOoYqVOQBjAqVVMfWBPifHFtuX9V9eeYZqBQ3x3ipG0erdTjmLc21uKTkK1Si4PEMJoNbg%2BsOCJo%2BPyT5Y6KvxfS4PA92AJdg7qMwvAyLqwAbUHzEkAxHUByUdP4gT%2FpuFjH6xmfjj4A%2F07DIz9KKOFvuOM5LX%2FsQoNoeThBbKUJ0Saj513MTNvGXHGbNZnGdflvFtG9R5lXr40vM18BwIk9eSSfkwfhlECMwsLTcyQY6pgFofm9CwMprq1NURYSiBKEeFWrvUdLE98HfQ5AGOtmcMacCY7kAZUuuskx3tWB0toloev7IxCBCOJkxXcTFj26McTt55hogq2GtZTnvXp%2FYrY9nfPHPvkmf8PhN3e6tKr4wggIHTFH5eyeA3dOOFhFQlKjrAiPEAUwvEeo6W3GP8Krk7e8Fh24VFInhIEYZA6VbTnX4sOJaIdInk%2FqGK97mgybOxdrC&X-Amz-Signature=bbb155e01c70c3e096cfe2d22d852206ca18fd5978f6acf2cf7ac3658d5c9d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPQCR4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbSh1P7ISZOE3ULu4RPBQExT3X%2Fk%2BNlUZWQOnDSDhB%2FAiAFbYEv98gg6%2FqSN7f45idw9EgrvMmQ0dSH2IKjWdd7gSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiuDBxkCdeBTWBfAeKtwDFmg8uKoZCIiGy1FSC6PEtcXkxLcFtjlSvQpz4QUp8jmZwR05sX2HWw7aIKvxUgCHgQf6s5SCVnDVIkInybPFTSaXUmutXxnXP4phQGp327%2BEOp8nBRljk4BnX%2B69OQ5YUMyLengCptA3rbI9ltWTxrYULxK1toZE6eUOGRFn4heeTorRwypF9%2B828%2BbrsGSTNv0UHgz7IIvAB3%2FtqWwQrVRHgdY2H2r3Tr7gjoHB%2BGLXR6%2F%2Fm%2FB8bNYwtoXMA1bEyv4TMsLOVEi14tZkTXU8i1LIcgsC6OItPrtZZ%2BqZNOI9jNHtpJ6qcTpDOrYRRAH10IICDWvxltVuZysKJiTeG%2Fw3mnOlugdI37NMtgMMh9BGm3jQ9o%2BSiPML3viaHUXoseFl9u%2FUAeWwDzSy25yFGeMSOoYqVOQBjAqVVMfWBPifHFtuX9V9eeYZqBQ3x3ipG0erdTjmLc21uKTkK1Si4PEMJoNbg%2BsOCJo%2BPyT5Y6KvxfS4PA92AJdg7qMwvAyLqwAbUHzEkAxHUByUdP4gT%2FpuFjH6xmfjj4A%2F07DIz9KKOFvuOM5LX%2FsQoNoeThBbKUJ0Saj513MTNvGXHGbNZnGdflvFtG9R5lXr40vM18BwIk9eSSfkwfhlECMwsLTcyQY6pgFofm9CwMprq1NURYSiBKEeFWrvUdLE98HfQ5AGOtmcMacCY7kAZUuuskx3tWB0toloev7IxCBCOJkxXcTFj26McTt55hogq2GtZTnvXp%2FYrY9nfPHPvkmf8PhN3e6tKr4wggIHTFH5eyeA3dOOFhFQlKjrAiPEAUwvEeo6W3GP8Krk7e8Fh24VFInhIEYZA6VbTnX4sOJaIdInk%2FqGK97mgybOxdrC&X-Amz-Signature=a2ff108adc13f8af9e4db3a92ae2d33485c80f2f39b1bae1e7ae1870eb14ede6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

