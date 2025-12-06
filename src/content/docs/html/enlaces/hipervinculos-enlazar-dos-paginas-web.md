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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624P5D7IP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf5zU%2FiMPsIT4KaOEcpu1D4n8F%2BJ%2B4u%2BF55dwg8%2FL4ZgIhAO8a2i8RSGiipghogQHX%2BwFqkB1U3dPhCrFQ4lyiQ7A5Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwHm2muxL%2FaJqPN%2F08q3APOkSK1oicf%2FOBYnINUm5pBJ5W%2BbCLtUmgjSuGMyscJDNdB2HX%2F2lhefVFzN7cQ5fbHIA11oN0alhyQN5zu4l9hVOTgLM3OH7XnI7rNWdR8OoPVZJmEjxrFGyL3KOlbWRUwLRswHoXXZtMNuxHdZvuTxIjqIBINJerIqSXJi3wNUJ2ouMWoKPDfKnp8Pn4tpw7Ypi%2F3TUSY5%2Bs6XiNYsxPhKKY6yibmQrU8sY%2FcL6mPXytxWHqlifDYdr5EWSwV%2Fwbrp5SN5SPukAADJgkyun7xpPeAIOaLZJVmLzk3GJruPt27cHg8e3IsZZQXryvmIppN1o13VS8Y4m6ti%2BTUZCHcBpGG6G7TaqeRHO2hp7ni6r9yRmRlblfxFRWMxYwnZtBlTFxYQFPPlqW7w5h6bYal3W6hN0n6030P3GehGvFSfLm3wXP33ofRJ%2FPCnRVPJkukBbxBvQTdU58wAtCtlN6lPxAb%2BsNCPi9A%2FhVtzox5euXVq7fkjamo49echhRbt5Jbz13zRVPAhV45iDWFgg3Q%2FTW7iI7Px9Q5OdGugBxXx4UnL%2FjiU69pE%2FhYqpIoDS5d8y04LKKwJcGetbR4zPIXeToXGDC5tcjYZiXXBCGoQ%2FnL7p%2FZE%2B3GIqivLzDI3s7JBjqkAdenMmwRqbOMHcaVMYUjrnZFTOLAK4zOKdJHx%2BOVcy1dC2KF64w1FNOhinA8A1G64lMljJyIMKvsO6SgL19Scrg1IKysbEVK23ghCN6Di7HEBaMKE5rJthFEaq10CiuFAWmlQYQXGdiURJyJ3HnBn%2Fr4L8P64%2BXcBVl2rCe0BgHJRNIMqkqqev2itYQg0jQlQ09jpuXlLhOI7ZmO7sJEUDYgpd2g&X-Amz-Signature=40d4af1a9f823fe1c29ed268b2f45ffd6608371b600ea9ac26b504e3397d47c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

