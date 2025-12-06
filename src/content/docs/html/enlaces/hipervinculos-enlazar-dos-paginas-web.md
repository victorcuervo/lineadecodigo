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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7KAEOKU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNBQ7oBY1nqRLf6mL8GqE8VphuGoiRYaZDDJx1bDRf5AiAX5VeJZDxFTB4ILo6HWqIROkqc1rMCS04Ml9GU3piOFSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMyP%2FoofkElfGtnZpUKtwDRyZ7XYCU3JClCfQ%2BZtBXv4p5mCCsWFzlEtJVpUvnPJray6I1DtZ4HWRFKIjYTb35R1CkJ415BTIiF9ccTUvssJn5srzd%2FVeBFI8bQj16xhPEXYgcrvXxvekptpyYwjYVs61gJPe27UVdBXLszgEyMsbK%2BOz9Y1uDzVCAV052Jb8ujmle2zKdl7jJiNXFIygcznAjibuZiRJRjgErA%2FoyPQTnTd2YmQ22rV5ZkHIeyHG8Gb1HWd8XbsKcXzs1XKeOtyIEV1jgMmXPD6AJzhmwZoA%2BScsco02y5Pv8Kl2iWbNinhu1vSF1EB7qSamofBYqjQZxbXUn8jDSKMcYt3PTpf8chiDeMY7mPpqHdv5APUlPQzBKqsYKfv1EVgUMbH5r1zJAUaXfkhP1w0Xbnp8j7zffWYzpfYJCFCI029OgtvZ4tSoHEeQqej3Plc%2FjZ40lLK2i4P7LOKAvunoY3D65pMihNB%2BDqJLYgPvRG8P5DCf8n%2FnlrGWZ%2BSnw9sBzlPuiBwxkMuYAbJx%2Bq2lTjU0KWowtAZcifXAqRPULser1n1mOFe1xl0uaKRsqUrVLwJQHVmL1OERglJLitjDF8vjTBfdBGbYypUgQV%2BI29oZ3bsk%2BABFmyj9Gj3bDMy8wi8rRyQY6pgEYk%2BOq8WkBltIBZGeKKUWQKp8YN6ORLoRdmrml0zFt1Rr%2Fx2RnzNwee2y5jjlDFSh6l2eWjgbWQ7pyBKknqmlxvzmAvthdg9rvuYXqxCrlchcfruFOXODQZorjWBUGVu8mCbyES3n0zQ2VTF4YxxcAA3SlxhsAT%2Biuujgn%2F%2B5UmUHlrHXlutTUgX1UoG2Co74Foe%2FG2CwzpUH0IuO7HvxhqxprI77W&X-Amz-Signature=ad0e4a82f18888f7284ae631ac3e56b382ef5e5ea4d7caad2d218af35e074827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

