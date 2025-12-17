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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDI4DGI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN1%2B7PO7JcEO9soNgONfEzdTl%2BYjIK%2FSrZeAXSx1iBbAIgN2E%2F5YJtD9Il%2BlHrPMhLh17paNGhd9iXFOmKE%2FF%2FcAgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfGcmBKyB5SNQ%2FgoCrcA2X6fhx47dQjtlPU5gveJz2LDGEkU3fVnj2BJ6zcWvWFkpVDAe0AmMxypuzu5fnceB5BuLqnu8O9X7err7gwuPp8u2el5obdeNFk6vUmWfswzzDu%2BTDA0hSPf2P6agpRqRvHeIrSMTZ4iwrpwdZ6mzpv%2FOkD6cq5Th05%2F8d9EwVHcoKj6i8IyQPdDyc313y1gv8iH6zAU2kMlIc066hS%2Baen4Ei9k3ZjItiEDYacrTkkzZ8UoUPvrxsgtpCPIDtQZiEYXoPmKEXK%2Fd5stgo7vSjWAQ5%2BTImEkMBjnElVW5qYHJqlMhuk9vgl7zs06R48ijV1kCoPIv%2F4%2BLx1tXCSfG%2FOT7PzCD%2BfDY94CVuC1BFSEk9g6AmCubtOVTDQTqB6d9W30EcNQoze3M%2FmaWhkkosBPZAuuWn00fozorBzmSOYiwcvVntCcEfOM5Fmtrg1TcttAYUEdac%2FFl%2BQzpzQl1XKz%2B9ZEfZRnNzz14nw9gE0fU%2Bef6kBfoNkq0pE1kYlXF19QWIXGQZ8Vh370%2BBqDLVQUCHS1aXqrey%2FUU2yvUvbulnYmyqcrtSpnVZhepF2gezy4tP199%2BI62G6FSrfpkv%2Fe2CtQssO2SqN5bY0TBs6oq2AJxnKofwmblqlMNWfi8oGOqUB9QBF9OigGZqybW9a9IClFE03bhwWImBhD4YJkpomq1FO0S37wNoGh2JA30nGDsEsLYJM5eBUbf%2FY7I71xMct9uFr48ex4Ie5B5wBgcqZQtvADfGYFUF5j7A3YofYtSeI9pTquP668w9J2%2B47FxkG%2FWT54YDDfcEVsK9U15ozWah9oj8ddGyu4fFRa3rHE5hME55Q31Ypqf7duSqdKzkylot3uzza&X-Amz-Signature=f271ac369eb395f5de638ecc515313785bc91c8dbd77a247bff1e2904cca753f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDI4DGI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN1%2B7PO7JcEO9soNgONfEzdTl%2BYjIK%2FSrZeAXSx1iBbAIgN2E%2F5YJtD9Il%2BlHrPMhLh17paNGhd9iXFOmKE%2FF%2FcAgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfGcmBKyB5SNQ%2FgoCrcA2X6fhx47dQjtlPU5gveJz2LDGEkU3fVnj2BJ6zcWvWFkpVDAe0AmMxypuzu5fnceB5BuLqnu8O9X7err7gwuPp8u2el5obdeNFk6vUmWfswzzDu%2BTDA0hSPf2P6agpRqRvHeIrSMTZ4iwrpwdZ6mzpv%2FOkD6cq5Th05%2F8d9EwVHcoKj6i8IyQPdDyc313y1gv8iH6zAU2kMlIc066hS%2Baen4Ei9k3ZjItiEDYacrTkkzZ8UoUPvrxsgtpCPIDtQZiEYXoPmKEXK%2Fd5stgo7vSjWAQ5%2BTImEkMBjnElVW5qYHJqlMhuk9vgl7zs06R48ijV1kCoPIv%2F4%2BLx1tXCSfG%2FOT7PzCD%2BfDY94CVuC1BFSEk9g6AmCubtOVTDQTqB6d9W30EcNQoze3M%2FmaWhkkosBPZAuuWn00fozorBzmSOYiwcvVntCcEfOM5Fmtrg1TcttAYUEdac%2FFl%2BQzpzQl1XKz%2B9ZEfZRnNzz14nw9gE0fU%2Bef6kBfoNkq0pE1kYlXF19QWIXGQZ8Vh370%2BBqDLVQUCHS1aXqrey%2FUU2yvUvbulnYmyqcrtSpnVZhepF2gezy4tP199%2BI62G6FSrfpkv%2Fe2CtQssO2SqN5bY0TBs6oq2AJxnKofwmblqlMNWfi8oGOqUB9QBF9OigGZqybW9a9IClFE03bhwWImBhD4YJkpomq1FO0S37wNoGh2JA30nGDsEsLYJM5eBUbf%2FY7I71xMct9uFr48ex4Ie5B5wBgcqZQtvADfGYFUF5j7A3YofYtSeI9pTquP668w9J2%2B47FxkG%2FWT54YDDfcEVsK9U15ozWah9oj8ddGyu4fFRa3rHE5hME55Q31Ypqf7duSqdKzkylot3uzza&X-Amz-Signature=47a1d97e398df18ff1404da8ef6c31a3e9d0d681c061618dfb355ce0135cd13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
