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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRYJQL2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYU5zlmLbcZ94vlGfx1c3Ut6Nh1n9wAXjC28IyaqYNzAiEArtvcuUzM4vVRA1K2eiZlIJMRSVnAonysCmmxe%2FN%2F3VYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0%2BV4okPz%2BLaR4ZaircA9pN4Z1eAX%2FX4adl3h9qiR%2F0h7ykz0DDLYx57PZWE8uru%2FvhyDn7CE7QdicSqhG%2Fy5O5%2BmnrqB1QO4mP1Sd8f3V5T0%2Fy6Fv3ZBKeHxAAiR8n%2FPbTcOgIInKdxsl4xfPojqy6rNotWSPRGnkvly4BciiYQ7u7mGotrQWaOXnAwd0fomvaTvCgcFNpPVGBPKQy%2B1TYHvxhNl06ZlsYXX3%2B2JcJRvziTTvizolYJnw9BRKkKj04CShHocSl%2BPIAjeBkCNfDzQCOAQnq73Gso3KWHJu0IGXMnaCMxc5A2A2B95ocI6tkV7FuWpQb8xN%2BOXxzIK3qnU%2Bvdl8x2AsCjKKDT35Dko%2BrVXEXXsTL3r3el%2FJpxP3RDIfTAfZ7s7Ces8uSogly7nDqBBlBy8A367lNjI9zX3RFhYPgwOmoWVuFBKdCKiu3Nalwenwh26%2B1%2FfdwIl%2FWBJeYwNVDFRsXSDBj5NZg7P%2FL0qiyNl0x2Q2SQN3yQfm47NUW6Gem51UzF5P08zAbRAM5pF90xiIyi2zjsi6xhr7XlGLf9aEVEIc%2F4%2FJYOK1ehnXRdbgtxHdjjI4%2FJRWwNcHr0oM2qxZ22Tpel29syq7RQooK92nYISyGgqPcnolkH6AA9fLRyMq2MKua1ckGOqUB5F79LgNumaetpfoUd%2BeHwkO5hOhYSKWmlywG%2BB7FVkEp%2FolvNak2BsW%2F4NO3hZvXES3ubQex%2FW5d08J2%2BxE3ImFTaGkvOXFTq9aomZYCWlT8PNHHuX%2B2iJ3Le%2FX1riS5X15mD4vxGXzf0ESPDmMP4jqozfWkwJAdIAmUEarESkxeuOuAllYk2Z9JxWl36%2FKFBl8BCqXjHW9cEG5J6yR5nnjVrcck&X-Amz-Signature=511a07d89089c6388990571ab9ea083bd411ff410b3f21ab8f8f9b21e2396e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

