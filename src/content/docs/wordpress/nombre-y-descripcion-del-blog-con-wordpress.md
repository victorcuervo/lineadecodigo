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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTPB3XR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWEySF7UNS4EKIkluRkapddCt5PPV3HVggfAh9RTJVPAiEAoq55fxqAyXhuuHXYh%2BXEYbsU9WlN2Rk58g6V%2B0%2Bttdgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLBcORa6K%2F8rieejwSrcAwtF8XusW3iH9Tw7ZLWQ2FWN8fNKxD67ysXJk9jmGM3lS1crQ5E4tqiBCgJL%2FncDC0NbueW44Q5shATkD%2FONGMk6GWNos5%2Fi%2BaV6Lm%2FuhKfO8PuVNlSigoXeB%2FWgLcg%2F8Ydn5nciBgdt%2BNlEbjrDBLxYIfol5fHmffuJDn18U7%2B5KuD8cyz1Tiaf7yGQheRHzkSYNXYH7pvAtTV%2BY8jIsam87G7Iip%2FyB3g74nRwrUBYc%2B7rF3cewzHJhQ7Ijd6NoBW%2F%2BhZL8U%2FIo3vPw%2BbZWSambT%2BacrdMC7DXld3imPtsQKVKOttUJ0wshlHJBBo5bfe6Lg%2B9JIaifToXInK4x2AF7sF4I3B7NoS7t0XBljw%2BgLklja7C5a5Az4PBE1ngSVQdjbGCGFlafkcPebm53j7ERvsBog07Jzs1p4fbfYHNkqcRG7D%2FL8GK7JfKQcazU0MmPIwO%2B81qeRLjt%2F%2BYAC04%2BqnxzfYv8UHYKaHYYul%2FhZs%2Fd03yJyQDbazCoedVE%2BmfV4HVT4h0DNsgdpubTM2cQ5c3g5hdlubKsTbbbx0s1rnRa3IiWVtKOq2IfR5xheI77jdwm0iX6mNTBSiIyPz97JEzOf7%2FERaFXslSYTHlZTqhCE4ZVmRua5WwMJ76xskGOqUBmoHPsYUFH0sazoTl5HXb5vgnoOnM86fwE7S0NJS1sMEHsaUVunheFf8M5TOVtNLRlSHDt111B%2B3kzKVaVsAm%2F%2BjUTSw81yOLoDkuVOlp7qKFAG%2FKF3a8LVIMnlOYQ2VU1N3me3YqV2ULdE4IPpr7Nx0B2w0LAXYtDsI7C4ngODsLoOuze3G5qPBsPSQ6HVlfWew9vWAPmYfVQ2UF84Jid1zWP230&X-Amz-Signature=c175f1a2ca8f4fdf71e61828b120ba47c3b91df6a668a3959bfb49e33e322de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

