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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXYE2DGB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbZ1YeVPDD6Pz8lPcRHNFkhRyiwndi2Mi6HyO%2BHqHi5AiEA6vXGYsTSIVMwMdIytCIiz4P22fRQWPMzNaAxrC5X%2FV0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHULyN6tUxeIh8uYCrcA%2BThuNhTHDM5FpTE34FfVwdzMbFVPJcDHumyVhQfbqaraVGId0KW7Fr0Yqtk9NsTbR4N2wPmFZZFhaSJza0RhTfiUHAKjKe7aQGI0OYIYDg7%2FoYzIncXLDIG0pQ39m4%2BXYpP19dkrE4VNR0HPmQS8efYR7rwZAC25fYJj4UYqfhaHQM7yxmnoK6Ki6zx%2FtMYrpKt9%2B0MNrqZM7pNuSrTG%2BQLfQFuxSDczDJNKa6XdHYMvXbfCihANgS1x2IeHx0xjvEaMVvyYuZzdyFyCWFCNCooqYQBHJkfaLS9WVFw4qMkkMAExrruvKPSlekbWKxe2%2Bxu1glY45OpX1XUzYghAvWR4uFe%2BupUFHSP7o9NkvYwmBDqxes%2FrRXNP7dRn0c%2B7mlcJx9KMVkShH9%2FhPxiyZSuWLyzAfAc9tKshV9mBF%2FYClFYmyaOnlSODFptm5j7gDro35IAIbWJyKWfw%2ByG8kb0OC%2FD%2BOmdm0cL%2F3%2FwVbydOUDwdrksJv9hqrvoJ7TI4w%2BgugdgaFYsYdYjFwEAMcVIrkZGExm7CBlx8uz3X3DDkmif3dS0qTENMOZRwLqtoopWez%2FVQxoYatgENRp3YDCZMkREBQM%2Bs4wCIZx5tmBU5WI2pG0PJO0uInnzMPWei8oGOqUBl25YwCI5Uv%2FnoT7HXfAk5jr%2BxFXuYJit9N%2B%2BskNHXwqn4pRmJdj%2BGK2QUeO8psNmU%2B7lkYqA1td3msT6a0ko%2FIIcjYwXG23EC1dlHTySlFZUsVihesW0flNuYdEtrJFL7%2FqUk9droGawGMWc0w4vyOz3WUbV8Ui6GxdUZ6IesWQcy%2FAbQoEihYDnCFeg7Qm3yM8gxRcq1bmL73CF%2BM6fYAuKEB6U&X-Amz-Signature=d8b62f70d08ba7b5d67a34ea299d0850e1ef5481b7fe47e64912e12ca8867a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXYE2DGB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbZ1YeVPDD6Pz8lPcRHNFkhRyiwndi2Mi6HyO%2BHqHi5AiEA6vXGYsTSIVMwMdIytCIiz4P22fRQWPMzNaAxrC5X%2FV0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHULyN6tUxeIh8uYCrcA%2BThuNhTHDM5FpTE34FfVwdzMbFVPJcDHumyVhQfbqaraVGId0KW7Fr0Yqtk9NsTbR4N2wPmFZZFhaSJza0RhTfiUHAKjKe7aQGI0OYIYDg7%2FoYzIncXLDIG0pQ39m4%2BXYpP19dkrE4VNR0HPmQS8efYR7rwZAC25fYJj4UYqfhaHQM7yxmnoK6Ki6zx%2FtMYrpKt9%2B0MNrqZM7pNuSrTG%2BQLfQFuxSDczDJNKa6XdHYMvXbfCihANgS1x2IeHx0xjvEaMVvyYuZzdyFyCWFCNCooqYQBHJkfaLS9WVFw4qMkkMAExrruvKPSlekbWKxe2%2Bxu1glY45OpX1XUzYghAvWR4uFe%2BupUFHSP7o9NkvYwmBDqxes%2FrRXNP7dRn0c%2B7mlcJx9KMVkShH9%2FhPxiyZSuWLyzAfAc9tKshV9mBF%2FYClFYmyaOnlSODFptm5j7gDro35IAIbWJyKWfw%2ByG8kb0OC%2FD%2BOmdm0cL%2F3%2FwVbydOUDwdrksJv9hqrvoJ7TI4w%2BgugdgaFYsYdYjFwEAMcVIrkZGExm7CBlx8uz3X3DDkmif3dS0qTENMOZRwLqtoopWez%2FVQxoYatgENRp3YDCZMkREBQM%2Bs4wCIZx5tmBU5WI2pG0PJO0uInnzMPWei8oGOqUBl25YwCI5Uv%2FnoT7HXfAk5jr%2BxFXuYJit9N%2B%2BskNHXwqn4pRmJdj%2BGK2QUeO8psNmU%2B7lkYqA1td3msT6a0ko%2FIIcjYwXG23EC1dlHTySlFZUsVihesW0flNuYdEtrJFL7%2FqUk9droGawGMWc0w4vyOz3WUbV8Ui6GxdUZ6IesWQcy%2FAbQoEihYDnCFeg7Qm3yM8gxRcq1bmL73CF%2BM6fYAuKEB6U&X-Amz-Signature=0cb84e549174274207d2442c28c58123ce6dc149a61b2377c3f472c1ea95be0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
