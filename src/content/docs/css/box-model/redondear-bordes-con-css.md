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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6P4TZI7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjkWlIZhBcJbD1x9D2Nfx8v6jvLY473TrUoaMtNzHEkwIhAJl18tdLFX2qzZJRa35AxqoSw1QWNfKiSAPDIc%2BXbXiWKv8DCH4QABoMNjM3NDIzMTgzODA1Igzy8T5MXj8edzmCt3Qq3AOuJx0dGkhngELCr%2FiNA6%2FWjsat0B37LOAFg2JDjV835W4Y%2Fr2n7vxw2fCq6YhehMRdp5SvRtGUx2Ro8HCihFZiWQx6xYEEnji1jWQO7hRY%2FZeoqMeKApggPaTAoXej7Clw0HVgDRY7FoaJFMyyFFQd2vQ6fJp835rpPGAm9htdAypU472k4LIyG7%2BPjdCIJnA4lwTCRwe%2F07je%2FLO0lQ8GMqK1hy%2FB7iwsrV4owLS4hSvMZRhcIuNRm%2Fol2YjDaO0pZ8HN3NfDG4QlIlqbzWQbAY7QYwbSFxum716g%2BNZU3dILp9o%2BAKfGavgC9wXw3B3r3Yjfp5laxVHLmovuidjKtVN3%2BrF3Z%2FAZ2FuwkMMgvZ9B5ujCCCEDAN76ViJ81acrnivVRJmDIQk%2BXU7TQwqeFnOEhl3%2BQS5KYD0gakSSxFrek3GCVh8elgfvYTVVlUGjssEDu4Uk8biqtNYNXg0GzeQ5M2g3e563LMbwSKorMDlnUZa1TnB2o%2F0ZWXSW9FdZ4r4kgSSqw6uBhHPYp49jMtMwXMz9t5l2AZOygY%2FrShQKa6vxud9oT9Y0lGOPoKKfjuYMtJb8Mr3IPZeo4Zx0WdfaKkFTLiGQKkHxNco%2FW%2BR0Lnj%2BJfET4e0gozDOxorKBjqkATD4NfnCisTFnAmbBG94WEcjJbgVNNDwS1Y3h%2Bi9c2hzGB%2BY3VRrsvvPJmhZf19QWR%2FY0DiwhZsNn8d5Q%2B2uEAG0u3pUgcZ5jrJrDBcqQjGCEiofqmLREaWj1g4rn22pBiCxxEqcRnow7Mnjgj1ykiES89N7b6LSOxn8vht37JsZt6nGiTD0Pq787YdYNVXCpKc4tOTv8yUjMNVJLmuUaekYHx%2Bf&X-Amz-Signature=80f689afedebe9a6dc219cdeebf5231391f8688048ae6ddfde97da7d4608cb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6P4TZI7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjkWlIZhBcJbD1x9D2Nfx8v6jvLY473TrUoaMtNzHEkwIhAJl18tdLFX2qzZJRa35AxqoSw1QWNfKiSAPDIc%2BXbXiWKv8DCH4QABoMNjM3NDIzMTgzODA1Igzy8T5MXj8edzmCt3Qq3AOuJx0dGkhngELCr%2FiNA6%2FWjsat0B37LOAFg2JDjV835W4Y%2Fr2n7vxw2fCq6YhehMRdp5SvRtGUx2Ro8HCihFZiWQx6xYEEnji1jWQO7hRY%2FZeoqMeKApggPaTAoXej7Clw0HVgDRY7FoaJFMyyFFQd2vQ6fJp835rpPGAm9htdAypU472k4LIyG7%2BPjdCIJnA4lwTCRwe%2F07je%2FLO0lQ8GMqK1hy%2FB7iwsrV4owLS4hSvMZRhcIuNRm%2Fol2YjDaO0pZ8HN3NfDG4QlIlqbzWQbAY7QYwbSFxum716g%2BNZU3dILp9o%2BAKfGavgC9wXw3B3r3Yjfp5laxVHLmovuidjKtVN3%2BrF3Z%2FAZ2FuwkMMgvZ9B5ujCCCEDAN76ViJ81acrnivVRJmDIQk%2BXU7TQwqeFnOEhl3%2BQS5KYD0gakSSxFrek3GCVh8elgfvYTVVlUGjssEDu4Uk8biqtNYNXg0GzeQ5M2g3e563LMbwSKorMDlnUZa1TnB2o%2F0ZWXSW9FdZ4r4kgSSqw6uBhHPYp49jMtMwXMz9t5l2AZOygY%2FrShQKa6vxud9oT9Y0lGOPoKKfjuYMtJb8Mr3IPZeo4Zx0WdfaKkFTLiGQKkHxNco%2FW%2BR0Lnj%2BJfET4e0gozDOxorKBjqkATD4NfnCisTFnAmbBG94WEcjJbgVNNDwS1Y3h%2Bi9c2hzGB%2BY3VRrsvvPJmhZf19QWR%2FY0DiwhZsNn8d5Q%2B2uEAG0u3pUgcZ5jrJrDBcqQjGCEiofqmLREaWj1g4rn22pBiCxxEqcRnow7Mnjgj1ykiES89N7b6LSOxn8vht37JsZt6nGiTD0Pq787YdYNVXCpKc4tOTv8yUjMNVJLmuUaekYHx%2Bf&X-Amz-Signature=1bdba26caa0d4838c8fabbca42dbb0dad72398edfa0a52f96ca7d67ed1ffba34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
