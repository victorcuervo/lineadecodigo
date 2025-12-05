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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYZR76DT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIxs4WkADu7faJrqAzFsEfaolC1bPDrnxx8ZywLMwpAAiAv3gzkbZeurVl4t00OE5CiD1Ctr7N3VOFpKDFzxZ4Q1yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMihOSsM1E8crwQRBEKtwDGuDE%2B8%2F%2Fq4VbNjlACUFD7SpTUyktR1UaxgsLy1cYm1ceECbgPLtP5GD7ColcvzHSfy1FeFZhNEAgbZvvs5tAG4jF4lRUWbstMSGmkDBPTjQlOdBzN3qhVZowvjvoIFIwmoW4zkdcRTZ124ibXo0Ec5nNuPFU3KxZpvg2j%2Fa817et6JZ5EZcwYfUjEIyURccwLLyDUkNNu0ltKhgSL2UZ8FXS7HSocGpJVVYyOmrvIoTmJIodRMszkxPGyrqIPJ8Dhq1PJh8Rvj831SBZucUokwv7efVQp1hArfVnZkgfSitpFSK5QaJiyWa8ny%2ByEesZjpEFccDqWg5cWmkRgzKpQhVNFeEOujgmvbFF2iVKB7SMt0F6AJrjnrHir%2F%2FNJHwv2iYZwkllTNDUJlr%2BDcoTCwcytfaaqP4RQYCK6NperM8ko1ul%2FpG0b8GYzlu04APanoxvgqFvLyFL4Mu9qvxV0%2F3b32Dk8jCyifT4Gjcvh3iiBXU1x4gNKRFI0Bnq8%2BaLsAkTwNpPJcSQqGO80jGzUKiPOLxSI0608f1Tryp8j%2Bhj3ISmZdw62V7wqV7Fq9g%2FFyMU8IUBIKTOL%2BWZmIj2BO8z9W4Bf5KUFD8GdVxZOSFkbfw1sHyVvkYB0yowgcbNyQY6pgG0i%2FodDhbXoBndCS8qJt8FRvlEyNK4jUHg%2FTWnnpjy9gMDihrd8D2q0J%2FY6Ix%2Fj9G5qIGzLnCvss20CyFxVoS47tCzOB5ZJffSXAx3y5KVYEUlx5hyoZjfR4xgsaQZtYC96%2B%2BO2XsU%2Ba7S%2FtaIJerMnmp5r%2F0D293BxtkvjzhxcUVnMyKiY9q2ALVYAP2pxWmg4OpTzEjsa9Mdu5Ad8%2FvkeQPofzbp&X-Amz-Signature=b42c1843071b6f1cc168ceaa3401fbc9e8f652b9ec528a931273e4edea742064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYZR76DT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIxs4WkADu7faJrqAzFsEfaolC1bPDrnxx8ZywLMwpAAiAv3gzkbZeurVl4t00OE5CiD1Ctr7N3VOFpKDFzxZ4Q1yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMihOSsM1E8crwQRBEKtwDGuDE%2B8%2F%2Fq4VbNjlACUFD7SpTUyktR1UaxgsLy1cYm1ceECbgPLtP5GD7ColcvzHSfy1FeFZhNEAgbZvvs5tAG4jF4lRUWbstMSGmkDBPTjQlOdBzN3qhVZowvjvoIFIwmoW4zkdcRTZ124ibXo0Ec5nNuPFU3KxZpvg2j%2Fa817et6JZ5EZcwYfUjEIyURccwLLyDUkNNu0ltKhgSL2UZ8FXS7HSocGpJVVYyOmrvIoTmJIodRMszkxPGyrqIPJ8Dhq1PJh8Rvj831SBZucUokwv7efVQp1hArfVnZkgfSitpFSK5QaJiyWa8ny%2ByEesZjpEFccDqWg5cWmkRgzKpQhVNFeEOujgmvbFF2iVKB7SMt0F6AJrjnrHir%2F%2FNJHwv2iYZwkllTNDUJlr%2BDcoTCwcytfaaqP4RQYCK6NperM8ko1ul%2FpG0b8GYzlu04APanoxvgqFvLyFL4Mu9qvxV0%2F3b32Dk8jCyifT4Gjcvh3iiBXU1x4gNKRFI0Bnq8%2BaLsAkTwNpPJcSQqGO80jGzUKiPOLxSI0608f1Tryp8j%2Bhj3ISmZdw62V7wqV7Fq9g%2FFyMU8IUBIKTOL%2BWZmIj2BO8z9W4Bf5KUFD8GdVxZOSFkbfw1sHyVvkYB0yowgcbNyQY6pgG0i%2FodDhbXoBndCS8qJt8FRvlEyNK4jUHg%2FTWnnpjy9gMDihrd8D2q0J%2FY6Ix%2Fj9G5qIGzLnCvss20CyFxVoS47tCzOB5ZJffSXAx3y5KVYEUlx5hyoZjfR4xgsaQZtYC96%2B%2BO2XsU%2Ba7S%2FtaIJerMnmp5r%2F0D293BxtkvjzhxcUVnMyKiY9q2ALVYAP2pxWmg4OpTzEjsa9Mdu5Ad8%2FvkeQPofzbp&X-Amz-Signature=bafc47a46cfaf20b4c000417c3f56f4f486faaa42946637d960915c06d1fc241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
