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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4AHU4QE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjQm%2FtsQzKEYEt99suapL9qSc0bY2awd0NG9WKjMD6EAiAbch0rBmJl7nfaQIaPKxoTPnMLrEhRb6N2knr7shvu2iqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKG9h9n9J6LrWvf%2BKtwDjByh%2Fvx3Y1zPaFQmmmZqEvWOGlXmaVTMqOlDiVoDsUY%2B%2F1bJqfXD%2BtwpXJOV%2By%2BEwEIONwHPhQXnrUvgdoT52f4G3PTPXrcoyZC6THALcBnVqK577nmti4HXSlx3ktzLf6tJDffsmspcQX8erSUeV7w%2BcVIFAeevksvNDpWeU6C0CI8IkCGHCdea5Ehrrx3MIQr%2BTSmPAecBm5Nmt5zQya18%2FWRVh0hh1z95aHlFQH9pzHQgg5hadzsfLIrn2%2B0ZVn9h4qjjZitLf290ANZQYmQz76rkPzXcaUIRZsJEMMWqqgLdJzZcd2NrH3JeLGwFZ%2FcldSWp%2BeVppOZu%2BUynlxzhLQ7dRsm5aDjjos8ZFVW4j2KK%2FwSr8bD%2FXW3jm43Dt%2FzjcASN7zKPNnkv07jLV8CiT69FkAaWruz8KZNYxhkLc2zhOUF%2BF21ho6Er%2FoWk1CwHIStbsM95B2yzW%2FQhtGwMIGiUphweq6lYp8Md4EdDmCc1k6WeRz6GaUDDBVqipJTzdddK5mKicUHTAfdEyzLI7RAwMtrLtgp0EJOwjYDvDJm%2F5c%2FrUx7s29e7kNmP143niv%2FHf%2FvmXYa%2BT%2FMYk2IAzXnaYKQFIRW9J65JWTi9tewv7TFgd25K%2BDwwyuTeyQY6pgGeURGDnFJIdILVESGo14Y17qf8pXJ7l4L%2Bnsy1HJMQCDqT9IPzbOPaEX3cWjvUJyYLqUVeb%2FUlxHbUcgn4ssoC30gruY3IvQKkr3D%2B%2B5Zc1u7yeeDCmk%2FFaIIJKBwo%2Fv%2BTpLl%2FePQsz49e7k3eMfOQLk1in8zR8Vme05SvE6H0TbM4bFoHZcb2oNR%2F2coCVQhVv73hSmB7cZD0kkgB9yiHQXtRuS%2BH&X-Amz-Signature=653d99bdfb559986ca18b3dd7e8361656c06c80e4452d8d9536b86759dd0fc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

