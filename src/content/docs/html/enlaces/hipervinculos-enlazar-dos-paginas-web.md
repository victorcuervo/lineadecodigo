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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXC3JC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxKJAwWH6v5IGJPOr1ryvvBr9zvV30AMaUcAZutvScFAiAiG2WML%2FU8sI0REF%2B6b%2FtNGQehaxPNWXhOa3kmuDmluSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXgy2cN9gluvu5zAKtwDojxvCnJRw6hvMFWOhjaGkWjzDBTE%2Bpxd2PTqdNmMTMrbjQATn9gFhPM1c5EXJsYQd3D7WejIST1rLg0Hwcpj%2FlyrSHLXiNRDwT7NTJr%2BGkLEoglOmiIVIo17LvmBJ%2BSTvZe3lMxZZuDeQPBNv4tiZ%2BOELV7taOILTgwbtKpb1m6Qs45xv5V1Lc3dxIyl2lugP2%2By6%2BRbwZsLnn2Q8GZokjuFGU9ge0WRlZNMlq0gpUqDrpUyG9IN7q1bcCm8h%2BgdVt3qPJvxRXjVR9Is0YGsnXUx4kOmZY%2Bp%2BttiYOcI7B8gl52ZT9zIrunK2Uv%2FKxrb%2FHxikdqqKS7%2FKhTxcgRjJmCfTvUHHqQhfi78BSWr0OL6QrMpmoHkkdJrg2GftFXOXlTghcNwNZYktlXinGKfmq817yqMVQ4MDwxPi6FhWev2WioMBhoE7B0RunVDAlMrGjcHmR0Jl%2FlHgxfTmqYJ5atyCr50Voebmz2%2FZ5jLaJlKeRkZXaEiFLPNBdRMrjaqdLyNUN4%2B5Vac%2F48%2FLqks7dtsX2BqpB8PLNIEBMBUpucq7wT73EYXeOnVC%2BkWchtB9lsJUQ47NGaXHqGiEfHIkp%2Fn5MQyyWzUXQIxA50%2BblMV7k95u3FBIkbV2NAwnZnVyQY6pgHNE9jjRK4jrt1hjRNzZBZ0gOuBfzMVXmoEKHyNenVB2deWVA2jscKP%2FyYuarsXrqcArzzY2%2FucouBrDsuO1%2Bet7gNLs4dxVjddglwTRfCtvsLRVV8ZbuidNhMSQ0nOLvnETyPfaa0UioLAol9Y7U2F0fDZQI2MJKhhb4pH0g%2F3YsAIQ1JGbWeXsX9GGnT81hpjWn3BIKIp4qdF3FCs5rnavBl8gD43&X-Amz-Signature=1197b00e661e6449e8b792ddc32d5a58ab05734d3f44ba3fc07ca7f54147a20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

