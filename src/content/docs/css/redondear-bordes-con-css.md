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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZNIE7C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjctMUzuUPb5%2FKwMBH4ECYdD0QlCg9%2B1GOeIXdHN01bwIgKrrOpS%2Brel7fxOGfPicWGm4K2vjxvyc0hqYh9eBEwJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Bwgk4XPn1sjWrycSrcA%2FT17VtWsZaaZfhKm6tK320KgXSH8g5JlWG5XzGesVM6R0xCU3OQmjXy80YvLKhWpBXtBiegLNIyDrv9Gpew6R2otEVypdVqMjKYlGiBWpbx439xqQyq6hnygbSH61UstssBIMPHbfN97q3r6OrojCydFKZXtqreze9bhxmCDpA7omeWLF0j4NyIEUfyvkjOtsvTnSpAC6KgbeqP3clM19pdZDk88NCmcbY2VsZmTixkPjDuAMd0nkCIWqyL5383N%2FNlXDJz%2B%2BcHpLv4zBE%2FW75RdCOxoZf5Fx1dqPi0Ar6RRpUppVN5zEUNFhqkG%2BnW5QluJF8Pzls3OQNl2lEq1awm1RtVIkxZfi8SRBxOMVPuKTApTyO8IlLjk0JAsMFJ%2BPbmTRB6igIDPnqV%2BlOFkxmyq13NcjL1YyxujFs8lXs2VpexHfRvI6lPgbnbLZYZBcJbyfiSpjtd8fh%2BR7Hpt8g3UxSSlz6NIGoiZPiXY2q%2FNwRrArvwP5BrqAAFXObUfIMMoahClAGLYDDVhoWEIC9PPuVmfq%2B0k%2FfUl9Zv2W0XlioV35DoRTWNSyMB7YT4AxO77XtFC%2FktoMCAsHuBjj%2F98RG8Op%2FOz0YyrHWpW67M0v1l6IWVBoaqhKV0MI%2Fu2MkGOqUBM5E1p%2BxTnCylsUx009Fz%2F1JnSq97NPJgSYFgBuv%2B7Hrgb%2BSB7WH7TLRbFYWoZqyt6ZWIZpvu9byn1phxjKnNBE4VBOxa%2FhnUkw7C%2FMEtbdCKcB0rfQUFgindA%2FOC4vucVhHk2BhAQYCQyTcKMtIvl9lQgAFRyFSfqYnOfSJrZXRNX2SGyNfwM6pPyxQTGDjG84Pc729SzDd48Emt4vh6G50H7u2p&X-Amz-Signature=af70619bbf7ed2286c5cdd081b73c8d6bc793ad5ec1eafc62a98bda92bd6d6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZNIE7C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjctMUzuUPb5%2FKwMBH4ECYdD0QlCg9%2B1GOeIXdHN01bwIgKrrOpS%2Brel7fxOGfPicWGm4K2vjxvyc0hqYh9eBEwJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Bwgk4XPn1sjWrycSrcA%2FT17VtWsZaaZfhKm6tK320KgXSH8g5JlWG5XzGesVM6R0xCU3OQmjXy80YvLKhWpBXtBiegLNIyDrv9Gpew6R2otEVypdVqMjKYlGiBWpbx439xqQyq6hnygbSH61UstssBIMPHbfN97q3r6OrojCydFKZXtqreze9bhxmCDpA7omeWLF0j4NyIEUfyvkjOtsvTnSpAC6KgbeqP3clM19pdZDk88NCmcbY2VsZmTixkPjDuAMd0nkCIWqyL5383N%2FNlXDJz%2B%2BcHpLv4zBE%2FW75RdCOxoZf5Fx1dqPi0Ar6RRpUppVN5zEUNFhqkG%2BnW5QluJF8Pzls3OQNl2lEq1awm1RtVIkxZfi8SRBxOMVPuKTApTyO8IlLjk0JAsMFJ%2BPbmTRB6igIDPnqV%2BlOFkxmyq13NcjL1YyxujFs8lXs2VpexHfRvI6lPgbnbLZYZBcJbyfiSpjtd8fh%2BR7Hpt8g3UxSSlz6NIGoiZPiXY2q%2FNwRrArvwP5BrqAAFXObUfIMMoahClAGLYDDVhoWEIC9PPuVmfq%2B0k%2FfUl9Zv2W0XlioV35DoRTWNSyMB7YT4AxO77XtFC%2FktoMCAsHuBjj%2F98RG8Op%2FOz0YyrHWpW67M0v1l6IWVBoaqhKV0MI%2Fu2MkGOqUBM5E1p%2BxTnCylsUx009Fz%2F1JnSq97NPJgSYFgBuv%2B7Hrgb%2BSB7WH7TLRbFYWoZqyt6ZWIZpvu9byn1phxjKnNBE4VBOxa%2FhnUkw7C%2FMEtbdCKcB0rfQUFgindA%2FOC4vucVhHk2BhAQYCQyTcKMtIvl9lQgAFRyFSfqYnOfSJrZXRNX2SGyNfwM6pPyxQTGDjG84Pc729SzDd48Emt4vh6G50H7u2p&X-Amz-Signature=dcaae9c9c8f8366df7d977a882e829e334f9ca0e1a4e228d06e6bd8a2d7203ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
