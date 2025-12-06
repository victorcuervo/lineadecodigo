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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YQ4HCV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiYUyydymceLmewhlNXhFB90LIdD0D5aabe%2BBQQSskOwIhAOvWWB6IP9Eop1pNefaYc5eI2Y3NYoWpmt0HaJjs4nByKv8DCHQQABoMNjM3NDIzMTgzODA1IgwxEdfj5PkAzRmu0MAq3AOx5Hd%2BQkyDuM6QrBKCuyzPu31%2F35YeRs83HcoxIX8Rm%2B5haImokHof3st8bAT36iUdP2nzbfesMaUIz4nyyXC%2BHd%2BZKKIB7MukpupieuMQsFp9rK3igw18veg7HgmlRB0Nlh%2BtKYRCfF9YXiOOUokR5d7ioZX%2FSzxrziHummhlA8yb7%2FWaWW8uAQTw%2FPFW%2B9hoRDbZ8ahh%2Fcwgyh8l9JUD7AuSQJkZWAVwaFDk4E8Vs3L1AHkYaCaqjoq05hqYUg0Qn3Q8jwXnPzmjsqbFZ2bTpwzmlh%2F6J90T88m18zpCEgKB4xm7gOhe3v4nZSmE5HRECqG50dFAH87HiLGSyMsMzbUpQspIOat3IjOG9VpL5zvp%2FPf93XfTFS8Bg%2FGEzPaQ71yMryAibS7cw7Qr11UW%2BL0CtzmXUXdVJQZSDmLmIF0nq2WBCUXaXmoPrY7EN%2Bo5ABAzyqX5DJ1CmURGES8Vyz4KYhduUhdiZcwYEejzX%2Fw7%2FE6eUoCMLLMAO2uO9R91ZyEsdY5onKqEIgOFVBPFNQo5iiE87NQlGgsj%2B5aJTKyZ%2BQAP3LkUAu4XZ7f6rHSCMxICqDUx0Wy0qb5fTdT7lX0g8r0SLkdvOVIL1mSL1zxbKrALuZo2zT0z%2FTCJitDJBjqkAfB%2BT3o7R%2FVFqhMuUciWdGKmQE7fNqXgTAU5t6QXfPtR%2BL51hz%2B49%2FR33PUpIgW0EfZYWApGo5uyRb7lJQ%2BwlRimrgVkSFIkMaAlUl6u0i3QnAJzh0NfUinfG1hPv1j%2FPMWJzJrD%2FzIO72K0dciVq3FnF%2FtaS%2F6HPTbx%2FzkFyOo%2BZkficDuEQB%2B3JvGNw%2BnpgLcNqptHFGP29ydPOcIk0m7vS%2Flz&X-Amz-Signature=550078e3c95cd074d511af67dff7dc55fbc84dcc2a345c71833183f1715ab6e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

