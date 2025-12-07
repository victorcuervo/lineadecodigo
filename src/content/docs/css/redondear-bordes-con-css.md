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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNID4CLI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFhHwuKVvoAcnkHIz03kfftXCO5alHFoxa%2BLbcL3iVRAiB9uUk9ynkILQ1c%2FZC3DDXJvypjZ10070L6w6c6IMa4lCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuLkqC2ww%2F59jDKPAKtwDWo6BX5MggNTuRxlmsYQKcoGxpE70zrFNNz5jre7EAbC6mvp6bN7Q%2FjhqavJ2hXZgIPcEjvtUw24%2FC02CWv7f7lCZQ1R4afZ0kZ2uAKgOGkPPnKbUl4N794o69DZOu%2FnkXRhJaa2zG6LrVNdA66LfPWfNJ4u%2FRsd6dl0jEXpudWk03JS3kZqnViQvTDPdvP5JJvHyEY9wevhlSagxub3k0XBoslhYv5ecJP7lgakh%2FndnkvQeHI%2Bgg%2Bb%2BXTHMC1KE3btGrJnEUtTaYVJaSSWNfglDWl8fJIu7Q10S8NpkCgl%2FSjJD0Gq8hjqS5%2BtTiAyrEj6p0%2B15oXoSCJK7ELlOEVah09G75INX1c9I9sdid507gDp3Hh%2B0PKaGQMb%2BJEMOgGIAag19Ejmi7adCT%2FUr9n9E4Cs7OJlnhJo8U1hG9vU1pJt4LAc%2BYwmxPUV0jkr0O2A%2Ft6TE64wD9GqkrV3A%2FnTYYhclcVM8PHAdprxsXyFsCeQeXL%2BC5wQNvVug8WXRGR9eRQDJqYZFbR%2F7Bgo2ucg73OHr4bXX57I4yzfhz77nXZdgW5bJJgdEiMLLpAAWY2%2BK%2BJ4VuQhDBfSLHaeWZSSrLUNSot5FnoC0FsrGToyW9ZzgJBKplAb64%2FEw05nVyQY6pgEtx0aYUUBURNv7z2wp5IkuABB%2FAAlJOuJkRkxrM96rVpfSD2KQAhkewMdvnsvmLu40UQAVc4fAbyv3PnvfkPv%2FEeMgyHhh8nA98Dv4Rmcm2c7eikqxBKmenbPiP%2Fb2hy7GN5BHJwoqhksIS2ZXK6vTQs2mdhtMrgNNWM2HDUlNGEyVbPOJbzunYoNFuC%2BXOz3yzJnNbCnVwfFdEZDYDfC0bAh3n5mp&X-Amz-Signature=f5076a3acef47adf6c0fe399ceb20b8316223f288a38b6aa67ba1a9dba427c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNID4CLI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFhHwuKVvoAcnkHIz03kfftXCO5alHFoxa%2BLbcL3iVRAiB9uUk9ynkILQ1c%2FZC3DDXJvypjZ10070L6w6c6IMa4lCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuLkqC2ww%2F59jDKPAKtwDWo6BX5MggNTuRxlmsYQKcoGxpE70zrFNNz5jre7EAbC6mvp6bN7Q%2FjhqavJ2hXZgIPcEjvtUw24%2FC02CWv7f7lCZQ1R4afZ0kZ2uAKgOGkPPnKbUl4N794o69DZOu%2FnkXRhJaa2zG6LrVNdA66LfPWfNJ4u%2FRsd6dl0jEXpudWk03JS3kZqnViQvTDPdvP5JJvHyEY9wevhlSagxub3k0XBoslhYv5ecJP7lgakh%2FndnkvQeHI%2Bgg%2Bb%2BXTHMC1KE3btGrJnEUtTaYVJaSSWNfglDWl8fJIu7Q10S8NpkCgl%2FSjJD0Gq8hjqS5%2BtTiAyrEj6p0%2B15oXoSCJK7ELlOEVah09G75INX1c9I9sdid507gDp3Hh%2B0PKaGQMb%2BJEMOgGIAag19Ejmi7adCT%2FUr9n9E4Cs7OJlnhJo8U1hG9vU1pJt4LAc%2BYwmxPUV0jkr0O2A%2Ft6TE64wD9GqkrV3A%2FnTYYhclcVM8PHAdprxsXyFsCeQeXL%2BC5wQNvVug8WXRGR9eRQDJqYZFbR%2F7Bgo2ucg73OHr4bXX57I4yzfhz77nXZdgW5bJJgdEiMLLpAAWY2%2BK%2BJ4VuQhDBfSLHaeWZSSrLUNSot5FnoC0FsrGToyW9ZzgJBKplAb64%2FEw05nVyQY6pgEtx0aYUUBURNv7z2wp5IkuABB%2FAAlJOuJkRkxrM96rVpfSD2KQAhkewMdvnsvmLu40UQAVc4fAbyv3PnvfkPv%2FEeMgyHhh8nA98Dv4Rmcm2c7eikqxBKmenbPiP%2Fb2hy7GN5BHJwoqhksIS2ZXK6vTQs2mdhtMrgNNWM2HDUlNGEyVbPOJbzunYoNFuC%2BXOz3yzJnNbCnVwfFdEZDYDfC0bAh3n5mp&X-Amz-Signature=0200c8d41415b17f6a90b8e5cc67da47d90208bcb1d576d0bf78aa1051afd3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
