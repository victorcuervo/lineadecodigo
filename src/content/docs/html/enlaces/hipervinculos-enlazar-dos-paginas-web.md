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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZDTINZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9ns0HITyvkqi4ZqQvGAOHncU9AnNMkM71hoDaaRVaAIhALiWneciiAt52brrgpvw8e7Y20el6lZdj4xVlJaDQCpnKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXPfCw%2BiOb%2FtU4%2F4Iq3AOUeP%2FXkrWzEbTUBh6Zl7uRhma2UOTX1ZwEaRbwjBh2bOa6KiSq5ecC9X%2B5M1pEzi5x2mkA8XOkjDJ2%2Fs1AQIthvKlfXDYj%2FRpK%2BEOqWxjb45I80ItjAdoGUw0wlpLgPBlYEQ3mR%2Ft8G9hE%2B63J376Vsh9XIfzGjCuCbcnN%2FQpheI11ZI%2BXBAtHPV%2BIyfxTpArwM%2BTmeEGrZgOqu8WW1MNTWAtxbOXJZAwHNxEOFgb1yKfrCyuMIJN%2ButjfxqcwscCxYq7J%2BG8b293mXG2b7EfdyKtHxq33hszAt6AlJWraPBTNHnw6cHWIEbdy9YCkLr43DTixlqjURsbGV7LsuNWLIa81HezVKVFybEO1r7GwwLpOlGftcX11TrTwLHnv0c%2FQSiXjLl%2FqUftn0OaptBw4BeqReZyxDEo5%2BAvmnFuyPozcD%2BYI3fTqsJfn7dVlEoBFty6BUSI3NzP2UIqcZPbDTiLAcy%2FOV15P%2BztsJPyZ%2BPN77pp6XVpg%2BdMI1xzGMpNcHFClhA7W1blrnfObm0QiXTA2%2F7%2Fmxb5Ibfo4jJsqSydXfazU4LKnm7bSNQCD9%2BaDZRAjUt3ZqGQ5nWKhgvZRnGx0MPwhoQC%2BgPA65uFPg5IF72RBHE7PvPzYhDD17dnJBjqkAWQmqF1wUCBcOCR4NKMgODYk%2Bh%2F8Kp2zYHtOOCXmXXaUlZt72O7zsAoWhbhuX2jZ12G%2FMcK2SNEyjzmpx2JMKbt9Qrt6hxlihbkuCAsEuXwI1%2FHegFvzMd2tKXY7ShYoPNetr%2BwBeUoD0mi1aIWFoaZLSFe39xoF8gZX4p7E7sEWmnOizJGbQIfRTGktD1u2NsRP9nBGxFxwQLWPmv9A3GXosxUW&X-Amz-Signature=eede9359c2cb279c467c3d1c4c24e71ef089225d56a63e830d606100884bcc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

