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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6CCYAY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnXNpgZf3UHmJnJpuG0ypv3%2FGfGjYjYPkAnusXXcaI%2FAiEAoT3FHXz5Bk609QMJKtVERld4d3c3L8ivjk%2FimGnshQwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKotYQTu%2BUhzH7AJTircA4z3PagEx%2FvNzWcmmcOOkp9FhhDXvl5eVsFrh0Q9%2BBMZbB5B6CrQhC1hvYSpZ6Ear%2B9pHc7PXso7L3kf7K1snJuarY1AEfCaASK4pzfn5A2SpKuyWDcRq7rai%2BzbExOim8yN3217fwGjUTJFt5C8Cu79S%2BskkUG%2F6eL%2B2lyc8u7rRtJiEMSNB1h5Z4RijFmVBQONYNKiPl4B2fe0eyQ56qaYb2xa2OQPiCW6Ng6TPXkiQfpLsjQnvd7bEwtpkwP1SYLhwmVbxA3LdZJqQKSgBdI5eS4TvnnGZHBQlrVEfHLCXEga6w6XU6p0JAMo%2F3A%2B8TpuPitkXfR3OpCUCn46HKQzgedYVnECvlA7mqu91HKxatQPs2hMkhzXhjNseUZo1%2BYnoa5P%2BABEkP1UvrcWkda63DFpYcmiAi%2FMi6gPAY1%2Fb9sBR9HeFdpFPQH343N5Q6uK7G2R8LqHrJnUWJABDy%2Bu6uWHbnuzakcX2%2BG82Jp3UZfNN7QXM6jevKSLSoYr4uh%2Bk0hdFkkJQpOeyeRxJn2bohwl%2BkqKR2VXYFRbzLcPWtZ5Nh56IEipumZwOvosUyZv11T5SXUdZrT2o8rXCys3lmbl4mJG%2FWyUUTc7QXL3HvVm4U8PI30G0DP%2BMKP90skGOqUB493Uflibub7osg%2FExM%2B3rZHSOwguGFF%2Fth4JRRiDqhjcqnXUlVSDgqF2UhKJ1tlYGVKOrao435MWar3ED2K5Ly3OF940zKkOjLPflmlwfhag7vQtB8FiKChBG4S5p0ZhgzAeuN8yGafvW%2F4WevWekucagb%2BY%2BPk56wgLbQX8g2iLXM%2BvF4HYM9gxMIbgQqYQaH0qc6uDiHaS0EbM4XsPTGqBu7mo&X-Amz-Signature=904dfa2277a775049efd55adeaf13b72eee5e8576ee4a30332e6227e0d9dd3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

