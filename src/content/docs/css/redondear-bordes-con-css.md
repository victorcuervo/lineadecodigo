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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X7NXC4R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIBpnko4bfPnJQdVc4KlcaXE7S7HHJ0gOFzeWztfVPwIgJrwCJOfr4%2BQtiAbARD4XwYXuN2eQ6TDCIk2QflqhueIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMxnrVHE5BTReuIUyrcA%2FpIveP%2FLn3upy2QJCVeOBSjdAKML7V%2FX%2FyTbtkdJOIDTWQn3WHh5nDSke2gJP3ww2qLBBzBVYPVhAiI1rbaZCIK0%2F1XwU5lbSr2lPWxX%2FBzP8XJGvTWj6I2dvQfjnIX7jANMat9wxUv3BvXtj0fR0sunbs9hOGthNulN0CeODVCTVBUMh9CItPl%2F3Yk%2BPSig7CZWyF5rHvTZtqjvNH58I5VpQLOBsT5OaABF%2FapKISf9zAZv1QVU3m7RmXK1IlRKm2H%2Fwy1c2L324DpZVn8fOjgsZJfrynE4LJZ4uEGSXs%2FqRdvHJkzD%2FMHbJrddY%2B%2BYdskLUvMzzx2NmJUO5I4Jny4SVPnvCI%2BHVa9rO%2FGZkBhEb%2Bfzuovt%2F3pnwlajovOncFX7lV6GiND5ZuMglKd3MnTgR%2FTbJEzppBwysAx1WpxjuXpiCd3K8iZg%2B7XOL14PRbVpw8a9NQ%2FSKVOFB58ZzCHEnF0M4xGqVA522bz0Wlwjcxu8nqI1PLdPUvqPLGlfxNE4hcvwfq92uK9j2D49E4got3uG93bSOvwsifdnJSfli8ERMjF5wqRSkiWYThQJXSFh%2FP3%2FgvmZ2UEYxmnylr1vDrWawrMsQimWopHbQwN3hdxstAs2BkD7decMJ3u2MkGOqUBT6vqlxxAqR4LbL2LsF9goPcQT1rehyAx6QXG%2Bj434uz5lUGv3jUvY9tBQHbQu4rwcOPY6331pTyrUK76K1reU7uGLAYwTyVkrRNG7PswQanRkEjo60mP%2FukWPzl0OZbg2VZXc97DHs4Ma1g%2FIvkxwW%2Biigux%2FUyCQyQudcQaOADQ4WrYep6BjoEV9DO4QOSwP3KflBbvRYxCjyijlU4pofYWtRxF&X-Amz-Signature=0bc07d059ad68c0149d4ee1f1471f7643667dc78759b12a8c2c7367d4e92648d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X7NXC4R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIBpnko4bfPnJQdVc4KlcaXE7S7HHJ0gOFzeWztfVPwIgJrwCJOfr4%2BQtiAbARD4XwYXuN2eQ6TDCIk2QflqhueIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMxnrVHE5BTReuIUyrcA%2FpIveP%2FLn3upy2QJCVeOBSjdAKML7V%2FX%2FyTbtkdJOIDTWQn3WHh5nDSke2gJP3ww2qLBBzBVYPVhAiI1rbaZCIK0%2F1XwU5lbSr2lPWxX%2FBzP8XJGvTWj6I2dvQfjnIX7jANMat9wxUv3BvXtj0fR0sunbs9hOGthNulN0CeODVCTVBUMh9CItPl%2F3Yk%2BPSig7CZWyF5rHvTZtqjvNH58I5VpQLOBsT5OaABF%2FapKISf9zAZv1QVU3m7RmXK1IlRKm2H%2Fwy1c2L324DpZVn8fOjgsZJfrynE4LJZ4uEGSXs%2FqRdvHJkzD%2FMHbJrddY%2B%2BYdskLUvMzzx2NmJUO5I4Jny4SVPnvCI%2BHVa9rO%2FGZkBhEb%2Bfzuovt%2F3pnwlajovOncFX7lV6GiND5ZuMglKd3MnTgR%2FTbJEzppBwysAx1WpxjuXpiCd3K8iZg%2B7XOL14PRbVpw8a9NQ%2FSKVOFB58ZzCHEnF0M4xGqVA522bz0Wlwjcxu8nqI1PLdPUvqPLGlfxNE4hcvwfq92uK9j2D49E4got3uG93bSOvwsifdnJSfli8ERMjF5wqRSkiWYThQJXSFh%2FP3%2FgvmZ2UEYxmnylr1vDrWawrMsQimWopHbQwN3hdxstAs2BkD7decMJ3u2MkGOqUBT6vqlxxAqR4LbL2LsF9goPcQT1rehyAx6QXG%2Bj434uz5lUGv3jUvY9tBQHbQu4rwcOPY6331pTyrUK76K1reU7uGLAYwTyVkrRNG7PswQanRkEjo60mP%2FukWPzl0OZbg2VZXc97DHs4Ma1g%2FIvkxwW%2Biigux%2FUyCQyQudcQaOADQ4WrYep6BjoEV9DO4QOSwP3KflBbvRYxCjyijlU4pofYWtRxF&X-Amz-Signature=4cd338fda23656242f7030c381c880c914d2a9566505d7eaa6ac8e894097daa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
