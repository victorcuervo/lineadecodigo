---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGBJR67%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE89AId5rssErjlFxdLVilH309vVRUjdVdqIVWBITyITAiEAlDvjGiMliPa0kyMrCE3oLJ2LWXr2EEaJhwZhme7s3R8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFrvx4gSB8856%2FuWtyrcA2TdIvXKP16B2DXJuaaffhMy4XHH6P%2BtiGAB%2BFAY5ke4WkkGKpa%2FQ9veWtaby91GxvgA4xZhp7TdynUU8gHQIxk3k1Ung8Q1Y79ZmwppwJDmb%2BRo%2FOlk6yy%2BE6psa147cP0dfnAMVogC1zgP0eIF%2FROKoWsK1xaqiGPptw79FHNdLXPpWT0A8sHPJgnowGbpuLF86iPMyxCuKbxNANB%2Bbnt6xZA3ZadGVO%2B%2BBpFzEIHbfHtVTZsc2ntkh3Mpcb9TXS1qh2BQoyyIZeOR27FWvlkbKUl3A78TCkG3m0VjJs4Q25ea9fxRFUsSr2DRqtm%2BPxuDl%2BM3NQkBD33AHLydFL192EIXUacxYPp6y%2BikzCA7FMeIm7CO1%2BZn168MzVFGiQp4IiM1Jm9xnaWZPF3X1EFoWuBDsQYO0Wf3uX%2FBPSHlqc1Q78qUYp6jywTWxZns80Xgld%2BzogGgto3YuwipaiZEBHnDK1POmTrp4ofjDy%2Bvner1ymlshnf5iYKSiIjaZLyC%2F9DbJNZ9hdPRNTR8TQMw4ziFuZHytRnQfxAzul8L%2FmgAkoSMKuLNHzxNURV%2FUshDzvq5nAU4jHW%2Bxx%2BZseYihXyCHvxyY5GV5IavGQVv30jpBaPyLLi10td5MJiziMoGOqUBIjsSxYgFNXCyVYnKeV6I1yXISZFaF5c2MxPe3EzePGvMLh2Ad9eYqv6lXzEvN3pfc7tcMCv6URSSGNa4HlsUIr%2BFImK1h6q0uiDJ74UUb%2BWV95KCRIYdzw0mqw0KUhaMI5CUf2j%2BN5VqdunPUg0ojgPhhzoHGKbtJuGjJEb14aW%2B79BX7EAMo5R58WjNAsDli%2Bi2ankp2c5iJJoqNEpeZX0IG8k7&X-Amz-Signature=e208744113e67fa2736f4471a4dc7bdab6db4ae956bd0055bdee1dc6c12fa65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGBJR67%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE89AId5rssErjlFxdLVilH309vVRUjdVdqIVWBITyITAiEAlDvjGiMliPa0kyMrCE3oLJ2LWXr2EEaJhwZhme7s3R8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFrvx4gSB8856%2FuWtyrcA2TdIvXKP16B2DXJuaaffhMy4XHH6P%2BtiGAB%2BFAY5ke4WkkGKpa%2FQ9veWtaby91GxvgA4xZhp7TdynUU8gHQIxk3k1Ung8Q1Y79ZmwppwJDmb%2BRo%2FOlk6yy%2BE6psa147cP0dfnAMVogC1zgP0eIF%2FROKoWsK1xaqiGPptw79FHNdLXPpWT0A8sHPJgnowGbpuLF86iPMyxCuKbxNANB%2Bbnt6xZA3ZadGVO%2B%2BBpFzEIHbfHtVTZsc2ntkh3Mpcb9TXS1qh2BQoyyIZeOR27FWvlkbKUl3A78TCkG3m0VjJs4Q25ea9fxRFUsSr2DRqtm%2BPxuDl%2BM3NQkBD33AHLydFL192EIXUacxYPp6y%2BikzCA7FMeIm7CO1%2BZn168MzVFGiQp4IiM1Jm9xnaWZPF3X1EFoWuBDsQYO0Wf3uX%2FBPSHlqc1Q78qUYp6jywTWxZns80Xgld%2BzogGgto3YuwipaiZEBHnDK1POmTrp4ofjDy%2Bvner1ymlshnf5iYKSiIjaZLyC%2F9DbJNZ9hdPRNTR8TQMw4ziFuZHytRnQfxAzul8L%2FmgAkoSMKuLNHzxNURV%2FUshDzvq5nAU4jHW%2Bxx%2BZseYihXyCHvxyY5GV5IavGQVv30jpBaPyLLi10td5MJiziMoGOqUBIjsSxYgFNXCyVYnKeV6I1yXISZFaF5c2MxPe3EzePGvMLh2Ad9eYqv6lXzEvN3pfc7tcMCv6URSSGNa4HlsUIr%2BFImK1h6q0uiDJ74UUb%2BWV95KCRIYdzw0mqw0KUhaMI5CUf2j%2BN5VqdunPUg0ojgPhhzoHGKbtJuGjJEb14aW%2B79BX7EAMo5R58WjNAsDli%2Bi2ankp2c5iJJoqNEpeZX0IG8k7&X-Amz-Signature=0758d442b1737cd2c3ae53bccc1602cbb6ec3550012fe0f2634344e1beff1e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
