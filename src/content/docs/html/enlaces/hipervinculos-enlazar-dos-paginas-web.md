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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S5GXCUN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2BTpy%2B0TSCCIj8TmEKVCF69SOhIQOb8DbZU5kP7x7EAiBy4MgPtrMuT4a%2BQO13ymJIcG7G8%2FrWtucezjvPdyNrgiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGesdFnW5o7ixLm5cKtwDwv6fcCBRrUlfb0NzDn1XZx8cJXl4My3kn11HA%2B6RO04fNmBySonWzK8QaW0H0fHmlu%2Fa0BmtOIX5pqsOJ4Hu%2Fpte5xNzaIjHHk8%2F6l6Yvz896f0ktsF9J9PavqnceHUWc0%2FVDIndusAv6kjLN8Wp0E16dVGv7PXd20%2BbLOr4H7xQ8065XGhLLRLB8%2B9FMyNCM8skfrLfE9Rt5Ja62k0X58RtHNAk3qxQw%2FqDvdgXjy1bozqIdxZqF%2BXHANIiV6Scd2tnFk5UI8EtjjYBjo8umwjYexUXamCG3BJGVQxKzOW9UlVDm8RD1Q9HXLes9kPTozoBGINCnkoReptJLq2y7vQEPi79j0SmojSUyUX0HJLT3MACTgZuoqSeuCiRqlwTmka7YiIhnnuiS49tg9owfDjC0%2FXGr2kCkhn18kacMcA6GPQS3WVtQErOWcAQASVkscXZX7%2F3%2B60XpiQoxoAP%2BGkv88fapPxqTSUbcQfZWbNV3m322ONG5F5rNFLoP5dXbrWPTF8EccOKDQPRtI3%2BGDwAbX%2FjrUPuZLnCMJtKQfqEi2%2BkfArxhFzEcG%2F6CxK8guvkNeu1c2WvS%2BuKvjlm4GXu%2FHchZn8%2BFVVRUPVa26RTX78mZnizuIncyDcwq6LUyQY6pgG%2BDZWgi%2Bo4xxRh%2FF2looZXZZ87K0E%2BfmlE4BmD6x1So4prRWJHNxnLaoBG1a2qW1kE4fpl8OLL3DUvFfh7MeEesrzC7%2FUdIyz4lWYRxJA295hk%2B8qDNfLk4laaLt%2BXH7BuMN0kwbOjfa%2FKgrOzTsN1Si5p78pLfSIvrYyVe0YT1KsRLiRT5%2BcrlbmwLUk4YGz7kELZoTUxt3KDug4zVYut5GpcQF8g&X-Amz-Signature=6ae839cffff4040eaf0c38c4a502441ed649ff4046538bfd91f811b708c847bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

