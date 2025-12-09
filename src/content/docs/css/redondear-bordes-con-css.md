---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LRT6DW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEYoUqU2IZvKnJL%2BPKn63H4g98%2BJqj%2Fk09wwfdvjgn%2BAiBDeg2w7I6nqCWJahMkvbHhKYOqWbICzeoU0YCHk%2Be98SqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1DrRcMhorO3s0Fz7KtwDsP8DucAJuwyn4DA7BhhKagGnLNkLqoHN0ZrlaXXZCb61CIR%2BqG2pQIfiVMTDt7Yc4x2ZRbVMjiR4%2FgwspBhLrkKPtUSip9WDDernDF%2FT8VURuDGYNkEI%2BAQpP9aaoTdajDZoN8Gvcqq6ZoeQLSP8EmX3ysSxkx2AQkTtP9sXk6B5lIP%2FcF8au4ch%2FlmB%2BzyXoOCza3lkaUNaNBFVaFosbxz0F9zgMDjH9AYy9dhpG8dhAfB7YHdLC1AjP%2FgU7Hrh6Vigtp8xJs0rWUEa5i0B9iuvCg4%2FaqM5EpjqQ%2F1mNMAf1uP7koMrdbgaL91E6C%2BnZ63wmkrpGjy2MXkQ9Tv%2B7eKLfbxtNkbsBgmjux7Xez44mCNa7vhcl%2BqPBbtGg3u14ggr99sXfZKDMWxIQw5wBoGbJcCJGdT7R7a3X9dhXd%2FISj6OAFtKJIir8z1ERvUAaV7v03Npiege59ZvIWNGx9pJKBptc80WgG0GrH3gnsEPe6ZARwIHBGJx3Y%2B0xcDxymOlYpFSF798JcT0PwEjDjucVOfjRdKc%2FTPzC4jOYsVxGq5xwtqLQrfy5Xj04F%2FU8n%2B2amcgb%2Fa6QO2xgHpn1T21%2FzOL9YgLEsm2NqQ%2BdMvSgQf1MXeAUJLoNRsw88LdyQY6pgF8d96qzpDlyIDldidMPlR2WpJmE8yR874YKwEFUW8t61ofjF27hmmSM57N8a3PeqtjClFwrVGUa5M4PuvUp6IDCRGGNDpauKUwZs6nImoVdU9ZtDL%2FDNfGacMIUcuWQpnEcQHDYKgEav7oOnGLWbjKse19BhlNXrx%2Fnrjly4LEdBWPPnlFPDW1yjCCFn6QL6z%2BD16c0zNKu8y%2FvnlBZ%2BZ3dtkwpU0d&X-Amz-Signature=226789a6a6b7129c718fa02e86babdfc557d26168b43b4d9de2a47c38b188c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LRT6DW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEYoUqU2IZvKnJL%2BPKn63H4g98%2BJqj%2Fk09wwfdvjgn%2BAiBDeg2w7I6nqCWJahMkvbHhKYOqWbICzeoU0YCHk%2Be98SqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1DrRcMhorO3s0Fz7KtwDsP8DucAJuwyn4DA7BhhKagGnLNkLqoHN0ZrlaXXZCb61CIR%2BqG2pQIfiVMTDt7Yc4x2ZRbVMjiR4%2FgwspBhLrkKPtUSip9WDDernDF%2FT8VURuDGYNkEI%2BAQpP9aaoTdajDZoN8Gvcqq6ZoeQLSP8EmX3ysSxkx2AQkTtP9sXk6B5lIP%2FcF8au4ch%2FlmB%2BzyXoOCza3lkaUNaNBFVaFosbxz0F9zgMDjH9AYy9dhpG8dhAfB7YHdLC1AjP%2FgU7Hrh6Vigtp8xJs0rWUEa5i0B9iuvCg4%2FaqM5EpjqQ%2F1mNMAf1uP7koMrdbgaL91E6C%2BnZ63wmkrpGjy2MXkQ9Tv%2B7eKLfbxtNkbsBgmjux7Xez44mCNa7vhcl%2BqPBbtGg3u14ggr99sXfZKDMWxIQw5wBoGbJcCJGdT7R7a3X9dhXd%2FISj6OAFtKJIir8z1ERvUAaV7v03Npiege59ZvIWNGx9pJKBptc80WgG0GrH3gnsEPe6ZARwIHBGJx3Y%2B0xcDxymOlYpFSF798JcT0PwEjDjucVOfjRdKc%2FTPzC4jOYsVxGq5xwtqLQrfy5Xj04F%2FU8n%2B2amcgb%2Fa6QO2xgHpn1T21%2FzOL9YgLEsm2NqQ%2BdMvSgQf1MXeAUJLoNRsw88LdyQY6pgF8d96qzpDlyIDldidMPlR2WpJmE8yR874YKwEFUW8t61ofjF27hmmSM57N8a3PeqtjClFwrVGUa5M4PuvUp6IDCRGGNDpauKUwZs6nImoVdU9ZtDL%2FDNfGacMIUcuWQpnEcQHDYKgEav7oOnGLWbjKse19BhlNXrx%2Fnrjly4LEdBWPPnlFPDW1yjCCFn6QL6z%2BD16c0zNKu8y%2FvnlBZ%2BZ3dtkwpU0d&X-Amz-Signature=e36aec0bfa9a90daaee54ea54650f0a876bca869eb915f78c3fbf8bb10cba1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
