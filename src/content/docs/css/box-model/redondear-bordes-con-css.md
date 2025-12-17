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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGH3OWX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXg2X812pZnIckcXX0GrVdfgAmQPa8kyV0LJgqiIhy2wIhAMZU%2BUvkHANY3Sj7Wb6kfKdb04KF9Qguycd8mAjJ6NSgKv8DCHkQABoMNjM3NDIzMTgzODA1IgzR33xLVxgeTUgQVQwq3AMUTq7HBef8NLuG6TCntb2s4vfKaHalygZzeOutyLj8fuqasqdYFpLE%2BhVsluZ72t4U9IzOnHtQ5P6GKn%2Bmq%2BRAH2AjLZ1WoIKg3qipY5QokANBUzBkMSCrulQ4Xr%2BRWV7%2FwL3GpFHXPBssSnE1lj%2FDUmd3SRPb3CQo0mwdaQlrR%2FAlC9VsYoscyjTkBvYs%2B3rVstlz64BjGj4fgDGWHBecOqRWa0XVIdO0K5f8pqY%2FqlPa66N1Lb%2B93soS%2Fs%2Bken5xQdtJbxwVUKkfTHW7evo02YkyB36TkrEK3QlBDQPPnKsM9t8AODdBF%2Bu4sDLJ916biTloS7u4mfjVLC%2Fydxi7bKyQzT9aBYsnQ5%2FDUu3nMmSwWIZgRMmOC4HWVJs1EJDofjEFavckXYfSALp3Hh1dMheEz3z2vv269GMpwpE0HwkSpZ4Ll%2FoqSg1DPtPj8GWoSC%2F9Cp7DHykOZ7yb5ftStSC8pu9cqpLdN%2Fech8h6%2F8tLIg0H9c5eVonfKiChtM6VRVXegCQBIw58PxqEI1YsRXKtWbKDHFt7vr7kX2l8wtDNlHlVf%2B5qsG0qvtgVosNTkJY4OSkKEI52KVDPzEnIMcjNa3X%2Fzbj5dYaOgb%2B3dvBsFYnTdAF1H8KsJDCwuInKBjqkAf7E2UoG9KOb%2FeXhov5kmus0ErNhNCAu6833VMfPM4bGARuMfBuxxc%2FmNWBzKyi04Uu9JdaTj7z5bIr3rnyfGoxlKlVTsml%2FHV%2Bet91t98EmmkSiZztxbELFbFtI4CkB5%2BtrxE6lrte9BW4MuGh1iw5ZB2PY7GdC6H8PjGXPX8pKW25QuyjqCCbRn5XrppJSYWWyW43Pw5InxwTw1T1YrMj%2BD00O&X-Amz-Signature=37d3800d8b5bb4ffe2277a594aa4dfc5bcd845cd0a810a33b8562278d8f6070f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGH3OWX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXg2X812pZnIckcXX0GrVdfgAmQPa8kyV0LJgqiIhy2wIhAMZU%2BUvkHANY3Sj7Wb6kfKdb04KF9Qguycd8mAjJ6NSgKv8DCHkQABoMNjM3NDIzMTgzODA1IgzR33xLVxgeTUgQVQwq3AMUTq7HBef8NLuG6TCntb2s4vfKaHalygZzeOutyLj8fuqasqdYFpLE%2BhVsluZ72t4U9IzOnHtQ5P6GKn%2Bmq%2BRAH2AjLZ1WoIKg3qipY5QokANBUzBkMSCrulQ4Xr%2BRWV7%2FwL3GpFHXPBssSnE1lj%2FDUmd3SRPb3CQo0mwdaQlrR%2FAlC9VsYoscyjTkBvYs%2B3rVstlz64BjGj4fgDGWHBecOqRWa0XVIdO0K5f8pqY%2FqlPa66N1Lb%2B93soS%2Fs%2Bken5xQdtJbxwVUKkfTHW7evo02YkyB36TkrEK3QlBDQPPnKsM9t8AODdBF%2Bu4sDLJ916biTloS7u4mfjVLC%2Fydxi7bKyQzT9aBYsnQ5%2FDUu3nMmSwWIZgRMmOC4HWVJs1EJDofjEFavckXYfSALp3Hh1dMheEz3z2vv269GMpwpE0HwkSpZ4Ll%2FoqSg1DPtPj8GWoSC%2F9Cp7DHykOZ7yb5ftStSC8pu9cqpLdN%2Fech8h6%2F8tLIg0H9c5eVonfKiChtM6VRVXegCQBIw58PxqEI1YsRXKtWbKDHFt7vr7kX2l8wtDNlHlVf%2B5qsG0qvtgVosNTkJY4OSkKEI52KVDPzEnIMcjNa3X%2Fzbj5dYaOgb%2B3dvBsFYnTdAF1H8KsJDCwuInKBjqkAf7E2UoG9KOb%2FeXhov5kmus0ErNhNCAu6833VMfPM4bGARuMfBuxxc%2FmNWBzKyi04Uu9JdaTj7z5bIr3rnyfGoxlKlVTsml%2FHV%2Bet91t98EmmkSiZztxbELFbFtI4CkB5%2BtrxE6lrte9BW4MuGh1iw5ZB2PY7GdC6H8PjGXPX8pKW25QuyjqCCbRn5XrppJSYWWyW43Pw5InxwTw1T1YrMj%2BD00O&X-Amz-Signature=84d6c6d3437c4980ad1f1ae6375f18855f284dcd570ebe9bdfa0a3dc9c27a15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
