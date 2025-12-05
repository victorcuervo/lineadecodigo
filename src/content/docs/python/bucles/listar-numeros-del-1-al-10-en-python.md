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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCFBHWA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKBCiL40KersA39%2Fan7%2BAAVaisMeuYFkcNLxqQr0%2BZEAIgES1pvCXJ6p0kADSeLVgKsKUEXUMOn5tMl20QaxeKueYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCUzM%2BH0SB0we4vgXSrcA51%2FxSnQqGHgCniwsad0XCDypK4GHgG2s%2BtP0zjtqSwPghqpW70ITu6if%2FmNw4%2BUuXMjG1FP5I%2BJkiVguzFCvJ2t9q%2FDQApXbWmoIB%2FVHulHx3OzuFxcZfqvFEjfeeyczSMCJ0mYhjQQnplt22myrLDh9OAzcPGOefjNShc6M48pU9nTRRZhCMMkGVHg%2F2hZ5qlM9EBCAPZngtRI2SGTWwPtxGRlK%2FaipzSEL%2BujBcRCKnE2%2BIMHWVpiOmx1TRTyhcHXI1G9w4qO%2Beqe8p4A85m%2BZYRm2SqEcLCj%2BS4lswSqcfMechQVqSj0AIgmtqkW0uyuw%2Fup1gKH1lgqOjKaV7MnrMgPwLnT6W5g3xG7TwLkQ7Pi4OGkhYi8DSb1AMedMpKkyU4T%2F7q7A83mJTI%2Bt5v7WqfBKYS4qhhKgEqnCjBIHhmsLTUAXjvbge6ZzouBYVh9p%2FOmnczcqWXTmz2gEhzCt6AaSgwjHLJ8GyZPZA0ovfETokNvKSgQS35pMJKOw477Lp6840E%2FmP5rt3wqmK12T9Pxq7aPwpSbuC3DxWSJ3EQVw%2B2JKtaZnnoNZhGwON%2BYmyim5nDQDnSjwb4Y7Y0Stihu0RNn2ljv%2BlLbLkAxBvAfqoY%2BSMj7IU61MJaPzckGOqUB3hc8rG1Jq002IH%2B9YFqnKVlGUCHxrOCiDRem0yKROno6Sx8FHdkssBILbaB2WrHs95Lxm5k8wkbflzf5alXrRQm7Q1ZQ8hVooqkfGIuarbcwUDoN7AI8hc4wjfUPz%2B4DCkHSpAg5A2x1sDQI2fyph3HbOsQ8BfWZIjw5vNNIrGpHXxhNU5Cpi%2Fie95wWGZhRjXpHfYPXMx34MedBAv4vftPgHs6F&X-Amz-Signature=a7e92aeff9fbeef324c5991d4dc84cf25e8c1080cdd7e63ad46dca6d1c5da32e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

