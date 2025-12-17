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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERXEOOP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9rTwg8VcxE3zE3Y9zwAwhE%2FM%2Bs4YncYf%2FzREX%2B7Pg9AiBqCoUpJRGEH8OPqhSqaaerB5vWiNfKLQIIEQKarW%2Fthyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMx6O7iqHoIhsH45BzKtwDQNgsG26mg1frqJ4TLodBlXJAQPVXHnxTZ05lSEW%2Fpc%2FIrz0HMqVMqNghiRA7%2BGzMcFJO2I77RyURJa7SOOeCyBEarwfzubVfkVjiudyvqBFnG3o1glg5LCPGmkV%2Fcp434RizMc9f8YaPI4ZAqMGRITQbc0i4DCvzbU2i%2FTdcCeyhsMwvPDbqApvDRHeMs3N0xlInW%2F%2B7nvCoc0GBJQi1Sh7w1E%2BVNOgLEU40sgpkNtBDrY6uvlkXntdXFta2CRXpnCKVH5ec4ZkDRd4IuF5jeQWfuuj30vK2Wul0aixXX3kCeXPI6sDlxr15jYGgUni5DRrWf%2Br42YcYMBK4%2FgollzidZ1st5V3I668U2dZPx3MSR0ptQzQlsP2ciiZ%2B3AkN94xOfjFs8DHWBhYhybbEOnhbI8rtaq1x9jirTbO7g6HCPOW%2F7QEw4lFACq8efVB4d%2BWq5zNcCSvnq4bNPJYd4gRWOJ7HFCdHTwvAvJy2aNnYa5VhjxpN%2Bsh4M1p9Qu1eGGn7apzofMAKvRdiscWYW%2FF84yWCZCc2a%2FeOn5VTX5b2qkeP5bd68of4UHRsUM2lcVQCn1vRcTSwhBELGprtwZNtAIMSozDWa%2FcH1deYs6CrxgEgvmakFFo5uMgw9N6HygY6pgFGZDq1HcJUwnadrz4gY0Xzf0qaxFz9oowhJX27gO%2BYhrDDYlzjyHcpqERvyHutaUULIl3IOPjYIdjAfz8%2BgEeL3nkjGYBE2q1J0dmbbs59%2Bm3jbTp%2F4b%2FNtX0TjwTn7D6Jj3xwqpWH%2FQSKnni%2BeuDSLsftEq1a%2FOncXNH02jt5N1txY8f8l%2BGTKYfJcaPytxSefl26pA39Rsz7WUp%2FFV5MV3j%2F7wfK&X-Amz-Signature=8281923c4e0b5e7c1ed35935b2f1a94abf14f6ad6ffd4d1e284a21f6c8f6e895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERXEOOP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9rTwg8VcxE3zE3Y9zwAwhE%2FM%2Bs4YncYf%2FzREX%2B7Pg9AiBqCoUpJRGEH8OPqhSqaaerB5vWiNfKLQIIEQKarW%2Fthyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMx6O7iqHoIhsH45BzKtwDQNgsG26mg1frqJ4TLodBlXJAQPVXHnxTZ05lSEW%2Fpc%2FIrz0HMqVMqNghiRA7%2BGzMcFJO2I77RyURJa7SOOeCyBEarwfzubVfkVjiudyvqBFnG3o1glg5LCPGmkV%2Fcp434RizMc9f8YaPI4ZAqMGRITQbc0i4DCvzbU2i%2FTdcCeyhsMwvPDbqApvDRHeMs3N0xlInW%2F%2B7nvCoc0GBJQi1Sh7w1E%2BVNOgLEU40sgpkNtBDrY6uvlkXntdXFta2CRXpnCKVH5ec4ZkDRd4IuF5jeQWfuuj30vK2Wul0aixXX3kCeXPI6sDlxr15jYGgUni5DRrWf%2Br42YcYMBK4%2FgollzidZ1st5V3I668U2dZPx3MSR0ptQzQlsP2ciiZ%2B3AkN94xOfjFs8DHWBhYhybbEOnhbI8rtaq1x9jirTbO7g6HCPOW%2F7QEw4lFACq8efVB4d%2BWq5zNcCSvnq4bNPJYd4gRWOJ7HFCdHTwvAvJy2aNnYa5VhjxpN%2Bsh4M1p9Qu1eGGn7apzofMAKvRdiscWYW%2FF84yWCZCc2a%2FeOn5VTX5b2qkeP5bd68of4UHRsUM2lcVQCn1vRcTSwhBELGprtwZNtAIMSozDWa%2FcH1deYs6CrxgEgvmakFFo5uMgw9N6HygY6pgFGZDq1HcJUwnadrz4gY0Xzf0qaxFz9oowhJX27gO%2BYhrDDYlzjyHcpqERvyHutaUULIl3IOPjYIdjAfz8%2BgEeL3nkjGYBE2q1J0dmbbs59%2Bm3jbTp%2F4b%2FNtX0TjwTn7D6Jj3xwqpWH%2FQSKnni%2BeuDSLsftEq1a%2FOncXNH02jt5N1txY8f8l%2BGTKYfJcaPytxSefl26pA39Rsz7WUp%2FFV5MV3j%2F7wfK&X-Amz-Signature=b8e9e2079fae39832fc752f891d392f718ad9ccb756801f4cdb8c2b4b49fd663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
