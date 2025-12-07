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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMJM7GNK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM6AfjDIBRP5aTYPeQ7ZvqsKCbulcDkXpCzdvLXM8BtAiEA9iz2kOBmOrZW16OAZL1mdJlJddpEKwnLOv9QYdi4um0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhplkQDZuHGLoj2PircA5eU22F3J8o%2BCgmg0oZq645Bl3F0Cc1qWxCoBw4T0TliIyexFON9DPqK9OnV%2BkitrY%2Fhiloq%2Fknrk2owWdSMGednjcGdAcGXoqVXt4zChbgk2SQlilj2%2BA2kKhPW90I2Z8PCT7JRfxqo2bqJULt46gg093RaoJWub55p6Ie0EsZ7Rr2VbdLtFR2oqOSVhhSzDTqC98%2B1aLjVbJBW2fkqHV0HPvgfkfUzfmPiRWBHiHBv4clD9ADjkovQExy7TeGDLct48G9bF7cYZH%2B7jVTYUrddutznV9lsesId35KcD%2FVo%2F%2Bp9jLUeg8EM1nV8SI59DRn5QdtlzBXWqsRPmmI3jqBO2lQWt268%2FwVdtd89hkKdIWV%2BnPCkxi2P1DrL%2Fezrbh2tc6914i1pXhXNGnW5o4GE%2BO%2Fnq9Ufja%2F7sEJECcQaHNRTLJMZFv3KnKGWD2AmFYIF3BJwthvi10Q%2BHB2Neiav9X2gqWRxpQKaWMIBEVauYxZM25cK4KeNPhj0UK8stX%2FFSllUHPzeREZQFqSTxiA9qDaOOE3gGyy8f%2BeO7JXeKfNC1qWG6BpJ0RP1KdGfNaap%2BoPcWiyn0cysYqAHpHizpbTQlbyHXedgkQXsvEhenvAEr4XrbprCTok7MIOd1MkGOqUBDXlIoCCDXEwrtTG%2FlVlEWpTZ7JGivC9xglsVcRr%2FUIdnLz9DaJWfgvwzVuV2gf5Hj8sMhN0M0tpk7Q28syvOw8n5VABK3CDgjDsMxJ76Zu2Xy2nUzYDcMQi%2Bh4dbZpdc6NaewPlrKpW5d4WXk%2FilaFLiAM3qeJqt36JnWRR%2FtKzJTOUR05k5ngLjRYthavtxp19K7Pd1csQ0OPjspkPZGBySey5T&X-Amz-Signature=b9b42ab305b1181b84ae55af528888502b5c120f7c916d4ee1595ed28c7b62df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

