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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBJFFV3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwxAse2EACu9jtyoM5HfZC4FHNZcSkTbV%2BUx4nAFBZaAiAB6OC42kW5lmCWDZ3w%2FZ%2BkNnaUVBAA8nVQBBGoeL4BciqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPRHTwy5bMX5pnaKQKtwDxo%2FdaCX1341p3xtd99lTOMHg7x7yY98iXJeT%2BI%2BJJrxzLmyRc6bJFofmjDxz8QW4Opd9IviFjSvOSO2TEMD2NjjOhWhvewFCpgAgptfdo%2BzBCPDs2RE7KQVym5EmmL7IgtbxuTlir9Ugq4UatqJzkbuK%2FjTpqm3eWZiVPnyM%2BI2rcJqxazXkSfOlBerVuMiEWR%2FG7QPonzPvUS9MgO%2FQYq046%2F1FuNLkML2AseSSRJHdai4kwReq2iTY%2FT4Ssgc780bTBfM75Xa1WSxh%2BuAOFsFf7ZjoYEmCR2rhnQZi1FkD9Okop3j1T2F%2BEsYIzeLmqcua2%2FuwXHeUXbVAcKkBTcv%2BaTDkL81vYZc4Y2ugwl4uYTIG6hzuDDk5dFCzDb0zi21YeeVFL9doH8rfdr0Ot2lenPv7muamyJpFQ9NxcjtwkKg9%2Blte%2FksCVqASaznvyKs5NhdF9uB2J3%2FSYeZ61hXdBr8xyQRD%2FLYcaK0SY3dWfEWPw1hd836FBaUP%2FM4Sb3pElDP9kgrwRiw9BbjjS%2BJ12bfqM1cUNBtzQ8%2FjbrEzIcz03zl109dpernHV2m7MbHg9%2BD0oUGNWYfQqo54Y%2FN5HBoFHTQ8LF%2Fjpr97Xev7tZ2OFoM6oW9sp9owwpnVyQY6pgGtRD6SkU9R0YVNF5CW6Qu9VG%2BW3t2kLs%2B%2Btjalmjt5JTEfooqZc5X0J%2Bxz2ZXrVZOJCCBx0pOcXPRlemFXBBDNw7yKzmXLqh%2BKlGtfn8R9FMol1UOae9URFq0C3oR%2F2YKXDDMalntbB5C3Qp0YhKGTs7O%2B64wbdGkFEcVU%2BT8IwZoh7AL4ZYQjaIKfY76CW0cOB0FPQWHsG1xU9XHFDjF%2BHgM99cM3&X-Amz-Signature=7a97d98a443304281d81077487b47616434d7c1088567bd4a13ad5766de53b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

