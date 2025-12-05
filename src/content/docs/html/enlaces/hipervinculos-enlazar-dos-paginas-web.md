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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OABA42I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4vgSpIstMhw%2BbiFo0NNawo8zwphXMMUzJBZCijFjl6gIhAMwqwy8iu7HEkdY42FUKpsUUw7vUIGwZZCsU%2F6AFlzhxKv8DCFUQABoMNjM3NDIzMTgzODA1IgwAjIreGKxgiQKtQbkq3ANkx6RIw%2F%2Fx0PLCVk0eZVtiTMHXxrMzkDuH6qA5w8otOGVqeucds3CAc3cIaTscu8Fk%2BwItFy65grgWfkmXAqFwdDUwKBfuHJZqY6TUIQiooW%2FhqNp4JfMJiyJN%2B0jjoEUMXnd%2BFKfHVkeHXvFt2X0ABDaBtNAQADGWVCe%2FvVKAAN5jSAbth344wCWjShwis6iDTiDgitu8vRYZwabOFW85mj5kH5j4DRkEkxw1KvvX72V300JOKlWIJysKBZeANb74XNpFcnJhAk40EsjUGQ7T2zvzKbDwvnl1YACBq2IN69SCm2Oe6Xde9kSJzGtDmNdtJnDj0sTueyxga6%2B4RFYA%2BhkDcvB%2Fh9uCh0db1Uo6EFdpGnufJQinLy7UbIl4SNgp9kLDABXHRhgHJqMLqMDO6Yz3p7ZsF2%2FGQpaTCuz1H63YPCSTYDjlRQF3029WmVwePSJg4qANoDQOIluaKEUdkI5uBnpyHDTXTQD9J%2Bvj1sez1KRupmi0ZhVgI9MtXGl3YLWrh8Jr6STPsj3NiZhtKNpSveMjm8yEZvz%2BMqM7QsjFL0%2FLif%2FQMRdZz792JepBlUijDzt2WfcEPQcWSjzBW1DYfBY7tEjI5SPSNvvwRb0ie6x1EURshOqGfjCZrcnJBjqkAYuJmnqOXYu3tghk5XxpSORoG7IHTURZN9E72TvyCgLShtAuJPccW6Z1rNZFBaxdBIx7%2Ft0TufcIRgQHbSdz60%2Fi3v6C26mZTA%2Bg0p1SWKDbolSrwHdzi8NVHYNQ%2FNoP8csw2%2BhBLNWS8y78lOB7MaIaDt4oCtaTtb3qlaRq65YPwxaIzmA6qmzEw92u3BYghtQ2JC4q5pVx1Fnqjw1YfgzcfHWv&X-Amz-Signature=0dd36b22b26c0e85735354a39549df31d75da4d0d94e2e91a360db427a6aac78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

