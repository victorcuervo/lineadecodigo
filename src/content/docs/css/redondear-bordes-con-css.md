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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKO5LV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD6boRxvRozkccXXvEu3idSmKlCeiXxfqseBUabOwOQ7wIgODOjAKhbUDWoc21UP5wGL21TmoS%2BSYWU4emJoGu%2Bry8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOcbVzgx9fikvG3HJSrcA74KG38Vzkf6Rw0By%2Fq8ZfrBzaInH24ZKJZFLaalN0Stls35aFgT9XfCoxqtFVRv5OpbWt3GYGM3s6uwQRWHC7ctvpBde%2FPmGoS1%2FlSJXhgwNLSadktIJCvURd69TP9yWG7RIgbYAPSF5vJJb8EMtQR1YXWEppnnb2nIlWW4C%2FAZBjWeQr0k9QG2ySW59x%2BmtmewncNVln5fn21JGeNlZI7%2B91TotxKKD1KZYbe%2BOrmt6f%2Bbd3juUBpu%2B5jzohV7n7CXFfSJcclNe7K%2FqnYY62QhTPtiMkJvVh%2BxXvHZTY7vaGnqgOBwxoPGjSRMHbi%2B%2BmKAMrE%2FSOmu2sWatsutDWUuZFzJuN852x%2Bi%2Fu5zID%2FzRogUXo3CoLen%2FzmtVF0ByY3wm2uqx5E6%2F8K7dLXUgKirObhXUHbGJiRSAtkDE925pfvTFtf4epYsJvZkiBOp9kPYV5W7e9aXxR2ViaeABr0cmU0GzaDVurIXwPrvknR5pMLoEyg%2FzckkoDVsFNyMpCixpGYV02ragnJoaW5i%2BeiKAeX73Ke5q1byo6GHjDNdz5r4MXUupz3xBF2WbG0piIb0Mvfe%2FgFd8EYS%2FDScgHmOd56xraFn7XZp3%2B2a7ktOIbRFXIAsI5SlncwNMJW0w8kGOqUB4%2FpgsgCsOyJney0sC4FD9UgFp31Ad68OVfmYWsIRIX5LkLAeW%2B7m7hz6bovP8%2BXG8YBGsQvsm%2Fr5fcwEAphFu7Gu7gyXHhQ6xPzpO8Vsbw649a9F0myYNIBzzTkfeavfJI%2FrrTsNa2u6GQBWJqc9QQyatVy80QLWBKZX%2BwaznDJOLtK4X4mSr%2BQq0kIXYeXRVrKLrjhFT7l6Qlr7kG6aI4nuZMKV&X-Amz-Signature=85c8fd4b2b9afa965613d962125aeacef7c925f52a25e4f0bdf5b5f3379495f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKO5LV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD6boRxvRozkccXXvEu3idSmKlCeiXxfqseBUabOwOQ7wIgODOjAKhbUDWoc21UP5wGL21TmoS%2BSYWU4emJoGu%2Bry8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOcbVzgx9fikvG3HJSrcA74KG38Vzkf6Rw0By%2Fq8ZfrBzaInH24ZKJZFLaalN0Stls35aFgT9XfCoxqtFVRv5OpbWt3GYGM3s6uwQRWHC7ctvpBde%2FPmGoS1%2FlSJXhgwNLSadktIJCvURd69TP9yWG7RIgbYAPSF5vJJb8EMtQR1YXWEppnnb2nIlWW4C%2FAZBjWeQr0k9QG2ySW59x%2BmtmewncNVln5fn21JGeNlZI7%2B91TotxKKD1KZYbe%2BOrmt6f%2Bbd3juUBpu%2B5jzohV7n7CXFfSJcclNe7K%2FqnYY62QhTPtiMkJvVh%2BxXvHZTY7vaGnqgOBwxoPGjSRMHbi%2B%2BmKAMrE%2FSOmu2sWatsutDWUuZFzJuN852x%2Bi%2Fu5zID%2FzRogUXo3CoLen%2FzmtVF0ByY3wm2uqx5E6%2F8K7dLXUgKirObhXUHbGJiRSAtkDE925pfvTFtf4epYsJvZkiBOp9kPYV5W7e9aXxR2ViaeABr0cmU0GzaDVurIXwPrvknR5pMLoEyg%2FzckkoDVsFNyMpCixpGYV02ragnJoaW5i%2BeiKAeX73Ke5q1byo6GHjDNdz5r4MXUupz3xBF2WbG0piIb0Mvfe%2FgFd8EYS%2FDScgHmOd56xraFn7XZp3%2B2a7ktOIbRFXIAsI5SlncwNMJW0w8kGOqUB4%2FpgsgCsOyJney0sC4FD9UgFp31Ad68OVfmYWsIRIX5LkLAeW%2B7m7hz6bovP8%2BXG8YBGsQvsm%2Fr5fcwEAphFu7Gu7gyXHhQ6xPzpO8Vsbw649a9F0myYNIBzzTkfeavfJI%2FrrTsNa2u6GQBWJqc9QQyatVy80QLWBKZX%2BwaznDJOLtK4X4mSr%2BQq0kIXYeXRVrKLrjhFT7l6Qlr7kG6aI4nuZMKV&X-Amz-Signature=c54336591f7474e5f740298ac5305904a537199cf2161781f9ab2c0f67338b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
