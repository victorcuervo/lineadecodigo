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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX6MI5MU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjikomBRdIiJ9RUohnRZI%2FVVc19ch3CrGp8P%2FWUM85CAiEAmYMwsDoAiKdMK8ImRNgxpinZoVCYRtoL7ie4oEwKFxkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1eV1UVB9rC71M6RCrcA09djs9UTovTdxU4ns5v2N96yeEbqG7N%2F5hKRJi02FNs6ujLY%2FOqL2YBH8kXPHY%2B%2FA%2B7OpctGAzM4OWOvictOHvQErvICwRzSgLR2Bs2S5XV34fftGODLZQhObP9oNBosEH4ygChpCrm%2BYbJ6liGOfHHe4fkBhSvxxX%2FJRnyrvu8Q8sGcbgBuDZEkbGwjG0A3SfPFQ%2FgBYxcdxB6XFddXhqk6YOWNitN%2FhQp2WtVL05c34plXQyJId2svSHfj7qKWVzG%2FenGKkXtAymNUOYRBXZZWZro0LgSgpGnHUbFcz82RXIWpJlj3RBsVBLrWvtXdtKmV7K47B3QSqm4%2BFvCll6rpTfkUFWQTFfDevNwWh4cqxlulptoDJLnd%2BCwBRt%2FBeAi6JxFettTJiyLGUOOsmHqsYhFl9RFtGy%2F5KXQok6Bi7B9C%2F0U15Yx2dTZE20CIbkWQv1vGEKPrjPKdnvoYsv%2B8G%2BCDDR5MeUlVtmIHoUHYMfCX5TxXm4gHQ%2FLs5xi%2FZ4FTQxjPwDiTMdubdfGUW7UtoTFGFeKSZzy7MaRpmFtxC4Mke3R0%2By56fTCI2EIT7J1N7nz6TE2rFrp7KU3D3UZ11msVgJ%2BaPwsvLVZxtYfYw0nNwRFn6D%2FnsWKMNCU2ckGOqUBZ%2BzmlYxYGh2a8UIHOuKMnt08lZrMxIXm2dfVQfk%2Fy%2B3GhbQo5hz5SVolWQLhrbd3n93PrBOoUg2tdDvCIoGtVfMxGxqI3Ifddvq5mnkbglIEH21CxQqF7Aw2sZjlvAixpu7iXpIzgTid%2FB7uKbnmln9i5Rx26xbg3nQnYY9Xy2ybg%2B9%2FjowBCHhlYMvYN3t1Wn8F1CBZfBoBURH%2FRsJ2J8ozc0n%2B&X-Amz-Signature=f5d07176eea0838973406ffdfc104717409193dac756c5472c30f7a63c346abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX6MI5MU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjikomBRdIiJ9RUohnRZI%2FVVc19ch3CrGp8P%2FWUM85CAiEAmYMwsDoAiKdMK8ImRNgxpinZoVCYRtoL7ie4oEwKFxkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1eV1UVB9rC71M6RCrcA09djs9UTovTdxU4ns5v2N96yeEbqG7N%2F5hKRJi02FNs6ujLY%2FOqL2YBH8kXPHY%2B%2FA%2B7OpctGAzM4OWOvictOHvQErvICwRzSgLR2Bs2S5XV34fftGODLZQhObP9oNBosEH4ygChpCrm%2BYbJ6liGOfHHe4fkBhSvxxX%2FJRnyrvu8Q8sGcbgBuDZEkbGwjG0A3SfPFQ%2FgBYxcdxB6XFddXhqk6YOWNitN%2FhQp2WtVL05c34plXQyJId2svSHfj7qKWVzG%2FenGKkXtAymNUOYRBXZZWZro0LgSgpGnHUbFcz82RXIWpJlj3RBsVBLrWvtXdtKmV7K47B3QSqm4%2BFvCll6rpTfkUFWQTFfDevNwWh4cqxlulptoDJLnd%2BCwBRt%2FBeAi6JxFettTJiyLGUOOsmHqsYhFl9RFtGy%2F5KXQok6Bi7B9C%2F0U15Yx2dTZE20CIbkWQv1vGEKPrjPKdnvoYsv%2B8G%2BCDDR5MeUlVtmIHoUHYMfCX5TxXm4gHQ%2FLs5xi%2FZ4FTQxjPwDiTMdubdfGUW7UtoTFGFeKSZzy7MaRpmFtxC4Mke3R0%2By56fTCI2EIT7J1N7nz6TE2rFrp7KU3D3UZ11msVgJ%2BaPwsvLVZxtYfYw0nNwRFn6D%2FnsWKMNCU2ckGOqUBZ%2BzmlYxYGh2a8UIHOuKMnt08lZrMxIXm2dfVQfk%2Fy%2B3GhbQo5hz5SVolWQLhrbd3n93PrBOoUg2tdDvCIoGtVfMxGxqI3Ifddvq5mnkbglIEH21CxQqF7Aw2sZjlvAixpu7iXpIzgTid%2FB7uKbnmln9i5Rx26xbg3nQnYY9Xy2ybg%2B9%2FjowBCHhlYMvYN3t1Wn8F1CBZfBoBURH%2FRsJ2J8ozc0n%2B&X-Amz-Signature=ae93368083d9a7fb7d18d27190ac8f6d75ad10bf9bea7423f64c00f942851438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
