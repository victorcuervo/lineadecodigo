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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4I7LY4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQj%2FRpNnDkKhh1b1SuRWteTYsJVii2TDobYEQAh%2B3DqAiA%2BROm4nVDER%2BGqPKu7KGC0HOeWpwNvObBvSywogZSXQyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCIRXnB3%2BRv0jEZJIKtwDD1APdBsAL3crZBPBoo1H9NJjTprOTJf%2BpUkn%2Ffq11Oq3bmBbJvXp3UbAQzzUGTzOdKosbc1FARF%2BovO07e%2BITazA6m1w8FpXhb%2B%2FDVUbb%2F78Vb0NNsjw6o81KH7beahC38xXOyldbmBCvjLroK99kTk%2BWVY%2FrJOnALKnT1ErBtl8DROWgySCnT5btlt%2Bf6tH7%2Bd0NS5bgKEWBWR0YrmLpkIPSLJVTc%2Fho%2BzZF76hEHunFbzuWWnz6N%2Bk%2Fa2BplaI2zR4o13VR7Guow7AEwfAvQmAKYxHF7f53nTRMr3V3%2BRf%2FfiN2ojGUzhHYMZeaXuiW3Aky%2FQeVwyNEYNWifDReh2MLybJ2zxIO%2Bw1VDO8n3%2BfhXa77Tc8RSHPwJd2Pk%2Fq0cRH6Sjhf6pRcIM3kEDWylHpAvQed6zjHuZrF6o3LZhsMYsqZz8TcwrGiZkKJAW7CfOYZAwYWUK8z1hv%2BOTqO3GlSoOo4y2jxBK%2B6WQqV32%2FQd%2FtSL4Nt1PxuGP9ftCK0721y7NRMaJs3M6j3q1kkR%2F8m0xjZ9rZ7dPLrzb3UkmXVA5PROKxJVakxDTZsEbEw%2Fm6kA87dHqiSZkpziDJ%2BppjKS5KoHoAar7azXnSfneLl5Gmb3pa6vJdnrIwmf3SyQY6pgFYCp41zb7rfJ4KHxvcunyVfZZAq7t997Fv7euJf5270BSPO8cGUkdR7F5cyyBRJovnRjDhWpvOeG6c2xX%2BZQrP889DQy9Z3avQmucO0VZlIUnvoNk87cyhUlQMPlnd491ID5ocOWz4KiFYw021qzQY4faI39Fed12bA11Af7UW6vcchNbPUpIWt3qj2uj8rrV0uwW%2Bi3XGYt1k59TtDmc4pw%2FQOG5z&X-Amz-Signature=7e580beda6345e7d576f4d6223668d1240e0dd8399a34f599abfce2913bd207f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

