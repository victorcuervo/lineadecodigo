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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCF3AMNL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEUSxbuxcn%2BgHyHjOV5aunXmyxfq4HZSULfX1QAIB9uAiEAtbhsIcaNY%2Fu0bdEGqh3KssTOaco85u4KQtwhwlFuoSEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDH92Dgvqh%2BGf5HQWsCrcA8aGp%2F7t%2BfUQ3sYxhoSjLYK3jgFvPA7uVjlJzZ%2BRFhQGvWLsZnazonCqHZeaU%2FRblcCEALh3O9t1XVWcBvGJBsffAidmb%2FwlZ%2BoRctdNtS2zzaFo630FPOBDb3nnBo8VZLXnm1HxBC11aN1rvQr%2BiUVRXJM7W4PdUofmfStnDHZ4sMdIkzbt8ZKzE8QPWBD0aE7VO5jpjUbaWdBv2ARvW45vCiS6QVfu%2BQzNN4jPeldwZPOKmd%2FLu%2B1NqSMMNb3vj%2FNjnaA0Dpjy7%2BoRCzxH45pVQypz6Y8G729bloC2NylkYcmAQqCtF4QNYAis3ZG1%2F%2FMKSm6Sed8uT9bOcDLJIYN54hjjlpfFZfwRWrE5OMd7yWLVzdza95UJF%2BD1GS255stGiaW%2B8qTQfAUnJEsMv7TG2k8oX2BceQSbFYfHTLSbOF6Mjjhjljl6%2FsonyIIRlHlallCe03Vx%2BXFhT383JbacgYnK2RZbegAVN939zJtcYG%2F0%2Bfq4h9ukb9fh3zxDTcWXl5ReOy0rupIdtlTYN%2FbbZ13mOyVlwqe9wtX3flDMjTWVQJhjWLZ3BOOzor7SkoBZn%2BIPxWIxUoxjCDbGUEECjrBPcBnxQImxG%2B2UNmO36vWrKp7FaRhhpf5rMKXRyskGOqUB3oBWWafKTTsrxNr0HceDt%2FF4nnjd%2FgY1o6%2BDbVFaowYLGeAV87nMCbvJtADPbCOsp4vlWEAWlLvlWVsnodtP8Ii97p9aJSkvK7I7XBOY9gEcsoPShxX9M%2FLxBcDbX%2B8hOD7g1TJRSNA5SKnrkOBLp%2FrSMZ7%2BRTab1SX%2B24HNlZGI1x1hi5XqC3zjnRSS5PsKHdqZQ14g63wnXGAKNNhuWu7VDf8c&X-Amz-Signature=386578de75f616cacfe53e8690abcfcdd6e04cfe5ec6442ffbe7a2474fee3c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

