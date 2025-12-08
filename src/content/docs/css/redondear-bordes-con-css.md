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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQOJJD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHa%2F67U%2FO8ODSkz%2Fs5OdgK6Yy5UTlHg4n6mNMTIehCjwIhANJyxOJa56ZjfhZX5oM3wJe%2FmjxnQH5p1h%2BE6meJtdM8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsjjlRaMdQnFAaiugq3APwLa%2ByHFD1PapBszEZL5y1948BaXSeIxFof%2FirmD3pNHPKQDdMw7EWpRbl5b6L887lgTHVya1g0wOSIWEBD1D3O7dmmt6Q%2FLKmOJbYWc0L4z5UsuZ13LuxIYBLIM81JhRCEQDvBIcNzNlwCDGQs3IlQ%2Bpx0pKP6CBwSUE7IOmMp59cPUoAAZPL%2B8LD%2BV4oXG%2F4Yu8nJ%2BZXje%2F%2BICcCO67wwRiEUKepFSDL%2BOyHYzYqBostdzGYv1Rut%2FF1Twn2D6IbgsjfCwG%2FffSYSj65ImQwLkakskDcgAXyF95VvC2TsV4M5XHLPOYnSSvZJkrZsYbqD9oXThJ38jXOie0aKFUV70Vk%2BmvXAdpqXzS1wn01KGjfi4yUVspSzN%2B6cSvjG99dEIT4AkJVcnRwFb%2F9r64qohFt6Ic0RYvhhNMe8Vzze9n1nZCUXpViArqDkGNlGmfBBUa1D%2FTVbVI6TQLOWiXio5n0FZDhTJLPkgwbHM3GW28FU4IcmCP25PG6PKK2f50HrbnKjHaMHU%2FnnuPnv%2F%2BdHUucoMdqcqjyDOgMqwYdyNGbqrLZ8DpWWPUQ5bvMFGbBiZg9cApmWUFb%2Ba5E0bvxAPUDywFBB8eOJBH150nFL89NXynfj%2BHLdROd4jDg0NjJBjqkAQeJyrIuVThkSxZ5OFXu0c3L0U9mD3aftl6KIJ3DgIOMAIKTihmYQMSMgkgTF1%2BZC%2BUNr1A6QtspJFG1%2F1HdUAkPRDfTNt9PEdgRN8e5SFhMV9sLDK68REYBB%2FtVNTk6mQrHTUPatE78WgtVUcOLFGPoUb2MzSkjXOP9SNSm8%2BqKPABXR6Zg3XqaJli2PnJNEsupO0JDE%2B7Q6yWVftIuu9qEFfxs&X-Amz-Signature=6a288a227ff62d5bd62a081b850841eec06fa4ae20968a95788c2d48e77b7fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQOJJD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHa%2F67U%2FO8ODSkz%2Fs5OdgK6Yy5UTlHg4n6mNMTIehCjwIhANJyxOJa56ZjfhZX5oM3wJe%2FmjxnQH5p1h%2BE6meJtdM8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsjjlRaMdQnFAaiugq3APwLa%2ByHFD1PapBszEZL5y1948BaXSeIxFof%2FirmD3pNHPKQDdMw7EWpRbl5b6L887lgTHVya1g0wOSIWEBD1D3O7dmmt6Q%2FLKmOJbYWc0L4z5UsuZ13LuxIYBLIM81JhRCEQDvBIcNzNlwCDGQs3IlQ%2Bpx0pKP6CBwSUE7IOmMp59cPUoAAZPL%2B8LD%2BV4oXG%2F4Yu8nJ%2BZXje%2F%2BICcCO67wwRiEUKepFSDL%2BOyHYzYqBostdzGYv1Rut%2FF1Twn2D6IbgsjfCwG%2FffSYSj65ImQwLkakskDcgAXyF95VvC2TsV4M5XHLPOYnSSvZJkrZsYbqD9oXThJ38jXOie0aKFUV70Vk%2BmvXAdpqXzS1wn01KGjfi4yUVspSzN%2B6cSvjG99dEIT4AkJVcnRwFb%2F9r64qohFt6Ic0RYvhhNMe8Vzze9n1nZCUXpViArqDkGNlGmfBBUa1D%2FTVbVI6TQLOWiXio5n0FZDhTJLPkgwbHM3GW28FU4IcmCP25PG6PKK2f50HrbnKjHaMHU%2FnnuPnv%2F%2BdHUucoMdqcqjyDOgMqwYdyNGbqrLZ8DpWWPUQ5bvMFGbBiZg9cApmWUFb%2Ba5E0bvxAPUDywFBB8eOJBH150nFL89NXynfj%2BHLdROd4jDg0NjJBjqkAQeJyrIuVThkSxZ5OFXu0c3L0U9mD3aftl6KIJ3DgIOMAIKTihmYQMSMgkgTF1%2BZC%2BUNr1A6QtspJFG1%2F1HdUAkPRDfTNt9PEdgRN8e5SFhMV9sLDK68REYBB%2FtVNTk6mQrHTUPatE78WgtVUcOLFGPoUb2MzSkjXOP9SNSm8%2BqKPABXR6Zg3XqaJli2PnJNEsupO0JDE%2B7Q6yWVftIuu9qEFfxs&X-Amz-Signature=37198973b2b94c184bc9b156dbf43e98bc5fcec8fe6f5d5260eafb50794b58f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
