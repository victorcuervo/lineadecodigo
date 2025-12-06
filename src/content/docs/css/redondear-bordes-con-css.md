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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYXTSQU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRJhklYMYVf1SdZnhjcOMci5IbOl3obwCoKWUauz8lcAiEAyS5GceEzEs0eUVkKl5RO%2FHY%2B5bBcZf82FMmBEM29IXUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAtzojy%2FZ69TXYzC2SrcA4GE9SS91zY%2BuepTLOVzqhi%2F05x8as8PhiH9mUB14esBqrxKOaVLVq5CEyZ0el%2B%2Br6FYsLhgOqjTE0%2BDYmDHnolSvvV9TI6jVzmYRtESv1eP7vf5Ih%2Fw%2FehPHrfx%2Fh610YgnLd600ThnKc0ZewqGfvj3MP1Fvj111BwuB44D7Xioa9aP4aEcd3iBWdJYOXRrpR%2BIAGMd8a%2FAJJUyugCH0OX8MAOlMdZCTAGENxEqvP345GqvBaeQv%2FJ9mjGJ3lVgtqkbzW5LVHApai9jur8IufKqhVLd1t1VNXCvlMsJs8Abjc%2Fqfq3mGuoCf1LIxj35NDpu4%2B%2FXhyxWIePpnTFWHaQNHG%2BRNwTXX7dmm0x2P8F%2BiZcy3LyFzaH2R1w9ILvgCXuZjlrOofZCeizzIAOdn65hE%2FYmKqLXNt75m09pAOUm%2BeR60%2BPnicKuEE3b1Q52GZcFOLjKkL%2BIQ36TNJbDdfTH%2ByypafO6ma96l42hTmRStvqyZ7Jg7FErM6wcNLR4VF%2Ft%2BUNTJkO%2B6njzVUONxT2RXh2KCeBrm8KKPvkZIUT8a9WDGEdL0woYRns9vamVxh%2BWGDC1dDMGmA1uRj%2BHJo6R%2BRy3BGktw6BMpq29WreToB7FHWyAQWxjX%2FvnMPm8z8kGOqUB5l%2F%2Fd4PLT9anE8771aNnzErxARTZt5rj5IfzQgcTCaaL1LaOf7Xg%2F6CEBbFQBRFLdXQ2w4Dcd%2Bj7ZJiKJkk6phupSMT787p9aPN0a6VIazRVcaiYGGhrStTar3zpd%2BWC3KUO%2FTqrHgO6e%2BPCdrgh7%2BSKLU2pUUVEricOWENzdNE0PItrqscIGCGvoaPgO4bKuP1jFGorjsnkgQr4q9XPI1xZ0GAj&X-Amz-Signature=aa03fbaa77ae281ab08ef23765af66fc3a8ca6037015da87fb4398b84c191c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYXTSQU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRJhklYMYVf1SdZnhjcOMci5IbOl3obwCoKWUauz8lcAiEAyS5GceEzEs0eUVkKl5RO%2FHY%2B5bBcZf82FMmBEM29IXUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAtzojy%2FZ69TXYzC2SrcA4GE9SS91zY%2BuepTLOVzqhi%2F05x8as8PhiH9mUB14esBqrxKOaVLVq5CEyZ0el%2B%2Br6FYsLhgOqjTE0%2BDYmDHnolSvvV9TI6jVzmYRtESv1eP7vf5Ih%2Fw%2FehPHrfx%2Fh610YgnLd600ThnKc0ZewqGfvj3MP1Fvj111BwuB44D7Xioa9aP4aEcd3iBWdJYOXRrpR%2BIAGMd8a%2FAJJUyugCH0OX8MAOlMdZCTAGENxEqvP345GqvBaeQv%2FJ9mjGJ3lVgtqkbzW5LVHApai9jur8IufKqhVLd1t1VNXCvlMsJs8Abjc%2Fqfq3mGuoCf1LIxj35NDpu4%2B%2FXhyxWIePpnTFWHaQNHG%2BRNwTXX7dmm0x2P8F%2BiZcy3LyFzaH2R1w9ILvgCXuZjlrOofZCeizzIAOdn65hE%2FYmKqLXNt75m09pAOUm%2BeR60%2BPnicKuEE3b1Q52GZcFOLjKkL%2BIQ36TNJbDdfTH%2ByypafO6ma96l42hTmRStvqyZ7Jg7FErM6wcNLR4VF%2Ft%2BUNTJkO%2B6njzVUONxT2RXh2KCeBrm8KKPvkZIUT8a9WDGEdL0woYRns9vamVxh%2BWGDC1dDMGmA1uRj%2BHJo6R%2BRy3BGktw6BMpq29WreToB7FHWyAQWxjX%2FvnMPm8z8kGOqUB5l%2F%2Fd4PLT9anE8771aNnzErxARTZt5rj5IfzQgcTCaaL1LaOf7Xg%2F6CEBbFQBRFLdXQ2w4Dcd%2Bj7ZJiKJkk6phupSMT787p9aPN0a6VIazRVcaiYGGhrStTar3zpd%2BWC3KUO%2FTqrHgO6e%2BPCdrgh7%2BSKLU2pUUVEricOWENzdNE0PItrqscIGCGvoaPgO4bKuP1jFGorjsnkgQr4q9XPI1xZ0GAj&X-Amz-Signature=a00eb72a3d9e6b64958acbe2242056c7c4a110e363a41bee8af2cc70d824e721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
