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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRPPWAC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi76v6SRTPv15%2B8eEpv69QYhlUMnyXgAS0Cg6rlXrrVAiBGDsAKFF5LdHrUoawhcMGP4RpIZWRJNBkCZzJNt7jGrCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXw19b8dUxVfQJB9KtwDBQo%2F%2FEpwxbDQ%2B1bkQhPH4qyYCW9SkQb2S16L%2F0dz8UjYY0ivPjMOOvJWHaMYRG%2FUOdGlxIllIe6PXHWK7dS3VHUMwmQb8fvSqBkdsK%2BHDZg0fqnWEwcfIqWRRmjqsKO47iZjDcd39v3QIUEG9UiOcNSRCcduznMbvSiHaSAjKsi7ZFfRZIvVQi4TmDRAhs1UVsfhzwwq7iI9BeTzsA%2FGotVZpk%2FLQMTJHHMO0Tn2Zs5h2T5%2BbOB8WvXIIbm4TO3LeBE6%2FvVrG8ge3jN%2B%2BCNazgXoTZGTn7C%2FNhVzy%2BRaCdOQPp8kg08Pk3fgAO2SeB8hkq3PPxuR9NlxoeKH3NSCiVzaPIqwL38etYDLCk8Txctf%2Bh692onMm6AjZfLBXwcWsq%2F345M8AXWNldDUp8E3AdGfNZH89LURWqvfVgLQDE3DmkKNZmKm%2FSYdqWWybSNVU6WspCg4ALTeAXui1JVQyDo%2FKewwUi33UZ9KMJsK2TUot4TZti%2Bd3ARyDykA5sYNDYFQmHn4RB13Uaq489B4yzUIBAmFWktnnWbT1u%2BgDQhKZrDp%2FOZuOXUPEO2iNXh%2BU09zz2uli3kvB1MKKkrbcvu3B9rKG6A6dcgUZA3fuKsR4qqXwS3bBhjItlswzZ6LygY6pgHqSi1Z0vAUM%2BeD%2BFz1hIMiRj5qHmb7OKAgGaRhnDNanvYQKljbv8o2Sknrl6Xe6mrkoKa27%2Fwhdck6I8CoBaLUPtRUBnMHKEdo5lTRDzvxVzK2SUavjXlPVREebQNTCO8lLDVBAA7ODDudY11S65qhLtC6fkJKlkWUVpd1TV%2F%2BzMxxP%2BTIk%2BxnVwvpeN91KHtgOWetlO3LPDVp7eiJmorh8AjIqUD%2F&X-Amz-Signature=525b3b1cff2788b521bf559e6f455b9aa67af469160374aee8738c3563836229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRPPWAC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi76v6SRTPv15%2B8eEpv69QYhlUMnyXgAS0Cg6rlXrrVAiBGDsAKFF5LdHrUoawhcMGP4RpIZWRJNBkCZzJNt7jGrCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXw19b8dUxVfQJB9KtwDBQo%2F%2FEpwxbDQ%2B1bkQhPH4qyYCW9SkQb2S16L%2F0dz8UjYY0ivPjMOOvJWHaMYRG%2FUOdGlxIllIe6PXHWK7dS3VHUMwmQb8fvSqBkdsK%2BHDZg0fqnWEwcfIqWRRmjqsKO47iZjDcd39v3QIUEG9UiOcNSRCcduznMbvSiHaSAjKsi7ZFfRZIvVQi4TmDRAhs1UVsfhzwwq7iI9BeTzsA%2FGotVZpk%2FLQMTJHHMO0Tn2Zs5h2T5%2BbOB8WvXIIbm4TO3LeBE6%2FvVrG8ge3jN%2B%2BCNazgXoTZGTn7C%2FNhVzy%2BRaCdOQPp8kg08Pk3fgAO2SeB8hkq3PPxuR9NlxoeKH3NSCiVzaPIqwL38etYDLCk8Txctf%2Bh692onMm6AjZfLBXwcWsq%2F345M8AXWNldDUp8E3AdGfNZH89LURWqvfVgLQDE3DmkKNZmKm%2FSYdqWWybSNVU6WspCg4ALTeAXui1JVQyDo%2FKewwUi33UZ9KMJsK2TUot4TZti%2Bd3ARyDykA5sYNDYFQmHn4RB13Uaq489B4yzUIBAmFWktnnWbT1u%2BgDQhKZrDp%2FOZuOXUPEO2iNXh%2BU09zz2uli3kvB1MKKkrbcvu3B9rKG6A6dcgUZA3fuKsR4qqXwS3bBhjItlswzZ6LygY6pgHqSi1Z0vAUM%2BeD%2BFz1hIMiRj5qHmb7OKAgGaRhnDNanvYQKljbv8o2Sknrl6Xe6mrkoKa27%2Fwhdck6I8CoBaLUPtRUBnMHKEdo5lTRDzvxVzK2SUavjXlPVREebQNTCO8lLDVBAA7ODDudY11S65qhLtC6fkJKlkWUVpd1TV%2F%2BzMxxP%2BTIk%2BxnVwvpeN91KHtgOWetlO3LPDVp7eiJmorh8AjIqUD%2F&X-Amz-Signature=9d14f22687fa7ee52c93d00a86d1d8c5709e7943953c8ef2c3be11f953fe224a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
