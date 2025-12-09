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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QW3QETG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDDF%2B2sRD%2F6Rr9R2W%2BELVDT6rHeWuM3yxf481FR5m6LwIgEtqFVcS7XkY0LNO1bvvaBveO%2Bx3Ou3U2YVLnZ%2BI%2Fi8MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7%2F9NK%2FMl29ZJsEYircAz2D5bZiHwSOJ9dYjCW77rLdI6M6%2FH9%2BSt1nPWFOZy%2Bh9tLDReo5NRuaYnBx2Gn3bTrOP7WNEHLJ4RuxOK5zw2ZpZq9sajMHMtrWwNr0WQIhdW8dThlZJ0hcc9i6kAuuTxey5ouD9kr9zjV458PPNhhyNkET80TfA6Oc2M3T1PYMlAvDu3koH3s%2F8i9HuA94G9sCZRPM0LxmuVKY4pRZbAhrWAT6Ql5xSgaod7X8Eola5g17qMxWixRjqEEkjRlX%2BaUXYhvSXCdy0nGRh5q3EWvi%2B9njqXYVtpOF0N2QIErTIg%2BZtUlGY1Mjp133av4xLV00wV5sP0HZ1jeR8YgEmjec5Q2aw35de1FDexwkOgVRQJK9%2B0UeOG8AvjW%2BUMKwh9hxPe5%2BDAoKrG2%2FXGlKv0oDLSf0icmsHw%2B7eEaunHkrfziTAJK1HFcyYwglXn%2FPCe86SKGENwP1t3t377KmtNmX%2B%2FpYCdxS02FZh469LhMf7hZ06ieG5VWa6AuRuPHIjDpAzgstW%2FsKfmkhrf5fpW80NoBv4hEy3%2BupdmwcmZg4255wdhFwWBXtrfw3YIFose6vokKvrQxf0WnJvtlU5GNdfe7PrlPLz2d%2FIOY4jEUwup625Xs1gTF5%2FIl6MOfk3skGOqUBxWgQ84ojUElf82L0sUN1nbrjIHf3N8WUszhI%2B%2FW1amc7ep0xUJDZxOEo%2BOv4WI6%2BScq1I%2FH4E5k1xbTjoPOYJozyuiiJQbvgdx7rxFXAtin2nniMVZZlOhFd%2Ftlz8Ww2joqFcYSzEVmO0piaJq%2B4SM%2F9E%2FiMp%2B6qRvz7AA5%2BNj1UBTbIKPBhAtUdxFnDWoblJoajMFbrl4livrox%2B6j%2FPIYl4K8R&X-Amz-Signature=cd209c2c20fa0d26aad5393a92ff95a592f987f9da343fef18c6aa8f68409184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

