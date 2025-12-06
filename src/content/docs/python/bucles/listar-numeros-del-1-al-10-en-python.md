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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466762VCABH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgQvLr1n0NkdwwgRtVDpK3Z0FGpayuVik2ReF7Oc14aAiEA2pzlgktFEk0Ex8fVOVlQ32LvtJ7Dy9FYOdiUp71ZXTIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDM9lTK1ZEQX%2FHLcdgSrcA9DPVkO4hWz0010iZ%2BL6EfKvL2LCE5DF1OuAejbsiDeHFGgdwiqZNAELsbp2APsWBdSA0sI41vszCvB8YPkIRxulSTVa%2FJr0zeHPefXE9IqbtsCY2BJrgx4PW5uurFV1waxZfcop%2Bi5nI4AMQJg4pzIo063v8yMyMLlm%2BS8KoOWPDvSVqvrPVZ4Nc7F6kzz05rR7gPhikxcObkiN3atNmHMFvVZ5LyFaLU%2F0sfIKXeNqM8KTjwr0aNHSHQpbfdMEJmRvQjNAOTAi%2B5k%2Bd7cawW%2FyplpuRCfbg9qoG5ESe7d0TYabrqnIF0wCyr40%2FZj4xq1roovy8nx0KRsPrneRhxS6OqLhn1ak1mu1ETOTTWGu4PapMOBHZVAinkYMvZvVAdvG6hjgRLjFhgQnytIcNyW0lHH9IqA8KCo7tTzEWlIByKi7wpm%2BKdXD8fIKtaR7zb6mJiJues4Zx0pCJRA9LQuXTbxpCUPG2NGQr%2B4l%2FEZtcrUcKonGNkn6hAAq95%2Fhvm%2BewtolgiPAFPDzAebu1tc6jj9U0roqISsnDH8Z8xzpngJsL8BgP36VT9C1I%2B8qOfcGXvc%2BMVtg8nrN6%2BZjF6hEwZdLZZRcRIBC9lbCEoK6yydm8oOJSbokWkAYMISJ0MkGOqUBV1i%2BeyYvE2RR8k64FO18a4b6reEugEkE40PKLBHa0x0yxDR3ZaGUT8%2B%2B1wgriLcZ%2FQcYb%2BvNcfKltSlThrvP%2BvtAA54dAOKnVOMZTSBFMFOcgg1EiQCcemCK552k5j5l%2BF7%2Fl2m10QD8dxEumRfXOt61djwDxr55WICH9frr6K7g33IQ%2FxGdre4vlANqlRBAvjmRTxjLT7mgXcxafQ9mDpkhqHaV&X-Amz-Signature=93cb4242bd1be4f660e42e1e8038e3e2dad94d5d97cff504d0020998bc817cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

