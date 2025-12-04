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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KKLTCJZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIF0Nui2peFr62OXGB7h0dB1GDXl0SATYxw56vom%2FMjueAiEAk%2BlBgPp3P0Xjr7CaR69O2QdfeOghHrOEGynaTIbPnDoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDK2CpgIGNKe8BhLSJCrcAzERi28YjqfQuwKi1qJc4W4af6%2B0WAAXYKmEvXcVxpISfGlXV2t9Xa5ug8IHRY5FPiCiYNNukIknjKpMMeqJqdBXPeehpzB8V%2Bdzug111op86CPGqayzFCR%2BVRmbUzDOOQYZkdeMqP3rSoU8yas0hy6fs4TTF3s%2BFhHt0c6H5zJt2VlpxNLOwhYP5s2QtdH13B0kbJ21I23CNM0qh1gSBuK%2BkBm21HkrDmMjTCh3a%2BJvHeb3Yvl%2FDUxe6SX3lluwlwRKwriXP56T17wH3KYOmCWd4RXcrBRhX6zEWt9D1EJYdwVDcJi5Frw4RkBbLd1PCEtlSD0l%2BDE4OcfR%2FgJKaainxEHha9uaNOe8JKSGGarhyFi9jQq4PNvriBs5lsFMhp2JMlzGoyCXpzVgUNQ9V2nIk7X29grE3WWsOjHQpbfqnbjxZzVBszp6ewOfugnRBghTCS2zF8k81gAcr3R7fFPYruQGIGFM83XGMGvuw55pLQ%2B89X6h4ZUe3Oq3F3ut%2F0icKaswEbh5OMg9ZzoPVBGKr53o12b%2FmkqZbrMiFOCvNieJjPOuZkhgPw5DJWmcCOvwKDucO6UkzYkMkV8DYGFzh92dnnRJLutTR5oXJ74InDb7ejS%2FFnfbQFo2ML%2FnxMkGOqUBDIh27KCmQRhbwc%2BDInkeX2GpEpfdTBvPegN6NEJIMV%2B83bdaO6izGe5%2FLQklaQe3pTLcpSNTlIOLyfAZKqigpQKNhZVcEq6W1QOtCiLjK5jbS%2F%2FGOUNXChcdqaigAEFKxpZOOTjxU7NWy7%2F46gNqj0KMN%2FiHj%2Bgtv1xr14ug4u6UX2EfNhnr9R1v1rJ3EIzYGy7zYYzn8aA3gRXwFCtoC01wGROy&X-Amz-Signature=c22924ff12caaa148e3da1da0f86b612487e14509e468eae5990912be054c459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KKLTCJZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIF0Nui2peFr62OXGB7h0dB1GDXl0SATYxw56vom%2FMjueAiEAk%2BlBgPp3P0Xjr7CaR69O2QdfeOghHrOEGynaTIbPnDoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDK2CpgIGNKe8BhLSJCrcAzERi28YjqfQuwKi1qJc4W4af6%2B0WAAXYKmEvXcVxpISfGlXV2t9Xa5ug8IHRY5FPiCiYNNukIknjKpMMeqJqdBXPeehpzB8V%2Bdzug111op86CPGqayzFCR%2BVRmbUzDOOQYZkdeMqP3rSoU8yas0hy6fs4TTF3s%2BFhHt0c6H5zJt2VlpxNLOwhYP5s2QtdH13B0kbJ21I23CNM0qh1gSBuK%2BkBm21HkrDmMjTCh3a%2BJvHeb3Yvl%2FDUxe6SX3lluwlwRKwriXP56T17wH3KYOmCWd4RXcrBRhX6zEWt9D1EJYdwVDcJi5Frw4RkBbLd1PCEtlSD0l%2BDE4OcfR%2FgJKaainxEHha9uaNOe8JKSGGarhyFi9jQq4PNvriBs5lsFMhp2JMlzGoyCXpzVgUNQ9V2nIk7X29grE3WWsOjHQpbfqnbjxZzVBszp6ewOfugnRBghTCS2zF8k81gAcr3R7fFPYruQGIGFM83XGMGvuw55pLQ%2B89X6h4ZUe3Oq3F3ut%2F0icKaswEbh5OMg9ZzoPVBGKr53o12b%2FmkqZbrMiFOCvNieJjPOuZkhgPw5DJWmcCOvwKDucO6UkzYkMkV8DYGFzh92dnnRJLutTR5oXJ74InDb7ejS%2FFnfbQFo2ML%2FnxMkGOqUBDIh27KCmQRhbwc%2BDInkeX2GpEpfdTBvPegN6NEJIMV%2B83bdaO6izGe5%2FLQklaQe3pTLcpSNTlIOLyfAZKqigpQKNhZVcEq6W1QOtCiLjK5jbS%2F%2FGOUNXChcdqaigAEFKxpZOOTjxU7NWy7%2F46gNqj0KMN%2FiHj%2Bgtv1xr14ug4u6UX2EfNhnr9R1v1rJ3EIzYGy7zYYzn8aA3gRXwFCtoC01wGROy&X-Amz-Signature=25c844b074b3bbfe2cdaffacc3dba42b0fa39cb40b9a3984317fc0103605600b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
