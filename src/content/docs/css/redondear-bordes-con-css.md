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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYAKQ6E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNrGZq%2B1ThgY2SfhTKWiS85Bi570oDJztT0eeJuvUm0AIgYoiXJlDqPVED4JnERPJMdIENLUi2qBXH1mFu3QRpp0sqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6tpJaKXr7zenP7pSrcA0H8lzk30Gn%2BjkwFJC1%2BtuSD1GbCEBVkpXvTDPzTCSWA1ILpOawBTLpZTKoPnjL5cXJeiBAnHis1h6CGAPYlG1BXL3K9db6knhhibtvIcE2Aki%2BgnKl08Gs4JZaBYKCu5GY6beYoEse1Ibg1BPzwQZRueaiyDjj0khW5a%2BCEujx8bHM%2BMVT0S4yncwZgKv6xgUWCBJ%2BZ9i%2Fm59bAtFuz%2B62g%2BlWqDjF5Zere5l5lEI7oASmKrqrbym1PKi4kieveT%2B5s5cQfpO58PQ3MJn%2BigsghDVoHhZhnzDBOL02vNHaljMTGADlLF2O%2FWQ7Caru81ZaVf4VQhzvATLhP3UVGKwhYCZApQW3GBnI4baZLomJqkipwhGh1oKODejaG1ZVLpjHll61iAyoP9EV6doepp%2BqLhBEKUIoMB4iI0LPNhqPDtkBWxyQ3qgWTOgboN7Frhb630Grp0Py69xQHM8ccUsroeC2GVGSTSGaTfFiSIrzl%2FlJA3ixxvGpyDd7RsNgaWsAxeCJPd9elVr%2Bs6SzWZBFgYQLrtV%2Fx5%2B5sjP1DQphY3G7Ores%2B1e66DrK4WbD6IoPpN7pMXbbP4VqCgtVj688i1M40zdSjZdeKt%2FwJE0td2umCu%2FNURzZ%2BzbtiMJ6Q28kGOqUB76Nafk8%2F14bFMBMk7ii0dwTsjsCXrgO5heO3Czftpp%2FLvxRvDob7QzuuiaZYTteuIYQW5HK0qZdeVRk%2BZk8l34zYk%2BV4yG20R2zNDOpfHFsNbzbP%2Fn4Y6yGzFYBX6s3axsaERXAhv5gZjXd5OjKaGf7e3jh1Dk3FrLaUGi%2FHNzZba5qj1CpJ%2F2SuLxWI60rzViI4p9uQIfD3e3SGXeaT86y6RVb4&X-Amz-Signature=2de6601684665137282e48dd1514e245ee04b86685b3a73bcf4f3da3696c4eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYAKQ6E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNrGZq%2B1ThgY2SfhTKWiS85Bi570oDJztT0eeJuvUm0AIgYoiXJlDqPVED4JnERPJMdIENLUi2qBXH1mFu3QRpp0sqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6tpJaKXr7zenP7pSrcA0H8lzk30Gn%2BjkwFJC1%2BtuSD1GbCEBVkpXvTDPzTCSWA1ILpOawBTLpZTKoPnjL5cXJeiBAnHis1h6CGAPYlG1BXL3K9db6knhhibtvIcE2Aki%2BgnKl08Gs4JZaBYKCu5GY6beYoEse1Ibg1BPzwQZRueaiyDjj0khW5a%2BCEujx8bHM%2BMVT0S4yncwZgKv6xgUWCBJ%2BZ9i%2Fm59bAtFuz%2B62g%2BlWqDjF5Zere5l5lEI7oASmKrqrbym1PKi4kieveT%2B5s5cQfpO58PQ3MJn%2BigsghDVoHhZhnzDBOL02vNHaljMTGADlLF2O%2FWQ7Caru81ZaVf4VQhzvATLhP3UVGKwhYCZApQW3GBnI4baZLomJqkipwhGh1oKODejaG1ZVLpjHll61iAyoP9EV6doepp%2BqLhBEKUIoMB4iI0LPNhqPDtkBWxyQ3qgWTOgboN7Frhb630Grp0Py69xQHM8ccUsroeC2GVGSTSGaTfFiSIrzl%2FlJA3ixxvGpyDd7RsNgaWsAxeCJPd9elVr%2Bs6SzWZBFgYQLrtV%2Fx5%2B5sjP1DQphY3G7Ores%2B1e66DrK4WbD6IoPpN7pMXbbP4VqCgtVj688i1M40zdSjZdeKt%2FwJE0td2umCu%2FNURzZ%2BzbtiMJ6Q28kGOqUB76Nafk8%2F14bFMBMk7ii0dwTsjsCXrgO5heO3Czftpp%2FLvxRvDob7QzuuiaZYTteuIYQW5HK0qZdeVRk%2BZk8l34zYk%2BV4yG20R2zNDOpfHFsNbzbP%2Fn4Y6yGzFYBX6s3axsaERXAhv5gZjXd5OjKaGf7e3jh1Dk3FrLaUGi%2FHNzZba5qj1CpJ%2F2SuLxWI60rzViI4p9uQIfD3e3SGXeaT86y6RVb4&X-Amz-Signature=5e9a7ba2ec124a26c86c83f338bba8eca4232326067e202bff0e054b70a96563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
