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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4CMMA5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuSW%2FzNOAy7eaPy9viPgoLOpxivHd1NADr7D8EO0IXqQIhAI8jonoLOfaug6GqolUBxfmgGLJqjt0G0B3%2FQoADp4haKv8DCFUQABoMNjM3NDIzMTgzODA1Igxxj40m9%2BCVmQKYufcq3APnyWb%2FIeOa0Tl8NIp5zHirlHgjDDC1%2FrObzu5kahMf2mTZcr9E8I1C3zpNuU0md%2FeilcwxkrifzrCkifSUoGeeYjV9CIGwK6UYtnjh%2B88iVMEE9vXAkzvFJ7GHW2cL%2Bhm4A2OdryM8V4hrfW2mWy5ZBfjObyRs414l7PcLuDpSll6g1mWHPbEoPGUaIHZy4lWFQS7EFVI2bPM%2F6s3guaRRL2OLS2QvWyZcHP5aNgTJAw7fKAKqkEBAF8vyzeOeHZONSOtmedxhRifNXTItitueeFlo6uoImrvqbS22wLqHq9sbXA5uBsa7ZLonSZy%2BmjsqiGgCvC%2BasOMxOKQXTzAsoYShCxCp4A1RYQu2IYOYLcXY5jWlkfu%2BqOG2hgqFYn14h8pmh16OMp1byNC21Ks1FRofh06JsWo6Ze8ZwEC3YKoSxsEn8DGKIz9dw9gxpmaITcMyBNw6qVOw39jV1n7cdIcsNDpOwMzJq2QDafZcFRGmTKoiQ%2Far%2FDc%2FQQyCghsxn1oJCS%2BdEq6dbQzHK%2BPrfv643VTKXEt9F7O8sUplSgQPCLd95PGfY%2BEN%2BKuHZjzk6Nm%2B3LujPSKcmmyBiJrX1ncpldF8Co9RzFim%2BFvGX03QSxApwlGM1TM%2B9TCascnJBjqkASGXFn6M27m%2B4eQxt0QJgZXduU2XosNehRdPjxKHUGr9CSeM1Irw%2BvSsNGBhW%2FbAzhgMt8MZR5msqb0und5QkMQwgP4t22WckpnWt1yqRedeQ%2F8sqDxLLiRq01bPYoR7uPoOFOl72M3lD11A2QvIRmFKoloiSyayxuvmVU3cyOOKnBGJBFhFEZVPsjsKDA1EOfpQLeVktElUtcwASn4xxWdSbsGl&X-Amz-Signature=8fbf2fb1346301c5f196cc17965fe8b4cafadef9b964f68b87aaa794d0a4f16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

