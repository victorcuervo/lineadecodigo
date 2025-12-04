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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPU7KLE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF%2B8Avuyn7n7sjKjx%2B5wK8RhTskwGfAvE6t%2FmMZVrcQeAiEAzF0PCvaKwSeS%2BVQbeFvgfwsbkosE0NQpCJRmyUiOE0oq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOcDNnv5b5UxOIQ6wircA2z1lAS0R6IXmPjQAhyA6kp3VwKcTL2TpmKd4VkqB%2FfC7dJdMWBAbyGegVO1u5XtVEGuHN8hzwwr0TNBfqSYyTGgjXX3ubQADeMkiUKdcfgNzYgOz7WMP1LO9TDn3%2B8uuu%2BJdtT4ySlIpiBQivA50T%2BaoIA0y2eX506mLHeYIj%2BNwgdr5RKhjl%2Fb3gWwD56VoVIuRW5%2F3y5aQQlFfHYRRdKwWAnAk%2B2ri3awMBLkfGQcpfdS%2BOonpXUVQeF4kMJWWN36vlj3ZmnFCZibpHT7m8t%2F%2BqMoKiXMpEtTZtz1fpGGmLg7uaPUbV8hBPyOC7wWq9nAMl6HdACqcpkrwnnc%2B1vpcazqeD9LjDebYaAboNC6%2B%2FFZgOvMjaEbvNyV1Q4kv%2FiyDuC%2F7RZqWTB13eYyibLB97LkT2KPIuWBhlx6MgzdWXOO%2Bd3Z0wzVLBDS9vkxS8gCuimSXV1rw%2BtEDZ3SeEeeSjhAQhiluN4OkZzGJc%2BmJu5CFC6WLh0s5vYsEXWMfFrJFexMflqMlv3fXJlpwwIX%2F0Da%2FUed6BvfgxCwnNm1uJGm8uqbdTrWjln26A9IH1O5sWhmRqITrL8XkFiY2fCB57fafGrIcqkpfAIFoWfmg%2Ba4Hp1yvTxoMLR5MMKVw8kGOqUBuEUBRclMLXiioeyGCsADv7Pp7C71RYH5ac0vSMcelMaSpAhwSyJZcVhmdPCCah%2BcDakXmMxW%2FXzV9qpSYkuHOWiuAuPvwOteLDlJcpT9LfNOfCLgPdDRc%2FHpBcctkBZ2yrP5JYFPig6Dy5WFLFTnK25lQXF0exQZYUZY8jodkrrxiZU9kX0GVsYdG%2FxelE6ZMWXtcHDyU13Y3W2LV3FsczTdH9KM&X-Amz-Signature=bb301c0967409e179e10dbfc75ef52acc4ca5127a9c69928900a7466cc7ff292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPU7KLE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF%2B8Avuyn7n7sjKjx%2B5wK8RhTskwGfAvE6t%2FmMZVrcQeAiEAzF0PCvaKwSeS%2BVQbeFvgfwsbkosE0NQpCJRmyUiOE0oq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOcDNnv5b5UxOIQ6wircA2z1lAS0R6IXmPjQAhyA6kp3VwKcTL2TpmKd4VkqB%2FfC7dJdMWBAbyGegVO1u5XtVEGuHN8hzwwr0TNBfqSYyTGgjXX3ubQADeMkiUKdcfgNzYgOz7WMP1LO9TDn3%2B8uuu%2BJdtT4ySlIpiBQivA50T%2BaoIA0y2eX506mLHeYIj%2BNwgdr5RKhjl%2Fb3gWwD56VoVIuRW5%2F3y5aQQlFfHYRRdKwWAnAk%2B2ri3awMBLkfGQcpfdS%2BOonpXUVQeF4kMJWWN36vlj3ZmnFCZibpHT7m8t%2F%2BqMoKiXMpEtTZtz1fpGGmLg7uaPUbV8hBPyOC7wWq9nAMl6HdACqcpkrwnnc%2B1vpcazqeD9LjDebYaAboNC6%2B%2FFZgOvMjaEbvNyV1Q4kv%2FiyDuC%2F7RZqWTB13eYyibLB97LkT2KPIuWBhlx6MgzdWXOO%2Bd3Z0wzVLBDS9vkxS8gCuimSXV1rw%2BtEDZ3SeEeeSjhAQhiluN4OkZzGJc%2BmJu5CFC6WLh0s5vYsEXWMfFrJFexMflqMlv3fXJlpwwIX%2F0Da%2FUed6BvfgxCwnNm1uJGm8uqbdTrWjln26A9IH1O5sWhmRqITrL8XkFiY2fCB57fafGrIcqkpfAIFoWfmg%2Ba4Hp1yvTxoMLR5MMKVw8kGOqUBuEUBRclMLXiioeyGCsADv7Pp7C71RYH5ac0vSMcelMaSpAhwSyJZcVhmdPCCah%2BcDakXmMxW%2FXzV9qpSYkuHOWiuAuPvwOteLDlJcpT9LfNOfCLgPdDRc%2FHpBcctkBZ2yrP5JYFPig6Dy5WFLFTnK25lQXF0exQZYUZY8jodkrrxiZU9kX0GVsYdG%2FxelE6ZMWXtcHDyU13Y3W2LV3FsczTdH9KM&X-Amz-Signature=4d3aa6e744a5a937222ebf427d67918775d59773dbbcd6c4b832798438c01fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
