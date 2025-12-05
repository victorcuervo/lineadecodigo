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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYAZGMG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc1VWCPbGGxDZUFRr4aW0%2BoxwqNKtT0QkKQ3E8WjL5XAiBFrTEvb96%2BL%2B00ecqWhebUsqHHxdSgKMamHyvhwAE8QCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMVLd2g%2BzI%2B1rI079kKtwDd8ADr%2FPigaPC1j7OYMZ7i%2BDndcaHETASjnlQLaPix18kWdzVvQYCyXncUNWSgr6Y0CXbo02ua2acUCxgL95CT9ankgDbnBo0Sh%2Bad95EyWphy%2B5ooeJmV29kRhllavj60pANAhctPcIy7J9OZbrrkoP1%2Fu9IKvEE%2B%2FLZ9%2B%2Fi8NiTsi8lMSVI0eyPz1%2BJNFAAwjbmcl4f%2FOHMU52nd6oGjqv1LOKm%2Bx2PDuGGmjuiOopBKMiWvr9yxd5MGCVyvedm%2BUMG9hPw8I6WK10QYvObjXP3AOo9dhFt92cXC5qgAl2Y09Qbbsf09xQwbtwTGYr5e3m5z0HJaSTwH%2F6B0Xg97l8ErEVo8XzB0iNQjlaNpE01qzpyCHoEdQpdjQBYyPmRnq%2BbkQt5Ka3vihd5Xsjy30voF%2B%2F8gafrFEmmDSUwDozliJN2UTTFIWu5KKL5zxmusE%2FYVD%2B2Ca9LMNfl%2BpSDZo%2FuN6EWWXKP5AKmnyYs2grcKVjTL%2BELI0CPR06%2BvI7P2i3Fn%2BqASMCrzvfjTN5hO2%2Bfs96m393bom8gUzEetanvqpAxKyD52%2FwORtH9KTCkh0hDrC8DSUPRMyArPW32ZJoZ%2FEkWzih9Wx9LB39z5owdHErSSwT%2By6SjVB4wqa%2FJyQY6pgHImw3FW0NNgt8vRoT1Jk%2FhAY4by2Q8Y9FYaYqNx7lBc0sCQr%2BXAfCFQIV4uOZkvAWktUUvP%2FGdJ1INET3hz%2Bo%2FDlg5UakpspdkR6l1ZQWpUk85WZmDmTrSiMQUDRKYTn2deUp8TE7sU7QLM98AYTbbda6uWIypk68wJGPptsl6keM7k3o5YU6CY%2F1QMRMk1A9%2BLc9SCwxdHDp7A4Bi%2BIeUvxh%2FaQUB&X-Amz-Signature=1fee31c58bd5642fc565987fc39a0577810449b342c69990923bb8c71bb0f1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYAZGMG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc1VWCPbGGxDZUFRr4aW0%2BoxwqNKtT0QkKQ3E8WjL5XAiBFrTEvb96%2BL%2B00ecqWhebUsqHHxdSgKMamHyvhwAE8QCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMVLd2g%2BzI%2B1rI079kKtwDd8ADr%2FPigaPC1j7OYMZ7i%2BDndcaHETASjnlQLaPix18kWdzVvQYCyXncUNWSgr6Y0CXbo02ua2acUCxgL95CT9ankgDbnBo0Sh%2Bad95EyWphy%2B5ooeJmV29kRhllavj60pANAhctPcIy7J9OZbrrkoP1%2Fu9IKvEE%2B%2FLZ9%2B%2Fi8NiTsi8lMSVI0eyPz1%2BJNFAAwjbmcl4f%2FOHMU52nd6oGjqv1LOKm%2Bx2PDuGGmjuiOopBKMiWvr9yxd5MGCVyvedm%2BUMG9hPw8I6WK10QYvObjXP3AOo9dhFt92cXC5qgAl2Y09Qbbsf09xQwbtwTGYr5e3m5z0HJaSTwH%2F6B0Xg97l8ErEVo8XzB0iNQjlaNpE01qzpyCHoEdQpdjQBYyPmRnq%2BbkQt5Ka3vihd5Xsjy30voF%2B%2F8gafrFEmmDSUwDozliJN2UTTFIWu5KKL5zxmusE%2FYVD%2B2Ca9LMNfl%2BpSDZo%2FuN6EWWXKP5AKmnyYs2grcKVjTL%2BELI0CPR06%2BvI7P2i3Fn%2BqASMCrzvfjTN5hO2%2Bfs96m393bom8gUzEetanvqpAxKyD52%2FwORtH9KTCkh0hDrC8DSUPRMyArPW32ZJoZ%2FEkWzih9Wx9LB39z5owdHErSSwT%2By6SjVB4wqa%2FJyQY6pgHImw3FW0NNgt8vRoT1Jk%2FhAY4by2Q8Y9FYaYqNx7lBc0sCQr%2BXAfCFQIV4uOZkvAWktUUvP%2FGdJ1INET3hz%2Bo%2FDlg5UakpspdkR6l1ZQWpUk85WZmDmTrSiMQUDRKYTn2deUp8TE7sU7QLM98AYTbbda6uWIypk68wJGPptsl6keM7k3o5YU6CY%2F1QMRMk1A9%2BLc9SCwxdHDp7A4Bi%2BIeUvxh%2FaQUB&X-Amz-Signature=04442b5615ee0f714910d03077bae006b5370b6e1396b5492c285b9deced388d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
