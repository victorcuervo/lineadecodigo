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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NNP6NS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5Fztzx0D%2BqmEhSo6LeBgbE1zUPJ3%2FteqPEQsF2%2BfjSAiEAuaN9%2BJ%2FrNitca9%2FFA2xQEelGE25xNB1nNuQNwha1xrcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEuP7rPiAMpq%2FOFmcircA4g4D%2FBsjAupIhfYXvQ4vepR4IAd0o4rfyJTceJTtrQqGIPV%2BGFE0jgj1y5Kn8cU4Zk7RUkGDjDTOb5%2BvRiiVHWZcJAT7oew0mBRKGnN%2Buqug%2BKN9daXlJ3k3kNTKgqmDEQY8y4OjUgcqqlEgtAAgTYQGuqNoGdIrnkJlSp2mp0MF1IgLrGz1yiSlRj%2F7sztFEd%2B%2BfncRKS9Jx4A604cTdZJb0YcbqDGvPnjRlBGPpMmwiYPpq0g6ozm%2Bsu%2BLPEJ1V1q6z0%2FpKRT9m%2Fz5C%2FECliPzD4iahGMbOb9TSlLbcPrJ3gH4ftF6%2FXDtYB9koRFx%2BLExb0At5gDohnnI9gyz5I8qBqBADhtXN0KmYkHrZg3IuVXcX%2FW6ERh%2F4qdSO%2FJA7%2ByI1IHBpPCN%2F0tOHmck%2BZiAznxtUI4S46CnGTPf7pUJzOaJ70vkguifBWb6922BmkfWU4j9sqO8YGSa229Nh69cz7Lg5m5K1LMFwBb3TlPcjDnGyXCEpj6YJOZ0vHLzqSFNIF4aJ2S4igmIfeVQSPUiYGApvvbqNMJ2GXnjdyEeeuQezLo5fc3hP86BXXxCDDrENpa3mteDnj5%2B9Q55GdfZz0ZrW%2FSq1d11cLQDuujTmLwln1BndUBA9jVMNuIzckGOqUBc4IfgZZeMDO2ZKt%2BX8FTiaDTMFRIg4QR5caBQeTDr7z5dQlFKqR4BZP5m0ssx1cK7eMBASSQ0587R9eYwhzPjIxQB0y6dv2DqHncgSZYzI%2BBuIWdYqArePBXHt1Iw5LZQ9LU3AxOKR4Gzmnf4z%2FpdM4fb2VWgEudeD6uxdi1F9keYUAcpRJi0q3Prym7tlI1LstU2uREsqEcuV9rEddArGu4A5%2BG&X-Amz-Signature=9eb2ff062d0fd83a9ffe9fe3ef0546c4742b9e8c89da84b933fe68f53965d571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NNP6NS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5Fztzx0D%2BqmEhSo6LeBgbE1zUPJ3%2FteqPEQsF2%2BfjSAiEAuaN9%2BJ%2FrNitca9%2FFA2xQEelGE25xNB1nNuQNwha1xrcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEuP7rPiAMpq%2FOFmcircA4g4D%2FBsjAupIhfYXvQ4vepR4IAd0o4rfyJTceJTtrQqGIPV%2BGFE0jgj1y5Kn8cU4Zk7RUkGDjDTOb5%2BvRiiVHWZcJAT7oew0mBRKGnN%2Buqug%2BKN9daXlJ3k3kNTKgqmDEQY8y4OjUgcqqlEgtAAgTYQGuqNoGdIrnkJlSp2mp0MF1IgLrGz1yiSlRj%2F7sztFEd%2B%2BfncRKS9Jx4A604cTdZJb0YcbqDGvPnjRlBGPpMmwiYPpq0g6ozm%2Bsu%2BLPEJ1V1q6z0%2FpKRT9m%2Fz5C%2FECliPzD4iahGMbOb9TSlLbcPrJ3gH4ftF6%2FXDtYB9koRFx%2BLExb0At5gDohnnI9gyz5I8qBqBADhtXN0KmYkHrZg3IuVXcX%2FW6ERh%2F4qdSO%2FJA7%2ByI1IHBpPCN%2F0tOHmck%2BZiAznxtUI4S46CnGTPf7pUJzOaJ70vkguifBWb6922BmkfWU4j9sqO8YGSa229Nh69cz7Lg5m5K1LMFwBb3TlPcjDnGyXCEpj6YJOZ0vHLzqSFNIF4aJ2S4igmIfeVQSPUiYGApvvbqNMJ2GXnjdyEeeuQezLo5fc3hP86BXXxCDDrENpa3mteDnj5%2B9Q55GdfZz0ZrW%2FSq1d11cLQDuujTmLwln1BndUBA9jVMNuIzckGOqUBc4IfgZZeMDO2ZKt%2BX8FTiaDTMFRIg4QR5caBQeTDr7z5dQlFKqR4BZP5m0ssx1cK7eMBASSQ0587R9eYwhzPjIxQB0y6dv2DqHncgSZYzI%2BBuIWdYqArePBXHt1Iw5LZQ9LU3AxOKR4Gzmnf4z%2FpdM4fb2VWgEudeD6uxdi1F9keYUAcpRJi0q3Prym7tlI1LstU2uREsqEcuV9rEddArGu4A5%2BG&X-Amz-Signature=2fcf5bde77cb62bd14d7046f4919ff3cb50f3a55deabe00502423342f8f55f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
