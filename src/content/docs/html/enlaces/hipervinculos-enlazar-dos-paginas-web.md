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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM6JG6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDatOqRzjLauHXgm%2B2u4jd%2FWOoxXomQpBZGhTVe4DHPngIhANEae3I8AH%2B0BDlXfay7ivDwXw9iRtR261v0mM%2BlE3TRKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVuvuoJ5fogd0S3MAq3ANvAhWdLMRSe44ytbCNltoTPz1UioDdI3GsWFi8eCaQ1ZA1o%2Fm%2FwMiEvCC13oWI%2FOPzeeBv1QGQwMnhW5EAs%2BoHvfCRyH7LrEolvJLVFsfoiGnL0RmYRqM8c9AnSVp9xM8hlG1tB%2B%2Fu7AT5PeJ%2FykCLNVWNtOtnC3L%2BS6pRL%2BpoVXdpmgnJpHdtDw1N0CubsgZqDAtvCC2bQydagJt7nRHXg8uQPgSVS766vdVKkxA2U9z44%2B%2BKgPqf%2Bn%2BHZ3TqMXRbKZCBiVSC%2BrvtjX%2Fai4ZhcKSiZyS2smX9jXM23tnubTAKM1kJc%2BQPc%2FhYmMPZThzskWzIMsL2%2FBSF4QksuFgK7zBgKBkQA%2BlVXLK3T%2Bg2Os8ZpiAYQVXuqGQTCWjKNLyEtdKBEAC9ARF5mMV7NOUSkULYolXe%2BTlqC7haiu6sDpC%2BYX0n5lqxms9wipBaNRhQbfMoG25UC3dmU3UqFerZggGRhMWATfq00%2F5uWPfs5DXsFV3CGLgccIMGPqVZN5FUqJqLKZ8ziUf2c5zFLT%2F6tRt4c2wNpe1linHDG1LA6FjMnT9B8c2MH9f3tCEmZqGgL4BFPI2knP0p4VDLI7eJTRq6TRsrwHE%2BLazjFHAhiFCFIKiNsJaEF3%2BN0jDQjt7JBjqkAU3%2Bxhx0x4XchNsuXi2vgxGRNUTYuhVPYDQVsnZBgc7amSnX3JlGEAh46qIHtrSTQ28k1jdixjLwc2YnrSxbfUGF73zuZfRe57UR6Z5SXfV48YXDMmaruMXDwcNtnOf8ZXAXk4mep1PW9KIDrtOf5T4KaWW6%2FCN9xF%2F9MPXP7w8SnlcfKnW2kx467C4mKexYuvjk3zF%2FDVN0fZYBIs5bXCzWlLEg&X-Amz-Signature=674afef27f7ee22e377a820c6fd352c791dcf724f63eee0260e34d08a7ec3127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

