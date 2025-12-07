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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6DTX2B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPWl8OK1Aypvji1pWNo%2FHEFf7idDOCt%2BmX4m%2Bquf9GzAiEAjdvbe8Gyhs20AaK2TWb7NIAsq9ZBP5NIy4SDArOcZmUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES5BDtauyQS%2FLKEOircA1qImQpX9NJeGC7%2FWn%2FL9HMraFOiv1tCqwpyQZKWY0fXJ8%2BM3h0ZMZC8THaJqe7D3TN%2BzrZ7l8PVAkWW4LR7ow6eRS46I0Rz37DnHPZxnyIZC3SRKYXz9dYN4d7B9TIx27UrkyBRKbqfQgOEnj2BN77jsy55YRvvYbUibVhhfyrOJ%2FNkI0MzmoO%2FVotN2alYd5QtadYDa39P2zbczZzdGFsnh%2F4Tn6ZVAhlvn%2By%2BLO0ZUnQKO4EnNwaz9j4r2o77%2FfU9NgfcGY3c%2FMB6awnwe9kSNzb%2FllpSpQCLexK9o0kiiWz%2B9Yi0sia7aiLkXuxVm%2BstNigyS8QJEbCN9Jek3zJfRO%2BEt2lyLtx2wgPttBcRti3OjMDVgWF56vpfG8qXe33e2rIMprSG8d6d4fVUhjUFzLVrz1RnUpwnYwv%2Fps89xOubSlh0ToIU9UMam39M2j%2BJvdMcZ36BrYxiz0U9gESziUJHCdQh0%2BGe7uG5%2BvdsfYdzi8IqZXF0skd4TQy1Z7AsWV177E1i56M8LIxUWENUAr97o6ALY%2Bon%2BL1Ov410b87j6qOIs6euMjtyj11pU8gZxh95KbMnqIAFRhIxtVw53iBTzIRiVx9dF1Tf91fdUw%2BnDJVYiKCIJOrEMIb90skGOqUBWkr1%2BHfV%2Fk%2BV6ncPneXyPF07vBOPjxn5HbfY5vmk5fyOIQ7tkw4FAyEvffdvA4H4s1Y7SGlFfHpkLaSzagkpgPKeAeVods7G1DGYMcYu8oH177IOOAuQBHXOhLxxfFp2gQ%2BYduJRPZe8GOpr1DZTjhl2D%2BU409UYEWDqqbPb2sBEq8mb5N3VrUZgGHlJSul1Hyv6HKoGfdlJmfgyhqwCbGCuhl%2BN&X-Amz-Signature=4a981b2110b01bc778daa2ac77c4c41fca0172cc2d3e1ce431a41060524a934c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6DTX2B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPWl8OK1Aypvji1pWNo%2FHEFf7idDOCt%2BmX4m%2Bquf9GzAiEAjdvbe8Gyhs20AaK2TWb7NIAsq9ZBP5NIy4SDArOcZmUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES5BDtauyQS%2FLKEOircA1qImQpX9NJeGC7%2FWn%2FL9HMraFOiv1tCqwpyQZKWY0fXJ8%2BM3h0ZMZC8THaJqe7D3TN%2BzrZ7l8PVAkWW4LR7ow6eRS46I0Rz37DnHPZxnyIZC3SRKYXz9dYN4d7B9TIx27UrkyBRKbqfQgOEnj2BN77jsy55YRvvYbUibVhhfyrOJ%2FNkI0MzmoO%2FVotN2alYd5QtadYDa39P2zbczZzdGFsnh%2F4Tn6ZVAhlvn%2By%2BLO0ZUnQKO4EnNwaz9j4r2o77%2FfU9NgfcGY3c%2FMB6awnwe9kSNzb%2FllpSpQCLexK9o0kiiWz%2B9Yi0sia7aiLkXuxVm%2BstNigyS8QJEbCN9Jek3zJfRO%2BEt2lyLtx2wgPttBcRti3OjMDVgWF56vpfG8qXe33e2rIMprSG8d6d4fVUhjUFzLVrz1RnUpwnYwv%2Fps89xOubSlh0ToIU9UMam39M2j%2BJvdMcZ36BrYxiz0U9gESziUJHCdQh0%2BGe7uG5%2BvdsfYdzi8IqZXF0skd4TQy1Z7AsWV177E1i56M8LIxUWENUAr97o6ALY%2Bon%2BL1Ov410b87j6qOIs6euMjtyj11pU8gZxh95KbMnqIAFRhIxtVw53iBTzIRiVx9dF1Tf91fdUw%2BnDJVYiKCIJOrEMIb90skGOqUBWkr1%2BHfV%2Fk%2BV6ncPneXyPF07vBOPjxn5HbfY5vmk5fyOIQ7tkw4FAyEvffdvA4H4s1Y7SGlFfHpkLaSzagkpgPKeAeVods7G1DGYMcYu8oH177IOOAuQBHXOhLxxfFp2gQ%2BYduJRPZe8GOpr1DZTjhl2D%2BU409UYEWDqqbPb2sBEq8mb5N3VrUZgGHlJSul1Hyv6HKoGfdlJmfgyhqwCbGCuhl%2BN&X-Amz-Signature=5a920a39b3e4304260a5d206fdeca29257903f010a873e348952cf883c5d8414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
