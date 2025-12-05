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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSK7V3N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp9vs8EvhgIG2g%2BsI3uWPm7jk%2BP2Wc7yj1e1IAJ9TcqQIgHx7vl4kOSXbgPg5Qk96n%2BFomdEoEV0eBcJgiEZ2i97Yq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIXk9BiJ1DyW7EzRdCrcA%2Bq4v1AzOsN%2F5t5FuEcHhhEPVNK4H6pKqPAlyWNHNZayucPKf545%2FOqI46CMxsKuDOg1a7IS9u4wPMoBXxfGGTobVP7%2Bsbc3fLesZQROHPq0c9HjZlw2T1DvK8YfzbQ00D%2FG%2B11uLgO5dsacJITinpHHE4G9B0g0743De6ZEKtyDcgVIBH3ptN%2F7McuXuSpwi%2BieNPi3FTTBfIg1gjoiZtwVES1sfZSkDIwhyPqOqWXTFL%2FHp3N7ksGAjuztpOo%2F2LPyE2ILCItIQIKUnNS0b2FfYPULrpbNCISEa4AZT1v9jRtUl9YI8plgU13UMsS9vy06OxCkLHarPCZ8JQqDxl4MpuP8Jzzzkl29aMc55Zc1Le4av%2Fl0I5ujxHJq2qRORiTjzWHOOQe1xht7uH79%2FOb6PCEDobggStk7MfOgns3EP3FHeJzZx%2BsQ0G11w2lmO%2FZu4VPuxDVo4BcLTgAfQQTNC5RhGSSjytj1CAkIMyZd2Yx8DIUqtSpV95aIJ%2Bb7k%2FWRE%2BHF4U6Dx8sx3kjuPpQqrib5mx6yhtrPIQg5lbONOGY5zAs8ykUD65xaJh2cksgMramcsObQBZPeE%2FtS6bEHqJeWZpVkwffiV1oRUyUXkinc6b0ruOO8%2BlvrMOTny8kGOqUBiO%2BSqQ2ZuJySJi3m3HiDDajI%2B7mQws95nNdslXBLtIi0ViR2qRrt8drCNnHbSfjJntoAtG%2B38rZsOdRbQ1o1PN6m3bGHeWkvY1QzeapDO78RszcG5HMM9EbQNMuY2uQot%2FtjbFt5S4g%2FsjmKzw%2BfKRYUMBFGL2jG1cLb4K%2FtklmhxEA8Kb4W0pIFWIKhczRrJttf5c5DkLoEI7Nf54nVYtdOrUuW&X-Amz-Signature=dc5b3bbf45f63c4e2011c208667d515a62ce2e1a0835463943f21fe542453c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

