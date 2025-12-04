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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHFR6CG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAP0roPZacLcib2arXarEschuyRaXkr6VkFmMmlYkyQGAiBggyEnEjT5Cnc2ORuaSiwwb7DIgCfFoXcqTqbHxLtzGir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUKUsVUjcNNLuPC81KtwDX08Bs7O1NEYQuquId1%2FwLbKiZC%2BfQMsoW7u9DEYhdtHZ3fLZfCNrdaPgkHUahL%2BPfiW%2FIDiU5raTO4XSUEFIjNNc0PbOoIs8mNkxS2iLLTEL0X6R37RigvcL%2FbzJUYIG6NgAp%2FD%2Bq7lNGuuSUmYrltVffm1tmIY%2BJmPD7zWpwrfdeQLEN7U2DuTTgT1xPygGg%2BR2am8J5CO8XV1nOiheywIgVbRCaVQCOixlaJKVCELB4MOQjnxMG%2Fs8GJGwPytc5ql7iwnr8FVExbaVBXy20kYfCpVx6vAfI7NtWG%2FPrTt%2BVFO1eg9Q8g%2F1zDz8FqQpmu2i95kF0MSo%2BW7g3A0H5UG%2FqWZB1UQqAvJgMANLH20EZ92jl5SeAAFBdDJ8zXuhXmOzHbciWd9l55cZt%2FfkNyPIno4W9zKRly2f%2FqyFYUI4BhOvjKM7oP%2FZg8ujvUNNcvZ0fdxbf%2B%2F4BXVvHcgxBJN9VE8x2w8heK%2Byz5BTj58an3IwpexAh9RcZzQbeHsJkVAkjgVvH3UZj1kjhKfFUrutCYbe4FnsNPN5Evn66kp3DSXK3PfgGFdxUio4riDFfxPQ3F9F9NNpGVHnRv1nds0eggZZru258t4HXOnfkvITvDupReYavqspENow%2F4PGyQY6pgGyS2pKUOwzaBx%2BLiTIACJGjlti1v6oxEKqyyVDswJU7DcqOkEcp8xc%2FvlNOynV03RnWw5Q9bjgT%2Bq7ZgQQxcElHbp0Ok%2FCGUv3ONSIJ3Ddijo%2FEljGobB9lJDKN6Hd5TGV3wCZa0I3loVaYYws3uA%2FK46e%2BJKkfBfl3lfdxpYKTNMD9oPp8Qlf8N9hOsaYji0d4txxW9MifWKafFkXdQ56mcSarSg8&X-Amz-Signature=62a425c48738b459ab0c4b743320d7d694786ce20dea58050643bfce071c0b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

