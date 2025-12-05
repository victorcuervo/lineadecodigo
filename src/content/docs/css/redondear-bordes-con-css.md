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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSX7QQN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX62huUSGUbzFJ4V4hD%2F91QozUEe5wDrp9OPhLMQCEGwIhAP%2BROZTxhw%2FukALfCprJ7fxj2RrvyX4HeUuRzRhLMcgVKv8DCE8QABoMNjM3NDIzMTgzODA1IgypAgU0Vf3E2LlnHCsq3AMViPzIMKmUWqG9lW47ZdV8eNNiFRMNson6LaDe0FsiN393y4A%2B6NCqrWt2GNJKIsJjo9IvfLpuiuxnv8O%2FKQv537OvvoXff9OvK6DFJ8rHsp43r5JsehsHsWRyag2aiMgxu4NT6tOkk4%2FqwpAAfn9W3baygXI4U5xMcWLut1o3iF7D%2BUGbm1nf8qqnFF%2BRdmk67QFdznJnTgzX0nVmeQ1Kaodi6Vk51Lf%2B%2BuuBoxb1LLutJDmPNGr3iiAOa1i444KrCXwuaogcyAXbaV8JH%2B5iel8TGVLvhE98HP0cs6deguW7g8p5xRoJnSuZocvzKnsZLJsTmSwJ4JpCsaM4xRVK%2B9gbTc0l5PvUDMaxGAzIKhUIPu54j8ozOOCFLzzOFtOVUE%2BA%2FB1%2FASAY4vynocw%2FJf2GrDpyv9arFfGi%2FgWWzQmywmbW4e7Uw%2B7VxBn3jJoO2AV%2B043Z9jEJw4jI6EXkkfxNugk5I4ApIli2NKi5Wvzb1ysDHy9gqKuQjlUKSU9LTAD6c6X3VTdcS5xbw8N3gXzuU7EeHIdFKwjoA564xerKnRlrK%2BpHCVZoz8bbY3luLG3XIJXyC11hjf68%2B59Af2weZcSbQl7pJdPqsvH%2FWwYO0htqKS7HSWet%2BDDXjMjJBjqkAdULDYfR1%2BwNgE4RXXbRv%2FCVlQ2dglA0eKP6%2Bx3AYKr%2B%2FAo9IATiCVHdLiCfsuCQXg1G%2BYh0HYpdoM%2FP%2BJFJd%2BoyIdMuv0yPOopAEboc1iqs2meW4GqIagsRF2BFGHxAxBB%2BTBcHKnbwsHVqPhmKM8CoCdwekU2J1iaO5nqWDeCWpGESQoJP0ixyb6XUbSz9z44DWOzt9s%2BJ1RzD3b9wGmzbeOxK&X-Amz-Signature=d663dfe83676f25eb8c7850634ccec9ea495961618f5602b791c0aee1281de6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSX7QQN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX62huUSGUbzFJ4V4hD%2F91QozUEe5wDrp9OPhLMQCEGwIhAP%2BROZTxhw%2FukALfCprJ7fxj2RrvyX4HeUuRzRhLMcgVKv8DCE8QABoMNjM3NDIzMTgzODA1IgypAgU0Vf3E2LlnHCsq3AMViPzIMKmUWqG9lW47ZdV8eNNiFRMNson6LaDe0FsiN393y4A%2B6NCqrWt2GNJKIsJjo9IvfLpuiuxnv8O%2FKQv537OvvoXff9OvK6DFJ8rHsp43r5JsehsHsWRyag2aiMgxu4NT6tOkk4%2FqwpAAfn9W3baygXI4U5xMcWLut1o3iF7D%2BUGbm1nf8qqnFF%2BRdmk67QFdznJnTgzX0nVmeQ1Kaodi6Vk51Lf%2B%2BuuBoxb1LLutJDmPNGr3iiAOa1i444KrCXwuaogcyAXbaV8JH%2B5iel8TGVLvhE98HP0cs6deguW7g8p5xRoJnSuZocvzKnsZLJsTmSwJ4JpCsaM4xRVK%2B9gbTc0l5PvUDMaxGAzIKhUIPu54j8ozOOCFLzzOFtOVUE%2BA%2FB1%2FASAY4vynocw%2FJf2GrDpyv9arFfGi%2FgWWzQmywmbW4e7Uw%2B7VxBn3jJoO2AV%2B043Z9jEJw4jI6EXkkfxNugk5I4ApIli2NKi5Wvzb1ysDHy9gqKuQjlUKSU9LTAD6c6X3VTdcS5xbw8N3gXzuU7EeHIdFKwjoA564xerKnRlrK%2BpHCVZoz8bbY3luLG3XIJXyC11hjf68%2B59Af2weZcSbQl7pJdPqsvH%2FWwYO0htqKS7HSWet%2BDDXjMjJBjqkAdULDYfR1%2BwNgE4RXXbRv%2FCVlQ2dglA0eKP6%2Bx3AYKr%2B%2FAo9IATiCVHdLiCfsuCQXg1G%2BYh0HYpdoM%2FP%2BJFJd%2BoyIdMuv0yPOopAEboc1iqs2meW4GqIagsRF2BFGHxAxBB%2BTBcHKnbwsHVqPhmKM8CoCdwekU2J1iaO5nqWDeCWpGESQoJP0ixyb6XUbSz9z44DWOzt9s%2BJ1RzD3b9wGmzbeOxK&X-Amz-Signature=52316e9ab2aadaea08f13f7b55cea6e06e21ee8631125eee8cda09850f2893fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
