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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHC4D5R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMVu3Pdq24eH0XV5fJtRPxwwyuSonHJMqUW3jietZVcAiB%2FX4CpmirzWlbZCCTI2Bx3RmHlC5mt6%2FNE9kKBSz03Fir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM1X0zge8SZ0xWZVFqKtwD9rtv5MmI93ahXBdL%2Bn9ooe7cQi9qE7OD5Zpi%2FqNrucINzEiAfdBO0Qgp38XrPKJun8Jx7XETeUfsUqAy1rQXDSq6DFMSvNqrgwCYTRqejW0U8xDRjbrCXcENWxPLRke3uW9eDVGuqyJxZQa9zt7AVmp3wE3E%2BUlrdKFCq9%2FVR3SmsI6LiwKidzmtqDzAARmzVLPFJ9w0wZIF70kGlKlvoa6%2FFPaP68jpaNO0mqs%2FukPTaTbkp1u5EOK1wRr2mDSLgMvmGC8Ke5CJSOJ%2FSHA3cXFH%2F4XJvghPY4pHb%2Bcb5FhZuvc769ezsZTwzjEAELIhjQ5ONKPdUYPj0T2BCij3a7lO9s5pPTqcAz9i6RCCHlGHj66XbFJFvs4WPKzvin0H4t9dLy%2B4rbFIbFAMSYxdT4OPEEEAA3wjZPBPP6bh4dE4%2FxcFZF4gRmxJTbzjl0WGejbDgkA97RTmEIH%2BUhcbOD%2BJ9rBZlhqP21usXySRIzHNX8VSgIjvcEbxlknIn7SEOHtKNAPL8HyxPz6X4Epi5%2FuPA7TiZ5oSNx15e5g%2FbBCsu1Hq3yIgEeaBz3Fn3eW3AMDmvsmfs0kH%2F%2B5s%2BprZWGjIfjdfKdCU6yytOY00o3LuuAKDT272Nd%2B0b7ow9LvPyQY6pgHZT3W0fi%2F3sSOqEyCtayObLEYdVBENyIS9xom0DBu8nuXu%2FGCWwm8LfegFSrNje8cxo1vvx5hiCjYAlDWkQQ0ujJdqaqppgE4tTOX8HKLGpZS3VdRXTBtueypgbCKNWoB1bGgZk8Ijm8IrfuwyMcWIYRvN%2FY7AsMzuwIT9YsBv%2FxeoZbtRB6q2ugKxpk21or0vKp6PTla7z6e6zZ5R4314SaosoCDZ&X-Amz-Signature=42d569236d741a8e2c6c4f05cf1498b3069f72322adaf4744218f6dbc293e11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHC4D5R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMVu3Pdq24eH0XV5fJtRPxwwyuSonHJMqUW3jietZVcAiB%2FX4CpmirzWlbZCCTI2Bx3RmHlC5mt6%2FNE9kKBSz03Fir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM1X0zge8SZ0xWZVFqKtwD9rtv5MmI93ahXBdL%2Bn9ooe7cQi9qE7OD5Zpi%2FqNrucINzEiAfdBO0Qgp38XrPKJun8Jx7XETeUfsUqAy1rQXDSq6DFMSvNqrgwCYTRqejW0U8xDRjbrCXcENWxPLRke3uW9eDVGuqyJxZQa9zt7AVmp3wE3E%2BUlrdKFCq9%2FVR3SmsI6LiwKidzmtqDzAARmzVLPFJ9w0wZIF70kGlKlvoa6%2FFPaP68jpaNO0mqs%2FukPTaTbkp1u5EOK1wRr2mDSLgMvmGC8Ke5CJSOJ%2FSHA3cXFH%2F4XJvghPY4pHb%2Bcb5FhZuvc769ezsZTwzjEAELIhjQ5ONKPdUYPj0T2BCij3a7lO9s5pPTqcAz9i6RCCHlGHj66XbFJFvs4WPKzvin0H4t9dLy%2B4rbFIbFAMSYxdT4OPEEEAA3wjZPBPP6bh4dE4%2FxcFZF4gRmxJTbzjl0WGejbDgkA97RTmEIH%2BUhcbOD%2BJ9rBZlhqP21usXySRIzHNX8VSgIjvcEbxlknIn7SEOHtKNAPL8HyxPz6X4Epi5%2FuPA7TiZ5oSNx15e5g%2FbBCsu1Hq3yIgEeaBz3Fn3eW3AMDmvsmfs0kH%2F%2B5s%2BprZWGjIfjdfKdCU6yytOY00o3LuuAKDT272Nd%2B0b7ow9LvPyQY6pgHZT3W0fi%2F3sSOqEyCtayObLEYdVBENyIS9xom0DBu8nuXu%2FGCWwm8LfegFSrNje8cxo1vvx5hiCjYAlDWkQQ0ujJdqaqppgE4tTOX8HKLGpZS3VdRXTBtueypgbCKNWoB1bGgZk8Ijm8IrfuwyMcWIYRvN%2FY7AsMzuwIT9YsBv%2FxeoZbtRB6q2ugKxpk21or0vKp6PTla7z6e6zZ5R4314SaosoCDZ&X-Amz-Signature=d075ab7bd3de731bccc73a332776aacea4df97083d5cda621b6c96e8c2175add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
