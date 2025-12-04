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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPTYVGB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIG30uP79p80LHyPuf5WHD64usKABsWbK%2BorRAajEnrRBAiBzOl95DN39b30FIaaIYMVfPvghrCJ%2BMW0h3u9%2FDFLqaCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BYome2QeQioTAETYKtwDvPO8sXPjfVez1DqzRAgVuBi3RDoGlyxXO4PBSbyZY337HxMqulP5xVtgY6V57N1n3lxfBU%2Fx2a64kxLcTtSONSldXovCNvWbGHVxmQYgPXGQcMf4MKwTrbLBSzdix9BBYiwBmjQAMSJzoZ1N%2FhfN%2F%2FJM%2FztuaeF3KdtYwPooe5p9aN462Y%2BRduN40B1Sr5I3noRvJlvSJ5URmOIu6eZN8rUn9niHI3v9PPB80cVIVhhcCC7VsqySVLD4EstID38Ug9E%2Bo4v9sMjOxZ2%2F3kUXftIq0V8QJelFNNY2ufD5II4KE3GhodUO2WkBTuGEp1TQf0S8pgNV88wC441kChN1uhPnc0Gn%2BCq8MIOixOKShhdI2EVdExNXO8MLwZrOCUf1O7Eqqrze97QgV%2FQ3Nofe3y%2BS%2Bl4eTkKEkCNG6FU7pndIG%2Bgj7ckZiGRpQ4Ei%2BpjDx%2FLc%2BnwSSDBb%2Fl%2BlkXsKNHFIVscmxmjBTA1ZWj%2F%2BomeIALk%2FrbPYbzSwS6KyPO9cql5ow%2B%2FtbvObnFWbqRSYNr8X%2B9gNLZCLcKgFLJ9qD5lXcsAofQ4apXHLUoxrm3SrFpTybtM4VmMOYuIdonBMx8v8UW9owtbSLeNWBRgKVQ%2B5T3FHS6Q30JLWX4gw55DEyQY6pgFBGbindNzYh%2BYVAdmTNBjtsPVWfiiG0UpcN9gPN5Tf3%2Fa8xxTN5sDc5z6LpOJXAHzMMirG9u7ql3gqJJMV8owPrIyEyK68umfIaQ2QWnf4i%2BdfKYY1s8rq8s90AdVhj%2F2vojLL8%2FbKlovJoY3z6KX77J0LoQfts4WRRjc%2FjJV9YBKR1c2nz8ZlfNiVW8hbY%2B9%2B9rfpSQUj8sURXEexbqbwD3QRn%2Bxf&X-Amz-Signature=374534124a9452f06f01b7235b8c60268f2577eebfaf86805c4fc577ddea8285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPTYVGB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIG30uP79p80LHyPuf5WHD64usKABsWbK%2BorRAajEnrRBAiBzOl95DN39b30FIaaIYMVfPvghrCJ%2BMW0h3u9%2FDFLqaCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2BYome2QeQioTAETYKtwDvPO8sXPjfVez1DqzRAgVuBi3RDoGlyxXO4PBSbyZY337HxMqulP5xVtgY6V57N1n3lxfBU%2Fx2a64kxLcTtSONSldXovCNvWbGHVxmQYgPXGQcMf4MKwTrbLBSzdix9BBYiwBmjQAMSJzoZ1N%2FhfN%2F%2FJM%2FztuaeF3KdtYwPooe5p9aN462Y%2BRduN40B1Sr5I3noRvJlvSJ5URmOIu6eZN8rUn9niHI3v9PPB80cVIVhhcCC7VsqySVLD4EstID38Ug9E%2Bo4v9sMjOxZ2%2F3kUXftIq0V8QJelFNNY2ufD5II4KE3GhodUO2WkBTuGEp1TQf0S8pgNV88wC441kChN1uhPnc0Gn%2BCq8MIOixOKShhdI2EVdExNXO8MLwZrOCUf1O7Eqqrze97QgV%2FQ3Nofe3y%2BS%2Bl4eTkKEkCNG6FU7pndIG%2Bgj7ckZiGRpQ4Ei%2BpjDx%2FLc%2BnwSSDBb%2Fl%2BlkXsKNHFIVscmxmjBTA1ZWj%2F%2BomeIALk%2FrbPYbzSwS6KyPO9cql5ow%2B%2FtbvObnFWbqRSYNr8X%2B9gNLZCLcKgFLJ9qD5lXcsAofQ4apXHLUoxrm3SrFpTybtM4VmMOYuIdonBMx8v8UW9owtbSLeNWBRgKVQ%2B5T3FHS6Q30JLWX4gw55DEyQY6pgFBGbindNzYh%2BYVAdmTNBjtsPVWfiiG0UpcN9gPN5Tf3%2Fa8xxTN5sDc5z6LpOJXAHzMMirG9u7ql3gqJJMV8owPrIyEyK68umfIaQ2QWnf4i%2BdfKYY1s8rq8s90AdVhj%2F2vojLL8%2FbKlovJoY3z6KX77J0LoQfts4WRRjc%2FjJV9YBKR1c2nz8ZlfNiVW8hbY%2B9%2B9rfpSQUj8sURXEexbqbwD3QRn%2Bxf&X-Amz-Signature=928cb9356f15ea7472ff2a8ae587f5eaa2b8df084849ea1d6f03a235fdc46d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
