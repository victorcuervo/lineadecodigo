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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWBV6PM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaxnESCN%2FL9667dJJRvM%2B9dh5K8fYCEItdesUOzHDmKAiBmGanKWLUm4m%2BWDDzAZzZj6N%2FD1oIvpdfVib%2BGHOB7SiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPhpNDDL2Co%2BQ3gcKtwDZ1M%2Bu6GApMlCYoeMVVNBGNMa0iIzxuYj9JEz39oamuK9PLrZU%2BT8ioN6gV6fj5l5HFLFom5w6VPn0rK6BkG1SVrPGuoy8BBLAQ3S8jtE%2FsR4z6jNGjg1zAO7YRvmgdbp1cxv%2B6c8D6zShmtsfJVcVJ3qlN39t2uAMGkxTnzNxFfFjoMXJgZsfl3bV7zR8tU3q8JbYhoub3h46LVDevhALWeWOimbu2wgnjmQrfMSA%2BLMzHKfHPv1MCx2r04ddZGPFYVxtiUrdWfELnsbEg3rE2oKtBheboyvOueBV8pRyDI9jHyDH8KyqjJf0q%2F74KfiT8XV4kJp9hJfZCe4shh2%2Fuop2aewK9vVM%2BpvBHh19iRSTHkwd4gjnr1uEPRJJKwWdy1bXNXypit2UlRqC0hyWl1oE3J6V2UArKEB%2B6FSW6SOHrzVwguqzXoh0Cq9bkikU6UtiCmcwRQDkqIhUUtAgdbX%2Fjrx2C3FNzK9LDRYWKwUWenmNF7bYDn46yDwxBaT235bARm4aJMaWFpjqzzfPwym7kOfqZ4YL52Dri%2FqTMv8mz5e4BdjhdzLgprbiqNAh4z90EyjiU5fXzBlBqhU59uR0TAhLt%2FhPrCNZ8EligH3esNatpL7i2nmPJEwvbTZyQY6pgFVz89SfpzQtm%2BIjcDqvXQcz%2B4YVGXkt4UftxpvBbDtGE2a4FasxmJpISkvDns5fPohsqEH7irAwPSHkEAJlknRatPpy0cS8amJb1gCqQ3xm%2FCEVDVssuoDtgOOdYI9XNVdkFWET4AMebIhhH1te325FeRHeMJk%2FFwsFX6qX%2BPUQdCByXp%2BOaWOx81YoUNAim6WRh8MTTmuxp%2BnzzAkgP0izoqxk7GS&X-Amz-Signature=65223d12bdfc9687b2b8fe3eb63c02badae9306f855352f56dfab2a38307068d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEWBV6PM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaxnESCN%2FL9667dJJRvM%2B9dh5K8fYCEItdesUOzHDmKAiBmGanKWLUm4m%2BWDDzAZzZj6N%2FD1oIvpdfVib%2BGHOB7SiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPhpNDDL2Co%2BQ3gcKtwDZ1M%2Bu6GApMlCYoeMVVNBGNMa0iIzxuYj9JEz39oamuK9PLrZU%2BT8ioN6gV6fj5l5HFLFom5w6VPn0rK6BkG1SVrPGuoy8BBLAQ3S8jtE%2FsR4z6jNGjg1zAO7YRvmgdbp1cxv%2B6c8D6zShmtsfJVcVJ3qlN39t2uAMGkxTnzNxFfFjoMXJgZsfl3bV7zR8tU3q8JbYhoub3h46LVDevhALWeWOimbu2wgnjmQrfMSA%2BLMzHKfHPv1MCx2r04ddZGPFYVxtiUrdWfELnsbEg3rE2oKtBheboyvOueBV8pRyDI9jHyDH8KyqjJf0q%2F74KfiT8XV4kJp9hJfZCe4shh2%2Fuop2aewK9vVM%2BpvBHh19iRSTHkwd4gjnr1uEPRJJKwWdy1bXNXypit2UlRqC0hyWl1oE3J6V2UArKEB%2B6FSW6SOHrzVwguqzXoh0Cq9bkikU6UtiCmcwRQDkqIhUUtAgdbX%2Fjrx2C3FNzK9LDRYWKwUWenmNF7bYDn46yDwxBaT235bARm4aJMaWFpjqzzfPwym7kOfqZ4YL52Dri%2FqTMv8mz5e4BdjhdzLgprbiqNAh4z90EyjiU5fXzBlBqhU59uR0TAhLt%2FhPrCNZ8EligH3esNatpL7i2nmPJEwvbTZyQY6pgFVz89SfpzQtm%2BIjcDqvXQcz%2B4YVGXkt4UftxpvBbDtGE2a4FasxmJpISkvDns5fPohsqEH7irAwPSHkEAJlknRatPpy0cS8amJb1gCqQ3xm%2FCEVDVssuoDtgOOdYI9XNVdkFWET4AMebIhhH1te325FeRHeMJk%2FFwsFX6qX%2BPUQdCByXp%2BOaWOx81YoUNAim6WRh8MTTmuxp%2BnzzAkgP0izoqxk7GS&X-Amz-Signature=cfd53821dbf69deebb158fe076743a7d54a9a3fdc968723614830c3424bedf7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
