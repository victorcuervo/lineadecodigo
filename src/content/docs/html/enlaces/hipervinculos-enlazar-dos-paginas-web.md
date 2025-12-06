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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EN6ACR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqhxtnhuILr4ZlLVujEFNdNOnBZmFCj7aC4Yh0iF80DgIhAOPFcMRC9y8YbmsZFRuNweLtGfyko7Ka%2BtvdZtf0W3clKv8DCGgQABoMNjM3NDIzMTgzODA1IgxAtXop6Iwgq6Gw%2Fewq3AM0%2BakryRx8WQadifekBrUvKB9RigqC1i2K%2BtSfCWM97zl1MouBU0Cc4m5drKbrOZ9ujDtvuQ3FeIDh0l6M9WBgrMNgz1qCPM8e6AMuCKCukvRVoTAF72y0U6vGDbQ%2BsR8w8%2FEkB%2FD7f75zdcarIsuog4mJoYlUzcNIZcYOvehm3FAP1m%2Bs2cQEMlkvuL4TTs31ws3sqyYbasmlihQY04LcC8fA3cUe%2B8%2FpWkixYQNORXMT2lRjt0niVaei7EemosT0VJ4UpJxkw3qD6x5kFgp0mpVgoGTHB4e8Sttw4mvnf6E18HXxIoxussbFU6HXW7G7kQEx70D8jJQfGRQLCQDhJD5pkvauR%2BgJIUTjVV9VmAtmF48fWKSGF01J6oM%2F5pXjqFeISAJzBUF5iZSN%2FIV7qqb0oWFyB3ZhRF7NLzBtwKji3PPwsAkaEtCN%2BAxSBkkaXd3XTd%2B%2BZKpQVd9EumeK6jxU%2FMaUIYhSzHAkSZt6MBMF5JKtMaklm4dWcf%2Bi5%2FKRPh2GwVYWSpfYEcWwKgjdL9NWwWrxH%2FBUKSakVCyybE763LjS%2B%2BLLVqVoiehlRh%2BpUgDAYVNtfICEHq4EbvWI0OBeaceeVO9GXwSX9SkVcXYvdIYGXu1c8Zn57DCHxs3JBjqkARJtbg%2BKXlWpFz2NrjLXMxnTXXyXEvKb%2F4f7zzVKUnylyJS%2F7010kGiWPuKpBfDck4hKIJgZPn9bEW8tVLvDCWag5W8cAI5MXr5fY2BjWBhII%2Fnvsmd0e%2BRr7g3dPYhMIzMP5n5KVKU16o1gERPXpD8E38ACQhCsKeN%2Bg5RLBmQXlAosFX6CxbKYK%2FIojUOfR8vaEv2BktfOJ0QiZmJtH6%2Fw44A7&X-Amz-Signature=2c0129306715b45b3612837873a44ec6134073e8611912cb6b3c834da30d8b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

