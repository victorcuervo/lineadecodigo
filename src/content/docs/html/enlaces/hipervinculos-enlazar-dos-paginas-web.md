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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLCM5U6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLW7EdRdSS6iV9ItQBwE3abkQeUqGFizem2%2BgA9VvXTwIgG%2FsmAjjSSH7yb98ZcZTDAPNVJPMNkXYJarUTHpVpgDQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB6RleVFT4Jvpz84XCrcA6EBzo9cYdx60mUy6ngEBJ9piyhLb1X%2FQd4kqGYuR57DkxpuycUpqtb9H04YCBVWsgrn5Kd%2Bk%2FpSOJyQ07i%2FAFZekPHJQNvRTeNVf0xd28ocHuWwmQEAFBEoak5Psa4VsKMCHciec%2FtOEd43yuoAuME8qui4I99hay7BIRmSU6BjsZP2i4S8uqcEx14VW1434xMDdVML8dFXvXCPvFHL8EENEq6h1bgg5mvPaYwe1C3dgM5gAFLClg9oY0tGvcg%2Fy5bjF8kXmRcHDwPv7jkx6L4IPl0bzzEimByJ1%2FM3fh86kptNrEBTcTcGxf8IwHx7zftuPSIy%2Bm4OAK4gHGCK8pLUK6n%2FB%2FwHC54nz3c2twZ9PzGAAeHqdggmNEyB2TLVwwAPLVApwMa5ZkWjj37jobEdOUwQNW9nkNBarkftgxtECXQZsVy5YvN1rVLyIsT52kU%2Bsrr%2Bz97hurWQb0hPFEovx4IwkoJPhB7eVtSNcjC3fAc%2F%2F8ozRCU4R79t9US%2FnoWSvOLr%2B6RTWaPWbawU8hLHQeDOnwXN9IMTZzGIiKXpgCOJtXq0tdPmMNPbdN11jIBFmqZYOUfP1sMHZCyDWxPJtpneA7D%2BuxRPwpDQXObBakWcMO8OeSYjorRyMOS8z8kGOqUBI9El9FCu2mx15%2FJbotkNPCMdj94smhGGdQdsAOYc1hpqZcqSu0WoZEV3Ih9QzRbBjiqAaE7kDkYGq6N98XfOi0QARo8QJKC5m6wKlCpTYAYqtwT6nvWUYK3TyN%2BVTY53zBcdlCsF%2Bk0lFLRwUmbeJnMtPjSfAJCm0ngWFijoANzgAdURCfqNxu3EvDe8RpdiqagzMkqe30HqSuWDifw34wyRqZBA&X-Amz-Signature=7e393fb0d718dc3a2c88fae9252aeb8b8178869680a6659bfcee65dcf91d6bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

