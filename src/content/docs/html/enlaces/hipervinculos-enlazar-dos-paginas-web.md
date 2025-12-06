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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQSHHK4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj6g1mji97mLG7z9EQTMpaHm52cIpmBXUHJVliH7zKeAiEAiyqCS1fwuPqdKwo8zmfLIdq5PONxrzK9hoi8e7uAnzMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDP7wPsQextYckdYr9SrcA%2FlthzeID5GpfmUmU0SFJEhAl0S3u%2BUM5tYmgHp8laL1mOW68K4wF6tcPEQPaUOVBMGCtqtMqJ9uDAIOhvJlYFWVqQB9ZB2AM0hja%2F%2BiIK%2BrkgT5uGgbLIMi2vTDBKi64jBxurhNzmv9wkvIW2Y6l8VCtyJmBjT%2FYYwnlwsdzfY8ksaQWpGeWAqud3w5PJmSwBOqMpY8ECSSPUzGKEvStHqBxKsrh%2BPr8jIMSKjchAZvAUUJddAKEpuxgfN7EKNbMB7f%2BKkXCToyMFLXCum7fGcpJauqT2P8iOza3%2FyKYirL0TrORiAl0ZnEJtPjtO82XqwI7MgNCdZHw9Ui1jzmI5N1LHPCW7vViGijVlYN%2B1%2B5%2BLMODRLwVVvs3gLyn0YtoTl5c8STSxy3eCBRJhxrZClzMhGqSUUwaxu54UXvURUTqY1xqbrwCAWcQIjmphEDEbqn%2BzHxsAQYu2khosdEY0C8AN837H2N1LlClFiLxsSFBH44V5MsYeiAQ%2FzaYB2bIkqDWOgbel7iL3JOcdCfnEEZPYgmeeyQiqP%2BjTe%2FZIWZ6h%2BwTTohFNEi7VI8vzhmrhOqkC%2FLCIJ5DH%2FQprky72EphUT%2FqD1b%2F49fKcCVyirC7OIosqIZnFx9i1boMOGez8kGOqUBIqTZBYVBH%2FZ%2FOZh%2BZtZ7JvR%2Bgh84%2FItdFf6K4Jga3JiSpylR79CJxnn%2F1fwiUD7e7QQ1yTBjwmX6NyvF1sG8ffOEJpdKJm%2FbCJXkPNyGloCIxKT8HEBVejwLouLfAJhtS15sifyZUpk0UuQx5eAwoBDAg38bIhZ5FvZu%2BqzAhP%2F4QXw3mPYCPWrj08Gnec8lmYibvQRCBdV9Z5T2olm7EDlPLIr3&X-Amz-Signature=2223ab2a71c9c517e6c5734d514680d29be006bbb8c3bd47e3e2553f12d63bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

