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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77X6F6T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ9Lw%2BbR5Mtumc7HvDJW0zby%2Ba8wfWB0f9oXY1bBlrYAIgMCC2vdDhxH75Pa3dn52pS%2B2%2BW%2BUkUWabuOIE3izKlugqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVrjGOl5nm36ABnQSrcA5I5VdSTTEr4mcGP4G8yk3yyZ1eyVjm9HCgH7dW%2FpQIN75cJdCSiXa5DT0gnot4ssPj3pHRUiji%2BgkExA7PY6wS96AUCAQoevbtV0AANsf3Qx6qBU%2F9%2FQJuYt08QrZqS1gu6AnfbbJCgGasTJpH2dVDGX%2F%2Bg6dTc0vykT0oTyzB5swyx%2BiXCmBvmXLWYsYnGV121eTQSwB7HvwkTVkRcY8yZqTRO5SaOOP4UR6yGJZweAEih8UsZ4JbogEPwA%2FxOhof%2BCiJstAO8Zt%2BpvLObDE6S6oIl06YqW29Cb54hFcEyislrilbXBXoPOXk2Z44pSivm1qdhayr6ymhozUjL9Qvc4VlR9z0DDVhF96kB0aB2z%2F4j%2FXtNyNbRxLTSzsdulxsX1vp%2Bv1tqplyofKl22KiV1lc29DjdTzQD9OAA0h%2FWq7Dr%2Bskh2j0KSL4cNuY1QodL%2F7eDtnAZFg5UWWrmx5juLRlyvMp7kYvQ%2FQp1zDnC8ecJofR7g32BMSqsMLWoQzHzLcurSbCFIBgseNWKQjdwEnGUoBsE9%2FUkaa1tLut4W5BWuhglTjbBXKtuYuCW6Cyp04bDY3XBcf5KE99evQlb0JAqBapjrB1N91WejI94k7X%2FpolGbYWbh4h2MMjk28kGOqUBcPbsLtH%2BH0DrorDBdddsS3gEZDo3%2BGUewKs79KzjP%2BT8DPqqvFtIe5aeEPCRTO%2BjEb8m8WDePQEQqFY6U9i4VZrXISeLw5LhPOfBOxN5BSlsXPvLqp0bj2oayguNyqGTo%2BlWI%2Fv3WTqIW%2BQkt4P2IXCv6Mbw0hIetspAOyyuHipUCmQ2UFwBuHpOOt54DwVLopOzvt%2Fah4NNIwYsDiNGzJoV3Pe%2F&X-Amz-Signature=5bebec116ef95afc857f644089c606cf2dfc48c0262d9d324c2b0f137e357946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

