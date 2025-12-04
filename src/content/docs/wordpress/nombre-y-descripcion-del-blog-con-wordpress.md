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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWGJNHP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDxFByKS5o%2FBhfkO2tWghGvqc2nxaza1zYz0poYyW3HagIhAK1d5qzHSC4HCdOBa%2BCG8UIMpBSsWnSV22YxWTcLjSW9Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyFUnIp%2BP5NMa2wZkkq3AMb2aXnWsU%2FWq9%2FR8g2zTU1i5WjuS9CBdiC1gDu79uun1JcW0Dg9L94sjO3hd8K0ziFPJhbKEMCa4l7vx6zS4vqedI5MJiRQh91RnY6eQviEhSMFPX%2FapgV5N2R4pXmWlCMwuuTo88rhW1sqqevfJWDu2QAhFSpmbygLfxTzqpoiafDWB%2BF1b%2FNBH%2BzhOYWkF6pVngCdGJZ%2FOAKy1zmk7JV98HWV%2F9ACcmKvmyo8y90ysgxe2MNg1sMeXoicXi577l70mK8VTcDw3E%2FRq4btnmnLE%2Bv56MmM3DeJdWzeo8uzLh%2Fr8U3b9m0fGMZ%2Fps3qfvH%2FkZQJH7LNLNPN7EVE4FfBPL3HieB6Rv6OJvz3MZNt4aFy583N55o6ShdRy0TTrbsmAGMZ1wl5pjUaDYBUdrRLPOjhesVIIrCE68Xf3J%2FixLN7GZR2ink9hciYiL90czCEOJNnnwYeGt1nr73qlDirZKD4lr4LvfgqU75Ja12wQX%2BvrJ5K%2BQFm%2F1ir134Qx5UkyDFediHNszfo1aVg7xzDAtR4MT%2FDi9odhyBygp77Y4zMM1u9GYbSsfXVTEeHbFUe6mOPFg03YMNjVTY3vrslveFjE4OX0apNxqSuQ2umJAQ%2BVbIW3XC0nGNODD95sXJBjqkATaMUxIO%2Bv%2BsmNYNUqAKJF7fOjVdvr5485ayOd2KZ9EFE2bTNA5jZDKr4JB11g0S6%2FSJ12XoWWy5j4NabNi4MMTpet%2B0Gzvoobx3A3Fuua4dS98XhdMvD%2F74I%2FscfD1MZxs5vRADWqR%2F9YW%2BSdi6Uz4Zp3mu3k2%2BVKI%2FkFS8s8rp0TEy50d9s18R5MpJjJaMHxr1e0bC%2Bp6aAJ5KS3rB%2BUf56T6P&X-Amz-Signature=33ec6c5e3b766343244b7ac7f603ac2ee7ae321f813c81ea8c06f11bc162ef62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

