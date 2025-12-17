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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVZOS4U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3z3gkUsnhytvjYLG08%2F67qo7aMhmkEf55zly2Zc4EAiEAuhEDWILJQJEfWKX5zGAFSxZraO%2FRHX0yUkjCCQq3nagq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGw8bGhzgskFPKmtBCrcAwr%2BbMPYHnpsHl6NXCn6lKI2IP2%2F02a8nq3akEs8FlfZDm0rtLA0azIuxrIdEcPoiiJFRG0bLW%2FDpcSMX92pVMzQf4QGO8pwqReWUXiBeXqOcfzpQ6xEfVgIhBw00Rz%2Buk22coKWTHGv%2FXNhXnV%2FB2BJAl5CtQasnPqUbgtczLcB8j7IMyqex5HFB5zFg9XUruRwWbhayTncyzcd1wdff16WUsfWhUGgWAVTaLu8bK3COdnAuVJcEFtECe1dx%2BDr%2FBm%2BbhghKx18Wfj8NZbc5k%2BaLTHM12Nu8KeaSvBVSnkiHp0SzCzZEEnPNfgNEuxUeaeBO642dMMQKES7z7XBFDETHum%2BpJO4I5yDJUubdauO6tsISh9Qz4sr97iM458WpagUx3GOx1dDqSxZZmCNjH2Q2AL5poZGS%2BMvb8p4q%2B6CU4Ge9ZjQoY3KOPhAaizSlVJi9H6e3SIpEnZLxqk4ePnOeVYuKB8nJLokybPGHbcO6WkLHxF7lG0w%2BfeR0VQwKrKNlwz%2BnBBYiFzhvi0SKNZUk9A8PCQOjoRIEF1t7XdPY3mX9C%2B3OmHvitv8NXSYGhruZYAjQ5D30YTv4Gce6BTYLUZr9M3tYskWhWFAC0SZaN83VSlQ7VDyoaIXMNiDicoGOqUBnzTjy9hbogCB09l4iY1oCqiSlLZ3F%2F3Q1dRl7MLKVO1ohsq0kvEtSdsDxVVDkKDsKsAHBS7YVG9Uhva3b7SiBBkktYKvmVCjwbzcoAVKj4VkWBDCMHG9ZyIKZk1%2BjGJ5MsSRi6oLC%2Fl2FDGOFfSacpFqv4No97W8fq1vTUocff8ZzRnAmsXZYpkKeTjHlFQ97eHicbpa%2BuMTWnaXjXPINXSc3V9b&X-Amz-Signature=3d5a2432992be7127363b8b63f3faa850092184e8fd30144df6047aa6b6e413d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVZOS4U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN3z3gkUsnhytvjYLG08%2F67qo7aMhmkEf55zly2Zc4EAiEAuhEDWILJQJEfWKX5zGAFSxZraO%2FRHX0yUkjCCQq3nagq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGw8bGhzgskFPKmtBCrcAwr%2BbMPYHnpsHl6NXCn6lKI2IP2%2F02a8nq3akEs8FlfZDm0rtLA0azIuxrIdEcPoiiJFRG0bLW%2FDpcSMX92pVMzQf4QGO8pwqReWUXiBeXqOcfzpQ6xEfVgIhBw00Rz%2Buk22coKWTHGv%2FXNhXnV%2FB2BJAl5CtQasnPqUbgtczLcB8j7IMyqex5HFB5zFg9XUruRwWbhayTncyzcd1wdff16WUsfWhUGgWAVTaLu8bK3COdnAuVJcEFtECe1dx%2BDr%2FBm%2BbhghKx18Wfj8NZbc5k%2BaLTHM12Nu8KeaSvBVSnkiHp0SzCzZEEnPNfgNEuxUeaeBO642dMMQKES7z7XBFDETHum%2BpJO4I5yDJUubdauO6tsISh9Qz4sr97iM458WpagUx3GOx1dDqSxZZmCNjH2Q2AL5poZGS%2BMvb8p4q%2B6CU4Ge9ZjQoY3KOPhAaizSlVJi9H6e3SIpEnZLxqk4ePnOeVYuKB8nJLokybPGHbcO6WkLHxF7lG0w%2BfeR0VQwKrKNlwz%2BnBBYiFzhvi0SKNZUk9A8PCQOjoRIEF1t7XdPY3mX9C%2B3OmHvitv8NXSYGhruZYAjQ5D30YTv4Gce6BTYLUZr9M3tYskWhWFAC0SZaN83VSlQ7VDyoaIXMNiDicoGOqUBnzTjy9hbogCB09l4iY1oCqiSlLZ3F%2F3Q1dRl7MLKVO1ohsq0kvEtSdsDxVVDkKDsKsAHBS7YVG9Uhva3b7SiBBkktYKvmVCjwbzcoAVKj4VkWBDCMHG9ZyIKZk1%2BjGJ5MsSRi6oLC%2Fl2FDGOFfSacpFqv4No97W8fq1vTUocff8ZzRnAmsXZYpkKeTjHlFQ97eHicbpa%2BuMTWnaXjXPINXSc3V9b&X-Amz-Signature=b7a1ea93ab42f80405c1bb700b4f0749f78af5c1ec461692f68a82af37112cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
