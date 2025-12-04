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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZLE23J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDExd9SxNOWOPyhX0iKlfvqZ4vwWMdtjjOEv7vPcZWzbwIhANQm7koJzutyahWAxPPT10FrojuIrULkCQaEBjBiqO8iKv8DCDsQABoMNjM3NDIzMTgzODA1IgyhHkEbJqSnam0lWZoq3APbeUAi2hzxpuMtiYHqpUbX49aztlwYjqcijnLQvVo368aCkAzmIx4BrTXllY2kNNNKk0qCam4tZxLqjom0R4LDdpVkRRAxNfoTlu1PFwbWToUvGmqbNyvMOqmWDXhSAuLkYhVJ%2FQYvhRmY7UFuVe1%2Fh3fuboLSisThkhOMKXAHhjBRstDAeD8qf5nQhQW3UAyNKQaF97M%2F7MlCvs741I80fGkAIG9LtuPRHuQE0LaVDEM%2Bod5bnd87qXz0rJnlQ6FMaq8s%2FA0pYhaOV8LNwVmcVh3i3bTvO8j6WAn8NU1Pnw70CLivW1FIKpFeHZId08MPDKbw%2FvXpUItOLifevBXS3R2jWQ737BlVieLoVsgY8oTlmsu%2F0W%2BhReYp%2FWtRi1I8miw3n6bj8DYpnaBa0ehZS1ZatGm%2B99JJSa6rLip%2FceoPqY1a8HegIXkrW6kgPiFYxW4yPH8GyUD%2BiR%2BnfnC3%2FRKtNKZbFTpsLBhwTEZ7yndUUPX0%2BXgQeqP5L3%2FyVTin415RpQMzlimdjYpJ8LDKvhI3GYN97d0S5AHhoyvAxJp0NMqK%2BQKJQg5k6YYWfJGtccDJ%2F3h9ORUdXlAMFVubjU1yXzAxQYGxAF8sE8LuCTEufl5xFInaYWY38TDS08PJBjqkAf94cCqr6Jpdcm03Qt0awBfwDg82ewuge09PFjFFiJPLkjoDthGIMyclNqo4ORiR6UJed0KR9QRvD7%2BO42X6El4acbTzHNnWlQsRqJlSTCaSAUmBbqrGIBUswF2pz5Osx5jx7xYVvS%2FIE7Az0Lw8twkowEZoqOwwsh8IMw%2FFmdDsPfImydokxpa%2FO9VB6FoGiU3wQkFwv6J1NLF%2FGM5laXc2hDNl&X-Amz-Signature=b5cd2b6933a0fdaa479c73287e81e9b60b5a5f817db43f01cf049a5e2392b98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

