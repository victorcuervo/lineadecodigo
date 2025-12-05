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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKHPPG3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZGN%2F6iH7lprG7BWW2dDjqEgwU%2B4YqLMhBI5nkROiEJgIgcKae4F9MKFGW80TJ29bvRULqgRYIpjsMrhJxQVoM9u4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDK%2Fh3hVGA81BMJF6GyrcA4eNrOViX9tKuw4xbfg%2B%2BuDMZAfN25RrNyF8Kcn12X%2FWnMJkl10HdEbEV1dl7kVLIyFJFUEodFfK959mrF0x%2F24vlZZ17TEjwlaRxzXcZcOJ6c9FkC3XfFLn6n7UhTxOB2Y%2BYP3upMeWatlvLuebec%2BWJcN5c3%2BLmo9HXR9GLz468P8d0ys4hXHjph1urBDC2GvTFbv3ab%2Fso8iN%2BhijmKaNf7h6g%2FejPhOjVQcqGv1DlyTT8JZDqwglInxN0pPhJVKtnBLIKmS3PTDWdudtimf27B%2Bm9Aj9Xh3nl4ScJXT57Y4S8EHLmZ%2FT2ibHGBT1QcGato5%2FX0qm4wfH2BC6%2Bwfg1KBCNVmhFE0OWGF3LLcL5FLN1GRgFSFBmx0WkJUin6rc2VfL3%2B%2F5escp4sRVQAJjBfCaJrDYGFdhVgOWWyOEdieojPOhTE2oUikQIVa%2B4HFXTIeDPY1LG%2BLb7%2F9tTAUBgEkNG02V%2FUTd7NTY8qugRlj13DIG6KN5PSPQ5jfDaMQZ1EkslF%2FDydKUDYYtcCJbVs%2BWl3jbjdLF73vlzuxmyh3tJ6aYRDjyCN3NVrSltpE%2BAfsDUoHPDVVu3mUqATV8%2Bt8o5BVBnUOrUhg7NUe7iS%2Fs32mejU0CBdDKMJL4y8kGOqUBMtpoHCy1KnL6aRmMunqaL1J4BrgvnJO1uRF6j%2BfKC2gtU611zR4JaPXuLM9XhzyVMUiks5J%2FH83Qmvz4oSZ1ANLiaiOh4FbrFdAmtsI4DO56tY9raacXV9kD7wLlHRoUwUx5ex0D0brZdWeGpFm%2B9qIYELyVCZm8eqnSBq%2BmSlTs1%2Bcf%2Bz6oBahpEkIAtTfLggggIY%2Fn04IXkat5nZbbr7l95UvA&X-Amz-Signature=4abfc26f6d523a9e19371a035670cd1a432d411f70c3914e8435be4ef3c11a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

