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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IAATG2K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtIaONl6fDqtOWL3eSrAHruJRQZLOAfv4NFog6zYtRVAiA8eZWquF1wGh5WNzg0MRzygGgFMb%2BRl7kF9FQbKSjTdiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70BO9%2BDYZSbLMKwKKtwD9Hwv7Tt5S7fURFRECBIkhoPoc%2F5UqEYaVNJ23vgYXIPOMZmEl8DEqFxh%2B08LXkb5513OA9dCGjarr1x8yA6lbOIxKlyGDVDtAywGO2oFO1Y5GkiK0HIbehZQFRD7eNkWMYAVmDTPraH6GRWoApahNJnV5l7DaCCOwkdAjR165H5IcTqGcspJ%2B70rFqO6BtqO7GJTZO7UCnl1pSqYmI%2BCBCGYYdq2ZU2RuzNQtuw9zwDB8cI8VrrXOZR5WzFNhdyVdFfcF0fQKCa%2FK%2Bns%2BqjlyZqEHV%2FpDrUuG8Ep%2BiYdgOiBxSvjNzL477gJdbxCg8p6BmOM6eEBpmfG%2FhEpGxlHSt8LVOvyK3%2Bchw09Mt4enH8jgzB5I5QUxsx066tvoCs3qRiP3VyPnnEM28n5fBJR%2BoxwdOpIpalot4d%2Bd%2F4j54eYeLstI3%2Bgz7p4ySFsA%2F2uEYox%2FoyLbAfI2sLNFHUBBJ4%2BEztW%2FiIC1RJk3yz6EKe72NxllmDIxsEI7JyFQnfpNgYAMmvQkzl1SdXyA9Wcx%2B59W2zDjshgZjsgW1YdazTWXGJdkybtdp%2F%2BE6hkUp%2FttMkqadFDfNUX%2ByJKWohlraJIRbspCb%2FuSB6rE5XO9%2BAuJ%2BJ39ZvSfNvAVl4ws8bfyQY6pgEoiwnd8I4AMQoLpdZhSVGYerOm7fpN5Ai479ENZj24WLm%2BOS%2BaY7W4jUynjEK7MZKM9euJP5NR5xlAUnxTpZYvqXQXVmLmTDBFlhfo4jnrvo3QBPZN3lik%2FG0EZEHV8NgPvSoKXIwXnGfi2VrWbG9pNJ5%2BeX5qomv2ZTBir9ksccJOBH7x3HuAJYq9vPL01Z6npl%2FtyOhGTf1Ebl5Xqd%2Bduldw%2F9f%2F&X-Amz-Signature=c4d2d605d04e010d753b60c70db4555e1e733d8bfeb15a61153c24f4671417a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

