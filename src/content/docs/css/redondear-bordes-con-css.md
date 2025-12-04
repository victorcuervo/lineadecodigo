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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGG6KIZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCID3WFvCM4US9VucPPYASGMHbv2nZ7aZQLAn1mxQoU3dVAiBKCPi1MR32iqHzUJ%2FC%2FBmt%2BGdtj%2FTs68PdlTQl0PUtQCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMRxVw0OvlWWlOVxJHKtwDtj1F0QtUXsXjLXK8ct348IFQaqGlSAw6py9d0qqdbPmVWif70PD%2Fltr%2B%2FOYrdLxbywD074VB9h%2B5m4pfTpXKqx7VCopt1zVzPCcEWDvgRFIJ1D12mZmjeIVb4Rnt5oCarxHQNA8h7oM8%2BJVAyzPlgSE3gjrOBr3pbVPjTgOHihxdB6wTxaHP%2B7bIllPn3cL9puqfYT%2FSrC%2FeYnGx1C2gFalpdNFJoctT0p6YQlkXOcATfhof7uA5dsbBecbK2dXq8aZynHj4pJqIYoCZ2I8fUVtHgnPAJSzrxaBW43Uezh4x47CJYdVy0iQ4%2B%2F7GJc%2Bm27EVt4OpJ8rr%2Bq14O76VL1UpfETemFv7TKjFHZZXAYwmnVIbsxnVerJY9NTIB5wM8Ab47glll0XDwFq6O0IWv9HxZmSnwjCbXoV5xKEDp382F%2B2wwpf6OVkHmmS1qiWJAqk2s8P%2FFrbJDshPhRnYQ7Y3vs9uNwa%2F%2BTepAntm8YGK3JYBxPGQ42hPkLCqVdoqwW%2F5n4UV6XKo2mhxzKE2EvIS6qX7MUD9oDFXXkcdbIMIDZnflDgiq1qsZ6KDrzlmeWoqaIkUojagAM4%2B%2B2KvxBkJf%2FHjZsEldN7loN8kP9wKyy7uAJ2nNYtB5Bcwya3EyQY6pgEPARpEamgmpXviG1GMI8T82TvQS8%2Fl3ubKirMW7vctkFD1g6LE3S7RWSGcfD7esHlSi3og9WR9vXioTyM3sMsUB1lT2RX%2FBJD4q9jI%2FeJfeuvErv%2FhI3Vgvv6aAPzoG89P7%2FV44TuQnm4I8f8jcSMSXFaR9sEN17b90sJZi3dpTcgTy21Re39%2FisRCWy93al8udbMFOQkrFIEhPId8L8B9EtHVnLWA&X-Amz-Signature=87d64640fac7f9bb2a48a85abc039e8f88c91205a70ceaa862d956cd10915f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGG6KIZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCID3WFvCM4US9VucPPYASGMHbv2nZ7aZQLAn1mxQoU3dVAiBKCPi1MR32iqHzUJ%2FC%2FBmt%2BGdtj%2FTs68PdlTQl0PUtQCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMRxVw0OvlWWlOVxJHKtwDtj1F0QtUXsXjLXK8ct348IFQaqGlSAw6py9d0qqdbPmVWif70PD%2Fltr%2B%2FOYrdLxbywD074VB9h%2B5m4pfTpXKqx7VCopt1zVzPCcEWDvgRFIJ1D12mZmjeIVb4Rnt5oCarxHQNA8h7oM8%2BJVAyzPlgSE3gjrOBr3pbVPjTgOHihxdB6wTxaHP%2B7bIllPn3cL9puqfYT%2FSrC%2FeYnGx1C2gFalpdNFJoctT0p6YQlkXOcATfhof7uA5dsbBecbK2dXq8aZynHj4pJqIYoCZ2I8fUVtHgnPAJSzrxaBW43Uezh4x47CJYdVy0iQ4%2B%2F7GJc%2Bm27EVt4OpJ8rr%2Bq14O76VL1UpfETemFv7TKjFHZZXAYwmnVIbsxnVerJY9NTIB5wM8Ab47glll0XDwFq6O0IWv9HxZmSnwjCbXoV5xKEDp382F%2B2wwpf6OVkHmmS1qiWJAqk2s8P%2FFrbJDshPhRnYQ7Y3vs9uNwa%2F%2BTepAntm8YGK3JYBxPGQ42hPkLCqVdoqwW%2F5n4UV6XKo2mhxzKE2EvIS6qX7MUD9oDFXXkcdbIMIDZnflDgiq1qsZ6KDrzlmeWoqaIkUojagAM4%2B%2B2KvxBkJf%2FHjZsEldN7loN8kP9wKyy7uAJ2nNYtB5Bcwya3EyQY6pgEPARpEamgmpXviG1GMI8T82TvQS8%2Fl3ubKirMW7vctkFD1g6LE3S7RWSGcfD7esHlSi3og9WR9vXioTyM3sMsUB1lT2RX%2FBJD4q9jI%2FeJfeuvErv%2FhI3Vgvv6aAPzoG89P7%2FV44TuQnm4I8f8jcSMSXFaR9sEN17b90sJZi3dpTcgTy21Re39%2FisRCWy93al8udbMFOQkrFIEhPId8L8B9EtHVnLWA&X-Amz-Signature=0163718cef458b28beef6737ac180540d602985b0eac883e452e2850645d24e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
