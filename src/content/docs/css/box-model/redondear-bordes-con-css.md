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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IMCK2Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZn0L%2Fbnx1TcrJFnj0J1OkdjphaLFaMpzNyWYMB5%2FFSAiEAxIF2F7BHz3QLKKuKAe5NuZuXHjQHIpeuI26IRN7KPssqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOr6Z89MakixGjDg2CrcA%2Fe0ihTbR1zoyYZLlyMCOAjTXDk6USi9GgMScZ8boqvMdnPnrsWM1plrndDKAuH9ZsRy26CzYScc1eZya35AvB1mo7f98RQqkGhXJTXk0jp5T0NRz1OaNphB6412zyo2A23b30g6kS%2BfEWW5vGJMpQ2usy8AynoQnGPEG%2F1w3vP0YOYmBVSG%2BaV%2F1OtQTfmwza5wrcuXD3khH%2BmIDLW33MiN%2F15qRtmZZ7U0%2FDShFXlCkccD4p1OKAUexJP2D7p0xilC%2FE7c8jmQRjX3I54H%2FbnThh5TrigVhjgeUqaAdunwR%2BfxE1WKS0%2FZcnKkq80iQl65uiqstigYtMe90VKUKYp%2BWJAQP3iUYUvCGU7jDax29UW%2FW4o8GpGLEwgjgvO9xUIlQS28oJLoxhpFGDFgk%2FB3KcX%2BYIeWpAjMKJJKhAZeGn7JIEqjV%2B%2B%2BDNvohFiLXKhxrbJYi%2FwQymdwD%2BqWWCrv0Qw9GYh0ENYa86DwTCQyqtdkfPVzfeLCYUnrpS344%2ByHa9UQpsatxOq62LUKkbVkuKdevoU%2Bu4dYYNmA6h%2BVe6NXrF7GaEHhELEIQzjbEUx%2B1yXTHttmJlMzb7Z46a6uI%2B8%2BbQTMbMts0HWemeoo1ZCemcRGfzukJI90MKOgi8oGOqUBVD0dZCFxn7vccz7fLQiRNQ4TX9M9KgSDEePkoOQUImtVV99ply4GLu7dFlZ8xSTXmj2dKhjq0UY55ZgPhvULW0AZL%2FJhdVsYmmNcfen%2F7Nb8%2FVVKAuheXLuEqBfVHshTI%2Bir5Z%2BeE5iM2KrvZnp3ZH03n1eR2oz4QXy0x99vee9ePocJ4XPUIACAJQVqa7mlkz%2F4m7vRHWrEah7aSYhzbQXOPtXq&X-Amz-Signature=b528c8b0d1f8492adb2586524edbbe674df6402d4e8160c47d7eece93f0fea19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IMCK2Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZn0L%2Fbnx1TcrJFnj0J1OkdjphaLFaMpzNyWYMB5%2FFSAiEAxIF2F7BHz3QLKKuKAe5NuZuXHjQHIpeuI26IRN7KPssqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOr6Z89MakixGjDg2CrcA%2Fe0ihTbR1zoyYZLlyMCOAjTXDk6USi9GgMScZ8boqvMdnPnrsWM1plrndDKAuH9ZsRy26CzYScc1eZya35AvB1mo7f98RQqkGhXJTXk0jp5T0NRz1OaNphB6412zyo2A23b30g6kS%2BfEWW5vGJMpQ2usy8AynoQnGPEG%2F1w3vP0YOYmBVSG%2BaV%2F1OtQTfmwza5wrcuXD3khH%2BmIDLW33MiN%2F15qRtmZZ7U0%2FDShFXlCkccD4p1OKAUexJP2D7p0xilC%2FE7c8jmQRjX3I54H%2FbnThh5TrigVhjgeUqaAdunwR%2BfxE1WKS0%2FZcnKkq80iQl65uiqstigYtMe90VKUKYp%2BWJAQP3iUYUvCGU7jDax29UW%2FW4o8GpGLEwgjgvO9xUIlQS28oJLoxhpFGDFgk%2FB3KcX%2BYIeWpAjMKJJKhAZeGn7JIEqjV%2B%2B%2BDNvohFiLXKhxrbJYi%2FwQymdwD%2BqWWCrv0Qw9GYh0ENYa86DwTCQyqtdkfPVzfeLCYUnrpS344%2ByHa9UQpsatxOq62LUKkbVkuKdevoU%2Bu4dYYNmA6h%2BVe6NXrF7GaEHhELEIQzjbEUx%2B1yXTHttmJlMzb7Z46a6uI%2B8%2BbQTMbMts0HWemeoo1ZCemcRGfzukJI90MKOgi8oGOqUBVD0dZCFxn7vccz7fLQiRNQ4TX9M9KgSDEePkoOQUImtVV99ply4GLu7dFlZ8xSTXmj2dKhjq0UY55ZgPhvULW0AZL%2FJhdVsYmmNcfen%2F7Nb8%2FVVKAuheXLuEqBfVHshTI%2Bir5Z%2BeE5iM2KrvZnp3ZH03n1eR2oz4QXy0x99vee9ePocJ4XPUIACAJQVqa7mlkz%2F4m7vRHWrEah7aSYhzbQXOPtXq&X-Amz-Signature=dad837cd15a3047c809831db09dd9adbe4b03809b70b9fb197930101300e01fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
