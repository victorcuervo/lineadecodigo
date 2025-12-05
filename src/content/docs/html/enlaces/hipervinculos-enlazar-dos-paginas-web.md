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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656G4DUAX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv8YYT4OY3%2BXVwOm2ZVc8SqoYDid77Mv7MnlWf81kl%2BwIgAWMmUri1Pt808NXaAGUx9ARiSSeMZDBd2GJYs1mOemUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMozCnQShyKOFMTrQircA94hy3meHIq633LANKgm74KitTs2j2%2B0nHB9RdREExbhaNYxtj5%2BTkLFlaYtLfUoBzC%2FmCFysPIx7jRK6LtjSacNW%2BJSVdM4WLCGuhfJvuEAie1Dmi4Pb7rAeP7URXz97Ku66jrPPx8y8M0%2FtUaPKh1bNNXSTcAyIZrXmrGsPveT%2F8WDa4ROBQ69H%2BbPVKNSKDC4rybIq3ZDkrbnsbOpDvRZWza3TKcFmHBNx068nWCVxpw8kuNmQcaepOmNeIHhCVQBbhNqqW4EsdWsDdgZZGmp253wEum5QMr7zSzwGLEc6YMo5xJjydozucOj9kVDdbYO%2B8o7wxnVtLGfAgLEN82MWgIckWrc8BZ9MPpJ%2B4hXo%2BFy0N6CB970IXD6IVi3LfLHAPX5UgeXEpotOGuNFA7UAb7N6%2BuvYWY2wI5hLvqppTTmOL%2F5NifNYL8rso%2Bg4OjRJLa7bLjRjlwXI%2FW9bxxRW%2F%2BH40s3n8HNwXgisLYFJ3qGSk2EzjqkeCvkE896voDwMBR915slSZkyDnDjq2YAg8AN%2FsXPg7ThMlIAwLh4Z7xd5Y2PVA1V750FuiE%2ByFx8KorM5lVcXGKzvuZYRyGnUhUswdgJzDo%2FL%2FmrEfnZ8gknWukwrgzFb34%2FML3vy8kGOqUBnvc10xDgIatAoll6vbgQp5i1CziDzOdfvgVc3hIXt3VourzCcJMfVFAkKoLCKXoQF3wjV%2BLXzu%2BeiLDL%2Bu1EAnNWXys68%2FjKudslBvl1O2mDFswECLyJBwiysJuaEbD9Fqg2QT7ILsHM9pTExEUUYOnpou3WcRZuZGVOuyWHOcZE0Qu4B6WMQd1Vkr93rjE3cMixp4SolBGW6oL8bIMfZIrQHOjf&X-Amz-Signature=5c07961e1a66b4f4aa9705a0e0975438f758297a803061ca26693ed6ff2dd9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

