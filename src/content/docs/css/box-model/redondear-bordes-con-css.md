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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERLFYJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuXD5%2Bbd%2B7%2BXgcRs4SJLHNhc4NsfRA9u2rahrCnkOgRAiA61%2BjemOhUzofrcbPGu0rAe2cAy%2BIe19ohy2x8VZ2tgiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1oe2vJfWbggmzgpKtwDWiZeIryABGkusJ6pPhTevP6odjKwE5ie2Cng9w6ynE%2BUMQdB5i8ba16bntvlpGTssc1DwxNKY0k6rymiNCjQjbu6pxbO%2BOjpqL%2Bcmj3PIk7%2FC%2FDScB5e06uR40fjzDXSKvY6ZVfntO5oJulw6juG73%2F7MzDO7rf5gS8%2F7UZHHk0n4S3WRUnHEqdDSUc%2BQszu3yHGIiivGh8wtpfActlhnQu8%2FU%2FkprfYTLyaQVU7LDxd2Ks%2F1X8nMAayphzh7n7DmxYpv1YAhdKl20ruuLxyhjyY2ozX7joxLA5ViOIe01MljgYpDD0frmy6XaAHc6%2FpOixeePDmLAuCRIJlbtVRbj3rAKdbNwJ0VoSMZ9K%2BFoQtBUE6LofG16umvtdYQOOoK8VvzSa7bW4OPC2%2BXaUMznHliOc3Tm7ngBdLhnKvI4txKQC96TvOySdbCwk5%2BOKdEnaoDQOj%2B63Sk2RTlKNtpTAGPg8L0ckojpTAsimdCGlm4wLh%2F8izy%2BP1HE65eEdVO97wnN7fRqqALEDpkEjd%2BKlvVRrfBdRot%2FG9xyPE53RDVdUAWuU2oxazdp%2BZf04V7WpHsm80f4tGhjE2W7%2FjnHShPNF9qIr%2BHoodBxlFTC7JYZUG65Nfza6v%2B9wwgKCLygY6pgEJ1hwR5R0FJQw9sIkjLA%2FMwGVrhBiFI1e9krEdww3TqMSRDiPNt6Fz%2BF0nuzYAOH9XzOZs7Zv7a91liKox384iAA%2FNnqH8tcBCt%2F415V3hUacAvuMbwWqnsc8EwiMonspDLzgC8qP0U3jgYpx0hPgSRK0T%2Bf15Q1lsVaLIIveFRy6jNVmDcp9oREf%2FbFDrsUex1N6sYDalIr1FivDggmwZQRLqlBFd&X-Amz-Signature=eb19cf57b26e4ceda768bcdc8b9cd4d7a702e1a5a750ca64f8f9b8ac09eed57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERLFYJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuXD5%2Bbd%2B7%2BXgcRs4SJLHNhc4NsfRA9u2rahrCnkOgRAiA61%2BjemOhUzofrcbPGu0rAe2cAy%2BIe19ohy2x8VZ2tgiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1oe2vJfWbggmzgpKtwDWiZeIryABGkusJ6pPhTevP6odjKwE5ie2Cng9w6ynE%2BUMQdB5i8ba16bntvlpGTssc1DwxNKY0k6rymiNCjQjbu6pxbO%2BOjpqL%2Bcmj3PIk7%2FC%2FDScB5e06uR40fjzDXSKvY6ZVfntO5oJulw6juG73%2F7MzDO7rf5gS8%2F7UZHHk0n4S3WRUnHEqdDSUc%2BQszu3yHGIiivGh8wtpfActlhnQu8%2FU%2FkprfYTLyaQVU7LDxd2Ks%2F1X8nMAayphzh7n7DmxYpv1YAhdKl20ruuLxyhjyY2ozX7joxLA5ViOIe01MljgYpDD0frmy6XaAHc6%2FpOixeePDmLAuCRIJlbtVRbj3rAKdbNwJ0VoSMZ9K%2BFoQtBUE6LofG16umvtdYQOOoK8VvzSa7bW4OPC2%2BXaUMznHliOc3Tm7ngBdLhnKvI4txKQC96TvOySdbCwk5%2BOKdEnaoDQOj%2B63Sk2RTlKNtpTAGPg8L0ckojpTAsimdCGlm4wLh%2F8izy%2BP1HE65eEdVO97wnN7fRqqALEDpkEjd%2BKlvVRrfBdRot%2FG9xyPE53RDVdUAWuU2oxazdp%2BZf04V7WpHsm80f4tGhjE2W7%2FjnHShPNF9qIr%2BHoodBxlFTC7JYZUG65Nfza6v%2B9wwgKCLygY6pgEJ1hwR5R0FJQw9sIkjLA%2FMwGVrhBiFI1e9krEdww3TqMSRDiPNt6Fz%2BF0nuzYAOH9XzOZs7Zv7a91liKox384iAA%2FNnqH8tcBCt%2F415V3hUacAvuMbwWqnsc8EwiMonspDLzgC8qP0U3jgYpx0hPgSRK0T%2Bf15Q1lsVaLIIveFRy6jNVmDcp9oREf%2FbFDrsUex1N6sYDalIr1FivDggmwZQRLqlBFd&X-Amz-Signature=cfd349dfb2b6e8e7ce11abffc894777d85a53cc01b4cf4367a1c560f4234e70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
