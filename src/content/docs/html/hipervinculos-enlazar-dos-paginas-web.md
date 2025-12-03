---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFAV5PL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDDSeZlOHc4nB2yE4a5KrtLKv6U4NAU0GQAzr%2FP9NXi9QIhAKfo3Va83CxMkfU1AdQtHWKP47B4bEYO%2FsDMgh5uaN6gKv8DCDcQABoMNjM3NDIzMTgzODA1Igzy1pHhVul9LjI0uiUq3AMTucGvcSTzzDdPsr6uvzPY05YHJjPknOSB%2BIoaaj4kP9cwV2KvmvHVcFN46m1smGDM5Gwb8FBGktBjdHaS11uo7isDCDZrkwlF5WJ3%2FXCSqLjKGX%2BdbUp2EFWkm0iRQQ1aawuwbfwLYpm73Vbne9srzU1tBVxNedTdYBBOG8v6i2InRoPs%2F2TadItQF6BSL1MIjExqh7LcndJMkgXy3GzqQQkHbFF0YfjVeuWWQrLylPTYslYTY0qmar6qVgAmhGBlJpNLaP1kLKhMaJAXB7e8sgHPAIbdtdGt8Ko%2Bxno8xvyl2KvgzCYdugXu6FGLETlzDgYo%2BUyx6NKgkG8gtWqB%2F0AIRFvNaGTWg3vRfN2t1DFhQij6QwaVKrEW4WUs23jJ1lsWyRqEIJK%2F%2BP%2F5niatP8mD%2BWRdQgPuv7%2Fs6669wqpeDB9hCk%2BBhj%2BUZh8F2WPy0ffHZVI2ITnHQBWC5pLal9VyB9z8xoJ02YiNy7FQJnf8h5zJ6b%2BtcFn6gNPQuXxqoynyW6I5W%2FWzZI4Q92KWT8XAtDKIMzVj5HSSpZRtXBRhAVGWgcJqBiu3yF051s421tsxY60iL1d%2Btjssvvoq463riIRBSO6lCvY8NsNaj0NAaDTsx6XLQh6D6jCH3cLJBjqkAbSQjOU%2FWx9k3Z6sZ5E3BKxvpgv6mPR1LAJBna8ke7mwYyCC58XqCaI0Y29ox5SPOE%2BbEzVnFMkCWV8J7YGSPrNeYCnVux2jfT3Qb0MRAwBp%2B37XymORKmw8ffZJTlGMb9klBESlSNCdi7fw8TBoRdIiIu8nLiOnDCcLdaSLhcfWZ8Rykze1l%2F3P%2Boto1FX2jjEQitZwXf1AulH08kv9L1AvRMeM&X-Amz-Signature=773dddaa16583f566d3bb65bbf507179db49de3da6ef92d1fd6c9ed23194eb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

