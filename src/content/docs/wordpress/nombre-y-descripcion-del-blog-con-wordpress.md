---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
slug: /wordpress/nombre-y-descripcion-del-blog-con-wordpress/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLGQ4PP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDur%2FpHg5JnjCRjgFTfmAC0%2BOAev%2Bs0voPpSHGqb6O5vAiEA6e1qOtL2NrJ7hGYMcvprkGqc8T1ehln0EJDqMGE5HxIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFvFX9iFsJpfEcyQ7SrcA%2Fp6UA7zR09zscX5NUlsRT3Yu%2Bs34Wg5EQJZBhU88%2Bl4ZYA5t3ROILDRKtypYpJrKiYaHYo%2BWW1ItlaRCfoOQO7BcAvaXtaRgGLEAgHvexAamWYmMH%2BDRHql6q1y%2BaMmIJ7fQ85%2F7WSiGbqE8g0J7CwHHzUQtO4njeokqLnZ6kPje0hcnet2z0cQiJetXBVRV2IwyUZd%2Bh4xMmxMx2fS9RrAkSqZb1nDkPYQBReuQWnFZ0DXtI5SUZ8xW4swMcw0IDHdnMtVOW%2Fwhxmq2dj1pLdE7IGZYIIVQmeSf8AHTnVKLJ9ZToU1qvIaKoYaiTLZuTmqGKuaxD947F8BfyfAkokoQRorkFj84WimjZFhlHS2eKj4T5QtU8K5TCrgFtPT4vdPLKmipZ29tVyM%2BPzFbmW%2BncBkAu3E0HThPN6cDNhJUuw3Cr8y8TtOEts13AZ1aCuYCequklRFfYQL%2FOPLJtdjAlqVodUAOFCcIJEQ5SVcZK1AODIlMRnKPgradteolBqC6yHy0%2FyrBbH3QFsqt9vccYuFbFQptR6vAz0Jz6tqo0pHRmbcI8QqC5y%2FZeWNyL3xILmh1Y0LneukObccAhWsJ1x9JyMv3PPY0oCPmLizjA%2FzomIMMDV0SPYsML%2FH0ckGOqUBhtePmqunAdHOhtk4KmmnRAwCXCV7h0g3kLo6uX2BwjSncSPIrKFKkzI0XlduUTvtU5Oe74taXxQ2X2a%2B3LWydeMSzVlJI%2BCKF9rh9BdAow4gfd%2BhSvYGexmPSWXqbrjR4aRDd2ee5oflp4CmF1uDuJHQ3Bq4LeA1SE%2BuzsF2cVfcdAn9EHvnYaAM7S7j%2BbssCaaYbgv3f1NBkFF%2BIFRjL8SwFvH7&X-Amz-Signature=056262ca0e41daf82b8775fdd7d6a0d4ac0d26c5a0c27ed651f7789eb90e4ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

