---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMSBIU3E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICmtG25SsvYWgCaO4YIXGEDlh5Y4%2FLhe5fko1Vjp9WgZAiEA91Qgg%2B2vfhsLgyprVufCazQWZa%2BF9XJXfjDYFQcnS1kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOnNKUtZ4mIJ9lFxjyrcA9tSYqPYFk3Y6CWcejm3OsIUi8Tt4c%2BEOVDJMdRUpjtB0HUBrNklLgBmDn3kUrRo9Q%2F1Qr7Ihh6iDNhVHnekz0W6yO9jHcKLXbx4%2F7aIt5pdLDc1Wx0SC7B%2BKP0q9BAFzTSncdtVMeXzTGyj4kz7LoGW3wuIqDVAXKJRyDkGk5KglJwTqhvARqVbBgftKQWLky%2BBL36FE0hI2mpSTjD9%2BkF7CyHFmB%2FAQGorGZol0kJr%2BExAauXiXP2BIXoyqrMhAkaadCDWUP9eKWoo0Klylg1ZTCT9URyknADk3vwiR69o72Eohha3Fc45S8t%2BLEtP5QVLBqNglKChQB5mSWiVQD47aYvOGEUdJBw2RFxpkNXK6oyA0inosM5SLNcpL9QQPCKNdSiAg2qexmblqmaEWBlyOiebaw9qOi2SaQtT2699wkij3E7EbXCXG0wEpASCSpIBlxdKpNNUtFj2vMbAncvLUXMp1hiXEKNFDxoNEhhUUxuu5O1rlS1klhfrfUfsGGCb7O3cr3hStXszaGA5nckTsE5DCW5WvWXIdR5H4hIRjqIDJQPkWlVdwqHfKTQl%2FRCY8QGJRwSANNjzO2y8e4RpI1ZLHS5E9XHfeidg3GbaDhe5TJVZ1qWZTKM8MO7Uw8kGOqUBiYWAtONT3KDvTBbN9PgV3w01SktpwgpbBWFHnbd6o6F%2FbuJg0tBM8%2BDBoib%2F1TBqCUc%2FxYf%2F0p2scg%2BfRVL2u70aSCY%2BVDp5D3V9m0C1Xahghu4KsKUS4sVr%2BofLi07x8%2BQkQGXSX%2FPwJb4Y3rZzZ0ScZ%2BCLikJjAx7EJlQV9P%2FrmhJfxgF%2Bz1Io%2BTSTXe4mVVdITFr4lnvm%2BXtywqoVz24Zk44C&X-Amz-Signature=ce464caa8d384b9998918ebf58d05e4d73472d77231f00e7620c49ac75b4f613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMSBIU3E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICmtG25SsvYWgCaO4YIXGEDlh5Y4%2FLhe5fko1Vjp9WgZAiEA91Qgg%2B2vfhsLgyprVufCazQWZa%2BF9XJXfjDYFQcnS1kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOnNKUtZ4mIJ9lFxjyrcA9tSYqPYFk3Y6CWcejm3OsIUi8Tt4c%2BEOVDJMdRUpjtB0HUBrNklLgBmDn3kUrRo9Q%2F1Qr7Ihh6iDNhVHnekz0W6yO9jHcKLXbx4%2F7aIt5pdLDc1Wx0SC7B%2BKP0q9BAFzTSncdtVMeXzTGyj4kz7LoGW3wuIqDVAXKJRyDkGk5KglJwTqhvARqVbBgftKQWLky%2BBL36FE0hI2mpSTjD9%2BkF7CyHFmB%2FAQGorGZol0kJr%2BExAauXiXP2BIXoyqrMhAkaadCDWUP9eKWoo0Klylg1ZTCT9URyknADk3vwiR69o72Eohha3Fc45S8t%2BLEtP5QVLBqNglKChQB5mSWiVQD47aYvOGEUdJBw2RFxpkNXK6oyA0inosM5SLNcpL9QQPCKNdSiAg2qexmblqmaEWBlyOiebaw9qOi2SaQtT2699wkij3E7EbXCXG0wEpASCSpIBlxdKpNNUtFj2vMbAncvLUXMp1hiXEKNFDxoNEhhUUxuu5O1rlS1klhfrfUfsGGCb7O3cr3hStXszaGA5nckTsE5DCW5WvWXIdR5H4hIRjqIDJQPkWlVdwqHfKTQl%2FRCY8QGJRwSANNjzO2y8e4RpI1ZLHS5E9XHfeidg3GbaDhe5TJVZ1qWZTKM8MO7Uw8kGOqUBiYWAtONT3KDvTBbN9PgV3w01SktpwgpbBWFHnbd6o6F%2FbuJg0tBM8%2BDBoib%2F1TBqCUc%2FxYf%2F0p2scg%2BfRVL2u70aSCY%2BVDp5D3V9m0C1Xahghu4KsKUS4sVr%2BofLi07x8%2BQkQGXSX%2FPwJb4Y3rZzZ0ScZ%2BCLikJjAx7EJlQV9P%2FrmhJfxgF%2Bz1Io%2BTSTXe4mVVdITFr4lnvm%2BXtywqoVz24Zk44C&X-Amz-Signature=4a240b3c92ecc251fa787b4d44d43357c5162cfe49001330041ad429afc0eadd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
