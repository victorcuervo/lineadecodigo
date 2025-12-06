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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RGBCEIY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtGj5zZs9DZZz3VfLLqypUAEO78waiB9V0EM3WY5lEFAiEAqF%2F%2BgZUsvuHud6dy8bUUgRgZvl1WnmJyMmtMUkn6Ri4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLPzOG3ulVTS5T8pQyrcAy29y3%2FrX5nfA4P%2BB75Saq9cyMpwN6X9sWenHmjYrL0wlNGo3nctOy0t6sIoJXjR2xBBaR4X4lyfWESk4fvVGZN%2B7xW9SmT7cRN9A3rio3JvA1k23bMaSOJVfqYiggO%2FWKtrNN4lk4Tu%2FrQsi4U4JCYTnUGYTawacFXZ4UgOHwfhWHFIj4zGRSAUg%2FLV8f4ra3P5%2FXr%2FKidPl8EHDBQZsV%2BeE%2B9yfbnbihZ%2B74CWShbRiqCUg4Za85%2BcycfPh5YIgzqwgYsAKGvWcPdmfHNi5DQD6i6dwC8RwJwg26abt8W49lu69u1Wwrs1aqjLxjZAd6WEtdDsT7XsJGO1a78%2BJRvXkQF1nzLCCXkrqnnfgLoyr%2FU8%2Bhjjo%2FU4NzDI%2F0Xzm3aMgAaejaHoIWrH3Dhuvx7%2Byy%2Fc2x2BNN0YobUAvsDor5v2XCxDn5KCBmBSiIoAcFORq0DAszJpJzJ7XuDD3V%2FDK%2BxzGaLBIDci3xl8njU6MWbuG%2B%2FN7r%2F25iA9gZ57pxVmfHsfkI9QXbJKbfQr6EDnW8lrjyYaGFvLX3OcJm9OOkqZQZNVmsxYedXy9cj3tlWJ7J5cB7xyTNepVpnqID6SPAmsxY5J4RdBZoByjC3b26e%2FnlWoaP49MlsHMO6ez8kGOqUBTqFUY2ynx67krv%2Fs8E%2FI3bGO8E3DBYr3WGeGOUUI9u%2FjdmmibMqgELt4XbFKU1H%2BzCABdylcCMQKT1q9Mxntr425APCl%2BneCsH42XmjxL96sQkfheT%2Fb%2BKmexAkcrGNXOXoSoOzftz%2F4ndCej2ogxaYHNbBcy7PkJwSm5Bdgm6jkEjd6%2BO%2FukT%2Bvk9BDT9FvAKUUySgZImF75Uu5knBFerIVvIXJ&X-Amz-Signature=539fd00bc21c508bbafd81120fec0cfb50f54560fd1f0372ec87732a79946917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

