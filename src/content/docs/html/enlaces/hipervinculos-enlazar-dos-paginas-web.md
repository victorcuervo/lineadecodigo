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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDBVVON4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcS61wb1ZEoI5S9EIGkLzq7tW0qiWPwt1vf9apQjmtgAiEA7vM0U211q3GShNpkR72GwU7djn0rxT4qQcZiYebAKGwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0TZSM7cM1A%2FX0zEircA%2BKB2lTPcIO0yPMrRDXNs12SjygqbR2%2FLCjbW8J122oN09HOTatwpafW8su7Rvbf5ak1FuJCxxDZyZYLXZZ2Seg%2FXKWUiKU8F48niz3h6126OAWMTlQLCs2cvLK6kSf0uYusFeadKpRldbVuQejqx7UjXg%2BhMjSQgbHOGyu1qSTVAqMYCndHv2%2FlOyK8wwzke29FxF1LTYVsY5V6ngr2esyloKa%2Bfl1lAx0PlKp0talcW9Xyxd%2FuIiL51GDzpFBUZizzVIQdHui9wgJSIYLR4f7UBgLSDvwTjCglMqFlosfLDHvWb06Nu%2FpR%2B2VqDHStdqfhqbKnhYofzZ%2BsrDplXfjwrEkNdfXgG2%2FrDQDawkFU2%2Bbz58JlbCN6bB4PO6WvfqQkC96ET6oQSU6SdSZF%2BMiwWdOoqZ7lbLcaSveLlNhMITZy8Z8wojbm%2FiDxBPse6%2B%2Fgqeqi1uWoR1m%2BLVHZ%2FSNkM%2B%2FppDjnz7NyQDzIXus%2FOiKLV5g46H9BMDw5S3E2fSTbpHp7nuxgyQh03%2FiHfG5pVVF23pmSjmYjQY6685xSfuwVWf6LQ5AeIXONQD2JVNgfnYO94vVm4sa78Lg0Vd3xAbMWvR95ISOIAKkrjJFEgeGv1j8Umh4MrSwFMLru2ckGOqUBbzJouY3im0qZTyQzz1fq2zCDhABTq%2Bdmdx8PN4yzRmZsYAE%2BM1GTsjd0SsQ5MOijQvWT8kwos94Ehx%2BiZvfMARZUXyU9xhEmtMlbvNcAncUlWtFrfNho0cAmnryXO0o54bB%2FASe%2BlXZBjlwNHolNpdQy7vIGdbmCGnrxMlccrPksgVr%2BFDIabS1lwo7pzawL%2Bk9E3a04v8bmSllljeAKe3wLczve&X-Amz-Signature=2a532321187e70d070ea63584e925ad87cd6c51d3e82a4ad0be3f0f27d1bd725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

