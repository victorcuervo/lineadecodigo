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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7BO4HJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2T26iHbA1z%2Bohii8Tpga4uAiK9CpJv8sdU80W48m38AiEAkWdXnfSZzw1ok9KoMS3WvIeakrOO1HdsutPsYGQRDlsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCZrTuUR120bG9r4BSrcA6l0LsklRofoE%2FZNP2JzSPsrg64R1OEtVAw8f%2F74DPtJY8UyseeS17FUVTTGt%2BUAAkcfX9%2BO4mmPAcj8oswFCKSQ2IYUqC8bcuElbUWevBnZs2yBMCycqRdQXzPciPUn8M0MccJXnT6TqDOkmlzgNOjmC%2FU%2FMmANqTQSYkU21q9QrfwGSOKeDxn2R0O8kmB9EBUa1pepFj7lI5FzOCmTVE1HDnXj%2BYgXybYzGL75Zk6FiP6zE9%2FJjL7DZ9J6I5xkwVNsHZiNsrWn2iBrE3VI%2BLb%2BEFVYbc9v4%2FXbQvTsdrwX1ojNccIp1j7B9oB49mGehys5c5hEh6vZnVo0RRX%2BTtNYl0uOiA%2BCDgGrT33%2BAJfOydQMu7vO6VELaUucKLyLlKrRZ7CULlbcCCGWEBw%2FoysagY3eYQq4B%2FzBuqSoF%2BKSSU%2BmO4KQ8Hh0iNNSJy9NboAILOA8qA2oD7jVsFBrPKtAvKNpCwBMTr16OarLbwU40D4ZPT%2FediwHhWYWIz6C%2BV4gnbgeK3qaoyrSbRwCqCospR%2FYGQQVA9oBgl7LslCfRLdwUDmxh7B%2FxFiRzBbVuSugk1y1hxDBEQJ08rcRyfEY9tOjD9ZP3QPh6j%2B7XU1MLxljzp%2B7PmAjgXwyMMWm0MkGOqUBD3yaibbvo%2FYHOrSgYD1fnAfT58y8Op7sad4sDM2JzOGwwi0aUDjvHjzc94mHIPJVQRIvPgIbck6PmeQCO3cnGOzJhnA4%2FXZynmg4VeGJPAXTYG9KCGeTdH%2FwJErewZJeqFH%2FzTDCZFZa53T3MeK7kfJP%2F4e0wGkBakcDrz0BdEv3juWnmHVUtSnuQ5W18A8nzFiP3bQDHBh%2FyH1pGC7NT68AKjEf&X-Amz-Signature=6066b6a33db8b451cc5b7625f333d85fd434294f2c3f50c19e3d703338472de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7BO4HJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2T26iHbA1z%2Bohii8Tpga4uAiK9CpJv8sdU80W48m38AiEAkWdXnfSZzw1ok9KoMS3WvIeakrOO1HdsutPsYGQRDlsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCZrTuUR120bG9r4BSrcA6l0LsklRofoE%2FZNP2JzSPsrg64R1OEtVAw8f%2F74DPtJY8UyseeS17FUVTTGt%2BUAAkcfX9%2BO4mmPAcj8oswFCKSQ2IYUqC8bcuElbUWevBnZs2yBMCycqRdQXzPciPUn8M0MccJXnT6TqDOkmlzgNOjmC%2FU%2FMmANqTQSYkU21q9QrfwGSOKeDxn2R0O8kmB9EBUa1pepFj7lI5FzOCmTVE1HDnXj%2BYgXybYzGL75Zk6FiP6zE9%2FJjL7DZ9J6I5xkwVNsHZiNsrWn2iBrE3VI%2BLb%2BEFVYbc9v4%2FXbQvTsdrwX1ojNccIp1j7B9oB49mGehys5c5hEh6vZnVo0RRX%2BTtNYl0uOiA%2BCDgGrT33%2BAJfOydQMu7vO6VELaUucKLyLlKrRZ7CULlbcCCGWEBw%2FoysagY3eYQq4B%2FzBuqSoF%2BKSSU%2BmO4KQ8Hh0iNNSJy9NboAILOA8qA2oD7jVsFBrPKtAvKNpCwBMTr16OarLbwU40D4ZPT%2FediwHhWYWIz6C%2BV4gnbgeK3qaoyrSbRwCqCospR%2FYGQQVA9oBgl7LslCfRLdwUDmxh7B%2FxFiRzBbVuSugk1y1hxDBEQJ08rcRyfEY9tOjD9ZP3QPh6j%2B7XU1MLxljzp%2B7PmAjgXwyMMWm0MkGOqUBD3yaibbvo%2FYHOrSgYD1fnAfT58y8Op7sad4sDM2JzOGwwi0aUDjvHjzc94mHIPJVQRIvPgIbck6PmeQCO3cnGOzJhnA4%2FXZynmg4VeGJPAXTYG9KCGeTdH%2FwJErewZJeqFH%2FzTDCZFZa53T3MeK7kfJP%2F4e0wGkBakcDrz0BdEv3juWnmHVUtSnuQ5W18A8nzFiP3bQDHBh%2FyH1pGC7NT68AKjEf&X-Amz-Signature=5d75538a6e4e8cf341bc232f99a186f1b1f5ec60089630656a0e5650fd8f4804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
