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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4URFQ2C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5chST0dJkSZhXJl9K6KCKe%2F7e3lgGn0HrgpT7VI%2FEwIhAJ3nSWL%2F41x6pKlFWykHCMPZrdQHaE2Q7ubqZJGNzvxgKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrPN51gFGSynktBcsq3AN%2FVvsbQ1a8noirmRtSL7nVT4Zrws7O2mhx9S9Jjwis4ueM7UeyGWrLmjGAdW5aJktS5s33S9kMosWm5DnOrgkmkcs3rr0EKF9MnLr0v%2FjJ7F8hW%2Fb1j4H%2FE4ls%2BvKRl54VpLvhF15MQDkKQb%2BAlnNs51uooAbQdTYhnwuCfhxNwYXXIQgrovu%2B1pdO9I9wUUshQwC2rfk0kCrpERCic4Qsj%2BPUrC1xyoKNGr3z8ICJtPv8kX%2BVPesWJcqobwZo8DhSIxzh0fegQaFaUakgswGmlhRkyeZswBPYrQBWGPB9Wl1fM4SdeMtwCIEo0vl%2FofW2p10Rvj8mDaFvcP0gTAknLNN%2BXpbc3jJF1N%2FcJ3YpfqRvAbk0pWic7DGFvGr9rotuRR6wiIRgPFkAsdJIaOksT%2F%2FRVhCUuwfURi9ITwRfuSwfO8rGqADZfxBCZbLifjNxLOK7uC%2F2czRUix9ssCZxQhlvM4OI1plQOIZw587FpBs7dwS635g30Gup3AfM0frIVutyhaQeQncuGhdVEP8QjGjP%2FUHLtyNk2yoaOA8snkTB8CucRuaX51kqvsuEXLoNbcK2X2HQJsFrB9Pvy2MCyqxN8IVrt0liJauRn%2BAHPyjlfbRxAvzRtbFk2zCwh9%2FJBjqkAfxdnEgIWeXsqdb%2FrKZuyEwByGfWSpmtRdTSKh76bNwGRqNh3YJ9LDwl0MZ5Oa7Ufeshy6jey0S16Ut4Va8G5yL1Ude6mSiNfkrzTL6lRKIfPhw1pS6%2F0rsmmI8wSqJcQNvmFdaDQiHYHgHqqrAlrtK7wzmdrHENiDJhmE5c5re1AoT3GQwf%2BNeuThaQCurCNWliC3vYoCbIDorsH3d9%2FjL5aam5&X-Amz-Signature=dcb7e1685c2fc49654c73f2536c54116789bc989396eb9bc27705865bd63f9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4URFQ2C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5chST0dJkSZhXJl9K6KCKe%2F7e3lgGn0HrgpT7VI%2FEwIhAJ3nSWL%2F41x6pKlFWykHCMPZrdQHaE2Q7ubqZJGNzvxgKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrPN51gFGSynktBcsq3AN%2FVvsbQ1a8noirmRtSL7nVT4Zrws7O2mhx9S9Jjwis4ueM7UeyGWrLmjGAdW5aJktS5s33S9kMosWm5DnOrgkmkcs3rr0EKF9MnLr0v%2FjJ7F8hW%2Fb1j4H%2FE4ls%2BvKRl54VpLvhF15MQDkKQb%2BAlnNs51uooAbQdTYhnwuCfhxNwYXXIQgrovu%2B1pdO9I9wUUshQwC2rfk0kCrpERCic4Qsj%2BPUrC1xyoKNGr3z8ICJtPv8kX%2BVPesWJcqobwZo8DhSIxzh0fegQaFaUakgswGmlhRkyeZswBPYrQBWGPB9Wl1fM4SdeMtwCIEo0vl%2FofW2p10Rvj8mDaFvcP0gTAknLNN%2BXpbc3jJF1N%2FcJ3YpfqRvAbk0pWic7DGFvGr9rotuRR6wiIRgPFkAsdJIaOksT%2F%2FRVhCUuwfURi9ITwRfuSwfO8rGqADZfxBCZbLifjNxLOK7uC%2F2czRUix9ssCZxQhlvM4OI1plQOIZw587FpBs7dwS635g30Gup3AfM0frIVutyhaQeQncuGhdVEP8QjGjP%2FUHLtyNk2yoaOA8snkTB8CucRuaX51kqvsuEXLoNbcK2X2HQJsFrB9Pvy2MCyqxN8IVrt0liJauRn%2BAHPyjlfbRxAvzRtbFk2zCwh9%2FJBjqkAfxdnEgIWeXsqdb%2FrKZuyEwByGfWSpmtRdTSKh76bNwGRqNh3YJ9LDwl0MZ5Oa7Ufeshy6jey0S16Ut4Va8G5yL1Ude6mSiNfkrzTL6lRKIfPhw1pS6%2F0rsmmI8wSqJcQNvmFdaDQiHYHgHqqrAlrtK7wzmdrHENiDJhmE5c5re1AoT3GQwf%2BNeuThaQCurCNWliC3vYoCbIDorsH3d9%2FjL5aam5&X-Amz-Signature=6dac6557ca9b9544bc242d99a8c8c444a0871abfcbdceee5eab0a95ba7261335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
