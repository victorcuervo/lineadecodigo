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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD3AVKNA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkTHZZaHeS0ZGMylo%2BdxxL6ja9cEQsR3jJiMDBb808OAiACSbX9VjcWamduhC69ZyXrb78igfe3uk5Gc%2FlqhdQ1WSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6Enb0lul3cMIb%2BiKtwDXQEwUMrG6AA56Jo38IuCPuu5TgevYOqvRo1HM3PKYyLrzHut08LQH4sokhNifLuPa3xNF1rKiny56S7ZJlYEUdumk2f9dWxhZ%2BR80u7ndtREM3CGuJeTg8nhngsMgPfRRtJ6glD%2BvdHEcQxsS2Xs8%2BPWxibRONKPwkjPc5Ye3IAHiW7uMJ7uDwvRQuu4%2BG%2F5YkqnWBeIlUDOqe29zFgCgxuC05%2FzbxFVFuVq2GeaFZCfUo9QWkMgcIwpGhlqr0QjLTNkqeW4Gi7hMORaljieJQRM78saG0PR1mSAYJK%2B0WmVxCi%2FbYMJAOB%2BQ0IvE17CUWcX6ogT8gyx5dT%2BD9Anab0BCRUHridgy4ZC7EworjZyiYmgP4cqQ%2By0UPyA3Zyxl5XSr%2BJp1yeY1QAJKvA801GAEvuIQRZntFmmSM2p%2FojmMCy%2BtiLAWTazk9ABs%2FRWh4Uj6wzg0mzYNdJVUJXlM7mnhoTW0JHOg1689dBhXYgKdk%2FL4Exzwf5NhV5ANJ9JGjIkNWMZvqLWz9u0bRNIShA4ObHWiyPyVfJNj96DlehQADMtPUYiqqV3TVJF6hTmgkNUAW1RqR2vIf7Z1dOJCkG41g8P%2FEk9jadrksHK4G0ZChJ7%2BoVa6ZFyIccwtdzcyQY6pgGYSbhiltfvUh%2BQuA2%2FOggJcZEH9qetd%2F4U7m1iaj0SYYd4hnzeAGSKXtahNjEQesNAMExD1SUQqZXrm6bNp6qmqXikQlTYikAx46d5u%2BpJOjWfMlvn19Rai49uLg4%2BpntxDwdH6Ia%2FEscgvAipcTLqDHa2KfKxv%2BY6HG26V8tOxQff12oWQZwvTzAqxzjmxQZJalJ32HFtsCMYVWDh125zuc5Nddes&X-Amz-Signature=de2d6035f47b192aff737c8400d5c80527d835d97449fd0f2a338bb6013bda0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

