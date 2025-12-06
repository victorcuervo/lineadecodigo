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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMSFGYW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7tZIT4vtGnadJk6%2BOydhrplJ8h32SFwauW4vPgC9unAiBJyQLdyycCCf0KPhhWtfSDATYkXaR2qZhD0KL%2FsgK4iCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMTALtgRlpU90Vm0N6KtwDOb5Oyyi5Zj%2BvAtzH5Y7nipeqil67Zb2E%2FZtdU4iXKEcFbZhZZVRIaE9%2F79DUXmOTLflxN8GPm%2BHEEqzPBaThy2kkYXYPDD%2F%2F6DdD5LmppD3WA0OEO%2B2GkO1RVKcalrCF2PvFmBq97r%2F4XioyTplWVjJ7yxhgIicbVOlI%2BPsVGQTF8ARKNlTzb88Cc4MkFcRlTOExpfjfG3aTqSHYQdu2dPfB7Etm67iRFmWC79NSkYIvGRkE7W13tQ7tbBgBdjsUr5519Wp7GgWWEhEK0TNag7X7%2BJwwALqwWncAnXH%2BB4KFAUecpm2ttPRAyes%2FE31bittK76aZtSmxJN2LBQ6%2B5Ba9FY0hjgtp5MrSFWvv1rNDUlHTQM4Q%2FvkyUQXQm5BObCSZig0Yo44r3DPMNFMllv3Jvr2K%2BTSnyiKCrpFpbgSWbpSfVv45R9AaCconGBh%2BoT9tS4imiWVccOgiaA5TMxCr3fqwLS%2F8YmWj85AIIZD70YE%2BIy2Nt7eyhR%2FCgp%2FsGMrZNhnBkbRymHMWems9bJ5PxrGAu7p8%2BfwRyOTNfsx6ooun73pqD0OMr1z%2BG%2B%2Feat%2ByhNDuy352%2FqKQcrk8%2FQE4rXhEZ86fCmzsEJeag5CLkJ81hH8FGoV9Pmgw8ujNyQY6pgEDqOEuKQzV2kyFM8sFnG2AlLPwgI6I3DciwJVMsn3RxAY0Pof9hgY2KHkx9njurn9lno33%2FRqfFCLrBnNwONyIvKiNmuaUp9hCdvmDjeNCy%2BUqRpLGTcZ8d184u9Tdo5ZErcgVOxdKfONkedIRDz7XEVT1HMe6rHW650U9MMhUsI4YIoKM8Nd7iFYORv9cJLIDkdqVkfZEYmL9TNwG0YHlLyJgBdC9&X-Amz-Signature=88a2e9d3ecc1ff8cb4839f6858581f54ca66da1ef3b7c899e31176d1b964b9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

