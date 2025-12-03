---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXKVE3X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEtvcIsFRw2l7rrakkH3EJ7Owmq3RaeZexo9fnlUHMNcAiEA%2BVjok0%2FsmN4ghLeUEE6wg8aGyRGaflp5cq%2B8iHfLu%2Bcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDALFWA6tajtuXDdddircA66ZypdsF5tmnTeIZTP7Kc9a5IEb7ZbiS3QrCoCsKo1DZB43Nyzr3RJ7osRj6mNfq92ZV32ID21EjulquyFJryVE5O%2Bp5G%2Bda8v%2BFNfJM6TPogqQyKk7gzu4ohBlFRa0auzyWKs1nmZu6PyRs%2BFeMMag7Rvq8kyYhT2jBxdwIOIXpWUz5twkbUSe1JPqJpCZPlLtw5r7M4nCxJnm5F5Yt5eZ8iYzzoaQjl6rVUYxoWu4VAs10QwwEbwvd4yLs1x2fOGmfCdWVyEhKu4jTEVah%2B1ZilYbd4TO4i%2F4d%2B1XT5ZyK4GFmtW7Saq8%2FYhBj7qd1kfB11e1tJHi4vvVn34ks0aNg18M%2B3I2r0n%2FCA2tc%2BJiELYOHg0adi%2FStNf9cO2QZtad%2FKpHXJpSjE4ZJX8%2BaMD%2FnBS%2F5vuP9i5AtMaXMgiGmPjaSj8mLAK0uYeUbm7BfvkKLbgceFadZqSH59FMJY%2BeYmY8I3pQ2uafNZP%2BrTXbkuvO8Ll0ZKSlIKY%2BnaKDaNbLRBsJTY6m3ouQmgPq8YcS7YZBK7ksMJwiMM7cjS4i%2FoWlB8Fu7CyYxRb3G5OqU14Bttq7PPTI7zlXn80SFxRDV6vZEMRsn8KDDDzKMKArD%2BlDZ4m2aR8rxoOfMKz4wskGOqUBNHaNqGYiJAQCRe8Bars0hDb8b0BgQ6xRBTJBoAYZn60D29FSQmw3JRMo%2FcukAgzNez%2BI2s1DaEKulNMF4pSFCFdkgK8IBjneI9g97TLVAQP6TqYsuAw%2Fi9XBpRizM%2BLjVuxVI9HEhKavSqQY%2BGKZsIJQp5P9wdPRsCd308wFclf%2FTcA%2FduV6xJacamVkEobSdPuzw%2FMgVejheEil7xprKdaCqVje&X-Amz-Signature=c1fef651c55ffcf4d1b9b5fd3a7dcffb6d282739e74bfaa09a6701443127c4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

