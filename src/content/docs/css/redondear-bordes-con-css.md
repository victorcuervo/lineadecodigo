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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VN43H7A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuT%2BbGW1F9JgofyrI8J%2FjPQpDjZNwSrpt6JFvMhPtMAwIgBnA%2FxnBTJD2u%2B30q1eK4rNBUivzzOvCfREYOu5JQnKEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDG35z9ca4XNfNj691ircAyFT2RrXzzDA8b0DAdoaGH%2FvIcGwDS617DetVUt%2BQ8WEyvJ1VRrwHzT7KxTo0mWV1AzEuTPAa1hh5fhCqc8ZTX%2Fpn3LxmJ9A%2By9GJLU9xSJFbyjBwaPAa%2BDpTgQbOUevzwEqbm9ddSFSHD5VXd72COL9%2ByxrzlZrqFTFAMp3Dl6uf0nvHIBb%2FNzMIFwM6kxW4xtPwXx48Mu31ChjMNU59%2FbaGJ87QvarA%2F%2BIeZAP24Fi6ofrYn8fL%2Bu4F2uPCIGS%2BUlb7xgDIAr3j%2BZZcdrDF3PXVZCycuzzitR04VvYy5%2BEaETxu6DL8myQS%2F35UXynGxQgxoSw4NMBWBvlLowYDZWE3CUDXAw9qLDTRCTkMcdQ2dZlR4qiky5uFSDUrGvLtKzPagJoxRLMAm4mV9WvWheOEH8xe%2BSZnJJQxFi80XCLrCWOKFlqJU0FtSegc72d97%2F5kWaQENbAdahdF2Djf%2BJ5uiFbAPLCHh3bc50MhqAMJgnSenBCEqcAIopTMIur3NowMcvt6QANtX%2B4CEqJD2PRNLjSzn1Mm7UVmeBV31NeQIedn7DCCjcHGwAuGC5wTI3PGcbEG6AbMSF62lC3GJBY3Kr%2BNMCu%2FAWwkzW092mVwVwgMiyMXhFyasCSMJOixskGOqUBOKgkEwY0%2BELAFmES02pJOLeFpkLZW2Vz9zjll3AjryeAcmfT%2FG%2B2G5gTNpTo22TAQMnbr2WYEbOn2tvFtcOM%2Fd5jvDY8eJ7pfRw%2BoKAVrreHrYAP6zAp8t0xteggLjUhr6TDFL0HWq99AYeXwCDLU1Rd1Gkf1vHNE79Q9%2BPRV1LQzhu01bhu8JMrJteewS%2FQ3BDvchyE3sJdOg5%2Ff1%2FGU1RCuUXR&X-Amz-Signature=a43f29046da2a5a7c97f1884b4dbe32f0ea9585dc54f6fdec083f4716b470811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VN43H7A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuT%2BbGW1F9JgofyrI8J%2FjPQpDjZNwSrpt6JFvMhPtMAwIgBnA%2FxnBTJD2u%2B30q1eK4rNBUivzzOvCfREYOu5JQnKEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDG35z9ca4XNfNj691ircAyFT2RrXzzDA8b0DAdoaGH%2FvIcGwDS617DetVUt%2BQ8WEyvJ1VRrwHzT7KxTo0mWV1AzEuTPAa1hh5fhCqc8ZTX%2Fpn3LxmJ9A%2By9GJLU9xSJFbyjBwaPAa%2BDpTgQbOUevzwEqbm9ddSFSHD5VXd72COL9%2ByxrzlZrqFTFAMp3Dl6uf0nvHIBb%2FNzMIFwM6kxW4xtPwXx48Mu31ChjMNU59%2FbaGJ87QvarA%2F%2BIeZAP24Fi6ofrYn8fL%2Bu4F2uPCIGS%2BUlb7xgDIAr3j%2BZZcdrDF3PXVZCycuzzitR04VvYy5%2BEaETxu6DL8myQS%2F35UXynGxQgxoSw4NMBWBvlLowYDZWE3CUDXAw9qLDTRCTkMcdQ2dZlR4qiky5uFSDUrGvLtKzPagJoxRLMAm4mV9WvWheOEH8xe%2BSZnJJQxFi80XCLrCWOKFlqJU0FtSegc72d97%2F5kWaQENbAdahdF2Djf%2BJ5uiFbAPLCHh3bc50MhqAMJgnSenBCEqcAIopTMIur3NowMcvt6QANtX%2B4CEqJD2PRNLjSzn1Mm7UVmeBV31NeQIedn7DCCjcHGwAuGC5wTI3PGcbEG6AbMSF62lC3GJBY3Kr%2BNMCu%2FAWwkzW092mVwVwgMiyMXhFyasCSMJOixskGOqUBOKgkEwY0%2BELAFmES02pJOLeFpkLZW2Vz9zjll3AjryeAcmfT%2FG%2B2G5gTNpTo22TAQMnbr2WYEbOn2tvFtcOM%2Fd5jvDY8eJ7pfRw%2BoKAVrreHrYAP6zAp8t0xteggLjUhr6TDFL0HWq99AYeXwCDLU1Rd1Gkf1vHNE79Q9%2BPRV1LQzhu01bhu8JMrJteewS%2FQ3BDvchyE3sJdOg5%2Ff1%2FGU1RCuUXR&X-Amz-Signature=668e6cfa1ae2545d576351e60726d06ebea47cdc1b56381d5dd65ef50a498d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
