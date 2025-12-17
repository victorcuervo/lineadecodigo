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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637B6S5VY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLmTS%2BDfdZF%2Bfnuo0AotOS6NpojRGrxVE%2BxA2y9g3jxAiAsneifWOlVfgFsWO66lAai2039wKsEYaOtjVZtiEiUlyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMNGO%2BEakwz5g9U7r1KtwDcVHBPzT6F8aeGVy0R769MDoSPXr%2B5CfYaEmuQBUfJMnqImHiFF0Tyl2cG2iXRr6uWhVsEB%2FOGOV5C6YThRxaPx48BRsgpWTgmExDc5LfIlL6sJIgEiPWUXsY1JkDItSTHPsGoZFFURciJuGD3raXtE70LLMSpuCjMWY41OqyyPOxca3q2XptMvVagiu3p3qX%2BtVoSywd1bH74Ay6rmQ5T90qt272FzGtbnAWQTbtqAWmFpBTKDYGRV9ix1Nv%2BMH54teOMJMoNAg9aTTzXXc3nf2FlLAtxKARJBRx%2F7wb36WD9LLX2RtssYaBAgkO2Q8bxpPUaAL4YsVCHpI9415WIVIoiO0FhHdZbdJmIylEuVBWJelot%2F2YSZtINIaKt6WOYzCR%2BmzXfmFjKvNGipr01eATOEyGhSLlj0ouZPQNCwrkCbeBz36XirieQ7f2Rk4Bc8Sz8tSePtBn8%2F4qu3MM88aWMrgsZ%2FMXcQj6%2FVgzQ7nB57FxybEbeNwILHsGpXqMbxSGJe7o2DBvKWj5d1iOK%2BEf63qcK1QnCBrADM94fxE76AG4iJv2eH1rjVA9gIaeACXYhG9%2Bt8Vk6i8wnXkH9LB6QU%2BsElnSc9p1zimC9RpGRr%2FPC5vnIS%2BPu2kwjo%2BKygY6pgE9o5Xt%2BJsVsxFztmlBhR9VbhCBckwjEhbRRtsFbBz67UOWZKFNSm6NnYiEO4A75IXIKxDGrcVM1RJpMAhg%2FuuEtYBOPURlrBq7n4%2F980hXUgJE4CH1lonrlJafpnKclDCcRyZ1KgEjdZlVhAk7SK0YbOrc%2BFnbZbpzLYlx4RsQyI6qGgQpeK6arXMLf8gCI%2Fho1byWiHJ7z7%2BbJyn00T6k8OCZ14ex&X-Amz-Signature=193e014ca9f273d5a794d4d7df6116ce611c60266205f094a726ff4a5cb6498f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637B6S5VY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLmTS%2BDfdZF%2Bfnuo0AotOS6NpojRGrxVE%2BxA2y9g3jxAiAsneifWOlVfgFsWO66lAai2039wKsEYaOtjVZtiEiUlyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMNGO%2BEakwz5g9U7r1KtwDcVHBPzT6F8aeGVy0R769MDoSPXr%2B5CfYaEmuQBUfJMnqImHiFF0Tyl2cG2iXRr6uWhVsEB%2FOGOV5C6YThRxaPx48BRsgpWTgmExDc5LfIlL6sJIgEiPWUXsY1JkDItSTHPsGoZFFURciJuGD3raXtE70LLMSpuCjMWY41OqyyPOxca3q2XptMvVagiu3p3qX%2BtVoSywd1bH74Ay6rmQ5T90qt272FzGtbnAWQTbtqAWmFpBTKDYGRV9ix1Nv%2BMH54teOMJMoNAg9aTTzXXc3nf2FlLAtxKARJBRx%2F7wb36WD9LLX2RtssYaBAgkO2Q8bxpPUaAL4YsVCHpI9415WIVIoiO0FhHdZbdJmIylEuVBWJelot%2F2YSZtINIaKt6WOYzCR%2BmzXfmFjKvNGipr01eATOEyGhSLlj0ouZPQNCwrkCbeBz36XirieQ7f2Rk4Bc8Sz8tSePtBn8%2F4qu3MM88aWMrgsZ%2FMXcQj6%2FVgzQ7nB57FxybEbeNwILHsGpXqMbxSGJe7o2DBvKWj5d1iOK%2BEf63qcK1QnCBrADM94fxE76AG4iJv2eH1rjVA9gIaeACXYhG9%2Bt8Vk6i8wnXkH9LB6QU%2BsElnSc9p1zimC9RpGRr%2FPC5vnIS%2BPu2kwjo%2BKygY6pgE9o5Xt%2BJsVsxFztmlBhR9VbhCBckwjEhbRRtsFbBz67UOWZKFNSm6NnYiEO4A75IXIKxDGrcVM1RJpMAhg%2FuuEtYBOPURlrBq7n4%2F980hXUgJE4CH1lonrlJafpnKclDCcRyZ1KgEjdZlVhAk7SK0YbOrc%2BFnbZbpzLYlx4RsQyI6qGgQpeK6arXMLf8gCI%2Fho1byWiHJ7z7%2BbJyn00T6k8OCZ14ex&X-Amz-Signature=41001a6c315605b46dfd3642d4d3a7a849fd90e4e17a9cec6fb0295aec775545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
