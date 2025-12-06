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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7VL5FNK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0TnvjmhYNz19LBHPzyTt4%2F227zyLBdqRGtOdEekjyvQIhALZdL7p%2BsP56aF7tb%2FPWDBJTm2ufkEXJ3f86N6G9%2B45xKv8DCG8QABoMNjM3NDIzMTgzODA1IgxSTkktP6L2sPPG7Bkq3APVHWwK9%2BvIVVsih5ZnxvmktnVU9pw3fA%2B8fwF1C6pWAfoNTd3ScPnUSePEo3PlJa841v%2FN7jqXSMhcBHOEVuMuBCPhshUzu280EAvCxEGpA%2FF6rerAMXcGh2SRvshtbRJVhzbxWzpsKsGEAibO11sjGD0a01YCFhCyTDTeMRf3IsZ94oop9lqhbcJ4CP4D9rNLtuEpZ161OqSredJZmNcd4kQIkgIFPVTy71xPgD9xx4dX78RA3KLWsCOQ9kbQbQ3qw9RvTmLIQgsDH8xifOo4SGxp2uUxb%2FvPYw37r2tg8NDhlCVwoDAELtEH87PLUYGaLIEijaTEGoN9P112nLRt9BqCuyCs%2B8r%2B%2B5ijHBkm4fF9H%2B%2Bx7OsuTvCE%2BGLzisdw8Klojuju2jT0GAmJm8gZbVBC5kwh6Y1DnpUlmZNdNUNtZmfbLL3tOKXNs27xhnXMMkc8ADf%2BeeX8ulRN3oqYEXhaZxO2HU969C5h3oDoHcOF7wuGGJV%2F0z6UguFiAj%2F%2BgBTMunuR08v5wAYujJn%2B40PoWuAsRimvkgDwE%2BcCsjnAPldYDZ1rhgPE6rSzMcEmtoqyQ7Wj6nP2HuTFBKZAF7537g4RivoS9uV3GU7u8cRSlIbU04YuVDwP5TCp%2Fc7JBjqkAeNDY901v7Fpzm79h1RfVe2oi0BWrLngNCQxhtznmTNaMCA7cpx2NHITl1hfNs4t%2Bd4r1gcrFT6rHisxLH%2Fv0GXm0Jo%2BP1QIltkJyuih5bAOAtrkSCChrXjuZesn6ImmgtM3yWntGpQkwL8fzBEce%2BNtO1hd2BNdTxNszltcbpMpkzZyOkCqhA9%2B6S6SE6wBwZzrywpFPlaEn8nWPOXJg%2BuygJib&X-Amz-Signature=45a0dd8d15b7e6e965210201e3944162e39d3ae76bc9b304cd1f65ed77ecb967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7VL5FNK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0TnvjmhYNz19LBHPzyTt4%2F227zyLBdqRGtOdEekjyvQIhALZdL7p%2BsP56aF7tb%2FPWDBJTm2ufkEXJ3f86N6G9%2B45xKv8DCG8QABoMNjM3NDIzMTgzODA1IgxSTkktP6L2sPPG7Bkq3APVHWwK9%2BvIVVsih5ZnxvmktnVU9pw3fA%2B8fwF1C6pWAfoNTd3ScPnUSePEo3PlJa841v%2FN7jqXSMhcBHOEVuMuBCPhshUzu280EAvCxEGpA%2FF6rerAMXcGh2SRvshtbRJVhzbxWzpsKsGEAibO11sjGD0a01YCFhCyTDTeMRf3IsZ94oop9lqhbcJ4CP4D9rNLtuEpZ161OqSredJZmNcd4kQIkgIFPVTy71xPgD9xx4dX78RA3KLWsCOQ9kbQbQ3qw9RvTmLIQgsDH8xifOo4SGxp2uUxb%2FvPYw37r2tg8NDhlCVwoDAELtEH87PLUYGaLIEijaTEGoN9P112nLRt9BqCuyCs%2B8r%2B%2B5ijHBkm4fF9H%2B%2Bx7OsuTvCE%2BGLzisdw8Klojuju2jT0GAmJm8gZbVBC5kwh6Y1DnpUlmZNdNUNtZmfbLL3tOKXNs27xhnXMMkc8ADf%2BeeX8ulRN3oqYEXhaZxO2HU969C5h3oDoHcOF7wuGGJV%2F0z6UguFiAj%2F%2BgBTMunuR08v5wAYujJn%2B40PoWuAsRimvkgDwE%2BcCsjnAPldYDZ1rhgPE6rSzMcEmtoqyQ7Wj6nP2HuTFBKZAF7537g4RivoS9uV3GU7u8cRSlIbU04YuVDwP5TCp%2Fc7JBjqkAeNDY901v7Fpzm79h1RfVe2oi0BWrLngNCQxhtznmTNaMCA7cpx2NHITl1hfNs4t%2Bd4r1gcrFT6rHisxLH%2Fv0GXm0Jo%2BP1QIltkJyuih5bAOAtrkSCChrXjuZesn6ImmgtM3yWntGpQkwL8fzBEce%2BNtO1hd2BNdTxNszltcbpMpkzZyOkCqhA9%2B6S6SE6wBwZzrywpFPlaEn8nWPOXJg%2BuygJib&X-Amz-Signature=499354769c8cd3db911c9d32fa12de328cda2e25a04762475b553f1ce10bb5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
