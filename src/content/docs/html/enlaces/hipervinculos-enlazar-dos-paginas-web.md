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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXIRN6GY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmkPQ%2Fj8xfN0RP2CErCdP3wgvdPFK4ib%2FrjYnDmnYqLAiEA%2BXRW%2FDgITc%2FtUKkkXvqskWWrnbFKBcxjb7AKxgYDrDAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUEvI7CiU52Fz4tSCrcA3DUDBfPRK8VeCaZ0TU9MRYvAR5luaEe4QFy9EHO%2B9whZncVqE79TRUH4RxAN3ZV1R1GPCWc2EGxn9lADMJZ%2FZfaSqQthrSTjykKjKCP%2BerfYQ4rvd%2FAAU0L3Jvyax0m97710bJ1buMtShyFrfawYhgdNLadKy99bsWRl55w0Fnmh06taYZ%2BIaTJiBEw%2F8WM9xzaIV0%2BsCsJDddn8ifiMgJnfuLdjaHpjRHu661ISlPHmUuXsB%2FeNxErlPGb1rfodRO2cPOLcR3gV3jULnC1fmzZzJLJoFd6%2FlPjRWp13bAw6PFwfJPvzzati6LZPgogHW91%2BX%2FVSjWQh3vzfGl4K8vYSSTIULq74mJTV3gT9Tr3LzFneOGj1ugfrxJ3DCtOq6DOMuRHzJpXPsfRyG1u1Elk3W%2FDlVBFmQK5uH4tpvxthfgijIwx6KFoLvU5fPCp%2FjxJo%2BiXSNq5FTRMIJGuZjsRQQ53wKemi4%2FGA3o5jeWooH70OyYPwqLSfTv6Be3OT7O%2BAD6FL5CTdOk1NN1AaTc3GhpYvFAG7REthmWE4HLhr297DUxUcLC5kMgDWHiYOLOrjQa0x5SE6jKB3ZN1Sc7lsNUWHcfpibdP6HPQ6mSvc%2F70PWGgKAsZW%2B60MPGP28kGOqUB7NAu7jYNHLUIMEALBVaGqmS16DT42zNahV4DDzyOwAXttd7pIg5R8oV9t3sRUv33Y0F7gMsZdKtwkBt5ianx8qPlG6kRs%2B4281n49EiifGG14yAiWaNeA98a6ftthK28EoSzw%2Fft1iol%2FDdz%2BSmHl3myX1c7a3PZtniFtevlNkk8C7GT01VsTz3X54qfP12%2FZzaDwRpP4A%2BSkMxlJOwJIl4rNzOS&X-Amz-Signature=4d5258e989845ec91e22925764bbe448beb48f26eb7ae829c3d32bbf8c86efd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

