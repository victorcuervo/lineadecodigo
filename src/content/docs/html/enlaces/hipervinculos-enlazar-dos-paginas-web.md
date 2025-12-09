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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ULGGG2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuAp7bJxAxLFC6huttl8xIs6lY%2F12CQQyZDKYNiQXaGAiBKqMR0QzOXv8LZ8shcCeU9xB9bqAvwAxVp1lNWahmNFiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKAbue42%2Biqy4bYjjKtwDUH6ttZossBOXwkPxnNqenT7Llbcgmn5bm6FPQRyS%2FTdejWDT9l%2FVYCf4z3N2b8gKy5TKdrt0CmwrjaWm003kCFVAJM8JGgs4Ync5Wq37y5BgIGDXXE%2FclZwL%2F9kClurXqK8W3ndYse0lUCmujRaZjwtjHP6U4V4aBEtQ6qGT2yTM9xKNj5VoGMQ4XWb67TLxrlpTLHLHHPGaf0P1QHV10ZP8wUkl3H6XDlReP2WOAUdCftIfYojbe7kceIVJs6QQq8io7vziL2rFYoj9yDyDhoCeZdT7pEojTMZMkr%2B%2BHKo6C7OLPw1qzoNVdcJr8G5ydWBCzFvg7IpNa6rvHLRXJI57fcw3PCQ3OxSi8A9CXzTvFN4RhqBxEJIlVMT7R5tlv%2FRBNr0OHfZwfpvmHk4ukfkTcVo5kd9vLGlndv4Ptr1m8J%2BbqULjUrC0ufcEpwWj1%2FfIqVm06nBs2Bo%2FMNfw5l%2B8Avrw5efAcfhonkup9whAkBMC0zHGLgPpe0OgoiR7VXhBHMJDcAjH3vtIPxNUH1OPEFp3JRVKnliRKlQXv9WKcqvvFG7ms49AmtnI109roMzEE9KToovhP%2BdA6ethRGX347KQIs9EndMwZLo6vlZJUsFnLSkrZKADSAcw2uXeyQY6pgHNwwwHTWv3yalDma%2FJw0fejpV1T7Be%2BQ4gVmIJhmUyI0j7ZvCC3sELofJwxLdde4DI1SWJmk13aTUpOantbIUV2AtEDKLDVVUzIfsvll50TbopiiLBnkFT1cmNE7AK6UcCIys%2B5GA9XcqZJFA6AdnrXHdzRtAJJ4jv6tGhsAiyJ%2Fm8SNcddDVFxLZcL8FXZ2D2XdUUZh7lRpp1oDGTdKMRCdl%2B423M&X-Amz-Signature=0b026bb6ca9b2fa7664353e13060478d49632e4fd9cf04903437f0c249c160ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

