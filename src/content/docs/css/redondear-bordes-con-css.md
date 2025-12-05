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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6R2OSLS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzF4K8MoAu9q1wU4XuVHpoZTsupA1LAO6ud3Or2%2BWsrQIga97dYJUx44G9vt4MuQTXcBFjiAirnYV%2FZ4jHaY1Y1Psq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOv781kZEii9%2BaXsAircA1BDWs2VWXTITUA0t8g2sPEXg07okkloTd7f0b3gZ0gopVxng%2BBHE2%2BzNeuDrzFcn8VIGxX1Fr29RDPZrx%2Bpo53X2lPkyz3y%2BXJ3s3AbSe%2FVS8FJCvy7Mf9a2EQRLsezMIkOCk%2B3AyjMF%2BpY1Gn9RkLfXNfDGwjRGQ8vn1ctEHn6WiH8tKGN95bRJpuNCCZMw5nPjubelX%2FbuptaPxC5BOSAqezv9fNNKGbAJZhY7pp8Kpp1IAemSxEn9ruzWYr0Kak7z1h5XiMJmKbMitK9vrfbABIDm408Ge6EBCu1RzF1V%2BBpVHjPJsG1kdNgpCAdlftPc3xZ2Ahv1uz7BtjBqv2NUSYHJj7E6gYSFjxw3Dvs3Hkn%2Fj16RS%2BpO7Hpjj%2Fcxo1yFufzE1CgwTLqsHYW5m0TeGivwWe3DvTzZSvqz46kofJHOltIIoKQXjYHwQeL%2FmTQcHCwe9QhtHbOKThNPYaEFeBJoqV1iwtUnfY3UREleDrFkiHn8Ujm9YUg0%2FG5qVoOldT7JdDxJUCDGz6spCaUw2uyO0%2FpG3qQLDOZuNAVqQ56iuyXG2GHC8ymqU4XXEsq2DwEIoU7KEjwRYiuK%2F1GK58eVUY3FDhyECd4JpCMRouGLRdp56wwNkGUMN%2Fsy8kGOqUBIX9Dif4lbPRfiJmoYzxmzhx8kJ2PJswR%2Bau%2BRxCASMgnej7SXrlOS3HplBH9iiusUMYg8vz32DuucsY8nwuWellzhqhU2wwxfVjqId7QXMp32bCxBl1w4sV79r21uH6%2BFS%2BfuMhXlb9rcFa%2FxdY%2F7ZEo3iB3VthZGpE8ZkvP3sh7Fu9OOBri2FvVfz%2BUD9W4fCUzr0LD%2FOZRYdu1hF5FzA%2BzF97A&X-Amz-Signature=be5c4fa182d06c3e1695a4f4ec67447ee2a7a2069d060b527986233acc6271e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6R2OSLS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzF4K8MoAu9q1wU4XuVHpoZTsupA1LAO6ud3Or2%2BWsrQIga97dYJUx44G9vt4MuQTXcBFjiAirnYV%2FZ4jHaY1Y1Psq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOv781kZEii9%2BaXsAircA1BDWs2VWXTITUA0t8g2sPEXg07okkloTd7f0b3gZ0gopVxng%2BBHE2%2BzNeuDrzFcn8VIGxX1Fr29RDPZrx%2Bpo53X2lPkyz3y%2BXJ3s3AbSe%2FVS8FJCvy7Mf9a2EQRLsezMIkOCk%2B3AyjMF%2BpY1Gn9RkLfXNfDGwjRGQ8vn1ctEHn6WiH8tKGN95bRJpuNCCZMw5nPjubelX%2FbuptaPxC5BOSAqezv9fNNKGbAJZhY7pp8Kpp1IAemSxEn9ruzWYr0Kak7z1h5XiMJmKbMitK9vrfbABIDm408Ge6EBCu1RzF1V%2BBpVHjPJsG1kdNgpCAdlftPc3xZ2Ahv1uz7BtjBqv2NUSYHJj7E6gYSFjxw3Dvs3Hkn%2Fj16RS%2BpO7Hpjj%2Fcxo1yFufzE1CgwTLqsHYW5m0TeGivwWe3DvTzZSvqz46kofJHOltIIoKQXjYHwQeL%2FmTQcHCwe9QhtHbOKThNPYaEFeBJoqV1iwtUnfY3UREleDrFkiHn8Ujm9YUg0%2FG5qVoOldT7JdDxJUCDGz6spCaUw2uyO0%2FpG3qQLDOZuNAVqQ56iuyXG2GHC8ymqU4XXEsq2DwEIoU7KEjwRYiuK%2F1GK58eVUY3FDhyECd4JpCMRouGLRdp56wwNkGUMN%2Fsy8kGOqUBIX9Dif4lbPRfiJmoYzxmzhx8kJ2PJswR%2Bau%2BRxCASMgnej7SXrlOS3HplBH9iiusUMYg8vz32DuucsY8nwuWellzhqhU2wwxfVjqId7QXMp32bCxBl1w4sV79r21uH6%2BFS%2BfuMhXlb9rcFa%2FxdY%2F7ZEo3iB3VthZGpE8ZkvP3sh7Fu9OOBri2FvVfz%2BUD9W4fCUzr0LD%2FOZRYdu1hF5FzA%2BzF97A&X-Amz-Signature=f2ba2938278bbb344f9e216939e943455bf160cf0af918f0016b37dbccf0cf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
