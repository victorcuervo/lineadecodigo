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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRIUSM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxTV05CPGBXiLo7aT56JirJFh7gW1TZo7to6CbRwuNzAiAsT9yOwS3WJHAF9bXsunbZmO6PUqQ5aa6BjFocMuSURiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79yIU%2Bd6QpaKcz3GKtwDBg2Wv0YfwR44SG6soD0KzweL5FE7Hz9hLDxU0B27E9bWmh81wipimgoTfL7QQNTlX7%2FvAvxuuHV9lOys2JLvqn3dNnU9mw%2BaVELoadfNHiwmwjwKG%2FDsCYmcMNbrez%2FHpyWbUqknu%2By511gR9ImWumjkXoG3tyMr4dOZ971MR23FdAqbleZKSmoaChrxwTBLj0uwc0zL1Jd8lp21ZS29%2FoupwE5naAF%2FVt%2Fu%2FOheotZR5%2FntgCg8wQdtD1BJMidvWNynbqLjelV97CveikVid8nix7W5akvhbw3YIDWHheG7hurJKgj4yx9st4hMeCHWg0UQBXzLITCyb7ftr0jNHpUfj5yFOuPHoHSs33gq0p1hJ%2FRTd8Rajto8aYJbRwrCpGy2Lz2YswfTC6JGx5pCf8%2BoCijq98VQVbbyISCevTC6COiKQoPQ2L9t1hYApbFa4j1bQI1XxsIl2Ryqg26ff6b3g%2BPhniBLQead%2BmbwxXMK2RxJ9M9uqR%2FyEf6%2BWtIJC4%2FsMH7d%2F366RHPlL5KcbqmviJ%2B62dlige4nF0aBwjaGcw4fUZrIrQ8Gdi4nZn7ztLz5IyTUFaG4KF6Fm9SzG7wbaIBgjLg0xxuuoURxzdeIAvqnB5fP9R141rIw8KCLygY6pgEu8sX89s30iqbB3WPLOKEPk8MwMQETZlnpcLLUlM2t2FuaAl2slfuE0aSKMjjbM9EHppaqJFIoOOkTUpkOLCukvZLnifjBrylLM%2BoVYJ7t2nQw4nDnbioxoZxv7YlaaN3%2BeaJW5%2FjTPkgEdv3pCCPfNA6jh57Yx0GiuSowLsPGRe8ok9c%2FXvvs6zaG%2B9amidMtpiGD4tW%2BggpybeDkfPVaYLpJaW8J&X-Amz-Signature=05c7b22e7a93ef386f0eb6bcb38d554c2a5fbc36289fb3c7daf2fc06bc1e216a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRIUSM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxTV05CPGBXiLo7aT56JirJFh7gW1TZo7to6CbRwuNzAiAsT9yOwS3WJHAF9bXsunbZmO6PUqQ5aa6BjFocMuSURiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79yIU%2Bd6QpaKcz3GKtwDBg2Wv0YfwR44SG6soD0KzweL5FE7Hz9hLDxU0B27E9bWmh81wipimgoTfL7QQNTlX7%2FvAvxuuHV9lOys2JLvqn3dNnU9mw%2BaVELoadfNHiwmwjwKG%2FDsCYmcMNbrez%2FHpyWbUqknu%2By511gR9ImWumjkXoG3tyMr4dOZ971MR23FdAqbleZKSmoaChrxwTBLj0uwc0zL1Jd8lp21ZS29%2FoupwE5naAF%2FVt%2Fu%2FOheotZR5%2FntgCg8wQdtD1BJMidvWNynbqLjelV97CveikVid8nix7W5akvhbw3YIDWHheG7hurJKgj4yx9st4hMeCHWg0UQBXzLITCyb7ftr0jNHpUfj5yFOuPHoHSs33gq0p1hJ%2FRTd8Rajto8aYJbRwrCpGy2Lz2YswfTC6JGx5pCf8%2BoCijq98VQVbbyISCevTC6COiKQoPQ2L9t1hYApbFa4j1bQI1XxsIl2Ryqg26ff6b3g%2BPhniBLQead%2BmbwxXMK2RxJ9M9uqR%2FyEf6%2BWtIJC4%2FsMH7d%2F366RHPlL5KcbqmviJ%2B62dlige4nF0aBwjaGcw4fUZrIrQ8Gdi4nZn7ztLz5IyTUFaG4KF6Fm9SzG7wbaIBgjLg0xxuuoURxzdeIAvqnB5fP9R141rIw8KCLygY6pgEu8sX89s30iqbB3WPLOKEPk8MwMQETZlnpcLLUlM2t2FuaAl2slfuE0aSKMjjbM9EHppaqJFIoOOkTUpkOLCukvZLnifjBrylLM%2BoVYJ7t2nQw4nDnbioxoZxv7YlaaN3%2BeaJW5%2FjTPkgEdv3pCCPfNA6jh57Yx0GiuSowLsPGRe8ok9c%2FXvvs6zaG%2B9amidMtpiGD4tW%2BggpybeDkfPVaYLpJaW8J&X-Amz-Signature=a7d2db430caa57f5e3563845a090ab23eab3f7f65b44a7a19b65855218f79546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
