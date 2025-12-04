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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAQUXKN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIH0UpulTSzjLtXJKKlPK6svGUAIWl7ZezPMli3j570DIAiB1Q0zvEbRT7YJg%2FDwMDGLemluwgGZH954hRRRzWW6NISr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMvLJY1DUeQMWc6bcIKtwDNz9UQgeokpVVcS9HYE5Yp3nInxjEGGE4I3vNoVLe9jYI3GrQJSIwUWImktMbXctGQAM%2FqDHlnqM%2F1%2BUAEhU9ZsSEk4DbhlQWwnTpw4f38H5zTtTsAL3JROcOemvWWRQ9LBW2EUq%2Byr%2Bhb9zDwgd9EPXys1sYdo0xUlPh22BSbFQ3G97aNUSrMlBUZdagWDedzai4Hs6ol%2Foi1hLBezDGGITN4RwJlzzrIu5eTb3vdvIKOAidSTL3H15%2BBQFh250EBdqm1dmOfxH8C63QJ9G2Rapb7FbLyoMpqvQYSACILU%2FDJPjHCNm88qeOMnwbvmzA4FHppa7IwUo07gb82e9%2BRpp4hJL6uoHdNmB9oOAlnI0hHBMAHwC8T5TKGAJTrckqvoyj10rb56KYwqzWnqzZQn52L61004KFp%2FP5cRhNlc80QIBY%2FDIvoed7mxUMX0cpaJDpTymtb9JJYiaky4LOpWhqGK9Z4Vlwjt1oAKVtyftlGZ7WmwT8%2BwLwcdYP4pCYbUOJKP7G61vTGsDjni7TGOsE9S9PXpM44zxT%2BlzB9EfvcjeLWZDK98SD5vc7aaxC6SGpFQ3WSuAmD2n4U3I6%2FFcHXkzSu76TphqygKP7hT%2BBa3EYqdRieseNsLEwjOfFyQY6pgHBK03eCX%2BtewwOCiePWB5HtsyP5NBLnDKZ2rHx8pqmo69xx3wm%2BOvZVTJ%2FOJWrwsvJun4wYc%2BVxotJ7TN4zqxxreG6Rln9lLcElN%2FnGsK6jBp42DAUxR7PL2YbVHp8HXKhibSt7y3AH7WZS9iDDJp6nQtQssNd1uyjJxtgBns0fAK%2Bs6E6g3an5oAs1X2ZUWeZSaHBUswUr3eqe6ScXxN9svd6ZS95&X-Amz-Signature=5f7c497889b54b01a88b6118912168ca0ba4294574919a4ab9e86e4fb4335e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAQUXKN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIH0UpulTSzjLtXJKKlPK6svGUAIWl7ZezPMli3j570DIAiB1Q0zvEbRT7YJg%2FDwMDGLemluwgGZH954hRRRzWW6NISr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMvLJY1DUeQMWc6bcIKtwDNz9UQgeokpVVcS9HYE5Yp3nInxjEGGE4I3vNoVLe9jYI3GrQJSIwUWImktMbXctGQAM%2FqDHlnqM%2F1%2BUAEhU9ZsSEk4DbhlQWwnTpw4f38H5zTtTsAL3JROcOemvWWRQ9LBW2EUq%2Byr%2Bhb9zDwgd9EPXys1sYdo0xUlPh22BSbFQ3G97aNUSrMlBUZdagWDedzai4Hs6ol%2Foi1hLBezDGGITN4RwJlzzrIu5eTb3vdvIKOAidSTL3H15%2BBQFh250EBdqm1dmOfxH8C63QJ9G2Rapb7FbLyoMpqvQYSACILU%2FDJPjHCNm88qeOMnwbvmzA4FHppa7IwUo07gb82e9%2BRpp4hJL6uoHdNmB9oOAlnI0hHBMAHwC8T5TKGAJTrckqvoyj10rb56KYwqzWnqzZQn52L61004KFp%2FP5cRhNlc80QIBY%2FDIvoed7mxUMX0cpaJDpTymtb9JJYiaky4LOpWhqGK9Z4Vlwjt1oAKVtyftlGZ7WmwT8%2BwLwcdYP4pCYbUOJKP7G61vTGsDjni7TGOsE9S9PXpM44zxT%2BlzB9EfvcjeLWZDK98SD5vc7aaxC6SGpFQ3WSuAmD2n4U3I6%2FFcHXkzSu76TphqygKP7hT%2BBa3EYqdRieseNsLEwjOfFyQY6pgHBK03eCX%2BtewwOCiePWB5HtsyP5NBLnDKZ2rHx8pqmo69xx3wm%2BOvZVTJ%2FOJWrwsvJun4wYc%2BVxotJ7TN4zqxxreG6Rln9lLcElN%2FnGsK6jBp42DAUxR7PL2YbVHp8HXKhibSt7y3AH7WZS9iDDJp6nQtQssNd1uyjJxtgBns0fAK%2Bs6E6g3an5oAs1X2ZUWeZSaHBUswUr3eqe6ScXxN9svd6ZS95&X-Amz-Signature=76901e518362aa1c0e4145f4bde262669351007dfb9771ad6d702d1de36cbf92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
