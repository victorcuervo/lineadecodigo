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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJYFJLPJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcIC9%2BQLE3u1RUoMEH5MU197ncN3Do7WYZ2EfQbrd%2BrwIhAP9HxFa%2FEOMh3DjkyacFyvmBn0LjmyMcfulf9fNjWDjUKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeVxh%2BBPW5VHaNNBIq3AMcuNMS0bGIRNCGe1jik6XMjjDcnyCPJI%2FX6rZotP3%2FY%2FSKyl3QZZSXoCj24ilsqFYanLPeUs9kEMFNFc0Kt1lw2wKQbsfZtc6zOavRy4d945zQZAW7jSxng7qyag5lg6nXwyzMplUR2TPpW90v94jPzRTu6lmsw0DA9Tqx%2BEp94Zreal0nJJvNIJ9ITXZ8AFOi8Dz%2BNfd8qM8bjp0Sr6zuSBvPCg9h%2BalIbjHM1gcfrjRexN9DiDqaZ8ffHJuoDa%2FReueSu%2Fx4VoS2oOYBWBqDXXk%2Fjf%2BbR1LaeKP%2FTWmOOulCjxADZoUe%2FoeUv0VAPnwa1c8CGjwjR0gwX02T2bMgiahaGZus43INpRQq4ZGbOClR1rp0tp07n4uajzg23hiw1ASLTQPYLponbDvSfNQ8KstdseDLN1H6FxK6QRUy7RolN%2Bp2%2BwHpqq5SJZaBwkhkWovGK05tqhHX3nT4Aja2DBvn31PLFjPzUSdt4jHhbviHePsnxDP5lrI1kdkOibm%2FfkwW72kdNthm9SHeYvOp2UfNRwrITz9UkeaoNJFPWyUAODGbV07f18DT1C6c9bOgAFpizM8exZr%2Fj5U1CQ72v1KLrizs%2B0oG2Qjo7FMNTylRRKece07%2FaK9UwjD%2BxtfJBjqkAS%2FDcq4ln4H3JFTpZ2SOrqlGkiaD5C2LNr1uCwA0yN02Zkh1DOc3hq%2BLKr%2FWBmt4xH6CNyBoRX0cVbqUGLL2gcfIl5JBGerK8DpPZDj0YutRutl8mSYecHsdJu5297i%2BWkwTnrzeWjjg4s6l4PimWmZ6AbPtKdcM2wBbqoqZF%2FEiu6mcFISzTlKUtE8ldtVkuVzqZd0H81dLX7c8ao%2FN1zqpn54Y&X-Amz-Signature=90cecfda933929babe1f58354d3d92eed7e1a8a664a69d70777aa438c972ba0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

