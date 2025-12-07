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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKWGI3H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgMukjRxuqvLZ3ciaN7G5g3EERP3pJopQswainxPrdWwIhAM1GcKO1t6aN%2BuHcUvMQ89eehG%2Bs2ja2NVK6iCrflbdaKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9CeFBmQFuwxTv448q3AMqcD%2FvvVysXZyhxu%2B5MQNluW8ekSe8z%2BftjaBz86IArb58MeAiQ8a42pnKXNhepdzuePaMLoKCVWy9zFw6Z53P75Bfh28QhhP7oGtjwWWHjBxtIOUMqyr3AFJhF3QAvC71gyL%2FhEL2JhyjiSNqV1bfHtkNiVrBEaUcbfHceIQVvC1AZIHlOwyrMxmmcYra%2BNZ%2BsifUKfRxJiHsHElnE%2Fiy%2Bk1QJ3VE68a%2F8GYz%2BaiRdpPICLnIQoq%2BzoSC2AbCas5f851erBGBb%2BzfrqL4KY%2F8q%2FWj%2BdgsmyzoEbZvzBKxw5SYOE1a7tnIObjTrlS8KbZvx3VWnZvNHcEvpXwev%2FELRnplzNdOG3OoqzhyFH%2BTsb%2FBaspWIMrQe19AYXhLn6aIWgsaFITtaPA3km0A1IDwa7qVB0dP7XzTv5FVeZoLTDO%2BEbkzeCMCut9EvybWMypfCw%2BHIggFEjl%2Bh%2FaRq5VtsgirLP1mhtuTOHTS6QH31N9r%2B%2BBnG5EsoT3ZnrBKoYqpntAznkED%2F%2FEExFnQ%2BpuvfXkxyfmuDjJHH1XaaQwm9HjbB3RnEZ31fAFtPz%2B40XpnM%2BQnEKJy6y29LhatMkzjxDjAPjFJuK4%2FI%2BVJ%2BFmnGFdkHzAmmJyzePq1%2FjDQnNTJBjqkAZfgpBKkvhYa5exgz7u5k4ezAOnzDsafrPUOlWGXQNYLQUGBv%2B5sQSPFPv812P1jB36s519OJOZ%2Br0iBAKq7R0tbO5FUHSvjnIyzotePnmZZ8uWufUcxruUqFpDexYlmfCw9OniyqSJc2f%2FfL6XgkIfflPazY7pk3zCAwRgV71i0Pz7%2F4c%2Fza1eXC%2BxuyQIvVfMknS3BIvHyUmFoJce0PVOR4Ugb&X-Amz-Signature=e69a603a70393573488be45d36f4b4b5694e3dc32393a5a33463f51be478161b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKWGI3H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgMukjRxuqvLZ3ciaN7G5g3EERP3pJopQswainxPrdWwIhAM1GcKO1t6aN%2BuHcUvMQ89eehG%2Bs2ja2NVK6iCrflbdaKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9CeFBmQFuwxTv448q3AMqcD%2FvvVysXZyhxu%2B5MQNluW8ekSe8z%2BftjaBz86IArb58MeAiQ8a42pnKXNhepdzuePaMLoKCVWy9zFw6Z53P75Bfh28QhhP7oGtjwWWHjBxtIOUMqyr3AFJhF3QAvC71gyL%2FhEL2JhyjiSNqV1bfHtkNiVrBEaUcbfHceIQVvC1AZIHlOwyrMxmmcYra%2BNZ%2BsifUKfRxJiHsHElnE%2Fiy%2Bk1QJ3VE68a%2F8GYz%2BaiRdpPICLnIQoq%2BzoSC2AbCas5f851erBGBb%2BzfrqL4KY%2F8q%2FWj%2BdgsmyzoEbZvzBKxw5SYOE1a7tnIObjTrlS8KbZvx3VWnZvNHcEvpXwev%2FELRnplzNdOG3OoqzhyFH%2BTsb%2FBaspWIMrQe19AYXhLn6aIWgsaFITtaPA3km0A1IDwa7qVB0dP7XzTv5FVeZoLTDO%2BEbkzeCMCut9EvybWMypfCw%2BHIggFEjl%2Bh%2FaRq5VtsgirLP1mhtuTOHTS6QH31N9r%2B%2BBnG5EsoT3ZnrBKoYqpntAznkED%2F%2FEExFnQ%2BpuvfXkxyfmuDjJHH1XaaQwm9HjbB3RnEZ31fAFtPz%2B40XpnM%2BQnEKJy6y29LhatMkzjxDjAPjFJuK4%2FI%2BVJ%2BFmnGFdkHzAmmJyzePq1%2FjDQnNTJBjqkAZfgpBKkvhYa5exgz7u5k4ezAOnzDsafrPUOlWGXQNYLQUGBv%2B5sQSPFPv812P1jB36s519OJOZ%2Br0iBAKq7R0tbO5FUHSvjnIyzotePnmZZ8uWufUcxruUqFpDexYlmfCw9OniyqSJc2f%2FfL6XgkIfflPazY7pk3zCAwRgV71i0Pz7%2F4c%2Fza1eXC%2BxuyQIvVfMknS3BIvHyUmFoJce0PVOR4Ugb&X-Amz-Signature=0a0f0502530b8498bbae7c07b7770331959963a546706dd92f2203cf3d16c6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
