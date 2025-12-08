---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VA6KNB3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1CrUZHORnXhscc4ymEMx5gjKf%2FETS6U5A7IzPW7jGoAiEA0cv45%2F%2FlTkeAnIx78XD%2FJDtbXrEY1Nn4qhJWH74p6%2FwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsJXdEWNcQiXWWt7SrcA1n3t%2FJP3OqM9Puc4lufA%2FjuAx%2Bqms3ibna3URMSSbD405%2FmC4ltP1zZPGQLoH3TPQgpcTcWoam84aBlYI8on0TBfjZSG3jPPowDKRqA%2BUXGGf9B8Ug1a%2B%2Bc5YgjVR69yuNfGCrLah%2Ficc%2FpAmPZl%2F42SVa1hvlJmxzKaAhdhS1xamvutHX4au9b3%2FyMEf2Kfs8jKexycrzWMAVitbtZbll%2BW%2FPBq67xKYAY1ECMB5lL6ttK4nE0ub0fmcu%2BqyWocARP3UloaC4siwONPdXny0dlaBYsByjCKQ5jY3v3VxZRhGu7Uq4Ov1EYnL%2BrrJLd5FlFo8g32gfy%2BMbWhnUSEhNmN%2Bijzw7HVarPiUdAEQh5PAlBMe2Uuuk2GCdI8EDwJaJru3lJ7ksBbXWXrRxKH34GQYh6YKc2IAjf%2BQnJDTiVnWXLzFJV6GZu%2BA%2FoHkAVsJHgIrsfuEQS1UaA9vFhtcXAFdPmnN2Vi5UJKXX4JSZY083IhPjCvNfhaIpRVAiNL1nqCXdIytrIxQvxhAzRpapdiVuLMqVY%2FV%2BPQu3ryHSiZEP2YbzfHpi6oV%2Bo%2BQUD2yInYJUFoYIiW%2F8VkbkvmLeWFPE0BS7bICyPPypMnzab0X6yWGHzzra1MmJMMP3P2ckGOqUBNbd7AzII7wDGRu6S3w7acwXgXOtHZe8xJgIvBKAmfOZa5ts5y769lAjm%2F27kgLbPIB3TQsKi%2B53chQtWVk%2BFvxprZ%2Bc8KnePKCFa6tZhyWYi%2B15NSDAqG35OtZhXnd4O6lVP%2BLJI7l%2FQ3S0exDFp6%2FfDdUcAnyynt9J6Rj%2FiGON99tvrdbCOONeWopwCUA5YGSyh51y62eUUDecttszRs5pUUQKX&X-Amz-Signature=7491513e2f7151822d816ec07f049f6d8d1fbe89cec9a5663b5d543703549473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

