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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6AS3Q5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvKoNwXL%2FbGAJ0F7vOjBxkVULmCqNzPWoPm6B3GOmnRgIhAJ1v9%2B47Uk2bkkIOo2slrZbAoGWTcPSJUWHKVev%2Fww2kKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjpRG1xmO00EvTmYsq3ANvEiu%2By0gnu%2BxnHZ66%2Bmbr0fYefoZC4h5QCUx8l2y43Ashmh9vLVG%2FR7qI6W8flzgcW%2BRPutcnpF39I2bBNjzYx8HRhnxJqhKE6sLRNsA4NYGRHN6KuXGFc8i5pFAMgGAbmSZuqi7E73wmDUukLOwFCo5KwxmvmgpfB%2FCqpWitQFQedbN6oKO%2F700JhLG9OYG9mGOPCWZ65TOoqKkKJA22WI0jy2m2RPninwu32ozIt%2FN1cvSDS%2FyxzjUxniznuSTjxWuRgzLXcnn%2Fl45%2BPnfNLk0wyz1mZ71ez4OD3IH5mJOWHurigck5W25CfH2tVwOlkR6v0nAcpxoj4SWkBF2IbQVuJcbAYfhafqFIRN%2BZSURJN1RBY5mkQff9Tkn8wNgNuftihRIshdDXCAkpoQJA7%2FKxOzpZx9DoWsUz3%2B34322hxjWVhpXbScJIkOQUOKJdUHISoOQLGOH%2FVKyCtQ9mDxS6MFGOvsE5xfTBZk3LOPHQXZBVCwxjnWl5lYdGwRS21q0EBTrezAdnzo89OHz6y%2BGUvtV6QIpe8hg3RcAk7kyv%2Fh7V%2BpKhAwR9wu5bHXhW85dsYYluYJEqjM4i8i2Pw4YHGIOcumeRe%2BBrh51gqHQ%2BA9tCFzRYrVH3VzCe7tnJBjqkAZyt8fzgApd3%2BkbEn%2BgfSqBBRDV%2FJ99%2FKrnD9CcC6HmpyyKsP3CKjne%2BKKSQYAcGOAS%2FCH%2B9FeB%2BZj4uZ7JKK33Ayfl8SOiZRiTy0qZOMVwSTPeXu%2B4%2F%2FV%2Fq%2Fe6KXRB%2FmbCYUjXlybNELnrpUY0Y6MZuGbChYG0J5Y0EUgG%2F4LmjJ2HeB3nIybCwRwxTyRWN0bN4DIt45JU05PlKtDADbOREn6RG&X-Amz-Signature=07e964daad6ca694b7dbac5fbf6ca8b339b997a2b9e2d964da8bb7ad7b9797d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

