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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633JXXXXG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI%2FLBWimxN5libtQL70AxBXpy4OY%2FJ9h2ss1ESVnLkiQIgL7ryDKxwawfRfh6vvTt%2FB7F6WNtideynFVtiT99yVvMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPI13o8WWlf11TAuDCrcA2lGzdS9pcs4yTL76L4jIjVv9cuIqSYU%2BDO%2BQ6zr4nvk%2F4yg9G4TaDmADutBFf8DQTRQxfdPYCnBzrWG%2FJdfoowqiEf2qSOmqsBNV4HDXCC2DgkdpGv4tuSxU7xMe8rcvotr%2FnDijc%2F0ozV%2BSbqeXMoreeKdv1kbJQOTu9EgmJ6nmsiQ3OPx0m9eW0C5G%2Bd2%2F8zE0v8wXUM%2FaNvUnScPj1dUrZy%2B2A4bnjy9hcCdwqp4XpNKzOuQLVIKqfpjKysPqTGJC4yLSCDnRVp4IxPV%2BcgD6vFWNrvsX5JoZ6udAwtWexbsCfFlzLSh%2FTamvjKmoFkrak3I%2F%2BP5DZcm29NsiOE0YxFtHLgq6WjH6zkoovuKSj9kv7XPPWSxmizofnNyz8oAaVoa145yQ4OeHzHo7I8h6kjVKT2TRgdtM5M27pVtf06ke0n3j1yyt%2FPE3dDgHsi%2FeG8MIxggB%2FKqONoSYM8Kn8j8dWLBxDta5UrTQiY7f%2F08hGhvJp6gniFGKeSvusBoYI2q4CqqSg8oHAgHiHCK%2BGGDE4468lJEnSttlz2QdPhcRs7%2BkBT1EOOzwYKwNx%2FpdwzJMLoe0s%2BMbPeTCPI6100G92UfK8OM%2BnjMu4FOXtQDDJGozu4RPDptMNSNzckGOqUBPxvsXgtFTJJmWhBXg6FxBg7ROGQi9AkR8QRhOLmQofkrO6GDhkUrZ0nu1mC6a6vEAZJ%2BEbIVxnxQEAsXx4K3I%2B%2FFjtBrivnMFcsFxzkMcjb7Eq5xaKHmCklkQq642pC5tdRJdTgGdnx%2Fr1nJcSSTpzvj9UXWIxuy%2Fk0SaZghUMdHB8r61TkomngFvKMz3OVyegl9VRHVwYuWR11WWEv%2BRSUMnm%2F6&X-Amz-Signature=ad45e4908451da385baf6669b7e33f100e3eaeeb843680fd984180c1c668d2ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

