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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKVYJAE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuJc6EYphrAuJa05mENwu8qeU194DudjMJFq50QhlKnAiAovayn2UZDy4V7Q74omi6033Qpq4L82G%2BlddhomI7FnSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMW%2BJ2XbgpQBl95DfhKtwDzxgNwF560aV9WBqUEt8a%2FnJ5u55WO8t4srVWN%2Fk%2Frn1yyDgTJOrRn5Ttz4DzJ97Ux9Mv6Bj8Ir5urP5d2AsY7tc%2B99Ibo%2Bzab1JO74NiWl6zMrmF6VGZSBiKC%2F3TvZAWVSwFbOn8J0d%2FLJxCdrXz7FqXCn409v0jsSmcvqWBUFCY7VjR%2FRXA7f0HGc0K%2FgQsn%2Bbwupsfw8e1rA5lae7t8HP63q5DiaWixx3bXXMxjBATWfdY2olfGs3wAReC80omGhr8mA411KLzKT82tr25ASWXiyrmO%2BJOkcwk9%2Fl1q7lItEO%2Bic4URegg%2FWKW8q2lUVHMC3r%2BWdIKd0c7nq2jGJOST7gdNgqruKHwCBXk%2Bk%2BK3%2F%2FDQKm%2Bvw8Ig2yCSzb8a1u2bRGalqjVxYb1deMDUqCfiE02FnXaGaadnRrP1ZOSVDpOnFZRf7mkLDKOa1y6mgL4ttIdQ9QXE1rmdypsH78fCMmKxGBVdsu1sWCwoOmSlXTgK05Fb%2FGHmYMHKnq67MyTNZJVpgksMgurBJjcDpT1CHYF%2Bmz8iJa0FcT2i0rIX3%2FCUGVJNpIEs2P4YcURsQp3Nf8k9SRxBiIMqw2dbSN2pZIe3KX4lLT%2B6LNAgjpaCct%2FZXK845pD0iYw8crLyQY6pgEiETwmxxUXyvr7chw0uy%2FkxOiGyzRb8QZwyrh3ocu22KPYijOYM%2BfEw%2FcnTe5kvxh3ttOHJVsj2aA25dtcM90VkuQHJK%2B1s6aWuOj8Cpj7tlHjqv36pc8cpvowj9wBUNnIZy3618hD08vZ08DKxJOR8je6PiSEh1uNjGgR2h0OJqW%2FlJbA%2FNRCbjClRMcw76nF%2FvOGbx4%2BSMxaKWbgfGVq0UKozQMa&X-Amz-Signature=14f4e13a8fcd7215471e599d12e85d2bf6698cc6420d4654bfdfbad723b889ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

