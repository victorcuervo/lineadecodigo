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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5DVX42%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICT3ff0SGHGooQLfQOmcBkhxiS4LVaVxzGOXPbL4kn0XAiBryWm6s810i34Hnn3SoFHpC%2FQiii6WTGVpEae2YcLLrSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMKh6rOEdGCMF%2BRObwKtwDn2j9QakUMvjvw%2BOTvREPr%2F7JluVUBUDPuxyam6Z8fLl1RkvDbHVrwDuYWHh12bCpW7um6EykYkCLuoYjO%2FQcrk7PRweeCb%2F%2FZnSwFE2XRO9F4SoXZM1GpqyrLELtGBevQLpSFQSB1BdrMNaE5K6D%2BtV0ieCJOyvMbS1NFn%2F4UXT%2F3E2oTDojybTQxuaJqI%2B3e4h2VRkC9IxT4GDC%2FQO8SLkCXyNeaBqZEuvRKl9cSy0QgcZ%2FUc%2FXtUAymR0uSNfAOzN%2F0JC0%2FAhmLfk2SYzML88peos%2BCuMIa%2BuZtAvSoXRf%2FXmj3jDkvqnNZw01oB5ppLGV8urRazmMqXX7aYfovL%2BTIBbkmHjX37%2F3hlES%2BCEWC7TDQ8%2Bn8oFq39vcQEMgOGxFHgWXt6vOpu0YY1r%2BhgmGqJOZf143EfaftomIIWs97icnv0%2FjSJAz%2BBdgb3NTvma8YPGAhrMJ3yf%2FR7QMpI%2Bl05RJenMOgJiGB4aer5xbosK6%2FFj7WkuZxFcLWW1zx5%2FjyqQTUYzTr6Q5nbN6Pnco68WIwWHNXD6rdtIijQQrJOZe7b3PnRkxDDxyPOcBDVkBNoGYfbhyE9XJHOji41d%2B6i1IBERsQNRCMahq2nOKDvE9%2BE1x1yj2i5Mw3a3JyQY6pgEK6Z8T796ytfTPxywvF%2BQZuo57qqa6amMhlBDgQqgNdhJ%2FzCW2nOLpFR4CuPZxuK%2FsbCe3y6VQGOquy2cPLVPdZ8tDculXJmIvUUQY1pcyrqF9TgQcKWpuDaS%2Bep1OSF6gvAu63SL9F%2FId%2BPhMxb5tlRy3MM%2FO0Z040tDbV4GpxpzH39nxPYNqIdQg2Vqf60NLhrBq4OR6GVCJYbkNJYvcHynkJaj2&X-Amz-Signature=6688d2f2acd4273676ae58a1b2a1262acef02b3c55724be4c16e71e903516a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5DVX42%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICT3ff0SGHGooQLfQOmcBkhxiS4LVaVxzGOXPbL4kn0XAiBryWm6s810i34Hnn3SoFHpC%2FQiii6WTGVpEae2YcLLrSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMKh6rOEdGCMF%2BRObwKtwDn2j9QakUMvjvw%2BOTvREPr%2F7JluVUBUDPuxyam6Z8fLl1RkvDbHVrwDuYWHh12bCpW7um6EykYkCLuoYjO%2FQcrk7PRweeCb%2F%2FZnSwFE2XRO9F4SoXZM1GpqyrLELtGBevQLpSFQSB1BdrMNaE5K6D%2BtV0ieCJOyvMbS1NFn%2F4UXT%2F3E2oTDojybTQxuaJqI%2B3e4h2VRkC9IxT4GDC%2FQO8SLkCXyNeaBqZEuvRKl9cSy0QgcZ%2FUc%2FXtUAymR0uSNfAOzN%2F0JC0%2FAhmLfk2SYzML88peos%2BCuMIa%2BuZtAvSoXRf%2FXmj3jDkvqnNZw01oB5ppLGV8urRazmMqXX7aYfovL%2BTIBbkmHjX37%2F3hlES%2BCEWC7TDQ8%2Bn8oFq39vcQEMgOGxFHgWXt6vOpu0YY1r%2BhgmGqJOZf143EfaftomIIWs97icnv0%2FjSJAz%2BBdgb3NTvma8YPGAhrMJ3yf%2FR7QMpI%2Bl05RJenMOgJiGB4aer5xbosK6%2FFj7WkuZxFcLWW1zx5%2FjyqQTUYzTr6Q5nbN6Pnco68WIwWHNXD6rdtIijQQrJOZe7b3PnRkxDDxyPOcBDVkBNoGYfbhyE9XJHOji41d%2B6i1IBERsQNRCMahq2nOKDvE9%2BE1x1yj2i5Mw3a3JyQY6pgEK6Z8T796ytfTPxywvF%2BQZuo57qqa6amMhlBDgQqgNdhJ%2FzCW2nOLpFR4CuPZxuK%2FsbCe3y6VQGOquy2cPLVPdZ8tDculXJmIvUUQY1pcyrqF9TgQcKWpuDaS%2Bep1OSF6gvAu63SL9F%2FId%2BPhMxb5tlRy3MM%2FO0Z040tDbV4GpxpzH39nxPYNqIdQg2Vqf60NLhrBq4OR6GVCJYbkNJYvcHynkJaj2&X-Amz-Signature=0e26b0c453cf51637436be31551091469b4f205d153cf8dab9ae29e0973f62f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
