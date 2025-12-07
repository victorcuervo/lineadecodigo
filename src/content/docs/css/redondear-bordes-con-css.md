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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NJRWDQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCObsr6qDrsEr4bGxNhX%2BKzV573i%2BTm6gWqGYqNVyDAIhAJSwTJLNhcgyisnMjFHITydHAK4ao9PvrKbYAwA3ZmBLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy5VVNKhz%2Fe%2FT8wAQq3AOppxuVfgiPGl48vFz6jn8OHKO%2FDYSinJFtY2bo1HRm3yjHtowB%2Fjma8I%2BdPOonkB2thucB3BKZ7NSko9clGAjgJeMHHPi5Jd1DrMfwfd6i%2FMT5%2B6dRGjaFoF9ckJ7wGkCDmybYbKHYmYdMCWlFJRp%2BiJbLVZJdY7aCVhmobKu48qp3JvwYBx7ZH2wmVPNxnInq89dbvlQbfjsJMVOCqyTs%2FdS0RLqNLqeWevIcNmLxY3YAlePUhSNuFQ9uBw%2B1yxCXc%2BQ%2FuT6JQ7BAIA%2Bc41fJbc65I8FFmeu0P2g6ymxghXkc6zp1g0KK103yKnCvfVHppLKY4wz4yrMYFt0a%2BFNzCDgUmGXwd3AdVZkd2OpSSF8szhPCk8Px9oE6KXM83lKa9%2BscaWlJIoT7FwOad7C3YJq8UgGSdTlmBbsKNCrutFVreKMU%2BiGDp%2BT9BkBZ92fVYvMQf3M%2BOKb%2BNA065BtSRBnA1xLcixUE%2F4pqVmrmAOBxquVF3MNRv7eCldTuOpaDzNuBJNck3kBYachRQEDZMe0qpT4PbYw%2FOwP082eEdHa5FNSBA1cIehc5hSQ%2BWAACoerXmi3yV3R7yX3kesk9CNu19aCUHbkK%2BrhVRTQ2CDDWigxC0PKUpjyggjCa%2FdLJBjqkARv5LE12dVPdk3oywEy1FEYUHloJFrvkjIKgxrF7jDRTASiaoemtVzr1jcb9Kop1lrmCrfg1A%2F5uuZHvgqhijkj0vKk0vdRUKa4TJ1MkBHnLjjfCXt9z4BRjLTn2mNVPVukBxM6AJ4cYJG183Fp4FuaBvq4PWepZTKC5nH%2BAwJmj8X2%2FneoZ1uuRlyJ4wvCt%2BocQ6hQlRocQ9%2BnkwLrEPXRBmfZa&X-Amz-Signature=ee25a07700b23f2db3e9a14e4ec02344cee499d89fe46c5fb2ea278b5594c15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NJRWDQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCObsr6qDrsEr4bGxNhX%2BKzV573i%2BTm6gWqGYqNVyDAIhAJSwTJLNhcgyisnMjFHITydHAK4ao9PvrKbYAwA3ZmBLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy5VVNKhz%2Fe%2FT8wAQq3AOppxuVfgiPGl48vFz6jn8OHKO%2FDYSinJFtY2bo1HRm3yjHtowB%2Fjma8I%2BdPOonkB2thucB3BKZ7NSko9clGAjgJeMHHPi5Jd1DrMfwfd6i%2FMT5%2B6dRGjaFoF9ckJ7wGkCDmybYbKHYmYdMCWlFJRp%2BiJbLVZJdY7aCVhmobKu48qp3JvwYBx7ZH2wmVPNxnInq89dbvlQbfjsJMVOCqyTs%2FdS0RLqNLqeWevIcNmLxY3YAlePUhSNuFQ9uBw%2B1yxCXc%2BQ%2FuT6JQ7BAIA%2Bc41fJbc65I8FFmeu0P2g6ymxghXkc6zp1g0KK103yKnCvfVHppLKY4wz4yrMYFt0a%2BFNzCDgUmGXwd3AdVZkd2OpSSF8szhPCk8Px9oE6KXM83lKa9%2BscaWlJIoT7FwOad7C3YJq8UgGSdTlmBbsKNCrutFVreKMU%2BiGDp%2BT9BkBZ92fVYvMQf3M%2BOKb%2BNA065BtSRBnA1xLcixUE%2F4pqVmrmAOBxquVF3MNRv7eCldTuOpaDzNuBJNck3kBYachRQEDZMe0qpT4PbYw%2FOwP082eEdHa5FNSBA1cIehc5hSQ%2BWAACoerXmi3yV3R7yX3kesk9CNu19aCUHbkK%2BrhVRTQ2CDDWigxC0PKUpjyggjCa%2FdLJBjqkARv5LE12dVPdk3oywEy1FEYUHloJFrvkjIKgxrF7jDRTASiaoemtVzr1jcb9Kop1lrmCrfg1A%2F5uuZHvgqhijkj0vKk0vdRUKa4TJ1MkBHnLjjfCXt9z4BRjLTn2mNVPVukBxM6AJ4cYJG183Fp4FuaBvq4PWepZTKC5nH%2BAwJmj8X2%2FneoZ1uuRlyJ4wvCt%2BocQ6hQlRocQ9%2BnkwLrEPXRBmfZa&X-Amz-Signature=ad6727eb54467aac600e3545be2b9a75777bcfedf67af4b9272a3cdbe94158ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
