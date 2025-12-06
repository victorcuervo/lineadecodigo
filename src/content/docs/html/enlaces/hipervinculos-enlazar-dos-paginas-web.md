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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USUFUGVL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT9l9AHXRAUa3DqFWt7Oc0hgy57AAB1E%2FY%2FgBDlim4gAIhAJq0Zn1qxvpn0CWu7pi6oqHfFVuLws2aJxnF%2FOQrYNDkKv8DCG0QABoMNjM3NDIzMTgzODA1IgxfFTySdCZ8zShcMUUq3AO%2BPfdtH79js395gBYwlsAq1f%2BwaKM8uQSCUd0wnVT5AJfdwWAERqndFEEDk%2BBGLJMSOUK1VLNy%2FzDUXubHpU%2B60TY0ekGs%2FKj7XsCstxd3XaQ6rpEA4KH2cCSjFch6yG%2Bqo8MUUdb9CS0Is90emi6DT2IKdM2b0gr0UKh7P4hR%2BINKXQ0IBK8tVSiglvTiAHS4Or5Wex3LEVAYHjm4eDM8KL%2BDoqc8xwadaEghhw9ibX4HBLi2%2BwwlhEd75AGCGwco4QEB44HUzH5%2BJlCQLsWCCAWQugHC4uHyudhwQn2lLrBbtlxS9DaYRVrqbJ1MqX6d5O3b3MFItLFIIRDSpqOzqEXUupjYxftr5zbfhqOtarIPo2ho3cOSimqJVN%2BXlNiZ3y4H0CsYT4YqD%2F8CPuYlxQCVppQ4t7NDV4m9VBeGIsbiQ1krO7PZIBYuA1UdSxdv%2BIiqcJxEBAolxUzuEkzEZpdP31%2Bq%2FTCGnA4%2B16%2BNTxsO8MG6Kd53p%2Bs5UN%2B2gi7nj%2BKdHR%2BTIvU6B1yzNgKV62UAnQ05AoiTNBFR6eOmaecmPxUSXlIou%2FeGJECBfnpvnu5Zkif2Ds0bfqmCVnbhN%2F%2B6ZEevWiWf%2FJlTSrFrov9DINtuiRgQA2bqvTDo3c7JBjqkAUqRmwrWWvOSPeBRXKqz5vgo8idbr9dtz6g72EGqdeNGVKOoE7PllzOrpT%2F1hdwGcPIPJ7VbeLU6jZh%2BOg5UdvUeAIvEryLq15RCC3Zva%2F9uPJjooLzeqKg5C5%2FhLtqhNUfQ4KGcByPVaeHqe3k3ORX0rgo2rCT0zOblWlrVzExGlhJTJyjNSlJvg2f1rzyOz9rQVz5%2BH0nVbUMtIMKmP64041qK&X-Amz-Signature=39d235bdf611a4e15b410d77d6fe32401a107d55aac148f564a9e0af82361be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

