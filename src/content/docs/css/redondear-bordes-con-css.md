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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LRW4A5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDsxayo5wGaoPDvIYG8ywXXzJH93j6CH2%2FUDyf%2BuMoHsgIhAOvmTP5OOTmx8WMYngXTMdV0BE10hGeCS6aqKxW1gi1cKv8DCDgQABoMNjM3NDIzMTgzODA1IgyjuTPUbfqF%2FEChhlYq3ANhvIMuEXRSsBqpUFtDh1aAtEI3xOzPzmQSFQr51mI%2FoGNbpjx6RtUhfOBi0fmPQsMd4QrIT0%2FshilsvZXNolLe2LUO%2Bl1%2FgI9iZ1anriK%2Fv8YH3rpHmFOteSeonXEnudLfcBf5OmhKHirZ%2FUZFeoG9CKNYfiFlC0WTsiBFl5PI9oGV49qUw5PNYVw63e3MRr%2Fx%2FQo2f38VVv0RFkCb6lvRrAyzM6dxeoFZjwyFoSYfpPR3N20LKWuApQzuTqSzUAyL1KhysvS8ffj2KUwfsHthlSyJSU%2FPj1hUGS87dclUJyG51ti2TFOyJHUdnao2Nhp%2ButSw%2BSZKpiRj0BCzyDlWf9YR6OAXr2iHD%2FL%2Fl0BsemLEJjxmItKCPkOD0BGAXYjLtuSewrjaFFBW9XEs9rNFQyisJHXGA0xMTGzgMYEXNDHHJ%2BYaQ9ChdETmb7u0Ds3LLvvywGniSefmKHC5KTPW%2BV0pRdAa53Y8nBgrcBpQYIZkkgqNU4ZVXaivIu9yd7OLlRSmU67M8uHPcgw8PxKzMIhtxm8aJ%2BmzT9G0CUL900y%2FWtry9w867QMpbUUlodU6RIKcM%2Bb3FR1lM4nVaNY47LFpyXG1St79p2GrBTQWIAL6Kpk7yHKEqXs1NzDO%2BMLJBjqkAfW90o1yiAFyAqdNTeRbpk6NNgpKtIm%2FI1j4W7SBsmjx%2B0gEAZA8xgKO%2B8BMuYA3xGKPTLglyKgQ5y7059johqQCNnhEFA2ItjFB4omm6siiSulm16TMRhPebJsUyl4Rvxhqz%2BkKzRyPujvi3yFD7ENWqYfhuZ%2BYjnIssLJcyTsS4fxqlemueUh64Z29zNQFAuoXW%2FhY2pbEITQhBhnMY2sWvNMt&X-Amz-Signature=d5d7c67d8238a360ba4fe6fd226ca5683638e08e2b2441b374cb6ce1d6d0636c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LRW4A5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDsxayo5wGaoPDvIYG8ywXXzJH93j6CH2%2FUDyf%2BuMoHsgIhAOvmTP5OOTmx8WMYngXTMdV0BE10hGeCS6aqKxW1gi1cKv8DCDgQABoMNjM3NDIzMTgzODA1IgyjuTPUbfqF%2FEChhlYq3ANhvIMuEXRSsBqpUFtDh1aAtEI3xOzPzmQSFQr51mI%2FoGNbpjx6RtUhfOBi0fmPQsMd4QrIT0%2FshilsvZXNolLe2LUO%2Bl1%2FgI9iZ1anriK%2Fv8YH3rpHmFOteSeonXEnudLfcBf5OmhKHirZ%2FUZFeoG9CKNYfiFlC0WTsiBFl5PI9oGV49qUw5PNYVw63e3MRr%2Fx%2FQo2f38VVv0RFkCb6lvRrAyzM6dxeoFZjwyFoSYfpPR3N20LKWuApQzuTqSzUAyL1KhysvS8ffj2KUwfsHthlSyJSU%2FPj1hUGS87dclUJyG51ti2TFOyJHUdnao2Nhp%2ButSw%2BSZKpiRj0BCzyDlWf9YR6OAXr2iHD%2FL%2Fl0BsemLEJjxmItKCPkOD0BGAXYjLtuSewrjaFFBW9XEs9rNFQyisJHXGA0xMTGzgMYEXNDHHJ%2BYaQ9ChdETmb7u0Ds3LLvvywGniSefmKHC5KTPW%2BV0pRdAa53Y8nBgrcBpQYIZkkgqNU4ZVXaivIu9yd7OLlRSmU67M8uHPcgw8PxKzMIhtxm8aJ%2BmzT9G0CUL900y%2FWtry9w867QMpbUUlodU6RIKcM%2Bb3FR1lM4nVaNY47LFpyXG1St79p2GrBTQWIAL6Kpk7yHKEqXs1NzDO%2BMLJBjqkAfW90o1yiAFyAqdNTeRbpk6NNgpKtIm%2FI1j4W7SBsmjx%2B0gEAZA8xgKO%2B8BMuYA3xGKPTLglyKgQ5y7059johqQCNnhEFA2ItjFB4omm6siiSulm16TMRhPebJsUyl4Rvxhqz%2BkKzRyPujvi3yFD7ENWqYfhuZ%2BYjnIssLJcyTsS4fxqlemueUh64Z29zNQFAuoXW%2FhY2pbEITQhBhnMY2sWvNMt&X-Amz-Signature=f447f7c18a563b1e68b9e75e0b2279cf1c9dd1aa4b862ed7c68effffec1e709f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
