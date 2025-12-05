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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ6PA4W5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdumiJmtAX0rTCb6Sd2f%2Fki6M5OVey792AAyWQbk5C0QIhAPwHNXGUyyJV0EYfwxVSq4xS4%2BElCedhkbdGDENMeph7Kv8DCGEQABoMNjM3NDIzMTgzODA1IgwEiHFnd%2BWeIz%2FryScq3ANuam2mJDJ8bP90b26KEylBIO%2FAgmpmRYcFgbY9vE%2BD6mMDMk9uRGCMJaHmpi%2B5LGd6lzqzp648nk5KUk4mXNib3iZsARiS1Mc3J%2BZKXq2W2Tj76y3R82Q0WiXSJyzUmk11FAqxgF%2FUfS7BqX7NFDRH3UTRMcrcoZlo%2Bqe5wlY39mQ%2BMQf%2FPdkrKtM%2BFxGTxhkaHBSl3pLepi2A71fgsTGAEU%2FzOIvPUDeRkI0sRfF16V3l07SY%2FSW5%2FjPiaEIFclMt%2BPMGlTreeBieYG52VJ2NgnYYRJ8%2FxDCe5HymMm2742Okhjf9Deyc4vDE%2BfSWF31e3%2BM9OVhqibhhi%2BCl6Ug368buPGTKfZr1nOuTxVp2QcZHIFLlwcSTBUpGwMMi1MNDNGYf1G5g4Jz%2B8rZyn1AMQJHK5zfb5k6OpwsZY3EaoGoxCbrmFtPiyPAAktVTPvCIPwCSVMfJgFdC%2BjPIqpIz5hGqowr9V5or1zl6rrVCj7kxIFu24E%2FHG3T5FsQ5PSiHWxxZXvMkastF5IyFP1wPMWbrz3TJWRErAWyhtfJeekBjqch6l8gpkXVRUJpdFstn1neuVpZC0zJIKxoBjhtTQuO8MfHJvVu5x4D9ll0hVgqh%2Fse%2FC1Lx6PfSEDCA%2BcvJBjqkARJxLVf3E2G%2B5E6K9B4Veh2TeGGmg8MznTDvB1ZYx%2F93NdKCDYkzezjKYQtiZHE8KpPER5cE1e2RKfzC8m3ZhDorizZOR29tpIqZcfha98P1JbUPIKs855M1g3p8iwkB9sVVzcZTPwE%2FSHv4tgKrZb7kAIv7A9nF9eWxL1s9EbuUOxg3e%2Be4TA5HLTs%2B12ndcnz6n0x1y7QrunwSewZGX7ciOtqh&X-Amz-Signature=348faad1786f5268f2ddcd6f818700b07f3e02b42a406c637e8d21a6b1117048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ6PA4W5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdumiJmtAX0rTCb6Sd2f%2Fki6M5OVey792AAyWQbk5C0QIhAPwHNXGUyyJV0EYfwxVSq4xS4%2BElCedhkbdGDENMeph7Kv8DCGEQABoMNjM3NDIzMTgzODA1IgwEiHFnd%2BWeIz%2FryScq3ANuam2mJDJ8bP90b26KEylBIO%2FAgmpmRYcFgbY9vE%2BD6mMDMk9uRGCMJaHmpi%2B5LGd6lzqzp648nk5KUk4mXNib3iZsARiS1Mc3J%2BZKXq2W2Tj76y3R82Q0WiXSJyzUmk11FAqxgF%2FUfS7BqX7NFDRH3UTRMcrcoZlo%2Bqe5wlY39mQ%2BMQf%2FPdkrKtM%2BFxGTxhkaHBSl3pLepi2A71fgsTGAEU%2FzOIvPUDeRkI0sRfF16V3l07SY%2FSW5%2FjPiaEIFclMt%2BPMGlTreeBieYG52VJ2NgnYYRJ8%2FxDCe5HymMm2742Okhjf9Deyc4vDE%2BfSWF31e3%2BM9OVhqibhhi%2BCl6Ug368buPGTKfZr1nOuTxVp2QcZHIFLlwcSTBUpGwMMi1MNDNGYf1G5g4Jz%2B8rZyn1AMQJHK5zfb5k6OpwsZY3EaoGoxCbrmFtPiyPAAktVTPvCIPwCSVMfJgFdC%2BjPIqpIz5hGqowr9V5or1zl6rrVCj7kxIFu24E%2FHG3T5FsQ5PSiHWxxZXvMkastF5IyFP1wPMWbrz3TJWRErAWyhtfJeekBjqch6l8gpkXVRUJpdFstn1neuVpZC0zJIKxoBjhtTQuO8MfHJvVu5x4D9ll0hVgqh%2Fse%2FC1Lx6PfSEDCA%2BcvJBjqkARJxLVf3E2G%2B5E6K9B4Veh2TeGGmg8MznTDvB1ZYx%2F93NdKCDYkzezjKYQtiZHE8KpPER5cE1e2RKfzC8m3ZhDorizZOR29tpIqZcfha98P1JbUPIKs855M1g3p8iwkB9sVVzcZTPwE%2FSHv4tgKrZb7kAIv7A9nF9eWxL1s9EbuUOxg3e%2Be4TA5HLTs%2B12ndcnz6n0x1y7QrunwSewZGX7ciOtqh&X-Amz-Signature=a98a8f16273be39b3957b74606d87fc6c0b21bc24ef8de1c923f72b27350d2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
