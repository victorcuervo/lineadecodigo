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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJ3MLKX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMMy%2Fx0pUTZp90vGJSeTjsHXAD3DBlayTe%2BQWbcf1tPAiEAsykA5DXD%2B%2BS%2BtxgGHl7Jesml1AYgquIwc8p9zyNOp%2B8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgG8Qpya2aAGHluhircA1Dv35RXaDXn%2BD%2F6F8FITlGKdz837Q4JBJQ5Stf31xaQcAp8yjBep2xwCslUxUuJ4Na1Run9pVSkWAf%2BF4ssLeQa%2BdnwVT0W3HrWVNNlHZbSt6mhbw4HEK34ztezFFp%2BTmvfT4oTB3PzcIMxd8Yg8jm%2Bm8fd3roxzGYOfEZk781WYfxtOob%2F0t8oEl4FB8A9kQM9%2BRsYS%2BdhL52S6Jxe5ZIBYs%2Fea2gMChnY3fCDFHYfzuMOr1LY%2Bix7Nu7MbLxbQD5nospdSePrh%2Bol92vzafYd6rqSZs8iPtPpj8gZtZtRqWRsqC18Db%2B%2BJgFBJRxWmWvQF9XWZwi%2FFKDnp49IjZCr6uaVXfCTYGbGhR8ASfMI8H5BBpMMbklHZ9NbVWcMX%2F7ZhzZEO9KXCAMin6iQRs%2BOibWOvuvuSbEHYar2tldq4XN0cHfR0TGSLu4Mu0mr7OwCvK%2BD2AUZ1bS9a8E%2FI%2BHxCBjxaq2tOE3bGI%2FVUhvPvUOu%2F69vlSsIEEMmnS2BpO4MOKCKndwao%2F4AQLkPw9eDIHwWVmENb7StTeP3O7hmSLNFyqtjDPUTY6DyIYwn%2Fe0XopXlISc3DY%2BVXdxLB9l8LuSchDQfrZPZ1GVjPxiNkMcrzesmyPkelW6hMJuH38kGOqUBoza4Z9wLCR73AHxo8cPvyyW7gp85cEwdSLcfmIQDZcxTH%2B%2FheWeNpoqYG0vbiD%2B6T3wp4sM1L4AYp4e8O9IgiMt6VNOyajc97U%2FhYfcRzxs%2BhyO%2Fkrmz0bB84neHC0llSkrmDQLdB%2FJYNEdGYeVa7RskI8ryRu8vpl6iWsU44cQnl3NdPcmofwI0GEZ8Gj1%2BPoIFEowidXElxg3M9Ur7UZXA%2BQma&X-Amz-Signature=8ae8cbc047aa96be1b4610b94a3f9be67aa3de2bd0f5e27a7625668aa88a51df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

