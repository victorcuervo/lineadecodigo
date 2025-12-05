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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBDIKRD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOfCyulwS4VoTrR00iDJdaALCYUklk0Wv5d5LLgTJWFAiEA8%2Bc4%2BOUcERjINfPX02%2BhxxqHK1zPIMEuA2GyVc3HR1Yq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDO3jHilbiRYqhfwbLyrcA%2BSYP8eqgUje%2Bs5u6mgx0rZZoLiWYu%2BgkoLhZxM3P3bWzGG5%2FY%2B7GdXLo9GBHEp%2BPZ84vDOFV2j%2BlsM5OhgVppc%2B1tF7JM%2Bi%2FIyYNmFDld94ANdMSY6B2AMWbJh2DQybgeR5Ljy1NP2kIDPeGRaWgKFf5lXE%2FpEqn737VxXKDC%2B6Q8yTBZNZFoFsuRenplHYd7gwp7PcYtlIBEfMH2CR%2FLQ5qzSn%2FbimopcDCSO9XT8b75DHm6%2BLdXR7ouHlYJXJIXgViTLPfkG5GvIsu%2B3RFoA%2F3mWGbD9JFxif7%2B13uUHpL4PnkJEyJAmUkq85RAhUeQLGX8R7LVvICKzJzpUamy3j3SxmABcP%2FFrIJujiMh9clwaDtPNTjDhfxPZGoJMqxtAG%2BXo4xuuj7r7J5Nf1oOpdBAjZH3NmsJVFw8uHrXdF4c8du1CNWarWPDuvFoWsmlp%2F%2FblcAU1tgWloiWb8Tm2ZGSsWfQ1H9Jq7t3H65mj%2Fr7Tcii1yXeGXSeKhA4V4SYWs56ZjRAgjpJsqj3vdu1%2Fv9ysvla%2Bw75x509vEwoiE82K%2F2WH1gXwXP5%2F6p5YZDMiFrx1xqssRzr4FId%2FsS9X3H%2BmSp6C6yPPPxethzMtSbizBejvP%2FXcx7d1eMLP2y8kGOqUBiIETO7loWt%2BsEP5fnkNnYeVsBK5gDpABr%2BYVpCs3U6HJKVLqS0MbqLAn7ctphtiP1%2FQ5TVqsGgZ2YH5ClSZ4WMstDRURxxf5sJVfkmlbGSryy5QPPwNI547zlKUYrze%2Bjfjp%2B8MYntGH%2B7Y9oeELRyPYL4J94bLm%2Bh7RxHCpIaPKFT5dfaCZ2ndBHpQOjUfOJjQ2gR6MjDK%2F9KwqU%2FV%2FFpnFwIKP&X-Amz-Signature=43f3f56823c040132cdd66b718fb68bf9e44bd4171ddea8cafe081dd98d3acf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

