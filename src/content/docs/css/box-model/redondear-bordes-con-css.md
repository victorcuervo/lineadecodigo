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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW73HPQE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrxYz8x8SUxCI%2FybNbZYMDeS68YzkDYyV0JeGWGU4o2AiBdIyC%2FyN8OtQvXPEn33CQfyn7BQJD9A%2BDYpUlEDZx5BCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMWpFSdzEa5zkaUkorKtwDjwsGh%2FLerqWcLRDkZC250gwC74yH%2FsF0a2Pj1KeSx2sQpI42mzr40fK0otBFP2er1JEu2nRU%2BaYjEotoL5Y0F8r%2F8q3LEocQab90EWjq%2BobluPbRWQ2c75A2R%2FOtBhTx36Aoz0nN4llCMWP6%2BQmqJKOxaLB2MXBojS4gOCe3EKWXx5LDcRw3PzN9VcWNcbmRdqYb5Kl%2BqEVeStfINLPJBEjzvFo9yP50kVNJ%2FS51W47Cst0EYSqboRCcR8V56gT3OMqPO9Fu1K4YohQ7gyX5k61xS0IfBkSkNWNgiG%2FA9zESV%2Fw8quRfT1QmRYbhZ6IEtVCdDe78d73cdODbBy%2Fui52T319X8iL7E4QcFw7PHmlTNx2xqpZB4nNvC351rY%2B%2FO9n9WEbOezzvBFhr0j%2FVsR%2BF438dZvZ7PSaPVrbaOV7SeVOnvhC38H7bJ3AL64VHU%2BKIBxK1nVmkWgjhsiF1eZcqr9ogr7r5UgWbHjnADWMmVRuhnyNgfdBX6gzHj5PD137EbmulyrqcniyOErl5ToJwiGgdZbvUHbchI0WtwW8ya0aobSOZvLCcuFVhFa0BJWy1NAb21j77QO9OpRuujPP6X7xxf%2BpJ3cmYBxHQyW%2BJ1uNdSXPJGuVCY9ow87eJygY6pgHWOisuhZVmpiAVbCdAYvmMJTP8ffo6vRn1av1UB%2FPDlBe22Ja9ovVmpNkcT%2BWhtQLwBuWBTTDSMRSRMerjZqP6ovFUw2tFipuuL9As2AVU1qObOdTpFfkXLw1taxeolYfRev3gMOLpcFsVOTsko4Jq5UNp8V6J3lu94SSye9MD%2B2iPtLJ31lFrF1RKD4iu16JUkYgc1P59mzPIi3PufT1YVrzNB5WT&X-Amz-Signature=02f0efc0abdffaa136f164403501eb444e2c61d39284e940f586594aa853bc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW73HPQE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrxYz8x8SUxCI%2FybNbZYMDeS68YzkDYyV0JeGWGU4o2AiBdIyC%2FyN8OtQvXPEn33CQfyn7BQJD9A%2BDYpUlEDZx5BCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMWpFSdzEa5zkaUkorKtwDjwsGh%2FLerqWcLRDkZC250gwC74yH%2FsF0a2Pj1KeSx2sQpI42mzr40fK0otBFP2er1JEu2nRU%2BaYjEotoL5Y0F8r%2F8q3LEocQab90EWjq%2BobluPbRWQ2c75A2R%2FOtBhTx36Aoz0nN4llCMWP6%2BQmqJKOxaLB2MXBojS4gOCe3EKWXx5LDcRw3PzN9VcWNcbmRdqYb5Kl%2BqEVeStfINLPJBEjzvFo9yP50kVNJ%2FS51W47Cst0EYSqboRCcR8V56gT3OMqPO9Fu1K4YohQ7gyX5k61xS0IfBkSkNWNgiG%2FA9zESV%2Fw8quRfT1QmRYbhZ6IEtVCdDe78d73cdODbBy%2Fui52T319X8iL7E4QcFw7PHmlTNx2xqpZB4nNvC351rY%2B%2FO9n9WEbOezzvBFhr0j%2FVsR%2BF438dZvZ7PSaPVrbaOV7SeVOnvhC38H7bJ3AL64VHU%2BKIBxK1nVmkWgjhsiF1eZcqr9ogr7r5UgWbHjnADWMmVRuhnyNgfdBX6gzHj5PD137EbmulyrqcniyOErl5ToJwiGgdZbvUHbchI0WtwW8ya0aobSOZvLCcuFVhFa0BJWy1NAb21j77QO9OpRuujPP6X7xxf%2BpJ3cmYBxHQyW%2BJ1uNdSXPJGuVCY9ow87eJygY6pgHWOisuhZVmpiAVbCdAYvmMJTP8ffo6vRn1av1UB%2FPDlBe22Ja9ovVmpNkcT%2BWhtQLwBuWBTTDSMRSRMerjZqP6ovFUw2tFipuuL9As2AVU1qObOdTpFfkXLw1taxeolYfRev3gMOLpcFsVOTsko4Jq5UNp8V6J3lu94SSye9MD%2B2iPtLJ31lFrF1RKD4iu16JUkYgc1P59mzPIi3PufT1YVrzNB5WT&X-Amz-Signature=78cdf0a9c341091a4d99a808ff8716b0b719aa2c91206fe7d054d1a83b915524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
