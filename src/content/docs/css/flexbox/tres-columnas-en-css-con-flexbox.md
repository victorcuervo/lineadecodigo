---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGXYJU2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXxxTsO3I%2FLxPFORLEk1uR4Q2LeuAXCQpabG0tIpsWhAiALdeBT1SKFEF9uE5FQtEe11LOuhdFf%2BUf%2Fk3p%2BaWmd4yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK8lJTJWRbHNfP3FlKtwD0w3G3gdB1IuZts0s%2Bm%2F95l%2BV7A%2FXUJObfExFsM0AyZLnLZaGlNbREOv1L7ARLo36skjEJUeREMPJgiw2K9dG2igalqBr2BmYLadLiwBXBe%2BMZUCgF3TGT4%2Bj5R73oQARZ2CZyoehNPPG0yb83xW%2FKc8mNQjqK%2B4hNvWhbV4Car986B2RZl%2By8TMe3%2BiiV%2BImwKypXJhehm%2FJsBG2SyXw5fxNM0TMKc7OCVi4rJsREqX3XmKqVeDUo0KAxII%2FRr6CdngpX07r%2FK0B%2F77b1SyNMHcwuzfbTGi0QIYRcmA1lb98dkF8bHo%2BDpYWtZp6yjVGQRYhEOW7jdtEm3BfIyXQ4TLpOE749GX2QUWK7n%2FsRChTuK%2B6dd%2BQAp25aTfEWybMe6LZoGFyjjiYDDeCgbxqvBCSSAh9tkrD0ASCqba7jIRjkU663qNEzvlcdAgxF5ZOz4KaS0T0bj8uOWLd8%2F0P2Zi5MbmXuBdvVTCE45LJZnj7cNMopWxxdhWfsms09e98gvDh6%2BkHclsLtTGbh0h9WHeHMScam8%2B4G9CWcAytJALNsRxDtx6lzTFXIudwgFzpRQjdEJLXl1XHxn2wilJ1DzoxgUSMlo%2Bl2W%2Be%2BdCKKL6UUgeLrcKBxMOgJIww7aPUyQY6pgFrVViNRJ0ljlmSoiEl8uSC%2F5hLqvKk8d2iumR9vgPh10ZJFqwGzR84G2C1En3v6LH4AnHNKD3CeQUsT0%2F7sSM88wBR0hNHcdgB%2BGKLLmTxMitsIyp8Dhi8QMoWYwQAO4j67nPw9Ow33kiCMXrtNiGrWLiY2bBMau8yt29TyFx2fzrVrIjD%2FDQjbzVmJPma4QuBEX%2FNvkS7mrToNUraBI161Po%2BDR5N&X-Amz-Signature=8d230f97b049faa3733f86b3c7d55d2696988f43eacdcd5ec9861bef2f77312b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGXYJU2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXxxTsO3I%2FLxPFORLEk1uR4Q2LeuAXCQpabG0tIpsWhAiALdeBT1SKFEF9uE5FQtEe11LOuhdFf%2BUf%2Fk3p%2BaWmd4yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK8lJTJWRbHNfP3FlKtwD0w3G3gdB1IuZts0s%2Bm%2F95l%2BV7A%2FXUJObfExFsM0AyZLnLZaGlNbREOv1L7ARLo36skjEJUeREMPJgiw2K9dG2igalqBr2BmYLadLiwBXBe%2BMZUCgF3TGT4%2Bj5R73oQARZ2CZyoehNPPG0yb83xW%2FKc8mNQjqK%2B4hNvWhbV4Car986B2RZl%2By8TMe3%2BiiV%2BImwKypXJhehm%2FJsBG2SyXw5fxNM0TMKc7OCVi4rJsREqX3XmKqVeDUo0KAxII%2FRr6CdngpX07r%2FK0B%2F77b1SyNMHcwuzfbTGi0QIYRcmA1lb98dkF8bHo%2BDpYWtZp6yjVGQRYhEOW7jdtEm3BfIyXQ4TLpOE749GX2QUWK7n%2FsRChTuK%2B6dd%2BQAp25aTfEWybMe6LZoGFyjjiYDDeCgbxqvBCSSAh9tkrD0ASCqba7jIRjkU663qNEzvlcdAgxF5ZOz4KaS0T0bj8uOWLd8%2F0P2Zi5MbmXuBdvVTCE45LJZnj7cNMopWxxdhWfsms09e98gvDh6%2BkHclsLtTGbh0h9WHeHMScam8%2B4G9CWcAytJALNsRxDtx6lzTFXIudwgFzpRQjdEJLXl1XHxn2wilJ1DzoxgUSMlo%2Bl2W%2Be%2BdCKKL6UUgeLrcKBxMOgJIww7aPUyQY6pgFrVViNRJ0ljlmSoiEl8uSC%2F5hLqvKk8d2iumR9vgPh10ZJFqwGzR84G2C1En3v6LH4AnHNKD3CeQUsT0%2F7sSM88wBR0hNHcdgB%2BGKLLmTxMitsIyp8Dhi8QMoWYwQAO4j67nPw9Ow33kiCMXrtNiGrWLiY2bBMau8yt29TyFx2fzrVrIjD%2FDQjbzVmJPma4QuBEX%2FNvkS7mrToNUraBI161Po%2BDR5N&X-Amz-Signature=88c38e4480a75860263ccaae698b25bf19b7026e18d01286fe6857f86b517476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

