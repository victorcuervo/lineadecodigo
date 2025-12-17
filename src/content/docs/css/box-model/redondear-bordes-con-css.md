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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URXODXG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbWrEGUZ1SR4irqAobLCTjJ%2Bcr2%2BXOCwAQ6bRHl8KqMAiBmVnTVuVkEQD9L6TM1GrnUEe4H7Oml38WaGMjKinIT%2Bir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMaUxOEbpGfDD1%2FAwaKtwDTzoDfrqrlS8vVNS44O8XYtuqlF%2BQ3%2Bkdwtp7i5vF3ul%2FKVikPEX6pETXBv2HdYfhpwPc6Y%2F6LrNyOCPlSXwl%2B10kzYEZAYEhGhEVwSL1P07Xe66npkszqEOag1zmLuiJ6L3l09qFLMoENxnNFBlmuM9lSZe03nVclfYbTGoYc2uun3dAPUFzogQjiHKCD12iaVYKFszqgTC23kMwYxRpnd5uRCZvx2BfuxIL5qJ7zuodJfeGw2NZRzKilFSLLJu9drEW%2FcxwsDzGCuCZFXl9YdX8EM6UerPGQXg%2FcHI1eco8DmPf8IfjPzt5yhlVScpEtJLtupT2REOhV01cVGECVQ4Yh3Q%2F%2FK1U%2Bv2HzVLJaPknKsxVtljp6Ga3ixnj5zUW%2FKv6IwwNb9vrVv%2FduP6%2Bb8L5w%2Bs9FZ1YM5lNZNicGd%2BIa5T2IYWCZle%2BKlb%2FQsSQWR7xDlvNPCom9O8%2Fc67gRcvLZ%2B14sIid3jZfizZx4h2wnkgrMmSjL5H4SGMxSNVx8EJqKJGBICTkRls%2FM94Ga9qNxjznAsqUvj%2BaavzgA3JnZZLQJGcM16cLYrxky7uPmTmr%2B%2FE8PmylS8QxQgT8Dt%2Fu9J9MtSxiWAIg9CgWc4%2FtY2T6fFMdo6iuHHAw9LeJygY6pgHcQVV64bIr5rSfh58WjOeJKGaAbAHu%2BgpDulmH%2Flv6vS4SfyqeH5Xyqcyv1%2F3aD0am%2FUhV0K%2Fd9YgkfK%2Fmy8PiSq9adoDZ1evNEA9bHzJWIBNLqJQHNZiinndAD1GSRdojTamUN2FsQleWSokDKTYLkMPlibwXNPuxD63tReeOpbn0PtPlwnWILmbFrMH68RSA%2B0PAMRizJxlhEE6bm%2BjAbTisZrq9&X-Amz-Signature=6360d31a02f9e0de7c13f3cee7258978c66c37e629de7be08fbd414db933340b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URXODXG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbWrEGUZ1SR4irqAobLCTjJ%2Bcr2%2BXOCwAQ6bRHl8KqMAiBmVnTVuVkEQD9L6TM1GrnUEe4H7Oml38WaGMjKinIT%2Bir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMaUxOEbpGfDD1%2FAwaKtwDTzoDfrqrlS8vVNS44O8XYtuqlF%2BQ3%2Bkdwtp7i5vF3ul%2FKVikPEX6pETXBv2HdYfhpwPc6Y%2F6LrNyOCPlSXwl%2B10kzYEZAYEhGhEVwSL1P07Xe66npkszqEOag1zmLuiJ6L3l09qFLMoENxnNFBlmuM9lSZe03nVclfYbTGoYc2uun3dAPUFzogQjiHKCD12iaVYKFszqgTC23kMwYxRpnd5uRCZvx2BfuxIL5qJ7zuodJfeGw2NZRzKilFSLLJu9drEW%2FcxwsDzGCuCZFXl9YdX8EM6UerPGQXg%2FcHI1eco8DmPf8IfjPzt5yhlVScpEtJLtupT2REOhV01cVGECVQ4Yh3Q%2F%2FK1U%2Bv2HzVLJaPknKsxVtljp6Ga3ixnj5zUW%2FKv6IwwNb9vrVv%2FduP6%2Bb8L5w%2Bs9FZ1YM5lNZNicGd%2BIa5T2IYWCZle%2BKlb%2FQsSQWR7xDlvNPCom9O8%2Fc67gRcvLZ%2B14sIid3jZfizZx4h2wnkgrMmSjL5H4SGMxSNVx8EJqKJGBICTkRls%2FM94Ga9qNxjznAsqUvj%2BaavzgA3JnZZLQJGcM16cLYrxky7uPmTmr%2B%2FE8PmylS8QxQgT8Dt%2Fu9J9MtSxiWAIg9CgWc4%2FtY2T6fFMdo6iuHHAw9LeJygY6pgHcQVV64bIr5rSfh58WjOeJKGaAbAHu%2BgpDulmH%2Flv6vS4SfyqeH5Xyqcyv1%2F3aD0am%2FUhV0K%2Fd9YgkfK%2Fmy8PiSq9adoDZ1evNEA9bHzJWIBNLqJQHNZiinndAD1GSRdojTamUN2FsQleWSokDKTYLkMPlibwXNPuxD63tReeOpbn0PtPlwnWILmbFrMH68RSA%2B0PAMRizJxlhEE6bm%2BjAbTisZrq9&X-Amz-Signature=f0bb5962dc269cca227bf30caffb6be5594238bcde230f82094d31c571a1967e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
