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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGX2Y25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1CZ1ao2pLd1ILhoSmyo5o6tiCZXWmiJnoBhWJ7E4d%2BAiBFxKp3ANVw6m%2BIm4RtTxxVREX5FCHwfrkrK6Z25aINhCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMVmu%2BatE2U3mcbtf7KtwDS1Jw4AQRFRksYKPp6eu%2Bq8LIQD9LW2A2LX5Lteq%2FWrz10mCRMajp%2FkvVjL5%2BZmldBYJXBdHgannS3NmNe65lx0UTefVzdybdDvdSF2ufthEMFZp%2BSrOyeQT8Jl70Tym7vEiiFCbOV4mjXSEBUn16QI8eCIYyV1sn0WRBDP5IABp21eRaZ4iElXnMF7WWXNZe1A3nqCUNQNVYTxSiVR%2BLKf8bIOXRGudsJeIpPONlPkUbquhOkbicLPcjG34pXWewlQlrhYBxvTE8U3QIARBEB5WcI3dQj7KtV8XNanFKpbiyankWqUd53WsbxAW8JqwyBdgW5PfBurL0MMAWHFoQSjMR%2FTGCq9%2FbgbIT4Zpe21PcUolttSjLuaYN2%2F8C1kRAsV%2F8ZHWhElqSYIZH1rFcXEWVnJIgln55RoxOIqTGSb399xWlEqWawtx9W8gIzLHhgCo1KZ82dDIEzHok0wgtdKUgxXBIKD0nt9KUM9Ef%2F4DdV3A3ZD77Vw0p20TLWvksTo9A4%2FvH5jMimkK3PcmUUzgsEMGyQZ0YgJynvVI2T3r3vMFMN4BYpLgpNeGFR8PksIYyWFAVP5nPucK%2FXaWcyHJGNXEvidcgI7ne6vLbZT1z8Pvn0XUWCvtppgAwtsXRyQY6pgEMYyHfUL9I8QiC0UhmkaAdAGQds%2FuFrd7R4eSHcoZtwkdyQGMDW9S%2FRHxYv7LrJbG74gCgTRaUhUHVnNJ2eJO3Q8OWzDXArvS3%2FfFk4nqiEZG4jhbOPG5psUXKP%2FWrY%2BeoX7r2ePz%2FDtdwKMdUgbuWK852aAEtucmrSBsvCul1jewlZHT9g3twCCm4AFLLd8TvBO6kdoZuRSshUxwfi6nrgyZbelnc&X-Amz-Signature=d7e85e7c566dec094eacc54f28f544a25c2edc8338ebf3e075b1324244b88a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

