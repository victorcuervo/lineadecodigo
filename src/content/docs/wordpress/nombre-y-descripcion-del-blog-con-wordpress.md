---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
author: victor_cuervo
---

Vamos a empezar una serie de ejemplos relacionados con el desarrollo y programación sobre la [plataforma WordPress](http://lineadecodigo.com/categoria/wordpress/). Para ello queríamos empezar por uno sencillo, que será como mostrar en pantalla el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/).


### ¿Qué es WordPress?


Antes de empezar con nuestro código para saber cómo mostrar en pantalla el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) vamos a ver un poco en detalle ¿qué es [WordPress](http://lineadecodigo.com/categoria/wordpress/)? y ¿para qué podemos utilizarlo?


[WordPress](http://lineadecodigo.com/categoria/wordpress/) es un [sistema de gestión de contenidos (CMS) de código abierto](https://arquitectoit.com/cms/que-es-un-cms/) que se ha convertido en una de las plataformas más populares para crear sitios web. Originalmente creado como una plataforma de blogs, [WordPress](http://lineadecodigo.com/categoria/wordpress/) ha evolucionado hasta convertirse en una solución completa para crear cualquier tipo de sitio web.


Siendo el [sistema de gestión de contenidos (CMS)](https://arquitectoit.com/cms/que-es-un-cms/) más utilizado en internet, muy por encima de [otros sistemas de gestión de contenidos](https://arquitectoit.com/cms/listado-cms/) como Drupal, Liferay,…


La tecnología que sustenta a [WordPress](http://lineadecodigo.com/categoria/wordpress/) es [PHP](https://www.manualweb.net/php/), por lo cual los ejemplos que mostremos de programación en [WordPress](http://www.manualweb.net/wordpress/) serán [código PHP](https://lineadecodigo.com/categoria/php/) (aunque en algunos casos también utilizaremos algo de [Javascript](https://www.manualweb.net/javascript/).


### Características de WordPress


WordPress ofrece una amplia gama de características que lo han convertido en la plataforma preferida para la creación de sitios web. Entre sus principales características podemos destacar:

- **Es gratuito y de código abierto**, lo que permite que cualquiera pueda utilizarlo sin costes de licencia y modificar el código según sus necesidades específicas. Esto ha fomentado un amplio ecosistema de desarrollo
- **Facilita la creación y gestión de contenido web** sin necesidad de conocimientos técnicos avanzados, gracias a su interfaz intuitiva y editor visual que permite crear y editar contenido de forma sencilla
- **Cuenta con miles de temas y plugins** que permiten personalizar completamente el sitio web, desde su apariencia visual hasta la incorporación de funcionalidades avanzadas como comercio electrónico, formularios de contacto o galerías multimedia
- **Es altamente escalable**, pudiendo crear desde blogs personales hasta sitios web empresariales complejos, adaptándose a las necesidades de crecimiento de cualquier proyecto sin comprometer el rendimiento
- **Tiene una gran comunidad de desarrolladores** que constantemente mejoran y actualizan la plataforma, garantizando su seguridad, rendimiento y compatibilidad con las últimas tecnologías web

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSV7OLSN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHIX5rmtXeEOzhsxztz4cTftJpqVpyc4n%2BNiRJ143qZaAiBsuYGMjCRPPyRkRUhElh9AWEkx7CwkT8pVsWqICjSY2yr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMDhtgoV117ik39VYxKtwDKar2mXOqYBeuF6Z6iOehTe7orokCE2Zvc3qqZI1DQr1Mf%2BKg5HSXSB1dEexi%2BhiWgOGU%2B9XtoTw5nS2%2BJOKAt4U582oh5gavPkhCB5hQP7qMRdHDN4qiDLZrz81mhkmJjFAkl%2BZPHml6rbVKfv8ZaeqDVrZ0xjulgj%2B2OCWkSqu10Ff1A19QDpbwnf8VIKpwsrLa%2FjINFt47lojodg12VI9zJShVSp5IHItpxRzk4xwW%2BznC6QQwk83mr4nesaKFDjXSQSkyFAvlGT5r3rLZG9CFCd1Dw%2FWcxeIZgp3%2FEu8b429BFCad%2FfdCI3HtHfgfT7nplklw%2BavutNBJgtC%2BuhdC8rj9v0JntAqe5qkdkHCzqYO2nWGVPFsE9D53mRkiE4GiYx9X7OP96YeZ4wmlphl%2Fh7X1SgvFCuG6HLSmo3WeXAaExjjCyiyKJOdBDBu076r12j2B1i2Z4hbhgKOQq3BauS5IB5cRnR7RhgtqjQtEX0CHZg%2F%2F2iwft%2BLpmzfliZGG3%2FNoqS3VNEVW6Hc7auxXb7exIhToT1EiWSp8a%2FzMtIHaXfROPWE%2Bri5dW9Jxn5dlNfJ2OUy7pX7G5q8%2FFmE3Ysz3LGKp9uITrGqZs%2FEG6IhuAUq2AlmoCRQw34PGyQY6pgEocWEao%2Ba5Cd2UzATHup%2FH%2FAMgyiCP9bgOYFDVSSUB7DNO0gDua1ueymfuoEjx0ExkmGeU2IkwBJmq4qFjHjqjKSGpnT9Di5TDe%2F5KzIThBWi7zLLH5GzxRmcZCFmY%2FZZGMccuFsXR1OBzli7C4juUid3FtlwFikOQ%2B98FkF76bpBA33%2Fg%2BpX2RB2mQrlmbpWxXzc59zksEvC3MCyb25qGxMlZpKug&X-Amz-Signature=d28f3217cb92ace25b38b9cab0fae0f28b7c6029af679966a2ab9bd041855549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Fichero header.php para definir la cabecera


Ahora ya pasamos a codificar nuestro ejemplo de cómo mostrar en pantalla el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) y lo primero que tenemos que saber es la estructura de ficheros de [WordPress](http://lineadecodigo.com/categoria/wordpress/). Si bien, ya entraremos en detalle de cual es la estructura de ficheros para poder crear un tema sobre [WordPress](http://lineadecodigo.com/categoria/wordpress/).


Para este caso en el que vamos a mostrar el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) basta con que sepas que hay un fichero que es **header.php**, al cual la plataforma lo llamará cada vez que se ejecute la función:


```php
get_header();
```


Si queremos mostrar el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) vamos a apoyarnos en la función `bloginfo()`. Si echamos un vistazo a la función `bloginfo()` podemos ver que su sintaxis es la siguiente:


```php
bloginfo( string $show = '' )
```


Dicha función recibe como parámetro el tipo de información básica que queramos extraer de [WordPress](http://lineadecodigo.com/categoria/wordpress/), véase:

- `name` - El título del blog.
- `description` - La descripción del blog.
- `language` - Idioma en el que está instalado [WordPress](http://lineadecodigo.com/categoria/wordpress/).
- `version` - La versión de [WordPress](http://lineadecodigo.com/categoria/wordpress/).
- …

### Codificando para poder mostrar el nombre y descripción del blog con WordPress


Para poder extraer el nombre y descripción del blog en [WordPress](http://lineadecodigo.com/categoria/wordpress/) necesitaremos consultar las propiedades `name` y `description`.


De esta manera nuestro código fuente quedará así:


```php
echo 'El blog se llama ';
bloginfo('name');
echo '<br>';
echo 'Y su descripción es ';
bloginfo('description');
```


Como podéis ver, algo muy sencillo.... ¿Te atreves con tu primer tema de [WordPress](http://lineadecodigo.com/categoria/wordpress/) ahora que ya sabes extraer el nombre y descripción del blog en [WordPress](http://lineadecodigo.com/categoria/wordpress/)?

