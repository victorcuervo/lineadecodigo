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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZA35S3V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBN5fe%2F%2ByYmvf%2F92Kg8%2BMb%2BwLIjsVkLvk2x%2F%2BgVmH5NwIhANlIDsFwh6O%2BG8wGVDi0%2B8pvEFBv4LwF%2BV7rAg%2BeEqVeKv8DCFsQABoMNjM3NDIzMTgzODA1IgzpDmAPhLG%2BaygYPtUq3AP0j%2Fn5%2FuezT4ZilD7Jcg2rn4FcR0KWQTZtzz%2BoZhRiDobLaVsqijrMheqBwMgxrKdxg24oYTngAZSodzy89rUIEc5xamIdIxLGwU2sek0X1LGQS9wrbjBeOo8L9SnSs4x%2BmeYY6v%2FhmTozuKJ0kB2n%2BNGLf9jjKG%2BMiHcT%2FAfBUuwXa77eLKRO%2Brt38AwhHrFvq08tu0WkEL3RtJKSWx9fmzhac1kFo%2BKTWlTeacO7OKHAxxtc%2B84I6vRvbPrZdSJWFqJM4Hym5MaiFLoM%2FM8%2Bl5GGilvfY6fqZpkJJmGICsnro%2BUUajV%2FE7SJv6DyGYgoJMh0hJPkN3nKy%2FqIOP5wMNP1frDOdpWZysVvt2msJ1BiybACsx7PvdwqJIpexZX7BitTCKznmypAF%2FOrlLUWEi%2Fj0BUF9Nl3UQtlZ6iGPZFgp9SetuSMj1cvTtR4VUalerFZ3LwNn6jz8wJWFC73nh9hKwDrjRxDCxf%2BlaKYKujmhpqXepeWD2Y9F7v%2FWtXH63%2Ba%2FxXsopaGpHe92pQP4i4SEMyjZ%2FQDTznwezm4gfp5Im7O6rzWtzj2f6sm2elGQLDoxGnMZaiH1FEpuxvK70NlK1I7atQsPgK4HIv7zoUnRyQwud4IXfw5cTCO2MrJBjqkAQzhiFtweGhRaxya0x81P5NfS4a1O8JqiP%2BApXxFJkQSXwoctQdf%2BPyEhMoRopGVjj2B1sYGz7X8lRi%2BFnxav1E3%2FTaO%2F%2BBQyRuLl3dlwYIB8dTT1pY672ZPXrb%2BGcwpCZiosi4PQv173PA1gUu9jjmAu22%2Bpe%2F97y5gs66kQfhjwnGIEm3P0gPX3p%2Buf9hiyUop2SYrYP8l%2BjNgb2UB4dOIIdER&X-Amz-Signature=b86bc0e0126d4e10b0103b83a20c11c12d7ec2eb99a0c07d18da55bdf72566a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZA35S3V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBN5fe%2F%2ByYmvf%2F92Kg8%2BMb%2BwLIjsVkLvk2x%2F%2BgVmH5NwIhANlIDsFwh6O%2BG8wGVDi0%2B8pvEFBv4LwF%2BV7rAg%2BeEqVeKv8DCFsQABoMNjM3NDIzMTgzODA1IgzpDmAPhLG%2BaygYPtUq3AP0j%2Fn5%2FuezT4ZilD7Jcg2rn4FcR0KWQTZtzz%2BoZhRiDobLaVsqijrMheqBwMgxrKdxg24oYTngAZSodzy89rUIEc5xamIdIxLGwU2sek0X1LGQS9wrbjBeOo8L9SnSs4x%2BmeYY6v%2FhmTozuKJ0kB2n%2BNGLf9jjKG%2BMiHcT%2FAfBUuwXa77eLKRO%2Brt38AwhHrFvq08tu0WkEL3RtJKSWx9fmzhac1kFo%2BKTWlTeacO7OKHAxxtc%2B84I6vRvbPrZdSJWFqJM4Hym5MaiFLoM%2FM8%2Bl5GGilvfY6fqZpkJJmGICsnro%2BUUajV%2FE7SJv6DyGYgoJMh0hJPkN3nKy%2FqIOP5wMNP1frDOdpWZysVvt2msJ1BiybACsx7PvdwqJIpexZX7BitTCKznmypAF%2FOrlLUWEi%2Fj0BUF9Nl3UQtlZ6iGPZFgp9SetuSMj1cvTtR4VUalerFZ3LwNn6jz8wJWFC73nh9hKwDrjRxDCxf%2BlaKYKujmhpqXepeWD2Y9F7v%2FWtXH63%2Ba%2FxXsopaGpHe92pQP4i4SEMyjZ%2FQDTznwezm4gfp5Im7O6rzWtzj2f6sm2elGQLDoxGnMZaiH1FEpuxvK70NlK1I7atQsPgK4HIv7zoUnRyQwud4IXfw5cTCO2MrJBjqkAQzhiFtweGhRaxya0x81P5NfS4a1O8JqiP%2BApXxFJkQSXwoctQdf%2BPyEhMoRopGVjj2B1sYGz7X8lRi%2BFnxav1E3%2FTaO%2F%2BBQyRuLl3dlwYIB8dTT1pY672ZPXrb%2BGcwpCZiosi4PQv173PA1gUu9jjmAu22%2Bpe%2F97y5gs66kQfhjwnGIEm3P0gPX3p%2Buf9hiyUop2SYrYP8l%2BjNgb2UB4dOIIdER&X-Amz-Signature=03ca45fb711469e2e2044bd3f46c78d24b54bd124fd42fc4f4353937a584743f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
