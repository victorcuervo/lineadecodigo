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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GDZ3WW4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqVZSzE%2FUrXMOZbcI9QIJVsUh%2FtrsOhBZaIYdl3I8bLAiEAunBQAFYSNk6j%2Fe9jiW9iz0FncrLXqVixZPI6xmZ1a%2FMqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONMwAnLsxBsa8p%2F3SrcA%2FsPjFxKVGvZ8qy%2BFZO4hBZS1hfGIpXNAyGy0DLiYsiuDPACQAZPbwWD9bJB34t%2BliIH6LlmR2WfoIt%2BSrtGcvg3lV8COfxwBWOZhLJ5TUxdTTBCzZ%2B7%2Bl1OZf7g9oOrlHk5sJLfkmxdPtg4t1mQGk%2BPGpi43KBXlJ5eD4DsEhN3HaU0Sq1YD8Vk3VVgW9pujc1Ad%2FuDfUMzmDEMi6Guv4oI0V9uje09mluGy1XUTHaS0DiBA%2FHcNoNTluy7%2B8a0L5ACLgeQgUweImAW1fMz3d781mS%2BbcBC604ECKg0sQCIvpVTcStsP5BU%2BCnP5De87%2B7yPaA%2B6D38%2B4Q0P4YTXbdHNwEj5RNPKzbSKA0kf%2F8Pd9AHf0FNUYb%2BclQ6x1jw3V%2F3ee0yu2aHo2VmhOFs0BHH%2FQ7rkE%2F%2BrNZu2LlXH16hEdjY6ELm%2B2duXD8YMeiNvPwfKjl5DyvziPz09JZAvu69mfI9qnUNi3NGvgAs0VK%2FegZAhoXeLlvzGEgGurS5MwtbS6MHjmEbLzjXBT7HvIdAcZLMvOnyzg1WBhuCCZeSMIhLM4qzQbO%2FRkSBbAu5XUis46w2mjSqcJggrYoplXAJuk1BHqisnYo7rNlBfpwSaY5mTmw6UGipp1zTMJOA3ckGOqUBJiR7ayZwOV2XMvaN0M%2Bjbth8vlxICC5gLZ1ZO1kyaqYeSPFZql%2BN81uaRR5EUbbaDs0pFGDm2ZJMw0rFRoPeq%2BJ2UEDS5yfCX4XiJcJY6L2BlQHmx2PRuvOn9W0R01liBEVKRqK9Hb1WsjIhK%2FpAyYdR%2Fsib7%2ByFcjo8c35ZcNwknkkLKqf3PQJr%2FeGq%2FgOeC8Zwg%2FWfw%2F9vaNW76pXwZi%2FDNsjw&X-Amz-Signature=48558c2da475f14881d38e33ea27d133d8d259816eb90cf4803851d074f3d6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

