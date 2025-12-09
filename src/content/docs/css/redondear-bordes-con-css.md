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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSSBTET%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F4GlgLjxfEALxyYNqpBCxtiXmQ7lsli6Hbi9e%2B5QDiQIgdRtXRMMhCtzCd5eL3dx%2FCMkDe%2FE25gmulzxGvyDMGXAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkK3DFysTF7so3gYCrcA9uMyqfRpsL5zK4BN9Fp1GTzMbKRRRQ6g%2FgEAkPxuq24GsaPFSpi6e9J7FiFXPqEV0L%2BTfgYHPqZTJ77JSfjBg0I8xQ9ZhvnwJqhqq8Ns%2Bvn9LGPDPvV%2FV2wDcoMbl7A0AUEzkRpGDr6P2ABoY4x6GNLNOj8LYjpnk5FgiR2Nil3%2BNL5GAy5Zg3KMWMP5LqgWjz4cPGPP5VImDOpkN7dJ05uw3eHSx%2BToz7YRDQ45lC8tQjjlWLj60j%2BTqgEDMKebkKgmnVZqp0ICNZRUwyxsKhzMzO59WX07hRHhVGYWMPd7r1jNVyR%2BKeeNZcDZ8BSEIOp7%2FpNdUfac%2BDCDJ1IfxyvoQp16dx4PFN29rr1qeT7mstOzKU1MA6hHd92Qp5DYwqFzVk1u%2Fv8XSJXc7%2FyRsnytuIdNn6smgAyFDOvlr745ZSbQRUcAPrDGaLBCzBLyCUDJ%2BfQen4biCiTzXnUHNAwemVFuvpX4%2Fb80asW961WLsX1qzH04w4O%2F%2FPG6rQpgutfAEppmvKxek%2FC%2F0o9J1qNPJIfFjgnVqohu1OsuV59OdRNDx7gXE7yt87ZYGeqneO2zUXbzqXyo5HqM4GqwrHb1ct%2BeIv6LuEO5aPYS8YOznGAiq1ZY%2FXaydoyMKWH38kGOqUBL3AzuiwYyVQp7yMnFdEAgc2TUGhBVZF1couuyBw96t2YZcrKAt6cToH6J%2BJtNE%2FZB21ZeLowRf5ShRfJo%2FnFKa7rhAZ2HFU%2FW8jjBLAUc2jiObn9xihDz7Sdj97EeQMxkAZPqaOzsIQTURQfkKs%2Bx0vH4a0BWZWlEuRzIyjAMWTWYTpn0ogONYrFtuwpdXJtyrI%2F54phBc0hK%2B93%2FaPnRouXL5fG&X-Amz-Signature=3e8a362d980ff9ef274d9fa4e64a2d97b8d2525da38f852653b4272dec1b0562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSSBTET%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F4GlgLjxfEALxyYNqpBCxtiXmQ7lsli6Hbi9e%2B5QDiQIgdRtXRMMhCtzCd5eL3dx%2FCMkDe%2FE25gmulzxGvyDMGXAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkK3DFysTF7so3gYCrcA9uMyqfRpsL5zK4BN9Fp1GTzMbKRRRQ6g%2FgEAkPxuq24GsaPFSpi6e9J7FiFXPqEV0L%2BTfgYHPqZTJ77JSfjBg0I8xQ9ZhvnwJqhqq8Ns%2Bvn9LGPDPvV%2FV2wDcoMbl7A0AUEzkRpGDr6P2ABoY4x6GNLNOj8LYjpnk5FgiR2Nil3%2BNL5GAy5Zg3KMWMP5LqgWjz4cPGPP5VImDOpkN7dJ05uw3eHSx%2BToz7YRDQ45lC8tQjjlWLj60j%2BTqgEDMKebkKgmnVZqp0ICNZRUwyxsKhzMzO59WX07hRHhVGYWMPd7r1jNVyR%2BKeeNZcDZ8BSEIOp7%2FpNdUfac%2BDCDJ1IfxyvoQp16dx4PFN29rr1qeT7mstOzKU1MA6hHd92Qp5DYwqFzVk1u%2Fv8XSJXc7%2FyRsnytuIdNn6smgAyFDOvlr745ZSbQRUcAPrDGaLBCzBLyCUDJ%2BfQen4biCiTzXnUHNAwemVFuvpX4%2Fb80asW961WLsX1qzH04w4O%2F%2FPG6rQpgutfAEppmvKxek%2FC%2F0o9J1qNPJIfFjgnVqohu1OsuV59OdRNDx7gXE7yt87ZYGeqneO2zUXbzqXyo5HqM4GqwrHb1ct%2BeIv6LuEO5aPYS8YOznGAiq1ZY%2FXaydoyMKWH38kGOqUBL3AzuiwYyVQp7yMnFdEAgc2TUGhBVZF1couuyBw96t2YZcrKAt6cToH6J%2BJtNE%2FZB21ZeLowRf5ShRfJo%2FnFKa7rhAZ2HFU%2FW8jjBLAUc2jiObn9xihDz7Sdj97EeQMxkAZPqaOzsIQTURQfkKs%2Bx0vH4a0BWZWlEuRzIyjAMWTWYTpn0ogONYrFtuwpdXJtyrI%2F54phBc0hK%2B93%2FaPnRouXL5fG&X-Amz-Signature=e374940b445597694898bfbbb687a5aa9fcdabcb6fd48b65793618ed063035ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
