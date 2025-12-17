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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVIVKZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa6indg0gNRE%2F5MXBrN50GE6jdc%2Fkk9fdHk%2FuY6R15qAiEAtVrI6CEgCIZSiv9Ey721Pw4wfjSpt%2F88WsyNmBJpmAoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGU1Sy9ij9ooQBoFyrcAzpL2lwkgoS19f95TT%2F3Fu9AgJzgnnvP0Cq0JHGLFwE%2F09ON1r7wjuxiNHluewWQY0dBlwcBLOYxbyI0pcRtJv6Xuv2jduLAvHuxXN14BD4thb28dbsHnZRlU0%2Bi2lGXM1zP%2F2BxfSlGlmmoZBwqU81HEVN22Jo1tX2z%2FgEanMWWuMBFHGteKY9VNPBIuet%2BNbTo2v9mHPrusjwCB35nL7bOj1VCH3%2BzNcQAHiMYPb2BaFQx83h7SfHJwQM4Ob%2BdaRjg6GeC2WOpXGOmFWeDSbl8yEHYbR1Rvqjre6YdMeBKUQ9K%2B1RVZAUo6XXr1rE22wE%2FqEAQi6euuz81MbsGtd6bwEiS%2Bt4W8scsb1qcQ67fzPBSfjv4GQ2Tiu7%2FkNvwt723Gx5neY4NOtJN6DobEmICutZt0DxsfLP3dyHiYdDt0Dsp4M%2B7%2BwkYhQyFduc7j4x2TynRtaV954YjG173HL9Rj%2BqwBHm3bwi%2FXZzYd7FYCnNwjVPGmhr3XVlXLwr9JTCl5txjWaXblTCzIdDzWlIXQESSsUHxB6k3fCwH2AWJH1tS2ZcUpQwnbhBT%2FD1rjlJwwg8K3UqAruFPdTZPxs7R7S1cJ8LoGjXmYrBGQ0cigCLwgV4U5TQUDny1MLCfi8oGOqUB3TDH68ZAJX1YbgfVddmbGNG%2BQERfo%2FTvo9yix9xNdooXt4v32haj6JHGfwUIVxU0OHuNnJbePqAWtSRUv0EvifqC5QDZJV1PkJv%2FP0nWxSBaJsEh%2BHoWzr%2F5%2FDId%2BHI7fGC0rlPQmpMim3LRI2MNcA6wbcrpC%2FMWw600T9f5%2BHtHOSo7PrsTp5JDKNZWuV1Uy8WZt7%2BJ1a36xnBwqCIrVIHbSutM&X-Amz-Signature=769eaec1e47602d37765a1ac4efb264045902e214aa027675bfa407cc7f55b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVIVKZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa6indg0gNRE%2F5MXBrN50GE6jdc%2Fkk9fdHk%2FuY6R15qAiEAtVrI6CEgCIZSiv9Ey721Pw4wfjSpt%2F88WsyNmBJpmAoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGU1Sy9ij9ooQBoFyrcAzpL2lwkgoS19f95TT%2F3Fu9AgJzgnnvP0Cq0JHGLFwE%2F09ON1r7wjuxiNHluewWQY0dBlwcBLOYxbyI0pcRtJv6Xuv2jduLAvHuxXN14BD4thb28dbsHnZRlU0%2Bi2lGXM1zP%2F2BxfSlGlmmoZBwqU81HEVN22Jo1tX2z%2FgEanMWWuMBFHGteKY9VNPBIuet%2BNbTo2v9mHPrusjwCB35nL7bOj1VCH3%2BzNcQAHiMYPb2BaFQx83h7SfHJwQM4Ob%2BdaRjg6GeC2WOpXGOmFWeDSbl8yEHYbR1Rvqjre6YdMeBKUQ9K%2B1RVZAUo6XXr1rE22wE%2FqEAQi6euuz81MbsGtd6bwEiS%2Bt4W8scsb1qcQ67fzPBSfjv4GQ2Tiu7%2FkNvwt723Gx5neY4NOtJN6DobEmICutZt0DxsfLP3dyHiYdDt0Dsp4M%2B7%2BwkYhQyFduc7j4x2TynRtaV954YjG173HL9Rj%2BqwBHm3bwi%2FXZzYd7FYCnNwjVPGmhr3XVlXLwr9JTCl5txjWaXblTCzIdDzWlIXQESSsUHxB6k3fCwH2AWJH1tS2ZcUpQwnbhBT%2FD1rjlJwwg8K3UqAruFPdTZPxs7R7S1cJ8LoGjXmYrBGQ0cigCLwgV4U5TQUDny1MLCfi8oGOqUB3TDH68ZAJX1YbgfVddmbGNG%2BQERfo%2FTvo9yix9xNdooXt4v32haj6JHGfwUIVxU0OHuNnJbePqAWtSRUv0EvifqC5QDZJV1PkJv%2FP0nWxSBaJsEh%2BHoWzr%2F5%2FDId%2BHI7fGC0rlPQmpMim3LRI2MNcA6wbcrpC%2FMWw600T9f5%2BHtHOSo7PrsTp5JDKNZWuV1Uy8WZt7%2BJ1a36xnBwqCIrVIHbSutM&X-Amz-Signature=af01320bd6408b6e94b73a5569fae6a29a9fcd10efa5a8ec73ee02c025e4fae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
