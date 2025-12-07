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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKDTDXX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdkTKmDkDH08dtSKHwQ2XKCdg8gxpcEU0bCMMba44N9wIhAMC0xVp%2B1b70qz4RB7kJdr5VcUVeYN8n5KM5PXtzDwAPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD00bwN%2FXJDiQcvpEq3AMMfsTnqFKiB9ZkkoY76ZmOUry3RPoCB3EITzsXDOOLvQlDMxSYQizVJqIrElcM4nAVDgoZb93UGw%2BTAjWVHkGg5R%2FizSVFc3gYYo%2Fp1laW7xpoIMZ45dq2%2FqlpHUcMlITPcauupecnUP%2FyL8kT3O1wCZG%2BBvGvX5G9KxILDk%2FUiSYok6L2b8YnllwRpv0jaJUgPyNsn3ILD3mMF5PeD%2F9Pln3698KWrKvwnalVqXem4w%2FTbAZ%2Fhkq%2FLbQG7%2Bb1%2Bs11ZNoWS9exGJloYvGsyqYUPROZ68G1Y6wzertj55Ca1JtFwBttLreR6oruFI96tCWqbBSZtB6nSoQTbCc%2FPRl%2B6cG7n2WBmtzZp%2B8ZIbCPScXIFox7tkt6z4%2FchzUfM2VmB07r62FQEn0Xst420jRCd7f0fNsp4A54p3YDl58wZqQBO%2Fmf%2BPXBs%2B4k7uqfwEotU3lGYVxeYxKkaVC9HQah4SlrFA3ymQl9utCPj0S%2F15BlgL%2BRIqOHiKqM5Gt7e3sHpptT4CRotYvxIM546hQVWwI6oQwrLIgNUjMn%2BvZd5jzwwK%2BWhJ8LpxnZASEGbPlSi4PW2DI3oIs3Xu4lx0Wb9BggPFrv0kTloH5AfHEEPp2u77Ht6DjCho9MBDCW%2FdLJBjqkAWSYwfjxUTAMv%2BJWSnisINCfqP3fNmcUHxxFg8QDMnXUyXaV9Z65m7gFXqZVWSfsHWoTMHs2ZoCMaWvlWZOmamSRhS9BdZCYSRfKKdOEwjRYMzhflaUkV4OOggLTW%2BpnYHslWalUIFtsxB4nDWcvANYw56EffZXWyekXY%2Fh7Jxw2t7qSGsKIFFlVAP%2Fcoq7dkFkxI2CLlUKe3exLDDtEKIJdYoHY&X-Amz-Signature=25b03f765acfe7121a436b9b5921f6faed6923dc917520f1866614c9f3653322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

