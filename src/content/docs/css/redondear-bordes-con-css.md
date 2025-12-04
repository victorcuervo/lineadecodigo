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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DQNP62T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDQvtkESR9wZMWoRB9BoVi7l7s9AgXGccdfWcRHxvtYoQIhAJRgQ0DvIaSSgEQ9BIttGOq6jMw22NgXpzvg66Rp3%2BzyKv8DCEYQABoMNjM3NDIzMTgzODA1IgzPryI4V%2FxVCq9r1ygq3ANt1TsaC93d2BmohRN1bkpLbCqeLSoEvJpAfGYRumaArImYIYDpyJcJo%2FtFx%2BANayLotlP03YkjviVweoqqptUQAfTIdse8JpsAhXNyaw3jeX7YZYItucXxBkpOLC2qsSi%2FIJOb10cjNvjNfic%2BPwultwbche3GcWy%2B%2Bn%2Fjb%2F4kAi%2BBG1EADBBeZTocqiwxRXYN2qtqsTBRrQiD%2FHtdA%2FlTP4BF0DnTZCF4BcHitX8pRtugN9Exa5aujdTczoCojKQhT4HPwu4fOJRVPzaQBF2scRcQ1krK5ytv3pwS32z8VtN7Rayyu9T7ulvCQ65OWH%2FeyCpAoNTn%2B3nX03Iq%2F5E577rQdlJwLu%2B3rpc%2B9j%2FB1t6UAjzM2kPDiYzEL5SxoHpfB74N1WeXDtM71d1xGsw%2BXQOS8LyOyasrPRtmprNMhdPzliDNBcDxYRudAqHZdAxp1XNsiyGMDVG%2BT9jLhHPz2jHLozhZqKwvL0Jpog2uThcnGMGSx0U3rZUszKvzp55wnQr7HNW1CWBYEdZ9I5rpjONimLB6H8iiNeFwWpQ0IHhZJSJDo0tGbQjjaC04oAQMtC%2BuMr%2BA8bN7IJoCUTLOoVIw67JURCcU6TLjdTEPNHbDBGKgvXi6%2BrE6CTDCg8bJBjqkASUoXi81mWwPTOyUbBMuXjoxzgo2T83ZjAiKq9LLmz6GQWzU%2BGrw%2BqnjM0OQ8hS4L5eeYXfjCHajTYVH3XcM7%2FboMA3StOllYC65Db7jHucAV8D%2BQi7O43l%2BnvoJd7XhR7gfeQq5Vh41PV%2BNrzKpnno7oofV6WtP5zRkc1CQ7pV%2Fa9b%2FZa3%2FSN9slIq%2FQIbI%2ByJ9k83wdtMLIrmfznHqjsUby5ln&X-Amz-Signature=a9b8c1484aa9fc9ede8f9a3bf82da6ef42025d4eff17902ee3dbee4c7cbd638c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DQNP62T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDQvtkESR9wZMWoRB9BoVi7l7s9AgXGccdfWcRHxvtYoQIhAJRgQ0DvIaSSgEQ9BIttGOq6jMw22NgXpzvg66Rp3%2BzyKv8DCEYQABoMNjM3NDIzMTgzODA1IgzPryI4V%2FxVCq9r1ygq3ANt1TsaC93d2BmohRN1bkpLbCqeLSoEvJpAfGYRumaArImYIYDpyJcJo%2FtFx%2BANayLotlP03YkjviVweoqqptUQAfTIdse8JpsAhXNyaw3jeX7YZYItucXxBkpOLC2qsSi%2FIJOb10cjNvjNfic%2BPwultwbche3GcWy%2B%2Bn%2Fjb%2F4kAi%2BBG1EADBBeZTocqiwxRXYN2qtqsTBRrQiD%2FHtdA%2FlTP4BF0DnTZCF4BcHitX8pRtugN9Exa5aujdTczoCojKQhT4HPwu4fOJRVPzaQBF2scRcQ1krK5ytv3pwS32z8VtN7Rayyu9T7ulvCQ65OWH%2FeyCpAoNTn%2B3nX03Iq%2F5E577rQdlJwLu%2B3rpc%2B9j%2FB1t6UAjzM2kPDiYzEL5SxoHpfB74N1WeXDtM71d1xGsw%2BXQOS8LyOyasrPRtmprNMhdPzliDNBcDxYRudAqHZdAxp1XNsiyGMDVG%2BT9jLhHPz2jHLozhZqKwvL0Jpog2uThcnGMGSx0U3rZUszKvzp55wnQr7HNW1CWBYEdZ9I5rpjONimLB6H8iiNeFwWpQ0IHhZJSJDo0tGbQjjaC04oAQMtC%2BuMr%2BA8bN7IJoCUTLOoVIw67JURCcU6TLjdTEPNHbDBGKgvXi6%2BrE6CTDCg8bJBjqkASUoXi81mWwPTOyUbBMuXjoxzgo2T83ZjAiKq9LLmz6GQWzU%2BGrw%2BqnjM0OQ8hS4L5eeYXfjCHajTYVH3XcM7%2FboMA3StOllYC65Db7jHucAV8D%2BQi7O43l%2BnvoJd7XhR7gfeQq5Vh41PV%2BNrzKpnno7oofV6WtP5zRkc1CQ7pV%2Fa9b%2FZa3%2FSN9slIq%2FQIbI%2ByJ9k83wdtMLIrmfznHqjsUby5ln&X-Amz-Signature=66e32b752ce61644e3393cbf2fcf9c083bc0a4aa6d2753c97bdcfa58a3a6b6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
