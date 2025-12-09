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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5ZG5GN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsNntKgkBVuhdmo8fm8KopgMdQKniuTSthZXzH2QBIvwIhALIWRrc4WvtOWhlcwl%2FAOawKGzWxC2UVIWOHADIpKqdSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwjf6h3AYS%2Bc0V3VzYq3AP6eAFbqQtbredRE4%2F8KPXR19eQrV4L1duIFL1dSAS%2F6pov8rJjdeFNTdhWTrUcWK88LuWAqK%2BRvVScbQcg%2Bp6Z8Lj%2B0INhW6smlqlb7EL3eH7Kx4bpSu7HJ10l%2FfVp3njlHJiwf4F7J5ssykfC71h3l3KBeLVt5%2FJjWZhONUj0nm9mPQqMaqpCLzrznu%2BqWt5vxpZNas44UT2giMo3lHSlK8qDSogC4osjSHKiFQfN54jAoz0womQ%2BOv8S9SfUNJEpnoMrrCJ6DjIX12%2B6U4hsh1Dd417etjbzAYO0oSUHY5y0flwW9nGWJ0PulqDhPt4BTF696y5cIoC35ASd7%2BgjkatV3vghDRyPdeTuqr%2BR2pH%2FRDgd6pYi196R34sh2Wt0isFgW9%2BGEQCTeYt2arcaovf4gaF0Fdi%2B2aLOCyN%2F13E3KMnqVjcvLMlx2gPxxHPveCypEavh9NUwqlgui0lpLGVwqW4hWkSAjy7%2FWh8glL3Zm4oTj1iQROjsmgMc8FXYLBtHTHghsUARGSwj7tajVkFKYUgjgu3QIzd0aNlOdweT2zoxjVD6n%2Fd4Rq2MyEXFbOIWc24mzkqbit%2Frr826OisVa9hDkd4ihD3hzZWJJJa9lsdbQTiE97nywjC8w%2BLJBjqkAetkXCAvfExsR7swsp1%2Fr4jspatZb9y3igStqhfWdQ77TdoUkTDqcwjfcjhTfEqFveys%2BWsglhT39E9jzNs1UfO02%2BqDUXGF7j1zFea%2FFwijfx8jZz%2BH7SLtqD7oCyykjhJdNsRN1UcwlVGCEGa6VDK7ym%2BPot2w6hy%2F6baa%2Fi3gMaKb4vjneFs7p1zR7DrT6k6WrRjYjBT0bIdzz6DCx98%2Bcdeu&X-Amz-Signature=1a9a58dab95ff7738cd320ea7b1f2c531dd275ec46a7c4fac484ddf521de3ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

