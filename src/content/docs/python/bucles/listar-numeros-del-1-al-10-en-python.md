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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4QEFSW4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu3AVah8pCsNi8%2Bpjs1653GcX73tseJKht2K3cBCselgIhAP14%2BWNB%2BkvQM45FeNsE8B9v%2FVqijaioiazENxcT4FgSKv8DCFkQABoMNjM3NDIzMTgzODA1IgxWrDSWpjmcXA25l3cq3APW9ZW2vcxi56UxHKpwmE6eeOd3MYnJSL7VZHO7KugGoMJcUunR9%2BjFbbN%2FvRDXDG78f92r6VjJf2H3E%2BKjt9lLTtRkG%2FzWnVYp5%2BopGSoCyjhgqVFeKYZ6uds%2B%2BnOu3qA%2FE%2FtkPbMfdwTww9jZ5Bd7mW6Clzcfy4GJgag80VDrN9W2vOlktYrnz8QtpHW9Er9x3cUWqqJJMZJ7xMsKeV2Ck7l8XwuTbZVDBm0D9RLsmycSbpaxXP46T9QKWpRTu3BxPpvuJnpRvLTyN3ZfP7V1ngIO69Jjuript7bVTExrP6hK9X7dqabUrloNjRx5Iq8ybhqaClSCWuFaZ3HW6n%2BArkrG53cW1HrTDR4Bgsrc25xqyPU6dLG3QldCCMW2zqKyJoFy9kaoSyS11K5DuJD7AaaZh6fez7AXRajQE0Ig6A5%2BKC%2FeEALVE8NyPakOjYH7tOH3y38ntfObQYpqpX5P7GUgb%2FgG9uKEGkIEeZTEkVUdePSSzx%2BtV65efy4RSK9UyxT5IxnSn3UMo4ZNR9EaYBno8hTXxVU9H1jQpZrIAaZoncc5D8CebT3M5cOzuW2OKPss9jF3mBczCGFiPAXJtJop6G%2Behd1KcALvs1SoT9kTohUETol8nR8VxjC1qMrJBjqkAdGA3QWwH%2FcJotTdv%2BXA9jZDpWh4pgjhom2w9WQK24znpVxC8A1YOHE2MAcsGmci4j%2FQwgUn90EakVozx%2BnDftV3FUPtj2LTXr1tf5VFBtVLwzoL92gC34E9B5GQVwaxLrNI96LJzoLgVC1epzm3vuPXx7FDzKTwIpKgri1c%2BQvdX1GRYXI7xQ3%2B4S8c8Opz%2Byq5Mli8DZamQTxEsqBU94uptsS6&X-Amz-Signature=dd22afeb50b09259ce9f409079b6552669a9cf051fcf5cf480b9e7edbe200752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

