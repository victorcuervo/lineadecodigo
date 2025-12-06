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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQW46LG7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfhSzPZ8D5ORu2OOFC1x75kpKBzPBXCyEEGQ6T9u2UpQIgMHNgpcgXjP9u8Vz%2BYaGf25u6%2Brj8OCCOXRkig7tTYScq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDO1sxdadGv%2FQ761PGSrcA3H7qXYNPwLVHehDRZUKeUyISO2iAozDwFQq7pzpYdJCHjDGNm4k8O1kSj55NM57gaGcAynKSPry6XlJyrWInC5yJSElQY7HVbTXDl5z4qsnGBzeIr10f%2ByFHY9AGnJYw96RWBjrHNz7Qq610D6CUCM3CL4qcZp7HDTUXiH8tQez84RghBz2t8njAhT%2FGwIMAB8%2Bsu%2BJQZUhdDFxwC%2FJZ0mOZaBGPxcstP%2Bz0RUPamdI2%2BA8fNtY6gJam4DyuB5EvLgZn3lsA2TrQcfX0T5Jp3Hz%2BN92zEY3EvK%2Fx05Y1UqXU4%2FGqqvw1IUFLi7bDotnqLyGc2eGkiClUSevWyh%2FzF54a1tWsSSSITLVHyYIR8ab8mE9FRUe8%2F7jHq%2FDR5ZmHSAG6sd5UOeqbJFSb2tIlP7z04V3S9ZtNz6OvhQIP5mLYIPD%2BwMmD%2FybgD1U9q1EVxwIpPqZ7iov3ZONTatP%2B173%2BvglGPi3%2BsGiL7aSnzgPzXdiklLBRwQAjK1un07oX8MRQXQA5diaaiagh7Sim6rgA1Xd%2FuVK4H9S6wJ%2FU5OBEqk88AJvsTWSyPEDsZ2ve2vTM7aXbsX7sOfDUr7NVLBGpl%2F5UwazN%2BLKNVzPRrH7zxdUFr9jRDoKcTSQMNvozckGOqUBaZofiA51ywFREeb9HAXSjZ4ht9ORKR%2FfgS5wsF5%2BXQZlFMNEOoFiSKDwplI2OMrtLJqXvYKJzymoyYyJY%2BlsCfxDe95oAR62LokemWuqpOHBOEHH5uY4xuRoFIGnV0CnlJ8%2Bu4uHcFvYjP2PJnVI4Bj5A6%2F70d%2F3c2SGer2BmLtTetl3fjxaU6WSexJ9rQb42j2Rj%2Bpv71O7vrLaJU9Uqz6ez1Ex&X-Amz-Signature=f6f6999c31d5e12f28ce330f4dc8fc23e429f1526526fd915f50d2e1c63fec87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

