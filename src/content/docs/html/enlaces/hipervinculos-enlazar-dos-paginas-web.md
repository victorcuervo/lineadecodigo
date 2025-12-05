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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3P2A7B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFrBKnVrTEXtyObnl9r2Albhvt33oz%2BtaKFvJrYuCVqAiEA07pKcjHjOXubim5lnc0%2FIs0AQ3AmCj1%2BNgZHk5Y%2FFQkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCQGi3LgiuN8nJs0hSrcAy61k8FAOC8a4kTBOXsCllpN5pswuavS86vJWkbY7x3eiRoi5Hziuj5XAci%2Bq8DyUIeg3jRPNHBGuAcbk8fGc%2Bjkc%2F0JJncadNPU9C8jau196zdZajhULTl%2F7X1LDmtjLm3pibVcmTZ3I3QDOhGnfKPFs5SDfTgcJeLr0pG0bHwdFKejMMKxRA9%2FJ2fuAjhrE%2FZWKDsUMWipT3D%2BqI3wwkzbupEw04cVHOwe07V%2F5LMwfF4SRDivYAybPOpOWlino2xEBhy%2B58UGHb1%2BvN340NO8KV0Gj%2Ftuhd6O2%2Fh4eTJ8kXIJHExfQqtZW%2Bg61EUrB2Afz4x%2FhOfE7HvNqjvjiAaxnDJ3qZpzgP3vDcj%2BLkRbfMUbcRsFlZxuwXkiQKFHxg2CO6syKmYmVCNss2o6KedazZ3jKFddzQz50euJ0C9DhJRNSytlgOttDGHz8G8FdBUXyUV5V6NTI%2BkFxTwgFm9%2FO1RZnmADzVO%2BIEgnuZFN%2BVj0FGypEsfdF78LMVAsaO%2FrWuubJyeq7yOhvRmbLX%2Bw%2FKvXlu0YYunBflX6DQLVwsh4LIjWoFk4sYb9A8jsTePZ9RD3aFw7PnmROgMI14dWbxmZ8IOFYWSbg1CtFJNiIK3YH7PITVMhpqS8MOyxyckGOqUBM01hybebMCyHRC3Pk4xjZFCDXGpUhZ7dXMzgIiltVGdjGwjZtXqLj7gF9WZQ4W75Va8QZaKURcbuAXKXqMMo%2B0YK86RcRbM%2Bn%2BEZYYTZOhgeG1%2FOJZyIMJ%2B%2BqVwXOw%2BASX7zFFfrwKZ%2FwiUDSViLOLa3GHzY4HDb6oeQ3exDqxWsSTVNah418DGRfjToSZpK%2B6euCO4JyjyxZO114ibRSEOb97k9&X-Amz-Signature=76516b431608e5509287661f06076ec39967e7ae4659b1aa46510a1066aa5ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

