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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG5QBICA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCTJUkgZXdw5VuqBQBpr0J%2FzkrUY2VeZIjSsbGuLWcWAiAH9gK2zfe8ieAguxOBUcoVmerfNx1Y3XtJTkuoMmu0EyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdKmrn8IaAzbcq5jTKtwDDbuwdEEHhlnHWKxrtN3xRcz7C4NK4fgHPbnP9Bf5Hjhnixl24ER7ZQcBlHUFdizl9nEN0qd2kt3GGff6dn1xv0NaOd%2Fub7840r%2BRPBkgNoyKXBqJFVGhTpZLBSElbSLKnFfnwhQRg069QNBv2hvJcQFP4geaRBWE5jfFJ5uyv15R4L3iF74VT8zJehTdYWB5n3f%2Bsw%2FzA49QwyGz8kfKUH6RHrItogxO7bcjRevu1ik5cC6vw3iQ%2BvET9a80HBtaY7g4fUwNmNv41EfZRU8cAMySyelCM3G6TYfNMTE4gbSS2FoY6mEs6Nxt%2F7%2Bd477ey3ANoHCz%2Bu3o13L1P1FWSxKzP8t6BfV0F2N9Dl%2BdpB%2BWziWoC7juCKf8q9Lxs1iWewdcodQa%2FlBYZ0PZsfh6lrqFJEQ9MxZxIaPuEX1YKVbQGghzPWj7ukop9Yi7g1yIMqlskHpjbkp%2Fj7TIQmzg1K3QaAHw1orImYBCgA%2FxYeh7D%2BofeoAcxYMIncBRLsIRrUHSZu9V3LiBoGBVv%2BoT5wAGHaBxh1bs%2F1yZisKSdvtAW5HDxZllb3sMIW6X4E8IhSNwb832n%2B%2BIDJTIhKfknVIM9L2SXxNaafygK2lHuVdPgagWIxfIs7wUwYcw4t7hyQY6pgGPDCMTVzHgobSku7IgIWFp5toJ4olwD2y2aDFyHfUnAXg3XV3lq0I7NEuyGLoC2OVesyq1fwvnm%2Bo13PhZ5oihV7CJHuwE5lvloqJ10xw1r83hnQPVJLesXbYJzsnpivMs9GP3nt98jItFhtploXWDEYdxy4NoO5WJLoET95A%2BgK10Dsqx8EZ42jx1hD8QGKorJXfWca4To%2F0xdc7WydkCXX%2Buc8wp&X-Amz-Signature=ab6aeec85887de2d9cf5f58ba7d61cb577dbd29f4204c591997864752ca9fa28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

