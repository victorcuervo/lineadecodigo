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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFF5HWV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCdHPJPspRbBU4%2FjF2T2kjhMGMHi73A4IGgKSRv3xQePAIhAKPzu%2BqPb4NxjPQOaCiAW6ExaymWjm%2B9oCl%2FPatoihMTKv8DCDoQABoMNjM3NDIzMTgzODA1IgwW3uXAlD1b4FILFO0q3AO%2B%2FpKDmC3%2B8Zw2AniOIndSOR0S57pPrLZeurdbKHo80ADKFpR1HNGCOmuzWVZNSJgst9rv3v1GOmHEiaIb42fLL62ZkaQUxmKVjsf9nIWeffxdxDVN9Sk7C1MMMP1z2d23VGzr%2BKHy9ZQ8me46GYrC6HtVyIV2U69vJE2Catmtj469kasdoUB8keNzVIqgIFWiV8BbOKV6Bl3wxGjtEtuZOiUJNAwR%2FI9lQRCond4SwLoLjyJm090BDrETA3nkpoYCG6unBRg%2BYhtZOd3Pm78ABpvvLA1nQcgduHV8Xu%2BfWBl9X9n3LpGcwDtSsJmUJ%2FCAPzw12zL%2Fy0tlfml%2BjtIx8667u9anFqft6P2oYFnbSiIXh7vM4Z1VJnv1cPD4TmOnCZFqRKvVFFiyOvYpCvHcfGx9EM2QzEvTrm85%2BE0QesEHva0KvEapMbsNxWcPPMy0Y6srOHHvUMUDebJTRkcoklKgRJkgClBJRGwGEFrmjrxUsNM%2F7EO%2F5%2BZrMVQRHg%2Faz%2FGrEVe2dHr6kSYWdCbU6JRTljysrtGza%2FWekSCgd8SPFEwvXS3iu2txW3JiK6uO2gKZfXG7qjfx%2BvuBJ5BUgfUh%2B3eh3jKls9JeyScA9r3H0SM2fGZSGdMRYDCFtcPJBjqkAa6pp0YbxUiJR8TcqvNMuG0X8nSG5RiTefUb7QeZI81UEI7ygCR9kTZD0We8xJMe1gYhDMNkpB4YODuI8%2BnurROGlvNyi7K5Q804by4nD%2BceKgkYIKxJnZmlBlF4FWPu%2BwojcgOpPS%2ByhqRC9gRnm7Uc8SOzy%2BD96FRcb1yKr9TFU268KTETpBBo2SsHfjhVvf90aTubmQBsflc3mznANT5pMG%2F6&X-Amz-Signature=b650b30462e08c26d7a9b861966ce7db5a177407a560a1b47e3e1f70bd781647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

