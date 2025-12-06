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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H4OONTG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDr29uZoqNBK4tpCzP90CuKRP9asO5aE%2FFp0WYz%2Fh2u0QIfPI5FbGncQ60LIXwf%2BX5sPM3BRXSGacPg4suPLv9z6Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B%2FUGXAGeqBXRuLnTKtwDIaQ7wMQvnc%2Bb%2FtBVLCQ3pFDBnaz4G5qE2hRu6uVBezEE4EFhTCQqJUCyvU8hUt4YLD4di2K2DqUwv4Rl78GUw%2F%2B56TzBULmD%2FbN41uVMQkflk%2FuLu9pnIhZ4tkGBQ6gCOxYeOo1zr8caqaKXvDeJ6Hy%2FOGOiPwgu1w399%2FnJaRD52T19XYJ%2F9wQS6qdtTnn9Xo3ySj77IUZO0hoNH5rORw5RLiPTra7btXmMeOaK49Zpk744sKk7bYh%2FuwkKBxB%2BI3Skubf2WxCW2qQOw7Jwsv5hOvS%2BliXYvc%2FaU%2FNQ3a1b%2FeW85yH%2B64t2KVBL8sPCsCWObJK6Qif0%2Bt8%2BqI4ZYY9SKWcZTngK%2B10Fbt66JemEzWSZr9e4E5AR%2BQDyLAHY0vfgv9ZitflAZoMEblDoQ1fi8f1K1l5hyO3PyxDGwEcXIwKkIUcQkxDTZUvM1lNMuXxtzdGwGS5W8Q8qu3OnZ8E6uRLjJnwL8ERgEsFDfrfIWEqd2HFAY0xiK8VfcqPnHpag%2FtnzHXDWWuh84p6pjBTbIuydX58JALDdYrG6lDfY1wCXPTmqbOYMeLUB7G3HtfNgFZoUdcoucGryY4qvMg5MqXR6ZR6WpFg321t5J7Tok3ifMuJWByfMPxQw19TSyQY6pgFzfhxxN6cmcK%2FSkG%2BsMRSPZed%2Bze1XOsBzCpcPvStCIIpnNf%2B8LCCx5JX2n9jlqb%2BzIAyQfPAHcDka0SDCrffqnDIzkQnQzFY%2Fy6vsYgTREVAWHXlYlBJLKQ%2FtuXqs73%2FnUh8pF5%2B2%2BVc0%2FyX0fytdq%2BBUO1lepf%2Bmqtmr2SFiqLl0nBkXIHhnD2L39XpurgxuTRrjbJjUxiNiD1xubKhX3tC2%2Byfr&X-Amz-Signature=d95a993b16a67c3887c7511547855d2c3a64db968d502c25881ae42cebb7b70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

