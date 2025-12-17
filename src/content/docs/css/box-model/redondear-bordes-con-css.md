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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEAIZDR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9cG97xh2Y2xzl1DopNeFZGAn3hmS7q%2F2AkEftJE1YCwIgNyFKH0R9R8jLwyui7RmOcKpbeCAPDv3V406MP20zPgUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDImbeJewEWbjNY3W8yrcAz4gQ8LeCyj7PqNxWp4mS9gYpqsN1UWRIO9bYTOOiA9ihvdJs1eBmAfniI9kvOahpEYvN1xccazhgnlPjduqchRATACBMCYKUXVkZ3aQrbv4hDp21KmMmXOz9X53rp6jsSstG5GX78Fy4%2B2WehZ4nSIUU4RMfwzGM%2Bj6JO1eKObUV9m9xHDAkiPpkdprOlwhalTeSqUTwOII1prrA5FacaCJAr8rcWQnjDxT8wyjp%2FmKYX1ywUXme5MQW9M1TFWAqj1kENo5qGJmcOWv8Nf2uREQ0Fv%2F0WO3bEN5w0%2Bja5MZLkTO947Sv8U0SPOK1kReqOnTMkA5DzYo5hU2QMPNpaIijNRjD%2F79II4fUbaVeqsZdIHPrHpNvQYqyLETUiRgRPxBq9FOOHZjKOVbRuI1NZwFQIhJc9qPyd25avMvYvq%2FkUlsVdjcZwmeId8vxTswbilq8ceYNu221gp7olwLQopwI8Ok15JxKoqo5wqnq3IEy85iTrisWpa3YFTsPVSw%2Bfo9RRW0CWnIzCuHS0vqMTSBThfxhyHt0ldC3NiC%2FbXgSFDoy2eX5E9FKDVFavpdSQalFVZ%2Fh0Sb5Tra0Zr4xHjRp9MuPWF4pLH8OPRhruF3T1Ezauh1P6S3mVokMOyXiMoGOqUBMY1jQd%2B%2BNiOgFBnUcP67UM5uQuAvFrFxVYPq8odaf5J21kofsOGsp%2B9y%2BDdcpMQJrFmhoA1aQ0X7akAoO%2Fxb6zGjpTd%2F7LoM%2BqxZScheJHsiy3yCJk2ElFj9eMsqLDPF84PZSKCKNH3IXynyHV7FlYiq9teAUXaW301nh1fQ1HMTXZmg3sAp3ORr3jtS3bU3OcU9T44PTHV2FkZ6Bx5jNxpN9L8n&X-Amz-Signature=8adbb79c880f0e83a3f1793012a17e8aa45d7533fbcd77c63d711dc2b394d4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEAIZDR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9cG97xh2Y2xzl1DopNeFZGAn3hmS7q%2F2AkEftJE1YCwIgNyFKH0R9R8jLwyui7RmOcKpbeCAPDv3V406MP20zPgUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDImbeJewEWbjNY3W8yrcAz4gQ8LeCyj7PqNxWp4mS9gYpqsN1UWRIO9bYTOOiA9ihvdJs1eBmAfniI9kvOahpEYvN1xccazhgnlPjduqchRATACBMCYKUXVkZ3aQrbv4hDp21KmMmXOz9X53rp6jsSstG5GX78Fy4%2B2WehZ4nSIUU4RMfwzGM%2Bj6JO1eKObUV9m9xHDAkiPpkdprOlwhalTeSqUTwOII1prrA5FacaCJAr8rcWQnjDxT8wyjp%2FmKYX1ywUXme5MQW9M1TFWAqj1kENo5qGJmcOWv8Nf2uREQ0Fv%2F0WO3bEN5w0%2Bja5MZLkTO947Sv8U0SPOK1kReqOnTMkA5DzYo5hU2QMPNpaIijNRjD%2F79II4fUbaVeqsZdIHPrHpNvQYqyLETUiRgRPxBq9FOOHZjKOVbRuI1NZwFQIhJc9qPyd25avMvYvq%2FkUlsVdjcZwmeId8vxTswbilq8ceYNu221gp7olwLQopwI8Ok15JxKoqo5wqnq3IEy85iTrisWpa3YFTsPVSw%2Bfo9RRW0CWnIzCuHS0vqMTSBThfxhyHt0ldC3NiC%2FbXgSFDoy2eX5E9FKDVFavpdSQalFVZ%2Fh0Sb5Tra0Zr4xHjRp9MuPWF4pLH8OPRhruF3T1Ezauh1P6S3mVokMOyXiMoGOqUBMY1jQd%2B%2BNiOgFBnUcP67UM5uQuAvFrFxVYPq8odaf5J21kofsOGsp%2B9y%2BDdcpMQJrFmhoA1aQ0X7akAoO%2Fxb6zGjpTd%2F7LoM%2BqxZScheJHsiy3yCJk2ElFj9eMsqLDPF84PZSKCKNH3IXynyHV7FlYiq9teAUXaW301nh1fQ1HMTXZmg3sAp3ORr3jtS3bU3OcU9T44PTHV2FkZ6Bx5jNxpN9L8n&X-Amz-Signature=46cb2c813d53c21ab1a7aa2ea4b3df831eab15590681d4156932da7420c02d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
