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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDEWORC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgBvAnkXx2tdQwuvsYfSkHxeaP5ZJWC4yFllWJu7pK6AiAKJbocEyrXRaH9xZAWa%2B%2FQcClyNotqbuADqA%2BAc77VLSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMgOdxFLwIIcEM5JY0KtwD%2FKHoL6UnTKSB2Zu5Y7Fxac8Jt8ZsaEN68%2F2E8e6WOx2N2NbWwveOroeEVmKu%2F4ThalhXIH1J22wu%2FJzga6ESLFVp0WGXS2rURIK1UuG6yrophPX5udOou1C52IzVFbVHz4JFrNdXfsJceABy9fIqZKDMrYo2VvqyXxUtkrll1SA4o4uybaCGntt8Sx%2BVigOM8px61%2B5uBa4RH6UUjSr4KYOosCdxiGT9LGKrsvPjdzzTX3LsKZlIEUoUEfHrsze4DV9nBM3Pa%2BSArn0TIwcKG5SPL3ZDL52z8NuGh5nauB5izkHIlxJZ6i3pQCdCvn%2FkVP51KwQhCT1LQ7tzuJZ5fzb%2FxHnkZ9F2Q7%2FodNL7PlgfaF7kqjxeUqHH9i8SopkWqpNUSr4lsZrGn7iTszPdAxHfDX1o56PCTlrLu9c%2BbFrp7HwApTpbnlOVCQDa7IIHmafEIUEG4XSYBwOJO%2BYa%2Fwacrgyvxso1aySl0vdEA8isFYi%2FKUIGN7NSghcCCRPsGjzm0cpuIIQLzu2GPeY4uDQtDchnkyEcfuntlZuShf7NvcCHbnPF4xKgrvAWXaDNO%2B%2BhMAVpWno8VYdjfvoKg2FU%2FF%2BdQWR2r%2BLRrUrUiFhBtPH6qp6O5SwXCfowx4zIyQY6pgECSRnuOD1jOnH%2Bwx0sw94mvAnOevx6ecAigtxADOpv9hL61tcz%2Bt8dnMlesSqEGGNanxHnZF0sAi0nGoBHFNw%2B8KewSlql%2Bu%2BtnmcslH93p7cfV%2Bg%2FtvqICvWNjUk3eawmdrE%2FGxDdoFlSxlAgJphv3Y8C1eUxgYb6%2FwkGjWeZb6giR3JigZa%2FP7n8z3JAUjhqdeCdmjfCgN6TV9LRQByImZXxX8mB&X-Amz-Signature=d1fa48dd6f8496948083b91db51802c2f3f2a25e8dd7ba64cb2e2367fd2db39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDEWORC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgBvAnkXx2tdQwuvsYfSkHxeaP5ZJWC4yFllWJu7pK6AiAKJbocEyrXRaH9xZAWa%2B%2FQcClyNotqbuADqA%2BAc77VLSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMgOdxFLwIIcEM5JY0KtwD%2FKHoL6UnTKSB2Zu5Y7Fxac8Jt8ZsaEN68%2F2E8e6WOx2N2NbWwveOroeEVmKu%2F4ThalhXIH1J22wu%2FJzga6ESLFVp0WGXS2rURIK1UuG6yrophPX5udOou1C52IzVFbVHz4JFrNdXfsJceABy9fIqZKDMrYo2VvqyXxUtkrll1SA4o4uybaCGntt8Sx%2BVigOM8px61%2B5uBa4RH6UUjSr4KYOosCdxiGT9LGKrsvPjdzzTX3LsKZlIEUoUEfHrsze4DV9nBM3Pa%2BSArn0TIwcKG5SPL3ZDL52z8NuGh5nauB5izkHIlxJZ6i3pQCdCvn%2FkVP51KwQhCT1LQ7tzuJZ5fzb%2FxHnkZ9F2Q7%2FodNL7PlgfaF7kqjxeUqHH9i8SopkWqpNUSr4lsZrGn7iTszPdAxHfDX1o56PCTlrLu9c%2BbFrp7HwApTpbnlOVCQDa7IIHmafEIUEG4XSYBwOJO%2BYa%2Fwacrgyvxso1aySl0vdEA8isFYi%2FKUIGN7NSghcCCRPsGjzm0cpuIIQLzu2GPeY4uDQtDchnkyEcfuntlZuShf7NvcCHbnPF4xKgrvAWXaDNO%2B%2BhMAVpWno8VYdjfvoKg2FU%2FF%2BdQWR2r%2BLRrUrUiFhBtPH6qp6O5SwXCfowx4zIyQY6pgECSRnuOD1jOnH%2Bwx0sw94mvAnOevx6ecAigtxADOpv9hL61tcz%2Bt8dnMlesSqEGGNanxHnZF0sAi0nGoBHFNw%2B8KewSlql%2Bu%2BtnmcslH93p7cfV%2Bg%2FtvqICvWNjUk3eawmdrE%2FGxDdoFlSxlAgJphv3Y8C1eUxgYb6%2FwkGjWeZb6giR3JigZa%2FP7n8z3JAUjhqdeCdmjfCgN6TV9LRQByImZXxX8mB&X-Amz-Signature=b8779aadedff3a5b980a3766fc4d96dcb4fe60b704ffa7655ada8625fd76f371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
