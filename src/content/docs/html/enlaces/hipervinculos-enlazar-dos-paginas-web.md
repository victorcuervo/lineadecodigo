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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6UBHBU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM%2BQF2qOafJQ9S0tyf4TlhXHoOnspui0pYwoUEMmE1nAiEAtLC7Q45bvwKxOUhxp7MrkDTE2qucDpPYs%2FJfxNfz8BEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCTkdpqL5IG10UtA5yrcA047Df6Z6Et%2BYWHOZMUg6inMQOBzhn259MnaZqPtkN%2FXGXXjRLd5OWG8sT%2F5%2Bj9%2F3peZU6LQnO9cA5C2JmFqgmC7EsSfPeEM1YziSd8FEI2%2BrQ%2BZXmRe0zVaGGvS5kfK3p8KHp8eBDRkcwf64vV8K23BrOTTyBygGcDYtPv3aE7GeflCXyLGtyJqPdHioNXgTFNpOMvEtL%2FgVSQS7qiOghoqVcwDW8pDndqocEEFnFVMjM9o8M%2FCo0UmaYmfvUr1UcrafmFDMVs3uhXJhluhso7xbCMck6djP%2Bsc2CJUygNDmYC0ju0UlsYVfVRXIHhukRqmNrSAfaiWGBDQGbsMFJx7ccGu680lgRLLXAq6fbNIjcQFyQjqIyo0nU%2Bk4aPk8XDgPamSfQPZwnokg7ju394aXaRAbTLzfuwu0RHT9%2FugwTmpNfPBRKlGLp%2BrnuiqINxfUG5%2FhmWpFd3mz81dCqy%2FnRDHd4GnAq3WvVjUGp07nLxMGIsp76f4mRbmlK61CTg1pbxSnLe8OuISJi1AHs0FzW3LSbNgJhSceG3AXSnfkR4BEb5cKMITQQL6yBhQzbeV4sH3v3EhFq3RLquLck6FiCrtuPWa%2BCxsL5WTerovZav0EFFN1rE4IEDdMJzDzskGOqUB8tzCb5Lu9tT0F%2BwTL13xspSapIrinhNGyokWyv%2FNt%2F8ozRwgPAxojqGU1KhkI24RtMrSNWpUZ5%2Bq4s%2FhTfe8q2meD87ZbC7dBG3E8%2BNKooyAefasKFJvh4iTJJCyPpNlm7FvMRoi2IV85f5J1OJ3OvSadBvrVJIpkHHJcIDa6sl9lEdSpy4lWCVymVsoC%2FTfEoNY%2BVp708GAX4GxG2ZFoe%2B6GP45&X-Amz-Signature=a03fc2f25417f621ae7e6e90a31ec0b7501d85ce2bad4b735e63e7c03576fdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

