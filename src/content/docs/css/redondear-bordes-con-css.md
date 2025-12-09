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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6FN3F4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0D1kQtr7zRwXtRjdAzRafzxKDx%2Fk3JG1JvRODFU5RbAiAjCI2LuChzGO1ek8rTmVJ6W0lk5Uo7gJruRTV8aUwodiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQH4ZueANL19P%2BYW5KtwD%2F9Xa%2B5mGK3HeANm5RBr7S2lrx0oYEpY7w0JhkoXkW6DleClK6RBh3xX9nfkMdwrtv%2FTwKFX7ffV%2Fjx6OEHzzDshQc62yS8Rjh7dcPL3RZTZOnyNfhiKujkRa4Al64VkX0Pv1LTA6jmDvTzoEPpVkMQvw7RGKPRKKpVv4j7fqhaHs2g07HEMpjH0t5svzoN39jUczWpVCdwmr6Mm2pTvE5laeb6xFngQjUTfqgWAVqUnc5iLTmR9RTBBZPtCZl0I29FiDFuYtHX3wo4cyLVDeP5FlvpqpnM5x2q%2BpW0BOPrgUFPj%2B2I0TmF07kaAjzAi4EcFscDjMZjFZ5ZHIyn23O833P7QXcWsNWBhR943GtVf0vVxn2uV7oMBHcuDDv6ZLJ2oIh7YHs5x31Wa%2FzR6bnSvkZF85wG0u7CwJDCHYJLlMzP%2Bv57bh1vXHkIh9%2BJAScKpDkU1IPOjw%2FX31lp0DME9%2B4YiWKnRFf%2Fk5ppxf8PO1Ig2NOj4vgLWRvXJfoOjiUu1mSJhjQGwM8YTyGmCd1xjwN1xjpuHCEDF%2FcpuFCuCXnIoAEvxXTGNooUtmSvpvIAq51i80q3p7ALf9cr89JRSPhyulU%2Fi17d2lIfjNagVNntjSuts7fhSOTYMwio7eyQY6pgHyg3TkC5jBmboXjV%2B7YAcdgcworARHKEVN9XN%2BPXWOSmU6XktzU9dzk7AHqrSr4ZomrXV8xFjR36NvpJ2JZbhW9yzEi%2BefyWgbJBCVPIPot3tF9Xg1qhjlUnM%2Fk08bnB2WxaA25vn4idcueTP1HiDOn%2FX%2FUCe4Dpf8HGnZ8%2Bx4b%2By5TpGCn%2Fk8aEXgWt0cx7yAe3Yw3bDTqVSIs%2BxU5B2OAQlYuhn3&X-Amz-Signature=edcba58c82eb92b6e6692c058cf40db6aadd9cbc06c26b18beafddc32fbb4a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6FN3F4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0D1kQtr7zRwXtRjdAzRafzxKDx%2Fk3JG1JvRODFU5RbAiAjCI2LuChzGO1ek8rTmVJ6W0lk5Uo7gJruRTV8aUwodiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQH4ZueANL19P%2BYW5KtwD%2F9Xa%2B5mGK3HeANm5RBr7S2lrx0oYEpY7w0JhkoXkW6DleClK6RBh3xX9nfkMdwrtv%2FTwKFX7ffV%2Fjx6OEHzzDshQc62yS8Rjh7dcPL3RZTZOnyNfhiKujkRa4Al64VkX0Pv1LTA6jmDvTzoEPpVkMQvw7RGKPRKKpVv4j7fqhaHs2g07HEMpjH0t5svzoN39jUczWpVCdwmr6Mm2pTvE5laeb6xFngQjUTfqgWAVqUnc5iLTmR9RTBBZPtCZl0I29FiDFuYtHX3wo4cyLVDeP5FlvpqpnM5x2q%2BpW0BOPrgUFPj%2B2I0TmF07kaAjzAi4EcFscDjMZjFZ5ZHIyn23O833P7QXcWsNWBhR943GtVf0vVxn2uV7oMBHcuDDv6ZLJ2oIh7YHs5x31Wa%2FzR6bnSvkZF85wG0u7CwJDCHYJLlMzP%2Bv57bh1vXHkIh9%2BJAScKpDkU1IPOjw%2FX31lp0DME9%2B4YiWKnRFf%2Fk5ppxf8PO1Ig2NOj4vgLWRvXJfoOjiUu1mSJhjQGwM8YTyGmCd1xjwN1xjpuHCEDF%2FcpuFCuCXnIoAEvxXTGNooUtmSvpvIAq51i80q3p7ALf9cr89JRSPhyulU%2Fi17d2lIfjNagVNntjSuts7fhSOTYMwio7eyQY6pgHyg3TkC5jBmboXjV%2B7YAcdgcworARHKEVN9XN%2BPXWOSmU6XktzU9dzk7AHqrSr4ZomrXV8xFjR36NvpJ2JZbhW9yzEi%2BefyWgbJBCVPIPot3tF9Xg1qhjlUnM%2Fk08bnB2WxaA25vn4idcueTP1HiDOn%2FX%2FUCe4Dpf8HGnZ8%2Bx4b%2By5TpGCn%2Fk8aEXgWt0cx7yAe3Yw3bDTqVSIs%2BxU5B2OAQlYuhn3&X-Amz-Signature=1679b7e562578c9c535ce435234403c4d5d20e2b3a9ccd206fa63a3a80cab1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
