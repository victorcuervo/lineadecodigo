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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2YZ5X3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeqRIOyw2TlIk337Y8wJafXpxuSy5DtIhnpKcPIM0rBAIhANRAjRi2TeIvRcdNB7JA8UbpnaGy2Uk12Hp1XGSwMhc5KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvVtjkbDtee0OnnZ0q3AM19E%2FifnYsfcwYwqFRXo4yyyOGrK31WHIttOx1jb3%2Fa0KvUmfFc3DKqmk7AKQv94nv2UK%2Byq7uNe9RjfRxyGXJziKWEdd8VUZgflJCT17ZVc5Cu8xon3SjuWKdDIj5pWB%2BYvCnUHiqicncCraqw7IuKpej6q1D1R4efL1RxSkC1sb%2B42D7954BVGEpTePAYZ0g0ICwErpqa%2BVTEXSCdk9uWejR88OkZMKNTVnrRWERq%2BhipubuecK8rXNCJXOr35r1SUcy9em3RWCHhlIBxlYgQRZNuZGbjLinATFj51u3DEwojSlb3hyKBs3OeWyob6NuSuqN2Au5fM616zC3pFn%2BqlIlqUo8Fz%2FerT7yY4orkT%2BD%2FhBPCNXdb%2FTsxLbgb7TJmENBLDetX%2FEPHQ6%2FuAvZU%2BiHuUm6kC2PZBj3oGuECBit27mU5%2FxeAyYPp4qY1hB%2Fbb%2BQp%2FNw1ZoPbXE74ASVocmH7ZQy%2FNRKw1%2FGfO4BlYt1uXhhCxvatStce1rEqRxkCfIbQM8T6S8BENF3iaCnVyYqZjKC4%2FtvipL7Qi0JcwSdjRpPGy6GAxd6c4cPX0JLBAmMDUteXURFNvcLW79X1jckg2Zf7fvxFM8sy8vPQbEyMZ5JH8ddnnCjDzDZhNjJBjqkAfXK8HV5HSHJxdhjrqlWjOFWwrKIYcWvMqJIbeM6Z%2BmKD0DI5utUmyHMKe3uOZK2FKDItbvuSUkcMxyU4f8LpiuwKXGnODxZfHOag%2Fn%2FcuHfAwN%2Fmowgb9hVvUOMKJx8mZtWB%2FpCs7pUTC2egXj00PZ6e1hmJw6%2FZXi9bR1UJht3RmUpRPL1O2CR6ldD%2BKxsY47vIl%2FncsrHCbYVOv8Zl7%2BsyRBr&X-Amz-Signature=39584e420a6982a3ffc30942f5482b55360dc5fdbb040274f3716126abb5448e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

