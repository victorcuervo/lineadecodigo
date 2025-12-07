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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS3KJ4ZH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZHKwcjDw8LONoiI6aK3DdnLoeT5k9HwwAdJ7D3gwZPgIhAJ8B16TbW%2BVFrwkwXre1sxjFZ9WxlSh7jRB%2BsBJ2VixeKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyinMnxQUanQAPlvU4q3ANw7ogJhD62EQWXcwgNmtJIlIpnFpE94y%2F6beG4Jt9TXA%2FoQDm6eq4NtBLjSVEmGw4gGQg6k%2F9lQ5JgsRQ6ypwvKj1joqfsZFw6CQuZOKWwapnZKnsKdS3yLJ6JABxrSNM3hjBqEBSnlPtaFPoDK06Utuoigj2uSwtFe%2Fhh6dE%2BaKWpXTf8KU8fseTsxRy8bXcz5sJL8jpe5Y3gvOV4feiYOY9y%2B5EVz66SATWdLsMxk7RLhdpw%2BQc1Qp2iKtu7Qh8s%2By3IjdaMtbDfthipPLO%2Ft%2F8%2FqK5GmJGjzb5EBAw6sbvHTqDUY6B34LKW02%2BQEK5bBUJ8hz0kxnHWkWLFP%2BcFyPLvkqeiSRjrOB91IQbGdg2vMiU65fz3cgIUAuYZtV%2B1eCgoyLbGGtXhw2CntV90CChVU0t2he9r1AR%2FfHpCBtXDsPwfGSSoh9nRuW075EdqIuJtZqqCiWW8oPNYMp7Lhxop8jQrtnwZImoPrtX1Z4X8hg6z11kpv7DbV43%2F%2B%2Fbh9yAamJAnmNjVClhzHzwcjW9C6z5ndNFh5CDrHUj1z2J3h9MwXMNv4mrumtMq57zz4HBK%2FaP2jKfGTk898NijiLaF%2FDtt7ylAm6olYsNI5h9EvuUiC%2BxeniwNzzDbm9TJBjqkAXSLN%2FDMFCt0G8LGfA4ZK2Whbe90MxCzg1dSybNYPazaaKMnER8lvB3nV6ybZH67Bhee8m1fHUyxWCOk0NTpdd7uj1jolbxoRlHS2d%2B3qsjM9HI%2F2PuR0wvVk4kcjYMyXjWdy03MOwIsYVqPhey6kxPWP02txT6SZf1azOhJOetY9q%2FpMaHkI9e7BwcHjogyFy7GNl%2BgAkb9vla%2Bf%2Bfk%2FLbiKYV2&X-Amz-Signature=89dc94b6d02dbc7aca53768a9baab03704e7f32bf83c174dc57e8ba3b1954a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

