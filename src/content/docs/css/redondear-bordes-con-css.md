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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMFLEQG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBHqWafwZDDnKKHec35aH6GTJ%2FC8XhX%2FoFiHQno7vt%2FIAiAhMCbiSOqJ46pLBISrdfC4xFthkrTCXkWQAoRMtAgEyyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMPtaJz%2F%2Bv6JCiVKydKtwDDFMlYHyiVkNCd6Lroswdb21vCfVN4JxjlAic6ibCegpHJzFHiieX1LQAk9N%2FXYdmgRODq9GJFLu8gk5kQPCya3L%2BV7ulVLnH1%2BSMxTYtf%2Bgmy4EcE8aFEavfkeP1t%2BNYK1BP5gRaho0Zey0ShiIwZ7GvV4nZP0uJ%2Bh0XLQg1P7tvNF9PywIwtxmajp1%2Bw%2FkGo%2BdyD9TDQ2P7AhLwYG6zSvU0ontDPRtz552WyKRzrLfVEe6JLDyU7mWD4tVtzNL2cJ%2FUR9dn6SiVMF2pw00XMwVgoZPIe%2BZoVICbne70m7P9t0yMy2oGzbvw3JN3JlFQMs5p%2BjLLzqkI%2BTW9iDf41tg3v%2B5YaFxPeFoeWhsRr8mNLQBudxFGXLn9L3lA7MTe3IpwsyqEkEabA7x7mrPcPAgPqgPPA5yoBrLq8LjXMWstohKT9jMn7As7TRI6O%2FwlqI0qEqoBy3XuHS9PejDgsZ1QV6w%2FbwubgXUU%2FNWU4vW2cj9AYEErI8%2BRhTV%2BmugfG6xwGlgGfs5wOU0tGUFT3IxLeWd2odQm2Wni4xGieHqcY0MsPPuRl0OjYzr4UnvAw5F3wfp9dmqwf27fLmoKs5PsZiWN5mZhOjOpJQgBnil6jafaVl3Y8sUr7qMw4%2FfCyQY6pgFuwvXG12XFMuzOQ3nYFMJjazUZJpwc1FXUxXFW9G%2BzxhM5l11bq9Z9G6GyhHQlhxTTKgjH6hhHH3k3jBiS6pQmJe6G4IAgI4mODaSroVDwadb3in%2F6D2hw8BM3JJe3rA%2B5zt%2FA5j3qQ9wjfQsM2dJSgF5KtwPcKPE6zL6D8zoYa5uGY9JAPwPPdM87nyUuCTlHpEXn2VjivGHuFLC4D6K%2B9K57v45w&X-Amz-Signature=614ab7053cb0ef6c34a7431ddca68e2f75c2f61ccf642728bd49fb06a329e394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMFLEQG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBHqWafwZDDnKKHec35aH6GTJ%2FC8XhX%2FoFiHQno7vt%2FIAiAhMCbiSOqJ46pLBISrdfC4xFthkrTCXkWQAoRMtAgEyyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMPtaJz%2F%2Bv6JCiVKydKtwDDFMlYHyiVkNCd6Lroswdb21vCfVN4JxjlAic6ibCegpHJzFHiieX1LQAk9N%2FXYdmgRODq9GJFLu8gk5kQPCya3L%2BV7ulVLnH1%2BSMxTYtf%2Bgmy4EcE8aFEavfkeP1t%2BNYK1BP5gRaho0Zey0ShiIwZ7GvV4nZP0uJ%2Bh0XLQg1P7tvNF9PywIwtxmajp1%2Bw%2FkGo%2BdyD9TDQ2P7AhLwYG6zSvU0ontDPRtz552WyKRzrLfVEe6JLDyU7mWD4tVtzNL2cJ%2FUR9dn6SiVMF2pw00XMwVgoZPIe%2BZoVICbne70m7P9t0yMy2oGzbvw3JN3JlFQMs5p%2BjLLzqkI%2BTW9iDf41tg3v%2B5YaFxPeFoeWhsRr8mNLQBudxFGXLn9L3lA7MTe3IpwsyqEkEabA7x7mrPcPAgPqgPPA5yoBrLq8LjXMWstohKT9jMn7As7TRI6O%2FwlqI0qEqoBy3XuHS9PejDgsZ1QV6w%2FbwubgXUU%2FNWU4vW2cj9AYEErI8%2BRhTV%2BmugfG6xwGlgGfs5wOU0tGUFT3IxLeWd2odQm2Wni4xGieHqcY0MsPPuRl0OjYzr4UnvAw5F3wfp9dmqwf27fLmoKs5PsZiWN5mZhOjOpJQgBnil6jafaVl3Y8sUr7qMw4%2FfCyQY6pgFuwvXG12XFMuzOQ3nYFMJjazUZJpwc1FXUxXFW9G%2BzxhM5l11bq9Z9G6GyhHQlhxTTKgjH6hhHH3k3jBiS6pQmJe6G4IAgI4mODaSroVDwadb3in%2F6D2hw8BM3JJe3rA%2B5zt%2FA5j3qQ9wjfQsM2dJSgF5KtwPcKPE6zL6D8zoYa5uGY9JAPwPPdM87nyUuCTlHpEXn2VjivGHuFLC4D6K%2B9K57v45w&X-Amz-Signature=430d78b94e74aa2e6f6a930daa993f1dec30281480557a43c7fd11c9ffad4915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
