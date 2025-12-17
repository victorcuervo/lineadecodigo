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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657GKC33I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7UYE%2FS%2FBD5Q4f%2FUbc7nllaPbn2dbyZS8qzjaprIqU6QIgGSJlsvKVLzVzjTc2Sng9AZkBhc1g8NftKkK7%2FLwga64q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDM7f9CkKR9nowd%2BPoCrcA4DJ48HXf5nrQgaamyEDdTTqWcuX5ck8QtmZAGZctch2nSlM9aGg86dpAYCAp%2BWuPxRzJN2o4HygH1JwNAbwN8061G%2FyGMgowYuRfBorUkC%2BpqoR7ttaLgKbt26geAopwjNOa%2FkkyQPVIA%2BewPDjaOJjyRu5Y2cW5etSwFk7jfM3f%2FFnQQXnKfYQ5qLUiQkB3jIiQpsmd4vBPIws1JzoVPgil3AfVz7mSJLZP%2FT8OmoeFxlZPJsmGORHUCIli5G09IVgfzNVqSCFG3AvXjUdEkPN%2FDcxOtjsDF0x0qjNFp5yWncUB9Vpue6iSUk0YJS4PKtQIM5NL43pu4ykwKzOFWl3gaORTj9i1F3n%2BED9Vc9qfQy4JlsPFexFdG2NxXzn3VbaEpFHqSjZWbctlvunzH4%2F50OnPa4ApsWDcXkJdAE8gQVuM3grkyCNFHUHxMbsyG8MkXF%2BF0HZKjQK2SqdeaB%2BsFNz8FPc7ragNy4FuQAuskfM5MOMc%2BO4mfwh7r1q0oNz6EgBF%2BwGhS0VUMWPIPn%2BYhJjt9D6VHoaeCJpzbMCBBofkyzQmT%2FAZ1AUIILfszjQjnwgUqWxogNU%2BRTMQyLYVV6A0efhbMcR9HFRUo%2BxgGufe0wv4w2PeqFXMIm3icoGOqUB%2FwOzfuR09QvlAr9bht54bktQxW%2FrPossfSgxSpERTamwqcqbk2d6TO5vCDnzDW4jRtbjNcVH08lIreEUH7bYVQ%2FwpU7xlnsuQ3%2FKYeuHzoaN1BIlBQ14RIsXPFhIeW531A6oSZpaAzjUq644xUCccmDERSuVIELaV3nEZQ91twRXVaisEQKIDidLnAbm8T0lWQyKtIC1LmwNtktqkZixA02KR4p5&X-Amz-Signature=a33bba8ca15ad8308a793f8543c69c7a6bef21ff65d47b1fed59e60eb177e95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657GKC33I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7UYE%2FS%2FBD5Q4f%2FUbc7nllaPbn2dbyZS8qzjaprIqU6QIgGSJlsvKVLzVzjTc2Sng9AZkBhc1g8NftKkK7%2FLwga64q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDM7f9CkKR9nowd%2BPoCrcA4DJ48HXf5nrQgaamyEDdTTqWcuX5ck8QtmZAGZctch2nSlM9aGg86dpAYCAp%2BWuPxRzJN2o4HygH1JwNAbwN8061G%2FyGMgowYuRfBorUkC%2BpqoR7ttaLgKbt26geAopwjNOa%2FkkyQPVIA%2BewPDjaOJjyRu5Y2cW5etSwFk7jfM3f%2FFnQQXnKfYQ5qLUiQkB3jIiQpsmd4vBPIws1JzoVPgil3AfVz7mSJLZP%2FT8OmoeFxlZPJsmGORHUCIli5G09IVgfzNVqSCFG3AvXjUdEkPN%2FDcxOtjsDF0x0qjNFp5yWncUB9Vpue6iSUk0YJS4PKtQIM5NL43pu4ykwKzOFWl3gaORTj9i1F3n%2BED9Vc9qfQy4JlsPFexFdG2NxXzn3VbaEpFHqSjZWbctlvunzH4%2F50OnPa4ApsWDcXkJdAE8gQVuM3grkyCNFHUHxMbsyG8MkXF%2BF0HZKjQK2SqdeaB%2BsFNz8FPc7ragNy4FuQAuskfM5MOMc%2BO4mfwh7r1q0oNz6EgBF%2BwGhS0VUMWPIPn%2BYhJjt9D6VHoaeCJpzbMCBBofkyzQmT%2FAZ1AUIILfszjQjnwgUqWxogNU%2BRTMQyLYVV6A0efhbMcR9HFRUo%2BxgGufe0wv4w2PeqFXMIm3icoGOqUB%2FwOzfuR09QvlAr9bht54bktQxW%2FrPossfSgxSpERTamwqcqbk2d6TO5vCDnzDW4jRtbjNcVH08lIreEUH7bYVQ%2FwpU7xlnsuQ3%2FKYeuHzoaN1BIlBQ14RIsXPFhIeW531A6oSZpaAzjUq644xUCccmDERSuVIELaV3nEZQ91twRXVaisEQKIDidLnAbm8T0lWQyKtIC1LmwNtktqkZixA02KR4p5&X-Amz-Signature=d3e9362c6e58b99fc0a8a15888b5d6c5ea948155009473a5c027eaedfeef23d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
