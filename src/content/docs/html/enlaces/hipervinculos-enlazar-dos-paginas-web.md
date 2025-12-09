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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3F64FO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFKoInVdGQZC5JbYMrwq0e2Njr7zI7MBd0nwJStN8llQIhAMnms9VdEr%2Bj3BVNFpBPzjYtbl%2Bib2cOHuoZrpoutZXBKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXaINseq6JlgJfASoq3AMwqRLQsJpeP2EtlWL0M22vdxqMpsEln1lMqYSURiffQ%2B2aHqq1QuUE%2BvussYNSQV5zXvQ68xCT9N1KxEtK3y03dLZs2jKhMcX6DvxszzznQOKbBGUt%2FRMJSu%2FJlKljXIAwUa6Y1ZpehY9wjcadiLwjtw6ailfvLd5kIGUb952uP4ucsS2JMqDYwMGGIDHECZBNf42u5vrscSEwne%2FdqyJGkA%2FW5e0PI%2BynOuVrlJCH6%2BKcHEt4YFR04ERDNRIDU2y%2F55jgxiSu%2BoYjLaZR0Rbsi%2FYdzQxq2nrrcvJ8TQccesYaL3UpdN93pyi0SHcHe8L%2BJ8uHWWwR9OBXLYEZ2QIJogiAcAzRNiA%2FqIQOuu1vU8qoFo%2BE8456ure1dBTSBO%2Bw066pWLt2QlkuK%2FdtxM7bnxbRTIZgcerqJL6MuOKH5RXYoB3wuACnw8wCx5R4muSQ%2B8FJn1PiLDPfGNic68CwWxRKuSlFNze6UCwSGccgTtUGw8QBw%2FfeIZy7o5MWZgZyyr3IzdvkONFpP1yUzTiVtFd7gzp9x3eXaDdY4PzSdPo6YKl4p%2BgnZfJsEEnE4ZQ%2FCJf3qM36nn0QaaOOSpRKYQa8tHM%2FPlvSkbEIHNR30%2FbdZsXLfB5ZlrSsJDC6l%2BHJBjqkAYwlg8WsSJh7shSUNPuqRcOXJiZQFEInr7SdsnK1tnntp9cdVpRCY9ehTNy9pXGhkibHx9fcDwmcAVC6SDvxyWaRzqkibNJcznFvHuPGlcYjkmBu%2F63l8oo9UDqxMnERqOCx7qgErb7Z9B2%2BbQllmJEEi0ZxHRqWFEAVSSTsNI3q5FmLsrhv1gFQfDkPmZs4BHGsmSiXpigqGEbZ%2B%2BDKa7r7f6G%2F&X-Amz-Signature=c4f445eb6b8563fb34c7cfd19c99d80dd8236bdd8c2f7ee99d4453a637b9b726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

