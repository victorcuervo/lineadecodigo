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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIBFDSA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJcnTGm%2FSNf4kETt5Ko8x%2BGa7QLp6SeEDsOVrYXrBWcQIgNHqwbi0YzGFG3mcEnkDe%2FYYwHb2qMFzu%2FLzVfJleickq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHvFt%2BZVJy06cp%2F%2BrSrcA1l9so0ZZ6BrpfMXscYhYVZg0obEKuFQLDJ%2Bs3%2FX57zClWkdh%2B5eODatEv5p4ck7yKinnUJiXJgDAco7QlBYQG%2Bj%2F3l5su88BlLPF1CQyzYzLK7Srw0ZP%2Bwui6%2FncqxoiUGN0LAXHG0rLV%2BlySBTGMw%2FIYZ0tkV7V6fXUENQp6v98OeNf4bfNj2HcoCBoxg%2B1Jou1YQ2DsOSoTbrIuZQdtbCjq5P4X7z%2FMaIOs4dYmKiva1zfsLOlwbtfD%2FwiHy%2BLNv0mcP0hI0fNvpGDUn93%2F81PbQVAzqQp0T77vqE5pOTZoS8E3zsz0l7ZPk8IUJ6stw4QXgWTMi%2BNxc4L6lDg7EiZ%2Fd2eW1jNJWb2hcNOvhOF1b3FdnoWNHjaImxwogrGT%2BxvpkdmJu7DNYqS2k7ICfu030Xt13R3k0%2BSkQspM21ZuGClmTMNIYZLVqMyDWu51HPV9%2B%2F6H1B0D3eI9LQXDJewDmOf0cCouaujc1l83EWyL%2FUc%2BiIszXQjQ2kdcRvOAfvfQKnTJxoeKHdLpUNnZ6PSsrsu0lUB%2BynbRX7vM38wuqiU1Y1uXU%2FWn1UFnf65Zd%2FgEs0kqvI8h%2FDcYlj4ITZYxJ9tqyjD7tGDokj3ftB4HheBUoxDcuT%2BmuwMKiMyMkGOqUB5ns9RnL76HF51UQCPqnnlYNxN54SkXq6K2dr3WwZPZ0Zjbbv8BnLJnlThiwWzmKFw8EYJCpR6rK9mWAJfxPEpRf6EzEAtkKxYWQLBvA0l6qB%2By5%2B%2FeX8dk8scR%2FcCvmB9gaktr8u4tyKzwDO9e979pBp7o8Clb5yTSYQSDbJMpdagiV1%2Bz7ePwaO%2FWNYKPDjuDADr02MsTPGIygID5aueV%2FHBM6H&X-Amz-Signature=cbdb01ae4feaf666ff6e1aea6ea2a3df09150928f8faeb4e062cbde70ee50fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

