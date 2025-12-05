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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VMAJOL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8SoAkhFp3IyAwJCebEZL%2BtOLO4Uw2K%2BaaYpeA1fdhWAiEA%2FMZI4SNeUR8p%2Fdm6kly4t4x%2BRz4H6KlzrtkS9vTdyqEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMUzrhLeMc7lG9KshCrcA5dFJjkiPIpy5tMJhtmfh5u3C3ip5TWVRB12z1sAWZwDkbkgv99xgaUaGB6NpXVTk69dVNoZ6R1uYvnJHvXzyGWI7mhh9H2Dcy%2FTEwKMql0LKJOA2qQFBIjYTovqrpg37UkpymAhJsZwR4ReW9YH6RrC18ffLfVMFECfLsIokKbhaiNnwFDJeUvnWYk3GUWfNmo6irBtlQueyomqsNwFEdUJIoZ%2FiOAbbTuuY%2FE0d1ssjUvdqRW4dwSV5zoE%2BAVmWA0V77NPg6TuRjA4BjVvJCNlvK87OkwYblz9U6KSS0WlzeYvnmxFPEsTiVZXKHcBiROipDyQoT3G9FMbEFDlP%2Bf3uJVRQnf5%2F4PSh2Qc39WFLWfQ6RoRumZN9k9YhkWAKpyzJDorXh3RSDtAKBPg1VavK6dDD7badwQGw397ieDfMPapCM1u%2FpVEpOgLA0i5e0ealriHj5B9Sf%2B6na8Jhqjs0dQQSSzn%2B0Kouijlf70%2F17pNXK1Orm31cKf5zsDYt8nPMinIHE59xMNEfSE%2BLtAfhI%2FP0lmADUEwRAGymkbLk9Ueulk5mcktfbBlVKzBIh2ircuu36g5IVuZIL6eaHv1sHV1%2BteqnpHtfWVzF0AXGklqDQrZs8YMt7H5MNbGzckGOqUBzoIP2JHj3TbLvo8tyASKRS%2B18t8FTk4vF6QDm21g6wxjaHdpeE4LqEhiCsJ9NyoVT6b7ul1Jxv1YZD6m8vObXRIjZT2n0cHVO7MdeAUmgCzStCc6UfYzVlJLKQ%2B%2FRuVkZhhxOEAfK7e6lF8HWXtG2Pw7laqv2zrdGjTzF4CfIYSLcqj8nx1j7NHjwzsIV9SgGpFZTgo1Gd3zhDNZmunDttVpE12W&X-Amz-Signature=a91c2868623d3761e3b92bf7c0b60167de013b7ff74ef1ab24c368c9d64cf8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

