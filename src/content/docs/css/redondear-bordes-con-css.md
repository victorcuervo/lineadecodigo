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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTO3WX7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ2v52rDAounFQaKbVifrNGj900WqZOC2ugiADcfp2sAIgIyu2xbb5%2B0zhkgupbybOnacFMvQ3JE4ANZZPXejqdGAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP3Bm7XYQ0Hb3%2FDs%2ByrcA3VYa3xH0LeIHGYZPAMunkbkWv4%2Foew1YE4mzc5GjTgKbVQqEqSDOs%2BAeOA%2B%2BP1yhHGMIt4f7a%2BksQDVF%2BStB6UF0XDdVUFpcqaOFNNPXv%2BtFufG6lYb8bkcMchBAReWX%2Fr36%2Fxxx267Y%2FqWErfcPBvpFG9hzV7GMhpyvKuNb67Wt6rruCCe3ZsVgkOYfJMKdweK%2FKNiURjqHM41UAif%2Blh0nXdUHkMinN%2F6fFnhJJeo1lf5ioucAGHgJ0tODOdp9beZtNWTy24ikymuE7nsqUopWyCD7TrF9hhB8%2FLFInCsSqbIrSPWI5KkLsV%2BJ6pyH%2B1U89Ot4vAIwsQ%2FGT5m%2BUVCxwIdZ5BjHzKLzz2yGq8mXnKU5tprY9HPHgyFsu0ceApay105sIpj6BQg74xvK9mkqak6RGyusQV20fHhcjk9WZdpzKdNX8Xpr%2Bb8W%2BmIX3naaziz1Ev8BT5YJzmW9dHjQV2bzKo2Bzs5El4gx2HrY0A2kJQcfZqI7XNoqZRaalTuoMrISQvVPJu6%2Bk1gM7oeUpHQYs0NuvZviUmFg5QyXuXt4tahtSaWIP86S%2FqJfzSmgGZwtR2d4yV9KsgfkXsemL2Cnifmpk8F2iLcQpD1JbgbDjk3Ljz5KX3TMO6m0MkGOqUBgvDtOQSRjXcYdwosIhbL1s4PiwVYTilK5XoAAlpQe77Ye60CRiA047aiamaiL41n1CsEGRRYsWXE89gfIOPOAdlK0Dyez9JYxsW77wd%2BppGN2ClAsHrUF2Ml8TiUiwHUMVMlXWSZSjtGvSC7%2FtN2uHTqeXXXlZrGTKtDKO6ZY6yucw8z%2FylekAbUHRH3SrRAaTLbSKpOnrFF5kV26qYU3JWXlxPq&X-Amz-Signature=5fb9acd80e34e23a61378bf18a658accb8f6edebcfe5643adccea2ee56bd6ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTO3WX7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ2v52rDAounFQaKbVifrNGj900WqZOC2ugiADcfp2sAIgIyu2xbb5%2B0zhkgupbybOnacFMvQ3JE4ANZZPXejqdGAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP3Bm7XYQ0Hb3%2FDs%2ByrcA3VYa3xH0LeIHGYZPAMunkbkWv4%2Foew1YE4mzc5GjTgKbVQqEqSDOs%2BAeOA%2B%2BP1yhHGMIt4f7a%2BksQDVF%2BStB6UF0XDdVUFpcqaOFNNPXv%2BtFufG6lYb8bkcMchBAReWX%2Fr36%2Fxxx267Y%2FqWErfcPBvpFG9hzV7GMhpyvKuNb67Wt6rruCCe3ZsVgkOYfJMKdweK%2FKNiURjqHM41UAif%2Blh0nXdUHkMinN%2F6fFnhJJeo1lf5ioucAGHgJ0tODOdp9beZtNWTy24ikymuE7nsqUopWyCD7TrF9hhB8%2FLFInCsSqbIrSPWI5KkLsV%2BJ6pyH%2B1U89Ot4vAIwsQ%2FGT5m%2BUVCxwIdZ5BjHzKLzz2yGq8mXnKU5tprY9HPHgyFsu0ceApay105sIpj6BQg74xvK9mkqak6RGyusQV20fHhcjk9WZdpzKdNX8Xpr%2Bb8W%2BmIX3naaziz1Ev8BT5YJzmW9dHjQV2bzKo2Bzs5El4gx2HrY0A2kJQcfZqI7XNoqZRaalTuoMrISQvVPJu6%2Bk1gM7oeUpHQYs0NuvZviUmFg5QyXuXt4tahtSaWIP86S%2FqJfzSmgGZwtR2d4yV9KsgfkXsemL2Cnifmpk8F2iLcQpD1JbgbDjk3Ljz5KX3TMO6m0MkGOqUBgvDtOQSRjXcYdwosIhbL1s4PiwVYTilK5XoAAlpQe77Ye60CRiA047aiamaiL41n1CsEGRRYsWXE89gfIOPOAdlK0Dyez9JYxsW77wd%2BppGN2ClAsHrUF2Ml8TiUiwHUMVMlXWSZSjtGvSC7%2FtN2uHTqeXXXlZrGTKtDKO6ZY6yucw8z%2FylekAbUHRH3SrRAaTLbSKpOnrFF5kV26qYU3JWXlxPq&X-Amz-Signature=b6397f6e18727122655760dc43404051477c0a844c5fa2a32349dc84f7a56620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
