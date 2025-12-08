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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5HNCYP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmGU0f49AE%2B2zsfHDt6KOvpPCz4oIeL3lfZ656yOrlkAIhAJoxzljTCs5DuLG0%2BLC%2F8kYRY43BW3E6KQnSZaZJK%2FLnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx66fT%2B1YUmhxDJiPwq3APjhloZg2vS82pT7tDQ7mfbzWzqqULcisujKzVYysHOTOpty1M%2BY5nMr7GtLeuDHmnBEpvrakSpstvm4ahmoptf4BHGjq8I52M0maTLbTulQM3DevcXqVseBlCYzQ7Ek6RyN9IPp0ImM4R9cW3Uog3ODHR4kv6vDtYdIkWnFu1jOtV2gO%2BjE9J%2FwcsT0qsMYk8sQX19eXpSvQQpp4vlUUVoHeW1hzvaYnURVdjc8d%2FthZjv20e%2BhuvcVmRPaPc%2FqLyYdvzbmned1FkkuhkygU03rbEug4RKZeNpHT6mavpAS15A%2Bg3xqB%2BmBDiFfuQKxPJf4zHUE05peKq5h%2F5uOj79V%2Blutr0lzQJu8bBwz55Zz8etAAClBDc4%2FLCMAgDUdpsdt91zBV2bYYDNxYSXzWw2%2FHQehbyiP5xnTJd8Kh0UdfijfVrZvstohvCECUWbLO%2FLddEbwPhURiXHQKEqv%2BpqK7wwwrBq0Q%2FrDtt624QaMCOeMvfDefVUA7kaSgIPTe46IFKhCrDc2e12z1JoQBmRKcebRLiJ3Z40BIxwG6yLECoOFYt7AYDyd20fWN1iyPM1Zk10abhyQPhbr47jI%2B1zbhW3r4XmveDyiSjbX2C%2B5HXRImSMdEsLOhwnsTC7j9vJBjqkAZM3GLa3nel8MOsng04bJUlkel385DC7Rw%2Fu%2BKwMo1eshBmAx%2B33rPQf7H0AG8RrZo%2F%2BJm%2BgqWF5qlnmWZC6ZU403n2RVl9VDJX8kM6zn9in6jhlWPTNp%2Be1j7wyED%2FqRtwnArU9%2FXAMdMF%2F5GOp70D9pha0hJYILoVvTrK%2FDHwbaNBAuitFPxsKUwhrJYSdjQbDH3O7DPw1U7XsF%2FEJ0HE0C2o9&X-Amz-Signature=3ef3edcd42b2b1aabc150db89f384351c52d8457d7bc0b88042acc62a7f2b2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

