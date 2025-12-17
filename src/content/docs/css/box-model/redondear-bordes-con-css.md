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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AP4MK4W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXrkVFCh%2BnZyaAcje9%2Bxq00JLMJlMqt2ZGI%2BUIYtLeggIhAIrHScaVRs00OrOgwawIclpbjcosU7nJrF%2B4%2FAHF1IfSKv8DCH0QABoMNjM3NDIzMTgzODA1IgxH7TDTgHjPQ03zrssq3APFcCS3ryFm1GT71ywfnt7dvWLqjvJIbQYXCDXfCKkD3PyB6183HshytbsK4oL4TD6ll5jx%2BT3enHsndJJciNwsy1Nwe3F%2BfFMOjshJc1GJCdbvSXPucN6k7fa4ZFek4CVbcqbgzkkT%2FLmudBEHkt%2BTJDk8k%2FwaE7j6iSUlHm%2BGrj4Zsv9p4OXl%2Bp%2FF%2BXkZHl8YbwmO%2FWWE9z0G8g6mAMmYcX7neBLvkht0G4LXrSScyTtzev86w3YGUom5TbmJr8nUwHoPsnhn8mAcQoj8kMFcDlO7rmgJAT6fn0Q3zT%2FAzY8e9Ftp2kTCnJ2alqxHBm0V8LwthcXgpG6CcdARa2O9COeOCJzky6AaXIBkJsAhHO6wKmrLrAktg5nAU2ya1lrJPPd1PhKj5zolnT8U9nKnRDUlWqmB6SvVv40WKXpQA9OWsmJvAy57PXErY8fQ8FkqJ4X6ha%2BPWXvg7%2FP29sbE3rxzFeSFBV6ZXpePXAyy9Z7kAL1oGVTc%2FiguA1I9k3Xq5otvmv95Q93zQ0SW%2FbyYFWS6%2F3sHo3EvNwy8O%2FDs9Foqw%2FBKTRr6zt3UOhtQlVpP4WhBkjrkQtivq4lSVQ6vsYjE7wPmqCL3YzKMaP57eAU28DGGD1RmT1HDnzDJqorKBjqkAdEOS8XpPTSkZT8tKx6ehV3bHNyCb%2FHqlJaT%2F2kYtGD3B6nzq%2FF%2FXowTzb1qpWDVhpeZPd563JgPktK%2F7aDaIg8mzSk8qY%2FD5qDJaqof1OPcKuNbHs97%2BtQv8hGndSWUjTMkpdr5nwQ%2BkccaLSBtAl%2BLxZHxLz2p68%2Bm91jDMERKfbicobQ%2B69FqmspvpUwZnKjMBl0ePHmjr9InaDJyjGgfcw23&X-Amz-Signature=30ffc221feb147828295ec1090ef1cb4df4fe873ddfb01f2de9b2501c6562e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AP4MK4W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXrkVFCh%2BnZyaAcje9%2Bxq00JLMJlMqt2ZGI%2BUIYtLeggIhAIrHScaVRs00OrOgwawIclpbjcosU7nJrF%2B4%2FAHF1IfSKv8DCH0QABoMNjM3NDIzMTgzODA1IgxH7TDTgHjPQ03zrssq3APFcCS3ryFm1GT71ywfnt7dvWLqjvJIbQYXCDXfCKkD3PyB6183HshytbsK4oL4TD6ll5jx%2BT3enHsndJJciNwsy1Nwe3F%2BfFMOjshJc1GJCdbvSXPucN6k7fa4ZFek4CVbcqbgzkkT%2FLmudBEHkt%2BTJDk8k%2FwaE7j6iSUlHm%2BGrj4Zsv9p4OXl%2Bp%2FF%2BXkZHl8YbwmO%2FWWE9z0G8g6mAMmYcX7neBLvkht0G4LXrSScyTtzev86w3YGUom5TbmJr8nUwHoPsnhn8mAcQoj8kMFcDlO7rmgJAT6fn0Q3zT%2FAzY8e9Ftp2kTCnJ2alqxHBm0V8LwthcXgpG6CcdARa2O9COeOCJzky6AaXIBkJsAhHO6wKmrLrAktg5nAU2ya1lrJPPd1PhKj5zolnT8U9nKnRDUlWqmB6SvVv40WKXpQA9OWsmJvAy57PXErY8fQ8FkqJ4X6ha%2BPWXvg7%2FP29sbE3rxzFeSFBV6ZXpePXAyy9Z7kAL1oGVTc%2FiguA1I9k3Xq5otvmv95Q93zQ0SW%2FbyYFWS6%2F3sHo3EvNwy8O%2FDs9Foqw%2FBKTRr6zt3UOhtQlVpP4WhBkjrkQtivq4lSVQ6vsYjE7wPmqCL3YzKMaP57eAU28DGGD1RmT1HDnzDJqorKBjqkAdEOS8XpPTSkZT8tKx6ehV3bHNyCb%2FHqlJaT%2F2kYtGD3B6nzq%2FF%2FXowTzb1qpWDVhpeZPd563JgPktK%2F7aDaIg8mzSk8qY%2FD5qDJaqof1OPcKuNbHs97%2BtQv8hGndSWUjTMkpdr5nwQ%2BkccaLSBtAl%2BLxZHxLz2p68%2Bm91jDMERKfbicobQ%2B69FqmspvpUwZnKjMBl0ePHmjr9InaDJyjGgfcw23&X-Amz-Signature=eece51042bdbcafc0ce3c73adfd5e2499cfe179ba8796a8437d53cb888e0b1f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
