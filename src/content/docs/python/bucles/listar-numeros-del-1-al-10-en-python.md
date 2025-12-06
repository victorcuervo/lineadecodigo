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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4C3ZVQP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJaalXkTISENIyDDxVMdnbzQYC1H1suEX3LAMWsri0gIgHCZ34nu%2BepGkA6sMK9thpU5p3apjWrzX2f8zXCkQSQgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB1Hut1puWfleUzjSSrcA0bw4OH1Hrg34PaPtaw3hMgu6QPgasyQ7Y%2BAH5wvbYIIlJS%2BSZcGmUgEptFatqoJxLPt69kTdIScQxj5Vlj4YRE%2BqDU3xRroGWUk0uy2hMvRZ2f97mF3KeDEC4cQcd1fk8JR%2BO8Fy1kl0%2B0zsR9qhjmrf%2FYcMgxNU0QanP8VB%2Bh%2FBRYXcLGXZevF6K8gUHonYKgTFXTPhzR8vNhhiRDnbY7E6koI2nMODjp1DHdYH2%2F8h9hC1WGX3H174d0zk7UQDbmoCUmAxqzizTPNeGjDKa2XuT73F5NcE%2BlVsGyPc4sE702MNtTbR588m5k1%2F1%2BJ231U7h%2FIeoc2HajzrEQ75JpI9I0XBUDs4facXYKabs09LBe%2F%2BJA1VUtyR9wL1mGV218tor5Mm9iXuleN2qbtfDWwDtPd5HlvVSJUeW3famEVMtqGhUJZgZtvUC7hpZKG317m0ssE7F1Bd6TK%2ByWDXGUoPQB4igcWcs2T%2BCC%2FU3Q8JVoGWlRm4LhfE9rGSIO7sTu2GudTMrLHsS1i055%2FwGuRFdflmH3hDIRPmS8aR6il%2BS9oioNmcXJiZGOvoI14RZ2%2FHbzdXRdVCMzoGf5ceKbzXj0CSu%2BCYob78pBHgNVlmauQCDddytKIvJxCMOOm0MkGOqUB%2B%2FaY3QBak15VquYNQ0d9DhOuQVwRZi%2FWBAz8HursAJse%2BYnjx7Mj14QF99AuSX%2BFbQkeyVMfUu83YsbTy0KrYWesn78lWF32%2Fes%2F8AV4LNLxUHTKU5Rbt%2FWGcZLDwipTXuBggCX9Jsr6cC9wSotn2qujJNlBO6IQfS697Bw09%2BaGP1CWX0xCKUWlRXM9vksWEmSXqYnjDS%2BEKdlnHW%2FmoEjb7ksl&X-Amz-Signature=7c74df4c18da4dbcfd33e93ff14ee2eb0effaf3255720410e7b319adb78bdb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

