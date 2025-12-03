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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SP4BANF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBZzPdcUieHcrYoqyPP0sDt5B%2BcZ4iNS38EOo89%2FNALfAiEA23Dky6X2uWbxc8qO4usCnv%2FdwwYGDTYVL08tdh8DL20q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN7Jq6EOByaRJTK91SrcA6NeVJ%2Fl1hKvLTdhZ8Hei4ZSJ%2BE%2FlAXTOK64QKXts7BAPP7IDM6iWcf8lMZz0zRNwHa0fA5YbzG7uSrY2iEbNreaMTNS5Xb6UCX7NcmSqmzaJsTBaSxbTn1MirE9oh3CF4QaR4pyUwZc8ehFThSBblc7cHdb5qUaDy6WYs2vTvNLDwLaEWZDS6yGuMaKrBMgVVZ1YUEOIlFDENghEiKqP%2FmynltqpHZ22svF%2BZdahyzVL3e34m6cLdRPS0A63dPOQ7qRy7wu24gzzK6B5qtIyoq6uuvjlDg9LQEYUf1MuLOXGR%2FMVZ3dRpDAvB7iRZsQIsT76nbOUjo6lHwaTd7K1cWzvbkP7Oitf1zumV9zFRwXox0%2B2SUUtTW%2BVihOHTvhFA0m39KDKbYHzR1B2V3NkW7hY3EcsvHDlKXABoR0QNpBI2C73ORtkuaGv8vepiwoS64%2F3n4KO1CEcbjQQF2zO%2F6s6bJD6vAKTIVxvYVvQ%2BzX%2Bzly4nbBXUb6mWd5h1WxEpEKE2dkSdUpKBywIqARWOCmUHhOgYtTi9W7UbwpwdHN8X3A%2BIzAzeV5Boj6f5c3DOmyd%2FaaUJbgzIIGdC6QSgU4YRsqQ2u8jj3cWNUn9Wz%2FV2SxE4vx9G9Q235eMM33wskGOqUBygPxQM4KR0InBx3Ykz01NtRx565p4w9FyOfmVClj0F6ZeNToV9wWNXOgu%2BwlLJDxn8MEIPZMxP9vTRGOpP%2BtXj4e3ujTSKMGGPb2RtHyFiW%2Fw2jnpJPwsVk3H%2FqsGtoBQuwmOGgaxzuRMHhjhMbBUQdV%2B1upXKuHJDdqYMjDu%2BnayQMxXE5uI0I5UZ%2F1LUPGQueGn13uB2EjMW6JjLh1iG8y9ilK&X-Amz-Signature=bb63a84f02a383e9f967365a7ecacbad070efbe61a6c9b5cb7a326ff0f8a3c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SP4BANF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBZzPdcUieHcrYoqyPP0sDt5B%2BcZ4iNS38EOo89%2FNALfAiEA23Dky6X2uWbxc8qO4usCnv%2FdwwYGDTYVL08tdh8DL20q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN7Jq6EOByaRJTK91SrcA6NeVJ%2Fl1hKvLTdhZ8Hei4ZSJ%2BE%2FlAXTOK64QKXts7BAPP7IDM6iWcf8lMZz0zRNwHa0fA5YbzG7uSrY2iEbNreaMTNS5Xb6UCX7NcmSqmzaJsTBaSxbTn1MirE9oh3CF4QaR4pyUwZc8ehFThSBblc7cHdb5qUaDy6WYs2vTvNLDwLaEWZDS6yGuMaKrBMgVVZ1YUEOIlFDENghEiKqP%2FmynltqpHZ22svF%2BZdahyzVL3e34m6cLdRPS0A63dPOQ7qRy7wu24gzzK6B5qtIyoq6uuvjlDg9LQEYUf1MuLOXGR%2FMVZ3dRpDAvB7iRZsQIsT76nbOUjo6lHwaTd7K1cWzvbkP7Oitf1zumV9zFRwXox0%2B2SUUtTW%2BVihOHTvhFA0m39KDKbYHzR1B2V3NkW7hY3EcsvHDlKXABoR0QNpBI2C73ORtkuaGv8vepiwoS64%2F3n4KO1CEcbjQQF2zO%2F6s6bJD6vAKTIVxvYVvQ%2BzX%2Bzly4nbBXUb6mWd5h1WxEpEKE2dkSdUpKBywIqARWOCmUHhOgYtTi9W7UbwpwdHN8X3A%2BIzAzeV5Boj6f5c3DOmyd%2FaaUJbgzIIGdC6QSgU4YRsqQ2u8jj3cWNUn9Wz%2FV2SxE4vx9G9Q235eMM33wskGOqUBygPxQM4KR0InBx3Ykz01NtRx565p4w9FyOfmVClj0F6ZeNToV9wWNXOgu%2BwlLJDxn8MEIPZMxP9vTRGOpP%2BtXj4e3ujTSKMGGPb2RtHyFiW%2Fw2jnpJPwsVk3H%2FqsGtoBQuwmOGgaxzuRMHhjhMbBUQdV%2B1upXKuHJDdqYMjDu%2BnayQMxXE5uI0I5UZ%2F1LUPGQueGn13uB2EjMW6JjLh1iG8y9ilK&X-Amz-Signature=cd58460bd441b1e5a794bd7c8c208a73418f78257dd2d5b719639fa097296a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
