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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZKZUCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfFxCk66AovkekAZEO3VFYRJFruiFYmj%2B3CjUulLlI2AiBST6qMqzu0qnAln8w2MNa5JP2rg4NafbE2ESTmmp6EsSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsFh4z3djAi%2BkGEL3KtwD9yTcVnSFyjhUpb6DltU0%2FWR9O4H22kqEJ4w3VqbbBKdTUCOS%2FFskzPYkrWKkb3WorisKMhh6blvydAvIqJax17rT1U9v3eEokWe%2FPPjhwwbBWjBC6Ft2BRnw3e4VUSSryrSegl7DIPS1SGcfL2NjbRVnoHMJFnixWPCxSKGfTuJ27HzTrLxcG1cr1DXaEb9X0qdGpHq%2BNm%2FRFzk4Z8Aj%2B2HZQKy2aYCIpIs45h2WW59mAB6Ia1khkUpjLwwOwLJXYMfBmNCRVQqAk71h3ADMoaHmLxhmDrZih7URE9DJ5LUU438uPz58DFDct6bFTaa0sTgnEDKXghnKZiYP43Df6GriGp6YtuhEtbP%2Fkv2gpoI5gLcQkUeTExB2Yi0kN7OYxYiQsPnm0XVqYc9nwaO275%2BeYC0Wz%2FT8RUoNLoqJHvwlZEhRiKO%2FKDoCkfh%2FAt0cHY0wL7b80dlgNhMnYASlPqp8AuS9apKYry84C%2FA%2Fck8bzclWOv7ZZtujNnfE%2FKV5JdWewVrb9oU7MIvHq1lALxxMH9lHPktkIOWxPvWcKG6vzqt0DWE0aq1%2F6rvnzZ41m%2FhyKR88DgShSYcqnvEeUdh%2BRAbdLi5O0QR%2BNCR1IvUIvNTNC%2BaebqR7m54wwu3ZyQY6pgHQsL0d48KeDFAemksMcPzcXxxzXBUSuSpORlkuBrthVhi0fnKcxFJFRNz9DFh6i36D%2B5BlQZV3GmpuqD9TwhQHLZx9EnsVA%2B4s8TRzKzvcpOq4tPaSLs7qOkxcrgHOmRO1PPKKHIIr%2BMKCKRHgVfMDnSYJxotMb8VFFa6FpWV%2BLO6y5Ab6c0q91pmoKT0r8cpL1ToGVgvt%2BTT8ElKKfKGZEEar9jzh&X-Amz-Signature=0721852a92dcfc954722bbeed75b7e85c1462e6c0b5ca79ba9450751d64ae2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZKZUCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfFxCk66AovkekAZEO3VFYRJFruiFYmj%2B3CjUulLlI2AiBST6qMqzu0qnAln8w2MNa5JP2rg4NafbE2ESTmmp6EsSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsFh4z3djAi%2BkGEL3KtwD9yTcVnSFyjhUpb6DltU0%2FWR9O4H22kqEJ4w3VqbbBKdTUCOS%2FFskzPYkrWKkb3WorisKMhh6blvydAvIqJax17rT1U9v3eEokWe%2FPPjhwwbBWjBC6Ft2BRnw3e4VUSSryrSegl7DIPS1SGcfL2NjbRVnoHMJFnixWPCxSKGfTuJ27HzTrLxcG1cr1DXaEb9X0qdGpHq%2BNm%2FRFzk4Z8Aj%2B2HZQKy2aYCIpIs45h2WW59mAB6Ia1khkUpjLwwOwLJXYMfBmNCRVQqAk71h3ADMoaHmLxhmDrZih7URE9DJ5LUU438uPz58DFDct6bFTaa0sTgnEDKXghnKZiYP43Df6GriGp6YtuhEtbP%2Fkv2gpoI5gLcQkUeTExB2Yi0kN7OYxYiQsPnm0XVqYc9nwaO275%2BeYC0Wz%2FT8RUoNLoqJHvwlZEhRiKO%2FKDoCkfh%2FAt0cHY0wL7b80dlgNhMnYASlPqp8AuS9apKYry84C%2FA%2Fck8bzclWOv7ZZtujNnfE%2FKV5JdWewVrb9oU7MIvHq1lALxxMH9lHPktkIOWxPvWcKG6vzqt0DWE0aq1%2F6rvnzZ41m%2FhyKR88DgShSYcqnvEeUdh%2BRAbdLi5O0QR%2BNCR1IvUIvNTNC%2BaebqR7m54wwu3ZyQY6pgHQsL0d48KeDFAemksMcPzcXxxzXBUSuSpORlkuBrthVhi0fnKcxFJFRNz9DFh6i36D%2B5BlQZV3GmpuqD9TwhQHLZx9EnsVA%2B4s8TRzKzvcpOq4tPaSLs7qOkxcrgHOmRO1PPKKHIIr%2BMKCKRHgVfMDnSYJxotMb8VFFa6FpWV%2BLO6y5Ab6c0q91pmoKT0r8cpL1ToGVgvt%2BTT8ElKKfKGZEEar9jzh&X-Amz-Signature=21ae971eb41c6c7534c7cbad10f9b2075905af0dd993dffafcc84d4825d82172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
