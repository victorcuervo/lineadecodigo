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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMXTPUL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrkOvrUNwZklnoUjiIJ9zcy%2BeO1FXYpnID%2F%2FuRITg18wIgWkjODtbA%2BFQgeDc5FVoxaVfpeel2LqjK7mEg0amTsd0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOypvHN%2F%2FRK8fPX5CrcA4tyUf7tCWyZuvJKb2X75A1ozNXuybnvG9Hc%2F%2F0vNXt%2BQ%2Bw7NfzAtgLr06OwXSD54cIA19433doD%2FACxF5HjwFtn3WIscY1kWEBOgOPe0u1AaIW6jLgr2Uakw0WIVDqtEnRAKbK%2FfzHytjzg1Z7K8fenqu8fmS%2BDFnqYlNrkhG1I84b3yEvEw3syKGifeAGbtq8bLywYPf2%2FTPsmJuk60MwNhIhiflV%2BS4YCKqKoSCoT5GovNtBe5d3N0Fv48ADqmHKzzWIKpSWsx%2BQF9yk5%2BMOOyQ1bDHY6yaRt6x%2BBEfAApd2cXPGsib%2FCZ2CeW4Q94TlPIyegHeW3wUXrpK%2FwrPbmixmANRaM0sGUVkRX2OgMTth7b2B24Bol6CtCLiJdAWlhd86XgXZ9Ni9GUfJDdLrp%2BSiqRhhI%2FdRKb3o20JKpLT0uDQOL6AKV%2F7TuU%2BSzLei%2FUlwA5y7Imx1hc%2BFXsXYQ2CMzpDiml15RdIICJQly4dXCQEyJvMGh65ijuFdOjOXM1d8dAGxZ9YU504ppIViWEFlvwr8%2FQsapTqfh9aq7gL3V2Fgyqu4SSxh8KTz%2BdXiwm9RZpQvoiYJ0v7%2FBhlmUTXeY4ZXV1biJHMtbR3ZxFMCkQPEZUQtqqSLnMOzH18kGOqUBfX7wi%2BKpVh25%2F8wvdaw2TGeoBgX5JGv99K8G9fSyh8PmQW7D2HFAopp5vAcLQjJR2oK0I1gWEoE32L%2FmZ7Rf2h73%2F5LOgoTY2LSp3CMXu93yEIekLycFBa32lpmJqmNLlFCFPsHm2Y09Ar3yuPIQ1y4Fjms29LFwOanHQ5THA%2F33bKu0o%2F2JL6Mnofmv74nkRHOox1yNFHSyFLM8TyoKLFV2goVY&X-Amz-Signature=ce8eb37ec2f604ce17663741a561b5ad30dfe5d9fce54d6101b61cbe51a2e161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

