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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7LJUQ4Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaPL0IpE980BWSpDNFJimzQinmI2IGWSIcH0xXGfa%2F7AiBsa2qD7l%2BFevsZK6961D9hTvU6C4zl0hHAn2gBRIGWSCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEH%2FGJHwEKCAtZR7TKtwDqDSe7Re1DyFyr%2FjxQIN9wvpOHTjB5%2BA3IlzyJfzTxHyVdgHUeiSOsOmbY9Tlyi3pVoipbxqYwpUeWORM06Kf4OV8SA6dFwLfLMkqqFzPTMXEFCOkRfegGKxn5kk%2F9yE4v7PedjMKPMMOwTTDLEDX4X3QUi7au3SRYH0jIV%2BDVT3jJPGleCYlfxnSdo5jQyLSAX3GcQvVRtESWHdAIoUafbx1w99TyDl5BVZ0yXy4ruO%2B0F%2FS2PEOAa7M0hizvVE3ym6FjNbYoDKpcEcl7V%2BlXf63ZsVQpw49fSJdvWGFIVbCvQTnO2BBb%2BVCJAwdje4AMOWXVo0v25TXz8YuEZZKBrhyyi9gJ0%2BmL0mpDeW0XvV4CmGzMxZOvC9hpVoG%2FqE9GDjzA%2Bl7QHqhchAubgBSYgRy1B8n8Dc7woTftdGEosIwMwJiGuSSOZufyKEUzWPcvb7Xvvl5bs6Cw5eLBde7mK6D0s1kbxEA1FDZS7v6GbZ9H3caY50Goeo7CcgKO5gxwVUrCzdq3mqAHGTHeeiTs1EowRSDtOMjDxR%2BkBLhjsmVxu1uRw1kqPhL0zdcbw7Z8KdJcdjS7AZpXvJIIhlRqak%2Fb8ce5H36coT3yAjIXgJNhJunRWEKo2XBwOgw483KyQY6pgE0hLo4tF%2FZiYpKFcqhUmcOFaU3A%2B1hjGZds7YhL0l9F1Jt661giu4bI6sfaj6VcWnqEaz9KY4GqB7mw3h24Jf65uVgwKbQ7wKZL0fjBW1G9nPO7v7J%2BV64tmOioVtoUEv880ch6Ghvo5LROTM9l%2BaDUHOqnrEm9V%2B1iSK1W3pgMflSyVuUT4gRVQZg3SjVfPXYafzHIvWrmr6As6ufs6hj5futrDOI&X-Amz-Signature=97f77e0393754e108b349fd2d9f03b2ec453507d4d2b3df43035af68c5b4c8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7LJUQ4Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaPL0IpE980BWSpDNFJimzQinmI2IGWSIcH0xXGfa%2F7AiBsa2qD7l%2BFevsZK6961D9hTvU6C4zl0hHAn2gBRIGWSCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEH%2FGJHwEKCAtZR7TKtwDqDSe7Re1DyFyr%2FjxQIN9wvpOHTjB5%2BA3IlzyJfzTxHyVdgHUeiSOsOmbY9Tlyi3pVoipbxqYwpUeWORM06Kf4OV8SA6dFwLfLMkqqFzPTMXEFCOkRfegGKxn5kk%2F9yE4v7PedjMKPMMOwTTDLEDX4X3QUi7au3SRYH0jIV%2BDVT3jJPGleCYlfxnSdo5jQyLSAX3GcQvVRtESWHdAIoUafbx1w99TyDl5BVZ0yXy4ruO%2B0F%2FS2PEOAa7M0hizvVE3ym6FjNbYoDKpcEcl7V%2BlXf63ZsVQpw49fSJdvWGFIVbCvQTnO2BBb%2BVCJAwdje4AMOWXVo0v25TXz8YuEZZKBrhyyi9gJ0%2BmL0mpDeW0XvV4CmGzMxZOvC9hpVoG%2FqE9GDjzA%2Bl7QHqhchAubgBSYgRy1B8n8Dc7woTftdGEosIwMwJiGuSSOZufyKEUzWPcvb7Xvvl5bs6Cw5eLBde7mK6D0s1kbxEA1FDZS7v6GbZ9H3caY50Goeo7CcgKO5gxwVUrCzdq3mqAHGTHeeiTs1EowRSDtOMjDxR%2BkBLhjsmVxu1uRw1kqPhL0zdcbw7Z8KdJcdjS7AZpXvJIIhlRqak%2Fb8ce5H36coT3yAjIXgJNhJunRWEKo2XBwOgw483KyQY6pgE0hLo4tF%2FZiYpKFcqhUmcOFaU3A%2B1hjGZds7YhL0l9F1Jt661giu4bI6sfaj6VcWnqEaz9KY4GqB7mw3h24Jf65uVgwKbQ7wKZL0fjBW1G9nPO7v7J%2BV64tmOioVtoUEv880ch6Ghvo5LROTM9l%2BaDUHOqnrEm9V%2B1iSK1W3pgMflSyVuUT4gRVQZg3SjVfPXYafzHIvWrmr6As6ufs6hj5futrDOI&X-Amz-Signature=9ad73ef2c949777ef47f1bb111af1c05777f23499710199ab1fdc74ed5b5f073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
