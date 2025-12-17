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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSUNENJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdbVW19x2NWh3ze7GXi%2BuGvXIde1SSRdPnGOx43HmeEAiEA62snf2%2BTOoQ1a3ojvWGeKSrpZDDm4YcZuR9f34UMVm8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAbGK%2B77Q2I3DFZ26yrcA%2FIjtj5PQy1TjY1lXquNTQZ2pFXijDKuTCadyu3oJM1O7fBNF1PAUjyve%2FuviRGy8Gn40nweRn2qcSnyHRuUqjFBpcB1DXJTKPleGBHQW0uuTXOTeEXFGd8pkJ%2BL%2B532a%2BKld6Nzyv29pXof4WUHGSupcwVCu7JloukIm%2FCjV08Q9RpoL2bqCjeZtVA8vvZZL5vDpodiW8SNChZis59ks9tsam3SkePijOZ7eVoFkvUP1ZRiBxoB2n51wR2q5Y055t%2Byvx62oY7F8l69UYGeGIPjiCWgYDv11RAZ0kcbPemW3CsrBmjm69HpnOQl3jY7%2FSGw%2BSM4JkVCtpp%2Fe3eodiR1u3FYU%2F92QrGc6zViyx1%2FLMRAbqcu7JMXO1bdG5dcbZln%2B511P5XlDDO0b2%2BizzKMOB2ZV8HMnSy556wpOkAXgtFKbFYpfsBbF4lNqhq9n%2FdOmvz383rPDEqt6R3s7Ss1X9iu0mNdpggGTNTtTAzbLELTKH8KFN3d%2BXKprnY0KY0mHRZ38Zd%2F3WqqJvQk8t8o%2F3WcppqWdnIRdtxgjIffnsU3kNpMDFCmHe0VClFdzHVRf%2F2x0cjwx4Vx6mQOTbXTMXi8DriKgdvHC7990iXaOxwQfVzTvinjq7p2MJKPisoGOqUBuUVDodvepCwMtlxUZZD%2FAhlyoBm61P1dbIJbWtSgMImQF3VaO0e6u6A2jIob0zP8GTE9M5HxBcXg3d%2FdD2u3OMvRxgJ8Oq6l%2BGKpecvQj%2BKoKvxLzBCwqwVBqmpN3eifhCc4W7WVaTzOTHU8seZYVHynLQbT954QCf8hsfA0HZ6B6QsPsBBFNzE92Wt%2BW0xyPAM9TYzYUN0JoyTfHKa5t8q%2Bfpc5&X-Amz-Signature=ecd1a7a598da8cc592b025c9c9a6b14d112d3c4b5e7d2900ba70a910c34761ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSUNENJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdbVW19x2NWh3ze7GXi%2BuGvXIde1SSRdPnGOx43HmeEAiEA62snf2%2BTOoQ1a3ojvWGeKSrpZDDm4YcZuR9f34UMVm8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAbGK%2B77Q2I3DFZ26yrcA%2FIjtj5PQy1TjY1lXquNTQZ2pFXijDKuTCadyu3oJM1O7fBNF1PAUjyve%2FuviRGy8Gn40nweRn2qcSnyHRuUqjFBpcB1DXJTKPleGBHQW0uuTXOTeEXFGd8pkJ%2BL%2B532a%2BKld6Nzyv29pXof4WUHGSupcwVCu7JloukIm%2FCjV08Q9RpoL2bqCjeZtVA8vvZZL5vDpodiW8SNChZis59ks9tsam3SkePijOZ7eVoFkvUP1ZRiBxoB2n51wR2q5Y055t%2Byvx62oY7F8l69UYGeGIPjiCWgYDv11RAZ0kcbPemW3CsrBmjm69HpnOQl3jY7%2FSGw%2BSM4JkVCtpp%2Fe3eodiR1u3FYU%2F92QrGc6zViyx1%2FLMRAbqcu7JMXO1bdG5dcbZln%2B511P5XlDDO0b2%2BizzKMOB2ZV8HMnSy556wpOkAXgtFKbFYpfsBbF4lNqhq9n%2FdOmvz383rPDEqt6R3s7Ss1X9iu0mNdpggGTNTtTAzbLELTKH8KFN3d%2BXKprnY0KY0mHRZ38Zd%2F3WqqJvQk8t8o%2F3WcppqWdnIRdtxgjIffnsU3kNpMDFCmHe0VClFdzHVRf%2F2x0cjwx4Vx6mQOTbXTMXi8DriKgdvHC7990iXaOxwQfVzTvinjq7p2MJKPisoGOqUBuUVDodvepCwMtlxUZZD%2FAhlyoBm61P1dbIJbWtSgMImQF3VaO0e6u6A2jIob0zP8GTE9M5HxBcXg3d%2FdD2u3OMvRxgJ8Oq6l%2BGKpecvQj%2BKoKvxLzBCwqwVBqmpN3eifhCc4W7WVaTzOTHU8seZYVHynLQbT954QCf8hsfA0HZ6B6QsPsBBFNzE92Wt%2BW0xyPAM9TYzYUN0JoyTfHKa5t8q%2Bfpc5&X-Amz-Signature=5669a029ed1daa8e7152b043250bc078d233e63721cff19b33e9a32be4bc6b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
