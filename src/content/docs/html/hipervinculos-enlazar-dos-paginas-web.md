---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB2VIQVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEkbhGcRLkcYtqgBGkfZUrlWMseFIB3AQ01%2FM9on8wpwAiBmJHnF4lJhbR2w%2B1HddPI9iAPQKxPDDwbk1KIfzi5Buyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM9%2BCj8ToVaxWPj2GwKtwDpPw8Ne6uvrDIOuNMzO8x4smpO8kgTpNDNctWEXBd3X9a5Ztsm1i7rc%2FGAtcGTgJn6A0cFTAyCYVRhnF%2BSrzUYt1ZSbP1BY6BE6YWubaIK2Wq62sPf3an0fH79oQM6HaSlqZvrxJckC5OVV7o0Py1WWV8sAbmdTkKiQ2SxeWotCJfI6cDlKhB1SonThe4NTdxeVXL5qBksfyWDeRP4oAoZLBgA5CRP2g5DW5VmY9YcjApap0bW6QgLobT88%2BxrjqKAyeWxcdr7Ql5pC3M7HLH1kLlFzQrG4sO%2BUP3FxzT6%2Fg4z7Ou2KsI0jOEnKKAkIfvV7U4ZNKkq7mH%2BOYAmQsKHgXzu5yE5bIUP4LzZnjs%2BngXLJksOQaHmeqwKbjInd8Kx4bd9ALuLWIwd%2BdJ3jLnMsirSNxK7mQj2qvSi%2BjRMR0j8vlYw5ekd7Php0gVDSA%2Flhs2CtDg%2FwlB8W%2F3cTNnd0dkdhJIQsfw4XfA%2BDULnihXh%2FRklFh9ehumo1lxucJzwuqWa15WsgWVgvBRSmet2qud0oG0fe%2Bf5SmLRylJ0VGOw86B5sJrJdaItyTTJq1rhckSIgBIVDdgLyw6BLZ5fDGas7QaboBlhpr%2B7%2FKzA6yZw%2BQNbirpDeAJSkMwnb3CyQY6pgGKPOhthIKm44X2sCMFRWm%2BaDGnuRGSHrIP4StU%2BmA%2Bzgns9DMeF9xjSHCaRbTnI56BK6Gf5zIeGl%2F8HtZ9zRW1HPoniC51tWRzLZ%2F1kAyp%2FLsDCWLncZb1NM8MU0XKEjWnTSygV7YeM07hxJ97yZv052yu8hjmuxjWbjZACfq1Vas%2BcDpbp8saZHYu9INlR8xeW0gT3hVSXz4Ff6322qtN%2BFmtHiVA&X-Amz-Signature=0b7ce098bc38f250046aba41dee545d48e09d6ad4a55b3bca8c03f64bcf4a5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

