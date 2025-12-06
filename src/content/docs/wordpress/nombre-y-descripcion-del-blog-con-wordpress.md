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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFUMGQ5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYEPc%2BH%2F7OMoudlzKMHjrmOcPXEHmHtMVL5pHwn2sxFAiEA02KBaB3CztqBT3Nrtg39UlfpJdcYdoI3LPetO6HPf%2Fgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPujEdMH2a75ylq5gCrcA6k4pqC4kL%2BwfPul2SV9q%2BTiz6nFx7lWFspLlcdMaZ9OpPJZC1CgN%2FBW3JfBSOBjnmtN87uYM8FcAaUySHoqB4vtzDfttc5Ncfd6wz4mCVnm2vhXxZ74pu1697%2BM%2FwRJunC%2FYFSLaWLzspiR%2BipFtRXA16%2B4nAQ0CkZXLNBzgnj8zf%2FCpWU7sBvpKkikSUS9y4ABBNXPzH2riKfB6CKcIwrEvBbJGF%2Fh9bL6P61p1igQk00mVqQP9nv8AlkMnupkW33R9g%2Bo6iH5sJKs3x37yUQqYmvPfOpGQXk7fWL2MDN9zrUv0p8YPpebTIGb7dwDHvK4ho9y1oaZfS66kXfrwdNuEH0YlNY%2BMTk6Nsw7l3LmxeTRdjq4zKyvhaifJ9f1xIn%2BXkZ2oykDYO0zehwl0gGiuU7sXk7%2BqzzPK3ZgNmZ5lWmupR2UzhV6SE10mb%2FtxtgnmsP9XEvt1Gg4MKiCq%2F%2FaPnk3oY7LgTz1Yw7ug8l3oziTQOwFG%2FxISTRMJVSb8TW9orSxGKnoef5sQLMRthTX7T2Bjb80P3Dj84UrhatnsfCYdSiV2yaDSWrbJnodyQS25yKRGAlM6WoKGLP6Hg0Bhp6QuaJn1rSMjZKKlO6crKQokJ%2Fc5uuCHJFmMOrDzskGOqUBH6YgAUfGDGsZRJT6AYUUSdZ2AW2FBKJkmOlHmNbDL1CyJ0H2Z0CHd2QgG82UCe7ilfIP7XxwFd%2By%2BOvOPxVCYoff9rsmXBV4iVhPoZJiW3iIjs1Mv9JSPoxAreJb4wuI4%2Fj%2BenhaG4%2BHbBF5uGbb8mVW9wBtALyxyFlDUVPr8oea5r6DPw1ukiiQYE67VX4IvaksTIQ423zEWJt%2F5lf79epw9F60&X-Amz-Signature=410d0aafbb5d90cafcc59216faf8832f7ed76803b45177339b8f0a3e183f1009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

