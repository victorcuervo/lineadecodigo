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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKGOOFW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFlxXY87HfENJTLAOA3YHnZube0cK67mT7PnmjUtSkQIgdIMTh0gx4zpKMz5r2IL44h4U134i5%2B7%2BG970gwUV0cgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFd7GX9ia%2BmnpKODEyrcA3P8Uzz%2BNJpu5VFkWkHUid3F94X1%2FNat139zcpLt5GXXFHEtoFLxaPIlPmC9lTU%2FCotbIacoBBTjSievCYe%2FdGIKGHpOnBLdjMb2x64eCVgpfc2Vv7gQPvM1z42N5ByC%2BJNyOwRyw9YSmIwlF%2BadrmtSWnm7cv6eK1Imqbix4emiIJYxn4h0tZVK71M4U%2FAu6PDmYcTJrEhTHZV5hLd7m4XAOj0ARjml1sYdKHN4INCALLoUe1jS%2BOrV6Rx8gtxFfpHddaSO5pSqHcoEmByvRnhA%2F2wdmGJwHbYY0GrUPOS4E09zR%2Fb5yh3ezfuyRNVcWrPjU5UVgGg34ruRA%2FZzzHltLT5OjpRHgcwsyMAttbnTCbHRUMf7OUnUqlTNgx6VV%2BL1COKrv7bLwb%2FryKyoqE4%2B%2FxITf4QpEFn%2F3KSKLWwJSxbPdBL34qekwf3JLJEtNtWSRww6LIzHL1Q9fVQlKpfTGTXUSmDO4bLOIg4Nvm4cMCxcyjb01jrnAAN%2FoUmYmg9aFha1VavdHhyeyn4V80qCEMsrQ3UCEVKkXBVU7qbYgvuQIRZQtws4NkDRxxqxxhVIXTaOXq81P1JiSb32BLY73OObIv1IOa8wJkqL7s4B%2FcGKXKXqqP%2BbMNSXMLLH0ckGOqUBzGBV27x3T35zSCAvw6tc0w%2B0dWA0xngLLUAFNfc%2BurWO5MvxLhUADuEcD0MHNoxeFlwa590HLmBey%2BzpiHacKT%2FnYDYTLj9ZePAFkIzDqcr5CCQNFnx90wVgspC8OYh8yg%2BHQgsx0jBZqCDg5FebGLjPVdhIJLwz0Z2qwnybGk8A%2FH9tMFIYRaN3Ilz8dKmOdb%2FCQXZI58pBoc7219MotUjS2f1Q&X-Amz-Signature=da8871924bafab3c6dd1184b84748692f436398bb7fd028d2bc0499b4dca3815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

