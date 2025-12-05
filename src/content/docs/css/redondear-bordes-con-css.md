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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFCQI7D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEWrlrjUwzVmg42gi1in2S5H4zcoD%2F7DKAu4qsGwoZVAiEAmDOsK9DVpUKxhVIhgpI7jaaiN1ru0jsyPjuoT7fHa6Iq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIOJMi4k8oX8ZQJt7ircAwhhebTnVL%2BeUqtl4OFeRr4b%2FyfADrVT3LPo7m5erhWK9%2F2%2F0AjOUPK%2FCfmsO4BTBinf2VkFLhKlNNuIG9uYXhBqPbbSNltAdLdeCreCP7kI6eip5Y%2FKAtk%2FVInRM6B8HdlkajPoMLLh1fT4kjfUELgUHcfeOBRH4s2cgIEUe5SHTE0cbQrGye1umKDxSMkrMj7fZQ%2B6ElU5S5rFO0jZHt67xevYC2Qqh2w1a9i%2FLkC7K3Oir7bm11phr0vM1SPMgCMdoR94n3fqcBHlYDCW32jFhDQ7aakJTNJ0ODopNY5sO2aPWs3tZa98zMJSyy05%2BGQI2JkIV1sRNOpWtdCQUhDQM2H8ygNu9pCaoJkwGQHYfpcfnR5R%2Bz3ETK1d0bjt2ewhhdCDzIZAOEsCy5mb80gs9VrfqDHaHHNKGUnAJqAa%2FkhmuYuTsG0VNhKfPCsF8YTehxghOZBp1diAg1TC81Jz4VRD89fRVTVjGNsHz0LRshWVs8cY55rjcc3HcLhV%2BtbLtS%2FVrGvz3wz7GjbYlM9KFQ1TBQvGRDKxGrQ5IhMh3E5i%2BJduAs7O2Jrt%2FfqPPcj2YJj0hEHckC6PnJMGdDxWqLNOjaOWeSO6jVPxuSt8EUw%2FkMNRl%2FirPacFMIfry8kGOqUBIEjqwgUZc%2FOgJ3YsEXoDGI1c%2FldNLYcr2ldGMcI7NGfP4clXLcBvqK2ByzEHUdMuhb9PNo8Wnl4njKhKBS4R0EtrY62NvkH2lrfM3nMHZuQAbjzblOuPeTyigtpM3gYPxAU9XBsTYaaQ4DNsjSXtCVxMd4IIX7o6zoHoTcjJt5m1n%2BRNQDAZNCOYKzaL3erJhPE6aiJawq7OA2DPsGYljjpHffl4&X-Amz-Signature=eae5a5f3d41b1ebaf56450ed122e27b27ab91d9e4dd82fc19a487b0d4e863db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFCQI7D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEWrlrjUwzVmg42gi1in2S5H4zcoD%2F7DKAu4qsGwoZVAiEAmDOsK9DVpUKxhVIhgpI7jaaiN1ru0jsyPjuoT7fHa6Iq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIOJMi4k8oX8ZQJt7ircAwhhebTnVL%2BeUqtl4OFeRr4b%2FyfADrVT3LPo7m5erhWK9%2F2%2F0AjOUPK%2FCfmsO4BTBinf2VkFLhKlNNuIG9uYXhBqPbbSNltAdLdeCreCP7kI6eip5Y%2FKAtk%2FVInRM6B8HdlkajPoMLLh1fT4kjfUELgUHcfeOBRH4s2cgIEUe5SHTE0cbQrGye1umKDxSMkrMj7fZQ%2B6ElU5S5rFO0jZHt67xevYC2Qqh2w1a9i%2FLkC7K3Oir7bm11phr0vM1SPMgCMdoR94n3fqcBHlYDCW32jFhDQ7aakJTNJ0ODopNY5sO2aPWs3tZa98zMJSyy05%2BGQI2JkIV1sRNOpWtdCQUhDQM2H8ygNu9pCaoJkwGQHYfpcfnR5R%2Bz3ETK1d0bjt2ewhhdCDzIZAOEsCy5mb80gs9VrfqDHaHHNKGUnAJqAa%2FkhmuYuTsG0VNhKfPCsF8YTehxghOZBp1diAg1TC81Jz4VRD89fRVTVjGNsHz0LRshWVs8cY55rjcc3HcLhV%2BtbLtS%2FVrGvz3wz7GjbYlM9KFQ1TBQvGRDKxGrQ5IhMh3E5i%2BJduAs7O2Jrt%2FfqPPcj2YJj0hEHckC6PnJMGdDxWqLNOjaOWeSO6jVPxuSt8EUw%2FkMNRl%2FirPacFMIfry8kGOqUBIEjqwgUZc%2FOgJ3YsEXoDGI1c%2FldNLYcr2ldGMcI7NGfP4clXLcBvqK2ByzEHUdMuhb9PNo8Wnl4njKhKBS4R0EtrY62NvkH2lrfM3nMHZuQAbjzblOuPeTyigtpM3gYPxAU9XBsTYaaQ4DNsjSXtCVxMd4IIX7o6zoHoTcjJt5m1n%2BRNQDAZNCOYKzaL3erJhPE6aiJawq7OA2DPsGYljjpHffl4&X-Amz-Signature=617dadd6d4f3b0be6457542b880549d54aa9d451bbc968154ff33876ff230d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
