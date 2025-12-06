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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZRPZAX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9GlAldjBqhWOvWsYOUjCAVDohYqwHxP0QQgVcvwsEpwIhANZDYEpXVr1hUuPJSYFJloD2Nft8wEXxRdzOB08ZMxXPKv8DCHQQABoMNjM3NDIzMTgzODA1IgwYhaV%2FZHJnNB2r5jwq3AMpPulv%2FKBa%2FcHXHmW0EbaVYjBLVXbNiTS6seRJY2BdafVZHA3%2FX6YAnU0M3K4D0ZAGFL%2B50iPIo7iWE3McCiC8Qq80xb025%2BMUljaLCcvJykwITYYkgEVzxxV0%2FRhLv3zsD3GkVtRJfNnO0JufvHu7GI67RZVliQGAFDmG4tAqhFiKD%2FPOGF3rQ5cRM%2B3eyewJs%2BVUZh2uxAwhMfU2HwgsfgLVO%2FlE7Ef51wREmaOJhmYgNmpR6het0ZH67FPj%2BDhTz8upn5%2FDsJWa8eK1SZpvDt4g%2BY0%2BbBcL49Q4iyiHVbLOTXN51uXKXG7OK8MD9Ceo27378T5%2F4dK3xiQ0xNB5U1lO0jZSJ0FIR%2BAJfPkjwWb4dWcUVp8ke3DpsdAyazrZ3P%2FihTPaUZVLMhBT4nCG1NceDe7qu5S9ya%2Fnl1n1U5M78x7Gp9OlpxBq88%2FH7Ob7xQLKVkiZAtZtBP4PJNU4r9EyQYU7UQSLFjsAY8bc1%2FjmMEWu3eSSUNFTheq1%2Bo8Y6l3nbbiA8VYKGNNonTLJuAbLWOGPNgSgJsqE%2FO79vIp513NYjMLMp6epYUFNmaj01bj%2FR7gE3tytmOVLxR5vXtFj8e5uB2yy077cpJjYa5z%2FlDZm9dFpuqdaUDCgptDJBjqkASK%2FkKwR0b0HQvZR95WteghYC6smFcvdv4SIs%2Bf7mnrYD6TbvB4fkvBM78j2VVj1H07VUxzuYgVJq7QJhtCQs9h5uFzHGPg2KW32ilTH252N4gNW1UqlN%2Fm64XVn2pQu4nDqSyvvyNJsNG2t7ox3hMqMw2njn%2F%2F5UDfLp%2FoUYgxtqZGC%2BUYning51Rf%2BUo1DFQiDMtmkfkknM2VGHtNQbbiUp%2B7Z&X-Amz-Signature=86f3bf23da9428a5cd9790ecc5558410d0b49bea317db839a0c7cff3cbe00552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

