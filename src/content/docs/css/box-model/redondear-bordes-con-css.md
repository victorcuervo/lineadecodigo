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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNVG6B5W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCnQoRxgK19M7GA%2FMNdSYGlRQzn%2FzcaKeYGQfhlgT1VgIgTXp9HkvJXhmDq34f%2FiT63b9xZDYOE2JA5mk5fX2yV9oq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNNYDMA9oNuTVyUExyrcA6OIDXDcfVCsZgEuE9EFA7Tt1cputNwWCHAVf5cUJl9yAVcpS%2BERdz5d4EvzTtHXbGVct085C%2Bp4Ghtd9VbCuisxDXFdY%2FYW%2BUuxdMyZsg1GAsVuzYFstQIcq80XOiqKH4CzNgoSrO2ef4ffVemlwd%2BB4YrBuiim19vmXsi3Ty%2BT8L0wFCDpvzGSDJCECzLQ5lv436E6%2B66CSZs9nCaatvJMtGz3GZelmHSgVkeaUi%2BJxngK6BSX803wo%2B91nMxHIFwBrC%2FEQwRi%2B%2BBrVtz2cU3tqbRWFY93D8IqxH%2B2casUbe4Vs7N2LzXKQvzMToM9GyrLLIu0xgiAHp5DCnBWc0Eo7c5eQuEw00aETUg7X44u%2BGSPC4n6aKBDzWh1hvksoGdw7tefM2ponemC0EtY%2BzODwQ46JuD8py4O45izYPpUvGvxN3N3MppC7RGOoednpsppkaBEOhoBrv5Hn3J4r6yNtLWN0QcR24hB7e5om4hRiNaAFJOQCOIl1aVZeqIwmg9AP%2FDpX1ppKxONn4saZBvQe5srYp3XpFHHH0b6Soy10akudC%2FpKBMd0axDg3CMeYWV1JnlHX4gwayXJMhWIjUXPBM%2Bbmwm2TktBr9c%2FL6tfKXpC%2F%2B5vqlhrtNtMNqqisoGOqUBDs7srSAGtNc0nlS45cwn0%2FpbzJWajUcFFQ%2F9gt3xge8UPgjWX9SA8B9yqX6w%2BQJo%2F5vLkC3fcaPH2zxpqb8BHF9mJpkbr8WxN6FMyMdrSuCcUtjAcam8XaN5ej1cSbvEZUKlKC%2BN0ANOkGv5DAsRr4alqWISW8pPRDXnh8t2%2FQo4%2FwR4E96MtTb6xnFJlkbuYabayYdmYqlqMd1Vso9pzsdEFcQD&X-Amz-Signature=23ce0b1e8481016d5cbc081934708ae7107e8ccee0f00690db50baa329795423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNVG6B5W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCnQoRxgK19M7GA%2FMNdSYGlRQzn%2FzcaKeYGQfhlgT1VgIgTXp9HkvJXhmDq34f%2FiT63b9xZDYOE2JA5mk5fX2yV9oq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNNYDMA9oNuTVyUExyrcA6OIDXDcfVCsZgEuE9EFA7Tt1cputNwWCHAVf5cUJl9yAVcpS%2BERdz5d4EvzTtHXbGVct085C%2Bp4Ghtd9VbCuisxDXFdY%2FYW%2BUuxdMyZsg1GAsVuzYFstQIcq80XOiqKH4CzNgoSrO2ef4ffVemlwd%2BB4YrBuiim19vmXsi3Ty%2BT8L0wFCDpvzGSDJCECzLQ5lv436E6%2B66CSZs9nCaatvJMtGz3GZelmHSgVkeaUi%2BJxngK6BSX803wo%2B91nMxHIFwBrC%2FEQwRi%2B%2BBrVtz2cU3tqbRWFY93D8IqxH%2B2casUbe4Vs7N2LzXKQvzMToM9GyrLLIu0xgiAHp5DCnBWc0Eo7c5eQuEw00aETUg7X44u%2BGSPC4n6aKBDzWh1hvksoGdw7tefM2ponemC0EtY%2BzODwQ46JuD8py4O45izYPpUvGvxN3N3MppC7RGOoednpsppkaBEOhoBrv5Hn3J4r6yNtLWN0QcR24hB7e5om4hRiNaAFJOQCOIl1aVZeqIwmg9AP%2FDpX1ppKxONn4saZBvQe5srYp3XpFHHH0b6Soy10akudC%2FpKBMd0axDg3CMeYWV1JnlHX4gwayXJMhWIjUXPBM%2Bbmwm2TktBr9c%2FL6tfKXpC%2F%2B5vqlhrtNtMNqqisoGOqUBDs7srSAGtNc0nlS45cwn0%2FpbzJWajUcFFQ%2F9gt3xge8UPgjWX9SA8B9yqX6w%2BQJo%2F5vLkC3fcaPH2zxpqb8BHF9mJpkbr8WxN6FMyMdrSuCcUtjAcam8XaN5ej1cSbvEZUKlKC%2BN0ANOkGv5DAsRr4alqWISW8pPRDXnh8t2%2FQo4%2FwR4E96MtTb6xnFJlkbuYabayYdmYqlqMd1Vso9pzsdEFcQD&X-Amz-Signature=1ff3905c87029e9cad7c0b232c70fb81e873bdde94a355125b997f16bd7aa000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
