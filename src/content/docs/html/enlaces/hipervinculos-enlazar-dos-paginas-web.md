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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KV4VGW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC03s4%2Fv%2B7oCg6wbkp1HbFr%2FBi9aGG3NzTMmI3MbMjq5AiBVprIMRv82PH2B7nOm2OGC5mgvL4oGVbkaMf2UJ7Ov1ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMLvRFOxeMz1qlf8qBKtwDv1Y8ToKFmIq0feDnS1o8W8%2Bnxecu%2Bl3s8Ipe0PhR1s%2FPw%2Bq3g91GbMr6m6G%2BTHMnuTgIh0V3xxV0IclrYK4DGuz9pKRkKG%2FnrNPI2y1kTaVPIlaxkwFpzvo6TScmrurox4tJs%2B64Olyk0dYoA%2BVlTKD2zclmbxU3K7qNVithflwaPBwCWea2gG1MBtl2s4I1eIbDs4bdgN1HV2H3mptYR38J%2F1xX5UdFdc%2FCdWkJXs%2FYR4Xu3RdDQooKWLStjtqY1Re425Qa0cIq1Zpij0%2BF6WDOGON90BPuDMOhb4n7obxnLagCpQEQryAkt3Fm%2B8zbR5wLsZ42n8MFF8j2uQYxP4ycdePMpgBpKa%2Fep46PXbdzVhh%2BwHisnsUw2lP2NJo61g%2FQzJHMYje%2FjvzOYe%2BozkQeQZtK2BsU59qaHUNNuN5YflhOjY6iEPUHjClA6V8EBbk%2FUYZTo%2FCpr9A8ZPuoeXX7zwrNHY91YWipjbAlbWVURWt%2B%2FQfzlZaey6FDMlEpapVvipvKpySYRFsIM1EoClBF4PsgdtDpjzzyjn%2FC7CDSa8TDTrrDhk5VTrMWIi6sYozDWL8y0lKuVnWlQH%2BJppnBGGDpzR2YsveqclEeGrLs%2BfBQuWwhnh%2Fkstow7sXRyQY6pgEcADeDbsSIxkWgz%2BhZAwFlClHhWzKA9b3D04ZiahYAsMhUq59SOBcrpAWRP3ZtDVqJbOUAch4G3XYWcyCTx7wA%2Fof3NTeigHQAf%2BCOT06%2Bjb3F%2BIcizYWWTO9QRutJ8G1P8KCP%2Bgm%2FOL8qpFeRYvZwxiIO2dibs%2BsfOfYf6aCz7G8Ug32MPp7vYFOMjwjykR2UAmVTk62c6tsW5jSxks9l67vC7Gfp&X-Amz-Signature=a163d4f733eb503e0c9f9d499e51ad84d524c021ac1e7f7a8672ea37c189b666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

