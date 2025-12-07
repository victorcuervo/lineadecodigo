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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7NWUAQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHLEXzZu7iAkLBJ3kriwqOpGmY1dOxqx86qDGknYSq2AiAcNtnB5S1zjQYZc%2B9EH46nablMXfTELlKQHcMLdCoyQCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHY59iCZF%2ByUj7zbnKtwD%2BIXeEoWFFHZU1W0d%2FDQNBirsnFoJ4yYmvo%2BYWt9Y%2Fdc9K3YAqAsO6B%2FimBHI2jzvUwuTx2A5MBzgYiX5rONFaf52P%2FT6OJIYbheyHknv17ETS6gmV9u46K9yQFYINjiUoLDrnhF5ctQdPjb%2B%2FlMD23j5Hs60ZkeO%2FSNpKJKChNTMMq8vtPmcx8OFUutZyYsHQ4oJJ%2F2U0KX3TMPLiu2fMCGZ0gQ7xflnhPQlSsDc3ftPCf7342wVctWeuVEdy5QdfIP5a4L5vIS2EL7qqyp3%2BudkQSmTGAFVEYoEUx15vl7IHRPE9G1Pd%2F9NNn5dIGOv7ZZn7aAjzEULFHKA1Zyzf%2Bs4qi8ygZDBZX5AtKk8USp3qDZZSAVkCnG0a4yuYt4t3T4cFZ0oVCsdxm1iuSPKahVbplX1Gji2p%2BnaS3srZJgvx7MNNKEC%2FmEbTQJOKgfXea5IiLX6turq1K%2FE9U9p6vSWAPsVmWiVrjdM5wlIPS7SOQM%2FHFLn5Z8zyVHNc2ES4sUM6jCMEa9sa8aVqqlfz%2BTToUnBq3MRrh%2FJ7hSQJJtCxwjKgz6m6KDiDld5%2FoyhgqIkIQOO%2FfsVhJ5RmBUMQxIO6affOcaicFompqxL8FZOQnhvyMgWyZv40f0w%2BJnVyQY6pgHJmWQWj%2FVFrV3nk%2BFa4SIKurw3aaaRN45SNoUadK78udutEw%2BoKblqzkdiMflVey6ry8jwldo%2FVZcAGYVGGN8CYtjbUF8aerZu7pFifH9T%2BjU47Uq3b4yo8rzTBNBzCbZKJu55OsVrBtA7SfZgRzOqCrNHNRPWa%2FUETX3pY8icu2tgCrruzniDi7fzhRPLIp2ad3tS8q7N60dtehxrZuml9z6FlmwT&X-Amz-Signature=1dac0ba227061a5c1392a793c159038a07878ac6664fcc64f175bc02ac436649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

