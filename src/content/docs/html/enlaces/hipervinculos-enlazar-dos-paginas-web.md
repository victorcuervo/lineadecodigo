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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCZQQQ5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGr0hafy2BD9Hhhwxl4ASTqXNuVe7vvylJa52ol9WxNAiEA5fu0jtWrIgYoImH3SG2%2Ff5EyTVvaR7%2FTq6b4qq8KYogq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMNrWkAFen3URoIxQCrcA8HRRM3odL5EKZyFCRVppJmlF%2B7cKUlekmky4ySiNrnd5eQwJci4UYKv4WPZqiqM2oY0z9yT1HjkRKa9sF36KR%2BzA8OWMJm5sShfULVhhSXivQtkC2xPBIJPyg5zui8%2BiY9727lHln4%2B0DnG2yW9HH8vAC1e%2BrWZ2q0czycO%2B4wWBjjei3XoEXVWeZPgpk4h0weAfkd5rTL7a%2BdKxSkheBynjl99hFv4p9Ve86DcKYHyaaSqln9PS5nOfE54Y%2Fwq8CcHLOPs%2BXTEbIZO%2B1lqlW97uf9TRdP68KNr12uNXku96%2F9wenuHfFlmaPFustQ4PSLqv%2F8bObBmpeuC0wsc%2BmjTOuTeroqwNGfKrPwoHuJmBT7E6Qj1WVjF%2B55rK%2BcUV3y8ZX%2BPS99a%2BC0KYeF%2FMhWY%2Bizb7AcWpzJCLqCT0iL%2BBIZ%2FNgfnL%2BPOLLEoO4JGXPx6XbstQgWbGcDCPW3X6WPJjEH7%2BX%2FNjMr%2FdXe4%2FRmotaYASeVqBO3TF0l6oDr08JP03DPUZC82hXf%2FlZJubgv9uDx%2FwrepuyjuqR5yElWdMon0AbHC4n3L%2BoFfEhNMVnTwXlbIxu38YLJuYnX%2F3jQu92RRQA3xNs%2B2bN92lgx0EY8k75ejocqGuDn5MObrz8kGOqUBVGkhNNg7gUHPkOPmNLpuek3bWfdzxpEYZYboS8K7iy4Bk9D2mhAlbMUkA6X1c%2Bcx68UFy1axb9idF%2FemecI8XONn6k3VNLGiU0z8udpR1ipfYS5TSKgClctzZsej%2BmiBffKmq4PswmuhPWfMTEFZiMzBvQ%2BKvn%2BgxmrLhSFOsS1pIWGE1mEJp7uIBm6vU0NgSKXirts%2BsC7FjvqcDrgxTPEP9%2F3Z&X-Amz-Signature=320cbad35a749ea6c2a2e60b89731448c0f300f11a5b05eade9ce15dc99182f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

