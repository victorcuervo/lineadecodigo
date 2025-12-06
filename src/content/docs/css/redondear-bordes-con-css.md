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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WI4FHX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3j8JhjgaKH5ISBV0YsuSkgXRrB%2FjRVdiinoq9PRyV3gIhAIYJiNaznBW0UYYtzFH0KreDGpEEl%2BWXuHpTe6p3teknKv8DCHUQABoMNjM3NDIzMTgzODA1Igw9SWb51RR3CsrhVycq3AOXqQMZ9SkuZa6F83YQRyruHvLWmofI6n%2F%2B9WbAUm0NgIoBbyDl3en6lkynHW4%2Bg9qDL04mlDP1sZX1T5fOpLA9YKHJGNEfCe7aazd5Tq77Fp1RxydQ%2BmmubKl0qpzL8leU%2F1c0BWlf0glUreRT5CSXUNRSCs13%2F5TbBrFNQgqi2yNKRrlQbLONVRLoWQYRH2sz4IqANfXCn4KtCCh5D6JdXMvNq%2FqSCJkDqq8oAM8WdfL1wftG3aWY8n7N%2BkaOrW7Ab1zW3co6XfzTWdh%2Buo3mcGwRL2%2FaA81Czx%2BE0%2BzPT0zF3bzTlX1Yt6QZvWV0Yf7Cr6Z8%2BT5QDm49TkNFeuFMeHzijo4YaJHBLzC8DuOj%2FUnGry7mlH4dIChPZioRa81PAsC8Hnbm%2FTKgsAtTrxv2rZtIcRoEgcHdOf6zhr0A4mfUi6s6JyzBV6EIx8CizXFqqpoAZSSeFt2PwMKDs8wUdq0yjmEFCF1%2B3mNwWsTR%2B78HZq0EVHgmMsjPGBvHfOzITFJNDcJJJq8Pr5nK4xfQ%2FeKKzvnheO%2BYvRoLn%2FiT%2BwwXeNFRguTgt4gKCVd0PcGEh%2BpQkVfR5%2FG6kVrVTda8LUO5XuSq9plF3UC85yF9FEeVadGIWo7%2F5fJefTCRp9DJBjqkAdITsiDar2AM5VIE%2FQU21XAz6jhJon79xAq1rCyMGfUjbSw7oChWRZTIZIGav%2FcVKl5Cfu4cC3kJR9lx9J%2F2gVlFhdEI%2BwcMfKkEwM7NqGz2qIUEPnBv1tXiVO8uddgCn%2BoRMN1s0hGiJpTsQ4tXBKLCNcsKU6i3MN8omkFqLNh4pwOWOS%2FY%2FcUipNfxunVoJ7mvJdGcN5GZjegEwOUNaTFZ6pKD&X-Amz-Signature=1d65a1d807e9629b18bfa18feeadf37c30c87c8c207e013ec6f7e6aa83e7df78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WI4FHX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3j8JhjgaKH5ISBV0YsuSkgXRrB%2FjRVdiinoq9PRyV3gIhAIYJiNaznBW0UYYtzFH0KreDGpEEl%2BWXuHpTe6p3teknKv8DCHUQABoMNjM3NDIzMTgzODA1Igw9SWb51RR3CsrhVycq3AOXqQMZ9SkuZa6F83YQRyruHvLWmofI6n%2F%2B9WbAUm0NgIoBbyDl3en6lkynHW4%2Bg9qDL04mlDP1sZX1T5fOpLA9YKHJGNEfCe7aazd5Tq77Fp1RxydQ%2BmmubKl0qpzL8leU%2F1c0BWlf0glUreRT5CSXUNRSCs13%2F5TbBrFNQgqi2yNKRrlQbLONVRLoWQYRH2sz4IqANfXCn4KtCCh5D6JdXMvNq%2FqSCJkDqq8oAM8WdfL1wftG3aWY8n7N%2BkaOrW7Ab1zW3co6XfzTWdh%2Buo3mcGwRL2%2FaA81Czx%2BE0%2BzPT0zF3bzTlX1Yt6QZvWV0Yf7Cr6Z8%2BT5QDm49TkNFeuFMeHzijo4YaJHBLzC8DuOj%2FUnGry7mlH4dIChPZioRa81PAsC8Hnbm%2FTKgsAtTrxv2rZtIcRoEgcHdOf6zhr0A4mfUi6s6JyzBV6EIx8CizXFqqpoAZSSeFt2PwMKDs8wUdq0yjmEFCF1%2B3mNwWsTR%2B78HZq0EVHgmMsjPGBvHfOzITFJNDcJJJq8Pr5nK4xfQ%2FeKKzvnheO%2BYvRoLn%2FiT%2BwwXeNFRguTgt4gKCVd0PcGEh%2BpQkVfR5%2FG6kVrVTda8LUO5XuSq9plF3UC85yF9FEeVadGIWo7%2F5fJefTCRp9DJBjqkAdITsiDar2AM5VIE%2FQU21XAz6jhJon79xAq1rCyMGfUjbSw7oChWRZTIZIGav%2FcVKl5Cfu4cC3kJR9lx9J%2F2gVlFhdEI%2BwcMfKkEwM7NqGz2qIUEPnBv1tXiVO8uddgCn%2BoRMN1s0hGiJpTsQ4tXBKLCNcsKU6i3MN8omkFqLNh4pwOWOS%2FY%2FcUipNfxunVoJ7mvJdGcN5GZjegEwOUNaTFZ6pKD&X-Amz-Signature=fce57cc9d7f346cbbbbcb0f529569a090cbb99a134a21db376f44fe0906dba3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
