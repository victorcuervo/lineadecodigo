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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINQLK4G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAa4s%2BWcBlN8uPHdZP1G7yLTXv3ZugHlOJbdZsy6ZT2AiBKzRlBbwEeiESJpHhrCMJEe9bBgZrczqoQm%2BtkE6bB3Sr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQ1ADzQqvS2RBdd0tKtwDi7hucMaJtgsaWcF8%2BwKKzqQH%2Bngpdzija8jDNW%2F%2FQXpSyqdiV9wM8kQN%2F5OjQeBmuquXdbEw9oR2YxU3xNYx30zHpiDDS0XJXoK%2Fu1knDDf5Rvz0atjQP%2FW6t4Xps9ydhYCUhoBtkWYKYFN2VhhJn0qKGm2Ir2gpLXlr%2BBToUg5N7l7zNalBdghRm%2BC4NKTVEhY36SKFnyJhyeSCy3h83fKmhovlMligaq1RJv68XnVdE32e9JLRT3mEfOyz5Em79M8tyYxEICe%2BQ80Zn2SAAhUZgz90xA73EvxENL2HP7EX4bSVqOnwQXAwlO%2BzNRBKv5UKDJIBLIcv1ZZCfLgfF6txE8v%2BCVer46%2Fuz4h4HZhaoKmHBHSfj0CG0H9kznDWTUAnZZCygkIYa5mMEb%2FK3yIcC6mjVrcazsyqCFyA%2B%2BnXsnhBhrRPNiG4nENnVGXLUDDwJjm5pt%2BsMksApSo02FrHlbBizSPgKHkYj3kFKuiQKGRy2%2BMElohKJd4798JtoVsllzIN3gbx62F7iQwFci7ESt7L4s6XTCzFcg7VpyUUfPa1prlYP3Z0dvpSmahcCc%2B6GmZt4eYy8Bt3CZgO%2B1%2BlYVbTCqimuVOEpBFPguHScXGuHYLBBCQ3e1swnMbNyQY6pgExEUdKRo3A60Kbl%2FYd18dvYz0b%2FgHfLy45Kj%2BW4fvIa8aWEpPJwZ0R9djqhFrysS5B6Wt9YLQAqDeDL99Nr%2BVTrYrFlkegUQH0gqkuBEN8vq2cVQPsnEMeEYbwdJVAldXgQwvop4m7CnNRbcmK%2FQXidqY0whzLHsZPw4a6KIIZn0Zyq4WCVv0JVJgoNiHqZsuT6fxioEQTMuVnq5GTfB1v6ZkiMgC5&X-Amz-Signature=11d2ee3af00b8c23b328e5a2583ec2a044dc1de85a3d73f320784c3cc6f4450c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

