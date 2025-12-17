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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QQTM7HR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLnf4jcFyEys2rM4SmYstoO%2FVXc2%2FMbbRyqDxqbKL3HAiALo96BrQOB4aOqe%2FqB6YcVsA4SeG7cgN7aj%2BjnKHaPASqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Zc3oQs59CGAqeu4KtwDqSmtY%2FkHIPOVOEpEi%2FepQMlRpl3Nx%2B0cu%2BFCifu7pK%2FNfQ2WcFpRqtPwCKOkaH%2Fzlykbq9XeIqspvf%2BHxq4loeJpEcj6kwhwwqk6q5DWYYrvm%2FEm5ZeefdpqcAIFCPJvGDvdHNGS9XWg52z3V0VNsTve6H2FL78VG9wCl9VaO%2BeFRjZDpXhj5VmFDngAYeRO6MjbRkXHeSwoHRnkB2%2BGm6PUABf77KqNgxBuE%2BBdS2%2FTmdDgxlBJcq8O9PREjNvqPyEqUmbscu9i2ZRktyJEKX8V4FCToWf6PBC3GNiJMimQ6dPeU0Vl%2FF0%2B6UMWckcgyByKvF8WXadiB8rxtwoyul2RnUF%2BF7%2F3novz0v4rp%2FwNuNt0xZPc0kHZNqy0VX6eZgHg4uWEFDdgVmnyHbWOxhtsWj3sqjxWrDk2tKo9H2%2BmIabU6hT9wuo0orB2vNdo3D66%2BcJ%2B4SCbiEwsn3QxDySlthCQzqgC15%2B%2Fz2JyBb32mPVtests96cra9SZK%2FxCpo%2FpKmpwhmQtr%2FYlwmUPQOJScXsbvQabgFqPf7jiM7IJ9NDEcLsPu9Habeh379vb2EwTdPw6t21Q5aLsIwSN2vHV2lLey4WVMTX4LrxcFYApIIroR3vaNhTeVagwzouMygY6pgHqXpnszQvw1f%2FbEa%2FA1rslzPSx5t8soHkiRIcTxULW0sg6OGyVZJu2QCBOzuoNAuzY%2Fd%2F8Pv7epJdyrTv1HIXptocP4LgApsxj39qTmKmxOm8jLj4DIioexT5oorlePC3Dpbs5bQKWfsf%2BVEpBwgRYet5eH2JSIahgAm2vAu%2BtqKQ%2FO2Ng4hkO2KPVj5Y0sD1OM8iyC2xPxwO7JzgdQFs3LNdQPlpl&X-Amz-Signature=ed85a834b19f6cc25f257d550bc13a08fedfb54f44d7984fbd06192452301a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QQTM7HR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLnf4jcFyEys2rM4SmYstoO%2FVXc2%2FMbbRyqDxqbKL3HAiALo96BrQOB4aOqe%2FqB6YcVsA4SeG7cgN7aj%2BjnKHaPASqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Zc3oQs59CGAqeu4KtwDqSmtY%2FkHIPOVOEpEi%2FepQMlRpl3Nx%2B0cu%2BFCifu7pK%2FNfQ2WcFpRqtPwCKOkaH%2Fzlykbq9XeIqspvf%2BHxq4loeJpEcj6kwhwwqk6q5DWYYrvm%2FEm5ZeefdpqcAIFCPJvGDvdHNGS9XWg52z3V0VNsTve6H2FL78VG9wCl9VaO%2BeFRjZDpXhj5VmFDngAYeRO6MjbRkXHeSwoHRnkB2%2BGm6PUABf77KqNgxBuE%2BBdS2%2FTmdDgxlBJcq8O9PREjNvqPyEqUmbscu9i2ZRktyJEKX8V4FCToWf6PBC3GNiJMimQ6dPeU0Vl%2FF0%2B6UMWckcgyByKvF8WXadiB8rxtwoyul2RnUF%2BF7%2F3novz0v4rp%2FwNuNt0xZPc0kHZNqy0VX6eZgHg4uWEFDdgVmnyHbWOxhtsWj3sqjxWrDk2tKo9H2%2BmIabU6hT9wuo0orB2vNdo3D66%2BcJ%2B4SCbiEwsn3QxDySlthCQzqgC15%2B%2Fz2JyBb32mPVtests96cra9SZK%2FxCpo%2FpKmpwhmQtr%2FYlwmUPQOJScXsbvQabgFqPf7jiM7IJ9NDEcLsPu9Habeh379vb2EwTdPw6t21Q5aLsIwSN2vHV2lLey4WVMTX4LrxcFYApIIroR3vaNhTeVagwzouMygY6pgHqXpnszQvw1f%2FbEa%2FA1rslzPSx5t8soHkiRIcTxULW0sg6OGyVZJu2QCBOzuoNAuzY%2Fd%2F8Pv7epJdyrTv1HIXptocP4LgApsxj39qTmKmxOm8jLj4DIioexT5oorlePC3Dpbs5bQKWfsf%2BVEpBwgRYet5eH2JSIahgAm2vAu%2BtqKQ%2FO2Ng4hkO2KPVj5Y0sD1OM8iyC2xPxwO7JzgdQFs3LNdQPlpl&X-Amz-Signature=507615233f81302c21314a03463b45bd0a1c6294eb4c5c7ff2ddc859249cc505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
