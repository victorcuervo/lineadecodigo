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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCTOGJH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD4E9SY1DN%2FQIFrceep3xl0LAAqxTcbgWHxf1wJKyoayAIganqDj14wEz8LMYbY7dXGnitgWlh6xWK%2FewjdXOBboB4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBJqYMoUeT%2BtRJrOQSrcA%2FnmR0jnE7k30vVEGtRERws8UaH6CHROh4ejCKCF3VeKWa%2Frb1hDAxYQvYpliuh5QDoPkJs2kq6UHovhJEwjv%2FVXAqro7H3RKDcdSn0vOeaSVbfdxvc1aJgypwIgj9i9oJ5HnUUjBADknaZCUrpkRagd%2FUgh18x%2BHFVlmGT0heRrFoLZFriG3uuM%2BBfAhr87179avIpC%2FcI7obOUSy0iuDQ8MnCnbhFd%2BGiagpJXzsVsT4g9buBelhnt1TkEnREAEQjMKz0KgHKlHxEkzpW6Un%2Fc138SgkYsSzV%2FcYyZhNVE9fZaPp45GpD3f0GPMuNUYzTHuRT5HJ6uMXMXUBdy5TOaBVRXqedeMnZDmGOSwO2%2FN%2FxKe%2FTWUi8Xk76FBm%2BfwUwldCMbncFdUAcrcWgDkPidreOQ3KSrZlLlMmxdzvCN4%2FsXrdulGyqaZ6R85GAi7%2FpONmXWQOJi2WmvXEWLZqeTLxk5dGAA8oUkY%2FzIE9Z1nzN7AriNaI2aRui1Q3lDj5d3p90zcHtIAb47zym3fsV700eX9E2f4ZKAOjUM2yG1vefVQOUXaKSuFhyfw5DD9aivuMvsjg97yfHkNM%2BBxSR4fIHKS8p6bN4cMzMQYevTs1UIeIomsETJnNT9MJG1w8kGOqUBqUZyRO9HbNBndB6F9x3%2F9jAHsWwuDf3N0G0IUmYqdFfR83Ef04F1ZGB4Gx3Dsm8KMSrZjIsJcdCu2BZA55zsijY%2FLariRA27tb%2FZLT37%2BwqTD4YQ9040gy51q0p82osqeyuPWvkFdvKFvP5mvwEPg5Pot3mokXKsrYrEie3oYbM%2Fmkc5DLO0t1fK8%2BCHcIwYnp48PVFmHVsPLSB2UaRGKa5VlxUV&X-Amz-Signature=803714a4abc39004994214fae1c17fea730c72f20c7519d506762183b24fb092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCTOGJH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD4E9SY1DN%2FQIFrceep3xl0LAAqxTcbgWHxf1wJKyoayAIganqDj14wEz8LMYbY7dXGnitgWlh6xWK%2FewjdXOBboB4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBJqYMoUeT%2BtRJrOQSrcA%2FnmR0jnE7k30vVEGtRERws8UaH6CHROh4ejCKCF3VeKWa%2Frb1hDAxYQvYpliuh5QDoPkJs2kq6UHovhJEwjv%2FVXAqro7H3RKDcdSn0vOeaSVbfdxvc1aJgypwIgj9i9oJ5HnUUjBADknaZCUrpkRagd%2FUgh18x%2BHFVlmGT0heRrFoLZFriG3uuM%2BBfAhr87179avIpC%2FcI7obOUSy0iuDQ8MnCnbhFd%2BGiagpJXzsVsT4g9buBelhnt1TkEnREAEQjMKz0KgHKlHxEkzpW6Un%2Fc138SgkYsSzV%2FcYyZhNVE9fZaPp45GpD3f0GPMuNUYzTHuRT5HJ6uMXMXUBdy5TOaBVRXqedeMnZDmGOSwO2%2FN%2FxKe%2FTWUi8Xk76FBm%2BfwUwldCMbncFdUAcrcWgDkPidreOQ3KSrZlLlMmxdzvCN4%2FsXrdulGyqaZ6R85GAi7%2FpONmXWQOJi2WmvXEWLZqeTLxk5dGAA8oUkY%2FzIE9Z1nzN7AriNaI2aRui1Q3lDj5d3p90zcHtIAb47zym3fsV700eX9E2f4ZKAOjUM2yG1vefVQOUXaKSuFhyfw5DD9aivuMvsjg97yfHkNM%2BBxSR4fIHKS8p6bN4cMzMQYevTs1UIeIomsETJnNT9MJG1w8kGOqUBqUZyRO9HbNBndB6F9x3%2F9jAHsWwuDf3N0G0IUmYqdFfR83Ef04F1ZGB4Gx3Dsm8KMSrZjIsJcdCu2BZA55zsijY%2FLariRA27tb%2FZLT37%2BwqTD4YQ9040gy51q0p82osqeyuPWvkFdvKFvP5mvwEPg5Pot3mokXKsrYrEie3oYbM%2Fmkc5DLO0t1fK8%2BCHcIwYnp48PVFmHVsPLSB2UaRGKa5VlxUV&X-Amz-Signature=63460b73d9ddbe29be51b70e839bf57286617d746340e4c866553ec287052590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
