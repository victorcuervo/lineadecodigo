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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSNQCH4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwWjJ%2BZOul3AJqjXzU9YNdZuWMnGfB1hyLN97bJgPa1AiEA2365Jdsa8c%2FKLYhIyYOBu%2FlET4UWWS0GS5Pk2bs4HkUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDClOE5Ij%2FfM%2B%2BRWhSSrcA5zZsR3Wt6sR4lpsR7qEeosiN1AwteP4r2U6AYFCeGNjNTe5dwvf9aLQKoBn%2Feqz3TSGgWtGIsLW3yiMW3aCwT159QZ2jlq%2BD7vGtZwzLIC9M%2Fyvr%2BAwQpRVhjQJtSLODydWy2phyrh3igSFx%2Fj4f851CIRDOvYaWtx5olUoyhHfLGwXsYylOpt%2B8IsU%2F0ZQ9jPTdVXhH9T4ULnYpnVHkA2foIhifOtgh9sBpSmIMjI9zLJsndvrVY0hy4sIYjbgDxYpFPVN%2Bz7AmtX1AScDYEgBujL1prwzpGMlXPh3KIUPpXci3PkIIjxAOwWJyDYnOcLp76hehV2JP4gA4EINgAKq7mmWJSO687zhs5O4GWvmAbq2tpyS2XKmP6QyS7AewvNjB%2ByP6jb1u34SoY58I9T99mVeUBddQkC88yPpTiL70iXEi8ChnXccRn1xcbZXzUZVY66n0wpTcMqvkR0AKejwuuJCOrsK1oJeGa%2B4fWEGfdHyE5Y6nQR1wLox0a%2FhL%2BW2URpWwhy4aK7QzHZ74sj2qstvJls9pCQddvPdhcmGPrJqgNiRHJvhkr9x0potxrV%2Btomy2Fp%2BZqS89ivbKf6aL6M%2BhZ9PgFa6KoDu1%2FVM3RW7zX8cFVbAm7tWMPiLyMkGOqUBj%2BpFo5%2BMgHy5NUMD5uB%2BjBYFR6fQAYLrQPppw9h7K64m7X%2BSchpiuYeGYzul92bMj2BK0YWZ74O9Q0EAWWaKDSFKR3iPAsDTkAlDVzN%2Fh4ckxlD0AI3NZnfWKeTWxKQBta%2BcgVCQsIeQxxxkpRVqgwuC3lVWNbi9XA5ECirqehmKnwLvFtlIiYOh2ByVxu3TKx1Zagqfo6U1Pj9yAJKQkvznB%2B04&X-Amz-Signature=b645466a0e091ccb7018156432ae57d0deac4f2995bef7cf75218cfc08c45e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSNQCH4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwWjJ%2BZOul3AJqjXzU9YNdZuWMnGfB1hyLN97bJgPa1AiEA2365Jdsa8c%2FKLYhIyYOBu%2FlET4UWWS0GS5Pk2bs4HkUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDClOE5Ij%2FfM%2B%2BRWhSSrcA5zZsR3Wt6sR4lpsR7qEeosiN1AwteP4r2U6AYFCeGNjNTe5dwvf9aLQKoBn%2Feqz3TSGgWtGIsLW3yiMW3aCwT159QZ2jlq%2BD7vGtZwzLIC9M%2Fyvr%2BAwQpRVhjQJtSLODydWy2phyrh3igSFx%2Fj4f851CIRDOvYaWtx5olUoyhHfLGwXsYylOpt%2B8IsU%2F0ZQ9jPTdVXhH9T4ULnYpnVHkA2foIhifOtgh9sBpSmIMjI9zLJsndvrVY0hy4sIYjbgDxYpFPVN%2Bz7AmtX1AScDYEgBujL1prwzpGMlXPh3KIUPpXci3PkIIjxAOwWJyDYnOcLp76hehV2JP4gA4EINgAKq7mmWJSO687zhs5O4GWvmAbq2tpyS2XKmP6QyS7AewvNjB%2ByP6jb1u34SoY58I9T99mVeUBddQkC88yPpTiL70iXEi8ChnXccRn1xcbZXzUZVY66n0wpTcMqvkR0AKejwuuJCOrsK1oJeGa%2B4fWEGfdHyE5Y6nQR1wLox0a%2FhL%2BW2URpWwhy4aK7QzHZ74sj2qstvJls9pCQddvPdhcmGPrJqgNiRHJvhkr9x0potxrV%2Btomy2Fp%2BZqS89ivbKf6aL6M%2BhZ9PgFa6KoDu1%2FVM3RW7zX8cFVbAm7tWMPiLyMkGOqUBj%2BpFo5%2BMgHy5NUMD5uB%2BjBYFR6fQAYLrQPppw9h7K64m7X%2BSchpiuYeGYzul92bMj2BK0YWZ74O9Q0EAWWaKDSFKR3iPAsDTkAlDVzN%2Fh4ckxlD0AI3NZnfWKeTWxKQBta%2BcgVCQsIeQxxxkpRVqgwuC3lVWNbi9XA5ECirqehmKnwLvFtlIiYOh2ByVxu3TKx1Zagqfo6U1Pj9yAJKQkvznB%2B04&X-Amz-Signature=b8a28e8bf66eb2f38d9ef155932fcc14b049be2222d47d904e499923d11ae609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
