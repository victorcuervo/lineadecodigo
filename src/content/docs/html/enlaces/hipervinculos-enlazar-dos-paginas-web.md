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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IK3RDJV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMUqNdIIAhakPXMdkTyjwqEjyMf2L8SYGHGcCf4ZhH2AiBCHMaThy2dxNOyhnFE5KTvu6U%2F%2FEoBKU2mjCqzgmUncCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0z2H3OblT4qqUy7KtwD7lFuipBpb8mWhDq%2F1vqBGrd6CDJDi3TMKGnwdp2rTtInfuSxdzTqDCdXN2fmLBb%2FRnZXbLKPDpYjrwI1%2B4se35DhDAuu1emlzV%2BVy1J2qD2O27QYENxGNG8SiuEl2G%2FVSMKhV5p4TsU3fIHb6at5kxB3k%2F3odstzXQpu%2F%2F5KYE4yrk5O%2FD7Dby3ZW5x4cylxoknJ7KlcieeRwweHr6JeXP1M3r0geq1ZMgoQKpxn%2BKqwi6TkGpBt1lGEkdNpk17ZEwtqms77AP9e60bVcUbbH5BNGnxMWmC87QE95Glws0Y6yzHhpcsqhOIsIumo5ancxq9US6uv%2FzdINDuH%2BP1jYVcU2okOUknP2pvCyWwlw4GqAxe1%2BFPJQ1IgQPraM%2FX%2FH%2F7SYdCQHoheZfeev%2BCXY3daMRIek0QMS84PuXW0DhApbaOkIFk9PSbFJRK4JYIU5Qmz0Ah%2FBozREZUx7zpuE8aEY4S73gM%2B29ULMCDUE4wiazE3PlB6eyb%2B%2BFAtwJLUpgmZydnN0Jz6c6kzIpDqKEuLMR55Q2UBnHSNMed0dZwPDY6braA8TAFDTg%2BoSNp22x4OYHKiCGQRi%2BezC9eabWy4Z64x6UpwCE1gsDC1bhlbqqNZ8FaHKBBiQjIwqsPdyQY6pgEMuhxGF%2BpricWaVPj0AH3aCeF53G9stRBNiUES2adA4R1v8K%2B3PVIvuUbU6sLDQFc8MSZIzZVzxj7%2FldduirPm4O3YI1D9uFvSmdmrhwHWRkyFU5se%2FBg%2BkWR%2FpP3bXctPrEPFETNQv3zSzFbYfTZmxpJMECnNZyUyHJ%2BlHIs5qSrgx%2FGubnghDHEddcKMLO5RV1uutHEHZ2e5Oa49lLwn4YmXxTBD&X-Amz-Signature=0ed54df25b7b7be706926d01ee9c7050daddf9fe14d700b7d0014be30a4904e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

