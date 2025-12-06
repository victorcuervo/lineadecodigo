---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UC4ZMGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8E%2Bix3gcYQrclypvoBVSehm620JPxhSqgMaVMQ%2FnFPAiAYB8EE6gA4rqX60nuPEy1vzxTtBblKmJDIl6aSXmovmCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeVXy5DUYh4YLppJtKtwDMhVVK7NcyZnuoSCabCrKQ37Bi8ZvzqvmCrbwk2MrxcyGPbwjJZTjZaKIGjqdwYD%2FSH3%2BIznuud%2Bk9ueYru2EawAcry7TbSnERYdsRF4NMitzSsiIz9MFAlamKPX2UDxr0Zduh3xtoC8tY%2F%2BFFUH8BKFsQsPzU7AXBuFuk5sIXDaN5Y4G3TkMfH3XeD23SwzSMexu%2FC7rHE4N1dff5WAl2FMyjwo%2BxIhIcBCnBuyh34hh7x64Fxsew8WwHbV%2BbsNTH%2BBelo989bifAzUJpZzWxZCyEVLNYxf7FWt2FZe0LJz3TpshE%2FICerj425DDJq6RQeZ4SzUH%2B7eFXv5mYU1UU%2F7a1JoObJCw7N%2Bu6ads5VBpR9PalNjQMyyTpfx22zPVVeShKOXK%2FMcjtsASsHIkiEFi6BN8FoOWnFBZfTBbjIrt41UzPSpY9gjkGThOwzIe6seUSS1GBSecsH9Ktl5yl2f2n%2F7kT0Za7fsKtZq%2BzBr3uQ%2FtVf8PbZQARveX1ABExw5GBzs03ufGw2oxBMI%2B47%2FEyKjYjaA%2FDm4A4vYC%2F8pYaSMfJ9phk655GsswasFOQgdKikG5bteFDNbvH%2BxO7DHTspogdOzx8OG1Lc8FsVuYi1hrnhqs8l1%2FNJIwu6bQyQY6pgE%2BSf8W4Pux0c5iR01EBg7mkEwmSrcEJ6SU%2BlpulSq2xph1HlSwWGXhsVnbEk6Xw4PlTJ1Wo5mU4apg4o0FMd2qn%2Frbp4tMDbJ078sWYv2YmM8K7sKQ1%2Fng%2BNAXaAOuHMpCCbdiCjvMaVT37qU0%2FQgY34qmK6%2FOvKYUIFgXhtYyAXfjl1IOyBILMU2NHjvfAsq8Vh%2BKC9KC0d23R493IszdatWN%2BI%2Bk&X-Amz-Signature=64748f81c1123ea88f2bf686edc906fe2ee3c7e09f9ed9a8c567815354272aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UC4ZMGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8E%2Bix3gcYQrclypvoBVSehm620JPxhSqgMaVMQ%2FnFPAiAYB8EE6gA4rqX60nuPEy1vzxTtBblKmJDIl6aSXmovmCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeVXy5DUYh4YLppJtKtwDMhVVK7NcyZnuoSCabCrKQ37Bi8ZvzqvmCrbwk2MrxcyGPbwjJZTjZaKIGjqdwYD%2FSH3%2BIznuud%2Bk9ueYru2EawAcry7TbSnERYdsRF4NMitzSsiIz9MFAlamKPX2UDxr0Zduh3xtoC8tY%2F%2BFFUH8BKFsQsPzU7AXBuFuk5sIXDaN5Y4G3TkMfH3XeD23SwzSMexu%2FC7rHE4N1dff5WAl2FMyjwo%2BxIhIcBCnBuyh34hh7x64Fxsew8WwHbV%2BbsNTH%2BBelo989bifAzUJpZzWxZCyEVLNYxf7FWt2FZe0LJz3TpshE%2FICerj425DDJq6RQeZ4SzUH%2B7eFXv5mYU1UU%2F7a1JoObJCw7N%2Bu6ads5VBpR9PalNjQMyyTpfx22zPVVeShKOXK%2FMcjtsASsHIkiEFi6BN8FoOWnFBZfTBbjIrt41UzPSpY9gjkGThOwzIe6seUSS1GBSecsH9Ktl5yl2f2n%2F7kT0Za7fsKtZq%2BzBr3uQ%2FtVf8PbZQARveX1ABExw5GBzs03ufGw2oxBMI%2B47%2FEyKjYjaA%2FDm4A4vYC%2F8pYaSMfJ9phk655GsswasFOQgdKikG5bteFDNbvH%2BxO7DHTspogdOzx8OG1Lc8FsVuYi1hrnhqs8l1%2FNJIwu6bQyQY6pgE%2BSf8W4Pux0c5iR01EBg7mkEwmSrcEJ6SU%2BlpulSq2xph1HlSwWGXhsVnbEk6Xw4PlTJ1Wo5mU4apg4o0FMd2qn%2Frbp4tMDbJ078sWYv2YmM8K7sKQ1%2Fng%2BNAXaAOuHMpCCbdiCjvMaVT37qU0%2FQgY34qmK6%2FOvKYUIFgXhtYyAXfjl1IOyBILMU2NHjvfAsq8Vh%2BKC9KC0d23R493IszdatWN%2BI%2Bk&X-Amz-Signature=ca39e3900095034a9942ed65c27c51133d4dc39187a16a467215cca1552991a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

