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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TKJQFJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T204639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzWp9j6zOYxNxdaEp%2BJgcDWJ1y0DsXGBqIJvY2DwxWLgIhAK5sBREdYb2K%2BTQAUp6pxSdRdDMCFpSEx7p8Zi5Ihe9WKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjCQ91K7KCxi9VPCQq3ANYmlSf%2BRisCuylhx40MF1wI0o4ZI5NDlA39hpu%2FiBr6ZpXCc%2B1s9XwCKwpNnpn7qFb%2BTpgXUQFWtXoFqBiGwiCakxH76vRu2wMTyKG3yvCJgJDirjBN3tDPgCPkm19%2Fu03jkigJBfCfTSoxNXgEgCiCcHgo2dLnT3SSeCLi9G35j6EN6dCIEuoNZrZBW5F6pXKhEWwP1RM1EakU3YfB%2BTOmzssK8qMbTW7etnFZ9bm60G6MuD6UwDN7Bhu6KrHrSAD5OxbnkILizYuX7%2F96G8E7cpk1wKllpzHCSrlXVN8t9U6%2BG7L6%2FOCh5nish8991I6S9vpneBgtui1ZSUpZcIxdgC6lvXPiqs1CkLisgMGyoCATji3Nu3UDw3FKdXGAa7ziLVvmH0deFPnKLRT8pNKswxpeewBq929MZJNY3rKhDNg14Gf%2F%2BR%2BtUg4L8IsNQn8LHvM1%2FqDscSay3K42Q6mpc5l986WYf7YGQPHirPpRX%2By6p26m9Wt2ZtqAUHlDbkwMhz1Ds68N1GpiOeP46q%2B85QJJAQJ%2F8RbbyDw41rYUWqr86ZrcO2PJXx1jItPF1ENJ0npHOGG01XfWHkOvYENb9PSiRe1kqFvl0YN66XGpqtZxY6If95XlhLBszCA%2F%2BHJBjqkAUMI0fUyOnfWzCXxOekfPTtNx5qT4bD26%2F8LSIK5h7XS%2BPHE2DAEmNznoTLmOfo6OKJlTDiYaEx2arLiAowwEDJFXG9hA7yZz9YLmU%2FbE47WUSiNWaeBWWulObC%2F%2B%2FF6ceSka1R0DEHMe6uD58c5ojPsipbQj%2F1jCFmgSo%2FtoUkuZT29%2FIfJQu7Ne%2FrNUTIM0DNNhW4RZQBbzxFRSLWh%2F9JOVcNk&X-Amz-Signature=c060e13f62e08889677be2e07c9de48f63cd990fb197e2dcfcca80049d340eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

