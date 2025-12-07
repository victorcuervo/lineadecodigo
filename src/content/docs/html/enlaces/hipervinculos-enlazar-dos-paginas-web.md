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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLRY2QX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpBMgE3CkTLspHpP%2FnaFH9dfjxJ1Z7ZnCs1pTwhya8mAiEAyXaWV0yeFvx9FsSu%2FipJwxvk7jLF9%2BRU9UJLZhJqGykqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPA%2BC9oASVMaLtFOCrcA0JKMcpjy6jRpVAm%2FyqCdgW3IdLE%2Fzc3u5p%2BvMTtpdysXpfmE92GWT1Vh%2BAYan1muP%2Brw%2FoRsFiIa41Di4wiv%2FwBxS175ifXkSK5hDzjd5I6ZDfexGUy2XIJgVXJQWghV%2BQ6y%2FpJlTNQma5SVLxhI3xw5J%2Fn9D75%2B8HqievtOZ9wtsJngB0aun2u0EXwlsW7gmNahoXyQtmkgz2BnKQjrijXP%2FsFinsIhUiFWJbQEJCtE6HPdOBy4sR0sIxsiwpDPRNz46iXGX6Q3e8hfq4jS2ubEnE%2B%2BmILoCa5wL3uX6L%2FCrG5GHtYORJP8mG12xA%2FYNnn15ZVDvgrKloO8MipAwUBEm9ac7PUE7fyv0qVE%2BRsSOvSi0ZEdVoEvQXRLIOwtKjhkfc%2Bmnjgcdj%2FI%2BQINjcZn7JpWXT0DSI62XKduv%2BbKKGDStumnjoyTxdjsYoK2YBfKqoOtQN4qHCSBHNLZzvUql8MeMu8Zn0Py5mvjsEHAniplUo9%2BZK5Gr92pvHwALz6vZNBDw3U5UW2QqhDYHfBwcgnUHrGdfNur0PaNlCxBdYx58%2Fp6xMH8vSu2PUGxkc%2BhNdrM533%2FeiOeO4C5VuXz1BeICyIiweg6fVIfpHlvxmBoQxdDiE3k4aTMLO51skGOqUBhy6ohjlIhWgznk296etMxTTvrIE2qYrFdPn5sJ425xihI3Y2wq3pDuDE6k5PY4AJ2nQTbHAcv67Soxy7D7%2B6VS3YiiyTlZ74kjXDn3AV52k5Mwokgug4IZ5ct%2FmvISOQ1Eoxc9bMXwIlILleby4uTOJ25aLrLm%2FmxC%2B7H5QjKXf%2FXndmGL%2BEHSoKVE32OBLs1fARWCaz6jgNtkgdVS6GDIn7u1KI&X-Amz-Signature=58ec64d796f3406fcf639816ca2f70ec85cf78c9bd73823c29514e0c756c3aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

