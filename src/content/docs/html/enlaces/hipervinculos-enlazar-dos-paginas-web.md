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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666J5Q5H4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT7zjx9MOO1sy5TMrscjKvGHHiq%2Bf5iXoPEVrlWA5A5AIhAL5o6IH8J3injQtqfpeiRgs%2BKoEwvZaGSEpnpjW6%2FphQKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmUgnOYoo4gMEVNJoq3AM9KddtoE96XzLEwc8Pg90CZ9wzLE0JOUSvablfmZusXY38XZxzHejkt5cNZ7RWeiaSHrXeDEAZyTFBN0Ms%2Bo31wr5CI6Eo%2BQzwiYvDq36q0%2B6fi9quF2W94fdSYM29xpGfdF%2BdrGo3Zmi2q7VlASbsDWVq1YYZ5MTz8CWWrw%2BTJp360YV4cRu3g8sUIZB1XWPQ%2BBnQL7sLE4KqMRoQO4QtRvZ5FEiP6NVY23sVommiH%2BISuweFlbNvnUAzsVsrNXwzuxIzxRm6KVMQ%2BVgmdZFj5c7D8pkI3a5qcxe1hmPRQyygdBX8lxZwWrOqkeZ3nv6%2FUNcYO2YOhV3%2Bpev85n5dn3xSS6YeouR56TT%2FRUmD%2FPulAxMQiL%2FTPs%2FkkDI6yPs%2BPH1WBYJnN0oxdOb3fseF7%2Bkin7iDNBIUmteRIWWzSCO37pKpmMsLG9xQ%2BQHTCWrvtvv54xsxXLy3tKLmz0TAPwCbCh%2FrB2cntuqnn%2BTkMhrb5RezP9iym73v7ydrBwLlxPWZvZVpPXltcH6BSMtYCfkp7f%2B%2FCCxxcPOiHxEnwzuUfgkF7TGppoA2HqWciMZuvSv6F5bE2C%2FL%2B8a5n2TauSQQx%2F%2BU5Tzor5csYX3Q3kj%2FW90bc%2FLbvc%2B%2F2zCZyNfJBjqkAT3Ri6e%2BsnRZSJ8w4lQ6phLJ6uAhnV3DVa2imzoge0G4rbCChrpZMtQML2IaXNPrpp5XS5S0ZllZEcvkdyKDPemtKv3uMhiWLtPbfq8T3DSKrzNWhvFLvAUjxoERXGTAJvM46s2OvHZKL8s4Zc3u%2BDgdgsO65c5P10n8cwHoDNHYG%2FX%2BJhb3xUTFDuGwpkUxntuZxkiTcaVQpeeFL6mpMjlDDBtk&X-Amz-Signature=b06d3cc2e83636b74f1f54bf271c94b096fbd7b916a73c6c28440f4ad7907527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

