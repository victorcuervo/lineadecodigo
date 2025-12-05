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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJDBEXNM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNGpBD33EvLUfwEj1BuQxwih6%2BsJOs%2BsPzgeh9dqE5zwIgeLHulCh0wy7rFREzteUEvQu5rp%2FBC5PIKK8so7q54lYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDB1CKdkIq9QUmk%2BfNyrcAySn0jpoSmEa9q%2FKlzdj9RVFnBf3IaF4Of9nGG%2BC15h0RS%2FGFX9kMbTYGSgB0o%2FH3%2FcrcXIElESfY9YH8Yte8CV0BKAkS8eFQZELCpwS%2BiwlCt3rMKRPmHdO5peVm7lZlSGCb0dVXHV5NG1AKnttDZ5fob6hMSq%2Bx%2BhANYzljgP0dXwRjKR%2F%2BtXwIQ%2FhyQ5l1DKG%2FK0ZHSMwAQGAOKQg3nxCEsguEo86OwtZldvCmfDl4ta5SrIO%2BP8gZ5s7GB2rj7%2F%2BOkd9JRsDs1wVPhD%2BpwBBBubzS7E0bpOH48gwF2pSfe3KsAfbh4uqXMqIx2e9aQq2uhxk%2FVKgNKzVVf%2FrEpAUVdmL0YjjrEC%2BXF4h23FEeZpmQmLYIe6TSPeU8T2EIzRxL7nD3v4W1qJpHMQhN9uK04JZATYXKXJzHHBv3kT5VlixdC81wMlaa4s29NxBgdtJENarN8tcbM00GJmQjIekGmo766bIs8QVQOtaDoSiAsgxG4vBMF9pL%2F7l1ohR1GrpSvH7u0IJ%2Bhv69zICwyaZen6AikRRQWubKzHStEupjIbq2tLxAbzNbfC8HzGQ8BR8Ih323W4vc17ZORP%2FG3JnUBOUP0F%2ByhNjwI%2Bvh38VfORsai59j8yA4YnSMKeuyckGOqUBlVocBrTSOd3h9F%2BIcqf58LuRdcNR%2Bu%2BHOLiAY54zjP2IEsyEh57FHtL%2BIjzUe1qihKsKtenLd8aYq6rTb6bpQT060rl%2BsIjvRf0YqMYA3aGn%2BRIs5Tri7roJ1PG3Mu6dffQukpxk9lIPPoi39byLokhDXUOVZB9MRyMaih55GajivU58iMhNXNraR4qgNsnHr4Pv1988CzWCwnfIClyNrCE0UoqJ&X-Amz-Signature=e6b16a1be750ecce5aa045878a3be6a3be7fc047d0656393675b4771ce3f4187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

