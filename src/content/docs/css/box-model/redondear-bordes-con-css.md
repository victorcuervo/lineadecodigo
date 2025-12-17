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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3HHJAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0SrgMyAPn8KT%2FhPzFxEIuRvui4%2FwEWJsA7Sk2AcRspwIhANVXff0%2Fd4P6kjwCi7cmALp6bn7a1cpTWLiNYHYKflkyKv8DCHwQABoMNjM3NDIzMTgzODA1Igyc3VksZ9MMA4aZFYwq3AN%2FFb24d6O3Vpc3yPTTReUV5gc1%2BILKcsY11ufvBkgQ5WdjgbLK%2B8aHRvoqVfIuLrLMSQ53d8qfz3N%2F0T71OyWNWWuCYtmotZOxoUdP0WczNRv1%2FCnNFtY4xMmp1oQhbxYfhxWHsUDcJmSCdudbe7yCSyFK6S8FTYo4aGcGt%2Fm9sLi1AGfZGSyr3ry7UHpJvOjY2wnJohJHhzV9okSxKJ1h2pVxfthJAiwAFZm0K%2BBcelmDTdHZPIdchW3TxPQT4l58Xroc7r7jjFyD3GHyBBge83P4Is1%2FsiLLTbyEDK%2B8Nx7oV2fUk1pz8rRLVaIdS9JGyHoc2FuT7%2BN03RV1QkHfgQfGmvIjXzHIlCJhhrdk3jlxdo7Nq2qf70l6Ntx4tjeFsBDUL5LWTaqLFJeh3%2FPTKCOs%2BmjpQ%2FMo5hEyPa6KQAsdSZhw39n5YQjdnAiYA8IxNYsY3gd1EDGeMRrWTgrmCDtWQVL6iLbyLYZ8LWI9UHSimpOb%2FqufhRyVmCbWOLb1YFV0Y2qN0Z0Z%2BvhyF8%2BYO99JNxGI5PqmIoaD5WYBG3wn%2FdA2ZXjMRxYYfGPVJzHaPx9Wx%2BJrmSdibBRRtaC5h4nY7EfFSesYixsMAib2D%2BrnlQbjB%2B%2BqiYxOnjDjjorKBjqkATmim83BLr%2Fu16i6iQeNdlbFyKxwRjI0aIlufPY9tKWQsMCaoYx9aK9nQGGJqLrjsKy5p3b3JElqzpiMmCEnkwtV9suJJdKVa9XBNO1K2shtkE4ChQg9kf307yEmQ2uYTP3BgiweJDxPXkJZu2UHzGUNaHVo9mWJh%2Bch2BypElDMElG5aJWa5%2B6f4Kc7bNC29NmHLz9OqVha3DRrpz0A3xTqC8XM&X-Amz-Signature=2c68f24f313975ae5eac7860b8905266ecc6a183aacae6e3b35feca4ddb1f7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3HHJAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0SrgMyAPn8KT%2FhPzFxEIuRvui4%2FwEWJsA7Sk2AcRspwIhANVXff0%2Fd4P6kjwCi7cmALp6bn7a1cpTWLiNYHYKflkyKv8DCHwQABoMNjM3NDIzMTgzODA1Igyc3VksZ9MMA4aZFYwq3AN%2FFb24d6O3Vpc3yPTTReUV5gc1%2BILKcsY11ufvBkgQ5WdjgbLK%2B8aHRvoqVfIuLrLMSQ53d8qfz3N%2F0T71OyWNWWuCYtmotZOxoUdP0WczNRv1%2FCnNFtY4xMmp1oQhbxYfhxWHsUDcJmSCdudbe7yCSyFK6S8FTYo4aGcGt%2Fm9sLi1AGfZGSyr3ry7UHpJvOjY2wnJohJHhzV9okSxKJ1h2pVxfthJAiwAFZm0K%2BBcelmDTdHZPIdchW3TxPQT4l58Xroc7r7jjFyD3GHyBBge83P4Is1%2FsiLLTbyEDK%2B8Nx7oV2fUk1pz8rRLVaIdS9JGyHoc2FuT7%2BN03RV1QkHfgQfGmvIjXzHIlCJhhrdk3jlxdo7Nq2qf70l6Ntx4tjeFsBDUL5LWTaqLFJeh3%2FPTKCOs%2BmjpQ%2FMo5hEyPa6KQAsdSZhw39n5YQjdnAiYA8IxNYsY3gd1EDGeMRrWTgrmCDtWQVL6iLbyLYZ8LWI9UHSimpOb%2FqufhRyVmCbWOLb1YFV0Y2qN0Z0Z%2BvhyF8%2BYO99JNxGI5PqmIoaD5WYBG3wn%2FdA2ZXjMRxYYfGPVJzHaPx9Wx%2BJrmSdibBRRtaC5h4nY7EfFSesYixsMAib2D%2BrnlQbjB%2B%2BqiYxOnjDjjorKBjqkATmim83BLr%2Fu16i6iQeNdlbFyKxwRjI0aIlufPY9tKWQsMCaoYx9aK9nQGGJqLrjsKy5p3b3JElqzpiMmCEnkwtV9suJJdKVa9XBNO1K2shtkE4ChQg9kf307yEmQ2uYTP3BgiweJDxPXkJZu2UHzGUNaHVo9mWJh%2Bch2BypElDMElG5aJWa5%2B6f4Kc7bNC29NmHLz9OqVha3DRrpz0A3xTqC8XM&X-Amz-Signature=720f5fa35cbcc2654eb48a101a4d547d435623cda8211928baa03c42096317bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
