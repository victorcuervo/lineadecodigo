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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYUSCT7Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwU5K%2FV3ttzbwz2B1wVvL%2FW%2FuXZDwWSKHsJFRU6Zw3dAiEAtLCceN2vFNdEAPrTVS3MrD5i2r%2F1%2FU9PSooTxDQnf%2Bgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGpQsU9y2b7P%2B5%2FoUSrcAyOnr9WOYcAA%2B9Q4pJXsOpNOIW47%2F1tlMxHDInxCAEVG2UyBrYcKNlrQmHnZZUGUGRa59vFMrQovTjhEK%2F5%2Fp6%2FS4Tm9afCDfot%2FRL7Oapn%2Fs9OND%2BHKVpIKxxM%2BD88S027RFvpySnAIgijiyb4qSUT2lqp%2BPqxOfFBfbgcCqkXCA5SmAT6W1WgPw4Af77N28WqOtrxETiGihVOsRvkfhM10y1iESzNciRSvsmF2nUTSiNxgPtRwRCHzwJv0iRN2HbEgdulTwb5jyml1nkH6J%2B8U8C15QkBfCG5lnbzd1eklyG3QxTJnGFtwQ5Dsk6SWuhi7m81zbZZuf18XA3D2qq7bBX5dTr9rYPG%2BkayR7sxZPDqcYrGgbIMMS6DBRvBZJ9btRRDDr%2F9mJiNNaQkAhauWcsWV%2FPvCp3JzLjtwNO1W8VadwyJbvUMkdHrqQMNyaBTn4Bsae3Q6GFK%2Faqpp%2BovQUiagmxyE1NlaFN5NDoyLjhBTsQRu0PTmG4YxSU4GUUA%2FimJ6BksynFohtdkuUm2815GbPrqvKaZDS6pO9CAxjGL8cIvUyryFLJvzE7FsTX%2BCERZ6xyPAdIR12mqvODRFoz1ZmlOoL%2FJb3t9QH1FWyJNY0djiAMKJAc9JMMrky8kGOqUB7djdvJMtmhF9AUAd%2B4wRSN%2FB8pLl5FZip1jTCtURf1Pdz36yM9dQjkqF53FPGLmny%2FxNlQ1niPych1ebo%2B1yz8cP1w4FiZSPzff9%2F9XDz3Tl%2BG54oI18sS4WCx2HNpdLFK1IyYvfy2Z3KXjDmQxn423NkyJzBLvsPAMIacnyabt01yCheruDnVW1aZzj%2FO7Mdb%2BNYOd9tDsyt%2FgfgEnAQKo4pAeU&X-Amz-Signature=960fc6eb67007123771bdbe2904a3e1e088806ac4261baf59aaa38d29d602992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYUSCT7Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwU5K%2FV3ttzbwz2B1wVvL%2FW%2FuXZDwWSKHsJFRU6Zw3dAiEAtLCceN2vFNdEAPrTVS3MrD5i2r%2F1%2FU9PSooTxDQnf%2Bgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGpQsU9y2b7P%2B5%2FoUSrcAyOnr9WOYcAA%2B9Q4pJXsOpNOIW47%2F1tlMxHDInxCAEVG2UyBrYcKNlrQmHnZZUGUGRa59vFMrQovTjhEK%2F5%2Fp6%2FS4Tm9afCDfot%2FRL7Oapn%2Fs9OND%2BHKVpIKxxM%2BD88S027RFvpySnAIgijiyb4qSUT2lqp%2BPqxOfFBfbgcCqkXCA5SmAT6W1WgPw4Af77N28WqOtrxETiGihVOsRvkfhM10y1iESzNciRSvsmF2nUTSiNxgPtRwRCHzwJv0iRN2HbEgdulTwb5jyml1nkH6J%2B8U8C15QkBfCG5lnbzd1eklyG3QxTJnGFtwQ5Dsk6SWuhi7m81zbZZuf18XA3D2qq7bBX5dTr9rYPG%2BkayR7sxZPDqcYrGgbIMMS6DBRvBZJ9btRRDDr%2F9mJiNNaQkAhauWcsWV%2FPvCp3JzLjtwNO1W8VadwyJbvUMkdHrqQMNyaBTn4Bsae3Q6GFK%2Faqpp%2BovQUiagmxyE1NlaFN5NDoyLjhBTsQRu0PTmG4YxSU4GUUA%2FimJ6BksynFohtdkuUm2815GbPrqvKaZDS6pO9CAxjGL8cIvUyryFLJvzE7FsTX%2BCERZ6xyPAdIR12mqvODRFoz1ZmlOoL%2FJb3t9QH1FWyJNY0djiAMKJAc9JMMrky8kGOqUB7djdvJMtmhF9AUAd%2B4wRSN%2FB8pLl5FZip1jTCtURf1Pdz36yM9dQjkqF53FPGLmny%2FxNlQ1niPych1ebo%2B1yz8cP1w4FiZSPzff9%2F9XDz3Tl%2BG54oI18sS4WCx2HNpdLFK1IyYvfy2Z3KXjDmQxn423NkyJzBLvsPAMIacnyabt01yCheruDnVW1aZzj%2FO7Mdb%2BNYOd9tDsyt%2FgfgEnAQKo4pAeU&X-Amz-Signature=75bfda10124f9510ba2f0906e9c8196de36489fd8523a977be545df14692e5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
