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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3AHI36%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNURDkiywZD1EbQFFYLfCDvUGuF354s2aJ93S9G%2F%2F1CAIhAKm0hZ9daq5%2B6t6Nbj6uIq0hryNvOaCnNhOcUMke5AqAKv8DCHoQABoMNjM3NDIzMTgzODA1IgyLWgVWHUjka26pTQ8q3AO%2BpdyORd5sF4DHrlFviRJxk1WX3h4nLd7iRpnFrHHbLQw01lqJvRqx1%2FzNA36g%2Bq6tt2E0WOjrbKA6l%2FbGI9PsasvNRzGvVS%2FPdwxU2dMr%2ByjXAASM5%2BIyMH0ESXvcfeg2NZA33TYhRjRnJ2E9X47YNUARMHlyUgCBf%2FG48KCO1yMZXe4Qm3iXSlVofgeAljaQmhSzhBudCpRYpQNp%2FDQ66fyIEHf%2Be8wzQDauKNYFi%2FkzmFtIWKH674ckfA7TaQm7BoPLRhrmaeRtkHvQV%2Fq%2BC0TLXLmgdZ3bneo05G4jbeBqSe9kc5420viuMgHkmBrioFSIjoJtffvwRsFrpXQ39k8YeZlbFwzLAvYO%2FvnnhQxsQhZ3QhHjIropQfLClDdFDWNQga6xJpXdaTVgP5Ms05xgRJbsCDZ%2BQ2DSMmgcTbKtI%2BgSIBfhvTA0t3yTj8Th7cHE%2Fx5o2JH41SD6JR6KVz4HRzZCN3BpkMoaCh39n76grv%2FZZcC%2FDdt8kKhjy2fWnHhNloUH%2BOPGTIWyDx%2BkLVhxfdYiVsb46TnBRwH6tPgd8%2F9%2FYPKE1gAtzFyXtTZCYbKozyzTg3q27QhAWOnjKYe2H4N4OTP9TzYH6cambEUYCZ9E6b5yqh5DgDDiw9HJBjqkAZacupLaKxCXN3XovkgWJ%2BDcoomjtb1s8PmFPF6374FsLABrb67hm3HcykVH%2BbuCnDURtVjpPgimup7eQ%2Br2CjDPfNAAGGjZunEJycIOQHrXbs%2F%2BlCnbV3b7ipIT8%2BMfNqL03s1CWzioag60Nj%2FIY%2B81PjKip5YuwBaVXCnt5q2mvaRcqga0x61GpjRtXGPTPxC5nfAPVKCbRlzCukWJEjL8xK9Z&X-Amz-Signature=dd0928d4b51b0ec617f4c2a1c73cf7040d00cea5875c1f7969e67238c92bbaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3AHI36%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNURDkiywZD1EbQFFYLfCDvUGuF354s2aJ93S9G%2F%2F1CAIhAKm0hZ9daq5%2B6t6Nbj6uIq0hryNvOaCnNhOcUMke5AqAKv8DCHoQABoMNjM3NDIzMTgzODA1IgyLWgVWHUjka26pTQ8q3AO%2BpdyORd5sF4DHrlFviRJxk1WX3h4nLd7iRpnFrHHbLQw01lqJvRqx1%2FzNA36g%2Bq6tt2E0WOjrbKA6l%2FbGI9PsasvNRzGvVS%2FPdwxU2dMr%2ByjXAASM5%2BIyMH0ESXvcfeg2NZA33TYhRjRnJ2E9X47YNUARMHlyUgCBf%2FG48KCO1yMZXe4Qm3iXSlVofgeAljaQmhSzhBudCpRYpQNp%2FDQ66fyIEHf%2Be8wzQDauKNYFi%2FkzmFtIWKH674ckfA7TaQm7BoPLRhrmaeRtkHvQV%2Fq%2BC0TLXLmgdZ3bneo05G4jbeBqSe9kc5420viuMgHkmBrioFSIjoJtffvwRsFrpXQ39k8YeZlbFwzLAvYO%2FvnnhQxsQhZ3QhHjIropQfLClDdFDWNQga6xJpXdaTVgP5Ms05xgRJbsCDZ%2BQ2DSMmgcTbKtI%2BgSIBfhvTA0t3yTj8Th7cHE%2Fx5o2JH41SD6JR6KVz4HRzZCN3BpkMoaCh39n76grv%2FZZcC%2FDdt8kKhjy2fWnHhNloUH%2BOPGTIWyDx%2BkLVhxfdYiVsb46TnBRwH6tPgd8%2F9%2FYPKE1gAtzFyXtTZCYbKozyzTg3q27QhAWOnjKYe2H4N4OTP9TzYH6cambEUYCZ9E6b5yqh5DgDDiw9HJBjqkAZacupLaKxCXN3XovkgWJ%2BDcoomjtb1s8PmFPF6374FsLABrb67hm3HcykVH%2BbuCnDURtVjpPgimup7eQ%2Br2CjDPfNAAGGjZunEJycIOQHrXbs%2F%2BlCnbV3b7ipIT8%2BMfNqL03s1CWzioag60Nj%2FIY%2B81PjKip5YuwBaVXCnt5q2mvaRcqga0x61GpjRtXGPTPxC5nfAPVKCbRlzCukWJEjL8xK9Z&X-Amz-Signature=b26cb8cb2f7f3e46c357838b831fd893ef76a7a752c2b612a153591546c8dd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
