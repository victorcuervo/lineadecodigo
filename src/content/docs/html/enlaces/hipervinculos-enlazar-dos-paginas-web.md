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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUE5UXQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCByGmAu3hzq0RFvlPu9ZWureK8xjObCVY7fZxU%2FCdH%2BAIhANv9dYFaLv0l21NEMcXpGguCjgxhlYuLVjN7BzNoEDtvKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY9RthkU490BUJHQEq3APCjasjEp7HZw4VbC3zly7NshsEB6hGhhTKicUDxuXO7pSckFt0y36V6WThrAqJ9sQjSc2W19B6K7DcpFrNLA0HmBx0i0RNFc2EelLvM1xKIzDTD%2BayY%2FlE%2F8IV5ZQQ0nFIcEAWDY0Yxush2B317jy4wdsAJ7qQhxOhmYFdilB6UrcWFNeZCKPlFVebDFwKrXPbDqGoUPpg869a6uHJv1ruhD9nRI2Q%2B2CXWiCf0Pdv7mZTBdGhyTDZ5wuMVfl0vTbjMyP4dXorK%2FpkS5y7nwSzmrfmazS6ASGevN%2FsvXiWuPplybsnMvBgYcI0REXXq%2BC7b1Sr5SFbZrl%2FTuGhHlxpxl3tgwXKxX%2F40hh4oJKewk%2FIiAfHB0hwr2M6fBhedA4ZqvUUFwphUC84128P6oJoEiuzvRnlEGiPYPSj%2BTkYZTnZNwtrFjCaFLv2yeZ9PyQDDrMG39csAQ6LQ%2FlQ2tJ0pv8bRkdU4kfvvmqB%2BKCHdAeQo3biTnkqVS34Zd9MVYgzP9KPn%2Bt%2FsljP4t9jmA4bGEYjNvZ5zHRb31VbGw6wVX9srC9uK6KrfP%2BfSStGkiPIfGPsBA58KiidgztDBOnZJPBDwSJ7XS7AjftbYICk4K3MrjNpAk51%2BKM1BjDpuNbJBjqkAUAPEkGI%2Bo0TAvXH9lwMotZM2wtJLxnyoAzZfdKYrt7d3vxm0Vf25lqk8S2kKVeNAajynBekUpSKO8arIIzsx8jnJzFK82Wub6PQfWwhGB%2BoqkOSWoZjrQN0VKB8j%2FbRsRHr%2BzD9UQgRYzwRD26bgfotT31yonrEieCICNPVDfOHJeoxdYtaQ5%2FBRotneaxkFQCChexj5cSAl4i3On%2FjGqqcxoi8&X-Amz-Signature=df042c68ea089d1523f6a3c05b08ea9afdcdd86c7527970d033a4c8be1f7e395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

