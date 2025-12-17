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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXMSSY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe02d%2Ffj6YKAYGMooG7M9u%2BajuE61%2BGWrfWG1llqhsZQIhAKHQ8hPNMFuqSU39Zxa8dRDU7Hh28QmGWjBvKlG0CtrWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzjGCAhG0qBE5OEKSgq3ANGCY6T6UwU%2FmL7ytq%2FQqOgIKn7JEAV9X%2FhTNhCDArvqTho%2Bcdst7PJGbDc4DPRYeSxOIS5NE%2Bn0%2Bhuo9yQsG8E%2Fil%2Bcok1JyHJMaGbSyGdhNeLxm7UZ8USPczub%2F0ChQaF%2B6IUl0SrnlPW5bRZ65iOQrOzWpnNSjQXXbb1BXSAwVRfKdugmZg%2FJExspnU7uGUIgN%2FzJEEJScwQIpzrizS473%2FnYwRzSfKERO51EQek1IQh4VC2ej%2F6D4D5L%2F6u9t0x%2BEJioP3%2BGo6xwnuqkYX0QrbQh72pG7i92%2FLDZJYDXqT2WIRx%2F6xHqAKysoo9RUYdgrXfO4rA7f7v4smgzHUO0hW4ElHPomsxAF3GQGj2qFnSJFRr3ayUKP4e5drf5AvOY6RPHloRKn3X8HOGF9NvXFvIajzy4Lni46CVGrEEsGQWvOpqWel6nAO3GYCONVvYg3ddwQD0lZRF2kVoH2e7oEisumfhcku%2BNukppFvDEEZdnUoKCpAfh0b5qdr5tPV700A6qFbXZMjeU9Wc7EQWQ5UFA4GXe5Zbz6Ww42l5QbkXHyZE7towUep6DLBRGthO3%2B5x5Yi8xOPWgybnEmm23UpDvG6iBr3SJnO5tzriQjolpAvpUl9lANk4RDC3%2B4fKBjqkAcl8HkluWKdmqoNKdgPaSFLTSlDKZnyoefe8OV1LdWn6mVAoRj8lJqUCB5yr1eZTcY1Oo3RllUAw0kpbpzmyppq3xjvzcgnBZUa2J9%2BSprtKRnd%2Fi9WDyxzXFUSooiuECCS7T806QBT4aMkca3jmY4OpARlvHIScw%2FcRF70a9k3726toDLtbkCbnKGjmUNzToaicIKYnP%2BYdOL5eZDN%2B5x%2B%2BMZhB&X-Amz-Signature=1dcb0c006f525e383faba9256e2cc27ee958c1a19bf1262e54ed46a0c4f7e7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXMSSY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe02d%2Ffj6YKAYGMooG7M9u%2BajuE61%2BGWrfWG1llqhsZQIhAKHQ8hPNMFuqSU39Zxa8dRDU7Hh28QmGWjBvKlG0CtrWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzjGCAhG0qBE5OEKSgq3ANGCY6T6UwU%2FmL7ytq%2FQqOgIKn7JEAV9X%2FhTNhCDArvqTho%2Bcdst7PJGbDc4DPRYeSxOIS5NE%2Bn0%2Bhuo9yQsG8E%2Fil%2Bcok1JyHJMaGbSyGdhNeLxm7UZ8USPczub%2F0ChQaF%2B6IUl0SrnlPW5bRZ65iOQrOzWpnNSjQXXbb1BXSAwVRfKdugmZg%2FJExspnU7uGUIgN%2FzJEEJScwQIpzrizS473%2FnYwRzSfKERO51EQek1IQh4VC2ej%2F6D4D5L%2F6u9t0x%2BEJioP3%2BGo6xwnuqkYX0QrbQh72pG7i92%2FLDZJYDXqT2WIRx%2F6xHqAKysoo9RUYdgrXfO4rA7f7v4smgzHUO0hW4ElHPomsxAF3GQGj2qFnSJFRr3ayUKP4e5drf5AvOY6RPHloRKn3X8HOGF9NvXFvIajzy4Lni46CVGrEEsGQWvOpqWel6nAO3GYCONVvYg3ddwQD0lZRF2kVoH2e7oEisumfhcku%2BNukppFvDEEZdnUoKCpAfh0b5qdr5tPV700A6qFbXZMjeU9Wc7EQWQ5UFA4GXe5Zbz6Ww42l5QbkXHyZE7towUep6DLBRGthO3%2B5x5Yi8xOPWgybnEmm23UpDvG6iBr3SJnO5tzriQjolpAvpUl9lANk4RDC3%2B4fKBjqkAcl8HkluWKdmqoNKdgPaSFLTSlDKZnyoefe8OV1LdWn6mVAoRj8lJqUCB5yr1eZTcY1Oo3RllUAw0kpbpzmyppq3xjvzcgnBZUa2J9%2BSprtKRnd%2Fi9WDyxzXFUSooiuECCS7T806QBT4aMkca3jmY4OpARlvHIScw%2FcRF70a9k3726toDLtbkCbnKGjmUNzToaicIKYnP%2BYdOL5eZDN%2B5x%2B%2BMZhB&X-Amz-Signature=f85f9183733e39a26d5f3773fe2dc81a2455846501f1f0c3da9076f431c1acb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
