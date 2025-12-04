---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTI7ZGC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEgVZQ6NyWLHfk8w%2FpWzU%2FoQP8d5HuQLSs1T1oPz3M09AiAuphngpql7XT1CBaLH7lDzYYLGypc45N5bYwhXso8SCCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMcJ3J%2BRiA1Z16dM95KtwDXYIKjurkAd8LINSsYFfHPw0%2Ffnn81raEdg6KNFgBHsyRQz8%2FstKujCzHpEDcmLbeNhHqPVylM8fplq2MAFK9gkMy2g8pr5vWo%2BhBYVgNMPz3Ul%2F9bx6GsN5nsApiRia0XRXjWEiZdfvOMiyyNLWEU1slb9yvFYZIUdNNLPpa5bSh7LhmhdV7tfazqO1DcUG3JJ%2BQ640ol%2FTjaQk8BP1Cl%2BR7V0ZHDxA83rdRuJ3bZ0vbrzGvqDPtiDLJZaHcrexIARfDjyNcAMTOpDJ%2BWp9jqgodq3N4O7L8lin0o0UaxTQZUf5Qt33ROyQhUNwLfV4iGf5vErgqa67TwLcAvW9la2ZMbByqRSRbUCRydOKhgIQcpczY28%2Bz9St4T2lm53SC791p7CO6FHd2lyxOO7EIRDvkJA9v9QJ7cVmp%2BgYwPylZF37Q1%2BAD2B2hBE2vv%2BBuNra7p7wcq%2FY5ZvurJlJOc6U5HoWuNAW0dsAfIHFMN35PrkpTpH%2FhcssGGrlyNZdX9Shgx%2FmCCa3U4SkedaT0oXjVTzGo3wHa6d%2BRor0h5WZ1fC4r4Tj9ACyaH0Fj2%2FFf3WI1kmdPy4%2F7sjCe0shG5lS3d3txGDOAmJICVRC4NgAVENxR0etFD4HIauYwhMvEyQY6pgH8KVAcsmQP0o7cm%2FtYKSE9C%2BtQr1BNg50mANC8vlVllqnrQRbL9aNl6NGj1e88H4G9V240MXjOkVwrJrxIEjy7ZzPa3fbjeuM2lS0eO%2FPVwpnsqMFFLKmeh8b9LFG0Au2VOQ4SGPfv33jANmy2pkA8mKHCvKR3g4mBbvsHUS4xcgHxCPpgRRg%2BSojPi5p94DPRB1GjG7nIMSrGrkNRKuf5dR1Gm1hR&X-Amz-Signature=a082cf745fc2ba110a3fec9cb8351a6278950330a3df5938c0d7a96f3aed5dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

