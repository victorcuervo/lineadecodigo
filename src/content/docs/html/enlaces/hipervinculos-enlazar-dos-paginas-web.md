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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIYZJQZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Q4KKbAOkDYlz5dtY5ZhNFt1XWONVZptiIMjuUg8p4AiEA75XFohZbgFeHqzAdkPrCVdQDnCYZfz2np2AbQFBiEcEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCxDAzEcEyeU5n1T4SrcA88zeQ8vpq%2F5Wpk%2BmT%2BLmGoyZdHysIECsFKg%2Fm8DJZE2IaA5J8y3a5fp7ALk4WVDRoEFggeZInXpZSUTTbOCy1yvatx8lnHpUtFmhGOGjj7gDQumfDCAP20BynYYUfYZKVRo6L34J0jPjbtxFmR1TLDgV4HqDRbwBr0B413ty9XKlxq3qOsnr8EMPtOqQ6oIhfwtN2duRpipv4gG7VB1AtDRDXmsq0ZpZKOqzzftdODUJy0N%2FU%2FiFyP6oJtpeLrS2zaLPSF%2FHli2yUdyi8Q6lMjKLw5gTTrG3%2Bh3Je0ndIqUDFJGjufS5icC5r%2BWA70Y1GyWcWCXxBMr1FED7gnUdto8ojckDJbs1uweoRpX1nsE3GPqRaI5s3p5ut37erTPMvLoH7ELPSEd5syIphoxUeKB4750UcapoQA5YoRYRycj2i3cyY3RlEZJ6%2FDgX6LDCaVgO%2FUL3XeCWo%2BWnlHAsf%2FV4wGy%2BE%2BE%2FwNeDzzbCiWEMgAnpRqmYhR3QwUxb0W%2F%2FRYVg7zFSG3gkSx43HZIkdbn6Wh1tqFG0ZoHr50TDiaAKb8OSkS0DlcpU25AuBzEyRroYun7K6I5VbrQnDwBF39Gtft3nANEG1oEl0BV%2FYJ67%2BSJlDJh%2BS%2B63ZLbMLqyyckGOqUBnk5KfVSCeoKuNIG6KSCxYJM%2Fda0ABo43vVSKMeuvcgd%2Fb4LBQ%2BNTuJfFYqkEHUxPzUxPWDgsmU2fcIfBWvbSkwEGabkJIQYZugEY3lWnWAsuOt%2FDOxLIiSLC702GkddAvyLFmtA9dn5fkAJ1%2FM5cJzYt4CPR5ooSxJtracs%2BoPIsFSbp7Tay9vvdWRkvfCkdxQv4LSCE8cRF95mc%2BnaEh%2FSImohX&X-Amz-Signature=94c2c4866d6cc224d582e9920ddc168d1de1d898a4b86abda50ee30ebc76673f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

