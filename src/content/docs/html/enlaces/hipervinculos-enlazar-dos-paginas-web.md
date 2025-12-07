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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5GODFS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXkaNWpbB3%2FjA9d49nsWpNCFRfLxZh7jK9t%2BzcPKnQRAIgYN%2BAtjn6KHmlUfSfZYg0mGioFHB5XJQWOeKY7oBjDhUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWepvQ4i5jG%2FP67lircA8ItZEPRVA%2FYdQGISadH3hUeGt44TpkhPq5%2FFfCHK4ZFGKcaKUzi5WgKUOG1MClBtijOHdN1ClNo2EW3sQDpQOTpc5fmju89wIf2pzkqLmMqJ2cUywT%2BoD4nac6vUKyw6xhiJaKe9VYO20q8hoqYEO3QZiWmH%2BwBtqO6gzhh1Dm3Q%2BR9w19P04aQbO%2BmJTd2m1KjaofYqMVk4lQHQs%2Bxw40S5axJJOAlhxRxKZFBoL7ktE6akYal07RyvGD049BxVeRgWAztC%2FUHh5hD4zvS76SogGREi8HVt4rz8wroOE%2Bl6pU5fWVGHGvg0QKB1m3GZdieMZcXzmMpfO7HLzRNCrba7kwycQutbqVsvXdyNsLJWnPBIPQUNHT6X5zqZMPVKf2WK%2FqO7f0lgCGzpDgfzt4zHX94GDhut%2BKXuZfHruJ5tg0%2BbvVnt1klfheYISLf2onvAiNwpgJCH%2FkmzhYVg4VYk%2BJrCmFHLbUhME08Fo3RyWnJt0FGDpuXw86YMLm5TqZp0EUp5UwHzLYkx0JcEIU%2BueMd%2BQ%2BywjMTolghLn4Ko9Oy2LZdKpHgRNDw%2BUPN9aJInyq%2FAlfQi7PGDAoFhenZ1Iht2aoweBVgkjXfFNIAFU4uGrnnY9cfOguBMMSh2MkGOqUBUtJcliO3Pu%2Bkr7vSa2EtvAzSh7s5TD2coRuDgDqsCoeEmBY9hIiAdcYxr725Aod6T83zoqsgx2QQKnsjLdL1TNZ5cggA7DqJBEpuCDfjTXwvU9BpCzq8E9s2IGQ2UOEqPJ232z2RHcuDIA4lFAycXSxnHiO8WOuCShKHMu%2F6QqBlkgTnxlOBUXhQK1gryCXxqXfTsM0matjuDQqssGn2M1hnfUqC&X-Amz-Signature=91b553ef17e742f6457d43fc6b2ad909d6f23611d5152d91169f57fbaba92261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

