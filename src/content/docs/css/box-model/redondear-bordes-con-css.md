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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QF4SVXJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtlMcbZsaSDTmHP9pFQzZ6JlkFs9yll2%2FKxVgyDuRHIQIhALqhY0jhg1DFUyx8SdSr%2BENtDSWtUc9MCXSmlXZwLGqMKv8DCH0QABoMNjM3NDIzMTgzODA1IgzuorUc1EzIcCCbeMoq3AOkzpZ3s5N4WiLEqZE10CMd%2FxktdEskv0tj59yCgLArbXnBpdWnJNT9Fre36ZkV1Zym86jWuT%2BLAVCBxDTovy3Srhlb2rRIb5RgufASeHE%2FgC3WP3HMao01hiGD52kTU%2Blv1PXLdiKRlXJv%2FbyfygTgiHqkHqiKgFnMtyGUqqxpv7SP5HpJf4%2Fn3adKfhpasZWGXaH0%2BDc57lHNRg4MM3IIlqoGLzkPNuiG2NQjvmVVhbIiG0BGHmeYPVwOrSPax6UNE6Zs7pZDiMG48S%2FkoeDJQLhFzZe6Iyo6LySbGD2T4gJjA7lKVAWcCEo574llJe5zYsfuR7b7OX3xOpbxcKNmaGH22ZKux5rMNg21TsktsCpK6hUa18g5wXzAJX5epfKB2n9eA7rjPIrMsD6KLiuiegln147qWDOxHCWtCM0sUSS2xXtRXYbTaxx3Fyspb%2BnXRbSANRZd7zu4R%2F7avNeO9fMG0va8K9qsiTEwPLs%2BH3Xydzgdej7%2BXvZm6HA3ny7XevzhEsqnMN01guDHgBqBZHdK431LPLPmPRRjRE8cFgomZlIZjjOOLnJ3rM8xGSHEYq1F3m5p%2FF4wBRmFzCsOd49HPy7AaWvpEE5KHAAUKnN5zyWGyKXek%2FvDkzCAq4rKBjqkAUn86HcTjMLsBmkOmB1g8g%2FMUfoF%2BSVwxd0V9%2BZgN3nTqIZVK9EsF4eRYOUFV9FZIzKIdyAN%2F5mw4GJfcQNXebLqKtRR7oMZy6FMp6wE%2Bp2%2BwVs1j923gpyCkChKPfn9egpggqYJrI0sxDf1gsn9Hi7xDSAV9%2F%2FWEb4PIlUdcOyAgkBSs7ocTqfVN6twoY8OW3nhNryo00z1eBlv%2BBKoQaZOhX3O&X-Amz-Signature=ceb56d5430918d9956c6f6d7f99e9639ace35cc096ad1173ae8857f242aeda38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QF4SVXJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtlMcbZsaSDTmHP9pFQzZ6JlkFs9yll2%2FKxVgyDuRHIQIhALqhY0jhg1DFUyx8SdSr%2BENtDSWtUc9MCXSmlXZwLGqMKv8DCH0QABoMNjM3NDIzMTgzODA1IgzuorUc1EzIcCCbeMoq3AOkzpZ3s5N4WiLEqZE10CMd%2FxktdEskv0tj59yCgLArbXnBpdWnJNT9Fre36ZkV1Zym86jWuT%2BLAVCBxDTovy3Srhlb2rRIb5RgufASeHE%2FgC3WP3HMao01hiGD52kTU%2Blv1PXLdiKRlXJv%2FbyfygTgiHqkHqiKgFnMtyGUqqxpv7SP5HpJf4%2Fn3adKfhpasZWGXaH0%2BDc57lHNRg4MM3IIlqoGLzkPNuiG2NQjvmVVhbIiG0BGHmeYPVwOrSPax6UNE6Zs7pZDiMG48S%2FkoeDJQLhFzZe6Iyo6LySbGD2T4gJjA7lKVAWcCEo574llJe5zYsfuR7b7OX3xOpbxcKNmaGH22ZKux5rMNg21TsktsCpK6hUa18g5wXzAJX5epfKB2n9eA7rjPIrMsD6KLiuiegln147qWDOxHCWtCM0sUSS2xXtRXYbTaxx3Fyspb%2BnXRbSANRZd7zu4R%2F7avNeO9fMG0va8K9qsiTEwPLs%2BH3Xydzgdej7%2BXvZm6HA3ny7XevzhEsqnMN01guDHgBqBZHdK431LPLPmPRRjRE8cFgomZlIZjjOOLnJ3rM8xGSHEYq1F3m5p%2FF4wBRmFzCsOd49HPy7AaWvpEE5KHAAUKnN5zyWGyKXek%2FvDkzCAq4rKBjqkAUn86HcTjMLsBmkOmB1g8g%2FMUfoF%2BSVwxd0V9%2BZgN3nTqIZVK9EsF4eRYOUFV9FZIzKIdyAN%2F5mw4GJfcQNXebLqKtRR7oMZy6FMp6wE%2Bp2%2BwVs1j923gpyCkChKPfn9egpggqYJrI0sxDf1gsn9Hi7xDSAV9%2F%2FWEb4PIlUdcOyAgkBSs7ocTqfVN6twoY8OW3nhNryo00z1eBlv%2BBKoQaZOhX3O&X-Amz-Signature=4306065a0db3c7a7fe0d608ab8806ae288f852a47e9cb0de74a872c2ca8b2b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
