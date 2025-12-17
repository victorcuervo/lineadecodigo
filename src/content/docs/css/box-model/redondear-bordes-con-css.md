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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKPD7JQP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8yFKqqx2nNNYXxLH7Lf%2F1JCL31AG7zgFmP2Q%2BgRWRAIhALPMWsLzRGvlyv9TnBOOLjWrLE%2B5%2BRG%2FUt%2BO2qgQs%2B2kKv8DCHYQABoMNjM3NDIzMTgzODA1IgzG5w97qU9O5m4fE4Iq3AMSlXA4lEYUSfdk3xrh3%2BG9zjoGLB%2B60vqFL33PTAbpxV%2Bd0KTyMuA3CNl8ZHmBYEpUebjon8oDahWASxGFoWtV%2BNXcaHcYBcOI4NUkxyZlRYxVu2Fd7pK1FrCUoGReL6SOCNRxJe7NQja50nzdlTxRgtcQe6RWCWa1VLjMX9bmjTn7wBkiNwDpXk%2FDRCxqvvjCXkQMAE8iOvP9N%2FE%2B6iqij%2FdNeL1yPjrhjW7DTPArNOKo8sCOtxY7iL%2B0hhxuGJa6sFgDAVTPvgNv3P4aSTxzHi0beuo%2Fsl5S%2FrEXBdgysGymHlghJeXy8nMM9zF6eD%2BUAqkolCHlXnsUY5%2BOie2bbryNcoxYJQ1mZ6uH53FX6G0JP7hpx0S34v5rpHMJ9tt85B6vMNHvJ2MuBQxPnkFnrNuYQjGWdUUz0Ypns5IWtfA6Is3t98FGzhAB5G6f%2F%2FqFIuj3AGzc9jEdvzrEBzh%2FFAxlJOvy95BJwTSgXVmeuIgX5QNBgEKQ%2FVWzZPlRkOdZsqahAp7e38QCVg8wQwTEFbyCVH0iKppFT7tlBu%2Fx5DTFV3yvp22nENz7j1mMZBcJK7qZHxltjet0SpeHhNqbCKnqomtDKFzdp4pNG%2B8ko%2FulfUxUvqTo2eIKtTDn6YjKBjqkAWeKtlm9zBJgBRgJB2ykymG0Bhq3SZJKxtX5lZrExXYa9dpETPcdPmBnIZ4RjNLcvv8TP43d5j8vIxGymMpFc1tbcAnU1Mup7T4VjrU7j1NvRdMi6vMG6RjSqSSSL8CVyR33qNuHRJvrICTOz6BXN%2Fv3c52JU%2Bd9lI%2FWONc5CjKnnAcdZN4cEGV4syFqzI72G0Y038iZ8NpcwEJiQonWTodqiP9n&X-Amz-Signature=086168f3ad61505e94842d51e37f2d4f64d8403e8cb82afbfac5979ecae0340d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKPD7JQP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8yFKqqx2nNNYXxLH7Lf%2F1JCL31AG7zgFmP2Q%2BgRWRAIhALPMWsLzRGvlyv9TnBOOLjWrLE%2B5%2BRG%2FUt%2BO2qgQs%2B2kKv8DCHYQABoMNjM3NDIzMTgzODA1IgzG5w97qU9O5m4fE4Iq3AMSlXA4lEYUSfdk3xrh3%2BG9zjoGLB%2B60vqFL33PTAbpxV%2Bd0KTyMuA3CNl8ZHmBYEpUebjon8oDahWASxGFoWtV%2BNXcaHcYBcOI4NUkxyZlRYxVu2Fd7pK1FrCUoGReL6SOCNRxJe7NQja50nzdlTxRgtcQe6RWCWa1VLjMX9bmjTn7wBkiNwDpXk%2FDRCxqvvjCXkQMAE8iOvP9N%2FE%2B6iqij%2FdNeL1yPjrhjW7DTPArNOKo8sCOtxY7iL%2B0hhxuGJa6sFgDAVTPvgNv3P4aSTxzHi0beuo%2Fsl5S%2FrEXBdgysGymHlghJeXy8nMM9zF6eD%2BUAqkolCHlXnsUY5%2BOie2bbryNcoxYJQ1mZ6uH53FX6G0JP7hpx0S34v5rpHMJ9tt85B6vMNHvJ2MuBQxPnkFnrNuYQjGWdUUz0Ypns5IWtfA6Is3t98FGzhAB5G6f%2F%2FqFIuj3AGzc9jEdvzrEBzh%2FFAxlJOvy95BJwTSgXVmeuIgX5QNBgEKQ%2FVWzZPlRkOdZsqahAp7e38QCVg8wQwTEFbyCVH0iKppFT7tlBu%2Fx5DTFV3yvp22nENz7j1mMZBcJK7qZHxltjet0SpeHhNqbCKnqomtDKFzdp4pNG%2B8ko%2FulfUxUvqTo2eIKtTDn6YjKBjqkAWeKtlm9zBJgBRgJB2ykymG0Bhq3SZJKxtX5lZrExXYa9dpETPcdPmBnIZ4RjNLcvv8TP43d5j8vIxGymMpFc1tbcAnU1Mup7T4VjrU7j1NvRdMi6vMG6RjSqSSSL8CVyR33qNuHRJvrICTOz6BXN%2Fv3c52JU%2Bd9lI%2FWONc5CjKnnAcdZN4cEGV4syFqzI72G0Y038iZ8NpcwEJiQonWTodqiP9n&X-Amz-Signature=a01d4b1dce8c428a83936c5b0967bc634d0a78826c46c203930d32f356b7cbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
