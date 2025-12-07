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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYR5VBCQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENvbZv%2FAg3L8kEcBRZ79Rf1dLkpJSKLW6GV2KYt6JxBAiBdfc9CAMcOc2vssQHMuSA%2F4almuMEJ29NyglvFzafCYSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEX%2B7qVhkSqw44Lx3KtwDtaEj9mJUiKkGq6LRKWmKF%2FW7eh8bPLpo8BxlwKZ0O39aEBicPcHtfkDSUE59CPRfEMYz7GDx8XtxcKD17Oah1uQ12ec788wjTLVX21vLPy7LeMzgzEOsfOlghUGO5WF6d%2BDA8q9YCtHYQYY%2FM0zkDW8uN9TCgI9x0uFl88c%2F52uR31TA0I%2BJG1MvAoDhgyhHuwky2MaLYdJFqwJ%2F7bQIa2B2xfnwnOD%2BzNDQu42bruVVPCz8%2FH3CARupvrwx1YdBXgkTauVkKNLXLDWIzhQEeXd%2Bgip4R%2Fd7ZmHAG8lOPqrHjNlR9m%2BHezLo2Yu3ZYN4nH4TjniNzkoe041rGy%2Fj1trIZ1hmntfAe9KL5thmhNSH0IfqnrkwGOkdcRwF5bRfY8OplGbn4FiL7dScotHrj%2B9O%2BrfQue41kg42gLNEZ3dG%2F6uJOrnL%2BpeTyrxV%2FLp7WlP50%2Fuum17TMhEZng2eTb%2F1Hn2eE8xGwDpcHC7Mi6KHuBaBm76jMh92NbuBHwLF%2FVZ27nZ%2Fy%2Fp0SaEEcZb4u0eHWVVUAzSISjKT%2Fob3cvU4x%2B78EEdP7pNYKVEbZd5G%2FQV48cY95niMxaaACCOdYuP9YM%2BJmKJ0cJi8ZQhOYJ5LQQdzN2SRnw6FR1Mwj53UyQY6pgFZnmb7P4BZA8kMnVhjtlSYYZoaGNJ3eROwy4QNMrbdMNssGWEg0GbW1ZUy39A%2BwxHvFcM3VdBCYuGm8vHf%2FnQVbE9ojHrTtf7G%2BBi4lfhVAMiu%2BmHFZrbHMiEtwah2vyFtJDQPQiUWU6ubbOS1gg1T900ch1UxF0tzGcs6EcrTGekcu5tvtumyaFrj6OLjkh66jYRVzjjoYkGim%2FTkxpmItwaYD9tK&X-Amz-Signature=0a629659714d6cb83a941de983cffe47783186f168222290805e070755918c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYR5VBCQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENvbZv%2FAg3L8kEcBRZ79Rf1dLkpJSKLW6GV2KYt6JxBAiBdfc9CAMcOc2vssQHMuSA%2F4almuMEJ29NyglvFzafCYSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEX%2B7qVhkSqw44Lx3KtwDtaEj9mJUiKkGq6LRKWmKF%2FW7eh8bPLpo8BxlwKZ0O39aEBicPcHtfkDSUE59CPRfEMYz7GDx8XtxcKD17Oah1uQ12ec788wjTLVX21vLPy7LeMzgzEOsfOlghUGO5WF6d%2BDA8q9YCtHYQYY%2FM0zkDW8uN9TCgI9x0uFl88c%2F52uR31TA0I%2BJG1MvAoDhgyhHuwky2MaLYdJFqwJ%2F7bQIa2B2xfnwnOD%2BzNDQu42bruVVPCz8%2FH3CARupvrwx1YdBXgkTauVkKNLXLDWIzhQEeXd%2Bgip4R%2Fd7ZmHAG8lOPqrHjNlR9m%2BHezLo2Yu3ZYN4nH4TjniNzkoe041rGy%2Fj1trIZ1hmntfAe9KL5thmhNSH0IfqnrkwGOkdcRwF5bRfY8OplGbn4FiL7dScotHrj%2B9O%2BrfQue41kg42gLNEZ3dG%2F6uJOrnL%2BpeTyrxV%2FLp7WlP50%2Fuum17TMhEZng2eTb%2F1Hn2eE8xGwDpcHC7Mi6KHuBaBm76jMh92NbuBHwLF%2FVZ27nZ%2Fy%2Fp0SaEEcZb4u0eHWVVUAzSISjKT%2Fob3cvU4x%2B78EEdP7pNYKVEbZd5G%2FQV48cY95niMxaaACCOdYuP9YM%2BJmKJ0cJi8ZQhOYJ5LQQdzN2SRnw6FR1Mwj53UyQY6pgFZnmb7P4BZA8kMnVhjtlSYYZoaGNJ3eROwy4QNMrbdMNssGWEg0GbW1ZUy39A%2BwxHvFcM3VdBCYuGm8vHf%2FnQVbE9ojHrTtf7G%2BBi4lfhVAMiu%2BmHFZrbHMiEtwah2vyFtJDQPQiUWU6ubbOS1gg1T900ch1UxF0tzGcs6EcrTGekcu5tvtumyaFrj6OLjkh66jYRVzjjoYkGim%2FTkxpmItwaYD9tK&X-Amz-Signature=0144999ae1a076e0005c884cc0f2640470fc37741ce73fa06ebb4c8fb35c7940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
