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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U7T47H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaBOnOENri%2FF7HN5OD8RAFwozsPpeFvl18zP5NSpFWfgIgT4QYHot%2BzvU2ahdFn49NwzM5Qc3s2RmnRoxHgxNBrY0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqGboPlU5fHftI3ESrcA8XOpXSfFqv4%2FWdzEGA%2FGWxOWAc6itiB4XT3W1FGQSE6npo7I%2BHIO6kMHL49J5zhSDSHu8O7PuVZUNOvUxJE%2B%2FmlRQ4wgeQHiFNSEFZNAT2tDQ1TZbNzsjJeAlevKFrs8LNcm%2BAnf4cEe1ZVG04Q51cO3eygpPfT4FVx2CY25dCah14trw7YKls2botGLvqoTH9UTWbNt7uvhAWCtFjiK0BnCX4czU7SLpSYnGckGVN0NPweWAe4cIYLjPL5LrmHh8555tWXxCqhT%2FboAKirW9BFgUfDNpiazbH12%2BOKKwKRJXDUvqf9Il6zv1Iof6XdQ4KBn97HlKH1vGxOTWkBWMJDfIexIvoUmG%2B0k%2FplOMuxulOXIWwVIKyvws4vpGG%2FiacjlG1n9EAio2WJPKP8Iaax0ogTRTVd0MUebd7LudI0Hgc9m2hNkCPkEtQwXEvVj0A1Knsx0gBgWabgL6qnd%2Bf8F%2BLHVBm51DP8eYHNrF6k9wsXbdoU1EumFNcnDb54kW0MFiAqqNzSHQOkwmaWDiIl5VKD56QTm9k4cGH9%2Fi4iezmUkdQjfNwZZdN8Tlm%2Fu37Q6sWHaaDZB8JOmrldwukHRerP3TUUDwTM4eBrkhMz%2B%2FHttOpvdWcQS9EiMNat3skGOqUBNjqvAj7bOlGQ8kiIBObCj%2BzSuCr1X7wYMLXtArBaHxGVtkEItunkrm%2BhDjOsodaeJd84gdeTnevPftLPeJlcqBvqMNxxPfNUhhDxhiSd12oNLnUQkEwimSQoDpFNU2podYC2Y3i8aqxxKoL0%2BWeJS1m2%2Fhwb74OyUZugYWWk3nIpE8NsqDU3xTOIcLQxkEdHJGbXAF5VMpGHDYhgDwNY9vy8PfNC&X-Amz-Signature=f547f5c0c7649d718df1a790245aae082a31de505e2b3f87f01d89619fcb58e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U7T47H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaBOnOENri%2FF7HN5OD8RAFwozsPpeFvl18zP5NSpFWfgIgT4QYHot%2BzvU2ahdFn49NwzM5Qc3s2RmnRoxHgxNBrY0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqGboPlU5fHftI3ESrcA8XOpXSfFqv4%2FWdzEGA%2FGWxOWAc6itiB4XT3W1FGQSE6npo7I%2BHIO6kMHL49J5zhSDSHu8O7PuVZUNOvUxJE%2B%2FmlRQ4wgeQHiFNSEFZNAT2tDQ1TZbNzsjJeAlevKFrs8LNcm%2BAnf4cEe1ZVG04Q51cO3eygpPfT4FVx2CY25dCah14trw7YKls2botGLvqoTH9UTWbNt7uvhAWCtFjiK0BnCX4czU7SLpSYnGckGVN0NPweWAe4cIYLjPL5LrmHh8555tWXxCqhT%2FboAKirW9BFgUfDNpiazbH12%2BOKKwKRJXDUvqf9Il6zv1Iof6XdQ4KBn97HlKH1vGxOTWkBWMJDfIexIvoUmG%2B0k%2FplOMuxulOXIWwVIKyvws4vpGG%2FiacjlG1n9EAio2WJPKP8Iaax0ogTRTVd0MUebd7LudI0Hgc9m2hNkCPkEtQwXEvVj0A1Knsx0gBgWabgL6qnd%2Bf8F%2BLHVBm51DP8eYHNrF6k9wsXbdoU1EumFNcnDb54kW0MFiAqqNzSHQOkwmaWDiIl5VKD56QTm9k4cGH9%2Fi4iezmUkdQjfNwZZdN8Tlm%2Fu37Q6sWHaaDZB8JOmrldwukHRerP3TUUDwTM4eBrkhMz%2B%2FHttOpvdWcQS9EiMNat3skGOqUBNjqvAj7bOlGQ8kiIBObCj%2BzSuCr1X7wYMLXtArBaHxGVtkEItunkrm%2BhDjOsodaeJd84gdeTnevPftLPeJlcqBvqMNxxPfNUhhDxhiSd12oNLnUQkEwimSQoDpFNU2podYC2Y3i8aqxxKoL0%2BWeJS1m2%2Fhwb74OyUZugYWWk3nIpE8NsqDU3xTOIcLQxkEdHJGbXAF5VMpGHDYhgDwNY9vy8PfNC&X-Amz-Signature=68559e966a9e4d61388d1d211fbb856ed906846d5f4d79c0a2c0f5c3a69467d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
