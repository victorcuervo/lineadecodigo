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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQYYEAO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9QbE1TNCgMYQyA7fX%2B6bXci%2BpJytgW8Q3iBVDGTcfuwIgMfaeK0be%2BYetrj%2Ffc0c53lT8XIX75LaiMY8NUuoImNcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEItPHpOP1oLTeIEsCrcAzCcbkYLKotKiVmz7Y%2BENtZDOykDRc%2BvPLvI7EcoRzeIe020SqHYQNSFxYNzDWvXvQwVoaGnZigAxVZ8hCgsOzb7nvDBggVxg9c3AY7wjASvvy9E%2F3jcaoWHHZymvH%2FDoKd%2B%2FBkbC4MURNBolIV7ixubFzsAnubBAJYXboj0Y4V%2FqQp7CTY9EcwVLWPArergRuJHrjcVkUUwANf4Oje6yCkOm5YvUjG1wSJE9R7pakX9RxyT9%2FjTxzAY%2BQb7ulHra8htMYsklZaumcJMNE3pTfqyLnhiOqI7K5IBOJ8LuJTnyR1pss81kQTGemqpjAIFIwa3ztIM5vNiEpTDcpfEH3FPwctHJFAe2UAnfuL2NJdiy%2FTnAoIiTa7VPFmi790AQ2v1YXra7Ckd5hAytA%2FbWrSrMiNor5VzCTImh0slCntzXyPMkvLQKjNOTGpejWoTAC0EkLLJS930PYEkPHChy1ZY3Y5vcuv%2BDt%2F47j%2Fl9owNd5qR%2BclGjgAdVBybeNogtHtIyUtbA1aR3e4VnerOgIJE5gE1vh1Orti%2FnKC9criY2b1Wcd6KpYq5uRy4%2Brc00gv4UJ9AH07X2%2BO8PsgmeNaHnZJ10c83Z9FYi1pcSQyvlnyzeNU71Un4DBqEMJGd1MkGOqUB8i6FzXY2%2Bq8DWoUf4t5bXVsm%2F0ZtsUnU%2B02psL71G1pu3XA3dOKE5roCdtYsGFxgLL%2BuA1CWf5iTdSrV2rGOPUI1%2F8S4DnGqozpRiJTBixiNkKw6SDKjPvpqynJ%2F%2FSmf7jVDLDSumaUXGplZUL%2F0ykaZ3mi8biUkgGdVs6aeww6WQIEcrBbm%2B4zdxlfWJWjNvST9Bq0KuvxrbiYdTqSpR%2BLWTGEU&X-Amz-Signature=e1a6bf947e37e36cc2fc41219a512f901c6d0d1311b8073159d62b1105fc91f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQYYEAO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9QbE1TNCgMYQyA7fX%2B6bXci%2BpJytgW8Q3iBVDGTcfuwIgMfaeK0be%2BYetrj%2Ffc0c53lT8XIX75LaiMY8NUuoImNcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEItPHpOP1oLTeIEsCrcAzCcbkYLKotKiVmz7Y%2BENtZDOykDRc%2BvPLvI7EcoRzeIe020SqHYQNSFxYNzDWvXvQwVoaGnZigAxVZ8hCgsOzb7nvDBggVxg9c3AY7wjASvvy9E%2F3jcaoWHHZymvH%2FDoKd%2B%2FBkbC4MURNBolIV7ixubFzsAnubBAJYXboj0Y4V%2FqQp7CTY9EcwVLWPArergRuJHrjcVkUUwANf4Oje6yCkOm5YvUjG1wSJE9R7pakX9RxyT9%2FjTxzAY%2BQb7ulHra8htMYsklZaumcJMNE3pTfqyLnhiOqI7K5IBOJ8LuJTnyR1pss81kQTGemqpjAIFIwa3ztIM5vNiEpTDcpfEH3FPwctHJFAe2UAnfuL2NJdiy%2FTnAoIiTa7VPFmi790AQ2v1YXra7Ckd5hAytA%2FbWrSrMiNor5VzCTImh0slCntzXyPMkvLQKjNOTGpejWoTAC0EkLLJS930PYEkPHChy1ZY3Y5vcuv%2BDt%2F47j%2Fl9owNd5qR%2BclGjgAdVBybeNogtHtIyUtbA1aR3e4VnerOgIJE5gE1vh1Orti%2FnKC9criY2b1Wcd6KpYq5uRy4%2Brc00gv4UJ9AH07X2%2BO8PsgmeNaHnZJ10c83Z9FYi1pcSQyvlnyzeNU71Un4DBqEMJGd1MkGOqUB8i6FzXY2%2Bq8DWoUf4t5bXVsm%2F0ZtsUnU%2B02psL71G1pu3XA3dOKE5roCdtYsGFxgLL%2BuA1CWf5iTdSrV2rGOPUI1%2F8S4DnGqozpRiJTBixiNkKw6SDKjPvpqynJ%2F%2FSmf7jVDLDSumaUXGplZUL%2F0ykaZ3mi8biUkgGdVs6aeww6WQIEcrBbm%2B4zdxlfWJWjNvST9Bq0KuvxrbiYdTqSpR%2BLWTGEU&X-Amz-Signature=788757498bc5c6b511f98451e68e98086a92e341d9f09569ce888801abdfc41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
