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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMNMQR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl3J5LfuTN4BEKykSD7z%2FRvqC5JRnBE0%2FjvlhW7lXcHgIhAMZQ5ft7GOIiNdy2ed9p2UX4O6SruSC4DX6%2B1prfulc%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWQtcEtNVQA0%2Bx%2FGIq3AM8cSsZXnh%2BfV7PDB%2Fs%2FAMfPlDx%2BmVTnrmjUOFSWoKZfB25hJtvnBnigh2eCLO3ePJT1vq9bggFLmk%2F6Sz7iav9qSDV8WmsmMHDj0DWwlBB3bn1rNbwhzRMnBOMWjO3xZzfVxl%2BScKzKuaLbfEcuhRt1SDNRnAKKytTWRODGZEF%2Bo4OIW8TU4OAfHuYmcYdb99PQGzsp4TE905Ae4qC6phR0VNDNXPg5fE4qpaaz2pFpSMGMVwnw28wDiCEbvMYFNsH8m%2BCpWg%2FoPKuTmslroeWOBOLHs6hkwR6mBjsKS7qbNiknSiMJSpxeIan7HqLwpKgsaYO8zsiJlVenW6Jyccb3mDNdmQs6ilPmS3pKzF3pdU74phweW38kn4nX2RcXy2St9RobK4IbfZvUWbYGyoACHJ2mA3Rfm%2F9p%2F23vQV6mbsOMuWkWDRghe%2FWT%2FcphuWmotdxfLE06LlXrsT6BnqRpr4nEN5Ihc2rzyCiPC%2FAwj6HYdWQdPbN0je0qrQQJTB%2BhtREblnVCleTpyRC7TbqruQRl8YYJac2iIeIAZOTz8SSrWUqlvarRABAsSpSBVoGNWI88G4FRbHTIXztcwLx7wLFmgzrXrpFqDqOwKqZuGNYdtkI1VrATjRSKjDSh9%2FJBjqkAa4c6N0OXj6Cjt9%2FY58de76UyT1dRlJsWDpWiiUSttWr9uxCMuceRs9ouQ91uOPTg448Kqhn11pYqTxRtR4Hd%2FCVGWnmuXVdiz6yZ5Qv%2F9MXLLPGqy42SzlBlyNJX4NuwrWktHxYqcxlD93GrjrcuqmeQyKTPdbLwOrNba6qejhx7wMvTep9l3%2FpRLZ8RG62lr2eUyTEa2fneIZCV3f1bGsiZ2p1&X-Amz-Signature=c44c6bca5e68852c4d51f657b769803efee1bbb2a1495840767447f2c242299d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMNMQR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl3J5LfuTN4BEKykSD7z%2FRvqC5JRnBE0%2FjvlhW7lXcHgIhAMZQ5ft7GOIiNdy2ed9p2UX4O6SruSC4DX6%2B1prfulc%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWQtcEtNVQA0%2Bx%2FGIq3AM8cSsZXnh%2BfV7PDB%2Fs%2FAMfPlDx%2BmVTnrmjUOFSWoKZfB25hJtvnBnigh2eCLO3ePJT1vq9bggFLmk%2F6Sz7iav9qSDV8WmsmMHDj0DWwlBB3bn1rNbwhzRMnBOMWjO3xZzfVxl%2BScKzKuaLbfEcuhRt1SDNRnAKKytTWRODGZEF%2Bo4OIW8TU4OAfHuYmcYdb99PQGzsp4TE905Ae4qC6phR0VNDNXPg5fE4qpaaz2pFpSMGMVwnw28wDiCEbvMYFNsH8m%2BCpWg%2FoPKuTmslroeWOBOLHs6hkwR6mBjsKS7qbNiknSiMJSpxeIan7HqLwpKgsaYO8zsiJlVenW6Jyccb3mDNdmQs6ilPmS3pKzF3pdU74phweW38kn4nX2RcXy2St9RobK4IbfZvUWbYGyoACHJ2mA3Rfm%2F9p%2F23vQV6mbsOMuWkWDRghe%2FWT%2FcphuWmotdxfLE06LlXrsT6BnqRpr4nEN5Ihc2rzyCiPC%2FAwj6HYdWQdPbN0je0qrQQJTB%2BhtREblnVCleTpyRC7TbqruQRl8YYJac2iIeIAZOTz8SSrWUqlvarRABAsSpSBVoGNWI88G4FRbHTIXztcwLx7wLFmgzrXrpFqDqOwKqZuGNYdtkI1VrATjRSKjDSh9%2FJBjqkAa4c6N0OXj6Cjt9%2FY58de76UyT1dRlJsWDpWiiUSttWr9uxCMuceRs9ouQ91uOPTg448Kqhn11pYqTxRtR4Hd%2FCVGWnmuXVdiz6yZ5Qv%2F9MXLLPGqy42SzlBlyNJX4NuwrWktHxYqcxlD93GrjrcuqmeQyKTPdbLwOrNba6qejhx7wMvTep9l3%2FpRLZ8RG62lr2eUyTEa2fneIZCV3f1bGsiZ2p1&X-Amz-Signature=fb22bbe0c028287092ef64680ccdab5b658ac5021ab0dcdafc44b10cbcfe409b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
