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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIE72QJL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk8l%2Bu%2FgMRny3FooX3hgC5OpggjwhskYTrqHSaw%2BsoAAiBp0y0MYCx7L6tT5zhXJIav1EPVz3Lv3v0PySYaedPRWSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcd4kjjeNmh7gkVqYKtwDFB1Jkzy4p%2FeKfBOr1QIr6c%2FjqBcKIkwVbXeANTgY4TN71YAjBc6%2ByNJbpRklBgb8tWPKRMveAucz2gQA6NE5oROn4Jpk9lPDoEeybjXDQykbmgsaMrAMLpNKiH89KKVVItfo14BMfguGlHECB2uM4eAo5CARhAaLVf4yP17AZibVi1vfWBzjrxDYrYlKGEacBKsZISVaGrZmCqAGDtMykHJ%2B1fvo4hnso76%2FLJ9TGQLMIWXRVmRSw9cFtL7N3EtCQWG0IhiRiG56T2ZCqwvApOrLbay0qY0yqKkpSPazljUWpDhOwcMTLNrjw%2FyV2cHajSUywhxLkPOqRwW9j1Zlvi33%2F%2FXbDNopVYfm3YHd9R%2Fls%2FyHJfu%2FI5PqpIgLIxIvg6ZOo4l%2F5A26o15X2u8KZtC%2B7C6k1l3uxFNemItCMmO%2BwbiGaKlabLDEtYEvsYrAlbRkdLM3%2FbPmswNeI5Di1xXA15C%2FH%2Bo%2BBCYlEntiF18Eem4NDOPuimnx%2FhrnqTGMhVs5PZonwmeZW4sdiYXKq6P6u9VBRVofVxLf1F6ccU8V9AEqvdweQmpyH2%2FL4aDG5ZVt%2BhiS9ELjaAlbPPTHLq4szufJfDkLsNjAkMa3KNwysw8yN8mICy%2B9MHcwn7TWyQY6pgE08lWFIqtLrwvdonereZWluUekjCYMsiq%2B1vniGKiylYZjwa35lLEHQABZmZSPdl5Mfay4Mo9pdUNbdvmKR7MUYC%2B6nf18umY1QPooC4UiRrPk77vF1wt9G72OEhvdDQrRthI5qjInWJF96FVsyWrf%2F23z0foylpnHkmLB7L5LDCQgnDR%2B%2BAlUm1o1dcp4hef9EvPZumbnxNvqcvhejaqmYNjcudL%2B&X-Amz-Signature=21696595a24c5ca29584c7dc6857fc492b014b1cc95e0f3f909d9138c285d42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

