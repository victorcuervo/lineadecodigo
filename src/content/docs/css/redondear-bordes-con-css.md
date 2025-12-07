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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K2SG2SS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsqN0O%2BMoqQ5mBlMMwH8%2FRaoCJBZ7tRCSk2dDEZ5GQKAIgftILveB0vGPWryCK5E4lnFtZqPrzKKK5w9a4JWgrKcEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXGycPk7KHHweIG%2BircAx2%2B%2B540feqD1jpIKgAh4r6tWB8mfRBu8i4%2F5vp52WMjYOA5K2l%2FcMTQDEHq9PIlpR0ZFNbJiXIe6aR9qjOS7TQV1lyTPdPRoqcw5ETaXGwXFYvNY5X%2BruEk2B0LIY0xSv%2FxZGU59VWdh8kRc6wJOpP5tNb9HRgb5cWz%2FXb83Rh%2BwjFuRFgDJpjU%2Bcm%2BSKUQAWDY33ee9nLSw%2BNrDqdd5MCO1pBwd5NpGGjri3Uou0452ovCLSVH0wvAY%2BcfVw9KbfvdMazfhmHnSvrjALksysTstkWutfX4YK1Et0g2fRniFRhmz2yIJdeQ5kmeP21ouQq4VCuOibuf4JeRupY6VSOH9huEwLWDXeS%2BBM8IptxuYkX353Wx11rq2FfKahbeb2fLfD%2Bie31%2BedIDfGRdNCHvQWhjFavPwnsJIpnRttTXo%2FeTyomUK1bPw0XUNgydptouXHbNXrepjGLOuV%2BK6XgYaQaIQiRhRLqgjxT1P%2BOeMpfPAxMP1xbqI17tcC78psEXn8BBhDGLzkIrH5H5xiODD9OCCrCeQVWzKlVJZ9ui0ZxgwNkB47T1MqmuxDPjO6wZNuCB2Nih%2BbuhGrM8guw9WQ4y8yHHoi4oOuVCp3IFBxyIZjMZmoLA0X7yMK2a1ckGOqUBxfvao7dB0ojILu%2B9dLj8Go%2FNaarW8Pm7HFRQP4LqAj24j9DYtQtaapNSRCItwHGmjx8ei3QkPm28HjMxxYm%2B43GZSDkCmuCx9F%2Ba470KcEaOnAgcBSZhlo%2FAPOCDmHsF2uD5CT%2FZ2Ofivu5Tnsg2KJfoBf6tWFJf2ROd5g%2B5ZemVW96RZCSaPGJRuSNfLh5Qa6L8RRMjOJeYUq0hVMh6BmoUld1H&X-Amz-Signature=51f9f2b006b78550265d8da8c3d9af338a0e41daf15c36b6e65f22f7c1ce2950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K2SG2SS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsqN0O%2BMoqQ5mBlMMwH8%2FRaoCJBZ7tRCSk2dDEZ5GQKAIgftILveB0vGPWryCK5E4lnFtZqPrzKKK5w9a4JWgrKcEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXGycPk7KHHweIG%2BircAx2%2B%2B540feqD1jpIKgAh4r6tWB8mfRBu8i4%2F5vp52WMjYOA5K2l%2FcMTQDEHq9PIlpR0ZFNbJiXIe6aR9qjOS7TQV1lyTPdPRoqcw5ETaXGwXFYvNY5X%2BruEk2B0LIY0xSv%2FxZGU59VWdh8kRc6wJOpP5tNb9HRgb5cWz%2FXb83Rh%2BwjFuRFgDJpjU%2Bcm%2BSKUQAWDY33ee9nLSw%2BNrDqdd5MCO1pBwd5NpGGjri3Uou0452ovCLSVH0wvAY%2BcfVw9KbfvdMazfhmHnSvrjALksysTstkWutfX4YK1Et0g2fRniFRhmz2yIJdeQ5kmeP21ouQq4VCuOibuf4JeRupY6VSOH9huEwLWDXeS%2BBM8IptxuYkX353Wx11rq2FfKahbeb2fLfD%2Bie31%2BedIDfGRdNCHvQWhjFavPwnsJIpnRttTXo%2FeTyomUK1bPw0XUNgydptouXHbNXrepjGLOuV%2BK6XgYaQaIQiRhRLqgjxT1P%2BOeMpfPAxMP1xbqI17tcC78psEXn8BBhDGLzkIrH5H5xiODD9OCCrCeQVWzKlVJZ9ui0ZxgwNkB47T1MqmuxDPjO6wZNuCB2Nih%2BbuhGrM8guw9WQ4y8yHHoi4oOuVCp3IFBxyIZjMZmoLA0X7yMK2a1ckGOqUBxfvao7dB0ojILu%2B9dLj8Go%2FNaarW8Pm7HFRQP4LqAj24j9DYtQtaapNSRCItwHGmjx8ei3QkPm28HjMxxYm%2B43GZSDkCmuCx9F%2Ba470KcEaOnAgcBSZhlo%2FAPOCDmHsF2uD5CT%2FZ2Ofivu5Tnsg2KJfoBf6tWFJf2ROd5g%2B5ZemVW96RZCSaPGJRuSNfLh5Qa6L8RRMjOJeYUq0hVMh6BmoUld1H&X-Amz-Signature=81c10d26c10bae12189544c6a40e7a5501506d71d5c55609d6dfb4e5e70b1e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
