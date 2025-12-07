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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WACEBNY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1sgCB%2Fpm5ChP%2FUocwPwVRXUXBIpcuHe94Uq5Ic4hFMAiBm7qymNEguM2%2FJMD7QuKwSv2x1RJV6mDSPlFzB23kizyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKtVetRWBx4OKxd0eKtwD%2BlFVAZv4%2B5d%2B6dyU7WnF2iQvTuvAVSuxA2rHFZKa8Tr%2FKAX3co0v%2F1p3R%2BF9MT9F62UqQaO3ovhmIn2%2FjkY%2BEA8tvTNMx7WKR6QaAqGqIVYcLSbMvSEH1Skjv3TaNZbWsfBM9dvIzPgyTvqT0V1hLeQIYz1Pat%2Bgl3oAP0Bg240TNUy5m1EDcyMbpQlqd7VREZlhMhHKniGDiQHTBcuL%2FxWmQyxGwQ%2F0cLDwDhKCSpnny9bp3QQ493JRhaPLWxe%2BoasCZ%2B5tf9AtMtzJDXSB72FtyEmbwaVfRoQvdNeMcnF8IFiXhf70bSMJvA%2Fh8tkJRK4qfPEad0xaOcuf%2FGO%2FoNJ1tjChMI77dAY6%2BEY7rQY05w4uvGLys6do1U2xfVeFFNpSSGwnecIIAKw0%2Bit10jBp0GSs7vO%2B8KMwGKw3gepV1nKa%2BHXMWYiapQP%2FJ7fsWDSMLoca8sHKiDF4acjne3MjASbB%2BDswSZfGVcwwJGc%2BXOqHBc4oVxV4Bt%2BOrJl9W0K91DCSGKO7gUkhv53NwtXLdJFH7bFQY2Vt9Xp%2FwTSu7iwV2YREaZF%2F0aG0%2B8smEgbil98TIN8yehY4Tuu%2FH9DLPVkZ92KxIt1AKDAzs%2FoswuZv4X01oHj4VaYwj%2F7SyQY6pgGSx%2FE12fVUlgFbRLPZN8vyobp%2BBzpf8n6%2BHJN1weCdZ9brcM%2BQuIvKuIvptSjxiWqX2q8DXoqaMnekzNdetws1yY8xd0vDS74dSRz3pNmRjSYgBdjnNyUTq1mnN0VEsF%2B2b%2BMEZy36h7bcb48uBRWiW3MueA9RSAgnRt0kdsPWjYL3mDuESVIvO6HR67n9anu%2BX8R6CqlM%2Bhor35u7jPlJ8hLB2Euj&X-Amz-Signature=84f6b97cd0615bb7485eff8dddd44c3dcd4fe1aab4655f08090d0770a3a024e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

