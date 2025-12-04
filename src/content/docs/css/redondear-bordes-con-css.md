---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX5CW7DL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBw8rFqc%2BOq7bMXTrV4NRs0ddeDG9QN9IFga0SwtZK0CAiEA2nX1VwSJx9fISPaACkgum6YEAdCkuJVop8UhAdLCSogq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDO%2B3Li14fLnuW4JIsyrcA9vIVvHx0DHsTLd1SjlPEY%2BM5sRWiryAXVW%2F8CrUYPF7BpPpg9lgP9OX0%2Ftj3nBK93FUtjyKBkrKs688h78KcDeplo8mMJR2vENj4P2eGoiCQF3CidIFK%2FNmySa7lZLZWtCKqIdvZqNJhZN5UxvnAVs04Pp2FTEh391km8mYXIOySnIcsa%2Bum88rqJpVyuZA1hwSvAdoqfaPfrtEUPNOmulupkTkZQ%2FZMJJaeRngirkr0aa6GDrzhwXEzY2Ot3aSOYNFZ%2BsCyDeqO8B4vqyxgnIyjhua5xhMe7YhUKlDaIm0fq5AqzMfi9dhU31QI1MDrCfJrh0%2FW4vVqlDGRtoYW%2Fjtp0OEkp0ZLl3Gx7VMTCIoD1brCad7mNvY6%2BvksmRvbX4OQp6M9EWIYlUiD3CYN00pVWwB%2FXj7dKr46r2YQaf5y08jYuPCnOgF5p%2F7jsSuVMFUz4a%2BP8qEvdtLqsC036eUWit444eICvf5EJfAHY3HRhouWlnumWTrdmX%2BgiARSqHnFubXFOlNiFSAmXZLQPyZaIISZjHBt%2BitVSLGGi%2Fdjehr2r44dwgKMLUNeJCekwPrdI%2BH4dp%2F5iYCXYMInzPC9Bj740t2W%2BedS6P5MM1hRgoj0HV97rWte7SKMI%2BQxMkGOqUBUvYZbHLNIAqp4YmeCTSX2U6F7b09jwpapW8wjAVZk6UEnYx6O7IlEiTIOSDn%2B2%2FfqZR8mBR%2FSV%2ByR2Cb4sFFig4UIO%2BO6mXSr1nSQocH33D7OGMB53F9Ymhz3Tgxzb%2FyA05ehdj4j6TShuF3E7sI9oaE%2Bj3Rquc2kAJ7zEgAhZevP8zeVx%2Bav6Vhktt9ygJcLcTSYG3oqylLjktW3w13ReIXeKOm&X-Amz-Signature=fd2c4ef8af0124224f14e6571f3d18855705ed0bdaf649e3e6a0057f110a7e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX5CW7DL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBw8rFqc%2BOq7bMXTrV4NRs0ddeDG9QN9IFga0SwtZK0CAiEA2nX1VwSJx9fISPaACkgum6YEAdCkuJVop8UhAdLCSogq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDO%2B3Li14fLnuW4JIsyrcA9vIVvHx0DHsTLd1SjlPEY%2BM5sRWiryAXVW%2F8CrUYPF7BpPpg9lgP9OX0%2Ftj3nBK93FUtjyKBkrKs688h78KcDeplo8mMJR2vENj4P2eGoiCQF3CidIFK%2FNmySa7lZLZWtCKqIdvZqNJhZN5UxvnAVs04Pp2FTEh391km8mYXIOySnIcsa%2Bum88rqJpVyuZA1hwSvAdoqfaPfrtEUPNOmulupkTkZQ%2FZMJJaeRngirkr0aa6GDrzhwXEzY2Ot3aSOYNFZ%2BsCyDeqO8B4vqyxgnIyjhua5xhMe7YhUKlDaIm0fq5AqzMfi9dhU31QI1MDrCfJrh0%2FW4vVqlDGRtoYW%2Fjtp0OEkp0ZLl3Gx7VMTCIoD1brCad7mNvY6%2BvksmRvbX4OQp6M9EWIYlUiD3CYN00pVWwB%2FXj7dKr46r2YQaf5y08jYuPCnOgF5p%2F7jsSuVMFUz4a%2BP8qEvdtLqsC036eUWit444eICvf5EJfAHY3HRhouWlnumWTrdmX%2BgiARSqHnFubXFOlNiFSAmXZLQPyZaIISZjHBt%2BitVSLGGi%2Fdjehr2r44dwgKMLUNeJCekwPrdI%2BH4dp%2F5iYCXYMInzPC9Bj740t2W%2BedS6P5MM1hRgoj0HV97rWte7SKMI%2BQxMkGOqUBUvYZbHLNIAqp4YmeCTSX2U6F7b09jwpapW8wjAVZk6UEnYx6O7IlEiTIOSDn%2B2%2FfqZR8mBR%2FSV%2ByR2Cb4sFFig4UIO%2BO6mXSr1nSQocH33D7OGMB53F9Ymhz3Tgxzb%2FyA05ehdj4j6TShuF3E7sI9oaE%2Bj3Rquc2kAJ7zEgAhZevP8zeVx%2Bav6Vhktt9ygJcLcTSYG3oqylLjktW3w13ReIXeKOm&X-Amz-Signature=68efae6f3ca4ec8a3f2cf0eff886ca7760e36ac8f4340d0f3b85a141e63e314a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
