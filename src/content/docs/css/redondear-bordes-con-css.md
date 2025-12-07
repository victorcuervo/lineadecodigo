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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB5RCY7Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1TTrX9kefAZnl5r%2F4ukqg7ip%2FPKYEnCWW3phuQofVYAiEA91PDeD7IEEY%2FZALA6rcfUUfHIm7llUbABsnEuVPasT4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZNRcVryk%2FQwQUfuSrcAzmMlvTiMmOULTS%2FpQvS5%2FXAh0bK2afOuoPdcouljpf57zYLicR0XTr7WPbXXxmC2Pffv0oN%2BC1cdWCDexgSCjBYlyDzWrOSAt%2FJ3xf3VSAgklRZ9DIzNHzpdbyNIuJTI9RpFaFS5tZ4qdWVZiShp%2BYVUhijp6X5dvMuOawsKR14tZ2ju5XqrkcB7V7M7hDhAK6XVT3zD7MS0w3fgQQgCghggg0sDaBvoaCrEikxFhLBHGt5FHoeioesr9e%2Buydt3zXdkHX8KeV0k9uFp5%2BlMei8y3DFwHm1IQZ7sTAdFyDSWr1sxHLjOB6Q66W13Cy3n2q05VAnxsjPosrU10kz6dL1XxR0iEkhxs8i8bnBzLdI24%2BcRY5IIKWibYtifv4GHrATCPTA8iScpDZtD0qlJW%2Fxz6EilELOAgheqyWk3gzcqL%2BYnfV7qfk7ZpnSn9eJv4EkGem1zwxCPmrIox1J0dU0BNQysCFlkGil7cwpBov3WetnKqUfR1vZ5IgEIgTNZJPcwr2UwvA6mPtVe7yww3thyaDsOMJQJwG08jSMxQS42N4zaGEwFtLpBFxD5ndbcjxX%2Fi26ORiVzij3lJLcoqXBFPzNEz5u5VJQbsYP7gs92wXtQ9aRW4cDx946MOC81skGOqUBeLj7n0tHJZFmn4rlFAjLlh%2F76QddqObtfdx%2BRzNRVLVGiMe6nwSphUxbD1Ym%2F%2FGl0zx6Eo1%2Bil0D7uoz79Ve%2F%2BLqFbXGe7EulA4GFccmY5ICjacShzwEZ7DSLZ%2FWd2hWAvjIR%2BhxvBEI%2BoYysek1By34UH09Ask7vjJjPH11RdzMfAt5L%2BtCbB5PxBv%2BSezGu2lMSGuH%2F8UaYoEtDJtTZNN2ZkOs&X-Amz-Signature=5b23d9b9d39afadc495d730312c5fa10e1a3ca3f6b19814f96172e21ba56a2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB5RCY7Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1TTrX9kefAZnl5r%2F4ukqg7ip%2FPKYEnCWW3phuQofVYAiEA91PDeD7IEEY%2FZALA6rcfUUfHIm7llUbABsnEuVPasT4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZNRcVryk%2FQwQUfuSrcAzmMlvTiMmOULTS%2FpQvS5%2FXAh0bK2afOuoPdcouljpf57zYLicR0XTr7WPbXXxmC2Pffv0oN%2BC1cdWCDexgSCjBYlyDzWrOSAt%2FJ3xf3VSAgklRZ9DIzNHzpdbyNIuJTI9RpFaFS5tZ4qdWVZiShp%2BYVUhijp6X5dvMuOawsKR14tZ2ju5XqrkcB7V7M7hDhAK6XVT3zD7MS0w3fgQQgCghggg0sDaBvoaCrEikxFhLBHGt5FHoeioesr9e%2Buydt3zXdkHX8KeV0k9uFp5%2BlMei8y3DFwHm1IQZ7sTAdFyDSWr1sxHLjOB6Q66W13Cy3n2q05VAnxsjPosrU10kz6dL1XxR0iEkhxs8i8bnBzLdI24%2BcRY5IIKWibYtifv4GHrATCPTA8iScpDZtD0qlJW%2Fxz6EilELOAgheqyWk3gzcqL%2BYnfV7qfk7ZpnSn9eJv4EkGem1zwxCPmrIox1J0dU0BNQysCFlkGil7cwpBov3WetnKqUfR1vZ5IgEIgTNZJPcwr2UwvA6mPtVe7yww3thyaDsOMJQJwG08jSMxQS42N4zaGEwFtLpBFxD5ndbcjxX%2Fi26ORiVzij3lJLcoqXBFPzNEz5u5VJQbsYP7gs92wXtQ9aRW4cDx946MOC81skGOqUBeLj7n0tHJZFmn4rlFAjLlh%2F76QddqObtfdx%2BRzNRVLVGiMe6nwSphUxbD1Ym%2F%2FGl0zx6Eo1%2Bil0D7uoz79Ve%2F%2BLqFbXGe7EulA4GFccmY5ICjacShzwEZ7DSLZ%2FWd2hWAvjIR%2BhxvBEI%2BoYysek1By34UH09Ask7vjJjPH11RdzMfAt5L%2BtCbB5PxBv%2BSezGu2lMSGuH%2F8UaYoEtDJtTZNN2ZkOs&X-Amz-Signature=c79ba317b7f6bbb13f391ec6afa35d38737137d86d1730ee3afa5a16b49356b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
