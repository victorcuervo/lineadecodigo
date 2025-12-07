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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VB4PAHG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhQoCB2wleGazIcL0H7EYbYPx8oehYXc9Zwjr5QOwtmAiACm4W%2BH5hQmKDa2NddWv09%2BzDUEJP9diyh9XUGPvrAZiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM7WhQvkTjx6stwEBKtwDea5kcIew1VE54W4w%2BxjH7rhm3ixu3mWz%2B3gHeqxdIqn%2FqnpiZ%2F2PgAK1F3kAwwKkfAoD%2BUeSSI3gcaeFvMeBeyyrKUG%2FItC6HB1w5D07K%2BMmc%2Bab3pXtg6nbvcqBpNw13pYC1Oo2UxKtNQlGZZ5Bub5%2BV7mHZqA6UomX865OZGmaemMX39ErsEH7DrSivPft8jZ8bs8teVsc3H%2BSgyWNsj16Ki3kXaeYQGr8aO1wGd0BPM7mMQv2V50cEd1UKSUBn%2FCsUn2y1KEww9J43MRZDMFXHw6dXPVdanmgGXcwZJpSChIbuJpAmGhr2pyc%2FQZAp4Vamg%2FcBrPrF5cwmMld%2BLdQv8vnw%2FHwcjhGJ2EJH%2BoPBQJ0DbhIyKQONMDz6pTynxHP0By9iqNYwKwdeFKesQ5INLQM%2Fldv67fwAXvEnoGdok9ViHK0duK5blR9SqfTmg9a6q2M7sdVxSaht%2FBwWg6YRmOVzQf2WHjAdBrrhh4I2n%2FubnStoU5ITvRE6VofzafdWcEj%2BaQM%2FPsimN8m2DC33UKkRd0mTJpkQ5Mz1yqBNXhiPyvtB1w9DMPCvBCelmT9oUbbNzfSAE3EV7fIhSinCVdJX6YAOHm7Lx79J3pEl24XT2SM%2Fe6t2YAwt%2F3SyQY6pgERd6YFdAiUdAoVhdLdEaOe4WNSbb0aDsAlLVmyccl%2FccY3SK%2FchdPqasHIKmDnDyY%2FousVIa6%2Bi6U40ETl8yDfcrRdfE8zg4Halwv40WuzSCIvijVC7ooTDs%2BZZY3v2H9b3AMn1bsgeQlobHypZYfJDcZr%2B%2F0q9y7oTHkW%2Fy6rOc6tTDbfVWkhJVFxwFqT8Fwtb3d7mjYvpBMFAOYdBl5t1HPioGuG&X-Amz-Signature=46e9dfeba6d043d1e617dad5e6e8a1b2c12fae4d4659418efb11eb6858a91e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

