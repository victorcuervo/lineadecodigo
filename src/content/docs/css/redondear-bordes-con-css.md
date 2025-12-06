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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWZS3EE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZjNDII%2B4DO8l%2BfTI6FAiYL52jOhq%2B6JtIOVUBYG9dgAiEArl7IzWUuAmD2RpzwWD3Zg2ShKpsRwaNXyxRADwZKJA8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEjlGjLA%2BMjlwgW2LyrcA9fHd1m5MhZLWt3PcE2vtkerPChyovONJFqNMZekOJNZlQEYrf6TBJqG1ARHjfCIWc7ls%2BA5t87AnhZDLsrJhtDrdLmDocwZRSb4hah9AnZxVoFBIin4f950ci6ShbNgDCa4YyvmzT8ttpvJZg4fojKMSzz%2BT34%2BgtyWrmiT4YfP6KGqj5J%2F8Ja2UH13usrfefVofwRlGvOA%2FVz%2BMNhEgycg4wXGb%2Bfwf73u%2BwlyQNcczNyGd9awyubKggJ0QNPAY2iIVa0F%2B%2Bk%2FV3ns82SEULpQZ%2FOhWkhNiiCql1ZtWeU2I86RMO4tovHfIxdzGYq16JKMoKd%2FNmeXoSF5nlCMkOgojMcAgsnReIGb6rxH2D12sY%2BdEHv9oX38Z%2BmjGDy0ozKJvsDaKFm88S1U0AaVJ4u0ycFyRJjTnOyD06%2B1jsSRw%2BxKAF7x0Iu1DQx3FQJxg9LfAMDGUGeJOj42hgrek5MwlGTFrEQ21w0uHRXLkbxFADNRVtJWqr9LIYCbyEzPcgvTG%2BfwE%2FRb3SfO%2FvbIisGv%2Bo5GbJrpdXXrsVQZ8XR1dbzkeEDL7C8nL%2BYWC0aDm%2Frzs2ttTLvJnvNzxEmY7CdBCQQmdwgBDz84sXqTyOwRe4MoqM8PpS4nOU1FMJbI0ckGOqUBjV2s4uZfBFuHaa6rqtJ61KvMOYrFv3T6HV7obyDrWi0GvXvzHfq66us6cqnQ7kf%2FfpaqP3O6ewsSQAH6yE3oBXJkr84ZhFmIU6goLPmZuRyZkiBRo1Njqs4RW0xZ0fAlXgVkH7nSaN3ifmHJ6vLOPwXuJO%2BoxDHMkRzIO%2ByVqb9QhL2d8EZSQYjVRgg1QUSZ%2Fvs%2BK0RC0es%2B4ebSqr23au1gYOoE&X-Amz-Signature=7c60a9cb71405df09dd9677148be07295d76c0f508d845ab0a4de257e8bf2393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWZS3EE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZjNDII%2B4DO8l%2BfTI6FAiYL52jOhq%2B6JtIOVUBYG9dgAiEArl7IzWUuAmD2RpzwWD3Zg2ShKpsRwaNXyxRADwZKJA8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEjlGjLA%2BMjlwgW2LyrcA9fHd1m5MhZLWt3PcE2vtkerPChyovONJFqNMZekOJNZlQEYrf6TBJqG1ARHjfCIWc7ls%2BA5t87AnhZDLsrJhtDrdLmDocwZRSb4hah9AnZxVoFBIin4f950ci6ShbNgDCa4YyvmzT8ttpvJZg4fojKMSzz%2BT34%2BgtyWrmiT4YfP6KGqj5J%2F8Ja2UH13usrfefVofwRlGvOA%2FVz%2BMNhEgycg4wXGb%2Bfwf73u%2BwlyQNcczNyGd9awyubKggJ0QNPAY2iIVa0F%2B%2Bk%2FV3ns82SEULpQZ%2FOhWkhNiiCql1ZtWeU2I86RMO4tovHfIxdzGYq16JKMoKd%2FNmeXoSF5nlCMkOgojMcAgsnReIGb6rxH2D12sY%2BdEHv9oX38Z%2BmjGDy0ozKJvsDaKFm88S1U0AaVJ4u0ycFyRJjTnOyD06%2B1jsSRw%2BxKAF7x0Iu1DQx3FQJxg9LfAMDGUGeJOj42hgrek5MwlGTFrEQ21w0uHRXLkbxFADNRVtJWqr9LIYCbyEzPcgvTG%2BfwE%2FRb3SfO%2FvbIisGv%2Bo5GbJrpdXXrsVQZ8XR1dbzkeEDL7C8nL%2BYWC0aDm%2Frzs2ttTLvJnvNzxEmY7CdBCQQmdwgBDz84sXqTyOwRe4MoqM8PpS4nOU1FMJbI0ckGOqUBjV2s4uZfBFuHaa6rqtJ61KvMOYrFv3T6HV7obyDrWi0GvXvzHfq66us6cqnQ7kf%2FfpaqP3O6ewsSQAH6yE3oBXJkr84ZhFmIU6goLPmZuRyZkiBRo1Njqs4RW0xZ0fAlXgVkH7nSaN3ifmHJ6vLOPwXuJO%2BoxDHMkRzIO%2ByVqb9QhL2d8EZSQYjVRgg1QUSZ%2Fvs%2BK0RC0es%2B4ebSqr23au1gYOoE&X-Amz-Signature=da7fd702e6e6d021f0165f978f0cb521a09233524d0511680732b4884aa44a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
