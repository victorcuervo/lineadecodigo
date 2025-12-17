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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAL4V77L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttkym6AmBu5frhebZUyBHCNSRJqt%2BWAVXy87O21h1pgIgLf4sjZtrw86x0PDHwjaoSsqm4Qo3z0NeG5uECg4Ni5Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBWOVps8RXu6JudvEircA7Jiz2XzXNJYMy%2Fo3wN9hPvUjn%2FzYW8gG0fig21ULVCNPzXJMlhk7lod7%2Biz2Ag94kiM1qgXHU5NOoiyAh2GypdVsEBWSprpqm6D%2F5bUMGzpVc9ZDuxZH%2BuNROnSLYXwjRPfdnZtgD8%2FOQTmwbG1PGsu%2Fvj5gwYDs3Ymcd1yvvF9jCr4xP7ndWAZ34SyTuGB8y4Z4wexYzjpbT0w3mkiXPDhZc34XtgYlc14OsCzXE4B2YxnnoZFCuVtUnwAfhoGZ4TAsWUZXcm%2FzLh%2BTNUYxmFCJMt3ecv%2BZKawZDX7PHjUxmMZMnswWPAppffYordi%2BJJCJEmiwA1IWZUPJQ1sCCqxWPfTCY5%2FBB6VDuR1pOayCfDd%2Bbqh9cZTFa2E0wK5Y5j%2BTvGk18PERTZXyy3usTgcCGSRlusyQFc5YKD2Si%2FFvIvlqTwnjWY60zfNxo7l8QlcfL%2BEWmt6xseC4PSS9bZDv5r7TicgLRA%2FEPt0WMQ7UZkH3cyUfLUhVkW2WofmB9ox0JjjLcvr%2FW4eWsMs58oR8nyjoX5pKhvhLPzumJtgRKa4EmWRJSf17Ug5WFMIyKNlia7jXu%2FqGMjC%2FFbgkA3p0V0EUSWDlZIE373DIiNZOkYStyI3rfArELoAMM37h8oGOqUBirfzxOnyKRmvzLGMHifL8Nz0iGBPQpNhAtixyKhP9l9w%2B%2FhTzw0p21rEk3ti%2FL1HG0d0983HOtF%2FPcnFcEU0qt6n0%2Bd25e8Z93jp3vy1pT718jwfp15pDj61658utyoyD8fa1oAK6jfSNCZA7pKs82waSLSrTZURqM4vVxCHDOOo9MaYVRz7rJMm%2B%2FNVkrPPHu63uZFWTCDiflwoCYbUYcR4esVT&X-Amz-Signature=5b8466bcf23f1c02945f3e6fedf8ddbf85a519f563b32c6fee7c4d762e83c810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAL4V77L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttkym6AmBu5frhebZUyBHCNSRJqt%2BWAVXy87O21h1pgIgLf4sjZtrw86x0PDHwjaoSsqm4Qo3z0NeG5uECg4Ni5Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBWOVps8RXu6JudvEircA7Jiz2XzXNJYMy%2Fo3wN9hPvUjn%2FzYW8gG0fig21ULVCNPzXJMlhk7lod7%2Biz2Ag94kiM1qgXHU5NOoiyAh2GypdVsEBWSprpqm6D%2F5bUMGzpVc9ZDuxZH%2BuNROnSLYXwjRPfdnZtgD8%2FOQTmwbG1PGsu%2Fvj5gwYDs3Ymcd1yvvF9jCr4xP7ndWAZ34SyTuGB8y4Z4wexYzjpbT0w3mkiXPDhZc34XtgYlc14OsCzXE4B2YxnnoZFCuVtUnwAfhoGZ4TAsWUZXcm%2FzLh%2BTNUYxmFCJMt3ecv%2BZKawZDX7PHjUxmMZMnswWPAppffYordi%2BJJCJEmiwA1IWZUPJQ1sCCqxWPfTCY5%2FBB6VDuR1pOayCfDd%2Bbqh9cZTFa2E0wK5Y5j%2BTvGk18PERTZXyy3usTgcCGSRlusyQFc5YKD2Si%2FFvIvlqTwnjWY60zfNxo7l8QlcfL%2BEWmt6xseC4PSS9bZDv5r7TicgLRA%2FEPt0WMQ7UZkH3cyUfLUhVkW2WofmB9ox0JjjLcvr%2FW4eWsMs58oR8nyjoX5pKhvhLPzumJtgRKa4EmWRJSf17Ug5WFMIyKNlia7jXu%2FqGMjC%2FFbgkA3p0V0EUSWDlZIE373DIiNZOkYStyI3rfArELoAMM37h8oGOqUBirfzxOnyKRmvzLGMHifL8Nz0iGBPQpNhAtixyKhP9l9w%2B%2FhTzw0p21rEk3ti%2FL1HG0d0983HOtF%2FPcnFcEU0qt6n0%2Bd25e8Z93jp3vy1pT718jwfp15pDj61658utyoyD8fa1oAK6jfSNCZA7pKs82waSLSrTZURqM4vVxCHDOOo9MaYVRz7rJMm%2B%2FNVkrPPHu63uZFWTCDiflwoCYbUYcR4esVT&X-Amz-Signature=cd4841a8c14e3fd99c2467685fac3001e3f4b0648acfc0cb0a4e871a22cde41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
