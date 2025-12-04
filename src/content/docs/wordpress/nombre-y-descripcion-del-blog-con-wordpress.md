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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASFBVZU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDsyOuc99NodqUpHEfb6xoa2lSDkHUiZL3mFfkoNO1M%2BAIhAO8v7pSLpSX69Y8ArYt0PTZd6y9OOT4aZEMK5AlAtUktKv8DCD0QABoMNjM3NDIzMTgzODA1IgzWPB2TjPgTHH0aSb0q3AMyXXat9WS9JdC%2Fwpo8lUQzjKJUlhBDcnR8HYIzzagorYG7c9%2BHGI6IyKkTcx4BosQBbGeUAhfFs8XLLR6qb6xJ1U%2FUJEdQTCE6bM5D6O%2B1WXdB0Zvcqa%2BWJ9Hcw1o6B7rGMGCVQFp4%2FaX6XoWEX9LgoHOc7MmIuG5Bb0ymW1MOUayKStB%2BOLY%2FkPGr%2FnGF3vstmx0OWbqZozSILqklH%2BHILE6cGfSbrFBncn%2FI9rTOJFvFFXM0h%2FU%2BBnBXooJUJQDfmwGC3Gk2kpJSilrv%2FEdUjQ7cpTsUc4twjQu9XkYigHuOAfwVJnpQjiu7LBnKVtGx6TeLsJkhuAF6ui6w7mlXCi9%2FMG95svfrw4Qu4i3k3VYQOIop%2B3rD4Hcx1BLSrNKT5m4S6Qrp0JWvXh8PxkX5HRwEONq1%2BgsO%2Br%2FepfgWXv13xnPXnUTkns9BI8ZwtrWBgl%2BHIG5yDL2zjrHo1bYVv7aRZB5eYfCoGm01gdHp2oOtpyvkDHRE4MXmNoAzNUYs12WlWTWKWLfG8HbIzhaY1pUKzzUG1N1mj2CcqaRV7u%2BI7%2FqhzMDGvpUfcxiGcVYBEHk7ynvPH3dhUBdu4Rp6buuO%2BQUdYBGgXbVxbhCAg%2FlIyrBUIwXv6dJGKzDEkMTJBjqkAZGS8apsg0P%2F15BC%2F1gxsoxoiq7WYuzkymOj9zLJkafNYusyvzK4m1Lw7Oh6uHTVIrpvH0K67b4MS5t4gOUe5N5EU2TeCbaCq07jgGzJ4wK4geoszCom0j5eLXVScR4l4uFvzVmzIfWQ2WAhIIR2xnkiTiaGrM69fyJtCPTPYHpfFvuWiF%2FxFR56khM7zon598e3R4rAAB2QPCRJgYHsVn7Vl%2BNw&X-Amz-Signature=414e344987959c55fecb06adc90aedc26c2ab1211c980c78a509601d570285a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

