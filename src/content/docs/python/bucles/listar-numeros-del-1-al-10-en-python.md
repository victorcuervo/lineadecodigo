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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBMPFYAL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYhfsjfLswLGqpsLL4P%2BEG8eXeqGZa5P3%2B2wh9Mb1A3AiEAmVThW1wLYiXitTys9elNBRhlC6nnEWtVH1xEJoEVBiMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOnj4qiJek1gv2z4uyrcA7jh5f49Jepz3teyX9CWiqlGWoD7VSqsnAE%2FZZb7hSIlLX7u9%2F4nKPv3Etye59MaxkEPK72IXXmnFWtOxSHKTc6WXvR7JaNKGk5Jx9z2Ncb6hXIOxGH7Xh7v1PxxTcBrDFzueDhkVpJoxAQuC3soDuTCrB7fvRuwk2o2S5Y0mG21Pt0os5hvdl8mr7373O5sfI585S5jOGEM%2Fe5i7wHKlsR9PNHJsyM0hXxPhkZxDiVM%2FKCxLAk0xxaBKPs5bndqH00iKk00Pq3Y1ZrRLr4i5PrXqkN%2B3bsElAeYFvkdE1HE4JLcPbgzQpwwwmyzmEY1Jd%2F2h8BFWR3b2yovAnNwKEz%2FGSQgrEeJubhGHIDwVXkT5JNqMsIdy14tbq2cXdP6eeD7HbwZfb6DxxQDUOzzHELukgxXSTk0JlQyI4sr5QSO9TGTZ9DY49cUTZIe2PLTPHAbyc2n3THThvFYoKbC36CG%2F5YDWcZO4rypJpIq9vIWoilnf0ALYQ%2BThDS5EjCG1HxZpuQ%2BgZ%2BGuJtS5CwGqMzE0PHC7X5i2Pdn7SGRAyXwnQIhcFqs2f9L%2BWvXuEkZYPhtp8jAAAhhmBRNXGhhmQj0B%2FFadvLoZSwQFsrJUKB7HeL9NKRqGiVGc8ITMJPG0ckGOqUBpsAx99Q0vfKoAWcA45YxtxlBv%2Fkey21IjbO5ey0euE2kNqU%2BsoHuR%2B%2BWnH7QaIVfARGrqJpjzkdF9sAaj%2B5Tlc96ZlioK3u4IjpfCD0CXFsqqkoy%2BtcgVWPilW%2B19jxZWzAvDu3HDCJ8kxvZnA0LBVIp%2BVkg%2FtaoEM16F8nG3Yg1baXn5DVAPMc9iecYuLNZ%2B%2FSFgt1qw2LunN2fRzvOrdnjMQk5&X-Amz-Signature=8c38b3268bde3e3da99b04497ba2c3033487ec56de1dd1e14f687eabdaa8bac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

