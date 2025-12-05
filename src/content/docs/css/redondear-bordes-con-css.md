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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CHIMOC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjCTid3fUKTe52wVf8am%2Bi2DyIH71QvaM4O5lwcO3mqwIgXzfnOcL%2BIlF%2BGGCTpQsZnS%2BTuqmT%2BR54haZsJAYaP3Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGdAzpuFWWm08vaTuSrcA6bTA00S2bO90vYwGvGb9eBC%2Fiem%2F5yRDrcScHGg8dxwoWRcFF4Dgwim9SeoP380JRNyCy3XJCELf7Mpvoats9kyPVcNxv2haN1yBv40GvYtdaGWxDn4FlNZlLDKPixtFUprUmG5pW5ZXk1Z0w7l9Sm3m7w3l7xYWlf5amZmUhCCbCMVIO%2Bw1f8vY0OeMwCq%2FMSJlJal8XtNYe72JCJcDUEU71oluw9ykWVIuD%2F2%2Bjy0MCQ1Dl7ztsoY65daCDGdRrDTV2EtCkCSdUXR%2FcgDArF9UrbYBt%2FAhHaboHYdgByXlBAKX%2Fb8Cjjr1bohnuHKlU6cCdD8f2o0%2FCL2oFu%2F30c09IEvU1GeBUcV%2FXInJDFvdv%2FvgKCNet3y8Fj%2Ft%2FHmiAhxkyTtFmd7pr%2BwdNsPT3mtJXbah%2Fa2mzbM6tChK%2Bl3adWOWacRsIUizI3HD5FTkWeyvhljqCraSdLWP0BVlOUPwMWUajEhwFUAVb1LTYDTiqHoKdvix2MnQQ9KJUy0%2BJDeYc0dy6mC8C3B94JSt%2FCU482VlziR0bQRUYoBN3YwD12ciKNk0UZAdo%2BkJ1IK39kl5MSw3GLnrwVFVgJZ255p8uLgRECMn4%2B5GOVAnIGJ%2B3FWYOaRoCV1scd1MKSMzckGOqUBR7ooe95d2FXg89qFdBDVle84l1uS1Ty9rtUEsgXDdmAIlc3kKGYfqto%2BSLM6Ix%2FMJe%2BNBsZB94t2PjQXSGEgFsgfpzw49yc7gB%2BpHO2k8wgcV7AQKcFeIdqdK5IkmZcLljYVzeMBRViPpU7RJ2EIiqfFwouC8yGdzF2QkYq4Av3QSioDWP4oD73CGYRe1uCtO9ndOm4LI91THYY8qTnal7FNT0d5&X-Amz-Signature=e39c896068bb1de2a926cfcee859e6af99a1b65e92301165a2be034f15317f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CHIMOC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjCTid3fUKTe52wVf8am%2Bi2DyIH71QvaM4O5lwcO3mqwIgXzfnOcL%2BIlF%2BGGCTpQsZnS%2BTuqmT%2BR54haZsJAYaP3Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGdAzpuFWWm08vaTuSrcA6bTA00S2bO90vYwGvGb9eBC%2Fiem%2F5yRDrcScHGg8dxwoWRcFF4Dgwim9SeoP380JRNyCy3XJCELf7Mpvoats9kyPVcNxv2haN1yBv40GvYtdaGWxDn4FlNZlLDKPixtFUprUmG5pW5ZXk1Z0w7l9Sm3m7w3l7xYWlf5amZmUhCCbCMVIO%2Bw1f8vY0OeMwCq%2FMSJlJal8XtNYe72JCJcDUEU71oluw9ykWVIuD%2F2%2Bjy0MCQ1Dl7ztsoY65daCDGdRrDTV2EtCkCSdUXR%2FcgDArF9UrbYBt%2FAhHaboHYdgByXlBAKX%2Fb8Cjjr1bohnuHKlU6cCdD8f2o0%2FCL2oFu%2F30c09IEvU1GeBUcV%2FXInJDFvdv%2FvgKCNet3y8Fj%2Ft%2FHmiAhxkyTtFmd7pr%2BwdNsPT3mtJXbah%2Fa2mzbM6tChK%2Bl3adWOWacRsIUizI3HD5FTkWeyvhljqCraSdLWP0BVlOUPwMWUajEhwFUAVb1LTYDTiqHoKdvix2MnQQ9KJUy0%2BJDeYc0dy6mC8C3B94JSt%2FCU482VlziR0bQRUYoBN3YwD12ciKNk0UZAdo%2BkJ1IK39kl5MSw3GLnrwVFVgJZ255p8uLgRECMn4%2B5GOVAnIGJ%2B3FWYOaRoCV1scd1MKSMzckGOqUBR7ooe95d2FXg89qFdBDVle84l1uS1Ty9rtUEsgXDdmAIlc3kKGYfqto%2BSLM6Ix%2FMJe%2BNBsZB94t2PjQXSGEgFsgfpzw49yc7gB%2BpHO2k8wgcV7AQKcFeIdqdK5IkmZcLljYVzeMBRViPpU7RJ2EIiqfFwouC8yGdzF2QkYq4Av3QSioDWP4oD73CGYRe1uCtO9ndOm4LI91THYY8qTnal7FNT0d5&X-Amz-Signature=5dc6a8576d67774dea85a0cb16cd4574ef1cbeadc93288e2916dfaeb30b40c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
