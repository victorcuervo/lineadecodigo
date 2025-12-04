---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OX2PXBD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjqt%2FlYb9igl%2FKfE9pvrc2W1RFYd9Ry0COfvmAEaTfsQIgTSxUjN4QUAdYTxXg4EVqb%2BHQx2uUAWROCCJx7PEDu9Aq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDELIWnPWYiKlAZmgeircA1RF9cJxB2WXuvA8QHhSEIUaKpyh3f3WZleMMS40dNc4L4v4c77GNUcp9bwnJN6jIiGGthFVNmhquHdycjaRCQP7YtdDLmbFs8CV2Y5H5NGTQ0ua7FZ7LJ5IshkViZsKS2%2Bh9v%2FbXdX2mU2TbF3of8QTEWANy%2FjHN0WUMV%2BztTnl83U1dLgQEUCF6WOm46xJKQZyGB2zxnuhkcf4DslkDqAZx0hjreYlRCrgfChJhaH4mt7TKS6FzkoK1H1xHFpqTakcJyqx%2Fpzc9zcKsg6um43qt31N0Z8lYHOkgWjl5AwNKNNLiCkclpr9Da6AEHchFoq6UT%2Fhtnlk5kQ5nJiNrg9Spe15yHV6Lk5D%2FUf7lxDvoCRLkJWsnS5CFadlxyciIDps6cFBCShoFEpG9Qzb6UtwJa1sLtZ2qPNLW3SJ2phEicBKKRcrFPsB5k8C%2FkFtd%2BhnsjLLQFRQse42JqbftuLNzwjfvwo0umbNJJOZpPjg0l1hQsfDeVHRWvnUAWVkQHBdIl%2FNf4jVYwkkfcJqOFji%2B1gh9QQwnFWc5nk%2Fv21x%2FV%2BXC2k%2FMIrBtxVBtbzDwWrDuI%2ByL0bh5nvSMHXZFGt5a1sVHcm0LZIisWpUOL7AwmUZ6YO0Yk9gsAHDMJuRxMkGOqUBuJjA7kWGOQWROPnYAu3nFFLdAtnu1h3PcS%2FIsuGwNjjV%2Bvb2oo5N1Ee7Ci8OgepLrPMAvusHFMaBwpogIsMUIvgRB5lkuoH7m1B3bSCQj7veW303zzccyAwn%2BeUVSCibMKGN8ONc8QHhFQEsWzirOvBu6gpNIM5B89MzHvBPpjwi64zLfugTQC3PZoqVQvtB631UO2n9Raoy1ytAe9oyne6rIUdj&X-Amz-Signature=650f9e004aa1583717a74c896dd80089aa86213f4f43a1c0b989081b6a80159b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OX2PXBD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDjqt%2FlYb9igl%2FKfE9pvrc2W1RFYd9Ry0COfvmAEaTfsQIgTSxUjN4QUAdYTxXg4EVqb%2BHQx2uUAWROCCJx7PEDu9Aq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDELIWnPWYiKlAZmgeircA1RF9cJxB2WXuvA8QHhSEIUaKpyh3f3WZleMMS40dNc4L4v4c77GNUcp9bwnJN6jIiGGthFVNmhquHdycjaRCQP7YtdDLmbFs8CV2Y5H5NGTQ0ua7FZ7LJ5IshkViZsKS2%2Bh9v%2FbXdX2mU2TbF3of8QTEWANy%2FjHN0WUMV%2BztTnl83U1dLgQEUCF6WOm46xJKQZyGB2zxnuhkcf4DslkDqAZx0hjreYlRCrgfChJhaH4mt7TKS6FzkoK1H1xHFpqTakcJyqx%2Fpzc9zcKsg6um43qt31N0Z8lYHOkgWjl5AwNKNNLiCkclpr9Da6AEHchFoq6UT%2Fhtnlk5kQ5nJiNrg9Spe15yHV6Lk5D%2FUf7lxDvoCRLkJWsnS5CFadlxyciIDps6cFBCShoFEpG9Qzb6UtwJa1sLtZ2qPNLW3SJ2phEicBKKRcrFPsB5k8C%2FkFtd%2BhnsjLLQFRQse42JqbftuLNzwjfvwo0umbNJJOZpPjg0l1hQsfDeVHRWvnUAWVkQHBdIl%2FNf4jVYwkkfcJqOFji%2B1gh9QQwnFWc5nk%2Fv21x%2FV%2BXC2k%2FMIrBtxVBtbzDwWrDuI%2ByL0bh5nvSMHXZFGt5a1sVHcm0LZIisWpUOL7AwmUZ6YO0Yk9gsAHDMJuRxMkGOqUBuJjA7kWGOQWROPnYAu3nFFLdAtnu1h3PcS%2FIsuGwNjjV%2Bvb2oo5N1Ee7Ci8OgepLrPMAvusHFMaBwpogIsMUIvgRB5lkuoH7m1B3bSCQj7veW303zzccyAwn%2BeUVSCibMKGN8ONc8QHhFQEsWzirOvBu6gpNIM5B89MzHvBPpjwi64zLfugTQC3PZoqVQvtB631UO2n9Raoy1ytAe9oyne6rIUdj&X-Amz-Signature=e7c2a03a27d6efcacb40c06b07464627016d8c8671029b484df6ddd12b76dd5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
