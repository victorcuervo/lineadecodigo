---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEGQGNF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEae66YnbmfVF6DVL%2Fc9jRwSeUyNVl241qiHCSkG6NuJAiABjR393pjI%2BM%2BRQrswPFpuUznMzm9TaOniCUDBTORprSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvOqcClbpRUpoZbFsKtwDhJyp%2B1ee0xo1bjIT11huFiTbD9UzEJzCkuGHnDtnLpRRpdgH4BvkcqC1sP2bS1E16ivec%2BOTYirZ0n5RZA0f0eFkD5Prgim%2FGwVA2vTG42Le35S4JTNqn55bna7nc4h6M2bPLt4vw%2BgrvYl3eep7KovoLTBX5VAfz%2Bs1lwlTlET16ZpSdjcPeFQJpYA4VmdwOWqG%2BKPTwAHY37G2pvTD%2FnUdr253lyTLR6RJBOFNxA7b9c5zadauvIDwMipCWmcDvnnx9ruyPjoohyXwJydfqFwunO2zWhQN%2BOUC0QcI7KsfGmfbI3MM%2FVId8wyTgIbjqtIRUP9xSCV9FQGJfrklO5kUSNDi7V6Znia8WEq5UFjYEKkypK9yPvlogBMUiICHL1KAJ0rL78BaBsZrzpssVtF2i%2B8DtGhRobQHnVHC4Or96HL2KAaVg%2BGwHoaVFwKSiTnjJqek0rY77bGT42oovGNY01JEndMFZhmYMlDFMDbCb5kxDWUJwu6aSo%2Fi4hwBqufGKQrIQR%2Ba0Ql%2B%2Fodwbz1OJVEyp%2BovuKWB79D4qklJnQxzDmj1MDPIkaPo4I%2BaZtgOaJLRoP2azf6VKRxm90q33r2uwQSaDpk8E3kBCmSpndHIr%2F5RfQnZM6Mwg4TGyQY6pgG%2B77QA9aoikv9jlINy%2BL9DE6Dm%2FZCMc58bQKlasORuYNejpakegxnKRSsinn2j1XJDrkl1S5UdQ8vsgqneuPdw%2Bj0xDKbwwCOLTtpDaUv4fom6hup%2BcLy9Ut7m58Vac1GvnAryTTmgyM5D6sCpwNBqQ437C9lW5bPQwpEke2HFeoyFHQMNWFDQtOHqPnI%2F0fG%2BSLP%2BI3H0%2FfdstIlIPJ3lDPtSBZHJ&X-Amz-Signature=322244f583007b4c12314789386dc5b605d0af016c2b2a38e866ca9ec1012e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

