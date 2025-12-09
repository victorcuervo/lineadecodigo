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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCWJY6D6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP0bDD9d0STeM5ZL5%2FTmbs0GGGwRWXJiXIWrBxvV4CQAiBxoUon24TLBNQe51%2FfkunvC0Id3JYj7RLRVr97i9qbeSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRvaenkob4NpK%2FlGsKtwDuqtBrpc7QG96dBgnXFXyqDqS7Z4SEvVCSgwz%2BBYk4prrSxxmF5EC1QO9kPhRe8kqv2iEt0l5joRhZiFFNWtuBX%2Bwd1Ynz8OfysXZxtaB9%2Fcle1%2Bz%2B3R6ZVMwgMkerpsqgOBNdyRpYjo2LmKAJHh3dqU07rMTIArWz%2BoiOQocfRAMuCdbaZunaFdn5AjjIix6kAhM4%2FX0FXkG30l3ESScSkA1DKBMgbimYoKlsEg%2F7rUDwCyc88uImNB%2Bmk4RnlrI3ZmpJakrV0dzFRjhtn0rfCv%2FuC9VO9ov86eUVdIJZYdtkf4hs599q2zDZxHEFt6LsNQO9RnU4UPmfTHGISF5aLLlPa6FFRIJ2WsfF7HBFuf%2FcMmtERPXaQESS9LJVSWiSrwHJ9Xqt3iOqxbUBAP%2BAQCIdQsLktc%2FHY3YVQA90k%2ByVD6uQzZXdAbomGxAe7o7OP7fEzA68GsVRr7jgd5Mrb08ZPv8BlHMbpvDxzmKL7d94F3TjSJLOCRnrGPwZwArya6piTfiByNsEi62PbvpCrATDrn%2FXSDtoWC8l9qttpCUEYr91OiA5QOH%2FlAaeySMSP5irbp%2FrICmAwovhTf%2B8Pb2NE6QUDx5GFF4Z4cMVPPLFZWobGLl%2FH9EFZgwlt%2FhyQY6pgGJLDYhBB7eq2HETkw51tmCrdgb1scktTxvTTy0UbRjNpSokyg%2Fli0BEpBFNyCUG%2BPAvg7dqDkly3I8p%2BN0IDLRiwV9YD8RHbbmMg0apWjy%2FM1B9AfuOzBue9TdWQ4PrR6X3TW3mYcNb40Igv1zDB73Ou9EmhmOHFXkEuswyPANaQuBd644inSavFMqZTZiPjI8FhShjxpfOVq%2FqG6BiMaCuvfDXYPE&X-Amz-Signature=1bb5f88050d49064e12383ccc9fca11814fc021aba972e5c78ca59531f3635d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

