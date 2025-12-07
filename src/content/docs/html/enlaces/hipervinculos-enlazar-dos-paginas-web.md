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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKY65TY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3S%2FvlLA%2ByDWhowdzbe9b60mLftEfprAG6VjFmIv4hsAiEA9gvT1ZLuxgKkYTYkpB4TH29EE8bAh%2FrJ%2F%2Fm1Koq7t3gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B0S%2BT8Ao%2FtPcCDSCrcA1uwa2qdO8Xj63T%2BeIv55a8Sbs1V5lth7wHGhbf35Xr4rH9gTOwdsRNS0cxi2K%2BvQojQ0SGS9xH2n%2BLoDeHWz6CmZGIAwo3yYYADAg%2FhpO%2FN54odiEsiYsY6uWx2YFQFkVeg81aYbLlsKz9mI6XpUclmn4PZCs2jSzgGWxayUR%2Bo5ZVaBh5WvI4QNs27etBRuvJ77Tbn%2FCm7jRDVF8NqyUdihNQGKAlBsT5BJ0fB%2FGjiyU5HsJRoPc09WGycFjh9hjSSQnbVhLfe8jH3eA%2B%2FHH%2BhDCo41aKtTTr6GqaCEIHhUrbPKUuOHbB3KvjAMQujDIt%2Fu2ziAhn0IGiUYwXBBfeyKttItTnfreoxKRtEpemuM3HdQinGBbKqeU8v6vfqlRXAlm2rMu6Pjk622ioPrZMNEm7bn45pY%2Bj4s7Pq6Rb6m6RwTGzAdwEHBzKdx5Z7yoCQAPs8RDqNja9abfAyufri2xDeRf28WnfnCNTg%2Fc%2FN3vIQobGl5pFDpN%2Fp2mmIJ37O4IA%2FiiOrBBDbAqBEbDIFzMcgHUjRgzcAtgXO2FTOjN%2F6D%2BYbkn5KD%2FDCN71tKWyBN6KfyiFEVxB4HnTgSwxKJ9Hbrp7IvliyZ3LEbVLAjT8F4qAJWnMaha1XMNOZ1ckGOqUB2cppb8SYGQt3QItP3fdMfoHaK5z%2BsA%2BONTP1BBumTJeoAMD6EKjOtdWFXlly7OpGkhWu%2BCqzVu1iXqp0Cmg10OxbxO5t9cn5B54KQxQ7%2FDkRScWchf9%2FtmIA68eh28WPk7I563RMnliE3uCmLTSURCQmeEDDmyXVPudOntZFmM4lZ44u1QR%2FV808gBm%2BuYtuksgKc10F03CyRTsJHGGqYWWhS7Pw&X-Amz-Signature=ce6731bfd3206e88007ba86205cb011e51ea29f2cfe98529d29af7ef5f5c94e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

