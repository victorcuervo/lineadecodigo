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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYD2PJE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2%2Br0ssif9vWcrRIYl3rdRKNrV33gSKnZ0V3NQuil%2BowIgGq2wvTywBlJId03VvgAElNpgRDxuBEeOezWZKDf%2BFaEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAPbSb33KN9hP%2Bpp%2FyrcAwj0sbeLbs%2BamXZX465R2ioMPLW96z7NieoVG1MkWOHR0S6QUcT59Tz%2BMdB0s7wgSM0awZYuyyKZzqgESXjCvjJemMWqaG%2Bdwhd3mGKkNK2EALUlaQ1NQV9%2B2xBNw65piLQHzX22Gt7TbfWl24M1gKynUoHcxCrbj1NUHmBO590ky67CBMD1qMXkbaYPRa%2FRIrJyCyw5dX%2BC47Sl2pGy6jgpsXKg9kEdh7bZgJkVoGE7Kbr9irurEaEAMdm8p5SWahVxufTpi%2BoeXeKgUlnodyoh8FwRV7fyRWs612LwXv%2BLn9sjfXFKnVZ4uytB9NGoPy5nbyaAobzwfBxMoZN0yhdP4LDJOcpkR7267cFU3fe0coM%2FvbfGb1X7CqB1XpwM2EQyqust%2BbxCwajotEbELw7kBTnczEP5sRhwmqxVdT7Kob6y6Q%2BMeRQSWkiy8Dz4OvLLMQiGMfs03WVkXv0MmBAAAnhE678n5Zr0VeMiK2%2BCTMBX3OHDeHSm6TjY0X%2F4pHcS6M1p6c1OnkrKOK9Dh4g17fNd1q1nhYm%2Fzwtn87xoH%2BHZUAYqNCXNi%2FsKu93HHdsfRWKcxsXYSIQN5%2FHzl%2FzJPzFfntr%2BX5dar%2BKu%2BCRJjx8dcwJDFlxKBaycMK3L0ckGOqUBn5WiVggmluwKM7UsbrssRNXYpRhLoqirXrnX97dl0gHaK7vVXtmoeiIeZn0vv1m%2BctHLU7tJmDg%2FczL3P%2BIa0G5DKeei1sHtTf0Ij1vivGxkZm5Th5Ayi3AEZJtHgy0uXcCKAt5HUhuf7R%2BnlRiYMf5IoI5hpgvDPA2sOb6VdcVBMjOfu6d0m09t%2BpbOF3aeTepaTJ%2FOYjVvcuzg0QAg7me%2BLkiC&X-Amz-Signature=7a1f6fba2780703e491f461f258e4e1a0f555569274742b94e3d48a1961d2d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

