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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5BM3EJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE7w5enxmAHWsI0KaqwxickIrzgadOjCMX6%2F2%2FSo3IaQIgQBm7WT%2B6RrdTOoC%2FD9cQBV7%2FsOWjwolhB%2FCfsqgauaAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJHN0JDzhFVLeimcSrcAw2%2Ffd5qUcjRZDRPyJbyKzostbXgDJPhT9mWtGkIGd1lthKSSXbW9552y%2Bx0U51iV%2FL6P2rf%2BtRXT4qaJnCZCc8A4VQG93CzRmqhHVcbFem85p%2FPVCjfSfJ%2Ba8bZPI%2BmXV9306aZhz0d3pYC44W5kiMUQEmuqgMSK0eLmB2%2FgsjstFmAPRar9bFKqfXaZ3fUQalbbqKr8LdoHf3xnMSRiTLkcMIIePKGvNKK5HIeKSKiwn1aiWdi%2BwSUvy2au2VAVclkQ85UzKODuepZJJOMryHqV9%2BJxQAVmhnVHchsTJJRkHVfst40n46Oc42sxYqyPyN2Jed3OV2Vk8YZqcmrU0z87KaAzRH9FF8l8HuvupUYEKnuMu1WAwPu6epM90vPfSJrqvLPf1c1bdCMJYFWkNN6B0KE4EsCJUMLMiztrMi9RI8L22HkfTLXaZSfEVlnZ2fj0q%2FJHZDzdH7WeLIHwSUnHxQp1nTE4UMhtRj1lj74KjqlCMIUGRRjEjcKyGOPgaEckzVuJI5QJvctvy154BUgeuB1U3IEb939TlbzlasvvDJjcBq9mOIqvIrn0RhBtoNNpyxETiTd9sHneQ0OwDRShB1LQLsMf3MViROuZzmJeSXWcILMxUWnC0Q9MKKZ1ckGOqUBOeXjDGahi6qHM3Ob6Pv3wGfIE1t148A0EcCONos3RAZDL4t4C0wEIabCVY9SCFcOZUd19J%2FTHWpk04wAE4nM5iqBGFzdZJg%2B2xda%2FjnFsjS92sUSUH4yZ04%2BqV%2FDZAqlwVfH1LDCalVW53ki8fDTZch82i%2FA88h2tVjd0e8xKZ5DaJt%2B5oi%2BZVFFgqZRkLDApgoPORCwsu%2Fn5uSRaW2P01N%2BVokI&X-Amz-Signature=c4826a4046dabbe723be08024af65628c0c5755d9a08e43b401da569328df64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

