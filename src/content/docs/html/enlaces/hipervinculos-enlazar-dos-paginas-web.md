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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A344ZBN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxvnH%2Bd%2F6cJ96UivgZyTdCaxWmaHRhHGz%2BFypIufg18wIhAMauqL5%2Bknas%2BK3%2FLWAhtoSqooOMIFPjU2ehOMXhok7NKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI%2BxC3YqkponY%2FQuQq3AOKihwggLBXdAeFdeNng5gYyfTapQQ3hznG76q82MRsatMNnIj3pleCXhTfUKPq3Qqoc5Kk8IUPrUeB0jScaWTRlqT%2FbLwUakInhYiizVflJ8NKw4Pf%2FiaIBjhJoH3Wwdm53vuZNjnlgEDnvEXoPUnbSRWTc1E%2BTKH%2F3LiOzujVLR%2F4LOyJ%2BXFIHCHNFSJ35vlny1oWD2ECMYu9wYewDHIQMUJyhdJsA%2FG3Rs4flJT33yrXidwWdFw5eHTsWE1kv5svAg6%2B3JAmFDf3Yw%2Bm0GpEAKQ6t14emiDLiqNIjmP9dNqbncB9yGG1TVedOn1Sd%2FtjFmtsd68ANIf%2F%2FRD7qGpoEutIRJhx%2FYhxiX4uEEd0R%2BcKqTClFSunOhdnGmJqak3RYRCTnM%2BVj7tjrS5ee70HfqyzPLkpouo3%2FxoMBfgB9z9dExQV9fRgbEqcCq%2BkDSTsTlqagt%2Bj7hjQX0mu7BTgIOU4k4Wx6iik8N114yhTn4cW%2B0nmrCUCIKFAs10KcagDxPv7KLel%2BC%2F2oo%2FrmADlIXB4GoRso9%2B%2FbYG8qSMUMOiBCG9s57kzCPX5dmlAcUwS8P4B7Z0bf4LVAaup7DSH%2BtnyK%2BxqIZHtdxgpkzPzBZOxjBiuw244B8nmojCgot3JBjqkASB%2Fp9IgF0fwzXqzuQCWJksdJ2Ke3eBu8MWtO5t6ekDcbiL3asAzJLW9R%2BGdauo1RT4K%2F58x1PC8vjvuPVcM0WgrOYb3X7Pb4BRp3Z2AbVJVqsiaEIviY63j4evVnN3KffqLrpnK15oJwxh1zv%2Bi6RWavEeb2NQdIzMHAsJGZBJvpm5gMPNvRPoKM7Sw8W1q%2Bj4XfKy6fY9M%2BXzK5wnN3i66jMGR&X-Amz-Signature=80f719c591442c42f53ded5286adca1f4b69f8a3fc45ab6a0b404242e252f59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

