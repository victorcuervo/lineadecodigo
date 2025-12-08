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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSWHVJI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz0J2rW0L7vbbuT1YorfNENHpMbBinb2XAD42pjVsscAiAzCcYXEKkZaXuJk5tGchJ49i1%2F6IAihP9CVQL42wuMYCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXzwrAf%2BnYjyg9aOKtwDAEuXbex%2F0LfUR8EFGe2k82FnlHvfENe9JnIH2UXZucrC6csub6tiaNv2Khw5vqcDCWjULaHUB80dsOIdfPZsArB5FRsiAfKNS2WoHFRdbBfcwbxe4XaSoUnlrMI5V6rAW4zVFmpIp3RYQYeE4ifZ0rF9TCWxWXmiN8eMsoW1Fh0%2B%2FnACqIpHrx4SGdWOOkN%2FEHbDXsq3BYfO3H9rL5gSr4QCFaXloY%2Bs%2Fqiwk1o4wLMDe%2BxR%2FiLihwfxwZlAsgz4XT1IlnhPOQPNnLK%2FEHWUiDvpfwBXHCImiVSPJE9EDHGxvIoZtEk%2FHXEnhnP7jMLhyazoav3xNpyqj1XtNLuGbw%2B3DObMZnqwHKkPiNAG8DCbkkh1EZJkb0%2FfLk9RUAkE06jMBB9KeQf1Io3d9eM5dTKRAopyFBiucrfoQx33h1EUv9G1tSHH7W5A0hVWlLGkeflPB%2BnAcmAhk0OMH1oF8U8jwnp58YfQ%2BdwSEpX1Cl5y7JoO79hxvA4ZYHTeTIGoAloMIAup5Ij6QzXL6CngoW5j13zoMXBugbCZE4hv7Yku%2BDJCQIHMgQcyN9vQDBxKaxIOkbhmR0%2Bgqdwft5aia8CvBEwQzOas4ypf9l6uBIl85lO5XQAUQ15KoZgw8OTbyQY6pgF76kb8rKYeJBLqLkv5%2FD5D2EK1Kt5fzlEFkPG5ff2WDWwB%2B7cj9eVG1KMUqC%2Fm%2FkbFkSInmuxB1o2qTuyo%2FCsLD2yDoPhLGm0FnAAd6m772RnXz9m2CULLjC7xDoNCwYihkwV4322XuzhNcJORXEvi4F3%2FcjF2diNenjJZPOh3kjg3g9qlWcSHigVtktqzNPtt6wSCxI309Jyl2lCRJkq%2BmrHhvP36&X-Amz-Signature=19552e5c1bdab8fcb0455fdf923803a7458536ae14bc3c64d6ef382713ba9471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSWHVJI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz0J2rW0L7vbbuT1YorfNENHpMbBinb2XAD42pjVsscAiAzCcYXEKkZaXuJk5tGchJ49i1%2F6IAihP9CVQL42wuMYCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXzwrAf%2BnYjyg9aOKtwDAEuXbex%2F0LfUR8EFGe2k82FnlHvfENe9JnIH2UXZucrC6csub6tiaNv2Khw5vqcDCWjULaHUB80dsOIdfPZsArB5FRsiAfKNS2WoHFRdbBfcwbxe4XaSoUnlrMI5V6rAW4zVFmpIp3RYQYeE4ifZ0rF9TCWxWXmiN8eMsoW1Fh0%2B%2FnACqIpHrx4SGdWOOkN%2FEHbDXsq3BYfO3H9rL5gSr4QCFaXloY%2Bs%2Fqiwk1o4wLMDe%2BxR%2FiLihwfxwZlAsgz4XT1IlnhPOQPNnLK%2FEHWUiDvpfwBXHCImiVSPJE9EDHGxvIoZtEk%2FHXEnhnP7jMLhyazoav3xNpyqj1XtNLuGbw%2B3DObMZnqwHKkPiNAG8DCbkkh1EZJkb0%2FfLk9RUAkE06jMBB9KeQf1Io3d9eM5dTKRAopyFBiucrfoQx33h1EUv9G1tSHH7W5A0hVWlLGkeflPB%2BnAcmAhk0OMH1oF8U8jwnp58YfQ%2BdwSEpX1Cl5y7JoO79hxvA4ZYHTeTIGoAloMIAup5Ij6QzXL6CngoW5j13zoMXBugbCZE4hv7Yku%2BDJCQIHMgQcyN9vQDBxKaxIOkbhmR0%2Bgqdwft5aia8CvBEwQzOas4ypf9l6uBIl85lO5XQAUQ15KoZgw8OTbyQY6pgF76kb8rKYeJBLqLkv5%2FD5D2EK1Kt5fzlEFkPG5ff2WDWwB%2B7cj9eVG1KMUqC%2Fm%2FkbFkSInmuxB1o2qTuyo%2FCsLD2yDoPhLGm0FnAAd6m772RnXz9m2CULLjC7xDoNCwYihkwV4322XuzhNcJORXEvi4F3%2FcjF2diNenjJZPOh3kjg3g9qlWcSHigVtktqzNPtt6wSCxI309Jyl2lCRJkq%2BmrHhvP36&X-Amz-Signature=213141d4adb778ab282e76ee59f36e336fefe7c075336216a5fc3d744c986124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
