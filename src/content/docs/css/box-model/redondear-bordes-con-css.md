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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RBLHN5V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZ3Nv51uZrEq89KbWW0hFzoc2nphdUkUxWOIN7R%2BtiUAiB9bJ65rxb923K2%2FVsUPxJvPhKx%2BfCYjS4H4feVb%2B7j3Sr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMAedVqHzbivhgI8oFKtwDApvdCcUe047mV6HL56sktjyoU324w5AUbDeaS03BE9XTg6GKoDAdoWo5%2Bq%2BWtNB%2FNasWUNYtbOQ5WJ4ip2jcEHwV%2BkG8K5irAfTVNnZoN7yeDAcLY8pAfaeEfayPhz8j%2FEfGTTrITWI02%2B8nsCw%2FIaMQJt498jfsLU%2Bd8hhmGcykeRixwxuOOc%2Fgofx3ohUdmpRpwWcVjEiY8GbC1YroOoUX5EDJkNReCRymjY7Cxhn8Xciavu7OQ22qeLayxl6ez8cdaUOr0R5dqoW1YoeXgl1l4XWYrhKlWrJywo8%2FjyB0ddIjER8Ju67S4sitYFdKJ230dBGithAdz4RQp68UhkHZD%2FT5SB%2Fub9XyJ%2FTpm8zn2XOtB060lxQhL2GZbMxU6pVLEATpniA30k0%2FZqJIYKv0mFU1KZSiLo24510%2BDQWX2zzVQ%2FveYBKBnOMMfnMrrzc%2FTWGAA1b3ybspb%2BXmBLirWOeZhYJObnGGhTEjRobxQL2EMPvVh4h7Jw4K8Qk%2BN4Ujcsxx55vfdaJ7bI0XDWfz5mDTAeoSTjakLFQHxTD4jD946Mf3z3pjdeDJ5b%2BFATGKQxLbmC%2Fb622BjM6T4wQXnxRn%2BpqxBPUtkM66KqqsSZGXxT4lFTicBJkw7I6KygY6pgEh7e7np4Uubt8hmdHupcy%2F%2BI1wdWTugOAcPkkVPbcgxSpfQmlVpDs%2BytJ%2B9%2BAGOMqK%2BnlQuTbfs6QoFlMqkxqlpmxDomFepdOa4yW2CRZAoJ%2BYFlNnRiwCr9JUxD0B4J4pr7ICWYx3iYF1cm7gnEL0JzXTMiyLHTzDRVAIy1zDoPJsclpXiaIlzj6lwwRRD3kz%2BFpCxQX31%2Fd7cgMTc2K1wONl41kq&X-Amz-Signature=f6847774d8a223157ebe75b0a89bff5602e258aaf32c18eb312b9b1a6218a2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RBLHN5V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZ3Nv51uZrEq89KbWW0hFzoc2nphdUkUxWOIN7R%2BtiUAiB9bJ65rxb923K2%2FVsUPxJvPhKx%2BfCYjS4H4feVb%2B7j3Sr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMAedVqHzbivhgI8oFKtwDApvdCcUe047mV6HL56sktjyoU324w5AUbDeaS03BE9XTg6GKoDAdoWo5%2Bq%2BWtNB%2FNasWUNYtbOQ5WJ4ip2jcEHwV%2BkG8K5irAfTVNnZoN7yeDAcLY8pAfaeEfayPhz8j%2FEfGTTrITWI02%2B8nsCw%2FIaMQJt498jfsLU%2Bd8hhmGcykeRixwxuOOc%2Fgofx3ohUdmpRpwWcVjEiY8GbC1YroOoUX5EDJkNReCRymjY7Cxhn8Xciavu7OQ22qeLayxl6ez8cdaUOr0R5dqoW1YoeXgl1l4XWYrhKlWrJywo8%2FjyB0ddIjER8Ju67S4sitYFdKJ230dBGithAdz4RQp68UhkHZD%2FT5SB%2Fub9XyJ%2FTpm8zn2XOtB060lxQhL2GZbMxU6pVLEATpniA30k0%2FZqJIYKv0mFU1KZSiLo24510%2BDQWX2zzVQ%2FveYBKBnOMMfnMrrzc%2FTWGAA1b3ybspb%2BXmBLirWOeZhYJObnGGhTEjRobxQL2EMPvVh4h7Jw4K8Qk%2BN4Ujcsxx55vfdaJ7bI0XDWfz5mDTAeoSTjakLFQHxTD4jD946Mf3z3pjdeDJ5b%2BFATGKQxLbmC%2Fb622BjM6T4wQXnxRn%2BpqxBPUtkM66KqqsSZGXxT4lFTicBJkw7I6KygY6pgEh7e7np4Uubt8hmdHupcy%2F%2BI1wdWTugOAcPkkVPbcgxSpfQmlVpDs%2BytJ%2B9%2BAGOMqK%2BnlQuTbfs6QoFlMqkxqlpmxDomFepdOa4yW2CRZAoJ%2BYFlNnRiwCr9JUxD0B4J4pr7ICWYx3iYF1cm7gnEL0JzXTMiyLHTzDRVAIy1zDoPJsclpXiaIlzj6lwwRRD3kz%2BFpCxQX31%2Fd7cgMTc2K1wONl41kq&X-Amz-Signature=e8be59844f99fcf1089bc1176ce1cd942cd77c78e0eaf19d6d7068add9c5ec01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
