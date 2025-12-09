---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM5WVCJP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9nh0p2qWzhT9cWMGFqXBPBEInDRlwaHhGQGsqgPKT%2FQIhALpwz9LV5xqYEZLQJqRAdVT1S63n5U58cWHmWazBQRCwKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2IkzkqMJsCv7NLuIq3AOZsyYrnm5z3B%2Fh5smM11whKjMQh3RsFrECAZ%2Fb%2FdJYfQ2OlaMXH0Hhp12KcVLBqNGbphlMEoE9qaTxbRapF3jm1vkg%2F%2Fx4besqotfn7CU4svQ8wi3YqcNiKOJeGZHT%2BR2JRFHPnY%2Bt9RumC01ZDgRxD7VI1fp3yYK%2Fi08fAbdGUhVh1evCpAPb%2FFiVhsCOGoYGYULlyZxX6JcICTyNJ3fbQWWPdRnMqIpHs9Srh6eAnTfExUrPwBWaUAWItV873BiuE5u9sXvWwvHDniRiUKOExlt0DLTbTRFd5Vci%2F26NsKZDGRKFd00oyqv01YECOauVriGbRDQPVTJlk%2Bl9O04vyvSwD8HT1z187bu5h0yK4%2FNA60fkS%2FGEGM3i%2FeYD7TwgV55bBOZ1KQewBxWvno7yZl0RISltWu056wQOPNZUA10jH5LCKriVfAu82ArecAkOx6C5j7evmnc0mOfNmdXw13RowPsOo8ssTyLtJaisSO1lnZt8afXn4VTyVPB0aqpEbD8WDd5wkMSPHCeo8kWr9k4FsK1cvkXHL4cRG8Do6MiCw5pj%2BUpBbey77MF8CLwGTZiiIL%2BbEkQKBiwjdcy6%2F%2BX7WarHEDZ2oT1ufvorUEsImbesQMvrUPClxTC6mOHJBjqkAVPpt7L0lfDFZuvgSgPNLJeEXmq3z6JYYxKirPOM0RgNuRv%2FCrdJtxJ%2Ff8BDZHZs3SU2h4%2BbZx0r3DMFwVjMa8QtxcIDIJ%2F2AOZiFtA86WP5W1XNehAorlJ6pEaz%2BcGzCcgJKeHMm%2Fzkxx8oGXgy6x%2F%2BTpMWw33%2F2EJywXLHRElrnClIKSDyzVvCr%2FX0fvax7CNQ8oiyqfcACmrnCulQUK8mi%2FQs&X-Amz-Signature=3f8a8ff5ad45b4e847327834ef9e33523bfefe6f224c8fc4249edccb3b94c392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

