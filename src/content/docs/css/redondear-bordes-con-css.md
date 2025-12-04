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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY7S5PQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDwPXViLhBADXnqZB%2BVVcwcIld7bNBhpJ%2FlKp%2BhaLYM7gIgNSMRhfvbUvtvy2%2BfCJ9OWE3shKVlRaw4SUwpebtn3uAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDNMlFynwtUobrYEqyrcAx6vC3S01Pa2%2Bgcr3Zw9LYKYTX3InPRMfy%2F%2FfXBgcWbnhMgN3CCljZJvSKjFabDs0nNJ4vW0TtcI7lRsdZpCWceJnmVxGEWcqbA36IDhsrSkVYvvL2z86thKIowAKulGn1JjuUK77XRXqBV7IKfrGhVM6ybpoCKsW70s3o2%2BgbrGV2KLswGhTHvMZg1VrkdCxBkksEFzK3zfwYZLQ2det5o4MXnBOhakUtVwAqNMGxvF5qbwSKEJafvRjXx1mnOIRLcmzquH7KlYw9huY6vZyucdgeKATxG2tjJC0CYMBLKJuV2vUgCbSbxFjdAAAts501LGoqLKPmRKQQwHeTaazubKQr1BfLiuaaLjPV8iPkvRdTwTPjU%2FI3wgl6oMrgLSy5zVDH5HwHy92Egj7Vp0Mth8yzthZmVlWxmZQawEhRV0W0Qaldrl%2F2mEawLe6aRR%2F2nRnm8Bobasy%2FJCAkK1MAR1mC%2F7ogOmsJuXh1CRfOt5T5q4f9qIMcelwfdlRa4fpIHcpgR7%2Fht58hNQOcLPLJvWsz4JWd2348djoy8mD%2BHkQYERoTFBJuzs%2B5UAqQ6WjqE04XTCed%2BouTN3gkHaz6%2Bb%2Fa7QNThTdGRHhSTHQ1ux3y4Eq8QdlDZSFrd8MKLnxckGOqUBVwjPDbuEwri2kRpOK89pGxl9jkFyc0lKckJ%2Bx3jKVb34jwAel3gre9X2yOiDNtPlDWQPs%2FkBFPW5iXhhn4OfpmN8kFk2ZOpGT%2FlsHEl99qssqEnJEG8JB9xEjjzm5nmYvTLzX6Mk27KLZXAW1GDQt8%2BBCgNfCaWH36pSLhr0ggndloLxTi%2F6z83vPDChn%2Fu1eq5fN9PyVpgnimeO6d%2BnuXFb1s%2Fs&X-Amz-Signature=d5f2533a1e56a4f020313cc88e4856ae373b20a7e23998be4c9b59f193eeedab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY7S5PQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDwPXViLhBADXnqZB%2BVVcwcIld7bNBhpJ%2FlKp%2BhaLYM7gIgNSMRhfvbUvtvy2%2BfCJ9OWE3shKVlRaw4SUwpebtn3uAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDNMlFynwtUobrYEqyrcAx6vC3S01Pa2%2Bgcr3Zw9LYKYTX3InPRMfy%2F%2FfXBgcWbnhMgN3CCljZJvSKjFabDs0nNJ4vW0TtcI7lRsdZpCWceJnmVxGEWcqbA36IDhsrSkVYvvL2z86thKIowAKulGn1JjuUK77XRXqBV7IKfrGhVM6ybpoCKsW70s3o2%2BgbrGV2KLswGhTHvMZg1VrkdCxBkksEFzK3zfwYZLQ2det5o4MXnBOhakUtVwAqNMGxvF5qbwSKEJafvRjXx1mnOIRLcmzquH7KlYw9huY6vZyucdgeKATxG2tjJC0CYMBLKJuV2vUgCbSbxFjdAAAts501LGoqLKPmRKQQwHeTaazubKQr1BfLiuaaLjPV8iPkvRdTwTPjU%2FI3wgl6oMrgLSy5zVDH5HwHy92Egj7Vp0Mth8yzthZmVlWxmZQawEhRV0W0Qaldrl%2F2mEawLe6aRR%2F2nRnm8Bobasy%2FJCAkK1MAR1mC%2F7ogOmsJuXh1CRfOt5T5q4f9qIMcelwfdlRa4fpIHcpgR7%2Fht58hNQOcLPLJvWsz4JWd2348djoy8mD%2BHkQYERoTFBJuzs%2B5UAqQ6WjqE04XTCed%2BouTN3gkHaz6%2Bb%2Fa7QNThTdGRHhSTHQ1ux3y4Eq8QdlDZSFrd8MKLnxckGOqUBVwjPDbuEwri2kRpOK89pGxl9jkFyc0lKckJ%2Bx3jKVb34jwAel3gre9X2yOiDNtPlDWQPs%2FkBFPW5iXhhn4OfpmN8kFk2ZOpGT%2FlsHEl99qssqEnJEG8JB9xEjjzm5nmYvTLzX6Mk27KLZXAW1GDQt8%2BBCgNfCaWH36pSLhr0ggndloLxTi%2F6z83vPDChn%2Fu1eq5fN9PyVpgnimeO6d%2BnuXFb1s%2Fs&X-Amz-Signature=920a571c42af5f960e3777c942f97041c75e6ec317bf4e5e2e1f8f957d7df8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
