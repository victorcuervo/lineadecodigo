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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3TRUPL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD60vf912fMzH4LIL%2BWylU2Nf1P2lAN5j%2F14T8llKNk0gIhALFUCU296SIwlw8jrgpeII9SKdh4fIEU1nDdGnDIy8GfKv8DCHQQABoMNjM3NDIzMTgzODA1IgwuBPXjAbyW0Lrj6KMq3ANJj1AikmWLtUfaowQwf858wo2k6d3x9i2DJ%2BrgW%2FLUZ2xIC5%2FCPnsSwNO4mIP3vff%2BqrZee0Zt%2Bcaa9K%2BX10Ur28HM27gm8QKpV75pzU%2FKr49ZezLPlTq1VdiaKwsBRqir%2B2NAHlpPbqJnF28ON1AbT5XbthJiakH0Nr5hm96T13R4xlS3u7TsbzFHfkWFlOWC%2B4ZdzEmvhRJCdFoAfSncdc2MgqRbVlSza2KF4VrNhcaLj3JJWdNmWRTOvXsDXtm2iK6LZQMAGbI7kO2TgS%2BIko0lQReTSLKsDesFM48YGTB248%2FJOibzHr5Qzl%2BADi3e42PiBGf35tXdNAAWvQLp%2B8AkzEAuXNJ1%2Bv5Uk5mL8wJ7%2B4%2BCTKrcIiloNchxTZhM%2BB2XHrS3b4FH%2BZGsZGDpR45cvTPefBi%2FaAo1PKjdzRJ9CtPudVEiS3id9BS0guT06F6kNz22VbAHQf2wHFuYtEBP0c5gdR72v7B5qGnzCGN3L%2BMhK2sZxHd36lI%2FqgArg3w2oez7SE6W8GgnXHyvxK9wYU1QGW%2FDTXILriKPrt0jwifim%2FASdAtrYa1hzfnJh%2Bx9o3x5znSMNZaX9YNfMWxKTssLLTYmgoT1ROsXnkuJQOX%2B%2FD6et4GpgDCmptDJBjqkAbW3SlpLG0pSQQ2gi0eRPhe502RDAoJn%2BaXW8cj1fipolgQ8B3eBUDxaFrSShYJEz8XNQ5RRAWZ7WJB5z2mRCeRVEtyCXrWAcPdEFu9UvDs8WNwkB0hVG5MBmedi3oBjigbCterCWUkdGoclx0IDEjoCNOag4laGfoXbaqjLItN%2FtTF1Rly9zc9dNeKqWH6VvjQidSrf0qsXYSQJ2tdmQMW%2F%2BPpc&X-Amz-Signature=621c561929d7d98b419ef14f3b7ba87458f41ef723059d80c8eb13657b9a9b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

