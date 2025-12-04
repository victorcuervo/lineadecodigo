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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3ZEKB3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAznqkw9lbnJ0Ol8vcRQjLudy6cusBFXepoAb6sdLXldAiEAheKgkOR2m3lETaqrL8zoDIv0Msm%2BgeRdB7wwfdBqEIsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIsH11wpLFA31TJZ2yrcAyuwAS1Q%2BJdzniwh4Wih3b%2BBaAV8hutZwW18JVkI0B2j7Lkz1do%2BLo%2FE3TElX5jBGV9rv%2FQGvCVuQUNM1TZu0BgYD7130AzWzrZwcBrxUKkNFabYj3adVAwfgT55L1uZQNk%2BxN5eBlzyCDHtLm%2BHUOD0FOTJSLi7MtT0qDq0s1zWstNnMGAp3bXsqc1I5fliwhs7VBB1QyK5pBrbATLatbgbEwZbNyBhFeGpYUvN8o7xxHgE2E6KCBxHbFb8iqi5YJR308X5Nv%2Fm%2FOT04aheBeDKaAhEH55uyVbXhBrhhP4U0Vtu4ee7jQ24EFr6HC9rd8LrGgV66rgByZFbIrkSRJ86nLHLhit6B7OJMvZsir4%2Fn%2BRH06%2B3l6J0xf9%2Fy8ZqyIXaRK%2Foz37GsPq6z11j7E9JEl7yfqbYz2joH1OJP9L7sYEEFNhCbgRNmwbSJnbHKFz1tPI4kG7dXvRtXtEsNVrqq59m0YUeTd1lFy1g66XaDXLqiBYYSJPXiP2Yy2mnh%2BdKeuNuKc%2Fqud5LWsu1qF2I3Q3p9%2FdZ1deZyLyUimJ8Axf7N%2Bd2YQeLa1PpVAjbSVvREWwYqyieYDLbJfK5HdZ0xvr9GqB44Ju%2Fot57HWFB1X2oK2%2BCCXKbcPg0MNigxskGOqUBvlxa4M%2BUoCqkZZhaLf1jtKOfwMwETWnLXDy6EAvfanChck5EYFUwefletTQHHJNk6gH8ibye9el4HoLHLiyyDMt1L5KLptkaVI5io6w3Se3CEr8Vvxd7I7qJU101xv%2BvM%2Fr2Olc6GZZE8goL4xvvr9y30x76v4gmMtCT9rtET9Kv0oehQWmM7Q1a3Z6beF1aX1n8hMN%2BeM%2FsyH%2BDXO5FNtFfjx2u&X-Amz-Signature=31eb9855c2ce0287cfbbe86721f5dd0299f7a0fa8441012d98e38f45a0dacb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3ZEKB3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAznqkw9lbnJ0Ol8vcRQjLudy6cusBFXepoAb6sdLXldAiEAheKgkOR2m3lETaqrL8zoDIv0Msm%2BgeRdB7wwfdBqEIsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIsH11wpLFA31TJZ2yrcAyuwAS1Q%2BJdzniwh4Wih3b%2BBaAV8hutZwW18JVkI0B2j7Lkz1do%2BLo%2FE3TElX5jBGV9rv%2FQGvCVuQUNM1TZu0BgYD7130AzWzrZwcBrxUKkNFabYj3adVAwfgT55L1uZQNk%2BxN5eBlzyCDHtLm%2BHUOD0FOTJSLi7MtT0qDq0s1zWstNnMGAp3bXsqc1I5fliwhs7VBB1QyK5pBrbATLatbgbEwZbNyBhFeGpYUvN8o7xxHgE2E6KCBxHbFb8iqi5YJR308X5Nv%2Fm%2FOT04aheBeDKaAhEH55uyVbXhBrhhP4U0Vtu4ee7jQ24EFr6HC9rd8LrGgV66rgByZFbIrkSRJ86nLHLhit6B7OJMvZsir4%2Fn%2BRH06%2B3l6J0xf9%2Fy8ZqyIXaRK%2Foz37GsPq6z11j7E9JEl7yfqbYz2joH1OJP9L7sYEEFNhCbgRNmwbSJnbHKFz1tPI4kG7dXvRtXtEsNVrqq59m0YUeTd1lFy1g66XaDXLqiBYYSJPXiP2Yy2mnh%2BdKeuNuKc%2Fqud5LWsu1qF2I3Q3p9%2FdZ1deZyLyUimJ8Axf7N%2Bd2YQeLa1PpVAjbSVvREWwYqyieYDLbJfK5HdZ0xvr9GqB44Ju%2Fot57HWFB1X2oK2%2BCCXKbcPg0MNigxskGOqUBvlxa4M%2BUoCqkZZhaLf1jtKOfwMwETWnLXDy6EAvfanChck5EYFUwefletTQHHJNk6gH8ibye9el4HoLHLiyyDMt1L5KLptkaVI5io6w3Se3CEr8Vvxd7I7qJU101xv%2BvM%2Fr2Olc6GZZE8goL4xvvr9y30x76v4gmMtCT9rtET9Kv0oehQWmM7Q1a3Z6beF1aX1n8hMN%2BeM%2FsyH%2BDXO5FNtFfjx2u&X-Amz-Signature=dbf84c98b3303ad3d58a04f75563d58d9c81b1649a19a380ce1774982ad3356a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
