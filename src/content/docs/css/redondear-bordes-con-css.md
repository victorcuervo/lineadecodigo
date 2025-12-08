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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DI5BCA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5JNAIKL20q8BMW7bQfxBs1Uqdsf26V7JPfxnHRzIpgIgCa8OS9XJiVHMjPsEnRubf8RSt%2FbUQb0vAS%2Fqj59CliIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMSjgvveD0wUS0wzSrcA%2BtiOXwEsgQ%2B4mftMkfDiUtrTQCdMJyGMOEGYx8FwmbMA7w6qrXF2GA%2BhnTibwZLKr0zm2YrNznZg0BB5L%2BFNOUap%2BQ1ta3uJQrUEr6pRyyVwyKR8%2BHIiFQ2xVuQ0ZeVq4zg3tv7A8tVpZmfGxhwsrDxVRfZhKDcZchPwKOrMuIZQ3WH9QzMg%2BrOBCQQjhMH7Z0%2Bv5aSR2QqoBBF%2BlxgPEgt%2FpVQ3F5p4oOan2iRti0UA4JfQuCDpd1PLZobbJPFXrSzUr2c2oWt0fnQlbA8OWNiQRm9XudGvXrmmU6gauta3RSjBLRsfl%2F71Xd0%2F1cXQZuT%2B77hxe%2BN0faODG%2BbLWLhfGF%2FMyIR09bGJaJYwfnBiBG5%2FPkVtTgv2iBvB06s5zoqCTREQgg9gTbbn%2BUg0CTC1IFTjMMscP7uO3d3PH%2F5L6M1%2F43JlB9s3FrxlhqqviLdQIHX5gbaTIfgwbNMVUxup6ypOw3OtNyu7KI6xWLsP%2FFEN3Neg%2F1pXiYzhdyP%2BChiehlxrrzZMM5eqmJx3%2BFZM%2Bv2pDVczvSXjhhaJ8JYJ6mDpkB0Wan%2F1HWfo0iJCYhZnFqwqkLehgnz%2FPu%2BE0gL4Q4at7UVhmcTrcz4DpcR3POO2C6zJvV7ZflQMP%2Fy2skGOqUB71w5VShrHoaHXTJ9dltFNRNk8YIIC3Cg%2FhCFf1iv2rQkALcBZsiJw68rlxiMFF3Hhv0HtREHKt1%2FoeytuqJ9KmAGiyQ2GUuS4gdE2horB1zD9O%2BopKWO5F6DmW9b40W37zJR%2FlJT8EKvJASuH0ItKHi%2B9sJCVGeP%2FgFJdTIL1FqApt78cXb%2FoXp0ymAsy1uUlDr9yKCY%2BdXS6N8nIHvOXYPNPUeo&X-Amz-Signature=150853008def4590371ce9eb3823d9c8d2bd0c8e6f989763a137db43b8ff5035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DI5BCA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5JNAIKL20q8BMW7bQfxBs1Uqdsf26V7JPfxnHRzIpgIgCa8OS9XJiVHMjPsEnRubf8RSt%2FbUQb0vAS%2Fqj59CliIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMSjgvveD0wUS0wzSrcA%2BtiOXwEsgQ%2B4mftMkfDiUtrTQCdMJyGMOEGYx8FwmbMA7w6qrXF2GA%2BhnTibwZLKr0zm2YrNznZg0BB5L%2BFNOUap%2BQ1ta3uJQrUEr6pRyyVwyKR8%2BHIiFQ2xVuQ0ZeVq4zg3tv7A8tVpZmfGxhwsrDxVRfZhKDcZchPwKOrMuIZQ3WH9QzMg%2BrOBCQQjhMH7Z0%2Bv5aSR2QqoBBF%2BlxgPEgt%2FpVQ3F5p4oOan2iRti0UA4JfQuCDpd1PLZobbJPFXrSzUr2c2oWt0fnQlbA8OWNiQRm9XudGvXrmmU6gauta3RSjBLRsfl%2F71Xd0%2F1cXQZuT%2B77hxe%2BN0faODG%2BbLWLhfGF%2FMyIR09bGJaJYwfnBiBG5%2FPkVtTgv2iBvB06s5zoqCTREQgg9gTbbn%2BUg0CTC1IFTjMMscP7uO3d3PH%2F5L6M1%2F43JlB9s3FrxlhqqviLdQIHX5gbaTIfgwbNMVUxup6ypOw3OtNyu7KI6xWLsP%2FFEN3Neg%2F1pXiYzhdyP%2BChiehlxrrzZMM5eqmJx3%2BFZM%2Bv2pDVczvSXjhhaJ8JYJ6mDpkB0Wan%2F1HWfo0iJCYhZnFqwqkLehgnz%2FPu%2BE0gL4Q4at7UVhmcTrcz4DpcR3POO2C6zJvV7ZflQMP%2Fy2skGOqUB71w5VShrHoaHXTJ9dltFNRNk8YIIC3Cg%2FhCFf1iv2rQkALcBZsiJw68rlxiMFF3Hhv0HtREHKt1%2FoeytuqJ9KmAGiyQ2GUuS4gdE2horB1zD9O%2BopKWO5F6DmW9b40W37zJR%2FlJT8EKvJASuH0ItKHi%2B9sJCVGeP%2FgFJdTIL1FqApt78cXb%2FoXp0ymAsy1uUlDr9yKCY%2BdXS6N8nIHvOXYPNPUeo&X-Amz-Signature=711dcb931b82f01dfb3fe25b8f80976f1f556d60ed3372fe381a77e7d9c6f154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
