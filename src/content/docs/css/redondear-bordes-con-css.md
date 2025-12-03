---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWMV2EO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDR7HlR5xPBSKPLfRtXVqh9OYZBc6pV0%2B7mZq9jE0AkUwIhAKomlpEtSBygtx1MzjAd3%2FwGlkVT1ssuxrk0wk7gU0clKv8DCDcQABoMNjM3NDIzMTgzODA1IgytEw7Or4Hw7dHeE6cq3AN3S7xF1u1NHAdefZ3wZ3RH%2BROIW6Y4dVeuUhvEcTNPRMPFL%2BVzKh5RfjUS5VzJSBdYD%2F26XEmiGAfKD9vHEK6ZkH3hAtu5PMcZCDKBeBYMfPiiE5i70U0JuMe03NiH73mGRbayqsWgIlxkQrDudICGpE%2BIOWRts1PKCgHfs4Kc%2BHtb8oJcmIh6guLfKVOKdv6ocZuExpPwED6uLn%2FgcoZO8JbQ%2B1lji2lhFpLmZ694epw4%2B6GuLkZShn4ALzxsRveffg2bXGjBBgW3swMyghA1AQ%2FwYpNIwoUHZjDl9ginJ1ImQp2MS%2FXG5w3Obqom2he4Sb1rhGGVc0tpyavhUIIgQJBIVCfpRdtLGYyNtPR%2B39jSu3wl%2BFEvGyLhx46f01VvCiUVzvmI0s9G24WWjXB5mAk40YherVMGwTaXObWHS22ILiQ5fADk7gUtagjeCoZOKw3PystTSz38RNjZNIrxROO38OzcXf13ockF2UNv2SK1aSbKO91n9s0z%2Bx%2BUM%2FVXKSX%2FdXqAfKQZGMVFDvYfsECPCc0md3UbCddSvEzm%2BQeGDJ8CXtQbgvhwABQ8iCfj4G3SIi0zh66eaC6qiW495hc5W9bKzM%2BoevwaQLrzvwaKKYNKiLQspcMA2DCn3MLJBjqkAbT7PF5%2BFionLOR6Jn3mynoNCW2DvWKt3b7pv5cwPEbJghneKlwVcwbInylcOXIX011iL5gxgeFUP2mC99LPsVcT0Q4B4q521A8Cm0I8VGMyewliWqL0%2FUTngngzhDYlXZvcUXCjroZHJ6h0cr%2BhnitP%2B6mRGzHqM5VgFdiQM8hAvs04aZQcKqtMA3GiHWZ22AOuR6TK0LqnNZ%2Bivp1ZkhnzoIHq&X-Amz-Signature=1ffb5aa2bfba7c7fa4a3a927fd27fafaf7dead6dbefb153197783709c1e047cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWMV2EO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDR7HlR5xPBSKPLfRtXVqh9OYZBc6pV0%2B7mZq9jE0AkUwIhAKomlpEtSBygtx1MzjAd3%2FwGlkVT1ssuxrk0wk7gU0clKv8DCDcQABoMNjM3NDIzMTgzODA1IgytEw7Or4Hw7dHeE6cq3AN3S7xF1u1NHAdefZ3wZ3RH%2BROIW6Y4dVeuUhvEcTNPRMPFL%2BVzKh5RfjUS5VzJSBdYD%2F26XEmiGAfKD9vHEK6ZkH3hAtu5PMcZCDKBeBYMfPiiE5i70U0JuMe03NiH73mGRbayqsWgIlxkQrDudICGpE%2BIOWRts1PKCgHfs4Kc%2BHtb8oJcmIh6guLfKVOKdv6ocZuExpPwED6uLn%2FgcoZO8JbQ%2B1lji2lhFpLmZ694epw4%2B6GuLkZShn4ALzxsRveffg2bXGjBBgW3swMyghA1AQ%2FwYpNIwoUHZjDl9ginJ1ImQp2MS%2FXG5w3Obqom2he4Sb1rhGGVc0tpyavhUIIgQJBIVCfpRdtLGYyNtPR%2B39jSu3wl%2BFEvGyLhx46f01VvCiUVzvmI0s9G24WWjXB5mAk40YherVMGwTaXObWHS22ILiQ5fADk7gUtagjeCoZOKw3PystTSz38RNjZNIrxROO38OzcXf13ockF2UNv2SK1aSbKO91n9s0z%2Bx%2BUM%2FVXKSX%2FdXqAfKQZGMVFDvYfsECPCc0md3UbCddSvEzm%2BQeGDJ8CXtQbgvhwABQ8iCfj4G3SIi0zh66eaC6qiW495hc5W9bKzM%2BoevwaQLrzvwaKKYNKiLQspcMA2DCn3MLJBjqkAbT7PF5%2BFionLOR6Jn3mynoNCW2DvWKt3b7pv5cwPEbJghneKlwVcwbInylcOXIX011iL5gxgeFUP2mC99LPsVcT0Q4B4q521A8Cm0I8VGMyewliWqL0%2FUTngngzhDYlXZvcUXCjroZHJ6h0cr%2BhnitP%2B6mRGzHqM5VgFdiQM8hAvs04aZQcKqtMA3GiHWZ22AOuR6TK0LqnNZ%2Bivp1ZkhnzoIHq&X-Amz-Signature=4289de14bd4752847abe646c9a1e2232f192eab439dc916afa76506e14360cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
