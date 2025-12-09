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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264RKTDT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T202454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3%2F06%2FZt6snDq%2FfuG0M%2Bpu4Lyp8OgamRmvnGpw71vvawIgb0SNLm%2BET3TW4B8TrwfqgiEeLc5QQtnpXe432fZJw2cqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvIchlcM0aPFsKBISrcA2kYemiBSjxPwm32Hq4ja1fN%2BTX%2Fs3AVhbLEB7Z13ICIbpEwjag2oSEj2PZXVlPvGtc3NhpswXs3mpMNefThpV8ktvxmuyqykOPsHT7VSxBzEitQG7qkDXMm%2BciEDltXzAJauwf5KvhHu%2Fk5DYJRNUOI4tsRa%2BrTgEqP3HfQnmPsuOZ0tkMw5MIWzT7Zggh8nb3cyPQnkngrfymQYzkFANnISQntw83m9ASMaeBtXMqPZfUDv%2BYiBUEWfhiTyZBvqnIJCYBEvKba9Jqq7bYFQd%2BmLWClDshhrlOckKLH7h7TiG5k1AF2HfroZU2KnlQQvdcMUm4o7W35X6k0o3WvRZ93BfE8dn%2FvAmQBgK8FoTDupp%2FoaVqK%2Bh%2Bbr4Ewl%2BnTILIoZSI4tzQuNHDlKdMVuEbvwmRkgKljBXC13bw%2BCUIVTwMVzbacRtUwPCe%2FFMcMFWd9i5j%2Fu8%2ByKFYWJpVxdv%2F1c%2FRjGRLyusgkphE0IJh9ERLNKjtHFNzkNUxDpmIML9Ric0VF%2Bl2FODFhEhdPCEIKD3UefGV67pb8kNu5aoU167cPTy3EFCap7rvHubWs4l33quz26gAHvTw%2FBhD829dSiFKei75imDuM%2BpbhhgvDhluFuKEbkzecnkGFMOL%2B4ckGOqUBPxMFXaY8tNk18oas%2FPg6zcZav2y2A1f9pDilqqJ23Mt%2FxbIbWsCZLQyDShBmIxZtqNEjfN%2B1v8nIJ%2BSOQ8mTa4jRsItHlJRhHFkOa29XyQtP7qsFEt2i5ecaDVpoLz42KJamslg%2BninR0jw0Xo9jeWaB3HYe8Xo%2BxeHf%2FkPuWLK40U4C9WCy9Cr7yEp6bYxRwnsdkc520NY47I7A2XstEF%2Fgu%2F3Z&X-Amz-Signature=e75362031ae635280891e57bd4134e47cd2e16eb1d2750644e601d7e0cb410b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

