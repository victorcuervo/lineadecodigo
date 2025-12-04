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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMU27VEL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCilg2ftvzql6orFpsq85K2hjNKv5DwUXtIhTg23dzSogIhAL%2B4Slh9BRO3GSkrGV3ySCfSN2E21HYkGY3bG3%2FmFLYqKv8DCDsQABoMNjM3NDIzMTgzODA1IgxfMp8tPCmTSYQ6ABIq3AP%2B0L0VRBuT5BPVTrS314JmatMrGsbOgD%2BeaYM2njV7sJ0HdZut3fFTvALjSm4qMxnjIqLkkYFQ8jfJK2HD8gAakc%2BjfB8ggZqgw9aBRAbRMmEt9XXOCqgSgjJ4tGsiq8BCyVzvsTbSBPirTndiOzFYxxXPIejl2%2BJ946CHGFWEybxQ3BWfArgeRPwSzEIcCAmyPPHDyAirljQDn29xTT1NmluZcg8ewG3hJVd%2BLsQFKtJngwEDmNjP8vwP58CNIJYzYrLkAJ2PJPNjHEJ0LMkq8PIggWpzbxpObJZWsRW4EGB6lHgNbRFxdK4XVsUfI0wvPQb2ZPNvnBuNfY2uDUvE7Vi91fvAtENSO8tGLoZbHwusBYdCH7v5OhnAr%2BV8LseLZgzFF13qpSC43OmOQX5xrtAZkQoNeSTfWoR%2FEVGZhxp7hpzDA7OCnaxrzucvp7CDc%2BUIB8gL8%2FQRzucxqRMfGeUmL0bp6ukkBRqEOgH6dJi7U21sTBxg88gDclMefEK6LZS8NahMEPziAes4Cs%2BnIUlxbjfhkON9pA7s%2B0ysrS82j6eVbbKtP1ynPlZRMusAH6JUF%2B1JC6iCm4ZD3yOKny7hw8ltdIjVNFpteuIWR%2F6W5zzC39FVNnc%2BpjCm1MPJBjqkAfsny%2B%2FjwT9pGDdrzxmGRY9opsbZyi2XVi8v%2BbhoIzZ44j0%2FMtNriNsrXeO%2FBNKMvcelbVvepkko7cOglD1DG6zACHPi5DE%2FtJZJOnfvf3JmMCa7WAKTNpiHqt5%2B4Ogbqto2toWt8Ywp7R%2Fh04AOiMvW6sWjIM4iewp%2FuJITyMb%2BhwFsmMu6SjZNI%2Bm60LG37VaEe3XITt3ukadnF84skhA%2F3xos&X-Amz-Signature=6b0382f9f788fec7ce005168066482828710c9bf013a28575c0eaad00fcc4ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMU27VEL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCilg2ftvzql6orFpsq85K2hjNKv5DwUXtIhTg23dzSogIhAL%2B4Slh9BRO3GSkrGV3ySCfSN2E21HYkGY3bG3%2FmFLYqKv8DCDsQABoMNjM3NDIzMTgzODA1IgxfMp8tPCmTSYQ6ABIq3AP%2B0L0VRBuT5BPVTrS314JmatMrGsbOgD%2BeaYM2njV7sJ0HdZut3fFTvALjSm4qMxnjIqLkkYFQ8jfJK2HD8gAakc%2BjfB8ggZqgw9aBRAbRMmEt9XXOCqgSgjJ4tGsiq8BCyVzvsTbSBPirTndiOzFYxxXPIejl2%2BJ946CHGFWEybxQ3BWfArgeRPwSzEIcCAmyPPHDyAirljQDn29xTT1NmluZcg8ewG3hJVd%2BLsQFKtJngwEDmNjP8vwP58CNIJYzYrLkAJ2PJPNjHEJ0LMkq8PIggWpzbxpObJZWsRW4EGB6lHgNbRFxdK4XVsUfI0wvPQb2ZPNvnBuNfY2uDUvE7Vi91fvAtENSO8tGLoZbHwusBYdCH7v5OhnAr%2BV8LseLZgzFF13qpSC43OmOQX5xrtAZkQoNeSTfWoR%2FEVGZhxp7hpzDA7OCnaxrzucvp7CDc%2BUIB8gL8%2FQRzucxqRMfGeUmL0bp6ukkBRqEOgH6dJi7U21sTBxg88gDclMefEK6LZS8NahMEPziAes4Cs%2BnIUlxbjfhkON9pA7s%2B0ysrS82j6eVbbKtP1ynPlZRMusAH6JUF%2B1JC6iCm4ZD3yOKny7hw8ltdIjVNFpteuIWR%2F6W5zzC39FVNnc%2BpjCm1MPJBjqkAfsny%2B%2FjwT9pGDdrzxmGRY9opsbZyi2XVi8v%2BbhoIzZ44j0%2FMtNriNsrXeO%2FBNKMvcelbVvepkko7cOglD1DG6zACHPi5DE%2FtJZJOnfvf3JmMCa7WAKTNpiHqt5%2B4Ogbqto2toWt8Ywp7R%2Fh04AOiMvW6sWjIM4iewp%2FuJITyMb%2BhwFsmMu6SjZNI%2Bm60LG37VaEe3XITt3ukadnF84skhA%2F3xos&X-Amz-Signature=30e632d5cef188d773cadf449b4927f5bc36d0a842482be817a812f8ab4b87c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
