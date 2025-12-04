---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJDXKWO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGGO%2BY1BEliPI5HF01O6zcMldEHGrooK%2FX%2BvCmPgD6MEAiEA6f%2BMRSg4%2BP3Lzk4eniykNUIcX6OcEYqLX3n4pPnu4Ekq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDO7Yy3KDfdzc5s5CJircAwNkndw1%2FGaPLxnPOBFHhH4Hdkax2AFYgOUa901Tq%2Bqjm7Ixy%2BrxudHcd6AgzAao9coE4Ol%2BuPlUCQdt4%2Fd8kQsEwGunys%2B6ix1fVJmKWkde5cPB59f6cbpwP%2BePUMsGBpD53JvZsDXWHco%2BRxovZLEmuNwKjK6J%2BjLTjw%2BNn4q3cD032G%2BK2V%2BHyeSm2vWtym0p4BLgBzBwNPeo7paOxQQGVi%2BJaeK%2FmPd6xxOPSogiTljop%2BJofKT1VsMEBn%2FDwN0SjqeNNNcdQtmDm9uxvktcGYmgIcnfBaZzB7knPDNO0phBt%2BG8GyGjdxgtEH9Cx4Na1ezRL1NSVRmx6e7wGklO2oQ3%2BZSy5Wu4f1VFkups9fl2YIUQJCAT%2BxQKarySe7K2OnPN20XPsbby9Q2IUKdyF3GS5llRkLnC3Glpr6lRm%2BJM%2Fo7KXVXXGNW3DBWPOYqiOzt92E%2FPK2N42Wz9RomDRRUPzWGR5B%2FTdY1Alu3sj7QoKLcjyU5pWs97Zp4P7HSnX4BYodYkUfQZocB68XinY5vYo%2BjTWzlFNhIeU4e1IPgXRrIZCZI%2B%2FSqCZm62dDd%2B3Uxr%2FH86c3aLRpwZQDiihNWr631kdTZ0AkIn7waxw6qAX9CZuQdiHNVXMMK0w8kGOqUBzoprSVSeAZUsigadHQ5UXenhpWnjtmbJr1tfDuqzCyll9blTX3rW0b0yZfeTV4lKZNAmAN3nGKzJvZQnY%2BfOwK58q9cBRNhDmRH%2BW3hc5bSJAa4%2FzAqZbxV2ExWOYk%2BCznmMXCgKeIdIu4Ef%2BifZtmfHUTwgltuRs0UJ9LVkK7P7jioTdXsJarGJQzKf54JlD6xd6SGCq%2Bf48dl9y0hyM1URAepW&X-Amz-Signature=2dd2cad75f957aedc2819f1289a0b1d2f9801eec32e50c4c85361f6d91a419f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

