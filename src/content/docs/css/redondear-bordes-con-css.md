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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNCOQ7M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvj5SfSGQdHvL5ptaY%2BNQiA0G0lyU25sdHsctoQDcCNwIhANCmGpyWZSqyzhrpec2j8gb%2BxkgDuswJ0K6lve5qvUhyKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylzaqsMSITkLK6Mt8q3ANxQHZG0pSwJJcg8bWokH2FfX4%2BLf%2BYUbntimJgwzy86IvsAd6d8eKCz8UkO9QnMh25hvXw3kw3G8yCq6aeuFiM9G7oLUc2oEcvBHfTdUzgibK3OLCL%2FulXGHmxYtb6BXC65sw8SoCCrK1JnpJjC8ecRwtmreUKLFGmnohGMcIXcbZmNe9wXfm%2Bj6FgySrPSiV%2FRKCo28E2d30ASirGaEbUsIUIiMx2OhVht1%2BZ9HLIck1%2F7jewTBCWp%2F4Gc%2FsXFJ3bQFGhEYNfz%2FEcTQGyZBb0Ocj9%2FiAjvIPPZAMRIP2JHYAjftXypb%2BKzBP1o%2BC%2FRy50yvYBe7Du6qAB082uNL8Eggf%2BG0mQV45PiR1idFLWJK9JqfeZsan%2F30zZJf2iXUfMUJEO84AvyzoJ3UnMClpVUVSQp%2BbZaLLz1IC1Y81ChW39R6a45k6oTRZrxgYtq9yG6OFDIHtbfSSlj7q6yVzu%2F4%2F4tu0YRuiq%2Fh4o8lWXahj9nT%2BsR9ffGuOTYJnWLbinEO9Ky77dZoCeZK91NCCIMWLGeA3t95upo2RguzmlBqri49fmguH1JwtDZoAIGu9v0qQY9EwzyvXRC4FwooKzd8xg88Bq2d0305mbFOTZcbOPbRXjzwd2jymchTCSgN3JBjqkAXXlW8UMU%2F47iwGdmX%2B4z9c2gvZtcOZYGQv2jPLYe7mJmQob46i52c6VudEFbcrvAYZh%2FV7evlyCDIK8eoPbC1xVak9X4FA9LF6eh3lJ6nk1c0CQgFU3OqC9vouhOSPe6pFg3Zvubc1%2BzymXF3itIxfWG35RaW7fX8hvGbw7Zy8%2FHh8NWIVhRuXbucU4CyPStcQ%2BPAvKku1SbelaW6JA3ZQTfb6i&X-Amz-Signature=1757f843be7de5a9afae76d0f101ade545ce5ceff86d0f0c2ef92979f3ae083b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNCOQ7M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvj5SfSGQdHvL5ptaY%2BNQiA0G0lyU25sdHsctoQDcCNwIhANCmGpyWZSqyzhrpec2j8gb%2BxkgDuswJ0K6lve5qvUhyKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylzaqsMSITkLK6Mt8q3ANxQHZG0pSwJJcg8bWokH2FfX4%2BLf%2BYUbntimJgwzy86IvsAd6d8eKCz8UkO9QnMh25hvXw3kw3G8yCq6aeuFiM9G7oLUc2oEcvBHfTdUzgibK3OLCL%2FulXGHmxYtb6BXC65sw8SoCCrK1JnpJjC8ecRwtmreUKLFGmnohGMcIXcbZmNe9wXfm%2Bj6FgySrPSiV%2FRKCo28E2d30ASirGaEbUsIUIiMx2OhVht1%2BZ9HLIck1%2F7jewTBCWp%2F4Gc%2FsXFJ3bQFGhEYNfz%2FEcTQGyZBb0Ocj9%2FiAjvIPPZAMRIP2JHYAjftXypb%2BKzBP1o%2BC%2FRy50yvYBe7Du6qAB082uNL8Eggf%2BG0mQV45PiR1idFLWJK9JqfeZsan%2F30zZJf2iXUfMUJEO84AvyzoJ3UnMClpVUVSQp%2BbZaLLz1IC1Y81ChW39R6a45k6oTRZrxgYtq9yG6OFDIHtbfSSlj7q6yVzu%2F4%2F4tu0YRuiq%2Fh4o8lWXahj9nT%2BsR9ffGuOTYJnWLbinEO9Ky77dZoCeZK91NCCIMWLGeA3t95upo2RguzmlBqri49fmguH1JwtDZoAIGu9v0qQY9EwzyvXRC4FwooKzd8xg88Bq2d0305mbFOTZcbOPbRXjzwd2jymchTCSgN3JBjqkAXXlW8UMU%2F47iwGdmX%2B4z9c2gvZtcOZYGQv2jPLYe7mJmQob46i52c6VudEFbcrvAYZh%2FV7evlyCDIK8eoPbC1xVak9X4FA9LF6eh3lJ6nk1c0CQgFU3OqC9vouhOSPe6pFg3Zvubc1%2BzymXF3itIxfWG35RaW7fX8hvGbw7Zy8%2FHh8NWIVhRuXbucU4CyPStcQ%2BPAvKku1SbelaW6JA3ZQTfb6i&X-Amz-Signature=22a24a1fd0bdcf0b237fc8c0d1ea3d402fd2d01c65692a86a8bf5aca48ce16df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
