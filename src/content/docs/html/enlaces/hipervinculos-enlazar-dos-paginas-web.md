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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB57T54M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfOUCqc1Pu2UTgJQnwTaPwm%2BHNs15JeS29Ffvdd4%2F7XAiEA%2BzTPWy%2Fwd2StTmkJMf8daPp0wOao7K%2BJMlziKyg1BO8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM54hMAiGJdlR1fX%2ByrcA0PGE%2BUMNDu3HQzgg4Zg%2FuwUcnktLEwt%2BBpXi%2B%2Bx5hHm2qPntOdosiX5X0Qem2U408ROL%2BbUpXmJsYZ4Hq7ueW3uo%2F%2FttmG0aGKhfiyl8KNW4esJ6TTK80SxvJKnw7%2Bh%2FztTi1FlOuQXtDO6mIggUuH%2FTlon0I3V5UZXw2ogfFaKsk2LpKCKsHkRxoYShFR%2BYkCRVzSSZiB5GQVYrCzaZz%2F3T4q56m7YqoFh4KTKR4hG9JaHnH%2FPw4t69GGddCzK2cCpv6VlCS992Y9ngHkx%2BMkwQaVWM06BZKEd%2Bd4JOlONCpsfClTnLByWwXvzBYJ0dFZsEj2L0%2FZHU6eBvFQ66uthHSlEs5YIx%2Faq%2Fi0vQ5iLC36IoToauZPElN%2BOuflGJ2FRJ2Frgd9N%2BDQ01D1TB5EuYRCjXHHwgROVFQ38qWqgr42FxQ3pqqzCd97aKamDc8wwcbdlbcSukHpJzsKcU29MYoRSbBSBcg9s8YD3ZoZnB%2F2XrExFhASkiEXBaWyM3lyBCXD2BMpGakzQH04b3ka5OJmYv3Xe94rYt1aIt1JaIyaSEiNmRNtux2GspNcu2y4smM4NPXNJe11Khw1n2KdIjGU1xA3FO3%2Bfy%2BVBe5sa5fQ0NHsn1l6FjxOnMLD%2B0skGOqUBRrgeJ8DafPQXkltGo8wsYu4POa1IQlKAbk4Vr1ZK%2B9wCrL6FnzjR%2FE%2F%2B5NT6oLyCjjPptUcjvw8vgl3FindDbblgy0XiySPpnFJd1yDMCbPF%2BlEWHsI%2F5g7TsQopNJeYKATmJnJh0fnDvt1cNaAcYxNZvj6TaDqMosrUJmqBdhAE%2FMx%2B6zhXfPTfGraFqytKIk%2FWsHfXCYcX74CliDorRD%2FozUnt&X-Amz-Signature=003cd93ffe4ff71a58c7958ed0db48313c261ecdbf72e37113b0728970c3b04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

