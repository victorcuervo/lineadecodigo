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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOV3E3GN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGENRCn%2Fh1U8ook53cl8zXdxfws6ZJcyczqKD4bMWGvqAiBkee5ImxgUHgrM1BxpvWImFDePWSgF3kuUAEKJj33XEir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAfhMCdBpFA261KI8KtwDRM1hI2oFTqHAcz32ttZePPJ4LP%2FdggMuPoVymWL3lLer4EU1E8Yxkdny9QBqy3IA8A6dXeFtBmHeJY9W6b0jEU0VD6frJp2k%2B%2FNu0W0R%2Bs2jqx%2FuEmpnl8IaR8ZGAeyPVP5b3NBEFHQpSlfmPgYs6tklbTvSFpa4zYLQOfB%2FHM9BFAxI8jeKA1FVtlO7dKn2kErQ9n0jmGJHVsuEXg4k9wVsiVO4HzfKl01QVOEsCVz3%2BcjFWvMu8%2FYZVVwt52VHjX%2F92ZsYUyjwGSEQtGxn51ycSSxbECAsqbXGiJ8bdgShyK7xJUnL7agWpoSGl8XLunw3wW9sDf4CtePv6nIppPCt%2BMNx4LL%2BU4%2FLZ%2F2N97dkShg694prRvaZT9izeiMR61HkwPSNWEWVkhaArY0W2tmVs9UIav%2BLxA7bknb7KCaBb40Jrj%2BSLw2uLwY3VQYWVT66ckxR7NAelJD%2B2%2FKhSG8%2BHMvsZYHlV2klkXq1WCQLGf1LyAeXahk4tA6HDbap1T5q9fDjcbPce9IqtCCrs6%2BjKhOuHwobE1OpKmqNr8M9Izwqky7EKDrMvGhVgG4uIDR5TdWrhkBR2lv64iZ%2FZ4ygpucJChf%2BHPXEP9dG7unUT6OD%2BEbE8%2FWkpZUw9cnFyQY6pgEarBCM2IcQ6%2Bnw0YaSccaoTySK%2By1qwHveQ780%2FbiiukdWCL7clc7BtlYfoUn%2FkAjJtyL70JdacoBoWMLqyNXyp9SqudG25BTAJ2iquDJcLmOIoXpuJyfaQhcSoUU2o2Kq1J3V7L6zsfEg3AUNOgPKpBwoU4hc43hlwF0oKj8%2F4%2BhhIkjO5G7gXqH9Bia4WCXtCNmUcijpemDRW4A%2FmA3OR%2Fw%2BNQD%2B&X-Amz-Signature=b60a0c833a9b708ac58e907ceea8314ccb9c2054cfc19a6328503458f2d4d872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

