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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MA3VV4W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaLjOXYAp1whWbfNdlrvriRc1JHkLAjZa7KQqL4rBqDAiEAnqHmWRrLZ50hkhcTXTBCd%2BhHGTQ1Yy%2BSGf26MxKZwi8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKySqYRiS7tAc4A7hircA0rFZNzcLwZqwrYJ266x3WA28BzK3fDZ%2FxwBYhjoIcdC3XrNZ8G3k7cLWLYCwZOo5yVBxsJxaUxyOxR%2BnfM1czrNRky2mygN%2FV8CZdNqo0H4LzYumu5FLEk2iZBMlJicaoE3XBAwOLfLIOMY03KpbuyW%2B%2BVMGsMhdvzUDaBCIIoBTTLW7ICa0LGDTorojxPQWuJ%2BxiJ73k850d70wEa8PRHSZBpTHj%2FXPU%2BTTgEkCmtaCrYsMvArFkSN1Y6DT%2BYI%2BbtxynJd9Xz%2FTnjLVN4N1pMN3HPN9CZXavnycyy6nmf84DwS3hZpNPU%2BcDjzQifWh6kuGpcYy584ulzFpm1fEKERJMOyl9UT4l64XsGxASk6le9MBn7BJLL52tjBXlv6amFIxE0c9fK%2B4jYmvN5BhQRgcR4EN6kKUqTe7c2NMHCQD9AOZVW9A9hcdr2mxNfrYStMyQXdd0CU%2FUwPZ%2FP%2Bl%2F3A0v55t6VZ2U1ZWtlzhdV8gzkPglAJbHEudmqShfWkzYvZ0UEZ766db28%2F7kam7STlOWVp2VPNudMO8EKlCYyFkZEDZ%2BwK0L%2F%2FzIAiD8MqwXqC2KG2k%2BTo7bVIllnUPzXLhhWuoq%2B5AgSJhT3qJmVbsO5NGdSahnmFXMT0MIbyy8kGOqUBav%2FFGrWflFx%2B7SUYo0zwf9j3yABYT4dSCw6Jde3dEjCNQECOcZo9%2FbyWFzweW2yKyOiTas02x0L%2BgRsSthm3Dbyuc5kZpj%2FwDgzRXHJ4t%2Ft3KFHnhcz2KMauwhmN52m9LDQX8z39G2Qd4SpBjasodrKla7n0hIJez0KoN3lBCK8R6u3WDlF%2BLuiFfeKWi0qn8k7qEPEdjj9549RS8Lcl4FW4%2FGpr&X-Amz-Signature=5692eb0c2119a0f04acb46ee5542428d8fa088c5f9cb3acea4066cb7d8702e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MA3VV4W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaLjOXYAp1whWbfNdlrvriRc1JHkLAjZa7KQqL4rBqDAiEAnqHmWRrLZ50hkhcTXTBCd%2BhHGTQ1Yy%2BSGf26MxKZwi8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKySqYRiS7tAc4A7hircA0rFZNzcLwZqwrYJ266x3WA28BzK3fDZ%2FxwBYhjoIcdC3XrNZ8G3k7cLWLYCwZOo5yVBxsJxaUxyOxR%2BnfM1czrNRky2mygN%2FV8CZdNqo0H4LzYumu5FLEk2iZBMlJicaoE3XBAwOLfLIOMY03KpbuyW%2B%2BVMGsMhdvzUDaBCIIoBTTLW7ICa0LGDTorojxPQWuJ%2BxiJ73k850d70wEa8PRHSZBpTHj%2FXPU%2BTTgEkCmtaCrYsMvArFkSN1Y6DT%2BYI%2BbtxynJd9Xz%2FTnjLVN4N1pMN3HPN9CZXavnycyy6nmf84DwS3hZpNPU%2BcDjzQifWh6kuGpcYy584ulzFpm1fEKERJMOyl9UT4l64XsGxASk6le9MBn7BJLL52tjBXlv6amFIxE0c9fK%2B4jYmvN5BhQRgcR4EN6kKUqTe7c2NMHCQD9AOZVW9A9hcdr2mxNfrYStMyQXdd0CU%2FUwPZ%2FP%2Bl%2F3A0v55t6VZ2U1ZWtlzhdV8gzkPglAJbHEudmqShfWkzYvZ0UEZ766db28%2F7kam7STlOWVp2VPNudMO8EKlCYyFkZEDZ%2BwK0L%2F%2FzIAiD8MqwXqC2KG2k%2BTo7bVIllnUPzXLhhWuoq%2B5AgSJhT3qJmVbsO5NGdSahnmFXMT0MIbyy8kGOqUBav%2FFGrWflFx%2B7SUYo0zwf9j3yABYT4dSCw6Jde3dEjCNQECOcZo9%2FbyWFzweW2yKyOiTas02x0L%2BgRsSthm3Dbyuc5kZpj%2FwDgzRXHJ4t%2Ft3KFHnhcz2KMauwhmN52m9LDQX8z39G2Qd4SpBjasodrKla7n0hIJez0KoN3lBCK8R6u3WDlF%2BLuiFfeKWi0qn8k7qEPEdjj9549RS8Lcl4FW4%2FGpr&X-Amz-Signature=3d8769523ad75efae24a186d424fa38fbf0b0a4b0f768bf645117d68b8b6c448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
