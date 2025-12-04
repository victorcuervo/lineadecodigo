---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JK5HDXG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIB9%2BUpJ2G73%2BoiQMIOAD7c7MgSM0bnAGrsJ4UmEejenLAiEA%2BTnZ3wtHxLBXvV73Exv7h8ncdpLjmyZXgODNytCxR%2FYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDORu5UA5l%2FQRjUAGxSrcAy1MXFdjz4Ta9DWb5W1805hsmtj2%2F5Pq0AGg86%2B00fjjfroZi5eL%2BG0N%2BfbQHxmusLtXttc4i%2BbzPNOs%2BjuAnCifd%2FvLYKNlGTRTUSJhyE4MYUG3tpX0462buV0uqnvYHov2WrfkCM6XIvz1NzFXtiA6%2FAlsWNagaY5ZZQVncKMRXa6AvxZ%2BIJVYyvWTT9IVe2N%2F307I5bqwF8iWKpfh%2F4cKgkoRsI7WDmISYKrhIGI9zusOQ5oi2t8GiZXUJmb1Yk526zKHWY96BjrYMvzL%2BAVQRka0KXmbRDau8%2BwklZ29GsZ81J11%2FwCDYvrolZn91lWtPXVf4By93OIVlHwpWlNyg%2BgeBABG8faJ84WLmMzB45lgLG9N%2BYXUZZpvJwKEQSO3SJICisYz2qnGTrNj8RWcvH13MbYEJWQ2FNj5Kjj0fXyKhodbdKiMdyUuMz9PMu8S5Jmx1BTugQM8TfEOA6LXYvTue8l%2ByjS3qG7K1z2f7ZkEPei2mnLL7wE5UEWp8LrAhEu3ex4BG4ng8ci%2F8IVBL%2Fhmv2gOBXRFSlhekE8MgNUmVYxcrQ%2Famhx5dVI0ueNpBSyoRoZrwdOSV2uYE1iPDRorOL%2FYakgQQHkJlAZ2Km1KVxCAix7XMk0YMP6Uw8kGOqUBVC%2FZqnuPz4zmmxVFXPzHNN8JNv5AL%2B5nU9KooBGSGuiArdfMYGwjF58k3a%2FYJh9rO7p8Ym5WwupvvAYsj9NiMMtLRhkbVCkJA%2Bbf73SmYJWShAuoJUyXLlSmcRVOwGTEm6lYz2Gg54gGtqb87dr6NRXikBoVQ%2FYU%2BTSSB5rGWxwN9wFH%2FbOcS1o0ZR7%2BQDgl6P6%2BCzIqv%2BSwt2GFOlUrYphYDxHJ&X-Amz-Signature=f4884750d25003d8fec3f27a259f188e9991ab72e1e313b9dc58f3ca75b6a23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JK5HDXG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIB9%2BUpJ2G73%2BoiQMIOAD7c7MgSM0bnAGrsJ4UmEejenLAiEA%2BTnZ3wtHxLBXvV73Exv7h8ncdpLjmyZXgODNytCxR%2FYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDORu5UA5l%2FQRjUAGxSrcAy1MXFdjz4Ta9DWb5W1805hsmtj2%2F5Pq0AGg86%2B00fjjfroZi5eL%2BG0N%2BfbQHxmusLtXttc4i%2BbzPNOs%2BjuAnCifd%2FvLYKNlGTRTUSJhyE4MYUG3tpX0462buV0uqnvYHov2WrfkCM6XIvz1NzFXtiA6%2FAlsWNagaY5ZZQVncKMRXa6AvxZ%2BIJVYyvWTT9IVe2N%2F307I5bqwF8iWKpfh%2F4cKgkoRsI7WDmISYKrhIGI9zusOQ5oi2t8GiZXUJmb1Yk526zKHWY96BjrYMvzL%2BAVQRka0KXmbRDau8%2BwklZ29GsZ81J11%2FwCDYvrolZn91lWtPXVf4By93OIVlHwpWlNyg%2BgeBABG8faJ84WLmMzB45lgLG9N%2BYXUZZpvJwKEQSO3SJICisYz2qnGTrNj8RWcvH13MbYEJWQ2FNj5Kjj0fXyKhodbdKiMdyUuMz9PMu8S5Jmx1BTugQM8TfEOA6LXYvTue8l%2ByjS3qG7K1z2f7ZkEPei2mnLL7wE5UEWp8LrAhEu3ex4BG4ng8ci%2F8IVBL%2Fhmv2gOBXRFSlhekE8MgNUmVYxcrQ%2Famhx5dVI0ueNpBSyoRoZrwdOSV2uYE1iPDRorOL%2FYakgQQHkJlAZ2Km1KVxCAix7XMk0YMP6Uw8kGOqUBVC%2FZqnuPz4zmmxVFXPzHNN8JNv5AL%2B5nU9KooBGSGuiArdfMYGwjF58k3a%2FYJh9rO7p8Ym5WwupvvAYsj9NiMMtLRhkbVCkJA%2Bbf73SmYJWShAuoJUyXLlSmcRVOwGTEm6lYz2Gg54gGtqb87dr6NRXikBoVQ%2FYU%2BTSSB5rGWxwN9wFH%2FbOcS1o0ZR7%2BQDgl6P6%2BCzIqv%2BSwt2GFOlUrYphYDxHJ&X-Amz-Signature=e03f89ade9ac773ab590f6c98fcaa54c621a24f68364365c8eb54d5cc0918191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
