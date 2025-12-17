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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPTLPAW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfUtbSM6fs0QrD7LjCPQsiw4E1884ePwjfdykbx%2F72sAiEA8lv10TSvZBdEmFrl0ZInjPk00zAecqxPp3xbh3VHjk8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBpVT6qoyNiofS3JvircA%2FAM%2FQSsuaclDhw3XV3o9lDPUHdNwQE0csjkKuYWtyfxdOouK7hxlNtAS6KEk8EMzCvbix2cPDW5U3e7s9JDZo9PYXcH7luKD7Ao9PQ0QsRfrFRMSnA081LsNZyj5lvQHRaC9rFp3W%2FiMmYIOeYjxkp9KhU7lZd0kzc3Zy1gmbhlJe4pu0YmuEXd4%2F3DUcF%2FigPXxnvev75v4hHFSOwvJLLt1YZIj%2B2f66%2BIBF7zArnbnyM4wTHKZWm9Nn3nLI2yoHMNANwKmGAJXidn8m4ZtxY9LiFW0NrqMID%2BPfpWf30umvCU9hq5Ut6VysqPSt%2BPQ8GGRKcJ6T8bSweWlW7wiZYO5Kj7F5cyURIUcBddWHvM%2F97IQ49ayztT22VfVo5CSNP30m8%2BU07%2BT0of33Rh%2Fz3j63p3yRALdJkFSSwIKQgSeqTPxIp3YRVaLveHMnusehYNA%2BbhcKHERhkEN7aYKqOwt67slLvs%2BeUM9B7Jvnmn9gXOJwmiH7fZ0%2F3MB2hZRQ9MMEdDX7Q%2F9RjKhwpNI%2FFGgPiSZ9t%2BdR66bi%2BsEMuoYiyLOM780iUuBWBL1MLD4rXhFgey9lStB1EJtmg6YVp99dNuFEJBH43cdeXowCh6ijh0BKIWGvMVZBtDMPqqisoGOqUBr7Z9FQvxYAe2nQQUQENAUXFkRtczR9FaeE2gG8h0Re6H7CfRPf4rgwa1GUlB06yyCEU2SbQ72RCfPdeur8LHUE5VxNfuneSQVdGsp2piuDRL5yWMtpi8YLUNu7oHL7BaboySL3P00yOCwOvQC9%2FAidb8mSMvAailqXVfxQNyMJq6d%2BpXikQOT2vzgVm2oykJ8P9BULKpzUzbXvKEbr69%2FVoK1T7C&X-Amz-Signature=67cf5ace901e0a59f6d018dc7f1f3ed9120cabc81397c57f068aa1c0b7686e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPTLPAW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfUtbSM6fs0QrD7LjCPQsiw4E1884ePwjfdykbx%2F72sAiEA8lv10TSvZBdEmFrl0ZInjPk00zAecqxPp3xbh3VHjk8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBpVT6qoyNiofS3JvircA%2FAM%2FQSsuaclDhw3XV3o9lDPUHdNwQE0csjkKuYWtyfxdOouK7hxlNtAS6KEk8EMzCvbix2cPDW5U3e7s9JDZo9PYXcH7luKD7Ao9PQ0QsRfrFRMSnA081LsNZyj5lvQHRaC9rFp3W%2FiMmYIOeYjxkp9KhU7lZd0kzc3Zy1gmbhlJe4pu0YmuEXd4%2F3DUcF%2FigPXxnvev75v4hHFSOwvJLLt1YZIj%2B2f66%2BIBF7zArnbnyM4wTHKZWm9Nn3nLI2yoHMNANwKmGAJXidn8m4ZtxY9LiFW0NrqMID%2BPfpWf30umvCU9hq5Ut6VysqPSt%2BPQ8GGRKcJ6T8bSweWlW7wiZYO5Kj7F5cyURIUcBddWHvM%2F97IQ49ayztT22VfVo5CSNP30m8%2BU07%2BT0of33Rh%2Fz3j63p3yRALdJkFSSwIKQgSeqTPxIp3YRVaLveHMnusehYNA%2BbhcKHERhkEN7aYKqOwt67slLvs%2BeUM9B7Jvnmn9gXOJwmiH7fZ0%2F3MB2hZRQ9MMEdDX7Q%2F9RjKhwpNI%2FFGgPiSZ9t%2BdR66bi%2BsEMuoYiyLOM780iUuBWBL1MLD4rXhFgey9lStB1EJtmg6YVp99dNuFEJBH43cdeXowCh6ijh0BKIWGvMVZBtDMPqqisoGOqUBr7Z9FQvxYAe2nQQUQENAUXFkRtczR9FaeE2gG8h0Re6H7CfRPf4rgwa1GUlB06yyCEU2SbQ72RCfPdeur8LHUE5VxNfuneSQVdGsp2piuDRL5yWMtpi8YLUNu7oHL7BaboySL3P00yOCwOvQC9%2FAidb8mSMvAailqXVfxQNyMJq6d%2BpXikQOT2vzgVm2oykJ8P9BULKpzUzbXvKEbr69%2FVoK1T7C&X-Amz-Signature=fc757367cccacdeaf2ce50ae22109d530367f74ca4cf648747a1ecda871f6f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
