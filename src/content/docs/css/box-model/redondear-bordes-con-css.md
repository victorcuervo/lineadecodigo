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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ53JRSR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUbtG%2B%2FGVs2R11RVae0EFHUlm31XmnledYtEieg%2FHfzAIgGWMTqMZpC3zCtWPscsyruL3g8fd0%2F8BivsucMSfQstYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFq5rvIdr4KwMnl7MCrcA6lmsK0aNYFlA8LfzniUXhrpS1lcZNROzUB89tyNpDVY9Ohycnis7PpdM%2FzWakUsbItDVPAHs4uYljEOPU70NAusZ1fhz1uABHq5wIIuQzHYwSf6Vy3KZ9D9KOqnuLixtq%2FMZzBQ8Kh%2BesmR4YgmKYjOeV2Xk3jnm3Fr0R33tZKh60WjGYLCzBjA%2BoM2Zn0%2FyvMwOkTsJkkieuyIstwwYvtmxFXpkD0Zm9C0LfY3cgc5M%2BFHOiI5d4ogqsWbpmoHXmSyakwM8XP1Vtyz%2Be1wagr8Q7h2LcJoBXeGbchYKmQxMDPglfX33JcpSIrcNBqr0aMbAGBCjr4OJ%2F%2FLlGTT5krtDqXk%2BW1rgrYKz%2FGW6ixDgqo2UUQH3y0KgAeux9C%2Bfn6M5sRV8TYRC5IURCsbL3i%2FZqhnQ4%2BJu2PkG3N1n7ec9fh2rLomGA4bmYyxnbzywFfW%2BN1ZSGmhECFAuP9%2Btp1uv9ig4TTcA4JztGcOGtj0b6mE2WawKyighuEZpqKq0%2Fa6VtbjB9wzmCkWLfn5J%2BAQ3L0i2h%2F9e9C97E8Em%2BpIYUaygfY1oHbwvZv1thNLGU%2BX%2BOr5JY17JIBI6Z3OK4MDXW5P%2B55UBS8o6w00zG5LR2UiLpRUQB%2B%2FGrWtMLKDicoGOqUB4EsY%2BJzmp1VeqbdkTW92weM79LJo%2B5xLhzDV9IhJkADf%2Bg4ptVpuEIDdA3DA1%2FcIpA2QOyRqxEaaKblRuI92gie6U7P3KjKnoscbnpdGKdX8dZT1insAPHc0a%2FVDoSghskc2WAeIu%2FhegZ0eGvr5FFLJkrJYyjiLZi1zzRvc9SmZencq35%2BL0ywEdTJJkD7Xioli5jq3CLlZi4YTig1vwwXc5LGS&X-Amz-Signature=e44b4beb5ed91216e8ab2593778186f0cbc633a838f172e6a6e6df20963c7582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ53JRSR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUbtG%2B%2FGVs2R11RVae0EFHUlm31XmnledYtEieg%2FHfzAIgGWMTqMZpC3zCtWPscsyruL3g8fd0%2F8BivsucMSfQstYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFq5rvIdr4KwMnl7MCrcA6lmsK0aNYFlA8LfzniUXhrpS1lcZNROzUB89tyNpDVY9Ohycnis7PpdM%2FzWakUsbItDVPAHs4uYljEOPU70NAusZ1fhz1uABHq5wIIuQzHYwSf6Vy3KZ9D9KOqnuLixtq%2FMZzBQ8Kh%2BesmR4YgmKYjOeV2Xk3jnm3Fr0R33tZKh60WjGYLCzBjA%2BoM2Zn0%2FyvMwOkTsJkkieuyIstwwYvtmxFXpkD0Zm9C0LfY3cgc5M%2BFHOiI5d4ogqsWbpmoHXmSyakwM8XP1Vtyz%2Be1wagr8Q7h2LcJoBXeGbchYKmQxMDPglfX33JcpSIrcNBqr0aMbAGBCjr4OJ%2F%2FLlGTT5krtDqXk%2BW1rgrYKz%2FGW6ixDgqo2UUQH3y0KgAeux9C%2Bfn6M5sRV8TYRC5IURCsbL3i%2FZqhnQ4%2BJu2PkG3N1n7ec9fh2rLomGA4bmYyxnbzywFfW%2BN1ZSGmhECFAuP9%2Btp1uv9ig4TTcA4JztGcOGtj0b6mE2WawKyighuEZpqKq0%2Fa6VtbjB9wzmCkWLfn5J%2BAQ3L0i2h%2F9e9C97E8Em%2BpIYUaygfY1oHbwvZv1thNLGU%2BX%2BOr5JY17JIBI6Z3OK4MDXW5P%2B55UBS8o6w00zG5LR2UiLpRUQB%2B%2FGrWtMLKDicoGOqUB4EsY%2BJzmp1VeqbdkTW92weM79LJo%2B5xLhzDV9IhJkADf%2Bg4ptVpuEIDdA3DA1%2FcIpA2QOyRqxEaaKblRuI92gie6U7P3KjKnoscbnpdGKdX8dZT1insAPHc0a%2FVDoSghskc2WAeIu%2FhegZ0eGvr5FFLJkrJYyjiLZi1zzRvc9SmZencq35%2BL0ywEdTJJkD7Xioli5jq3CLlZi4YTig1vwwXc5LGS&X-Amz-Signature=9707828ebea5ef8d7b7fdd308a13fd361275217052691f807ab9d1a6fbdcb969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
