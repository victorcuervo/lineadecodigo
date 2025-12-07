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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNUDIP4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHKOhBEWzz8KLtSxJ3IES1Y0V4xQykph5qEbR5p4AKIgIgIDuWCl1lZjr51bcD1OrwXebU5JhOcXM7zbOh3Uyx%2BaIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU2DrjCCFUHfYF3ySrcA4bwjhSdLokfYGO0udPJCsIH9GhSEQnuDwharYbkf5MPA6%2FU87VR9J6Rl5JNas1%2BSGnihDZ4u6JCI6Ebyie1M6VshYAnwccCMz0uTAIMGQNZ10tGQW71SCKNxWYTAVvf2mHpp5%2BnIS1fkhdAlu2ztFn5AubWnOCv2KzvYyNcb0QZH7c81GuABtMCZafzwre1fAGQXQRZ8%2B%2FkBd3MI%2BwADsqe5WdgVcNJESk9PmUc1%2FFbgl00az3IxDm75H2o8u8ykc9qptMMZKiYP73agcJHUadCt4kumZPNhGnZ4TrwGFMMZqLlkavqnTzN2wNRyEob8T721%2BYgyWoVUnYOeZ4E2%2FlR5z2pmKVaK4aYcQVSZBPo931VJ0NqxMdTNVu%2FQAX3h8wdW4Gelnkdto5DvXUiJPS%2FAsmr0%2BIncgLSW%2BA5fygW%2FlQyLD4LKxGTIArdfFYxuQEDkH5HjNee7xZL7sVla75dRWBq%2BOKq5HgpJE6gAlTRPFWjGXfYjrHOH1lyLVJSefYektordA34eQYmX%2B2xxbWqr65DUcamOqqzHhA0ajfwztJ%2BkiqeZZ8TH14On4klyydVNUP5yDt4Yml9IQ72nPnuJDkw3NVT3fVgJ7yzqkhPv8TIWUv9Q5o8R9E0MIv90skGOqUBvCrdmVQFvlwr0EW%2ByKiCifEz6J8uJ8yC9fZYSvW6ItVisrtFPYP1meZ9YT19q4CIZz42h4H1VhfqrcFYJdcgfE4Zc%2BnN85DY1A0JYcCHLGmCSDk0ttFiaqNkVJ8zsuIYWDbfphkUPJxV0320pNsJOQxMx%2BeoUsTKs1ITdS8cGfcKHCYVnLMURRpl%2F53gJ1GmXJxuBD%2Bq9Bs21K6Vo%2Bf7XNHhHif1&X-Amz-Signature=657ada1c6189604465b51826ee477c92be5d9dd348cefc4d58969c4b34b27347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

