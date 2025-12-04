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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BP5SQ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHN7ov%2FiqpkOnrzrFxf5QsnhyaPXBUpLPG4XLgp6nem%2FAiEAozwCitYuFK6Tn%2BdkzSNKCrnrK9zGgW%2BaKKsXrVFOta8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI%2BXgOQo6JZlJVrlWCrcA2JdOn4ZMRo8ZMHNMTXuaKDsp33acz3I5qb%2BiYfmDoSA7o8J3ndHfkVliD7HL%2FNCW%2Br9K6W5h4fNU8mBaEFSV%2FTViq7OUC6J4MeDbb7tTb6EZ23qpah2hLGg%2FftUU%2FXtP8IqPuc%2BY%2FkTmkX%2F4tU2NFIh%2F1PikPX6tZIJckAID%2B6GDMDV9pHpR2b42IpqIlLXVA6E%2B23UVEzwXhS54UAhn7fqBu7zQUdzGcw4GRRcViqo2z1jbC%2BCCE2K8xu%2BcsN16gobiCfJsx10Yt2b5qnkaN26rkXlec3pwrA8l8HdCZYdaG3Eyoh3ZF%2BVM5Wtyoo75vcMrhPhzh%2FZC%2FbxdbJx90KArHZE6m5wi8hfervjEQdTPnq7DAiznZZAR6bungAuIBkqFNhpm49WAzToBQ2bZ0%2BKK%2FXO5Bkl5R78WbVoyvtwddkjdCZoC6qi5fm3flSoR129C0N7UBYjcR0nVrBDxFG7f3PfEedrBcMjaoKo6pHGn5I7L7XCsPErLsw4Qri6laJHfTQch36TgyHziTTeAOBrNxsIWPrtMmNyMMgsQ28w8QsXznH8xEgtOGlz2Nv4%2B241EAkU8YWtLFbkdXn2eicRGdSdkOsMjb6UCllkX%2FkjNYarCJX%2BuVsrU912MLfyw8kGOqUBr4%2BOMId9fK1hFtUyI4dhMt6WBAtGaki5lw8MHglhRvQkzo8%2Bw1BR9VHIvHtXbVjDyGUVXsZTpyw6DR4iKmfuewx92kNvy0ryG%2BthO4M9AjxFLTRol%2BeEgkRGK0t2M%2B10cw9J%2BGXmrCoW083Efj%2FyXUcOul6Z0FdLSOfLuNQ0grX%2BOdsgW%2BwAsivkmVQYZoFJTVR8wTUcKzkrNWXQWOeiIOBaiOEN&X-Amz-Signature=bd00911ac74cf4fd437e64241d2d0f4a3a915a6defc530728e5ddfda598795b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BP5SQ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHN7ov%2FiqpkOnrzrFxf5QsnhyaPXBUpLPG4XLgp6nem%2FAiEAozwCitYuFK6Tn%2BdkzSNKCrnrK9zGgW%2BaKKsXrVFOta8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI%2BXgOQo6JZlJVrlWCrcA2JdOn4ZMRo8ZMHNMTXuaKDsp33acz3I5qb%2BiYfmDoSA7o8J3ndHfkVliD7HL%2FNCW%2Br9K6W5h4fNU8mBaEFSV%2FTViq7OUC6J4MeDbb7tTb6EZ23qpah2hLGg%2FftUU%2FXtP8IqPuc%2BY%2FkTmkX%2F4tU2NFIh%2F1PikPX6tZIJckAID%2B6GDMDV9pHpR2b42IpqIlLXVA6E%2B23UVEzwXhS54UAhn7fqBu7zQUdzGcw4GRRcViqo2z1jbC%2BCCE2K8xu%2BcsN16gobiCfJsx10Yt2b5qnkaN26rkXlec3pwrA8l8HdCZYdaG3Eyoh3ZF%2BVM5Wtyoo75vcMrhPhzh%2FZC%2FbxdbJx90KArHZE6m5wi8hfervjEQdTPnq7DAiznZZAR6bungAuIBkqFNhpm49WAzToBQ2bZ0%2BKK%2FXO5Bkl5R78WbVoyvtwddkjdCZoC6qi5fm3flSoR129C0N7UBYjcR0nVrBDxFG7f3PfEedrBcMjaoKo6pHGn5I7L7XCsPErLsw4Qri6laJHfTQch36TgyHziTTeAOBrNxsIWPrtMmNyMMgsQ28w8QsXznH8xEgtOGlz2Nv4%2B241EAkU8YWtLFbkdXn2eicRGdSdkOsMjb6UCllkX%2FkjNYarCJX%2BuVsrU912MLfyw8kGOqUBr4%2BOMId9fK1hFtUyI4dhMt6WBAtGaki5lw8MHglhRvQkzo8%2Bw1BR9VHIvHtXbVjDyGUVXsZTpyw6DR4iKmfuewx92kNvy0ryG%2BthO4M9AjxFLTRol%2BeEgkRGK0t2M%2B10cw9J%2BGXmrCoW083Efj%2FyXUcOul6Z0FdLSOfLuNQ0grX%2BOdsgW%2BwAsivkmVQYZoFJTVR8wTUcKzkrNWXQWOeiIOBaiOEN&X-Amz-Signature=c81caf42ef246485c862b19b52533fe9de268ce928b9c9b530146cf7ebfe0fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
