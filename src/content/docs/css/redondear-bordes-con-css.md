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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLNLVUT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1yL8%2BdcYdsnWnZDfZNykB54wWBEH6FhvkXvcBQG9ajQIhAMbGv%2BHy817N1CcRcMxqi6DeoYNMpVpyz%2B6VkqOXTY0FKv8DCGYQABoMNjM3NDIzMTgzODA1Igyir3YghuzofKRpZUYq3AONCRVgo0brJ%2F9Ahyx5SpMXqsXXQBNfDVp4QXKNBUGa96GR287W8bAooqh6hcgAa5eyMlhH2tdmYxeoBv6%2Bx9BOxZI3dpWIpqZV3rMJ6L0MZnu6UWgobqCo1rvbm822Pz1RN%2BBiKGxvTlAda7uArBxvoQ8I9flhdxNtxgCz1s24QwqDLxFjuoBkiDscyAUCsSTA%2BUSOAa4nHHNPCVxYHM8pIdcqiKfSMKRmOYs%2BCwnCiYSmbqjer%2B%2FpENn7%2FwdNjuUKpMG8Nm5Qbp%2FFlTkmL%2BtIBErCcj6djHc6Ljufbo19rE6Z7NDyEGz2KaFjdQF7l%2BGVzKTSKEetDl7uaDFE4WMGxJYiCCou6izvf2E6YDpd7Ai2hFhWyeIOZn6haXP0qlOKHr4BokzItoOkVZkRXFuhzbMyG%2Fspmrh1sKcTQ6LpCChefKXWS16gPE%2FFY%2BhMklM5xaR6mdquwvFiCiMdxDijWAlXRTuDKLj%2BF9c%2BVG8Zc%2B03DwEolro8o2Afvb2ZwLhgZHJjL6394WkHTYgk8czx8NA8jDjB2vnu7EacPrP5smXKaeJAAFJ9haEShHfYxl1If%2BWDneIJqqXOoPGtTAOAAstl4X93on%2BKAtq1Hbm1aUvmHtwFCB6sCXCZSDDvhs3JBjqkATW%2BGE5IBT6P5cIQJPxfYCEDVyQBEAxUrli%2BtUlRi%2BEjfTJk7hu9GJ%2BPC%2Fd2aEPIjrzdXOCL6xOoXkvFQedRiLqo%2F%2BwvsRjnkGiW6Zu4fCJco5l%2FtrSWuhkdRN7cOCuBZh6XBE0cquIaUe5%2B3UHHzG0we0Ln7mme7S4TacrdzjP0%2F2NdJtm0SzmYs6ZS92KAyIHgkySImlI1nHBanrIturhiuI%2Bx&X-Amz-Signature=44377a9bcf7099e2d41e454a99a47aaec975835a0604498e96b7f15a951f03a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLNLVUT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1yL8%2BdcYdsnWnZDfZNykB54wWBEH6FhvkXvcBQG9ajQIhAMbGv%2BHy817N1CcRcMxqi6DeoYNMpVpyz%2B6VkqOXTY0FKv8DCGYQABoMNjM3NDIzMTgzODA1Igyir3YghuzofKRpZUYq3AONCRVgo0brJ%2F9Ahyx5SpMXqsXXQBNfDVp4QXKNBUGa96GR287W8bAooqh6hcgAa5eyMlhH2tdmYxeoBv6%2Bx9BOxZI3dpWIpqZV3rMJ6L0MZnu6UWgobqCo1rvbm822Pz1RN%2BBiKGxvTlAda7uArBxvoQ8I9flhdxNtxgCz1s24QwqDLxFjuoBkiDscyAUCsSTA%2BUSOAa4nHHNPCVxYHM8pIdcqiKfSMKRmOYs%2BCwnCiYSmbqjer%2B%2FpENn7%2FwdNjuUKpMG8Nm5Qbp%2FFlTkmL%2BtIBErCcj6djHc6Ljufbo19rE6Z7NDyEGz2KaFjdQF7l%2BGVzKTSKEetDl7uaDFE4WMGxJYiCCou6izvf2E6YDpd7Ai2hFhWyeIOZn6haXP0qlOKHr4BokzItoOkVZkRXFuhzbMyG%2Fspmrh1sKcTQ6LpCChefKXWS16gPE%2FFY%2BhMklM5xaR6mdquwvFiCiMdxDijWAlXRTuDKLj%2BF9c%2BVG8Zc%2B03DwEolro8o2Afvb2ZwLhgZHJjL6394WkHTYgk8czx8NA8jDjB2vnu7EacPrP5smXKaeJAAFJ9haEShHfYxl1If%2BWDneIJqqXOoPGtTAOAAstl4X93on%2BKAtq1Hbm1aUvmHtwFCB6sCXCZSDDvhs3JBjqkATW%2BGE5IBT6P5cIQJPxfYCEDVyQBEAxUrli%2BtUlRi%2BEjfTJk7hu9GJ%2BPC%2Fd2aEPIjrzdXOCL6xOoXkvFQedRiLqo%2F%2BwvsRjnkGiW6Zu4fCJco5l%2FtrSWuhkdRN7cOCuBZh6XBE0cquIaUe5%2B3UHHzG0we0Ln7mme7S4TacrdzjP0%2F2NdJtm0SzmYs6ZS92KAyIHgkySImlI1nHBanrIturhiuI%2Bx&X-Amz-Signature=30fc9f7d37e1bed4c1847565f4d601e55097fab3c7f79782109fcc33d0d1ec9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
