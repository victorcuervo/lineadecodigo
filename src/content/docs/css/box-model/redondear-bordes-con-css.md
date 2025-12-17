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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNTDXCW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJGF%2FpwzGpD77BkqMQrj4ms6O%2Bzr8Ec8lC8VFukRAUjAiBSv13qxn7eYJs3FrMKXlPlWmPzXO0epEOXqJygj7H2kCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMX59BE7SaFzE02bf3KtwDCYiWFQgF%2FZFz5EW2ttDsXxk05A0GX6J7mceZ0Rc8jj7AQEHdya%2Fm1uGb%2BnoQWyuQRpHtW%2FSpyeY6SBeeMseAMgqNQayEg7nQoKjj1Kq5883RlZSVCzuacOmsSONSpZWxl8Ee1bsYd5U4pyiLmukvkZe3Cfpe%2Fl7eZgtQfjj7%2FJdSrId2Pfc%2FL7eGKxaQGz%2BrIuLcbxlJgkUZIQ3DLwxnDrHrLsoUJ2VcfqWFdk5lhw3P%2BWSBZQNVn%2BxPNjKKg9QOvJ9twz6qr08TSyHc2xI1ieBgDRwSAfgAzPsmknMjS%2BZ5r3HZvHCcl%2FsBEWiEP2%2BDosA4xRhDczV5xFBf26xf3BZmtx9h8iqdDRQpnNgYI1lfrsTHFLqNvsnFsHPzEr4Hbg0Xh%2Fmc7GomNSd15ZdcbtrCvB02Xh0CdoIdMwK5HmJTJcwzF7c6obM9ynZ0VxIr3Uhvif2Txjci4x%2FT2cvLWLw%2B7H9wkkWelgeWqP58Yb3G%2FLkM9AKyLCkDdIsINuw36d0IXTExUkn8AHuyKuMRn999kzYHMvILlNelo9nhe6fTgO1ax9cOmuMhLj7WeoaRGOYX2VORCy8zeot%2BdSQtXNCmSGFMgibRGRArdc%2F5cLf44bm5M5AA9qAVJ5IwzY%2BKygY6pgFIo6NPA43tdKJanQZfeAxW%2FY1MngMCeQnKnifWNOCTsoyokHzajJQ0UeoisThbSy9SIcDhVBWFUXktDyJqlAEogCoKVfjqivtOk06yNBbhmZxbTS27K8%2BRu7EPj9ZqWq0XV%2F3DPKCUx6ATS7YiNGC3NSyNxiVwcCtnfO%2BwFuqVUev%2BmBapEE%2FkgTJTurSRREYq%2F11dRfrqXXDZtxbJVXsLfgRuBwAZ&X-Amz-Signature=4621b3644ccfa9357c84a1b77574762f1b2f8803aa744a4d414087e8be3d5d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNTDXCW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJGF%2FpwzGpD77BkqMQrj4ms6O%2Bzr8Ec8lC8VFukRAUjAiBSv13qxn7eYJs3FrMKXlPlWmPzXO0epEOXqJygj7H2kCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMX59BE7SaFzE02bf3KtwDCYiWFQgF%2FZFz5EW2ttDsXxk05A0GX6J7mceZ0Rc8jj7AQEHdya%2Fm1uGb%2BnoQWyuQRpHtW%2FSpyeY6SBeeMseAMgqNQayEg7nQoKjj1Kq5883RlZSVCzuacOmsSONSpZWxl8Ee1bsYd5U4pyiLmukvkZe3Cfpe%2Fl7eZgtQfjj7%2FJdSrId2Pfc%2FL7eGKxaQGz%2BrIuLcbxlJgkUZIQ3DLwxnDrHrLsoUJ2VcfqWFdk5lhw3P%2BWSBZQNVn%2BxPNjKKg9QOvJ9twz6qr08TSyHc2xI1ieBgDRwSAfgAzPsmknMjS%2BZ5r3HZvHCcl%2FsBEWiEP2%2BDosA4xRhDczV5xFBf26xf3BZmtx9h8iqdDRQpnNgYI1lfrsTHFLqNvsnFsHPzEr4Hbg0Xh%2Fmc7GomNSd15ZdcbtrCvB02Xh0CdoIdMwK5HmJTJcwzF7c6obM9ynZ0VxIr3Uhvif2Txjci4x%2FT2cvLWLw%2B7H9wkkWelgeWqP58Yb3G%2FLkM9AKyLCkDdIsINuw36d0IXTExUkn8AHuyKuMRn999kzYHMvILlNelo9nhe6fTgO1ax9cOmuMhLj7WeoaRGOYX2VORCy8zeot%2BdSQtXNCmSGFMgibRGRArdc%2F5cLf44bm5M5AA9qAVJ5IwzY%2BKygY6pgFIo6NPA43tdKJanQZfeAxW%2FY1MngMCeQnKnifWNOCTsoyokHzajJQ0UeoisThbSy9SIcDhVBWFUXktDyJqlAEogCoKVfjqivtOk06yNBbhmZxbTS27K8%2BRu7EPj9ZqWq0XV%2F3DPKCUx6ATS7YiNGC3NSyNxiVwcCtnfO%2BwFuqVUev%2BmBapEE%2FkgTJTurSRREYq%2F11dRfrqXXDZtxbJVXsLfgRuBwAZ&X-Amz-Signature=942959762e41613fb43e3c3cb5eb0357d21160d1c510ca9abadfabbf620cfb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
