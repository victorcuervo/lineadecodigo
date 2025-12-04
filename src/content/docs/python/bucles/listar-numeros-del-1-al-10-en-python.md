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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJVZ2M5D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDZdtjCtfBONZNrYdiu%2BIiiXwoCmFSuc2TCOlYhL%2Fs9mQIgHXPEhExMJnY0IShnPRgCy7x2%2BcqXhqCcsBpg7rsHahcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC1pqQMQYFngQI6ONyrcAyx%2FUcd6Y1dQCHuj97vyEY1tC0%2BA3vxk8u7qcWR7JiDLMQLA8aRdTVH1PA%2BZVooqZ4PeGb9cj9BHEZ2Ugln1a5%2BMcL6f7%2F5fW556LRuCICAAJKJdn6mnvtDpHaLi1LmyOhlDZECKkLM4HX69eK3j7F1rT37EyU%2Fk5OwCr9Di6ujUHmYOrZYbXACT4MrgIU7y%2BypGbJeI%2BauQasWo68tcFmoyQDTHR%2FngF0d8bD8WCLXE71hQYNShysrMAsqiA02Iq1w6pyfpD0oYaw36WKkIh9lyo0R%2F7W0BNK1aFHn6PZdhTOQW0DIV5zOnhCD%2BQFBpB%2Bl321fC%2BN0TyaNQVLdvUpZWosQR%2BQVa6vj6yBefutiAuBYB8ZaMm0tu8RFs8bz147uwlMuPkG29ctbSudJsM2tJbzfHKfA7%2FU%2Fb5Im05SPduRkvtct7hIUVgvOxktCl2%2Bw983ldgXYj3XIeHH%2B0WM2N60MxrJLlFGxhAV4VQd1hwtENnfoeA1Bkmk2HMj%2BoOMlN0J7MJITgQUDZ7KzL9ak8UDsjHG%2BLAp1HM57iDCsDg4D2yLzVzCsbLSV1HFt56KrtgzD5MFxl1fK1dxkYxGCjHMWhCose2jZr%2FChFF1QqFK4dz0kMPdcC2uqRMNnyw8kGOqUB2MrixOx1nYeO5iG1kTdCnvFnd8oweYOGTInHGrzpzV7hxqhIV7dHbbgD33WzezVw57VlviLy9BKpTsHD0TTgF2R6tyF%2FBiaU%2BgIilqw8aVEmpwobRxQNW0lNFLiabMzRz2qzn3fcDWOukTKy35QQ7rhUwA7xAMg3BjmI%2BnNf%2BSmIA768UptsFhTZH03FtxYOa1P2tIoqM9f335vm54F4fWdr4oW7&X-Amz-Signature=eb7d6927c6ebbc568a623f50101913c340abab030a94c63daec51ab6dae8d82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

