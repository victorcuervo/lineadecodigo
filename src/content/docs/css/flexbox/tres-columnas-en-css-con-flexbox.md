---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7VRW37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATItIrEsHKGwPKrKsnrqTn5p5qcjDfDw%2Fm5XUOTO%2Fo2AiBxB7rSh316Vy%2FESibX6qk5Vfzo%2B5sI9X6KLilXM4WToiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMASMZ0p%2FwJxD%2Br3tnKtwDafQ0viYstBxIvIAAMoWLYLiXWtHi%2F12WuwgaFXzzrlcWPpHniQOigF%2F1LZLYHctkun0CObNhBCgwhUo%2FUKtPnMWwKPm8TL5rqL6A5Fre1Ely5%2BbKobjZLCicwbNcJf2T1xPEOx1S9qeyL5VRBNutdzFtGbruh6m2nhUIa3crgs5ZStiufg2Vg1Ym4TRijaDHt5Lg6g40Z3ioEqk59%2BakTLDlHQ5VFtNxibLoJyTDibeWt8uRC0Qa%2BF8d%2FynZkotRxx6roZhyo9aCKbo0s7ofrwns%2FiInHsgi2fEJS%2Beo95n6kMEwJUriybGHwpof52ZUp0GwQrFqiRKh%2F4z7hKRgRfvXFPdyU%2Fh5f9rYF8j2QMINLw6feDt7dyqsEbsZQODplySJdiQT5GpS1dxcgJWrNuh9K46K%2FqKSHM06FmL33HU%2Fcssoq35iaVYCflGVCt%2BTJaaeHsgthKY7Z1H9yqVqLQW4v3dbW%2Bg6Q%2FaxaJtD781Y5IN1G6WoMJOovC7mH83Z6KgKeaSpqvnupNaih%2FBUPxuQluFi4z%2BuopA9ZQprR3sj8y97F3tP4fQpemlR88D77p9wLthllWFdkWDSwHhonwjO%2BWQQAnCOsHyLKncfO%2Fy43lmf2CtNHZ7o%2F5cwkMreyQY6pgHV1UYNMwi4nCYaGgQx4QDKp5u7Gzo86dy%2FTx1IYZapmbppzggj10KwlPU0GytsrgnxSI9Gi31aPtsrJmpw0Fa8BMEx%2Ba8jU75RMOzm70cud%2Fb8ogtSvVp8iMsGFu4dMKn%2B0G4hNVhE1VIuX%2Biad8d8u%2FHDn0Te%2FvKjDZoTC5EUG%2Ffv4I5LfixzSsAECLkUyXizDNvFFLQ8u7lPDpqzffcWUQoyNrXp&X-Amz-Signature=9481230d89e67e3a371b79a0ec0099e6b6bd311f983e7e60abfb8a158aad2412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7VRW37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATItIrEsHKGwPKrKsnrqTn5p5qcjDfDw%2Fm5XUOTO%2Fo2AiBxB7rSh316Vy%2FESibX6qk5Vfzo%2B5sI9X6KLilXM4WToiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMASMZ0p%2FwJxD%2Br3tnKtwDafQ0viYstBxIvIAAMoWLYLiXWtHi%2F12WuwgaFXzzrlcWPpHniQOigF%2F1LZLYHctkun0CObNhBCgwhUo%2FUKtPnMWwKPm8TL5rqL6A5Fre1Ely5%2BbKobjZLCicwbNcJf2T1xPEOx1S9qeyL5VRBNutdzFtGbruh6m2nhUIa3crgs5ZStiufg2Vg1Ym4TRijaDHt5Lg6g40Z3ioEqk59%2BakTLDlHQ5VFtNxibLoJyTDibeWt8uRC0Qa%2BF8d%2FynZkotRxx6roZhyo9aCKbo0s7ofrwns%2FiInHsgi2fEJS%2Beo95n6kMEwJUriybGHwpof52ZUp0GwQrFqiRKh%2F4z7hKRgRfvXFPdyU%2Fh5f9rYF8j2QMINLw6feDt7dyqsEbsZQODplySJdiQT5GpS1dxcgJWrNuh9K46K%2FqKSHM06FmL33HU%2Fcssoq35iaVYCflGVCt%2BTJaaeHsgthKY7Z1H9yqVqLQW4v3dbW%2Bg6Q%2FaxaJtD781Y5IN1G6WoMJOovC7mH83Z6KgKeaSpqvnupNaih%2FBUPxuQluFi4z%2BuopA9ZQprR3sj8y97F3tP4fQpemlR88D77p9wLthllWFdkWDSwHhonwjO%2BWQQAnCOsHyLKncfO%2Fy43lmf2CtNHZ7o%2F5cwkMreyQY6pgHV1UYNMwi4nCYaGgQx4QDKp5u7Gzo86dy%2FTx1IYZapmbppzggj10KwlPU0GytsrgnxSI9Gi31aPtsrJmpw0Fa8BMEx%2Ba8jU75RMOzm70cud%2Fb8ogtSvVp8iMsGFu4dMKn%2B0G4hNVhE1VIuX%2Biad8d8u%2FHDn0Te%2FvKjDZoTC5EUG%2Ffv4I5LfixzSsAECLkUyXizDNvFFLQ8u7lPDpqzffcWUQoyNrXp&X-Amz-Signature=8716ed43a2b2e6db3c6c452ccfd84ac86d52a9ea70177869b84e7b7307039615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

