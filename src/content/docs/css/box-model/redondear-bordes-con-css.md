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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZXZ5TY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS8%2Fhl3oIpHQSnUHZtnWgv9N1ztLShKWQoNO5Jt25umgIhALfUU1QpZVMEaek80e%2B%2F2NmIfu3pEZYN4JbdsUaSoXi5Kv8DCHsQABoMNjM3NDIzMTgzODA1IgyGnCOE1y2X1ZXdtI4q3AP5%2BS%2B1XkCzFQ%2BBB%2FSZmDAfBvvkpxiAry7acW6cl%2FinVZ2DQANUecjEv04yKm8EmpsstfudrbnYvtFcZpM7F91OW9XBRmnoPFL8V2HKuq7RZehENG1AyepSa9J2KQqC6r0GDU2iHz116%2BxcXK17X05pGImLzH0tnWHj%2B88uBDIFmDRvVrG3CHM%2B1mIZKbyEGnGArDfO5SU%2FRlwQBV9%2FHggniK2ZrnLUJimXVZTMtSpJTWbPmLzOXwkHNR96GwK6lR6wid%2ByflQZ%2FdkT%2FKrH0e91W%2Fsn%2FV%2BuHpyNew9SVPewMPGQ4KFE4GmwuOZwTNJDEnQ9D0GXR%2BzziKIN8ncC2J5ew9f8aEi%2FTh6E0p6Au2HjMDMwfsR9Wk78hzb5CS08aunLXyxmINbdztHrMiruUmGLmU4s%2FJAgUeDN0s%2F7p1Y2%2BIOa3lJxuAs1SOLO6h9r2IJaCmTIJzgUMvkyK1ggXsiG4fiKNqkhoFjeVROwD7IgnD4rS0DIejekR2KWkKEqtYetJUC6HryanE1snyOWT7Ls2EimWbI1EIGSi%2FUbO1MA8TvJLSRZBNAjf2u558Y83YsU7MxST8b6KXS44wJMmVB0yjATXygJ14N7uLKWzH1yvs0bzAg3UAJ49u4z9jDP8InKBjqkAcUugQM2yHRVd4bXQ9u4N6Wxo68RXQqS%2F1aZbnWJOWcyzyIHZc4R6Nk9Vgw2VNKiDN5%2F7VIawF9F%2FKJmNiDMFkEpXitwic%2B%2F6fKUqbzr2s9nrd9KOtEDy2Fk8WDmhK1HXAzBodDbQ534oPeGbi12wnzeNZ0Tl8VCW2UAMSpMSoaz8nEUjXiSTtHjX2oAmcJzmyJjZ%2BgffA0ELkvwgebWm037qalE&X-Amz-Signature=6d4c2c60d19f8500c7ffc70bf95e2bed3bde2775d228849527620a9a9ced5244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZXZ5TY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS8%2Fhl3oIpHQSnUHZtnWgv9N1ztLShKWQoNO5Jt25umgIhALfUU1QpZVMEaek80e%2B%2F2NmIfu3pEZYN4JbdsUaSoXi5Kv8DCHsQABoMNjM3NDIzMTgzODA1IgyGnCOE1y2X1ZXdtI4q3AP5%2BS%2B1XkCzFQ%2BBB%2FSZmDAfBvvkpxiAry7acW6cl%2FinVZ2DQANUecjEv04yKm8EmpsstfudrbnYvtFcZpM7F91OW9XBRmnoPFL8V2HKuq7RZehENG1AyepSa9J2KQqC6r0GDU2iHz116%2BxcXK17X05pGImLzH0tnWHj%2B88uBDIFmDRvVrG3CHM%2B1mIZKbyEGnGArDfO5SU%2FRlwQBV9%2FHggniK2ZrnLUJimXVZTMtSpJTWbPmLzOXwkHNR96GwK6lR6wid%2ByflQZ%2FdkT%2FKrH0e91W%2Fsn%2FV%2BuHpyNew9SVPewMPGQ4KFE4GmwuOZwTNJDEnQ9D0GXR%2BzziKIN8ncC2J5ew9f8aEi%2FTh6E0p6Au2HjMDMwfsR9Wk78hzb5CS08aunLXyxmINbdztHrMiruUmGLmU4s%2FJAgUeDN0s%2F7p1Y2%2BIOa3lJxuAs1SOLO6h9r2IJaCmTIJzgUMvkyK1ggXsiG4fiKNqkhoFjeVROwD7IgnD4rS0DIejekR2KWkKEqtYetJUC6HryanE1snyOWT7Ls2EimWbI1EIGSi%2FUbO1MA8TvJLSRZBNAjf2u558Y83YsU7MxST8b6KXS44wJMmVB0yjATXygJ14N7uLKWzH1yvs0bzAg3UAJ49u4z9jDP8InKBjqkAcUugQM2yHRVd4bXQ9u4N6Wxo68RXQqS%2F1aZbnWJOWcyzyIHZc4R6Nk9Vgw2VNKiDN5%2F7VIawF9F%2FKJmNiDMFkEpXitwic%2B%2F6fKUqbzr2s9nrd9KOtEDy2Fk8WDmhK1HXAzBodDbQ534oPeGbi12wnzeNZ0Tl8VCW2UAMSpMSoaz8nEUjXiSTtHjX2oAmcJzmyJjZ%2BgffA0ELkvwgebWm037qalE&X-Amz-Signature=48b519a6bf5b138edf70b8a21a214e60a26695494175ffb986be4a5d73b06556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
