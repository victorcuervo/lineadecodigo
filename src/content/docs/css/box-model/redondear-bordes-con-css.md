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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLETEPEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiR5jOtmBU9IZxV%2Fn2N1mvTtU1Eq3yhyw9V2z1kOFKYQIhALd6QfnCc8Iy0uxTJPr17rknHYf4e0gnNwxuyMBpFNGRKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAfwzaHq0WuaThgOoq3APpGBZMrXvO9l8ksSqH0tDmJQ%2BZynAjMogl5fsWN7580qXSxOzfAWE15fu%2Fb9US%2BvpLGOKYXZzrMChjQJWPrKy2%2BmkNdZGnITKHNud4bRyPwHppJcB%2BKvjT81XJxITyVLIuwpnRSEhTeAzt8%2F0%2BxnsrXkHkMvjy7dSxJXDJ%2BCpJUf7uV9s4Tp6s%2FpAXDnMy4LzTM1qIK5gT8siWoVirN6Qct67k0ITVNcYBuYl2nO2jZibmNYSgUY30BAzrJ84lD%2Fd%2F2aaJGV1vqNeLkMTFs%2B3reEG6U4h%2FpX3m4fZ38q3mCNzA8SEEe74uYE24p%2BY497xlMpB8tdQLY531TF5%2FvMjUunXh53X%2BdjWGWQopeUMWSuqdw3NsdjiwEJSXm0dUQMlBq%2FZCInt3qxNueAFx1pt4yKAGODUPB1jAZTERYn0IcM0B9x9r1JikzslPsg0INLlAn1SlyIOH0tFq7xEjirwPfAt6k%2FqwDK4AFcjpPfVKjF%2BWv2Ss7DVqKFlKTxQPsmoJnPyULbdSzC9WNPSqoMfzal%2F7Huofl3L0pfvtY4xAjWUnGlle7pN8mDzNNSJHElaGXSzEzr%2BpQsp59klSUWGvmC7xOtr1OeTsOTGCX5LYiHnEnt0tjM5LHntnozDOrYzKBjqkAezTUKQvdyUxYmU%2BnSh0%2F%2F2BTIltqJVqOHtsMHaZtaCWdZt%2BXJtyUIlK6pCuR5qRmteJK1ecSWXUH6N88A8PlKnJ03J2RSBarFqJiVWx62rjkWbOh6gPdKPReg4mrDpWlcu3RCOtYIW%2FJqVopKFsujx1DlqPv6MHxEagikulPhDWRYA5rZxYYoZ9rTGM8FcCXRU%2FFQ0%2Byy%2FLBnvvQLYkhm4rf04h&X-Amz-Signature=95594b871c1eecec6edfa11f472441c11e6dfdd7f9423c19c6e647e0893c940c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLETEPEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiR5jOtmBU9IZxV%2Fn2N1mvTtU1Eq3yhyw9V2z1kOFKYQIhALd6QfnCc8Iy0uxTJPr17rknHYf4e0gnNwxuyMBpFNGRKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAfwzaHq0WuaThgOoq3APpGBZMrXvO9l8ksSqH0tDmJQ%2BZynAjMogl5fsWN7580qXSxOzfAWE15fu%2Fb9US%2BvpLGOKYXZzrMChjQJWPrKy2%2BmkNdZGnITKHNud4bRyPwHppJcB%2BKvjT81XJxITyVLIuwpnRSEhTeAzt8%2F0%2BxnsrXkHkMvjy7dSxJXDJ%2BCpJUf7uV9s4Tp6s%2FpAXDnMy4LzTM1qIK5gT8siWoVirN6Qct67k0ITVNcYBuYl2nO2jZibmNYSgUY30BAzrJ84lD%2Fd%2F2aaJGV1vqNeLkMTFs%2B3reEG6U4h%2FpX3m4fZ38q3mCNzA8SEEe74uYE24p%2BY497xlMpB8tdQLY531TF5%2FvMjUunXh53X%2BdjWGWQopeUMWSuqdw3NsdjiwEJSXm0dUQMlBq%2FZCInt3qxNueAFx1pt4yKAGODUPB1jAZTERYn0IcM0B9x9r1JikzslPsg0INLlAn1SlyIOH0tFq7xEjirwPfAt6k%2FqwDK4AFcjpPfVKjF%2BWv2Ss7DVqKFlKTxQPsmoJnPyULbdSzC9WNPSqoMfzal%2F7Huofl3L0pfvtY4xAjWUnGlle7pN8mDzNNSJHElaGXSzEzr%2BpQsp59klSUWGvmC7xOtr1OeTsOTGCX5LYiHnEnt0tjM5LHntnozDOrYzKBjqkAezTUKQvdyUxYmU%2BnSh0%2F%2F2BTIltqJVqOHtsMHaZtaCWdZt%2BXJtyUIlK6pCuR5qRmteJK1ecSWXUH6N88A8PlKnJ03J2RSBarFqJiVWx62rjkWbOh6gPdKPReg4mrDpWlcu3RCOtYIW%2FJqVopKFsujx1DlqPv6MHxEagikulPhDWRYA5rZxYYoZ9rTGM8FcCXRU%2FFQ0%2Byy%2FLBnvvQLYkhm4rf04h&X-Amz-Signature=8aa22140b1c11fcf65fbdc496340520ee30b87766e775961e6dd534a4b58ada5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
