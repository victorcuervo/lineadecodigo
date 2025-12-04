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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYE533M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi2zMFeMhjGNutX3uLnTeLVfS%2F1AzBWsKrI7UKNS9QhgIhAP69xeOQVgrK3tFe4qV6B7LfkowN6iEehegXj60GVu4zKv8DCEkQABoMNjM3NDIzMTgzODA1IgzQsZiO8S6rLAvaevQq3AOy5nmCbymiO2pb9HiMpfTHEq%2BeXmLZzn7xS2Jj1NiuNyryVp%2FUX04pS1eKzGrH6vVXNmFHfr7yGvwS3riY8yub5eXFWIB9I6IEYqSzkR1M7PMonk7k2SkfKr6CR8kbLJH1q%2BblbZgfS4Rin34N9jeX3zde%2FC4TXtUejRV7jMcfVRY4NEGlHs2PhDypXCsEXp11RyKLlHIMDn%2BikhM8iihjfKAz0ss9mnqukOChgHKwU9nui22YQBATflJHCgm2UVHmbb2%2FQsk%2FUf%2FOEWF3SWFMEvGnv3zxfPZcuHm2%2FtfaJw%2FRAJ4Tgqzj5IBLqom%2FFhnppuGSO%2FBT%2FW5EwI5pKlmJK5fErCxYZ%2FVuv4TqEo6aZ9kjVGC5YZ4AH%2BVzfr4xJuYYLMnQKa%2FyIp%2Fl13nc%2Fjgp%2F4fG3WUD%2B9Q8zkXKB5%2FY6dHArcShOIXo6TNX4glEk4qR6ETGMqTkUfZN79J1jtR2iyuEGnMu62d8UA6BwXCg1rFYRJ69D3c7dsSlVWM5po8Vg2WkeJrqUw49eFJqRXcpn3np4UfO5I6FmM71e6tI1dP1bEX8o4g%2BlNuYoEpHCFi01J4ts%2BCpVzq6xLPBnY4oqk9F6AXCQUKwv7wZ9gGR%2BscFh2lBQY85BUsjwDD328bJBjqkARQ57RWaCjidTpgNXXwcJESHk%2FdEjoxf0O%2FQZBCag1UFkKYnGvD%2F8jT2B22xeHPiG4fgyfklUm8vpSOF54JqC7zlBGNWp5kvEK2ZX7%2FbqNGPwhJpc1bwLPhoOzcVXradflHO4lD%2BojykkJrXI1Ye1YET8yGUW3VZ4n8OGiE3DIkaYFhLxSFbWsleXDZa2lzdT0OLlhvu0zTQN%2F4dOItOhswIqhRA&X-Amz-Signature=a5ea77f2c4af72b50abfd4f8f3d7be995197881f216b214726084a8689fbcbcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYE533M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi2zMFeMhjGNutX3uLnTeLVfS%2F1AzBWsKrI7UKNS9QhgIhAP69xeOQVgrK3tFe4qV6B7LfkowN6iEehegXj60GVu4zKv8DCEkQABoMNjM3NDIzMTgzODA1IgzQsZiO8S6rLAvaevQq3AOy5nmCbymiO2pb9HiMpfTHEq%2BeXmLZzn7xS2Jj1NiuNyryVp%2FUX04pS1eKzGrH6vVXNmFHfr7yGvwS3riY8yub5eXFWIB9I6IEYqSzkR1M7PMonk7k2SkfKr6CR8kbLJH1q%2BblbZgfS4Rin34N9jeX3zde%2FC4TXtUejRV7jMcfVRY4NEGlHs2PhDypXCsEXp11RyKLlHIMDn%2BikhM8iihjfKAz0ss9mnqukOChgHKwU9nui22YQBATflJHCgm2UVHmbb2%2FQsk%2FUf%2FOEWF3SWFMEvGnv3zxfPZcuHm2%2FtfaJw%2FRAJ4Tgqzj5IBLqom%2FFhnppuGSO%2FBT%2FW5EwI5pKlmJK5fErCxYZ%2FVuv4TqEo6aZ9kjVGC5YZ4AH%2BVzfr4xJuYYLMnQKa%2FyIp%2Fl13nc%2Fjgp%2F4fG3WUD%2B9Q8zkXKB5%2FY6dHArcShOIXo6TNX4glEk4qR6ETGMqTkUfZN79J1jtR2iyuEGnMu62d8UA6BwXCg1rFYRJ69D3c7dsSlVWM5po8Vg2WkeJrqUw49eFJqRXcpn3np4UfO5I6FmM71e6tI1dP1bEX8o4g%2BlNuYoEpHCFi01J4ts%2BCpVzq6xLPBnY4oqk9F6AXCQUKwv7wZ9gGR%2BscFh2lBQY85BUsjwDD328bJBjqkARQ57RWaCjidTpgNXXwcJESHk%2FdEjoxf0O%2FQZBCag1UFkKYnGvD%2F8jT2B22xeHPiG4fgyfklUm8vpSOF54JqC7zlBGNWp5kvEK2ZX7%2FbqNGPwhJpc1bwLPhoOzcVXradflHO4lD%2BojykkJrXI1Ye1YET8yGUW3VZ4n8OGiE3DIkaYFhLxSFbWsleXDZa2lzdT0OLlhvu0zTQN%2F4dOItOhswIqhRA&X-Amz-Signature=65b68b87e2f84c0f7c77504ed01e5e1cd1a712e87a5ea2670d9b24a93bb0e8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
