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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OOZ5IU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVn%2Bmh33MQVnaFEypH%2FQF2%2Fj36xaE5lgznJRL7KE0KJAIgayIWnlXxPbETDw3N3ha56ukEtC%2F3gQWcD5toNzUm40UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS4bSEiNDQ44IGCIyrcA0sPRgHTEwXmPhw%2BwbbfTmlmLRhf8Uwq9KckDpsKejWGE4sx6GEbdGiPBkWMTc7EZpnfIjz2u37CTu%2BRkvzxOjQOBwsB7rOACqDqQS0%2BVsQmeJApILdFF75eubs%2Fxsm%2FZstZzzKDucWN2bWuATL0CQh3xNMUMv6Vc21JdTYHEKS8UG8boy0xX4GtB7H7R35OIRWLsyZnXooTuBRezi%2BRRwLXVEK0xz00xQi%2FZh97bPe6ES1OZeTgldehw1ulSjhYMrRaK0rj97xvS8yGyHejUSVpifV7hFEEbUXEkgC1IBmNe2NiN7NzU0Z2fY%2BiqTpoLBOLXYsdBlaSzQ7jTQbA9BG%2BE82UNJF14tQ3W%2FIWR3qdj1UVAfjjaaqqnO%2F2WOGwldrbpkNVZWv%2BMfxdhpFEZP1ScSRAe5dbsG4KYz1IyjCWMf4S%2B9ghp5FZjpKQKIJ8IVsX5PTZA6RrTL4OrQvxRuSlMlXYK8HLSdVAr4p1dvau%2FJVcVMSU3aHph%2F87shbU27%2Bnyb92ibKxAIHrRVvYen5MEFjZOkKJqrAID4cSXqkgt9KimN620HkuhFA6wB3nMRKbH5Z0YtIkZm7n495hcPtaDO5l%2Fkso90YIZuD%2FP3X7Zkeigzs2Rs9nbWPhMO2gi8oGOqUBzvq7SpkyWkWa0SPmaNpcU15aVXLh1l1g021XXbVQ6MUrgHd9QCN%2FYpZP6Fq%2BCTvque6MpCb1GPzRekPxTT%2BCQdCJw4KT3FE0xLytZBMPKEMjoJykCsrBkDU8LQL9ER6G%2FI0fJZvWba7CjoLVu2IBZAzWGAiRntvnHZWrH3auU7aqZTBVZBRzRwc%2BKYUVjbA%2BqQFSRztn3QQBP1WVac8uBrbnAomU&X-Amz-Signature=5eb1cd53c1299c0abc43ed6345e3b4a990d7c6f7681b010b076c53d652230d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OOZ5IU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVn%2Bmh33MQVnaFEypH%2FQF2%2Fj36xaE5lgznJRL7KE0KJAIgayIWnlXxPbETDw3N3ha56ukEtC%2F3gQWcD5toNzUm40UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS4bSEiNDQ44IGCIyrcA0sPRgHTEwXmPhw%2BwbbfTmlmLRhf8Uwq9KckDpsKejWGE4sx6GEbdGiPBkWMTc7EZpnfIjz2u37CTu%2BRkvzxOjQOBwsB7rOACqDqQS0%2BVsQmeJApILdFF75eubs%2Fxsm%2FZstZzzKDucWN2bWuATL0CQh3xNMUMv6Vc21JdTYHEKS8UG8boy0xX4GtB7H7R35OIRWLsyZnXooTuBRezi%2BRRwLXVEK0xz00xQi%2FZh97bPe6ES1OZeTgldehw1ulSjhYMrRaK0rj97xvS8yGyHejUSVpifV7hFEEbUXEkgC1IBmNe2NiN7NzU0Z2fY%2BiqTpoLBOLXYsdBlaSzQ7jTQbA9BG%2BE82UNJF14tQ3W%2FIWR3qdj1UVAfjjaaqqnO%2F2WOGwldrbpkNVZWv%2BMfxdhpFEZP1ScSRAe5dbsG4KYz1IyjCWMf4S%2B9ghp5FZjpKQKIJ8IVsX5PTZA6RrTL4OrQvxRuSlMlXYK8HLSdVAr4p1dvau%2FJVcVMSU3aHph%2F87shbU27%2Bnyb92ibKxAIHrRVvYen5MEFjZOkKJqrAID4cSXqkgt9KimN620HkuhFA6wB3nMRKbH5Z0YtIkZm7n495hcPtaDO5l%2Fkso90YIZuD%2FP3X7Zkeigzs2Rs9nbWPhMO2gi8oGOqUBzvq7SpkyWkWa0SPmaNpcU15aVXLh1l1g021XXbVQ6MUrgHd9QCN%2FYpZP6Fq%2BCTvque6MpCb1GPzRekPxTT%2BCQdCJw4KT3FE0xLytZBMPKEMjoJykCsrBkDU8LQL9ER6G%2FI0fJZvWba7CjoLVu2IBZAzWGAiRntvnHZWrH3auU7aqZTBVZBRzRwc%2BKYUVjbA%2BqQFSRztn3QQBP1WVac8uBrbnAomU&X-Amz-Signature=b979272044a257a654969eaae6dc9f9889359745027ba523ad41f781ebeac44b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
