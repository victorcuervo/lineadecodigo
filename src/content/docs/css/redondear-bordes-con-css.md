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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7JXHIR5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCubevekgD3OPYnZiPXU4ZSX3QbpjzTTsrULwAi6fla8wIhAMqJyyS%2F1ObsxHTfZX7LrqP9iCtZ2UhWxI%2Fx6zIfA494Kv8DCHUQABoMNjM3NDIzMTgzODA1Igzy68fIQqYk8X8KoGYq3APyR7i75N3CWSNUB3tmYkVWHfd19Ul9QX8blp%2FT5tQoD%2FHmqgflfmiFWGF5tonmMALAjZwWrxcksPi4WDaKkYFciDncYnmMHo40905T%2B%2FiojDF4GHKhtkqGqdoGEZnl0BoG6z9miRKEX%2Fg89WLXXx%2FZPU5%2BIIgowoHQMfGd%2FPzUQFdSPS2w%2B0QdOGGvtX%2BcYAPUjqw9Xld1aUsp74HFyYvSlEnMbMPDP8bG6vcRGpQzwgNas5mReRr59Hj9dSIBglXIwONmUdMeaOiAz3KbNmoBpPjoRrwVWmCawawBMqlPHkxad0IU2txyRHdfuDN6yUI3gQ%2Fwbolc8Zfd1kqzvg917TVSrr%2Bud%2BtUp6ELmL81jH9Gw8PurmYC5QUXhmWXfBuVDinn1OpOgAaYZDAWNBvs3XxS1mFYoqqHLyNKTHzY2zxbdbHWTHPgsYN9r8dnV3L04l0dFrzxdB0nzABLQfrrTYEbBIRPovM8A%2FrGivYntcaeXhNp38rAkrgmdQay0JpURRbhGY%2FF4UXxcLYOCXxxiA9pVwrSA%2BRumDXHMx8yMpOjlPn4H6N2AFOmG6EQ%2BS3H0WllDw8D8VYRsCQicQS7W34vVTx9rsyq2PRSMO23mn1TUOGJqe4t0VM59TDlptDJBjqkASnk5WuAkPiz7AW6U6pR3sGFm4s2iZINoy2ifbXDYXbw5CldKpxfGk6Iigdn%2BHMj44rxOviUZMl3%2F59Swj%2FR4g4NxS7B%2BsEIaLQFcApFiunPHRDxSuRApXHX%2B%2BjvGHw6q59hiAqG60gLJNKPebp4AfA%2BxhJP1vaS9iGFfzaj1IIRdVMz8SyEk4BM9NKawh%2BEyc0BonIdcXAbxlEmAUwdF5w55yYG&X-Amz-Signature=bea6094abab56a3ba9ffd16fac83f7eb4d06455de7052ce31dec6121c2483fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7JXHIR5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCubevekgD3OPYnZiPXU4ZSX3QbpjzTTsrULwAi6fla8wIhAMqJyyS%2F1ObsxHTfZX7LrqP9iCtZ2UhWxI%2Fx6zIfA494Kv8DCHUQABoMNjM3NDIzMTgzODA1Igzy68fIQqYk8X8KoGYq3APyR7i75N3CWSNUB3tmYkVWHfd19Ul9QX8blp%2FT5tQoD%2FHmqgflfmiFWGF5tonmMALAjZwWrxcksPi4WDaKkYFciDncYnmMHo40905T%2B%2FiojDF4GHKhtkqGqdoGEZnl0BoG6z9miRKEX%2Fg89WLXXx%2FZPU5%2BIIgowoHQMfGd%2FPzUQFdSPS2w%2B0QdOGGvtX%2BcYAPUjqw9Xld1aUsp74HFyYvSlEnMbMPDP8bG6vcRGpQzwgNas5mReRr59Hj9dSIBglXIwONmUdMeaOiAz3KbNmoBpPjoRrwVWmCawawBMqlPHkxad0IU2txyRHdfuDN6yUI3gQ%2Fwbolc8Zfd1kqzvg917TVSrr%2Bud%2BtUp6ELmL81jH9Gw8PurmYC5QUXhmWXfBuVDinn1OpOgAaYZDAWNBvs3XxS1mFYoqqHLyNKTHzY2zxbdbHWTHPgsYN9r8dnV3L04l0dFrzxdB0nzABLQfrrTYEbBIRPovM8A%2FrGivYntcaeXhNp38rAkrgmdQay0JpURRbhGY%2FF4UXxcLYOCXxxiA9pVwrSA%2BRumDXHMx8yMpOjlPn4H6N2AFOmG6EQ%2BS3H0WllDw8D8VYRsCQicQS7W34vVTx9rsyq2PRSMO23mn1TUOGJqe4t0VM59TDlptDJBjqkASnk5WuAkPiz7AW6U6pR3sGFm4s2iZINoy2ifbXDYXbw5CldKpxfGk6Iigdn%2BHMj44rxOviUZMl3%2F59Swj%2FR4g4NxS7B%2BsEIaLQFcApFiunPHRDxSuRApXHX%2B%2BjvGHw6q59hiAqG60gLJNKPebp4AfA%2BxhJP1vaS9iGFfzaj1IIRdVMz8SyEk4BM9NKawh%2BEyc0BonIdcXAbxlEmAUwdF5w55yYG&X-Amz-Signature=e4f0954080702679f22077091dcdf5afdaa9ad8d48cb918ffc4a3dfafd92aa01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
