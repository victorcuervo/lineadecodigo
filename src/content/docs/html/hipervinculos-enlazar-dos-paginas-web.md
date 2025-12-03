---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4RD2G2N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDGR9N9MhNKSNaESVe0QCO5D0ErUddADZ8vetZTwyPZSQIhALrl0ocPBSryfc9CzxKG7aT8CB8zNGG%2BpwtWnhZKe09hKv8DCDYQABoMNjM3NDIzMTgzODA1IgzhDA7vSvHSERs6sjQq3AMesC2v61Fjq28b8LUjbuRmPgc8mUVpJqBcbq60gPsQFhCytNNO6a1TMqOwoo3rlzzXmIJC2UgDVoAlXMRI11vG1zYJYsq%2BwpY19TW2K2vvSeFJRbcQ2AKOhxda41VVDKL7xq1VvCvjYi1gAVRlxVL85DuQT5JLrQpb8G5fgAg7v8KfkSgJvX7lSgb%2FpYIVWkTmbPdcjBtaFa%2FmL8yx2j1PmapRzLMA90p3e6qamiGHPYJnx9fkTfJFbjMGD4Hm6aJZGfHGYj76Ird%2F0bBku8gjiHC6XpMB8G7XjpteRKUtt71GupiNi8%2FBv31uPC5GNKVYeQxQTcQqr%2FUiqZZ6r23GGM%2BFJASF07S7%2B740YXdDm6TGmaD1fLHd%2F0CHcFhJHm%2BVolc%2BJmICRlSbkkTTphywrX%2BmC4JDik7kQAeY07oe6J5Z8V06kaGnwkpYpl4qgo0CkF2jtEH6Js9nV1mQADRNokZ%2F4UI4OX6Ks%2BR3dUrGk6wEFVfaRCCtbw%2BA4APDtjDSJvXNIcyd59N%2BOOUB8dqAquqTwQl1khfKXWnF8qAjDorKtdMCjvujJd8Ecam0qXqbD2nRH2AEsqFfI52yJK9GoFwJ%2BwkdDQ7fi8axNCimPGveCj5IVrYxFoyh8jClvcLJBjqkATFXK7tVBmdWBOlqK2684v51rfBkZIpKiuy9iVrjgAuYADGAjnlLy57IkRJJoigw5AbzIN7SWOmFrHP1tDQq4AT1xu4F3Q1Q2jZhBPU6RSJSa8GtZu%2FmQezRs6zdPmsrQQ1nzSRP%2FXeyUGoGs3bAM3UhwC6672IM7ixiSyqYfiP2I8Q0S3RcINOapTQ5K3d7%2BS4aOpG5ZK7nqsi6D%2BmvcGdAcEc1&X-Amz-Signature=84da30bd079ce2175f48a23c6fba588630658b096010b573b60ce145fafd7e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

