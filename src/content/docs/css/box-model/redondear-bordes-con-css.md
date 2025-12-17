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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEMX4GU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcQmxS7tHNY9H3Jt5YxTOU4hrTyVnniVv%2ByX%2BULax%2F7AiEA7qB8A57stzonLzXIVPTjspF%2FLBzspFdoLO0vij8r%2FYMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNBJpy7b3AXxdw07pircA8GaeDn%2BnBg8LR2ZWOez8RSFE0fkJNTOHYp%2FBdZfefK%2BpNGVd2ZkHi5CZFdWaa3ffQoC2z8p0ntbu1O5%2B03Rt8tK9EuPoXqV9oAWMeAwzlr5DUf8wb31KTJvoWZu43YB2NpVq3qefcFeO8gyeQVacqBklM2EOxTu6cMrKAyjfpNvlm%2F2sKlKL33qTlhLV1KeOG7CoSYZVXnc1eFqLhZJ2iVcWdNMlktmeH2FFdBWXzJOJv89iQNMiKz8NVz8VtkFPxGU%2B5afDuueKWLbUuiYZQVaI%2Fp641KBxHUQSxAFPrhEpq3u%2FQS%2FzZDNQ%2B6kyusYiN4aIXMC0TCBbJckr%2F9rhRP833Wf6hJbwg0OjVUOSt0EmD8iRiPOip%2Fhccq7HfZo4m1QqR3PnXw%2BB%2B4Nbpir3xIbRgBsXmzKcO61JrWe5YfYcbSmf8jE2YZOya8SvHBW%2FahTNoBQ9Zzop5fvM8h6LTM156puB6z58SMJIgcg0kxIm1x4jaKb%2FRCypqwbXEvBPTwE63cdeCkR%2Fx%2FyiFAr1n%2Bt%2FnxkITNCgvwGopQUXHi3DwkfbnBwWSqCAY00qdRCu6j%2FfK4UKRHm9cap1gpFZnFYL6yC1cAiyE0ZNXAK9LJCj7WdC5KVwuy%2BpvtwMKzhisoGOqUBsE3jYJv60dINa25N2y4Au4RxXYFqhVtCmvsYxTTffh5S3lYumPAMox1n7SSPpXKnEUot2nXJEVydOB6NmARyvonr71yEae8mVO%2B73AKrtxFJaD61Ap9xqn5GhiPO5kSGNCx1useWDzQh6KbrX5ezXTuhwI02dNTt6A32NilrYR3c0Eh2r9JQ4hyGMbwt6pRpzri55ca%2FUtPCXULlecBcthjQK2zm&X-Amz-Signature=f220fea7460cdda39548549f9d8230793463647ce8bd35b0695c0de6573106da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEMX4GU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcQmxS7tHNY9H3Jt5YxTOU4hrTyVnniVv%2ByX%2BULax%2F7AiEA7qB8A57stzonLzXIVPTjspF%2FLBzspFdoLO0vij8r%2FYMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNBJpy7b3AXxdw07pircA8GaeDn%2BnBg8LR2ZWOez8RSFE0fkJNTOHYp%2FBdZfefK%2BpNGVd2ZkHi5CZFdWaa3ffQoC2z8p0ntbu1O5%2B03Rt8tK9EuPoXqV9oAWMeAwzlr5DUf8wb31KTJvoWZu43YB2NpVq3qefcFeO8gyeQVacqBklM2EOxTu6cMrKAyjfpNvlm%2F2sKlKL33qTlhLV1KeOG7CoSYZVXnc1eFqLhZJ2iVcWdNMlktmeH2FFdBWXzJOJv89iQNMiKz8NVz8VtkFPxGU%2B5afDuueKWLbUuiYZQVaI%2Fp641KBxHUQSxAFPrhEpq3u%2FQS%2FzZDNQ%2B6kyusYiN4aIXMC0TCBbJckr%2F9rhRP833Wf6hJbwg0OjVUOSt0EmD8iRiPOip%2Fhccq7HfZo4m1QqR3PnXw%2BB%2B4Nbpir3xIbRgBsXmzKcO61JrWe5YfYcbSmf8jE2YZOya8SvHBW%2FahTNoBQ9Zzop5fvM8h6LTM156puB6z58SMJIgcg0kxIm1x4jaKb%2FRCypqwbXEvBPTwE63cdeCkR%2Fx%2FyiFAr1n%2Bt%2FnxkITNCgvwGopQUXHi3DwkfbnBwWSqCAY00qdRCu6j%2FfK4UKRHm9cap1gpFZnFYL6yC1cAiyE0ZNXAK9LJCj7WdC5KVwuy%2BpvtwMKzhisoGOqUBsE3jYJv60dINa25N2y4Au4RxXYFqhVtCmvsYxTTffh5S3lYumPAMox1n7SSPpXKnEUot2nXJEVydOB6NmARyvonr71yEae8mVO%2B73AKrtxFJaD61Ap9xqn5GhiPO5kSGNCx1useWDzQh6KbrX5ezXTuhwI02dNTt6A32NilrYR3c0Eh2r9JQ4hyGMbwt6pRpzri55ca%2FUtPCXULlecBcthjQK2zm&X-Amz-Signature=3a44ebb6f252028a17f6b062a5944b81ee975ab9d901ecafcc710282f250b04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
