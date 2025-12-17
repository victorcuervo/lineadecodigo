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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5GYTDK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLnfqMrQ5cboRQfHCdu2gdRf3keZgZfvUBSS7lm%2FlhKAiEA0qXQZReeuRg9SIaNHnaMs9cmdAoPGOtVAZtO3m29Nggq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHaFG2xfvaOwQXHyBircA%2FeGgFVPjdeSYkdVFpPQzB%2F4voPCUnqbQ5MmdPtb8Y%2F9hjJnHlFaDkKXmoT6%2Ftf%2F%2B9AiM4XXDe1lJuJN77Qx5%2FcQJStXswl9PtgznTbpzqmqV9VS56oLbVWU065a0uLnE0twJxTzJ9ibf2UKiGtTnQ%2FLKrDBlBQJ6xFoOsO48EQFlrtl4Cpm9hWSAOn8uZLfp6tEm94dOtL5WxZWEjai%2BmanEZ714Ncn76iXU8pQ0vbfD88TaWZgFO5MDStVjR1NyAHA%2FiwuUeCYJVt32JhFbMGZ%2BXUzFq2y%2B9QkqzdwCbuf8XFC4fR4yiXbT1Pg4tnr6%2Bk%2FJuSkH1iE71VzLpZx5%2B99UOHY4irjkwhsEAkroMc4X3mYCa8UmtbVPZV5OTGEmgAidpPnbgij24qcVYQhmtmkJfr2s4ZwRwVZK25iLwVUqw%2BBxuIBnl0A6ZNaFQNptgYTACiKJ3kSZQqDHWhLugKYKjvlfiHsGp07CXBfIwGY0e33dTWMxVkXWBTvbGJJczyCJokh0HV%2F9Rp3%2F5nrIBoAseju1WMkkhaYCQSb92cL7gD8%2FWx8%2BrRJ3%2B8qt0WsMQQqb1DBiuZSAN4SKkhdih%2FJLKggSP3IQqTzOwG%2BSwff2M6gcAzCoGOJPNqLMMzhisoGOqUBjdCmJgof%2F7o9NTFBIsGVU8oJUPbKAHFulyvcldjJCWopf8tOsYIUlrZ2wjPzzw%2B7c0RNX0BPT%2FrYjpjWqJLOvvpaRa89O5IAb0XFOmDEqPv3V1vfxSU%2BTib8hx977Y8tQ7pT93fgPPBEw3QmzYmGlqL4a6k013X1WZzGhZmyNGS%2Bmzj6JUD3hSd2xBMJ7ShdNT1M4mclt5vZ7PqGZsCm%2BMbIpDAY&X-Amz-Signature=573dbe8016e6e5392e4a8a09974f93d9b69ed9dcae567d086c08fbea017622d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5GYTDK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLnfqMrQ5cboRQfHCdu2gdRf3keZgZfvUBSS7lm%2FlhKAiEA0qXQZReeuRg9SIaNHnaMs9cmdAoPGOtVAZtO3m29Nggq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHaFG2xfvaOwQXHyBircA%2FeGgFVPjdeSYkdVFpPQzB%2F4voPCUnqbQ5MmdPtb8Y%2F9hjJnHlFaDkKXmoT6%2Ftf%2F%2B9AiM4XXDe1lJuJN77Qx5%2FcQJStXswl9PtgznTbpzqmqV9VS56oLbVWU065a0uLnE0twJxTzJ9ibf2UKiGtTnQ%2FLKrDBlBQJ6xFoOsO48EQFlrtl4Cpm9hWSAOn8uZLfp6tEm94dOtL5WxZWEjai%2BmanEZ714Ncn76iXU8pQ0vbfD88TaWZgFO5MDStVjR1NyAHA%2FiwuUeCYJVt32JhFbMGZ%2BXUzFq2y%2B9QkqzdwCbuf8XFC4fR4yiXbT1Pg4tnr6%2Bk%2FJuSkH1iE71VzLpZx5%2B99UOHY4irjkwhsEAkroMc4X3mYCa8UmtbVPZV5OTGEmgAidpPnbgij24qcVYQhmtmkJfr2s4ZwRwVZK25iLwVUqw%2BBxuIBnl0A6ZNaFQNptgYTACiKJ3kSZQqDHWhLugKYKjvlfiHsGp07CXBfIwGY0e33dTWMxVkXWBTvbGJJczyCJokh0HV%2F9Rp3%2F5nrIBoAseju1WMkkhaYCQSb92cL7gD8%2FWx8%2BrRJ3%2B8qt0WsMQQqb1DBiuZSAN4SKkhdih%2FJLKggSP3IQqTzOwG%2BSwff2M6gcAzCoGOJPNqLMMzhisoGOqUBjdCmJgof%2F7o9NTFBIsGVU8oJUPbKAHFulyvcldjJCWopf8tOsYIUlrZ2wjPzzw%2B7c0RNX0BPT%2FrYjpjWqJLOvvpaRa89O5IAb0XFOmDEqPv3V1vfxSU%2BTib8hx977Y8tQ7pT93fgPPBEw3QmzYmGlqL4a6k013X1WZzGhZmyNGS%2Bmzj6JUD3hSd2xBMJ7ShdNT1M4mclt5vZ7PqGZsCm%2BMbIpDAY&X-Amz-Signature=34e046bf36f394fdf6de5b7242fbaf9840d4376ad123e07e2a02b17bfcf438ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
