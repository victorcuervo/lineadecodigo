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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICICFWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqxaWRn1pytZzAENgBR7WuqHJ21ViU%2BQgYi%2Bz4NZ2QMAiEAraAw2thwfIEDWHUPguTplHGofcfWNOuJCcDCsO03Zm0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGwyORbC21cWTHXbJCrcA5yTXJ1Ia3iw8oawFNFGLoCDP3nEpWbp8mAc8plP2YkzdqjRdu404Mu3LmeLTTSuuFfj6LA3gSeKwxz1%2FO%2BeQqiIeQp9iiE7ZBOgI4wj%2Bc8il5QNBZ3YKahZdWsoR2xQYxe9ufHTfzNbAOxIpXuqoqPMtM%2Fbh6n%2FE963b1fRaMZZ0FdZ7%2FpBKe3X%2FrB%2BRSTprQ%2FrdlRrJKMBG%2BuFTi3kzSzNZgdPNDuyjFU%2FyRPtrvaiRTv%2BM83xRLbVJyrZd08bAcg6mNLR2mPuyGOYKTZDZi8piI%2F2LDW8fEJm21LDCWT8zfbpy6Tda20bEecXtG1FMwV%2BYCBepRJRJVsegxpVG9Qh3yccJAn1wsZHpa5XrrNmcb6RL1f0Gqel%2FjQQWaxGayQCyDRu70DuFt7grTOZ%2Frn61YlqM6LiIRyaLmsHWvggtLvd3%2BdAgYcitOO2yGsELRD7DmZQsDQtsrYms2uEhmxv6UHkbV6JyNzLdap%2F2TdycI1I6pb%2Be%2FXEB4B2gAHVIs4xT6sEh36c5tICArFGw1sve73YWRH2Ti6r1ukXTPpcQYjw9AUAS70ypHF4MWETpnT8NYbW71Xn%2FpTYX9BCnkb%2BbNX1ss2NHsc9VvY5g8uc3vopOf%2FoSblNp9ezMLyqisoGOqUBugP9kKxiWnDX6vIh51%2BHtszL0QAUFYK5Y1mjRJ0Q%2BXAJh3k3r%2FZ0dVPzfQrlT5p282NfX3fKrIWZtNLbz63rVk5yLCf%2FHaAKh2bZf59E6HEsKNRYW%2FwHz9d4BgWgDL51bGvQJafD9jUXQ9BECrisfAmIONwcUyMUfpXEb80FLkV4nfABe3pfgDyRBGgW9vlm3NDQ8vmokOz7ah5WIs4v3IU%2BzLBw&X-Amz-Signature=99e87c34c71ff8785e686dec67e8f62bfb67c74add1b285a2905fd408bbd11bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICICFWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqxaWRn1pytZzAENgBR7WuqHJ21ViU%2BQgYi%2Bz4NZ2QMAiEAraAw2thwfIEDWHUPguTplHGofcfWNOuJCcDCsO03Zm0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGwyORbC21cWTHXbJCrcA5yTXJ1Ia3iw8oawFNFGLoCDP3nEpWbp8mAc8plP2YkzdqjRdu404Mu3LmeLTTSuuFfj6LA3gSeKwxz1%2FO%2BeQqiIeQp9iiE7ZBOgI4wj%2Bc8il5QNBZ3YKahZdWsoR2xQYxe9ufHTfzNbAOxIpXuqoqPMtM%2Fbh6n%2FE963b1fRaMZZ0FdZ7%2FpBKe3X%2FrB%2BRSTprQ%2FrdlRrJKMBG%2BuFTi3kzSzNZgdPNDuyjFU%2FyRPtrvaiRTv%2BM83xRLbVJyrZd08bAcg6mNLR2mPuyGOYKTZDZi8piI%2F2LDW8fEJm21LDCWT8zfbpy6Tda20bEecXtG1FMwV%2BYCBepRJRJVsegxpVG9Qh3yccJAn1wsZHpa5XrrNmcb6RL1f0Gqel%2FjQQWaxGayQCyDRu70DuFt7grTOZ%2Frn61YlqM6LiIRyaLmsHWvggtLvd3%2BdAgYcitOO2yGsELRD7DmZQsDQtsrYms2uEhmxv6UHkbV6JyNzLdap%2F2TdycI1I6pb%2Be%2FXEB4B2gAHVIs4xT6sEh36c5tICArFGw1sve73YWRH2Ti6r1ukXTPpcQYjw9AUAS70ypHF4MWETpnT8NYbW71Xn%2FpTYX9BCnkb%2BbNX1ss2NHsc9VvY5g8uc3vopOf%2FoSblNp9ezMLyqisoGOqUBugP9kKxiWnDX6vIh51%2BHtszL0QAUFYK5Y1mjRJ0Q%2BXAJh3k3r%2FZ0dVPzfQrlT5p282NfX3fKrIWZtNLbz63rVk5yLCf%2FHaAKh2bZf59E6HEsKNRYW%2FwHz9d4BgWgDL51bGvQJafD9jUXQ9BECrisfAmIONwcUyMUfpXEb80FLkV4nfABe3pfgDyRBGgW9vlm3NDQ8vmokOz7ah5WIs4v3IU%2BzLBw&X-Amz-Signature=f60177909a07418c19b9f300262dc2e723f8cd29ceb665a1f163bbdc35516785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
