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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZY4XGD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJl7yazE2ew13Ujic%2BVd3EKD%2BXKKJylT0m7fM0IPgqVwIhAMoZAmDED2fc4KEJkP7ZjjxUYOhvFc3jtFoxqm6yrrIJKv8DCGsQABoMNjM3NDIzMTgzODA1IgzT7PBj%2B9YqQqO3Q1Uq3AO4rNjuw46SVi0FFaoa4%2BU4me2FjFwKW%2Fr6YimhNl9yLZiN4%2Bb1ONUD5IquRFLVzp9egpJhg%2BU5oN8QGQWtpJW2pw7R1C%2B8ihhGJQc06mqhH7W7Ne0f7qmD3krmGtVTh2Vz6xKPgPMWeB9syPjwmyDez3sbH4rSBlOHA9OOKle5mguPVPygXEg%2F0iLpj3GCpDnqU%2FAvTG2a1hKuf9qxKD0YZyMQ1l%2FkGKioEMmNLBchyj5e%2FobKZ6hzYe1RVYou%2BOV2S4GdioBCOwf6U1%2BIRTXu6sLziBK0KeLJ21f9BLQEBLHVfsZ4dA3yG3fJIHNWIrEEjmqIG%2FS5U8f3HFbl8kZuM%2FAFuBkDSvQIkeOSKzvDmHKIom%2F1F9FCtlnBUx3TngWiyE3Po12goOCDcASN4VAZTcxWDYV1CMc788wHPhyqd78wQbGovfPtlPWxhR8lNbLPQVXlFZfYwBSWZ0Vsfc1ssg6%2FeAbhwhpp5pVOrJic9dCpmF2LyJnLJdyHLwpAFV4GKOkajZZj9ivdCP%2BuYX0IicEfcXZf5cbrl%2FdfVdX65MY99jmayzwGL2p150Zc%2FF1OkJF4p%2FnQ6afB3q9TwiSB19G3laJGusdl4mYeRubXf3wiPlj9%2BQ9s0O5L0zChp87JBjqkAVt6u8oYYQieRrQoQ2Wqdy9EaheiwR%2BgDmwDovh3D%2Bk%2Buu1nik0h78lXJPx4mow3EeOgZRsJXanHSi3ZXOkTdUJaWnjDsIPBTqT3noX9rfgAFQGoyzDv6buoOBwnwcv373FVND7AghO%2F9XPqLlq1PR0ebrv%2BbU3WfBj%2BAbClYJQiygWt4oa%2BLwWguyW14bZJQFK6kap4l%2BPtJN3qFsafXg6vuVpB&X-Amz-Signature=a512a95fb95151fa5fe3dd08bce4d0b935f2989fbf15c9a89917a4095012b690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

