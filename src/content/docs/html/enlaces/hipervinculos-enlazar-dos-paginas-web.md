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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2NWHHM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FKBQjV4Z8P1o8DycoybBLGV3Y8koQ8zq8mE5yQ5RZgAiB0KzvoT%2F5TTGHw5zi%2BqzmGCzk8zQxhTqZCDdyUo5EDdCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMc1S7joPHkFz1i3zoKtwDYmubvl4%2F%2BdBnnMmRuBE39fWZmcAzFlbAZkN5nViSknkGJzhPt454vJBz3QfIkuRpZ2uQUdq18rS6RZE4bac1m%2BuskYbRDpdi%2Fd8tghPSXtOd11rLwiQlAgD7M9lkYfeFXbyh%2B%2Fxsr7cE7Gd4EjV21jiIkEHn%2Bu6EFmbmHultVZGVNpW1W4qiAkLxrxSFamk55X1OAXqwMFwpG0isZCmHwcfEgF2H73GiXpWO0ImaSw%2FNyQW4xG6ZJcdd5XLleLcXFwMUbrh09jDpHfLLGHyPhFQN%2BNDHrj%2BPGTTPjW1RgQtZMBpvM21BeXO%2FqJnd6boKA%2FAhykC9Hes%2FDFoTEEmBv0bxoaF4y9UdVcGoU7grM5O2wXzip%2B%2FKAaPzNDwRLwJNiVvP1WcT2lWUZrnUt3GK1798zNWVXEWd4nSd8v60KvTC%2FKpOYvo2dualEtpnpX1W3IFvS3WFXtAmvPwqpd9IPEmhPgaeOSejBlvTrp2TKqSJNkne3KEzxkQTEhR6liYQYn8YN8J0vf%2F7iZ7zYXuIKS0gX8w%2BzuqIVL5RXXZWUqDq5Ty5Z81%2BC%2BtLnTiH3bqf%2BPA19jBULaGzXzUmDekJBNrx%2FYLCJls6p0xa99LtJBrBH1mBR37ACcgxFsAw78rKyQY6pgHnl%2Bh%2FvGO3LIhxzHkrUwbOu3rlOl7RnluzAS5I7R4C5XeSa7p9pmzrVTL9pjDDW1RKqTKCxv%2FLWIgYuftjaO4L%2By3cc47ANh8kJ%2B%2BZ%2FxOJJeEXyJuP%2FrdQvP99XI7s1vMeQpHsqsUBaroR8yTb6dNys4v6bH304BYihmdE37hg2kVQsidacU%2FnTHi8flvyQa%2FmG2XwvMSaQSBkvDDj1CAyqobRw5gK&X-Amz-Signature=a422965c35140f68f6f6d3f41796213f731448e82060070c0a9f3f12d29007a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

