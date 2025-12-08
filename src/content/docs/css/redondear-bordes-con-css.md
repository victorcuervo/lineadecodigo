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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IOTK7CG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHa803%2Fr7oJUgRWvAc6U0ukNe5MUNvb%2F51jArCVGjmDBAiEA%2BzMiiuZ05o52jWOVPX%2BrPQePZ%2BtNmjAywinE2FZbxjMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcG2RgGyjGljicR0CrcA4zubQu2ZmYV%2BvVSx3ktV0YAP45Ou03tDXBbKCOwuemnReaL87tgWS45Sk%2FRbf2gli6JcIfKaQ2MsKng1oTYS0Dn%2BO5slTrkCufgn2derWIexU1lUY4w8H4e5aQqE8KBu9Jqwv2SKCKU1ee2%2FcfIPjKq0ELefPY4hYsFr%2BR5fBujNiXbVF0B%2Bn3TFrq5M1aZOMOiMSfukj%2BSQBV3tAAzG3PHZALjetYJ8%2BuToyU8kqZwUzUAKKEXCbF7lPEra8R7wlT1CsioXHaiWVjNxWVirBm03pNC6VDBqXw%2FSxTsTVExk9IZaHAIEAH1sBAo15LK3tTOFxiXuBKjvb82%2FW3%2F7m8USTIe60%2BG7J%2Bo%2BrDX7ZU9Er2TQRoIPoH41pWBvlopd42%2FbSZQcedKhFfkOOcPjcdvu%2BX7cz%2BWl%2Bv6xP%2FaKWt7AdypJL%2FNaVurJiy2PDvS%2FKkyx%2F6PflGzcj6M2G8kLiGUkuo%2BIp9iYHcAuZHzHyUMWnYMuvEDjnbvOGEwpx1o%2BrRauP4sJQIquqR3d6Tz5WRZu%2B9iDHLiS%2F6U7VsPnaIOod3Eayp9Tjr0r3AZAmQw9l2N0XcTXSaXe7Ew%2F5r36P9DIrJ6iFJOnUaogXQXr3JXf9WTnNBZG0Eve7t3MOSG3MkGOqUB4m7N0PIwWDSavb4KPTw0%2FLDgaK33Y%2F6VabHE43ufttQC3MHGMVxQoNGFP2OupIR3CSg8JIvAT0pBDPK9fvygDR46g0yEWF12UDQ5QRceaJJvzBXUvOT9AHHJebDF1wenKisb8wtdSrrxL0x33Rd5hUShNOaw2KUoGyZaYi%2FvilTCGJBexCeJzBjuYxkk8KtjO%2BxxeBLKCXFqiqugLAgL5eRXRwZ2&X-Amz-Signature=a4fccf26148a9234ea3166988f97d88e7e8a654335404a10d0f047dca7fe23d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IOTK7CG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHa803%2Fr7oJUgRWvAc6U0ukNe5MUNvb%2F51jArCVGjmDBAiEA%2BzMiiuZ05o52jWOVPX%2BrPQePZ%2BtNmjAywinE2FZbxjMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcG2RgGyjGljicR0CrcA4zubQu2ZmYV%2BvVSx3ktV0YAP45Ou03tDXBbKCOwuemnReaL87tgWS45Sk%2FRbf2gli6JcIfKaQ2MsKng1oTYS0Dn%2BO5slTrkCufgn2derWIexU1lUY4w8H4e5aQqE8KBu9Jqwv2SKCKU1ee2%2FcfIPjKq0ELefPY4hYsFr%2BR5fBujNiXbVF0B%2Bn3TFrq5M1aZOMOiMSfukj%2BSQBV3tAAzG3PHZALjetYJ8%2BuToyU8kqZwUzUAKKEXCbF7lPEra8R7wlT1CsioXHaiWVjNxWVirBm03pNC6VDBqXw%2FSxTsTVExk9IZaHAIEAH1sBAo15LK3tTOFxiXuBKjvb82%2FW3%2F7m8USTIe60%2BG7J%2Bo%2BrDX7ZU9Er2TQRoIPoH41pWBvlopd42%2FbSZQcedKhFfkOOcPjcdvu%2BX7cz%2BWl%2Bv6xP%2FaKWt7AdypJL%2FNaVurJiy2PDvS%2FKkyx%2F6PflGzcj6M2G8kLiGUkuo%2BIp9iYHcAuZHzHyUMWnYMuvEDjnbvOGEwpx1o%2BrRauP4sJQIquqR3d6Tz5WRZu%2B9iDHLiS%2F6U7VsPnaIOod3Eayp9Tjr0r3AZAmQw9l2N0XcTXSaXe7Ew%2F5r36P9DIrJ6iFJOnUaogXQXr3JXf9WTnNBZG0Eve7t3MOSG3MkGOqUB4m7N0PIwWDSavb4KPTw0%2FLDgaK33Y%2F6VabHE43ufttQC3MHGMVxQoNGFP2OupIR3CSg8JIvAT0pBDPK9fvygDR46g0yEWF12UDQ5QRceaJJvzBXUvOT9AHHJebDF1wenKisb8wtdSrrxL0x33Rd5hUShNOaw2KUoGyZaYi%2FvilTCGJBexCeJzBjuYxkk8KtjO%2BxxeBLKCXFqiqugLAgL5eRXRwZ2&X-Amz-Signature=2251055f66fa13d3144ca77992ecea36bd6e260bd9fcc1c35ecb715c577fed41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
