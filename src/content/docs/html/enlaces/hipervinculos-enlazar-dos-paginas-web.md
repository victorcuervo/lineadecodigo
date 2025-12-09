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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFFQ5UJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGSUufpnbVvtq4k4fNmKzfTnLPK8APcOE3tmj4owWkdAiEA%2FGz1peGT8fMRazBiSsMGmmoByAH4q422oD7LmoFnikoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvvqcfS8AmgqkxczCrcAyvwwcbEsr8sHaycoiVjTA0Zd4hzM0NeGD7GWF619OzIVabTvTviNdsXsMS040aHNuunvx5SyjcRrhInP%2FV%2FYL%2Bq7WfxQPkqya5MPw1bBL0DzJ0PqvIgnc5wl2qxmqbgRVbMvgkxxGXvl8YjcFr%2BsuVVmTry2hMeJyQfDMpyeWGe%2BNLMgDZiJi5QUGHbnukMTBqp3lwTCZDDQveTf36xNAX7kXP28LyYIuVFgYVWUP2IDFVmiApWrKr4zGt2TnFKo8llPgZNpThF6OhhUYxIgPx%2BSm9zR4s6Qxqpic7saLPiH0KInekXNKf%2B6wgExz%2BSn%2BssUFrc4RBXoQ%2B0Au7M3tfhJMjd9kISIkEJgq1kd1jwooBALBoh0kC3Gqr6zK8zUbPRi8Vka8prFMCXb%2FMtK6efLhJy50MAqtUiKvGJgqQ25Va8azjCXr1LobAg0MOks6AA4fiVJ5HBDyIPCgq2emjU0nyXCriEzUqDz76HwxqclFB7OoAWkJgXbfk%2FMjaMqCSkoSeVcq%2BlaVx2ci4g0VO1orJ544gZfbeSV4T7nEQAa%2FloR2KE8biV9c4UVIKOhv3RZQdexzmdVHJHh1IoOU323L%2Bd18aVTf%2F4T2aqP3oMudQoLrE%2FE7kZ%2FYJpMJbf4ckGOqUB2uM6WkTI5WEFu%2B8wR8dszGzGFU2gLLbRi%2F50idtIGJ9YkEBXD55EpRpunLZbZnTNWLSS0S5KzjPA0nsDj9FEzBLwL3PIu0qvHHXYvmBzooWzxObko0nI%2BPMl5mR7XcmST%2F95EfVC4JAxnZ294kJFFJRTaggdSQijLAWVYUM3hYZJZ%2BzyKAZXf6bnciclRj9RPyXUSeqPaj2XT%2FEBviNRfG1Lqt88&X-Amz-Signature=71807e496305213234a71a18935836ecdc99f119d77c2abdcdf31350b0d8c385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

