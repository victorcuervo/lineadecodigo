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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3HL4D7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fazs8UyE6UPhrTDl9GEtb7xE7lMpyiR%2BnsPYMOZ3QWAIgAIU9gLHkPYoMZTkFlUjOVulRWypvFBVS6udVcqoVGI8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHdpOp4WcwUvM%2B69NyrcA%2F%2FpXAMNAP0xs4%2BgGu0Jg0ayTZ1K%2BDVX2Ng5HhI0DEmi26gndE2bwcsStaqoNCznCQ4PWOdV1TBHTqqFv8lV1BjFSkzH7%2BT4twLl%2Biroc6sBodNrXzHJLS0HhNIs5VxoorQrN0X46KtGJcVQRgt1VO%2BYds98gdjwiUp8XwHw%2FmfCwYKyd8B04oCB2VaFPU7fQ6yk5aw97yTZLJjvxcy2l6JujW8GGEXS2Aio1uqj2mwOnkI%2F5FR4qrJWeeBetAVAR253%2FuOZem13TZWT3XBu1WNMsDFTWQywiR7vFttpo2Lh2Ba2le8fVMNdV4Qm08pFfR1yv2CAE3o4Eav0MozQCWJt9FDgiaHyhloU1VcoLXvx%2B5OygGuaTvEvoqZwmH42gla%2BRfNyxeW1%2Frg3S3GclI8vGX4klnp83Rw8MIWXIQbX61jzcSStKVXjLVRyx%2BT3%2FNc96Gf0Z%2BeG%2F7ugWv3m%2FULGCkEC636Qf47p9MPpBLncOELHhJqn%2BT1dwoejuSZ4VIkxqJ0oezsAx%2FK%2FyIDi0qX3Hq5TsOxnhbHfBLf9aaFuS6pLTmncI8xNmvwmkZAAOUsXYqhnWT67cawmz6dFKyMWbYKdZdpb7uwWBUiLOZE1NY9fEvawnpvqt%2B4oMJG4icoGOqUBCGKOKK3%2Brdq%2Ffaahp6xcShmxqt9IY3aS6JNkhPTJK%2FfvPQBdnkLu2JqqaAh4S7RPSJECPgrk8g7yIWd8Q81eunYZSmWCJ%2FmpovYLu%2FXYdRr3REpmEFGrPK1DFlP59292BgiOfk6xrp7uEYzHxPyuDtQwaejsCh9Aw9ogLBgKItSNzHvDknRpqIyh%2BRVDWvB9vr%2BW%2B6K3VArCRABULrGPG%2BHRtyvM&X-Amz-Signature=aceb57258bb7eebda805bd726ea299b29537b6d65b12ac41c83545c461bae19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3HL4D7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fazs8UyE6UPhrTDl9GEtb7xE7lMpyiR%2BnsPYMOZ3QWAIgAIU9gLHkPYoMZTkFlUjOVulRWypvFBVS6udVcqoVGI8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHdpOp4WcwUvM%2B69NyrcA%2F%2FpXAMNAP0xs4%2BgGu0Jg0ayTZ1K%2BDVX2Ng5HhI0DEmi26gndE2bwcsStaqoNCznCQ4PWOdV1TBHTqqFv8lV1BjFSkzH7%2BT4twLl%2Biroc6sBodNrXzHJLS0HhNIs5VxoorQrN0X46KtGJcVQRgt1VO%2BYds98gdjwiUp8XwHw%2FmfCwYKyd8B04oCB2VaFPU7fQ6yk5aw97yTZLJjvxcy2l6JujW8GGEXS2Aio1uqj2mwOnkI%2F5FR4qrJWeeBetAVAR253%2FuOZem13TZWT3XBu1WNMsDFTWQywiR7vFttpo2Lh2Ba2le8fVMNdV4Qm08pFfR1yv2CAE3o4Eav0MozQCWJt9FDgiaHyhloU1VcoLXvx%2B5OygGuaTvEvoqZwmH42gla%2BRfNyxeW1%2Frg3S3GclI8vGX4klnp83Rw8MIWXIQbX61jzcSStKVXjLVRyx%2BT3%2FNc96Gf0Z%2BeG%2F7ugWv3m%2FULGCkEC636Qf47p9MPpBLncOELHhJqn%2BT1dwoejuSZ4VIkxqJ0oezsAx%2FK%2FyIDi0qX3Hq5TsOxnhbHfBLf9aaFuS6pLTmncI8xNmvwmkZAAOUsXYqhnWT67cawmz6dFKyMWbYKdZdpb7uwWBUiLOZE1NY9fEvawnpvqt%2B4oMJG4icoGOqUBCGKOKK3%2Brdq%2Ffaahp6xcShmxqt9IY3aS6JNkhPTJK%2FfvPQBdnkLu2JqqaAh4S7RPSJECPgrk8g7yIWd8Q81eunYZSmWCJ%2FmpovYLu%2FXYdRr3REpmEFGrPK1DFlP59292BgiOfk6xrp7uEYzHxPyuDtQwaejsCh9Aw9ogLBgKItSNzHvDknRpqIyh%2BRVDWvB9vr%2BW%2B6K3VArCRABULrGPG%2BHRtyvM&X-Amz-Signature=e54b7812bef68e1b018acd5fedb01296eb503f1c5a771b5665b856623561cfce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
