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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVAUTJSM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOF3RlydJYSjDXwneNyiwBxkRjcFgaGH9aXfKD3zSkUgIhAMfhqkREs2cMxUbdNKvoKzhEi%2BLn%2FM98SidE1IYrod1yKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8s77%2FZ3RNE3wpIwkq3AME4wKfsHEK46UwVUpn3ogTWOIryVmsK46F3Nlpw63v%2FuGfSj0Zg6U0MjDixAUGyOmhDYatJAP%2BuGWGZRbJKhid9BziQwr5ZIkH6RWtGs%2Fbi%2BftSKcAXpClUaneF9UCHMZT7ghM7zPbRzLbBcFV0ND0AGVXID%2F%2FeVcK%2BEuIIhl89buBqJXS3A%2BsoX5Yq0qq%2BXQNbdC%2BgeF%2Fu0zhXTTmmTJcp%2FVDXEhZgzAM%2BZAc1V%2FxugibOT%2BFdYbjXrtaxHiRG4RfjtXEjRCkL5E9%2FmiW54ksHnYtuJVlebaVNyB1M%2FExAebZy7sw48SDbI2Hz8CjLFyY5EVq5KqputvKrNFGvB2vgRaVzh3shV8eWMzbcTHm4H732beEtFNfnWW6bb%2B01dp2CzPjAgywK9PUXzdarYrX9Z%2BkpM5bD4gtzygbfzCaikuIrEAdy31qL1tVg%2BMAS%2B1cUk%2FVbFzVwf9ddx4AMBEOT5%2Fq%2FsqrAUNsQ3okaJcfnAfC9AH5wz6u4iRJwTEg948c2Y47uPv3ww4Tp1lvpSvcJ1X%2FQv4k9v2LpSwhjDKXwM1GovUdDyc9wd4O5lfcfYW%2B9Iomub0QTMmgWdht1RdqsGt6lcHDKWlzi4OU5c1mQWuj9RDXZtRT7c7XyjCKgN3JBjqkARgrS%2B13GJDgJzqkcHxZk7M2JJprlMywBNJPiHfVd99f2IYGA9tv16TjrjHk5N86lahNtNpbPlRR%2BciWDAipT3px3jp0yWOeD1wPLJEh4b6S4Owc5VqnemAIe4GIWQ0iBOQNccDEBZti%2B6iOIQp46OsgtVdIJiOyZPmZDv8xODY7SAb2Zimq4UlePPwXi7n3UCdIHPB6Z9muiClfexx8gUc3bQNc&X-Amz-Signature=ba92e736597ddc08b3f52230cafadd32eac9a8d7c1f883d4ca5c592ddd6fd7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

