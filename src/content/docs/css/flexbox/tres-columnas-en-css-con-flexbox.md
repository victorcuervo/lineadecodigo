---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKCGOGL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn1koTdYGVYibAVAvDak%2BsbpwoYZj1IeYmads7%2FVS07AIhAJhNbxQJMGjtubIe6E0RiUGYoTp1GMQg2zcNpI69tJVYKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZmi%2FgdVBiN5nQoiAq3AOVgLd7hzoYk1YrGzRFsCwbaQZhI%2FmP3EThHgrY2ijhAQ497xwtyJ7LQFwh6BRpP%2B6sjC%2BpjM%2Bzpx19%2BhFxNizBVn6l5AZDXsatuNxQYhU9AJRJ3fXLRaLb6aAY7Ucxouig8IwLcuSZIHiKdySue%2BdcP5oHMA7Ke2hXMuWslfSiWvvYCS60TroEsL7Fbdh220yKnf%2FBdOXE0GlNSsH%2FHTB2LFTxqSHsf1UiJIHVpIcM8vfwV%2BtCjxjC%2FGmHEfT5cPmKJ5p6h7XN0RBjF7FtBeCmQ1u8RU8Sgg5Cqc0yjmZau3JJVsMNuL7JDsOcfbtvPwE55%2B00YV6Kr198uAIcA8faGt47k7uaLf6DxuyrGDQQwoTTlO9JQ3v0pmmOuzFNTlIQlAVKRffIHaTL0R%2B3UO1uhIq3%2FO2yYA%2BM94r6ofwVdExjNMrr9n1fWm%2FO5tI7pXHLeKtorUbJSctci9BwEUcfQIql6SrHK2suNjhYgXh%2BCPbRfc7l0qLrI5VGTm8bRNgSqN%2FeE9fHj5%2BMLCxfySDepgsDv%2FkQt7nTosmsLrKHe4LB5dai7qGhCT9a%2BwKOm0DyOYWletJR%2BRiah4UqiBv3Lb9j4m2E5NXU0B6%2FwQu8c%2BPTty%2FT2jc2LQ%2BYKzC9xN%2FJBjqkASD7JynampGREpFrjzMXu8irdgovnv4pDzcp3LPs5SEgjjf78XZde%2FkKWL3F9A3OVZbIDGnCre7BbjmuDdHFb5oyK97KwL3bO41t4k8X4LkhQ67%2FhdL%2BW%2F7Jpdelu%2BDxXypzbOizeBQIRnwyF0fBB4nLbMRuW9cw1TbgqXS4Azwgjrhv68azgEdgCxW5WDaFF2pSkzgpAMdxmAI2wTM9UgOkPfmB&X-Amz-Signature=d6b27b47450a5a472a6e55971679da276ff727938fdc2b9e11021dfbfbe50f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKCGOGL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn1koTdYGVYibAVAvDak%2BsbpwoYZj1IeYmads7%2FVS07AIhAJhNbxQJMGjtubIe6E0RiUGYoTp1GMQg2zcNpI69tJVYKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZmi%2FgdVBiN5nQoiAq3AOVgLd7hzoYk1YrGzRFsCwbaQZhI%2FmP3EThHgrY2ijhAQ497xwtyJ7LQFwh6BRpP%2B6sjC%2BpjM%2Bzpx19%2BhFxNizBVn6l5AZDXsatuNxQYhU9AJRJ3fXLRaLb6aAY7Ucxouig8IwLcuSZIHiKdySue%2BdcP5oHMA7Ke2hXMuWslfSiWvvYCS60TroEsL7Fbdh220yKnf%2FBdOXE0GlNSsH%2FHTB2LFTxqSHsf1UiJIHVpIcM8vfwV%2BtCjxjC%2FGmHEfT5cPmKJ5p6h7XN0RBjF7FtBeCmQ1u8RU8Sgg5Cqc0yjmZau3JJVsMNuL7JDsOcfbtvPwE55%2B00YV6Kr198uAIcA8faGt47k7uaLf6DxuyrGDQQwoTTlO9JQ3v0pmmOuzFNTlIQlAVKRffIHaTL0R%2B3UO1uhIq3%2FO2yYA%2BM94r6ofwVdExjNMrr9n1fWm%2FO5tI7pXHLeKtorUbJSctci9BwEUcfQIql6SrHK2suNjhYgXh%2BCPbRfc7l0qLrI5VGTm8bRNgSqN%2FeE9fHj5%2BMLCxfySDepgsDv%2FkQt7nTosmsLrKHe4LB5dai7qGhCT9a%2BwKOm0DyOYWletJR%2BRiah4UqiBv3Lb9j4m2E5NXU0B6%2FwQu8c%2BPTty%2FT2jc2LQ%2BYKzC9xN%2FJBjqkASD7JynampGREpFrjzMXu8irdgovnv4pDzcp3LPs5SEgjjf78XZde%2FkKWL3F9A3OVZbIDGnCre7BbjmuDdHFb5oyK97KwL3bO41t4k8X4LkhQ67%2FhdL%2BW%2F7Jpdelu%2BDxXypzbOizeBQIRnwyF0fBB4nLbMRuW9cw1TbgqXS4Azwgjrhv68azgEdgCxW5WDaFF2pSkzgpAMdxmAI2wTM9UgOkPfmB&X-Amz-Signature=14e8cc0adb333676b58b7c5fde5a18ce02f0b79d6a1b809f6b6d99a8bae6d3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

