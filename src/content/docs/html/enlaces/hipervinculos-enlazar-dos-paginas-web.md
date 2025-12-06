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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDG4775A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7x0BRIdzwdjrfX2T6dIF4eO7iNUasMEzvNgAnsl2naAiEAv5sac9sOy3bnJdcoMORWffksi91Ak3WBtc5aqe6nCiUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDO00dd9hwoHP3rgtCSrcA%2Bp4bXXO6zSH5f2bxylg8AWYJcvtbkTVNcLCOV8UiuBgM2Di6kKCIgaISObBQdF32bI0kSr%2Fwh8oZdwnHWkv%2FklMz9xGgR8Xumvq9rWgO1Ns1KhK%2BzmjERN3Isp47R3uqPsiEcrlmYYCuG0GOTiX5HA46mzO3rRjnyvr7aYyrDJwdMUcR5YPofzKyQPkwV1F2u6mTqDA4xqZtWWKF7Mvv63Uatqp73Zd3akFfD7saAKkFf11ThDBTYipruCljKt8OwPwBK1B7rDT%2Bo9tzAGThn59xlPGSjAV1rXwu4NHJtH3hmTd4gzZUFuCh9Fomshlp7JqN%2Bt6n3zDAJtha1HQAr3TouFOW1NFQg%2Bly79tReYNZWflPEZTXcd8Qu3sfaLc5dIxuSAf67WAGldyX3WZRIlK%2FgzwosUjwxUc3lJWFFH01n5ee%2FRIE%2Ffe3LzYZ6mhuHYXMYiX1JxIv7pmf0%2Fz1aveJ9%2F4MZxRDIxoyH9LF92zUVp8siTrEtm6bVduY%2FagBl4gvHv9QW01ndfc3KsZlUO7d%2FQUZONm5o9zQCp01U4pcRJUWpB8Vqebjyq1%2FQhEeGzQw0OQYq1gOGicANbpm%2FnSHU4YUlbS1MReDcGop%2FzK%2Fs75vLPC7fQ95GjMMJ7DzskGOqUBCml6cA8PsZdRJoXMVuLYxO%2FSfVhngHOhD8kR4K6ayPTRJcNCtYneEzf39XliLgiZbSFXdjylgtNh0rthjZZf3HsG2MSRzXPbT1HmZT7go7G3RxvizD6V3KCdQ28wMx%2FqQHAOWLD50BOobJCoghoimAHIZmkywvzwwU9%2FWVDohXbWUY6HhIcJjNmUgbSg1olnEnbNuspbR9Alh%2BS1yDgQjm1FgRkN&X-Amz-Signature=bfc37c26645008226ffb810221e4141dc610105a0e1820f81b15f0bffabaf7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

