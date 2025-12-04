---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIEW644%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHcu1x6eUvynHr0nOp7Hsq%2FO0u6PoSN9fbYl4nfJVgcvAiEA1lCP1dAmnp6GSvj0j2e40n%2Bp7PwuqSVl6m%2F5aPXq0ukq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD%2F3LE%2F8PptczIa1VSrcA0GhJ3BwJya9J%2F4E%2FCbLupSu%2BtZnYgbFgOkpRnXQzGK7RR10sPLso9gLJgfzDYK873ra1jgB8xeGwonmaiS50emlxeCLoWEAvdxM1wYm5ZWq5KHOK3MWkbpo3kc7s798vOvVwjiST42HqdONRMjJtgIA0pzpgLEQsqhu1u%2FdEJ6xXllKjRn%2FZpIri1iz0pB7rmo9W32NJRU8JvH3s7KoSHdItE4FqZmMl2s%2BqDE0G3uTIze4ON5jQhyEBWyv5R94eaW%2FD8EwxOTOkmWhZ1rrMeSYudZKFuqBuZfYcLSzDqyRzkZeqv9NgDWyPbyC%2FlF9wf87K0rXenqfRGO%2BXKYmkJKtSGOLSf3xhtl1Fm8dpEDZgr7JRw9BCkyBGbSOsd0lBaGoQ%2FU3OCeI27Gc996bkPu87rW0VXLuvjzpyODMGNJ%2FAEP3KYIbaWYH1BLp97Hi0AK3j1imywug%2BIgWtT4DrQHvTjxUHdMlVC0DlQ0Rbgfdw7ku4pS52qGkqNJ67aL20EKBD550OTOOsaURyVjPfsJ%2FZCS5CF5Gzmv3OPtOG3vtfaznzBGaCHZY7Npz6UvYGb%2FMBQVCdOpGqS7aPn5DahXG%2BY%2F075hh3eERobAPzvXADIt0YF6QYJYd%2BJulMM2GxckGOqUBLJzFFk8eu7AVmNO0hQpmrEPH7Ibnpwe5LPKgYCSItt2wYvaVc8bXJoMbp36nTd2X8l%2B9g55HQZgBIlrrnYIJ8a7EsG65MB5oQ4sWJkaialQxmPaKIyTOBLC%2F5LCDNWjpCB%2F2ApyN8f2vAh1%2Fgz5R61i1We%2BR3pcFStAjWEcYyyHaYwgMbeTdvY%2BPFmd%2Fdo9z7OtGZY1g50OMQ7TeQqYOmb%2FE%2B8nx&X-Amz-Signature=fd71145a846d401c814b32232dc31ec08f45b759d31ffcd0566d8d10bd79adcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

