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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AATKZLF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb7lpiXaAtX1ghPwXcHJa3Wahyi1T59lE7uzTkBbUI5AIhAPP4yQ9iEJ150JoWYNzJ2e9IokcaCWvlm6qevRfN3DxiKv8DCE8QABoMNjM3NDIzMTgzODA1Igy1jwyJWgUdnUXlsUYq3APJd0y%2BMku9mLm83XPlrZuXA%2FmSva9FxzGSusLN%2B4tU%2B7XTbvWRNIT%2Bx5xrDdFhE7ljOjuUtmFltDVtLiY2mzA%2BI9KywfLgW%2BH9VQecmc1Cw85%2BN6mYniGQdqR5VJHtg7CG9zOXnSJ%2F73KRPHsauHNogwRMLNVVZ6AMk6SghErfsF4TQtLQG6rtG8D0VarJskIJvJW4OKmouVad%2FKa8qN%2BkXEYPzodLicvuC0BCD2HgOhjIhJQS4hLRAs0fDIiZ0sxmUamxCEkE9%2FO1wIattTDspj50thLjuYMAx%2F9nyZAM3KUwTnzu2vtI27oW0aVWODtJP%2BaNjp%2F1JayTpfbNrs%2BQNrf4Wl7JKGYmOf7N6tkVddef%2Fia%2Bl7i%2BhcPbSzgKHDcoiPyAECtEMgt5OoAoBgX9Pw6t7VVBn6ouRrFhZx3mbb2hUn0%2B0hXmYFDEOg0YOUcUqZ5odLgEAZ98wIbPwj2YwrKTfElJ1Do%2FGQgxtqZu5KWoBXIonzI8o76mUZR%2Bj%2BBe5sA4jawKwsXRNlDvJ8B2R%2BF39ADC2E9ybBSS1wQ5G9559yKUr9qgvXeOuGi86HlWWFo6XG6Ph6Eby9qrhss89HvWBxa1vpdoeiaSq7Rg4joeC57yE3gHLNSNfjDujMjJBjqkAUr1uK%2FkQEPzLSo2buQ9t8BS0T7pQvOXhycH6117mnL9iBMj0i4inQjMud0%2B88G5d2y3wIJYz%2F%2F6LJUOE5d2TWskRcqT52oN4gfPlAZP%2BNxHuIrHb4hFmpSQR9np3T71YtuHb85ZBSgx95RkheWVmn%2BuVkTmooVYd1sqkbt6jnJFymedjBp2cW%2B%2F66afT02A5U%2FN1P2ZJ1r4loXH6Xh5mRimDRkp&X-Amz-Signature=7610f5011ad087819ede2bf2cf786734a7e7bc015232214821133441d9501ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AATKZLF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb7lpiXaAtX1ghPwXcHJa3Wahyi1T59lE7uzTkBbUI5AIhAPP4yQ9iEJ150JoWYNzJ2e9IokcaCWvlm6qevRfN3DxiKv8DCE8QABoMNjM3NDIzMTgzODA1Igy1jwyJWgUdnUXlsUYq3APJd0y%2BMku9mLm83XPlrZuXA%2FmSva9FxzGSusLN%2B4tU%2B7XTbvWRNIT%2Bx5xrDdFhE7ljOjuUtmFltDVtLiY2mzA%2BI9KywfLgW%2BH9VQecmc1Cw85%2BN6mYniGQdqR5VJHtg7CG9zOXnSJ%2F73KRPHsauHNogwRMLNVVZ6AMk6SghErfsF4TQtLQG6rtG8D0VarJskIJvJW4OKmouVad%2FKa8qN%2BkXEYPzodLicvuC0BCD2HgOhjIhJQS4hLRAs0fDIiZ0sxmUamxCEkE9%2FO1wIattTDspj50thLjuYMAx%2F9nyZAM3KUwTnzu2vtI27oW0aVWODtJP%2BaNjp%2F1JayTpfbNrs%2BQNrf4Wl7JKGYmOf7N6tkVddef%2Fia%2Bl7i%2BhcPbSzgKHDcoiPyAECtEMgt5OoAoBgX9Pw6t7VVBn6ouRrFhZx3mbb2hUn0%2B0hXmYFDEOg0YOUcUqZ5odLgEAZ98wIbPwj2YwrKTfElJ1Do%2FGQgxtqZu5KWoBXIonzI8o76mUZR%2Bj%2BBe5sA4jawKwsXRNlDvJ8B2R%2BF39ADC2E9ybBSS1wQ5G9559yKUr9qgvXeOuGi86HlWWFo6XG6Ph6Eby9qrhss89HvWBxa1vpdoeiaSq7Rg4joeC57yE3gHLNSNfjDujMjJBjqkAUr1uK%2FkQEPzLSo2buQ9t8BS0T7pQvOXhycH6117mnL9iBMj0i4inQjMud0%2B88G5d2y3wIJYz%2F%2F6LJUOE5d2TWskRcqT52oN4gfPlAZP%2BNxHuIrHb4hFmpSQR9np3T71YtuHb85ZBSgx95RkheWVmn%2BuVkTmooVYd1sqkbt6jnJFymedjBp2cW%2B%2F66afT02A5U%2FN1P2ZJ1r4loXH6Xh5mRimDRkp&X-Amz-Signature=76b7bc266198d825e6b756d02f9a2767a7e314e7490b3d740447d377c4d9c29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
