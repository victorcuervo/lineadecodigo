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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHDHX2E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtP9XXwM%2FGPvguhxl%2BF5eZN5NgugGnxwf7dycY4VxThAiBIgs0Gud7%2FrqzmFhWVwvU%2BJky4GNOl3fhmgwDwq5AOGyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeiSAmF7GutwPjEhRKtwDUMdpiotm7%2BDarVfRzusQjtBK4a0VejR1gAlmrkNqpyLkb1wy8ukcLgj4hujdluCA1O6g7axaS5sikzZOBVG1EtGs%2B5zHg7IuNg%2FYB6FFlbgzr0wnKrhc7KPf70enc6rFUeTQyqyZwYbwQSOYNrs93fWiLU7tl0ZxU%2FrXGCFhvHaDjTHcV044S0kb1NbjMoV6JSNi6Pit1i3oTxd8DcmDZ4xD3LkL0Ayeo3sz60FHh1I7KgbxUZNJD2Gg4LdouCeXKNbYatNOVXdZrPpuM12b4ESiOTOSUjCjONjOfemMlO3Ule1u6zecDSV8vuyLx9a8YMxG3LkMatmgRM0MvjaCvkAsSj0UK2vMeLNNCg6feX5FPFYaWeu008t%2FBj%2BFoX0oPiIeTpfrz4Wp6rpqlg46%2Bn%2BR62D4YBTrAlc5SQtGMEp1lJQrOpnujpxjZZtw5it9JpUJY2OtGa%2B6d7qJ1RlZPTYjff6w8wib18dDLG917Q93EBW%2F7EkuEh8gaeTPrCv2BB7wn5pk7fF3YN6ArfXu3VZG4w8aSbliB1Pw7OI3ZQbNhT%2BaQoiOzNv4o4VM%2BF6Zrz%2FIBCyqePAGbe8kcEnqGciSEbGR091SCfAKSZj%2F43saUny4AD7RjkHxvvkwkoOJygY6pgEzkK%2FhTpYET2Dgun23UFfxKXPWew9ypO09M8AHStTC1WomTgr1USqOoAfZH9dP94YZcIn2N9fmAkLpP2bDCeFIfE1%2Fv8m4sdhWzDafvCKXUO%2FOUPZpANXcKf2DmAXJkP%2B1qy1v%2FGenzwKccKdrbRQdiE8KEW2QYO3R1tXPM3ti%2Fu63%2BXDXsihYNXa6PWHLOcfvCH%2FKoaO9M0%2FrdfMzjEzrAHqJAn%2FU&X-Amz-Signature=298dbcc7edcafca0eabf5c0bad7014eb7deb01f56d7c030d573fbacbb98db70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHDHX2E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtP9XXwM%2FGPvguhxl%2BF5eZN5NgugGnxwf7dycY4VxThAiBIgs0Gud7%2FrqzmFhWVwvU%2BJky4GNOl3fhmgwDwq5AOGyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeiSAmF7GutwPjEhRKtwDUMdpiotm7%2BDarVfRzusQjtBK4a0VejR1gAlmrkNqpyLkb1wy8ukcLgj4hujdluCA1O6g7axaS5sikzZOBVG1EtGs%2B5zHg7IuNg%2FYB6FFlbgzr0wnKrhc7KPf70enc6rFUeTQyqyZwYbwQSOYNrs93fWiLU7tl0ZxU%2FrXGCFhvHaDjTHcV044S0kb1NbjMoV6JSNi6Pit1i3oTxd8DcmDZ4xD3LkL0Ayeo3sz60FHh1I7KgbxUZNJD2Gg4LdouCeXKNbYatNOVXdZrPpuM12b4ESiOTOSUjCjONjOfemMlO3Ule1u6zecDSV8vuyLx9a8YMxG3LkMatmgRM0MvjaCvkAsSj0UK2vMeLNNCg6feX5FPFYaWeu008t%2FBj%2BFoX0oPiIeTpfrz4Wp6rpqlg46%2Bn%2BR62D4YBTrAlc5SQtGMEp1lJQrOpnujpxjZZtw5it9JpUJY2OtGa%2B6d7qJ1RlZPTYjff6w8wib18dDLG917Q93EBW%2F7EkuEh8gaeTPrCv2BB7wn5pk7fF3YN6ArfXu3VZG4w8aSbliB1Pw7OI3ZQbNhT%2BaQoiOzNv4o4VM%2BF6Zrz%2FIBCyqePAGbe8kcEnqGciSEbGR091SCfAKSZj%2F43saUny4AD7RjkHxvvkwkoOJygY6pgEzkK%2FhTpYET2Dgun23UFfxKXPWew9ypO09M8AHStTC1WomTgr1USqOoAfZH9dP94YZcIn2N9fmAkLpP2bDCeFIfE1%2Fv8m4sdhWzDafvCKXUO%2FOUPZpANXcKf2DmAXJkP%2B1qy1v%2FGenzwKccKdrbRQdiE8KEW2QYO3R1tXPM3ti%2Fu63%2BXDXsihYNXa6PWHLOcfvCH%2FKoaO9M0%2FrdfMzjEzrAHqJAn%2FU&X-Amz-Signature=5b3440dab644ab0de498a42e68afee116d718a43b1d62892229af9bc70fda063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
