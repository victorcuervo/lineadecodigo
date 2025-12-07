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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5GMZ64%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqxktxUL%2Bf7I1zvXeiqkE7N0XTdbCYRH19zfc7hyGfWAiBlzOKqRC%2FbwA3q0t9Ve%2FE%2FTNi06wC2PhmgJmZkDEjybCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj3LO2aEN8TrPIAvdKtwDB%2BEO39bpUNhkKfwR9XvZBiDvzy4ZKFuLyV5eDVsTEn81%2B8kEEfEV17W7SA0XmJ5zjuDzVRzItTYKD1qt42sQ9JO5k1DlVqBggCXWTupsyAZCh14NzJ%2BU7g2o9OvsxPLmWOtyvKTIwocU5qF04ld8E66Y0lVdFNPdSV95p1euJpE1qrbFZfRSJV9ekyTFzp9rsmlKMW%2FyPQLPR1w9jlsUGfINc6hoKN%2FfF%2FkrWiiKLqLnl7qAJgS%2B27tVgrKKQl6KRZM08XfvvZWO90lgPou7tMC9j76CIlcpn0ykB2MbdjcPWEsw0y6nHQWunYgiOElcg5S8a7kXNYZngMTeD0t0tjGXexWN%2FlG1YFYr1VpBu%2Fw0b1TSXVpAnD5J2k1bYoTCi9klgDYfC1Vt1mfvGYqIBYh6BlvWwEA2v5nVdGM%2Bo2fdPn%2BCqXwTLMPd6IyOmmekPnbmp%2FjEJfiQV2MSK9Tz%2BUDyrMQG1jLeXsy2OI8h6Ytzec%2FBHSwKTYcgHkVJs%2BN9y9jvkhtID3Y1sX6KqN34KUrLyHcej9QYgrpGiwciaI4EX0U0VXdL9feRMksox2BJeZgQPEXmS0jC4xGwOJ0S%2Bm2HxuaUa0YfphZw%2FONqz8iHTfPa6L8z5J23LEcw%2B7rWyQY6pgEyscASCnsbxC2oc%2Bi4fFm10NNR9HibgdPmBnuRyzEkg3ph83v1%2FDwysbDOpIwCB%2Fn0SYF29vMx67txq%2F2v7%2F0sS2n86dHz%2FS0SxLMDbQuHIWsyMMEPpwl8H3tiI82ytu%2Bx6cFBzlrJW%2FY9yWqPyZOakSs%2FrTHjL04PP%2B8PNZqVU6k6HKfcwCoKx1%2BYo5OoYbe1uQzDCfPfQuFn%2FxGKPQysjO7TSm1G&X-Amz-Signature=1f7c8453f7693f6e9feff538119cb647d3947a1837986a18433137e818318893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5GMZ64%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqxktxUL%2Bf7I1zvXeiqkE7N0XTdbCYRH19zfc7hyGfWAiBlzOKqRC%2FbwA3q0t9Ve%2FE%2FTNi06wC2PhmgJmZkDEjybCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj3LO2aEN8TrPIAvdKtwDB%2BEO39bpUNhkKfwR9XvZBiDvzy4ZKFuLyV5eDVsTEn81%2B8kEEfEV17W7SA0XmJ5zjuDzVRzItTYKD1qt42sQ9JO5k1DlVqBggCXWTupsyAZCh14NzJ%2BU7g2o9OvsxPLmWOtyvKTIwocU5qF04ld8E66Y0lVdFNPdSV95p1euJpE1qrbFZfRSJV9ekyTFzp9rsmlKMW%2FyPQLPR1w9jlsUGfINc6hoKN%2FfF%2FkrWiiKLqLnl7qAJgS%2B27tVgrKKQl6KRZM08XfvvZWO90lgPou7tMC9j76CIlcpn0ykB2MbdjcPWEsw0y6nHQWunYgiOElcg5S8a7kXNYZngMTeD0t0tjGXexWN%2FlG1YFYr1VpBu%2Fw0b1TSXVpAnD5J2k1bYoTCi9klgDYfC1Vt1mfvGYqIBYh6BlvWwEA2v5nVdGM%2Bo2fdPn%2BCqXwTLMPd6IyOmmekPnbmp%2FjEJfiQV2MSK9Tz%2BUDyrMQG1jLeXsy2OI8h6Ytzec%2FBHSwKTYcgHkVJs%2BN9y9jvkhtID3Y1sX6KqN34KUrLyHcej9QYgrpGiwciaI4EX0U0VXdL9feRMksox2BJeZgQPEXmS0jC4xGwOJ0S%2Bm2HxuaUa0YfphZw%2FONqz8iHTfPa6L8z5J23LEcw%2B7rWyQY6pgEyscASCnsbxC2oc%2Bi4fFm10NNR9HibgdPmBnuRyzEkg3ph83v1%2FDwysbDOpIwCB%2Fn0SYF29vMx67txq%2F2v7%2F0sS2n86dHz%2FS0SxLMDbQuHIWsyMMEPpwl8H3tiI82ytu%2Bx6cFBzlrJW%2FY9yWqPyZOakSs%2FrTHjL04PP%2B8PNZqVU6k6HKfcwCoKx1%2BYo5OoYbe1uQzDCfPfQuFn%2FxGKPQysjO7TSm1G&X-Amz-Signature=68bca1f7c37f452d5c1882f4a731fe81cac3bccdaf85f733ab12acd30941d100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
