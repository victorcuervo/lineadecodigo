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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJW45DQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSERfsPjLWn09nXUWTdz%2FSSd7IIoTkjsXWLq2QGptRgQIgdSASE0K7lRfPTCAJYzFk3Kcnv0rnLeFJ1U0WjxCKvHkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHXA4y88ZFYLBtxTzyrcA6SYlrU97DM9MHk87aSNuxCTBdLKN0kxRnU5H209SuioaFYBDNFzSBC5ZaW0HO6dukeW3esO749EMCkUe4O4SDKzngUIuoj3NKD7DCDc2HvuPcYWAlNs5qTii5KvDe%2FjokhuodPLoqYqecukHFETOp%2FPEzH%2FA38%2BZBYOnCChSACcqtzksUIH2bXso69dSnkkIUre%2BjfeTmb%2BDT9TYwCtS8ucaf1%2BXg82bzCPmuZ%2BikJnN63sVSi1vTO0VSAJij75d9uCx0w3llqBU2D9QdnFuZXN8WTBjOBl8JQ7StKfHASr7Fzq1WtfJVIjpI0%2FVjqJnrndviuFbJ0IXp66t2wNKlYGI6NWBHhvX2noCgKhCdCPptKVwy%2FcTMz3uJCnfpMd6lvkV8dGXbqEWxdICZkgkOAkXUJVsAEFmDyzYFA5QL%2BdppcRCB6hxRJ7%2BAqlyqBkUVmoa2jWuvmul1Db9N4Z72cTkGbmhY2XyHdD%2B7RFCJO%2B1nCifkBIAiKWG%2BIPHUOqZr1E%2Bp%2BJka3Qd5bphZskXXGd7xmOD1zbl0duhNoeyRFdEXEQ%2FDS1yUbOu5s5o8KkhX1rzndG%2B6gkSy%2FT7MUM3yRVQuzLUGggI7NzgE1hXU3f5w9omvw69rqVNHBGMLKsyckGOqUBOUxoX3dfV8%2BZhXWfU5eoZ5WABec4Joc0AssDKru7hbYldS1Yn%2BX4WEiehO79SDtg8tJ1cbHNkBJHkr%2BBI2QaYsWCMyOVTj1f8LX1qBKkWz0bSk7ouW2xV%2BN38fmqgHGIQ3%2Fkk5kZK2bhlZWhlFwQQdBXHjgKFN%2FA9BaV4T7BhyoHvidDzcFqmOZUOtnbljsV2DO9kyom1Qvh%2FQLbiIwH%2BYLzAaTN&X-Amz-Signature=0ff58b3be09ff118e5e9162729da5c39512ad700fe9a8485cdf122b36df32814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

