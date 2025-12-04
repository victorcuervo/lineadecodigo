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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6SSLAP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC0g2kUELoXntgrWl4WezUByAssKJcBq9rc8O7XjVzWZgIhAOB7paAG0gISNuo5yXla2i4Jkbc3Txs1PsRA5eB5QNfjKv8DCEgQABoMNjM3NDIzMTgzODA1IgwBOQHNofoSG%2FlEV4Qq3ANJ3rswcaAFQLzsKORJNHfgLsHgW5T9Vr5T7m8efWGWrH1Ppy0pSXzUzYDr1DEBkZRSYY%2BqVu5hQJ2KCjUf07jkyYGAxrXLFX2AzFkV7n5w187g8Q6c6sSux5rP7jfJnaeVnxKRc5RPXhWI4yy8TpwgiY%2B6K29HyxR0MjtyrG23yKVXo%2FQ8w%2B%2FisePfR8I2X8PJldSDbcSeFPGFr687J7TTgq4mhrPok7TECrIzVeWZ%2Fm7gnLXjTH8DWVKHB5%2FvXlPuXvAPu33GNiaUA%2B%2BWuCIxVaLfQewvPppCsqLX05y4B8jW%2FZECunWAX5NMR8Qcq7cvLNsZFrF37qeEK5WhnkjVxmOPF985w%2FazH%2BwobyUAyjvoh335xrZJZghMBS7MuBjd6nsRGLdu3awcmvxklbV3QfUmC4DXS5dGrqq7Q2cPAbzvRPBtfhfrIk2QqCj645Mq6E2Bg4m52cSDXZTT0S5s5%2FtKLmsRG9Svxn7HRg3H9p58nDRmLMKm0l3yqtnw3zdSBAUBU2DEbebez5G7t%2FY6TgIKsDmSiS0UtQ6NV4XleHlPQ5OnE7GIRi4jSdiNZ2kefwY60oQGEd8s8dSFeexvxyee1d77tS9dljPmnK%2FZ6%2FLt5m19AABN8fX%2BhjDHvsbJBjqkAaDcI5b5b90WWsYhSLnWr9MXezu65VV7MCMT1VPcmLyZavwHOSlExjENrznZQNYxi4a3q6OGZhFdtCicaQfmwumLSIh2GAi1UiuxBFozdL0VcgaZbdI4d4LSXwljq47rcjIYKCem6g6L%2BKoF1DzZDsVlC9eDX2xwp6v4AqN7x5ctMSgn%2BjTTT3MEeGI8oHSs%2BbVmLMUS%2FLVrFUffwpB9WQVFpkVl&X-Amz-Signature=653fd5f9ca580db5580a28e072aa551c3c9680fe485133b0944d02f44c9b6d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6SSLAP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC0g2kUELoXntgrWl4WezUByAssKJcBq9rc8O7XjVzWZgIhAOB7paAG0gISNuo5yXla2i4Jkbc3Txs1PsRA5eB5QNfjKv8DCEgQABoMNjM3NDIzMTgzODA1IgwBOQHNofoSG%2FlEV4Qq3ANJ3rswcaAFQLzsKORJNHfgLsHgW5T9Vr5T7m8efWGWrH1Ppy0pSXzUzYDr1DEBkZRSYY%2BqVu5hQJ2KCjUf07jkyYGAxrXLFX2AzFkV7n5w187g8Q6c6sSux5rP7jfJnaeVnxKRc5RPXhWI4yy8TpwgiY%2B6K29HyxR0MjtyrG23yKVXo%2FQ8w%2B%2FisePfR8I2X8PJldSDbcSeFPGFr687J7TTgq4mhrPok7TECrIzVeWZ%2Fm7gnLXjTH8DWVKHB5%2FvXlPuXvAPu33GNiaUA%2B%2BWuCIxVaLfQewvPppCsqLX05y4B8jW%2FZECunWAX5NMR8Qcq7cvLNsZFrF37qeEK5WhnkjVxmOPF985w%2FazH%2BwobyUAyjvoh335xrZJZghMBS7MuBjd6nsRGLdu3awcmvxklbV3QfUmC4DXS5dGrqq7Q2cPAbzvRPBtfhfrIk2QqCj645Mq6E2Bg4m52cSDXZTT0S5s5%2FtKLmsRG9Svxn7HRg3H9p58nDRmLMKm0l3yqtnw3zdSBAUBU2DEbebez5G7t%2FY6TgIKsDmSiS0UtQ6NV4XleHlPQ5OnE7GIRi4jSdiNZ2kefwY60oQGEd8s8dSFeexvxyee1d77tS9dljPmnK%2FZ6%2FLt5m19AABN8fX%2BhjDHvsbJBjqkAaDcI5b5b90WWsYhSLnWr9MXezu65VV7MCMT1VPcmLyZavwHOSlExjENrznZQNYxi4a3q6OGZhFdtCicaQfmwumLSIh2GAi1UiuxBFozdL0VcgaZbdI4d4LSXwljq47rcjIYKCem6g6L%2BKoF1DzZDsVlC9eDX2xwp6v4AqN7x5ctMSgn%2BjTTT3MEeGI8oHSs%2BbVmLMUS%2FLVrFUffwpB9WQVFpkVl&X-Amz-Signature=c8b4703aa20e7bc8867acb261d1cef991a41ad93c6612a4972ef05a56ed2870d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
