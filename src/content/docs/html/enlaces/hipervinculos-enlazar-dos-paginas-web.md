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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YJUA7O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHee48H3SWXAdvlSphZs92XlpH12QeEHdKnQRH%2F%2FQ5yAiEAjxCHKaUd9BfBU0uNVfDtB2fZ9MPBgYyGvCgbx%2BvJogQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7lkE%2B0V1aAWplRaircA5QiJctaiXGhs5DdQQAVxK53spm6aQIAiN7%2BSHFq5kKoL92tP8C0I0rdZ5iE8ngOmfoahuNS09QTgiVoRSM5Rnh4z8oeKTASNX4YBGxerYhLM5tkC986I5n9Hv6skmUP5sKUyJFNb6oFxWqbL78mI6wp2pX77JuEZihsoxgbsbLkbVLKcBgl53pFmFuhTS7p%2FIb8t3YicMD0OPFGexSAJqZipIQ%2BrxeOy9UQOOyIWiLNpzqdrJft8M12ZZCFYxQHAWteLmOq8eHbMmEXVso4ETTNjexjWP7nXlqq39Nh32RKJPdOi3eP7rw1yPl%2B1eKPsW4HGqJUkn4rFHUSoGJKLCwFc5oE3ztZRPMrNPxEdKEdUy%2BN6m8NPX7WeWXVQ3a9Vks9uQDvxZavLXe%2FrRJtvWeupjVMzJf8RxtU7VhIKif%2Bs2ROwiF6cz0qWtNLWWsQdTIdlndej2StCBFnFztj2i3lC3WRXyDGDyQ5nPp0BNDdvZUPWeVs%2FCmA4KyfXVRHLTgoyo%2FxpksNtw0KzP8z5lR9O%2B0Pd9m97YzqOMYXbh72tLFnv%2BIKjJXKwUmdAvh%2BkMRsW6f0Z9ydfewCffN4OzgFxK%2BMAhnuKs5WAg8HBgvHG17JZqCbXQAqmSrQMMfe4ckGOqUBXwzD0axxr1t%2Fohk2NM8mGJZSwbqVihyw%2FfIaRt5wtaD3KsND3PdEFPrvQxEV5L%2B8JnmDRfHyZvLNciyvTUAzzeO5gLv9bWOq3le0%2Bc6kAjQag1s47HKM3LqyHidoaq4QxKlh7q2mJckqODxtSiWm4vjzBtBasMd2Bb%2F2JPllv9JhWZrObMcl7lWsX5RGoUxOs7XJKdEEUbTwGrUiYfW6IUASXWsz&X-Amz-Signature=2b62a8dd4622ce957c706ed0c63f8fc182b21f0815d54ec39f3ba0b2930d4738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

