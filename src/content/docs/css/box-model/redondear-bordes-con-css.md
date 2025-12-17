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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DCCXQCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnTJG4ljeZhiMx8NalvW4Mq6fyxo0dBOOvbVZNnKcS%2FAiEAn7rQmfvWTmXxbUZxiTa0DxEjqL8VEslrX6CTXldFrnwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKSSgnjIpzeNqCHqPCrcA7mlqOiWXwMTNQkrGqsrq3sWmen%2FnTGeKAGOYZp9Nw5OxRTa0l3SJhsILzJSkTBYdHJiKrLYBmEEn1ovCLVYmEP7nfaE7Z5f2a6W9y%2FIUIZXaXuJjfWkSWW9mKF%2BteqkMscQByK7b78tlCrmBmxCt5%2BzpBTgihzXftaVby8JnLEp1FlwcSRUsnSCmgQ4mOY1c8zioILTJMtSJyuAvKDNjWp29AXs2GtzzI2MUmVC23%2BEXh3ET50%2Ff7C1Vw%2BOt1Ms6zRBdYn4VmHn%2BtWjAANHDQ7lrOvMxEMjCPLWiQGfLl30yqgDkmbvINvD9X7%2BAuBcnese9gL9kPNUZAmg8y%2BwG4D01m%2Bk%2FWqdnjXQYc9i5L9fGAOX2%2BtR4U248tpvhVL0AfsRcSoFte0laFcXzjRCQT9u%2F%2B%2Bih7P22XMCLmlK6oqmvJpHJ3E%2FW3cYoGVYiaekS4pgnd60MhTk2lKKfPJIy3dWWPTwpTMuFRbu6d4lKskfcWT1EfudPMduXgcdkqwulLX4nk3q%2Ftddzfh%2BtB0pVY9Qfj5kIoWwXgWkOHBIBjI5wZIYNN0Uo0a0x5K0%2F7jOLi2ct24EUMlp9Be1IuFFmDOVd43YhHLp5lPh7ZWzYfX%2Bv%2FLm1M2kfpXZ3FEIMNbvicoGOqUBwqeIpzOJdWnb1mB56raGzKt9qRshlEd2wwcteuELbXXYd1qSnCMyF%2BJJlNQltqsFLMC%2FeNip78hSVDD3QMiTsMOoBZOsgS7z%2BAgXduQXUCRYGABMg57I6oQuA2v0ERQ8ajmc4UmaxUTgXmo4DKnXWiYtQRo7hci742eC%2BFpu76afY9lmygtIvnGRnsPs8Kn%2Bh68Dha9gdgz%2FhTrPOTVRAEf%2BW1G%2F&X-Amz-Signature=1ab20323a5f8050205560fe81bcfc11e277d8cc247ec0d7b5d25f33534fe704f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DCCXQCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnTJG4ljeZhiMx8NalvW4Mq6fyxo0dBOOvbVZNnKcS%2FAiEAn7rQmfvWTmXxbUZxiTa0DxEjqL8VEslrX6CTXldFrnwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKSSgnjIpzeNqCHqPCrcA7mlqOiWXwMTNQkrGqsrq3sWmen%2FnTGeKAGOYZp9Nw5OxRTa0l3SJhsILzJSkTBYdHJiKrLYBmEEn1ovCLVYmEP7nfaE7Z5f2a6W9y%2FIUIZXaXuJjfWkSWW9mKF%2BteqkMscQByK7b78tlCrmBmxCt5%2BzpBTgihzXftaVby8JnLEp1FlwcSRUsnSCmgQ4mOY1c8zioILTJMtSJyuAvKDNjWp29AXs2GtzzI2MUmVC23%2BEXh3ET50%2Ff7C1Vw%2BOt1Ms6zRBdYn4VmHn%2BtWjAANHDQ7lrOvMxEMjCPLWiQGfLl30yqgDkmbvINvD9X7%2BAuBcnese9gL9kPNUZAmg8y%2BwG4D01m%2Bk%2FWqdnjXQYc9i5L9fGAOX2%2BtR4U248tpvhVL0AfsRcSoFte0laFcXzjRCQT9u%2F%2B%2Bih7P22XMCLmlK6oqmvJpHJ3E%2FW3cYoGVYiaekS4pgnd60MhTk2lKKfPJIy3dWWPTwpTMuFRbu6d4lKskfcWT1EfudPMduXgcdkqwulLX4nk3q%2Ftddzfh%2BtB0pVY9Qfj5kIoWwXgWkOHBIBjI5wZIYNN0Uo0a0x5K0%2F7jOLi2ct24EUMlp9Be1IuFFmDOVd43YhHLp5lPh7ZWzYfX%2Bv%2FLm1M2kfpXZ3FEIMNbvicoGOqUBwqeIpzOJdWnb1mB56raGzKt9qRshlEd2wwcteuELbXXYd1qSnCMyF%2BJJlNQltqsFLMC%2FeNip78hSVDD3QMiTsMOoBZOsgS7z%2BAgXduQXUCRYGABMg57I6oQuA2v0ERQ8ajmc4UmaxUTgXmo4DKnXWiYtQRo7hci742eC%2BFpu76afY9lmygtIvnGRnsPs8Kn%2Bh68Dha9gdgz%2FhTrPOTVRAEf%2BW1G%2F&X-Amz-Signature=6f7151b6ad44eba87123572548f9964792a4a8f15733e4d757e77771c7a1a719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
