---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FW4TQSR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T231444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxAvFCTmrwjGDUpvUvXp4hV57gryZMUTMo4IrVnK5MHQIgD7QBNigUsW3FL11rkLzLoKJoGq3O1%2FtAsOX2U2n7H9sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7tGeUvDGo9toE9OCrcA1JFreVjo8O3GipC26n5dozZuV2vXpiVNcJ5S6AvrFVqw0haMjZoBiEf7WV5cmB3yitXWfDwy7lqTXbJnCLeJvxzToN8AAix%2BDNznkw2Ov2hyHQgPIQ4cCaf03udfyFuW3zKBFFddiJYso%2BQxjTL6%2Fcc1b1dGfgjLlMtxl8h9lYK79hejQ2LWYxSTJKLjF0k%2Bo2nyEM1xfKfQ0tIObhPr4Y4ndR%2FW%2FAIczfBwLP3SQXaFi1MWfhxrZ%2BX%2F1yxrEShS8HnMeO2dDKthgLXj13j%2F%2Famt2Lf22v0Cg3Ny1TDgmXh9wSyBtc6ewS9Df2FkaTVxBbvf5V73j93xw%2BvN%2FriQbNT3B%2BCPNI1tO12t8EuqVdX%2F4HgQcsM3NtdjekahaXZ%2FLLrg7R%2BIypsiCUesB58rPxrfJOj9a0J8s5D4do9MVm4sWnxdBhvcZBr9zstJtTUAs67bEQQ8GfrNvT4cBTbM0p8yHPWsz7mi4ZNPUX%2FnkiptHrHAKW%2Ba2Z630uzu3Y68uCgCAzRyXm5HCbi1dSjAVIremDoQZNr7%2B%2Bk0eSCXQktdGx%2BlKvdVtm4Wj3P%2Bn0QJDsZvJUCKKo1Q824qghuyEkUlEMAdyu%2FmRtvXHxDjAMseCTepqwAlowvCqe4MJ7E4skGOqUB5ReoNNIdF%2BPQRqZQexATEYkuLxvnAHAmamLF8jWwMGW4tgcZFonrdbxAWJEJzpQbW7DMWtiA27VarZYhqtbZxJ50CbRPoT6hjDYv%2FM4QL2b%2FFhzNMKrcIDbrkrsbOGDQ54oqnsKhL5aMyjPCTEf1fp2eqh9tLqQJ8CKdZ8VP0oXQ71GG4RxqR5e%2BoWkIMVVR0nK0V51%2B1P4Jp0rfPNFSMacdsuyA&X-Amz-Signature=f7cd76807675bc6046f576821ad246e6c55324184c2f0a9da21db4b6dcd1cd0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

