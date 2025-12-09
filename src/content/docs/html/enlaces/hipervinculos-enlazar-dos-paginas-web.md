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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63WAHZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC1JVBUN3jqpk84Tb%2FVoXYqPdtD%2FnSFusIRCbJCLCl6AiAOtylnhJ22WB2v0lzm1kcc93ueg%2B%2BCHElnsRUD74kEiCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXNT%2F%2BkU0ntY3g7%2F0KtwDOabucBHi7Sdlfwqu7I0Yecq%2FS9Rvg51k57AQ1I760L6S9%2BHn0A0631B1tjNicr35qMXAB6YNGrVkrLqjc92zmXwlFT94pjo6u2%2FJ4CPrLLpgP6RB%2FkL0YQAPx%2BU9mJbqpMkZj535zQDudngF5hUzXTUCWsV0a7UuSg3RvvL83cmS5KVcWLFpzG%2Bw7b4EB4Z2VlyAS2oHJZ5r0lQVMSBsaybguwdmzWaYjwk18kfHWScqaql1Z%2FEoRFrc3CbmCojWVHQFg28GFFPBxi%2FgB1PrcUcCgbwx%2F77L0Xgrzpcd%2FlKgk28wnSYb2byeP%2BQeVs0EDZ4tFhzOdDOZkvIF5EwcdgfshUXZohpwCPLM%2B%2FX%2Bqf6pCajoAMgGlBjh82EFBGsYx%2BCmzD6uOWE2AkQAUpxLzQ6omN3471sMJo5G09WEbELviXsfPX8vIjLVtrSPbsP9ykEuTHDpebdk%2B35J2uODCVIepVNlKZFvFIOmm6uSlUygGePLAkTd40bTjvr%2Fu2J5o72hwOYe%2Fqm80W61qTjer5ag6tVPRKk3GLByKoXjraYp0KukprTPqLJXaFvNtTW6Moclu4N3eIKX6dYxYJuKmRMxhuDbVX1AcC4F%2F405jyg1Cg2VH5iUJfF7BcowlMXfyQY6pgEE2aLi2MdYMiikDD1cq1Dj%2FZDnSQe7K%2FEtGAsL76vs7Ke3WHCysmPGq7yAWJfCe5Tb0SitRmK0ZyL5QJ4ma4bh6b4lbr460mnpjLYb5KghfK4f7IH3nnCpLaDND2C81aJBq1sMVweAADzdHnt8XkuM1l4YKpkLuMdiNSW74TffRB08t4b974y4n6vCWE5R%2B8UOqNJY%2BhF3Sds0XvPBqwnclPsrswQ%2F&X-Amz-Signature=7249ad366613584a758a509482b26ad58a0b30177d64a0616eae3dc0b215a7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

