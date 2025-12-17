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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADOQ6SB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMtcgrzsnLh49TMQRZhfsTehNhX9F%2B7aQqQyPVQYYPxAiEArpNk01YWInt6VCDZCZLYDii60bTWchOoSzxjrJU%2B9nQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLKFHhL9cBjSo2Dn7yrcA1LA%2FNIi2amfGNzsHkgVC7p4AU4GCyEELlxwGLfeL5zHFTAeP34%2BqdPp2OeDkEyGto%2BWemmt%2Frw0k2uHIHyHH2%2BADtFXcBjY70Yem0PRvLe39BeIcSoSH4AU7KwJ3I0EL551HZAY2XIVHRuLeUNfr498mmWOqmsj7hhmw4XlVZAFQJrBrVgdKCAUCLMlEWmrnCAc8BhsrBOcxnUBxV4GpQ3p1AW35Sp6R9srgnSpN%2BhVfQ%2BVh3m2lW%2FKZZMr2DPb0FawwGoGAU8sOebJXSw%2FdUnOIHDn7zJwiXMYl2wBfhl5iyoJ9g6APbowbeJ9%2B7oiGh63eMJlz4Et1pyzOYGTTfD9wKnLAuldel0QX%2B%2FM3jBAGWJHJtI5rdphhdxUByw6q0QVh%2FQrDTeLcbPpAPgKaQhOHie%2BWUzgoIqZNSEWAGjYAVoDFwXn1jt1JJWKPElhdHkWmYYtzVihlswvlEtj9lKP8PYp5%2FaLl%2FRiWY1e9%2BdeHO0QEMYXn9b20G6OFVHcFS%2Bb5fB8ag2R%2BQRqzmOdmtc8o18VAc4VocdOoPqa9zK1TTpLo3lVzVLqAJC6oNAZ%2BZtw%2BwJLXSLErfrdM7sa2C35cSQXuKD1PmCq%2B9ypFwPlsKmfG2OXKY%2Bs3Sj9MLvRicoGOqUBD3TT65hnfdT%2BL%2BbYMhk%2BPpIo%2FML5rGSO6EWHknENwpHqK0sztbvVQZx4rqblDqYZiOEx3b81BjtLS%2FoAyQVCJAo%2F03Cpx4nACoofVIbTVGDHLDwlVL5qF7ujU1SoyL656wFIcGXWuoKCiVLbfjK7Yl9tA7Yr0JRol1Ertlol8RjR49p1Y873Bq%2B2YWeIxFHKE61Ee9NM5kLgdk%2BLnJhah0lu%2BMqo&X-Amz-Signature=ccf43380cf143cfbd2720159d15c5730129acdbdfd055c571aecf7c1149bbb18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADOQ6SB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMtcgrzsnLh49TMQRZhfsTehNhX9F%2B7aQqQyPVQYYPxAiEArpNk01YWInt6VCDZCZLYDii60bTWchOoSzxjrJU%2B9nQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLKFHhL9cBjSo2Dn7yrcA1LA%2FNIi2amfGNzsHkgVC7p4AU4GCyEELlxwGLfeL5zHFTAeP34%2BqdPp2OeDkEyGto%2BWemmt%2Frw0k2uHIHyHH2%2BADtFXcBjY70Yem0PRvLe39BeIcSoSH4AU7KwJ3I0EL551HZAY2XIVHRuLeUNfr498mmWOqmsj7hhmw4XlVZAFQJrBrVgdKCAUCLMlEWmrnCAc8BhsrBOcxnUBxV4GpQ3p1AW35Sp6R9srgnSpN%2BhVfQ%2BVh3m2lW%2FKZZMr2DPb0FawwGoGAU8sOebJXSw%2FdUnOIHDn7zJwiXMYl2wBfhl5iyoJ9g6APbowbeJ9%2B7oiGh63eMJlz4Et1pyzOYGTTfD9wKnLAuldel0QX%2B%2FM3jBAGWJHJtI5rdphhdxUByw6q0QVh%2FQrDTeLcbPpAPgKaQhOHie%2BWUzgoIqZNSEWAGjYAVoDFwXn1jt1JJWKPElhdHkWmYYtzVihlswvlEtj9lKP8PYp5%2FaLl%2FRiWY1e9%2BdeHO0QEMYXn9b20G6OFVHcFS%2Bb5fB8ag2R%2BQRqzmOdmtc8o18VAc4VocdOoPqa9zK1TTpLo3lVzVLqAJC6oNAZ%2BZtw%2BwJLXSLErfrdM7sa2C35cSQXuKD1PmCq%2B9ypFwPlsKmfG2OXKY%2Bs3Sj9MLvRicoGOqUBD3TT65hnfdT%2BL%2BbYMhk%2BPpIo%2FML5rGSO6EWHknENwpHqK0sztbvVQZx4rqblDqYZiOEx3b81BjtLS%2FoAyQVCJAo%2F03Cpx4nACoofVIbTVGDHLDwlVL5qF7ujU1SoyL656wFIcGXWuoKCiVLbfjK7Yl9tA7Yr0JRol1Ertlol8RjR49p1Y873Bq%2B2YWeIxFHKE61Ee9NM5kLgdk%2BLnJhah0lu%2BMqo&X-Amz-Signature=b13cba7f304991a9ae8115b2240fb884295853071105456e39489b68869c6222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
