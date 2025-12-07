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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2YWGVG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FNaX9VpKsWEbmbt1MsC%2B3VgIY8SoHPyOqkRS1mmeG7wIhANaUUPG9w%2FCOKzzYkCP79O%2FlGtPpoNIv4rqnnCDLDgBgKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqsqsFthBF9DDGtewq3AOSpVCL9nMO%2Fn50t3RvybL%2BsXr%2FGdhYdpR1bLkg5kYRyM6U0NMJSr9VbCYp1cZpW1Iz05yejmzWEa2m3D2kSMRYfzbV2PohvPDGFNZV46CjKnmxX%2FZWjfqZYPiVsMAG4qTiuqyRsWkwnxiNXx%2Fuck5UxZ1sVv2ORdJKHYUxHb8CklNpQ6a6qZCNqvWPKZ4%2Beh0VQiGXobbSuLsLOh0DKmXi0GtlMjTRNrDZY7s3Xf2Dx15TGPTi0SjdHJskL8PT2Te5G%2B6NYbPuQqwch%2FjDUHqYAchO2yUWafryyOdnsQG6dUx4JTkCkK%2BPm2iXTm6WOJtbrTqRFGxoetbziy2NkFeYbXmQs6JcdqsAbcrbyO27GtVsdFGDDadXA2uMeeZ0E6NEqgQPwVMEwtqTTQ5mHR%2Baw3rmajTfvJVcWkyR3NKdljnUzORL2rao9eRT%2FmpafcIg%2BTtucMCDcTDtG1EtpQblfNCtzG9g%2Bipv%2FSC9jjBRwThY3uYTXX9qpBwhrWzBdhypo7HRwBPJgg50LiC65g0aNDW0RNC5Blh7C7PfvGr0UVcCJ%2BhJo0uVU4bzZ9D3sDNLr7VkBhObrS%2FNVsiMA7q4232Wi29MeXpplTAdG08gMPgMA%2F3JWn3TiUSI4TDqtdbJBjqkAUW5tAr7jgHGxW%2BAvg4LOAlMvetwjPl0XXxI1k85PbC5yu7wK61DvzgdYpcNJ15n7DBtXMaowc0nsGgZyoB%2Fw3RU5SXyhgEVsEpoqfEQIjqQTlh%2BUDK1F%2B8ciWeZtD19XGs4lwQhh%2Bj4fdTfTV0Aeg4D3T8dMP9spWGZl0htrpMgGiiS%2FnPJFexq%2BCAvJDSToNQKOeDIfJ%2F9zY47%2Fmy276mRjQEn&X-Amz-Signature=5ead4c37827e3ee4a031da12eef7f15fc717a67626518bca9cc13734508e351b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2YWGVG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FNaX9VpKsWEbmbt1MsC%2B3VgIY8SoHPyOqkRS1mmeG7wIhANaUUPG9w%2FCOKzzYkCP79O%2FlGtPpoNIv4rqnnCDLDgBgKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqsqsFthBF9DDGtewq3AOSpVCL9nMO%2Fn50t3RvybL%2BsXr%2FGdhYdpR1bLkg5kYRyM6U0NMJSr9VbCYp1cZpW1Iz05yejmzWEa2m3D2kSMRYfzbV2PohvPDGFNZV46CjKnmxX%2FZWjfqZYPiVsMAG4qTiuqyRsWkwnxiNXx%2Fuck5UxZ1sVv2ORdJKHYUxHb8CklNpQ6a6qZCNqvWPKZ4%2Beh0VQiGXobbSuLsLOh0DKmXi0GtlMjTRNrDZY7s3Xf2Dx15TGPTi0SjdHJskL8PT2Te5G%2B6NYbPuQqwch%2FjDUHqYAchO2yUWafryyOdnsQG6dUx4JTkCkK%2BPm2iXTm6WOJtbrTqRFGxoetbziy2NkFeYbXmQs6JcdqsAbcrbyO27GtVsdFGDDadXA2uMeeZ0E6NEqgQPwVMEwtqTTQ5mHR%2Baw3rmajTfvJVcWkyR3NKdljnUzORL2rao9eRT%2FmpafcIg%2BTtucMCDcTDtG1EtpQblfNCtzG9g%2Bipv%2FSC9jjBRwThY3uYTXX9qpBwhrWzBdhypo7HRwBPJgg50LiC65g0aNDW0RNC5Blh7C7PfvGr0UVcCJ%2BhJo0uVU4bzZ9D3sDNLr7VkBhObrS%2FNVsiMA7q4232Wi29MeXpplTAdG08gMPgMA%2F3JWn3TiUSI4TDqtdbJBjqkAUW5tAr7jgHGxW%2BAvg4LOAlMvetwjPl0XXxI1k85PbC5yu7wK61DvzgdYpcNJ15n7DBtXMaowc0nsGgZyoB%2Fw3RU5SXyhgEVsEpoqfEQIjqQTlh%2BUDK1F%2B8ciWeZtD19XGs4lwQhh%2Bj4fdTfTV0Aeg4D3T8dMP9spWGZl0htrpMgGiiS%2FnPJFexq%2BCAvJDSToNQKOeDIfJ%2F9zY47%2Fmy276mRjQEn&X-Amz-Signature=d367dae7bfe4105f0eec3199837c79078c909d4a92ace5b3715803b91718d86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
