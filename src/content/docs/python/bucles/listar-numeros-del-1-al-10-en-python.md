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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSBWXUK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8NBpebEzaG6CNjQOpbXjj9c2eyWQfH3xzCzxgPyhWPAIhAM8rXKsGOBRpSiXO%2B28c5xzmvaLEXqQkDKK4w4527APSKv8DCE8QABoMNjM3NDIzMTgzODA1Igzy4hDY2eZqwr6nUeIq3APp9XehNOACUU9q%2F0iOY42%2Fdeos6LL3K2D1MjToxBajDWJj78Rdp3qZq7ESDihM4YUiFdLx3tommMJsFDigOwsL0RiU%2FKITk0s1Ncbreb%2FwiO5mRDfUb5pbBx5zp%2FCODWEjfv7y8YKdrx7V7m54z2DEfZHGNN7vfMeUUE%2BMgRTCMZc3pLJGtdENNz89h%2FGj2yB9kSyQ5BC6hCHMql%2BW3L8fcrYV9h28ZUAhVBq8HT7rbwAtzFO3VL%2FtbYT4iP4FxLkj%2B805N4ldZ8WHzDX74kOXlGD87HlrHp2Ptq1e3ABo48pOE92zcZHXOuTIv37SVuHdE0diKPXumSVj%2FOEiGCrZng2n3IK%2BMqiUZqGxTziKxK6LhBzvb4tyh2jcq5L6FFS2U5wsngKdyWJ6iAodZfkjXmFAQzkzjn%2FU94t7D0Q3f3Bq76j4Bz2S9NGb7S1lyNw98771tF1v2OpJquyXBLM12IxRoRJAEbjwlsM4vVGG84Q38pDrFGao2Oe6a2rmIaOBM7DV9br23XzhOoBLHaspy9lIUcBNtEM1N6Rw1PHUXNi%2BQlKUZ83jqYtJB5ZCrzW4gESYgAXjgXQs4eehZy9qM008%2FHr9kPhYXF8odHp27TqScKhCEJx%2BYTMQgjCUjMjJBjqkAX%2Fk%2BX3eEtLzEhhsFE29TN2vLAOC3bfMqoH8ewhfCuDS4NH5LtGohps38F52JryzaLE48Q9ZOWT5ocILmQHz1F6LsSB709cU8UpNUrYgUkW4kdDFCLSXqnz078urYuEyKczHxvwoNTOeGCgJ6Q%2Bdjy%2BRubTtyaL0bvhGqbeeMcysZg6vgHTzF8g%2FkCZfknU4wdjrKpWi2eQlV%2FEPNIg1jgtxwgaL&X-Amz-Signature=a7f28106cdd663c5f8ed8eb84afdeb3fa77c263e74b083dc792161ec403555a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

