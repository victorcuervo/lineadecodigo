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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SERZ3BN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCbJjwcdb9cYNJ0EWD5R0nQMt5P6GK1cl%2FI8YqMI6Ms%2FQIhALt4udZHAofs%2BDnn3Kcgz3m105SzB6K0uOyQiNd3djPNKv8DCDwQABoMNjM3NDIzMTgzODA1Igx6txlCITwxAVBYQegq3APCyC5isW%2FYyZ4KtJWkPbTeG%2BXSCiNDJ9EokNvZ7BjfSqsb1WUFF5ubWR3HYLFyZvFGqbutsOWKfwYu%2BF9e8RxM%2BCSCMshLAZ5aTggs%2BiTpU%2F4xQDwf5V%2FIt%2FS%2BNE90CaawLKTzQ8xelNuncI3uOdBJn8U99vVA4rHdKzXXEpHOSgckzB3TDFzax6jD7EQvAeWWIlg4%2FLzDZxfdIXAb13so3t%2B%2FeP1rt20XTUEfxHf9isJkwmtMDW2fqX8N5s6kINN0A41ncSLcm4e%2Bdzf44gy0E5yo5XyMIPMbLEacVoLFIs35vyTlIQHTzMJ680NsQmN3vId2j5qaIEfPyVnalnk4pDy9XnAJYQeF%2BSK7FX4D0QENMLzTLy65CLievLzj9TWu0wOzZvgwp6Jr0hxi7Odeu0AmRQPvcgSNNoDjHDkXN3f7xqRN2qXHXJCEDi%2FFJ5BF%2BnfKacRBCDhjUkmcU6uNnWHH43vl%2F6V%2FP5d%2BkRtrmhmMWoy1sviFjF3vWPtB4O0saZkAEpVXry0vQpKiU%2Bi0xgKMRcToaVF5ey84WYLsgHjen29uU855SvxjlD0OtdOSaA7TzZwS%2Fv%2F%2FQYAFyrZsN3qEcys0zYDpZfqB7KHU6MqT4KzYoV7KiyebIzC58sPJBjqkAQOCSdu2v2XKFMwZPbd%2BeBAppV%2BxUGDytSczai8i12jqO6nE6PmWjaPtBVmotGNuRX9nJnNBjUahmNOn%2BmRVVH0HQXfn0jOOR3bMXJx5%2FqHM3U%2FJgkxHpjByg9KNQtCXmROPTLv4tTtNQZdyMDMMyJEdJJ%2FT400zsG%2FUD%2FalvqKXkncTByF16qAUlQFy9O0MQgWsR1ChXKLVaZ2t7p4tkJxFK%2FGa&X-Amz-Signature=a183de2f04c2b439a776acbbc7275ab220453acc1c57f66d28fc3c545b76f1bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

