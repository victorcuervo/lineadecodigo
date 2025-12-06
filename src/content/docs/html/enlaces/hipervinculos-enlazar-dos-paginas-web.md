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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERDBRQ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4UO3MICVm0hJX0tEtM%2B%2BDo7kRAHmjnWpdkRR6m%2BwJAiEA4F1LK7%2B1gZh9Krx%2B21JXoTR4lwh%2F9EjZF3xtpZQt8dEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJD%2BSC9H8pvCB6RKvSrcAylL5HdbJILHs5nHNwyMwNqeTIimkZIuOB0PgRLLFRqBy6vniGU1tZ7gMXfebTXBq7Hxh0kIfM%2FdnRezAIYZ8b78tOXdpblkW2lYbZcr1vSmjLQBuEfp%2FIuZxfMOaG86LFoKdnKK7HFBgLO6y2JyxRAdvfl6EWhhvJI%2BH3a5k5M%2FCwOswkl1K3pvd1uliZFobZhXtsrn824Hesi7qx2DVPQefOle5aXqie%2F137WxDaKQ%2BAQAP%2BS1HH%2B7wtEo9GcZ0m4mZYKwnJNyWYnbYBhZ248dsJxAoaf8uq7%2BCKlnZHGmGmQPsvQNzufthlbg8HhHkXd%2FjPTNEhRucn59RCjQuRCkrmVpwreDWpSp9DC39oV%2BM3pSi8euPAgjCKKlK9XVxPwwix4ZF7uSylHa0K7p2ue9nxhW%2BZQ96l5%2F3oRN7j6VSPA28wulJRmibMee6N%2F4CLMHztpr5pYn%2FoCZfeNJJovJtudrR9Z403%2Bg0raKaq%2FZ0VLf42SflthdKqlYnln3v8TsRwLwQr209RfXn8bsTVrIdtrKbNEf9nyt1QV%2FzFdxHbC0737z4PsSVFdswdvZWbF9LZgg%2F3OpBVkUmnprcnUBXhP%2FgvgKMyL3ONwi7ZBhlegRG6D8CSTIfCCwMOTJ0ckGOqUBEguU1wrrRRsmTTB1sh12B7K2RnibZx7IGu79PSg781ds%2FmihewtVZfB1tk1wLHo85ab7%2BZRo3X7qEH0nli0ptdEggTNSVflg2ewjdcK9DZ2%2FLFk%2FkcMGdAgFnWchfJjtY0XABxfsB5w8CkbVaLTCS%2BwGmtZJ%2Flx8xQq%2FxOKNPJ5bAu6M38m7BJA90UyQK4LqEOYhNYC7LfzbERIZ5k79%2FVqySQBD&X-Amz-Signature=e5902f5be6da73ccb6c0dff27caf965e54cbf5ba3cbb0d6f73565d7c2fca10cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

