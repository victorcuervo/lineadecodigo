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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBZMA5E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvMOdb3XX%2BEwCgtemcQXOIGd%2Fgp%2FIilTSHcNquQxNp6AiAwCOULaKxG7cW%2B%2F1uz9UuQHCJiatmGIYNicrmI4cth5Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM3KHjDbhkmhrW19sIKtwD6hHzpLDpgWKtudV6y8%2Bl6cDhEnVf4hhqqU25G8%2FfTjTKsTUUMmxEdwfa%2Be4Xwy1iOG8egAvUTpy%2Fp%2FdlAs2branjqoJMA2mpy%2FX%2F89xhFnS0a1c%2BHwO3aVjxeGtNR84kuShVC7ZaI3kfArO%2BgUSaPuTBzURsKrxYMfQ3XKWqRKt10rOsxY8WWP3X0yXXdosdwRg1ivEn4UPejqutIYZfz5CFm9yMHv7OTsipf4Qwx9D6PIBSUj2KdP5uWGdKNP%2BEf9c7ClOGnnXJa91b9KKX51z%2FD9UWGn7AJGKLcL22doTdAeLR0NDBGeMW0oUsj9hjnVcAL4lcZlY7nlzA2VLwmIpAWlW%2BhIh0NHOdTtGi5qwWnVtzo5YmAwbb0bfO7xQoOTgs%2BGiOXe8dPiGQDDZLvEwKt20EZledGFi6RHZOdELpeGKTaESCEU7Gr738p5TzaXsHAd1ljFDqP8xyji2GQiaczMWAH3ggvPhQAjwis2A8wXxwhX%2BXycH%2B7opTquwEn7%2FeOwdBjfQySKWw1Tu7NtpPI0FBYpXxyAsmxFO%2BV%2FmaV%2FFF8YPTtDFd0Cr%2BmIViNapPV08jsa5zP6fgtf%2BjLRl6iKGmigHGlo9UFHClUAc5%2BI2lqMksbV0QAHcwzP%2FMyQY6pgHqwClsSyBRkzKDl40%2Fl6Hni%2FG7yRcmbpyuYjSaIxT8A2PYjwOMv9iJYvFa3e%2F3jpEqogj7jTqv8cjkA0yH3SK8e8r1IOjoFGiOhop3B3B6ysr%2F31neIH%2FyaBY7dtjW%2BlmEkBO3lLywWh%2BDfk1P7uvdAE3OpiGC2XLtX1hbAHPXXsNBd95pZzoW8DXHY1G1SyFF24ufxmN%2FSkP7giftCNvi%2BkngAdOS&X-Amz-Signature=c4deb800c4d95f373baf38f115d7ea204defcdf46c0e5c6138c510b98b6a5106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBZMA5E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvMOdb3XX%2BEwCgtemcQXOIGd%2Fgp%2FIilTSHcNquQxNp6AiAwCOULaKxG7cW%2B%2F1uz9UuQHCJiatmGIYNicrmI4cth5Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM3KHjDbhkmhrW19sIKtwD6hHzpLDpgWKtudV6y8%2Bl6cDhEnVf4hhqqU25G8%2FfTjTKsTUUMmxEdwfa%2Be4Xwy1iOG8egAvUTpy%2Fp%2FdlAs2branjqoJMA2mpy%2FX%2F89xhFnS0a1c%2BHwO3aVjxeGtNR84kuShVC7ZaI3kfArO%2BgUSaPuTBzURsKrxYMfQ3XKWqRKt10rOsxY8WWP3X0yXXdosdwRg1ivEn4UPejqutIYZfz5CFm9yMHv7OTsipf4Qwx9D6PIBSUj2KdP5uWGdKNP%2BEf9c7ClOGnnXJa91b9KKX51z%2FD9UWGn7AJGKLcL22doTdAeLR0NDBGeMW0oUsj9hjnVcAL4lcZlY7nlzA2VLwmIpAWlW%2BhIh0NHOdTtGi5qwWnVtzo5YmAwbb0bfO7xQoOTgs%2BGiOXe8dPiGQDDZLvEwKt20EZledGFi6RHZOdELpeGKTaESCEU7Gr738p5TzaXsHAd1ljFDqP8xyji2GQiaczMWAH3ggvPhQAjwis2A8wXxwhX%2BXycH%2B7opTquwEn7%2FeOwdBjfQySKWw1Tu7NtpPI0FBYpXxyAsmxFO%2BV%2FmaV%2FFF8YPTtDFd0Cr%2BmIViNapPV08jsa5zP6fgtf%2BjLRl6iKGmigHGlo9UFHClUAc5%2BI2lqMksbV0QAHcwzP%2FMyQY6pgHqwClsSyBRkzKDl40%2Fl6Hni%2FG7yRcmbpyuYjSaIxT8A2PYjwOMv9iJYvFa3e%2F3jpEqogj7jTqv8cjkA0yH3SK8e8r1IOjoFGiOhop3B3B6ysr%2F31neIH%2FyaBY7dtjW%2BlmEkBO3lLywWh%2BDfk1P7uvdAE3OpiGC2XLtX1hbAHPXXsNBd95pZzoW8DXHY1G1SyFF24ufxmN%2FSkP7giftCNvi%2BkngAdOS&X-Amz-Signature=cff9fc0fc402105aa110a0ccf309e51f4f34449007a33a87175eaa0ac52797a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
