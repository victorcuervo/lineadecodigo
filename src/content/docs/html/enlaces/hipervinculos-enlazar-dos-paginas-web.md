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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3NXEVF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBP7d7R5wTVL%2B7OmXNYay3%2F91Cgd4hJ2ct3ypd9pytsbAiAvBbZBQbH7Vw7Y3qy%2FJsstGA02sKNHXIRM92tuuAwJBCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyqiHYabcnTAtkeKmKtwDx6D5yTrwBcbinDS1W%2FeoXP17hPQkXwrgb4PIaQfubvx4kT9ESTblGpmWVDIbLay8IDtuj%2FkY%2F9%2B1XQROZHPEe9t9cGTU0FkHFMsrBkUeN1x3764OuCugUswcZPULGk3C7%2FimbawOtTkLEEbzC30hUO6JlpA7P8qvOYNHeYJN1FSVK5S2hsVYEEzAvX3dSlq51MWYyrUGZgxz35gi1sWaxZbcX7ASlJ6YVyBcJB7nXW3rMGCIGuGugxrNj0sxHo5eKjdmO%2BRTOoI8s%2F8sThZNGuvThCsrxfEli4p9Q5KjFSDKLRwzMywGcU7CysAK1Pr1k9ZU1xOXVOUwqbLvTS1%2FesZjdNKJ%2FPj42y3OwXrpgIXAdpzuPlLtJX2RPyrlELmeHc49vfTJaa%2FVREpNdwH1hF56DJcBnUqDAnVpc5pdhq4WrPTReXm4YIZpXy0CY3AXellhenfwf17u4ktKy1fquJ%2B5sN6xZNKzRlQqbhnCYXbf8XYdq4uHpGJ%2Fq0A5Opx4Skm8umplXjLtcFfXjW2ROEhLz6M36SyoNZ5Y%2BJ%2FwiFabaNFQDiqETfN%2Fawg3dPibF3HSyWo6EPDdOAj%2B67TpHrI73Matvuvht633LcE8SJBtbQ%2BU%2Bc4rEtPTSq8wt7zhyQY6pgETFCrV3%2B5fSadTb%2FcH%2BSZGs7S3Xpf641LDsa3yP34mWn3LvMTtRMGt0iNDtNikeaK5maL%2BmLQA%2FrmEvmaby4MtRQXYZWiTKyTmFhHBHEE8KuhweMyphymsVM1woTKBnJr1htnJzWoiI2r1bdCIKUGH9pktdPDsSI%2FB8%2Be%2BTawlROU6i8VjNzLgEzk6ZD4cUIOWxoMRkIg0Qbn0ZED2FcIHSV09d%2F8S&X-Amz-Signature=f8a841161540350d07fdffde0858f004d7df625a02088bcdbdaaa00e5a6e936a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

