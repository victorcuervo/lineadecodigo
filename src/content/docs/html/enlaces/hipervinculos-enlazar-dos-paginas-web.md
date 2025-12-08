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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAYBMCX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEDgQebU8AzrlzTF9WlzFKmLZ2M1eJuYuezfSDK3mUJAiAJvNeIBl7b4QGqu9vfWmbjB9IMx%2B2%2BP50Wb%2BD6LtbGHyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJL33EU3ba47c1O0yKtwDk9fN2U4qZhPaxixTytm8jjeoG4nOLCnnLm0HphbF7nNLUH34qgD%2BMN0A5y8lQ6hR1Eg4%2BEyqon5LDQvNunYN5%2BH9d%2FjRdPF6eCntBqzUAEHQbUep9N9ebYYScdsB%2FydQC83OGK%2FjgcNnZB4DxYF1kRkd%2FFsarxnXtjJ%2F%2BuLgDNHLBtw7EcA20bSBUwSHJeeKB7ow%2BOuBCHBoVKtRBQ1rQ48JWxolWj%2BfBiXFzMHBWsg%2B%2FPYlbZosbQMhdso%2BPkRHPKHVs%2B1KNKRDYwdI6%2BEnFCaEJJ7yLFVptPun49OH15ybAfyzQACI%2BVNjyYaU0FJozjEahYEe%2BOnE0KX%2FKd8%2FH82Ljeg8YAaCXTzKld7kCcJab4aRBMA94ypQRTqD0NOJujjKRScdDKt0Bjwl%2Bs91I6TOOHZHIJ4YxS0GM6xvPu1%2Fd5Ia4U%2B9uGXAk9wGQRNVL1C%2Bf6tunB2%2Bp%2BD7CNBxOQQFK4W7OzD6eNTyIQW5GSjEluXkne1zLuGt5O6xRb0qo2cIJK4fujfiWn4zO245VLVk92r6qQUn7058fm9x92sEdGPuJ0stra9I7u6ilCTZ%2B3h30%2BVhxvw7W9AW54VGXWWFnYTAmf%2F%2Bj1FLWjQSvMPWB873ksHd7XbqtDEwnu3ZyQY6pgFfcD4T2p5GEyORy%2FKrPg6hArhM%2FXffo6S5NVd43KW8iymih6opZ9u4%2FEu%2B09mu2hETzzM%2BCseSkTrP%2B7Y44s9ykMxAuCwa09pAT9tmq34xc4n33uIPZyhuxnPpHNM%2B6t2lLOXvLa7FKEYpwhCKfuQ26TQBIhXas2fOBZD9gthA1PpuEY7kXAr8pieFlD9K65c9gzSq7yqf2f1E3VJvyBF5rCHrVd2C&X-Amz-Signature=df7cd73ff451e920706899c90f14d1a30af1dca12096f4283bb980ca86d6bc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

