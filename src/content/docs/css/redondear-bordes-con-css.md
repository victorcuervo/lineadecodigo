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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR22DUKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCZlR6jOnSJjrwJNL2ODnGSlbCVLb%2BkCZSjf7%2BB1hSoBwIhAO1n41bgu5mfoIufcFc26Bn6GqV8%2BWKOlDZwygA5eMJyKv8DCEgQABoMNjM3NDIzMTgzODA1IgxGul4p30nP%2BRFXEOgq3AMabRPPqQ33TOivBZlET5r7V3knDhoJm4K0GgxRCjJPWbMAM8Gh4lcpWp792F%2BkY02l%2F4T5%2F6sma2w3YJ0dplQEyIsBLyNbOi6cZCqWBmk9KJwYqZak8EJJHrvy9rx9y9dO3FzggyH6hHdQ3V6Rv%2Bv5Faqhh94zQeLXZ3GlxnUIPiAJW%2BYA1xLw3KTHJVO2XUOiDmM7yNHTvy8GCp1veR2x2Wj9NMOzi%2BIyrlCbbQLz8eQ%2Bw%2F1F8X%2FdlAz1YP6UHWokJyBnJxAbpTyIH43btZN%2FCJjNavOZCl%2F0n9akITte4b8zxfwEjYQRJENAjZcPfAspKUyTp%2Fvjm%2B1X7P7LRhgecOHnYU8spn2bBej5X3JuhynVT1gA%2Fa8GAJbwshZg0hfyfy3Sxngs6nAcB6j4bEG%2BYZgVc3lWn6DhNRbnLrHGk0TZG9t9ZrqHz%2BMckanS%2Bjb3BKh5c0zLbvp1ipykhGNmqSZ8DNmZJjAop%2Fukb1rz9iu%2F3e4bekVqx0PPug%2F4M0WEpXFiGx%2FQUFedXT222Fv41DkUhts5MHQ0b%2BGVnVfH8NYe0ClFcYXo2z1rImIqqv0%2FTu0lKfsSUXJn9m6EBCXeQLtXCd%2BmHr7uHY84H9z%2BOa0whb3ZCU%2BPy89iVjC5v8bJBjqkAQpX%2FWGwIzsCsVVXAGt39hBAZEB6Za8bypwA8c4ZIvWbX0AgxR3OD%2BukIZOeVqOw7i%2B1EqQqUK5K5vYGe4BK55ek5R%2BxLMSn1YaAsj1o5eOL9VQWwfJogdjgisAeyKa6BAtBk61fD0UluL4uFrEgo3OW2%2BBMP9jpjlnlmxr1bp9EVTJuqHNiW3JD0vtrkARUv3tWWCMUj1PmBycPmyRyOpX9XJv9&X-Amz-Signature=abd1957035d7316996055d3a5703d6eb03bbf792cbb48590298122a56f4dc1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR22DUKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCZlR6jOnSJjrwJNL2ODnGSlbCVLb%2BkCZSjf7%2BB1hSoBwIhAO1n41bgu5mfoIufcFc26Bn6GqV8%2BWKOlDZwygA5eMJyKv8DCEgQABoMNjM3NDIzMTgzODA1IgxGul4p30nP%2BRFXEOgq3AMabRPPqQ33TOivBZlET5r7V3knDhoJm4K0GgxRCjJPWbMAM8Gh4lcpWp792F%2BkY02l%2F4T5%2F6sma2w3YJ0dplQEyIsBLyNbOi6cZCqWBmk9KJwYqZak8EJJHrvy9rx9y9dO3FzggyH6hHdQ3V6Rv%2Bv5Faqhh94zQeLXZ3GlxnUIPiAJW%2BYA1xLw3KTHJVO2XUOiDmM7yNHTvy8GCp1veR2x2Wj9NMOzi%2BIyrlCbbQLz8eQ%2Bw%2F1F8X%2FdlAz1YP6UHWokJyBnJxAbpTyIH43btZN%2FCJjNavOZCl%2F0n9akITte4b8zxfwEjYQRJENAjZcPfAspKUyTp%2Fvjm%2B1X7P7LRhgecOHnYU8spn2bBej5X3JuhynVT1gA%2Fa8GAJbwshZg0hfyfy3Sxngs6nAcB6j4bEG%2BYZgVc3lWn6DhNRbnLrHGk0TZG9t9ZrqHz%2BMckanS%2Bjb3BKh5c0zLbvp1ipykhGNmqSZ8DNmZJjAop%2Fukb1rz9iu%2F3e4bekVqx0PPug%2F4M0WEpXFiGx%2FQUFedXT222Fv41DkUhts5MHQ0b%2BGVnVfH8NYe0ClFcYXo2z1rImIqqv0%2FTu0lKfsSUXJn9m6EBCXeQLtXCd%2BmHr7uHY84H9z%2BOa0whb3ZCU%2BPy89iVjC5v8bJBjqkAQpX%2FWGwIzsCsVVXAGt39hBAZEB6Za8bypwA8c4ZIvWbX0AgxR3OD%2BukIZOeVqOw7i%2B1EqQqUK5K5vYGe4BK55ek5R%2BxLMSn1YaAsj1o5eOL9VQWwfJogdjgisAeyKa6BAtBk61fD0UluL4uFrEgo3OW2%2BBMP9jpjlnlmxr1bp9EVTJuqHNiW3JD0vtrkARUv3tWWCMUj1PmBycPmyRyOpX9XJv9&X-Amz-Signature=1b157dba81de7fa16280e3ab347cfae11c9457cdb5efe85060329871d15d1144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
