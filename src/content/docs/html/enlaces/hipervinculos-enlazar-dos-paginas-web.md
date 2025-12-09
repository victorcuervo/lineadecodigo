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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENEKRZX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxkUQ%2F564Lpo5LF8JB%2BGCPde7KfwASj9tMdlH1AwYcfgIgO2TP45%2Brt9PHAUSWF8K%2BZeiLEuG2%2BI5dwcsgVifGg7MqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEC5OsczhR6kaGy6SrcA8Yc7VZgSrfcFuKIi9uVgOk2LK0jEegiejKkv%2Fquo%2FkvUJQj%2BL%2Bw8l6v5%2FrgUEjdOQ2mmEQwG6edm%2Bdho3qhZ1N89wS7WhKV%2FdM0gobv%2F3T65YhCp5g8%2BlG9Q1MDR0k7xGQIppEXrF8NNtIcDrwN%2BkG8iMZRuCt5TljZF21w45OrlzVQPna2IgDRqonmCoBosY6biSdKYvTBoE8nBmyHDn5uxXil3WSyCA6D89vf1A2ciMo0SUdNRa4lkw0u3NvBCvh89P5eSagiI7JTvgrvwG6K3dVagSQgo28HgsROdlPwsmgOxcfAlHkgQflfh9YbHSN0u%2FWMWCGoWBS39O8YLVd%2BkBmfW8jJ%2B5RUgu%2BwLi37vkYDrTxF93CADmnEASyIaOK2I1RxkjS3G7%2BnOUmNXhIFMKLH633z69iaUoGmqyFYeNW0ncFwumrUrL8VoRI4H%2BBbdtlU1lIT8vZoKZaoHtyWA%2FAVMpKAH3%2FJQvIfFWJ34fD4L9QnmUHR34jR7CtwK3K7M%2FeJcqvoRkkOqaU1YANexfGqJr105D2UM%2BRxO2YK3gyg10L2Tm%2BG4fDyg8sHtLRHYE0bqnYOdzZJgfRy4utcUZGNbV5Iy8VmduV%2FA%2B147Nz8Q3rIjoPSQczxML7e4ckGOqUBRN6CABDXbzaVRmUfSvBXigZ%2B%2FdHEpOw2UaO8DOMA0dXtTDF8fpRXbNmUhKeAEEcw6sJXebSp5vKwWYsqBI7FBFNSb8E1wiq%2FC5ooIxWrdnphpWfJEPK9lldv9v5pc71sVKT%2BIhN%2Ba%2BsXIf1q90mxdN%2BxorVFEvKe1P%2BMUZg%2FrqXgEzdrNemlcAxbo6xeXQELmoNOExfdKTIrCejHaL1s3VhB5O5S&X-Amz-Signature=84fe2b80679ba17b4cbc67f8664b50e5fcd2f9d51132b3163075fed9532774d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

