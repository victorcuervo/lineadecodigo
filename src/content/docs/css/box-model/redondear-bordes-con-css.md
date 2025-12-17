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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUPZVWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrIQ%2FD44v42NT%2BeGvAcIH7iG93rxXT1XlINPw4Y3h2xAiEAk%2F4LtXlOlJJMPzEzUCuzdSm20aPzfWvfvOHyRLSwSEoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDD5y8r36uqm1pzsMRircA9RiD7f1QxCKI48ivXapytG1H1pKVvHXje9VE73Dgbfmm%2FLrvU20tn3l0ofICjKwOPNa%2BuIoAolgk%2FRXqBb6zPzJxgs2tMrgpZVtR6G1wH4aHmq9W4JNreUkOtOdd%2BrE5L1B6fmlCnCwHMYT%2B7in32bA0uqwIhLC0HV3MoFImsB3rqHoolv%2FbpffZXELM%2FAYeQ71zv%2BNOsjQUqLXrnXbhxiCgzkYUxvFtCkUvccOVXrMX7kPjQgfD7I%2BUupWOI80SK%2FwEugLxHb7QM%2B1mj8GHt5SsrUex7wXj8tiXmiRLVq%2FpF5vTzzJaYyNjUcM1oTyoNMowjeNCcrMWypKpMJtiwjRdmROYmy17gE7hWcR3VP7TjRPeVFAMlMP22Iib1tBhv5NTwyQ18YdIZOxtpphiQv9qUlj7ArQVPBwjagrj%2FJKy8aPlU7RAu581EhDSNaAwAV%2BXJtkEeVIqgazWLfL5PL1SKBeTqla0ve6lVjiYFEoIpb5uNIIX%2FL8OQeb6iwtm5j26E%2BsT9tnR%2FC5SDwH6mLPms0uC2kIQsJ9XI6cEx6qah23WQOgmf5U3Jb4DucIlSqlPRw32aBrn48w0%2BYpaC7HsCJ4KFFFyuBgfSCXcLepDS4onErB6B3K%2F6OhMK2XiMoGOqUBBS9sG7HHbtGox1%2Ba0qViAc8wv0dC%2FJxVCIN6IKDIJxuVtXo2Q2AGkfRv37kAVix%2FSLdyiT4sx9F1r%2F2rqgC4V8lCvvXSPYfDkYCnSq5xR6f%2BTPmk5W7%2FJjuVco3ZkuncUwYQu67FCmj9TcNNXeI%2FM0750D5PJChmrkwYOtoFVlLZY1axN07gJZoOkc1CkALcMjJRG5CMe0k8DRnA6Z7AdF3Z6V%2B3&X-Amz-Signature=848118286fa5beded886da0523ccde56dd28175a2787c327aa2d0817c1c8a450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUPZVWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrIQ%2FD44v42NT%2BeGvAcIH7iG93rxXT1XlINPw4Y3h2xAiEAk%2F4LtXlOlJJMPzEzUCuzdSm20aPzfWvfvOHyRLSwSEoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDD5y8r36uqm1pzsMRircA9RiD7f1QxCKI48ivXapytG1H1pKVvHXje9VE73Dgbfmm%2FLrvU20tn3l0ofICjKwOPNa%2BuIoAolgk%2FRXqBb6zPzJxgs2tMrgpZVtR6G1wH4aHmq9W4JNreUkOtOdd%2BrE5L1B6fmlCnCwHMYT%2B7in32bA0uqwIhLC0HV3MoFImsB3rqHoolv%2FbpffZXELM%2FAYeQ71zv%2BNOsjQUqLXrnXbhxiCgzkYUxvFtCkUvccOVXrMX7kPjQgfD7I%2BUupWOI80SK%2FwEugLxHb7QM%2B1mj8GHt5SsrUex7wXj8tiXmiRLVq%2FpF5vTzzJaYyNjUcM1oTyoNMowjeNCcrMWypKpMJtiwjRdmROYmy17gE7hWcR3VP7TjRPeVFAMlMP22Iib1tBhv5NTwyQ18YdIZOxtpphiQv9qUlj7ArQVPBwjagrj%2FJKy8aPlU7RAu581EhDSNaAwAV%2BXJtkEeVIqgazWLfL5PL1SKBeTqla0ve6lVjiYFEoIpb5uNIIX%2FL8OQeb6iwtm5j26E%2BsT9tnR%2FC5SDwH6mLPms0uC2kIQsJ9XI6cEx6qah23WQOgmf5U3Jb4DucIlSqlPRw32aBrn48w0%2BYpaC7HsCJ4KFFFyuBgfSCXcLepDS4onErB6B3K%2F6OhMK2XiMoGOqUBBS9sG7HHbtGox1%2Ba0qViAc8wv0dC%2FJxVCIN6IKDIJxuVtXo2Q2AGkfRv37kAVix%2FSLdyiT4sx9F1r%2F2rqgC4V8lCvvXSPYfDkYCnSq5xR6f%2BTPmk5W7%2FJjuVco3ZkuncUwYQu67FCmj9TcNNXeI%2FM0750D5PJChmrkwYOtoFVlLZY1axN07gJZoOkc1CkALcMjJRG5CMe0k8DRnA6Z7AdF3Z6V%2B3&X-Amz-Signature=80d429abc562851ade7fa06210cfe3f455fdbac1ef1e6d1a6b3bc390a134bba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
