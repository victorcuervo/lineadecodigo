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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLITWQXA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDluz4opmwRsNQ29ctgBv4nOit2OYZq9p6M7YAzgVCqGAIgPblvXganadHpgmKQLLT3zjbyGLlCSfOO%2F0sjSsz%2B0OAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKp4ZDfhW7auvU%2FcqyrcAy4mvIFZq5RNKA9UQL3G7hQfX0M2j0wc8QJAHTS8QBQ8bjCWZBQ3gPALG21sgN1Qle5IS9DkjXbakZp8Kkj8owmLdUQ51B0Nk6EGgidn3%2FOXMTy4mJupGMNqRpK8xVdrgFLHGoZtQVT51e2%2BurTPAkbJPuy9jQ7Xj7UBADyf3w%2FoTCzT0BrTJGxjERfhTkt%2BC9xBx13mwpWB47G0W9f66YaJrFsmxpLVTyUJpwhh8Y3FnZ4gsGn5XXjA%2B5CONSuY2scbOnG0GMWhzvkKFFaN9m%2FJZF%2F9oM1D5JTYmjrUYukFTHnHd1tNIUheqEeM5ecfouqz3N28mFzVLig2q9VFxwv5Pc063BYhzqmIiJUA53GHtTvBNwiMD1RysSiPbyIDtdxzvYY2cDV73qDMmQJS9yS0Rpff7bgqbNZLKXuvSNtAqK6Yz2wYplSWFhoS0JPytvozajAfT1BfsVXtMY4CRFAq6krm1EvleprdZdt3SQ8BY5OMOezuvLuuR%2FSp%2F%2BYhdwhmknF%2F2WdJ48oXZy9m5ysVuxrFhl0PSuu3PDMjBYJ%2Fp6roOyA%2FoBRJCzTlvYFfY3LzEuLE2jj0BQOlH%2FR1xCnfrYGoei%2BRW7PGxpHAny%2FTmfBStUoCH%2BPA%2Brb8MMyhxskGOqUBpHDYaF9OVpk2S3i2ECUV1s712iVFF0s0ogdee4P21ldV6k1oIpdoDsKHx7xtb%2FqrSX0HkCzdSUhnzS8ctsrP%2BxdN3Vd83jACGarspnGZl28f2eBv8ULPlSkOkshWuFEptpIX%2FFXI1SoSoUg42v7kJXvXnBtUMPVU1weCREhuOoGBa2zPj9ykaQxPsCg57qHN9oBu4toYa%2FAYalY3LQULJIgK1U4a&X-Amz-Signature=e1b00d4aa02731b86da445e15e20579c42736a62f262378f5f61bbcb79d4a695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

