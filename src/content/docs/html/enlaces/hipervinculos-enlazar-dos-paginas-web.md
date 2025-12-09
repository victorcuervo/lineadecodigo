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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVDUJODJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM380Hn2ZXzA%2B3RU%2F6sdPVXES%2F1JwpPYOIkAobxLjWqAiBrveqzwWC2dZNyhWREyba98YQCOoYGSGCII%2FGWDK4FMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrIhTVSrUXhyLSU6KtwDYGb%2Ft4no9KQfdBz16J5qHkQ5PcuIL8dx1F8OxxsY5MFk%2Bt04sqz8t%2F0ZdIlL8l2PSjA%2FvjhhB5%2BNs5ELK8XjpJcY2cACbcO4V%2FXLxJwMt%2BmnCNtUJpyafHhooeQjgAvCZyariV5juGFKcyP6KTpWyiz1aCVjRWm2PAhMNfyJy22BgXaVjOCAqXDGHrw3YuiJ%2FR6EWDIBdHuyq5kNuBuK5v7yHy6r6mVgBEUWIJm8DS3irXHO9TSxj6vAiN8WfDVBs0%2BMmACsOd8Qmy%2Bso0595sIXc2TWC8BcVvtR6ZmcU4%2FfmTdB8hzYq%2Fc%2Btp8htgAO08oPvp77Jv45L4FEoO2%2BcJbWboASWlXjohgW223%2BOp7h5VXt%2BnTKRNhUzNe6yWWEt1t6Vkf%2BqM0AYC7yKtfH5l8nlbQQ14oJaIgYa9mRyzaR2Xi3aWON3y%2FKqLgRYtze0GarsHVSoD5Vni9VOab9hYPNqEKlOpPY69qjlZ1PKWRfyi1CGcTH%2FyrCHHEQ5UP%2BDyCB34HpJcfVcWFls%2FdROBHkB4fGp2O%2FRu7iGaYmvJTxo8OZAJtrkOqR9v3%2BFePQu5oEDJoO%2BgUpkDZWHor39hyTCXSbhBSCvaIKu36DwDZzDrzXV2kuERZkACYwuLzhyQY6pgGH4TENwYB8uScwK2aqvo7KcSZQLoKgkJRnsVWJlZNoSUCLYVhQIJ5nRKIAy6MGBXkIEwlwFRyCvtXSW4xrOO4o%2F%2FoYjOF7xowkDZyvjW%2BE6GUeq3IGXO8BSBnoirSHECgZp2A%2FB3jg8j4oZz4Z0n3slKrvWEMCz8KKt9GEI1J6ejnn%2F%2Fkxzlz%2FQ38tHxLTASokyoGQZGcaWdq56ou8Jx21hHSeGOpc&X-Amz-Signature=957b4c994877a4b0f7524013a8a24add8dba25c31e9637ce50dc25a1e75021c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

