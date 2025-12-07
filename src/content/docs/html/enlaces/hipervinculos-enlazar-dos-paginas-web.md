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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7QFDJP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOCGfmNI33HgbuGtwongMuEY87zylOaNDv%2FDMpfNSUqgIhAJMFJLBzffeCPciG%2FDlK0xKkFQeTnvShezqOjMZmxic6KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIysPboAufsaP0yXwq3AMOqejjkmwx9IKTlEmTpSAhgzw7VDPE%2BirzBDF5n9cjyTnouWpXjMSYXlT782FiVPBvHtyT2jB6QoStmDbGGdi8EorYtOc3VsW35qbg%2FZ%2F3l%2FkFd2is9WQeDN2DkzhsVx1apQssIURy7KRWX1XTGTtilfpmtMECE6Qkizv2diffJ3U8OWbenUXBPQDbLRK54wMeBj3FGVgxIXvBtwZpgbavURpG%2FL1sQqRlD%2FCTfppN6fKUmLKgkAbkXhrMF61rdDs%2FGBHdTfFKl9OS0vV0d9XBaVcnI153%2BrHerCLGbGnS1bvUji4MM5yHyaf%2BAKoX9KJjDEuoasWNwwQUwoT8Cp%2BnTPmO5qT4Ngw88HDXB02vWfaLfHk52DSYfHOzYrNwh80VsukxoOfs2d1BouS1ievmNeuJYmYcZZRKbUzDEGzVG%2BTIAxnkE59LkfQChTKWlOmGqBduCeMctNxDGVPDauA7t8R2Hy9gLvssRFqtrGFurgGuGNg0b9HkGjVbsr5bYFa70rLy5TUpTEbUc%2BLWEjfVE%2FhzH4xprKybbeniMeVS7pueezvB6yuonxN1BAsJRAFYp57S%2F06KYhjTToYrCLVfr5Xfsh5wUrZ7Ohd556SrFtx%2FdUC07mMo9qds2zCModTJBjqkAer4jNqCzUlelpPjxUM77nknPcGuUfvf%2Bie%2FkVIczs4Cnhu4khv5oidgCrbsMy8cQUVDvHesrP2SVoJ7%2Famm0eqs0qtPKB9Wl6mEDKwABmjOgJl4SK9t6Xm8Nw0vh3sCwjx3BaGeAJj2foK2y7192AwtyKrlXg8h%2FfWOK6NCyRUxMmwemzVaEJ5VSBzkeCcf4IDUk755RB4dEWTVubl1IszAli9n&X-Amz-Signature=69849e5313a9d7adb365f0f62914ff34c09267d0f4017a8248b8089cb05ef424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

