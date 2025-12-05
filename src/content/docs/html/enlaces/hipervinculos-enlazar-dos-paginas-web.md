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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWL4URK2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACxZ7wileBZgAmEuWmyfhEOW5Vxqcfe9BPlElIOQdbMAiEA4zmYUpQHNtHp%2FTUN0cVtviV0iuuGW%2BrMsUaHUux6N6Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAVZhaV2oEAazopf3ircAxyZYsJIqb%2BX58VkQwgrdEkP45wkR%2BLqv6EE84cqbHvOp%2BFIT1SY0mr2ETW8jggcHJcv7xI6%2B%2BPSG3gz6c%2B3Gvvj33YHCjQ1DOjG741ScPCj1viZsWh1e7UPSy%2BbyLnTDQFtEAofU5kdEYf6hsS7RKVmiRvd%2BNSwRXopEmWWyqkZ0KbwM%2BP3pqzHvzS6zU6xVkLQTlniiSnAUMZjzcsPGmmZwugvk%2F9Jp5tmpwCOyaEaJpSHVisTzYwv2gnfk1xB7adPkP4VBMes14FkxcMEzESOiz6bMgmI48yA7peSWazth5LLHXDMD7pWQ43u5MV7g6UVBUOMCAKiuOA8NUb7PCWh1zh81yEvnQUkbgOLId8pE56Bt5%2FX%2BBYD9KYmJxD8aIbLoV8gC6ORvkeUFCyGYj5k3P45I3lZe6ra7jopbYeh1gX6AcJI4KMFeLEq2eTdBam6hwfWNpWSEKf21FsWnKPgQVYCOpiZw78EN1%2BJV5BSHeGqCZem0WTjCrBRitBqJuc5KJcfU%2BlYA7QceSxiKqnauuDOKPsFoNWayt%2FCpChNNuhq205mrHgyEUu7pLaxYPiDcc0Pf1E9CQbC%2FAuVFZVIMMnYGXz3%2BEni5K0mLpcdisL5AW9w0au1wFC4MOrLyskGOqUBzlkBu4nVTmExddpmS9fdKx%2FtzIU5JSrnS10Nky9enrK4b2QD3An%2FnM3PGzgi6qdfZ0S0DTlMh4saZwzFseqR7pCtoGDRXtmAj7KpQQG9suYOEKd5pljEM2PJ9qdrrd5UQ5GtZKzV9hdxd%2FM1bgB4aXSS7T8JST09XkQ5Ued%2B9%2B1XCN7sJ8OQTR7W28BTlODBRFQHqPVvc4WRhH3gDGV5z8ye9bY4&X-Amz-Signature=ca5bd39ba1a06542a25069d159d2fbb2c6d5d8268b9a0be6830707441cea4f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

