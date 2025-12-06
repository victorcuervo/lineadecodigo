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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XZRTQ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG369J4nQIgiquHr83W2P67qDW6eLZ7Yn1cLEIwNpFdFAiBnsw6iHQ3BECk7cwmxe%2BiCDwLxLsw8p4bmPt9ZKA2a9ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMEsTrVqMiDn57P7WrKtwDuTAYpLpDciYNviopyTYVCwkA9DL2nfSSWXQv3Hya7NfG%2FyfwQXQ4ENX0ONbnETsMxGiAUeffVy5963UsUGec%2FN8%2B89JVxOyU2fK0WNb3JifHCtMbL17jWc2qf1pMV69EFWy5FafvKNa3PlooY0oChoyiEqv%2BBMak%2FE0oiFojIDaXPneumnP52%2F3lyqLsVVohZjuV4gJusfJ4HBVQFOYarg8T0IObXyvDbIUdkMh4xywyvTvUdMhBjnMZVDKy3SuAYtECJVge67Y7ZFgdYOjW7WMi17OeTQRyusBQCuwrHjvL1LaGZo8U0ZQy8jh%2FEksnQZlRPsAkLB5GGXOiXNDOgX4ASsyEwgIfDlhix72MWgu9t%2BjV%2FQlIgCn89%2BOuwwpovbL18gYmzoK%2FFjru7jBJ%2FMaXvCgqi4I2eJn5PPn8%2FkpB3EfTlOXUuirtEU0TiHTduwmiZkOs%2F0qnMT%2BoLvLMzslU4X7pEuJdCPuxrD4huydzeLtMuZBEn2EX60nQkvD8%2BlmuRCdQaxi5XEeOpgosRpR9WDggI3ONQmDvu1bO6Re3ctSq6KRX4nirjt%2B1vfcN6%2FID%2B8pJw29TdZXeCslq%2BF0%2F9pUe5GLRg11E6ZayqNJJ0b4WKviDnMGPKwAwnePQyQY6pgGNSPfo3yxHz5eH9L35WOEn1O9STxXRVQ7YqqorszOAAYGPbh81FIFQi1A6XTlbwZOubWw8lXOoeaWSAJrllahm3aGuFqmn%2FV8m%2FKh9a3TU9OiVPy8OtbYFxW0vDo4fJjk4z%2Fvk8ICH%2FruXsiFFmks21hyCik1DdR6v83PjRu7xM9tmtE809qjvqKWQ1bw3OZZGJq9JeaUHwZVIZqeBKt%2FkC3ez6hCY&X-Amz-Signature=94b2a3a1640ae6843dcd1239bdef0430bc4be2a6f15ce544e1aae6cfbfd992d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XZRTQ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG369J4nQIgiquHr83W2P67qDW6eLZ7Yn1cLEIwNpFdFAiBnsw6iHQ3BECk7cwmxe%2BiCDwLxLsw8p4bmPt9ZKA2a9ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMEsTrVqMiDn57P7WrKtwDuTAYpLpDciYNviopyTYVCwkA9DL2nfSSWXQv3Hya7NfG%2FyfwQXQ4ENX0ONbnETsMxGiAUeffVy5963UsUGec%2FN8%2B89JVxOyU2fK0WNb3JifHCtMbL17jWc2qf1pMV69EFWy5FafvKNa3PlooY0oChoyiEqv%2BBMak%2FE0oiFojIDaXPneumnP52%2F3lyqLsVVohZjuV4gJusfJ4HBVQFOYarg8T0IObXyvDbIUdkMh4xywyvTvUdMhBjnMZVDKy3SuAYtECJVge67Y7ZFgdYOjW7WMi17OeTQRyusBQCuwrHjvL1LaGZo8U0ZQy8jh%2FEksnQZlRPsAkLB5GGXOiXNDOgX4ASsyEwgIfDlhix72MWgu9t%2BjV%2FQlIgCn89%2BOuwwpovbL18gYmzoK%2FFjru7jBJ%2FMaXvCgqi4I2eJn5PPn8%2FkpB3EfTlOXUuirtEU0TiHTduwmiZkOs%2F0qnMT%2BoLvLMzslU4X7pEuJdCPuxrD4huydzeLtMuZBEn2EX60nQkvD8%2BlmuRCdQaxi5XEeOpgosRpR9WDggI3ONQmDvu1bO6Re3ctSq6KRX4nirjt%2B1vfcN6%2FID%2B8pJw29TdZXeCslq%2BF0%2F9pUe5GLRg11E6ZayqNJJ0b4WKviDnMGPKwAwnePQyQY6pgGNSPfo3yxHz5eH9L35WOEn1O9STxXRVQ7YqqorszOAAYGPbh81FIFQi1A6XTlbwZOubWw8lXOoeaWSAJrllahm3aGuFqmn%2FV8m%2FKh9a3TU9OiVPy8OtbYFxW0vDo4fJjk4z%2Fvk8ICH%2FruXsiFFmks21hyCik1DdR6v83PjRu7xM9tmtE809qjvqKWQ1bw3OZZGJq9JeaUHwZVIZqeBKt%2FkC3ez6hCY&X-Amz-Signature=e366e6843777068e7f1ef79958a37e807262dbe72b2498221c1db18cc241dd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
