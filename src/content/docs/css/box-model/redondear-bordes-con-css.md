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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3OLXCCX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BsITOEw%2F4fw%2Fz%2BLLfEfawj%2BvG3QvtbIrzElsTjd%2BG4gIgR%2B1I1S4g9WemXiKiWfNaAKh1ab15nuJ71rX7WTN5ChoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYE5RsXZmUKkaiCLyrcAwRKnFYUqdRGZFtlbZc763gnm3QHqxuifVSQgsDhW4PE7Od33yHEure93mhs5tAiS%2Bg2UHXHxoGpNfiPscXdM2NHll16w7jxXp8Jq4n14n69kuBo54%2FOXiYsjGKitI7H6FeOm%2FLKz%2Fv3PhA1UcosDe2TKMOS4mBWAoSMIigX5HtgquZMT0JszQDXBg7ZfHboKbJoPJjjR1Uw0E%2FqemqgmQ%2F4MtTlDTxFOmFOA969AuFr74sqLYNDSs30KkLSRHcxSMTBdhDEZaC%2BIyJESy%2BraCGFm0atsmorvwlH5fr6eOuAfci6PDkV4Gwk7BW5ZJKhyNPrdM4tq4KlDqaFOks1tjA6IsHNHUsR4WFakFsrIfBH2k2uvqlMOiDQyPK0oPgWnj%2BZOnCqNFTuAFPBaou09VRduyS8vOxm1I%2Fzx2%2BXU4l2C4IfoZ0QziLjpW8d%2BYAwlQ1gJCUoCykHii2FKmfh6jtk1xDDegaHwHBkJBYK%2F7t6ngQsvT1X1qsLHe%2BwdTLSjSqv91hGjQqO8z%2FJ57CTzb7jjQT2%2Fs1IVUeR51an6LY%2Fevi1l4CtoBTu48RozKr76Z56aGUxSek5nQp5hd2osconBQ36BJjM5MLGwMjV2aWMKWfJBlItq8LKMKn4MKOBi8oGOqUBjmIdPuNFnZRk2IHLsvbBKC8zCTj%2B7c6g0q3fWyxlPNJxyTWoy4Xw%2B9IcobFJyqqheb7TbrzRU%2Fumz24GUgPBu6ELJncmA%2B73lnLZI9RajxEwZnHqAZOhEncfkOU5GlkrDVxJpCM5zvUDCznWcTC78ODVPBpPwArygsmUvWbvMgovdOI50ZwvFrS3An28ITA0qTlvPUYxVCXqXwbbQxb8s5hsWSzw&X-Amz-Signature=96e9e408b2b83040a60512aaf4dd13ee19fdbffddbfa7bd481eb4950b0537f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3OLXCCX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BsITOEw%2F4fw%2Fz%2BLLfEfawj%2BvG3QvtbIrzElsTjd%2BG4gIgR%2B1I1S4g9WemXiKiWfNaAKh1ab15nuJ71rX7WTN5ChoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYE5RsXZmUKkaiCLyrcAwRKnFYUqdRGZFtlbZc763gnm3QHqxuifVSQgsDhW4PE7Od33yHEure93mhs5tAiS%2Bg2UHXHxoGpNfiPscXdM2NHll16w7jxXp8Jq4n14n69kuBo54%2FOXiYsjGKitI7H6FeOm%2FLKz%2Fv3PhA1UcosDe2TKMOS4mBWAoSMIigX5HtgquZMT0JszQDXBg7ZfHboKbJoPJjjR1Uw0E%2FqemqgmQ%2F4MtTlDTxFOmFOA969AuFr74sqLYNDSs30KkLSRHcxSMTBdhDEZaC%2BIyJESy%2BraCGFm0atsmorvwlH5fr6eOuAfci6PDkV4Gwk7BW5ZJKhyNPrdM4tq4KlDqaFOks1tjA6IsHNHUsR4WFakFsrIfBH2k2uvqlMOiDQyPK0oPgWnj%2BZOnCqNFTuAFPBaou09VRduyS8vOxm1I%2Fzx2%2BXU4l2C4IfoZ0QziLjpW8d%2BYAwlQ1gJCUoCykHii2FKmfh6jtk1xDDegaHwHBkJBYK%2F7t6ngQsvT1X1qsLHe%2BwdTLSjSqv91hGjQqO8z%2FJ57CTzb7jjQT2%2Fs1IVUeR51an6LY%2Fevi1l4CtoBTu48RozKr76Z56aGUxSek5nQp5hd2osconBQ36BJjM5MLGwMjV2aWMKWfJBlItq8LKMKn4MKOBi8oGOqUBjmIdPuNFnZRk2IHLsvbBKC8zCTj%2B7c6g0q3fWyxlPNJxyTWoy4Xw%2B9IcobFJyqqheb7TbrzRU%2Fumz24GUgPBu6ELJncmA%2B73lnLZI9RajxEwZnHqAZOhEncfkOU5GlkrDVxJpCM5zvUDCznWcTC78ODVPBpPwArygsmUvWbvMgovdOI50ZwvFrS3An28ITA0qTlvPUYxVCXqXwbbQxb8s5hsWSzw&X-Amz-Signature=c80f11fc68f3b1c9bcb273ea13a0ab0347b2ce72168cca3ad5e5b4d69b89a283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
