---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNWNUJY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN8%2Fox1mD%2FzuBYxvngIzopxaBkSh0WTqiLi435q4saXQIhAL6fbTpP88Vg63VdjdkxcEL8hK8L4T8klxi%2FCpkF1hS%2FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeYQ%2FfpiN18DdFIeIq3APgabuWLYKtZYZCFOgdNYPCJpzb6rFuK6RGpS3j%2Fx%2BPS2RCkwidVkgG0X8P%2BaM%2FbxwwzqkDbwGspA2HCzzibQ1aYt4UwiNo0XG%2Bh3LyshG7PjEg5ds%2B5THM4Z1lDlnr4V%2FwEELzJkTm5BLpI27u%2BfnoWIsE5GgS%2FMg5A%2BqHaNglZA6gBlYJfNnE2enpoujmsp4c%2BfOEDspFPtK0pcKkxt0Doe1C1Sq9saGWZsgBE%2BzO9PXQ%2F5G9l7OcLDa18B4F777lLHt%2BA3%2Fkny6SMvH%2B9Kx2unoe4itAgDY1a8fHshn3JlQQaev5iHi9WUTh8ZAHTsF8uzig9s1hkdaLcfog8A9sDxQHV4FyP96QB%2F9cC%2BwBp2r86LHZngd5Bw3rj1MT%2B6JWvYxrBV18tJ%2BcjtZJI9rEumgUV9sOb3VN9oi0IbeIpaZBoA5aUmjCnmh%2FRLSOcG15ZrjvoT7kIMVMHEBOq1o4iikp2qqoyi8Q8nFdozHeSnmlMDgFLDSX104Uqi1z31z7EN3M9Xal6bKBz7sL0Nfuc1hdkgPb%2F06z%2BkkBBZeihhcnRb3FzuP9PRwf6RLyKv01zPx3lSRX8r66bphR5o8exeal4sfvZ5cTufKPlpZb%2FrajZQC9fWXs5Dp9bDDi5d7JBjqkASFAZYBZlaU87vQ%2BpEkg42d6jO8G9dk49qY9df05PtZ8Ta3dQ1a2KTPH6W0ROPrsOH0IVaGCiw0JnVLg%2BsVLN3ujrJsoZSWhSify0USZYb97MFoH5ZUVwj5YpwRqP74NoReSQb%2BScDhxb6MV1KRkgxayr6WGVNjsSlE%2FoLM3AUMP8E6Ee2CzaWAvJBWTt0BxtNOE9q3ldkalVxy0df%2FlmTXN4mwv&X-Amz-Signature=33589602c9e952f50225e89d5a88fa940b3687532d488a687a870254c5d8b0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

