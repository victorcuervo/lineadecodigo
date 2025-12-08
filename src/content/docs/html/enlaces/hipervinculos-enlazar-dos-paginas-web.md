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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMWQG2K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFp0Yi8ajv8YFfWKEYmdjJxfI5M3ohGLWwf9N2RJiy5pAiEAzj4tLOVFj18zt1qigIocxBkij%2BS8BSa7W9IQLBx%2Fj9MqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFM0Wp%2FgkrnkJ5DySrcA2YhCGFmsCnJatoGR1wPfj9Bm3oMOBilAP0mAkqTZwWdJMZKcdJwcixSiz2pakiggn0BT7R6IMHwD6aXjPnWJXvr40knOsCFij8WTug75MUo3EmZiSgSpMmFfh0m83FP7h1fsW5roqThUdZWbtNIlqp4TM%2FiTZGpkUeeh5j8RtVz7bohN0nGa2Hk1kLxglJBYoE1RBEfLjxjGiEX3jUT1HBiHacXqWIM%2FoA3qcDQqv1UmQKtMWxCGlqWcvQSEaycnPUciW1ulTpR1NOFgP5FF%2BSB2oZ8D1juhBC2prKZLUoAa47Qr2FzpRFtAzZYX4BknWyPCHUlWkJdvU1ehwMI3pJ%2BkTHc8%2FdMZAq%2BNUzsdHyB7aHHnv5PoIzPoCKAoCQyyHmlonVEr1IiSyZfSwWNHelsKDcBmM%2Bmh06zymLrIiAzaLVqyrZe3NiN8n30bswLLgEngPVFLurNxlWmEsBfFjjTg1iwVRJ5nsgb0zUtSRQOcLsyut49oV%2Bce%2Fl5luGhqH3H9Bmpn0ywMKN23LaWtNeSDk1TtEKIISbQVKirBhTPNNXQpk2HNhZRlLu5DRdKuidAyFsZfGJHpvs4LQ6%2BXc39aHepvHScYNh6Kd8qm3kOP%2B2inaoTAvvML18YMLy02ckGOqUBSnEzcYI8fkXosoeTHkRdK1JslBE2jBxQM1fhI1NRWoK85%2F%2FJ1Z03reiACyNDMUE9EqWW6ba28UdZZ1hE0TiHV25LaMcrAGYDM%2FRtQfnbXyphyHMOclj4jl5wqFUwQiA8z%2BZQqWH7KU%2FmTJ1FJ%2Fa5hzSczLuJmYi9Yafc9UpACkrJVqtGfywnXVfierkZlOEWiEym8K80%2FQ%2FhBPZyDqEXkfa2cpMx&X-Amz-Signature=55042d776d5147a31f87c09b3dc293e3f42dcdcb826b729d9830f04237893ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

