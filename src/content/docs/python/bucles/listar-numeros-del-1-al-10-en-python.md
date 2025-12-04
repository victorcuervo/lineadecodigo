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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOOCJ4N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDPWlTekxSXhOww8VApbULZkdsiORTRAFuZZPq25w9%2FbgIgLE9cdMxfxKCjOzgnaU7PqramQZhKL%2FnNwfk%2F6GXbJo8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPvZVZ6kIgU0genM3SrcA7YoCRzahv%2Bhpntg3shHsQSxo51dYtkAg9uNfAVEWamZ27CxU06ewxzhgTX7n28zyRFcqdADe06inMiSA3RiB2SYBKFEuJ%2FrzA%2BCiBs%2F5P6nIIcJOz6M%2BsQxzBX04iMEv%2FO73iiXqSsigA7GSCDa726Vp%2FOFsfordFCQKVQsUZe76wytM0bH%2B1ZMrLzXqJcxOpMisw9u2q3AKw7VEICrE6jqe5a%2FQn66Rp%2BIJ9%2BXTyHGd4SHfrPI5Sy12ZARGn45EjUMB8mfEqqxpaF53nv7tYzyoOtSACjva02TWNRU%2BOa5%2FfruAXRG55WcyKsh5w7eqtuoLX6YHC1oaIdOu1RV%2BDsskzGTixFB0FjEEHNES5ZpTJjj8Vm1s21SyksS5SU85%2BeXW%2BDo5Yb8lmT8Fe1u1bjx3jrkomI4sJxVX77ulPcnX85KYBspGP1%2Bj0M0cFrrSKIzuO9xxoRcMWMHYt85Co%2BqW0l3Jk8%2BXWX7MO2jr9OxUH%2FHi3O19esoRjPsGmz784Tn0G54%2FOfV0rBe6k3AzAnCnGByuLP%2FAxCf3C4AGc1LlgF18f4JHVeWg4KKHNXDHujWbp6%2Flj4uWj8n9NoSZGTM22vLYTmcDerk1MPpQqdmoT0IcEemSurzSyroMMnUw8kGOqUBt6ll%2B%2B8c7Yhy1U2EeaWMlSd20z47tVxlGH1mb3aJjZwFOoy0uy4n6GqNpbHZeGlKc1XBYPV7Cn6MwdiiUwsy9LgF8nNmXxztkKV7O%2Blq%2BoN9Kdl9KzE6Fl7wFunD182n%2FkmiErkRkgB4Kmku36UPOdblbf%2BHE6ts2z32UNMtgPq0wP2l%2FlYLaI8U%2FGL3PQaQkgS8qPOHmgZDadF%2Baz4DGbfJF7wp&X-Amz-Signature=88abfeaab695a9eb3b2e1e80c88d2454bf77d7d19ea963e7aa9e71290476c000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

