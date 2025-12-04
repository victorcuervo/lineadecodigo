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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUX36S6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjgI1oShKvbn5hgUb7so%2BaymV8jb1Tm1FmveW7kEOX0wIgSuK%2FMEVbTy1kIfxAwKx%2B3VmLL6Xz56eg1ZaoAEXvuBoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEAmD8pZnuv8AjTZ2CrcA524hYDpVJSYIKYeZDBedHzg6TQsRliSHq06xXM8EbcKOZwMl5EjXgqULSK8rTLc%2Bwa9R%2FZCfg%2Fe8A6hm%2BpftHudd4DJC9gDCeDRN70oUV5m7bFdiORx3MidOzfd4zo2oTxcUPpHO%2FJy7z0Ydhd7vNfc1kkSdcUSUSLdtEicBf3w1cg7KlKAS62jT7%2F1i%2BPMEUWjGaBcTjmHwd5Qn%2BpS8Tr1XXfRa9LiyBvVuU090yVLuAJS8MQ0FQqmATNeyU8O09WKXPL66Rmo3iHo90B48wzubJpxY1ZSXgjtfzmoLgabPkaiqpxLR8mcjhbDUxgGEGH6sNfi8aOHBG%2BjJAca%2Furvfp2t40a0m%2FsVGkNHjsdkd9BQXkdju8GbOczVnWekMKUgW9Zkc5A89d3sCyjOpf8nCV7T%2FnsnN6OCpJstDnwIOH4eqtHGdJAJx74%2BzHJ%2F2wtIIAPT4%2BL%2FtJ36iQnBZY1qEmi8EbbXdzpKYWNBd0zNf2PjNW2o2TqNfEqwDOFXwV6Aikzdp5dwH1tU9lgZz8vK3k%2F4CP%2Bl3nTCOTa5jqhbiIRvZwCLHfEzc37%2BPCn7fdYnwGx2u%2FBKqOaCO2mMmntClfn0fSYp%2Bg3ReMa4dc12phbYMZz982U2W5YrMO3Uw8kGOqUBDLQQIX1YiQM0y71MYEM1sycfGS5zItLv2Cy0FGD1ghrQZwiqpU2FmJndGA7wHQUTJIod%2B8jWMtUvGFecc%2BaGeujPcOV8q4PhsHeLDjebRetwWS3B5D%2BHOyG2GpG0GgfTW4PGw8TeBD%2BKFHCbr6EVquGdi4yCkZuh6Cq67ON9%2FQnA6PLjplmvdB44iv7gxiYdkl72GGiKlE%2FZiY9G4B4kODzVqfkh&X-Amz-Signature=90af718abe6100b789266bf717488f9e12cd89ee68709018780e86dcfde7d0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

