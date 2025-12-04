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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDFMSPX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEbFDStr6jQyUYeEuIoylwDdj35BgDCY2NgcjH1Gr9TQAiEAv8LUYM%2FM4J27oxfNLbjabjIMNBpzZxkeSQU1TSczLWkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD4m2p9WEkg%2BKGTMfyrcA%2BpTRNmEqyeHkoSAXrJW2NytUK%2FE%2BHy%2FmRlYk%2FSnVFWDWW9F0ti1WwllZJ1nPHco%2BnYL%2FO6ERlHjK5KRryLDnM0%2FFjNtar64x9huJeymgbQMKZOH8srDmlRjEh%2FKDyWWR7IKPWHpQ%2BTGsHlEdh7GESFxofx9h7RkEd7rT1Xl82a06CNwU80jAiP813srRi%2FTUBnykQqqb%2B462ay3RUlXRw%2FRs2Cgb%2BVRrE4cKvK%2BXJz%2FBsbKHmS7jGes9mQIBiD3RRRmV0coNLrd6HZU8BSHLEW1r%2F3kGTJ5P8GO9pOmj7U%2BIiI4vf0zONVQhrX7nCLjWoabZfaKIhLGepCoORE%2BNT%2B7q%2FdLr69q%2F%2B%2Fd9c9dItQTP8xaUu%2FclOvj7nZ42moS2%2BIGuthskb1g7MvG6W4SlcmMl%2F%2BvwTp8MkVIeG%2FbR2FeitJNAvlDx2nKsdFuItxapCtmbrimf%2FwbcET1dYKg1nS%2BvGvCeeaYRcIEWLidji0AooC4HlT3Pd1gRWbw7AFkCkQ5sH5OQAPYVLlMLaeynSlQX%2BRQyHmhdTMIfqHAu%2B8S2w8yyTfmdT6aAM%2BmHEog9mbfqZm8JxJHDyF3fLVbEyTMI298k6TswzzTjt%2BS8pEQ5z6ZVqY7Ab5n1ZlwMMyuxMkGOqUBfIfeYlqELw7JKNefNkNg0T9yVLv2BBlDHATaD%2Bjdx2oJRj20E3WOqE7OV%2BeD3RiVF7d7j8x6URO0klHJHeQVuXc90G4BIc2zL9xQ8a75bS2LlIfVzHKCQbde%2BYoOuT2cJdnwAz0ZWk%2BWnkK3gLuimlio14%2BvoZreFm79sLj1INOnCqlTRcp0%2BBx%2BeqApNz7Uch9zhuTcOtT6XdjaqFawJO%2BW6DrY&X-Amz-Signature=fceec02b9a17f0142e4f92628a071b17d55d8df3409d0eb835741d761e67222d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

