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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CDW3NM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHUSBRNsnnrJxLRZ%2FEIUM%2B1Qo%2B1sPGq%2Bf5ACiPJfAlcAiEAkGOWUx8Y75u3dYYSpEzIrG2Epz0iEn2lFRUIjgM5sQ0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZJFOOL5UzzgLg3KyrcA86QNwqmoQfrXbZT0ITU%2B5VkSjTmvXWfkEaTt2k69Ld1Y2O%2BCqj2tys%2BXBNpppsvCmBswueilbRUQ3q%2FlE0bCAFP9dqBXp4HjCJPP1BSNea7wOgpkMlOBSc%2BXb5VP68iNUQnpbRnsIx0XjdXYgfNfGGfC%2BGVZpdo6FrvYNM76AUpsbRYTBRguk6QWgjNmtK8Q6GcJelluekxIo7Laa6%2FkKzz7KiGGCTaVVtO7sYrpzSkY0RpLvoDmd1kqHimlH3YM%2B9twKOXCkYCyVIzeF2sTSHb%2B%2FIlfjpcPuIlr3XyCpj9mrm1b%2FW6Zil%2BQh0GAbO5PjPeL9vn6xZIKCARWY1vrAE9tN%2FX1tgC8ovyWt2Tx5PQSkrra9MGGFk2w2ZfqGKCut6uSlOXEuSo6mgQysQbs8%2BJpKAHJ%2BHkpR0IUTEji%2F8vYCvAn4ktR3sK0grAFBJmIRF%2BiA3KN19kTTRw4jU4PgTLgDiirYuTOYKwRuCVxGthKy3O3EUbWHjt3fXPjgpEtUU7O3EVCDnJZ3ZHi0xrPUgkWaqlbmNM%2Fh7DgLgSUwKP58eVgTyQ78GF%2BcmauHoduK1a5%2FhBTu7uiRcJHAYBvfzc2cDWRDNpMo26Y71sdHvOHr1gZaoAfd%2Fz5yMqMOPv2MkGOqUBYytqWZFKSc4lVCVAjgVfDxt6M54CFjFT9AuBHM1SDuJTtwmdekafmgDVrgX07Nw8DPKHQKzcvRQPPUMM8bhX2BLylsLrihKwznaDBdURzWDeR7amUb8kS1iQUOPasjv1Uz%2Fk%2B898tcPwQBShh6AOs061LtE1RDXIBdui9Lj%2Bnk0XD0vg%2BhI158bjnEh9kkTPW1L0io2AFDY5vOaKAwAu153Rt540&X-Amz-Signature=302e829cd47a8562211aaaa604ccb4efe3c1ad34fc73846d7cfe2cffd3e0c105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

