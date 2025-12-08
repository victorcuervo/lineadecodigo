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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZCH4G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHzfywWzI%2FlhW0%2BbpBDA78O8XiVZW0KulySuuM9QaoMAIhAKC1h3DkpX1Ji3p%2Bf7w6O6LGCWn09AeB4mW8m8jJdTNSKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrB6CKzRHVt0mZW1Qq3ANx2gamtw66IJd1LrQ8nzwFgxTqFYlakZVer%2BktVKmJs896jU899%2FrVIK0uKeSwxbYyQUsJzd1rRo3U0bRzr6lHPdkoFdYw2iyXKwKOlmsT9dG2I%2BSLOZMh3Pt%2Bb6xPyAc7Nigho1nEufX%2BNbAHy43WNej15Zx5tucCxl8JuJDvHV%2Bo28Yb0gjhAYexbxpGLQlvsrnfioJHGQ2rAVhmCeBKQj4hk1auTkSa2JyGujus5QA7sb9TpO0THGhElZvSs7UpaHSM6X9z2fkDU%2BKpaisllpmvjqof75wl29%2F1vD7u1hagP5hTHUmMeeTGZUoPiWjjivfAPIC6usprLjcfg0IqYBwFVFfTYUqdKflODK1Bieee3lAfvyYI0qXZ1OO5M7mcGhV93UsARYAr3xPOkHwirX7AoV7xi2uAOvkibmQlMWuYmJuAN%2BRaJWtezcz6fhuowEeK%2Bd2hXhQoU9EE7jBYefP%2BVuNR43QrmW5JzkdX6oJdMov2pXzWUwV6WDSKvaIPkWjkiN4ktdrpe4T3vAHT3gVxACAuzmfzc77wO2Cl82L35WGz1NDLssX3dS%2FUnQBsM6JaISHgWKjC1ylzKbj2oQ92GmuNX85NxXlR9aUk1HjG4ZaBdPn38Vc7gTCu7tjJBjqkAfvQe8P0GTvr9EnXQ%2BBxxFUzwYI5g4YGm0XgFEsLhtDTv4992hwpF%2FxO8dkOR3ip7DHTpH6NPKz7NTtK7mquUd6wFersgWlLbXYbfw4%2FndX3PePcciOWw%2FJTx86Vsemaql%2Fu%2B24wlcdzSEVF2poInTILzV6z%2B4pHuuUIV57FRL7%2B9vd5%2B2pmWIGI6WyISDYEtyhWsEvtjVDSWHDgQmJ4UwdbfodZ&X-Amz-Signature=0150390a5e0dd4b9e27a7fb127b4b1c3466db1acac1ce9c608ece3aa6d042c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

