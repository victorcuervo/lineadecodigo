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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBLN6QA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDG8TSW39y1B2wwAqMXNp%2BfO3Lry7hWRO8FOBYafbZAQAiEA3%2BPrseMYr%2FLWNYWGMRLwyk9WPNzB4JryNFby6uk1Qugq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDItb0frZKw3u5HFWwyrcAyBJI5TlBEVaqe1nWbVeKgV1na9Z92eBXkgEqwJJ9a%2BpXd4R1BmfX3TT4iYCm5BwA6U2vYiY93ptPV7VVzFGT9HllD1quy02bGL6z2OrleyhTUEcqor%2Bm1olqid9erj6X00bjBpGQzk36HV6adke5TX2%2B25VSuYbLLPBbI7nWp1nKgsxxtJb1pN4BM77q4kh%2FeWHaHSz86TJs3CilfDZFZ%2F5H3uPCsF%2BdFqXBAtfq5xyIl%2FDcegVgJFS6I1YM67Kqm16u9KD5Wh%2Bzs5VpPEWpd2keH6M70sVqCl%2F0CVgNB%2BpUj6PwuCesM5Mnokd0pcIJInVphdHVZtmYIwjDryzM%2B0CvEyw34H8bGlBoXnm6VWNVzSAHxNujNHsIvh5L9Kblx7jSZE41UWXsqQPr4qCz0BNDs%2FKXDAnBrkJgeJtZN1X%2F9z730I9x972q24gmNgRx%2BRIzp5%2BINDOOqnZK%2BzEV%2F0uM8izbU%2FwWyMvfjjxnLDzcjQkInv7Gf1fIz6AgFPJq3IcVlN9mgQ5fClYyrXw1QXXc1dzorNoEZjNcwCqgfsJuOtbvU7DkuoeLGYZWfjy%2F4guVhP6Fou2IetivbjyG%2BUPrjLsJcCp5PwrYyleB%2FcE6jzcH4KUTiUN%2FVlUMOS%2BxskGOqUB4VaO2bq9AtkaPoI0fzmji50kpuNknLV5qqu28O8wVaBb4qrQ7RZ1zJzJlHWFJ4kIXdVOa6FBx91KCWH0sOVPlvuZeeuPilCaMaibwVVnWJ%2BztrXa7EAVvVAgOOREbr7tCsfx%2B1VQc0BHn8ZKBbPwcDDAuIDSWqYe9OA112R%2BeWuStJz02UzzL3Y2INQSCJ73T9lqvI5IQ%2B%2BUf6hpQoMEQze8pP3h&X-Amz-Signature=beabdd93fb7c8a731242cf955c148991650babbb78118fa3602d0a77a7cb4e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBLN6QA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDG8TSW39y1B2wwAqMXNp%2BfO3Lry7hWRO8FOBYafbZAQAiEA3%2BPrseMYr%2FLWNYWGMRLwyk9WPNzB4JryNFby6uk1Qugq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDItb0frZKw3u5HFWwyrcAyBJI5TlBEVaqe1nWbVeKgV1na9Z92eBXkgEqwJJ9a%2BpXd4R1BmfX3TT4iYCm5BwA6U2vYiY93ptPV7VVzFGT9HllD1quy02bGL6z2OrleyhTUEcqor%2Bm1olqid9erj6X00bjBpGQzk36HV6adke5TX2%2B25VSuYbLLPBbI7nWp1nKgsxxtJb1pN4BM77q4kh%2FeWHaHSz86TJs3CilfDZFZ%2F5H3uPCsF%2BdFqXBAtfq5xyIl%2FDcegVgJFS6I1YM67Kqm16u9KD5Wh%2Bzs5VpPEWpd2keH6M70sVqCl%2F0CVgNB%2BpUj6PwuCesM5Mnokd0pcIJInVphdHVZtmYIwjDryzM%2B0CvEyw34H8bGlBoXnm6VWNVzSAHxNujNHsIvh5L9Kblx7jSZE41UWXsqQPr4qCz0BNDs%2FKXDAnBrkJgeJtZN1X%2F9z730I9x972q24gmNgRx%2BRIzp5%2BINDOOqnZK%2BzEV%2F0uM8izbU%2FwWyMvfjjxnLDzcjQkInv7Gf1fIz6AgFPJq3IcVlN9mgQ5fClYyrXw1QXXc1dzorNoEZjNcwCqgfsJuOtbvU7DkuoeLGYZWfjy%2F4guVhP6Fou2IetivbjyG%2BUPrjLsJcCp5PwrYyleB%2FcE6jzcH4KUTiUN%2FVlUMOS%2BxskGOqUB4VaO2bq9AtkaPoI0fzmji50kpuNknLV5qqu28O8wVaBb4qrQ7RZ1zJzJlHWFJ4kIXdVOa6FBx91KCWH0sOVPlvuZeeuPilCaMaibwVVnWJ%2BztrXa7EAVvVAgOOREbr7tCsfx%2B1VQc0BHn8ZKBbPwcDDAuIDSWqYe9OA112R%2BeWuStJz02UzzL3Y2INQSCJ73T9lqvI5IQ%2B%2BUf6hpQoMEQze8pP3h&X-Amz-Signature=70e2acac6da2ba9a3d80743ef755c3166cf9901de101e10ea033521e410c4b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
