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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6CCYAY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnXNpgZf3UHmJnJpuG0ypv3%2FGfGjYjYPkAnusXXcaI%2FAiEAoT3FHXz5Bk609QMJKtVERld4d3c3L8ivjk%2FimGnshQwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKotYQTu%2BUhzH7AJTircA4z3PagEx%2FvNzWcmmcOOkp9FhhDXvl5eVsFrh0Q9%2BBMZbB5B6CrQhC1hvYSpZ6Ear%2B9pHc7PXso7L3kf7K1snJuarY1AEfCaASK4pzfn5A2SpKuyWDcRq7rai%2BzbExOim8yN3217fwGjUTJFt5C8Cu79S%2BskkUG%2F6eL%2B2lyc8u7rRtJiEMSNB1h5Z4RijFmVBQONYNKiPl4B2fe0eyQ56qaYb2xa2OQPiCW6Ng6TPXkiQfpLsjQnvd7bEwtpkwP1SYLhwmVbxA3LdZJqQKSgBdI5eS4TvnnGZHBQlrVEfHLCXEga6w6XU6p0JAMo%2F3A%2B8TpuPitkXfR3OpCUCn46HKQzgedYVnECvlA7mqu91HKxatQPs2hMkhzXhjNseUZo1%2BYnoa5P%2BABEkP1UvrcWkda63DFpYcmiAi%2FMi6gPAY1%2Fb9sBR9HeFdpFPQH343N5Q6uK7G2R8LqHrJnUWJABDy%2Bu6uWHbnuzakcX2%2BG82Jp3UZfNN7QXM6jevKSLSoYr4uh%2Bk0hdFkkJQpOeyeRxJn2bohwl%2BkqKR2VXYFRbzLcPWtZ5Nh56IEipumZwOvosUyZv11T5SXUdZrT2o8rXCys3lmbl4mJG%2FWyUUTc7QXL3HvVm4U8PI30G0DP%2BMKP90skGOqUB493Uflibub7osg%2FExM%2B3rZHSOwguGFF%2Fth4JRRiDqhjcqnXUlVSDgqF2UhKJ1tlYGVKOrao435MWar3ED2K5Ly3OF940zKkOjLPflmlwfhag7vQtB8FiKChBG4S5p0ZhgzAeuN8yGafvW%2F4WevWekucagb%2BY%2BPk56wgLbQX8g2iLXM%2BvF4HYM9gxMIbgQqYQaH0qc6uDiHaS0EbM4XsPTGqBu7mo&X-Amz-Signature=ccaa8ad2735e500219610a0d275d7e7fc387eeccc6112f63adba81555b0e4dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

