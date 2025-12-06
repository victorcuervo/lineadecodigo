---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6V4XZFG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV3kIpdx8wUN%2BtwcMl5pwJ5RbHXccEgPPtK%2B%2BLLE%2FNHAiAn2qM%2B9CYUPde3Wc7JdH6AkM4zR15AL6QwpT3Zkcdx8ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMRM2g%2FV96gXdGQKWSKtwDGsUQh%2BA8WN0djCG5YJnPTbJDHDXG9ZQUEYI9jx0gtQPX9jHJQBVbEAzcRm%2FfAdqghWDCk08Zc9d8O2r9T83UZukTtkDShb3%2BTb%2FlU0x6I6nCecW0jWbkbgbZDtYb3KndfDyl%2Fq2ztOKYPEuhMeo3UaY4CWjw9xPJsT3b9mHnTbXnkPY2%2BFEoDAdTEvPYDL09pScd6VtO0w2I3uPIaBnaPjX5NPZXn%2FhGtoWhqhyNuHramKBFkMnes6SVHxVqIoDfjxU1qIKmISwQmPokslumC7WHXSmftf35hHU4M6b3DdDTcMHrbLN%2FJIe8CL6ZHjkwn5URsPkHfbIxOd5nVW7rKyV5Dvorg%2BD6flt4mDNmLRrd6VfXcuDWiYHpY9Uq0rXLI6nwn%2FkSEGk3F%2FwNkPVzrfpMIP9wClaXdaNWvGS3xc%2BgrWy23eEQG6DY%2BGB9Pg3yRviJ5uMs1klwp9uVJ%2BUP%2FdFlUqjl7v4ws%2BIJaGeZIrdgFn%2F3wr3Co8KiTsNQ82nmj8LZYoUTqukTOmZnukHu8u9dNsr2ixAwynSddirmV0bDzOc%2BbQ0aqGduHp%2F09YLuhMd0mUBOF82COqhT%2FHJaSTSI%2BhAjGMhBxEN0U7Cbg6Pf378ZR%2BJWqZcuV8Mw7qbQyQY6pgF91ECdEE0eteFEET73dwdUkhUBBKBEvdpF3AvVfkyCkWc9vkTAXO8%2FasUpssfOddy0hQWsdy1ajVhctLCYvAZa%2FRmlVvk%2FxvrQd0clX3jS3O86pUcw31t65EYw%2FyuLdtnkPORO%2BmeVvn7RNIuY3OGaz%2BFsjBiUBr4C7%2Bgw8FfiM2i6QuOjB0C8oU8b5EwStQbxSgDeFy5%2Fi7Tyu9QcoixL0Eoh8LPE&X-Amz-Signature=1c29daa355b315d48bf090b0d490e5dcb5f632d3359db5241ed30d00005f8c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6V4XZFG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV3kIpdx8wUN%2BtwcMl5pwJ5RbHXccEgPPtK%2B%2BLLE%2FNHAiAn2qM%2B9CYUPde3Wc7JdH6AkM4zR15AL6QwpT3Zkcdx8ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMRM2g%2FV96gXdGQKWSKtwDGsUQh%2BA8WN0djCG5YJnPTbJDHDXG9ZQUEYI9jx0gtQPX9jHJQBVbEAzcRm%2FfAdqghWDCk08Zc9d8O2r9T83UZukTtkDShb3%2BTb%2FlU0x6I6nCecW0jWbkbgbZDtYb3KndfDyl%2Fq2ztOKYPEuhMeo3UaY4CWjw9xPJsT3b9mHnTbXnkPY2%2BFEoDAdTEvPYDL09pScd6VtO0w2I3uPIaBnaPjX5NPZXn%2FhGtoWhqhyNuHramKBFkMnes6SVHxVqIoDfjxU1qIKmISwQmPokslumC7WHXSmftf35hHU4M6b3DdDTcMHrbLN%2FJIe8CL6ZHjkwn5URsPkHfbIxOd5nVW7rKyV5Dvorg%2BD6flt4mDNmLRrd6VfXcuDWiYHpY9Uq0rXLI6nwn%2FkSEGk3F%2FwNkPVzrfpMIP9wClaXdaNWvGS3xc%2BgrWy23eEQG6DY%2BGB9Pg3yRviJ5uMs1klwp9uVJ%2BUP%2FdFlUqjl7v4ws%2BIJaGeZIrdgFn%2F3wr3Co8KiTsNQ82nmj8LZYoUTqukTOmZnukHu8u9dNsr2ixAwynSddirmV0bDzOc%2BbQ0aqGduHp%2F09YLuhMd0mUBOF82COqhT%2FHJaSTSI%2BhAjGMhBxEN0U7Cbg6Pf378ZR%2BJWqZcuV8Mw7qbQyQY6pgF91ECdEE0eteFEET73dwdUkhUBBKBEvdpF3AvVfkyCkWc9vkTAXO8%2FasUpssfOddy0hQWsdy1ajVhctLCYvAZa%2FRmlVvk%2FxvrQd0clX3jS3O86pUcw31t65EYw%2FyuLdtnkPORO%2BmeVvn7RNIuY3OGaz%2BFsjBiUBr4C7%2Bgw8FfiM2i6QuOjB0C8oU8b5EwStQbxSgDeFy5%2Fi7Tyu9QcoixL0Eoh8LPE&X-Amz-Signature=edc609fa09c523386762c9385ced844e6223b9809fcca00a40af18610eecfced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

