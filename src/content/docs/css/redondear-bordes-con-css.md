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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCUN4WK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFXYbcj3pnX%2F1gNneChPUxwFNe8XKvioIG3I5d81HzLqAiEAsIF%2B5JLYjXXmKYDYEEQScgb0ENOk%2BX1goKw%2B9GOh%2F1gq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDO5pTgRtiGzSyadYryrcA5NSowRlNilhXGoQl%2FwnacVJaUu2hypWREJgANasXS8oU5L4obKUbWURIw6A1EMuPR7gFYnfKSRFRoY1boVP99FANhOSNLyJ2IJShDOA19RM6XtoqHXYsMiEkE8%2F4iI370SxIJJ3bNKcfGgry8%2B9qykAfPglY58Goo9aUMbHLR06bRF4Ro%2B87p%2BsZUvrzyFWpfJwm%2FDMCRodWozwucwa%2FE2XCkcf22xaBOeqkRtCWLBBWtDuO7HTbuHT%2BU%2B00V6DoGnTGsE41UgGn2sOWQUt0Ng68CTig0ArK3bGZIH82HnZMmAkff5arboQ6kBWOLI0Ade2ZCgWxNANuCX7TCdD9f2jpRtEPylSxDstYZfUEgBsoSiygghO0qF%2Fx4nRY2iZl7qYC8yYNxG2qeuu%2FBsv%2BX2xBR%2BpH5KVKZiCxLprC3AgOpVGX6CsvaMSXQeIY5uyTVg76ePfS8xKK4K2%2FFJCd%2F5cGxWUyHrqAaiLhzzIhuTm4fncWORbGKRr1%2Fz1NON0Hch9hZaZvDgI6fTSCk2%2Fa2yXtZQP%2BXcCXFOuIaSQsDmm2nFQFxsW8vYCpPWioO8HEBCcSFBXMDO0TDVWWSN5Yr9XvZt4I8DTNvjNSnf7OKOQ%2FVKOEDgWReecEQnXMPjUw8kGOqUBpPQ%2FjN8dpzi5pDOcJO9%2BrqZycX82n95e3PRNvVUJhA8GvCVD70f35OxxgwQfbVwHRwS2Wyx5EtNr8IBMwvIVaZnQjuiHcq1%2BSqLthMxWYmx8AVm8L%2FMJCQ%2Fgk8SDBC1trv4b7G2%2BGcFd2C6GQcHHcMosZQEWlZ%2Fzal4b4C7azZfnMk1AAI2SsuNIyOl5%2BKh4tBQ4S%2FXh5MF6yMRPhZmNtE9F1V17&X-Amz-Signature=35e73818b6e73613e0238a8c36213ad39ca91dac7965aaaaa06a787d97fa4907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCUN4WK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFXYbcj3pnX%2F1gNneChPUxwFNe8XKvioIG3I5d81HzLqAiEAsIF%2B5JLYjXXmKYDYEEQScgb0ENOk%2BX1goKw%2B9GOh%2F1gq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDO5pTgRtiGzSyadYryrcA5NSowRlNilhXGoQl%2FwnacVJaUu2hypWREJgANasXS8oU5L4obKUbWURIw6A1EMuPR7gFYnfKSRFRoY1boVP99FANhOSNLyJ2IJShDOA19RM6XtoqHXYsMiEkE8%2F4iI370SxIJJ3bNKcfGgry8%2B9qykAfPglY58Goo9aUMbHLR06bRF4Ro%2B87p%2BsZUvrzyFWpfJwm%2FDMCRodWozwucwa%2FE2XCkcf22xaBOeqkRtCWLBBWtDuO7HTbuHT%2BU%2B00V6DoGnTGsE41UgGn2sOWQUt0Ng68CTig0ArK3bGZIH82HnZMmAkff5arboQ6kBWOLI0Ade2ZCgWxNANuCX7TCdD9f2jpRtEPylSxDstYZfUEgBsoSiygghO0qF%2Fx4nRY2iZl7qYC8yYNxG2qeuu%2FBsv%2BX2xBR%2BpH5KVKZiCxLprC3AgOpVGX6CsvaMSXQeIY5uyTVg76ePfS8xKK4K2%2FFJCd%2F5cGxWUyHrqAaiLhzzIhuTm4fncWORbGKRr1%2Fz1NON0Hch9hZaZvDgI6fTSCk2%2Fa2yXtZQP%2BXcCXFOuIaSQsDmm2nFQFxsW8vYCpPWioO8HEBCcSFBXMDO0TDVWWSN5Yr9XvZt4I8DTNvjNSnf7OKOQ%2FVKOEDgWReecEQnXMPjUw8kGOqUBpPQ%2FjN8dpzi5pDOcJO9%2BrqZycX82n95e3PRNvVUJhA8GvCVD70f35OxxgwQfbVwHRwS2Wyx5EtNr8IBMwvIVaZnQjuiHcq1%2BSqLthMxWYmx8AVm8L%2FMJCQ%2Fgk8SDBC1trv4b7G2%2BGcFd2C6GQcHHcMosZQEWlZ%2Fzal4b4C7azZfnMk1AAI2SsuNIyOl5%2BKh4tBQ4S%2FXh5MF6yMRPhZmNtE9F1V17&X-Amz-Signature=9f014bddcd8e94b243fb4cd66df4ef6443c2490a1cce9ee3031cca63ea7e7f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
