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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2FK5MSQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T225339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaZcOKAgE54p9SEvx5DFp2S6bodrXl80wTX9XOfpnmkAiEAiExL192tBNl1jc17dQv0vbfWDAKNPA0%2BUMECPfL1K4cqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0d1PaPBNbuKVsLgSrcA9uPihZ1qSd6nHwD5%2BwtAAH1ANdfrqkf7FOpYVX8HZ5GWt5SShZSYgS%2BrrhpxoPpC8hNRjXbKlrxSfXZ3bcekJVTTNf2dC0Ax65XmWOOZwVe7AIdS4u9DfdOHGp29JmRKM1%2F523UTfUXgo0tX%2BMYPAA5wVFATO0oM%2FtSs1jrht6wz1zt4Z0Mp%2BQV6UYULV664ExLtFaQeM3sHfB9r8f8x8WDLmjNjftOfR%2FnxeOwG5Bdfrk51MEQEFfB1zw4w%2FlsyGFutLvu65p9pJoDdu%2F8jWTSftDL6AvzssWQcTyjw7YKLx6wWQpV8adU3g%2F2cplUMxJIz1WPE5xdeSSfN7DGqJ%2FWSNMUXqSh5RGUaxWjWTgIWPPdnPNUzSQe9Eq5hI957dozhe06ZJM5DuAAdwOrBDCjYSQ4lqF2OGHOHSHgt2mWez8Mng6byj7Y%2BRgjYjrTeB5pyPXxpWjexqEBsGURMgsddtgAmOoBOIXO1JCLlZ0qIqcF5kHWD08tNNU4dWQ6eGgxv%2FsRrLB6qXRUWFQiCFMi%2BKY%2Bl1diapTJGkyfFK1fMkRfFuvv9X5iKVnQOOxJ3UUmtqNFDu9asIj70PT15MxrLLrl4H7nLEOhrmDAidqVhkiEuUO%2FT%2Bb4B1PUMI3D4skGOqUB%2BMl0MQVItp2mwOyMiLQZFls5h5jkaUNcMzKXWZ4AD%2FGD8ANMJE%2Bsc%2FADXF1eBkRTM4dXa%2B6FA1t%2FnMz5TmJQ2hR4F5kBytDYrdwPprFlTB6RXNHrkS3XelpagikA127WFH7H0T3va%2FDdpH7yr0DPL1Sc5VFfbSjgL4cyHa0n0N%2BcsNGclkhqmbIXsEWVyPFVVAWut64cZiSmSnwdOA22sAnJ6jGK&X-Amz-Signature=ed065f8361435cc41c032b98bb172a74f726dbe4f82a634015673fd5b897655a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

