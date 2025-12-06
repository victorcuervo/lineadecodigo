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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVDU2OC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrKqtVj9BIsXDtco%2BQBtOO0oHPrjkfIaI3cPWhoIAReAiEA91GllKqzw2gGrvUXVsTgdQGaAUnOO5ZDaBcWMspC21Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJHuT%2Fp5ZFSAnRODOCrcA9nkC%2BInuwqjOYxCaitcjtlLtAwC3j8EJF9ySdB8GFL%2FW312QQZfCKzmwAiq7952c9r30Z4yqG8YKVikiIi92Cu69IC7bhMH34UqMSjuFymH0%2Bv8MhnpjYHHK5bV7enJrpPXiOgRFkBFS2qaN5m33d5hICavoHXa%2B4rqBUPnNqXYdirNWBd%2FQYNP9KcrMzQdu7GYqwZDDyaOhJbjQ4E4hjUsKUs3zH%2B1nVNgEPWXr6rwOXnr%2BAQa8I%2BPNuYihhKFU9b6OVGT8HfQ4iaG%2FIPC%2Fizfkw1O6fa%2FRIy%2Fe4X%2Blo2Xdl0lNch24CTfVvy%2FMur3GTHObxikm8AsIMSld1U2DfEK9tFbWuAm6f8SrULFPfgYFGVtXsvBJktR23JOBp6WTADW7ey2t30xFu5nexBKbXEP39As5doDb4Xk8kr%2FHlRzU8FYzI65Pk1l2ulE5KBNlhpnsb5jwgfnAJ86pinWOilCgHa%2BoLdZgRr0tIebHL%2Fxf6SFdA6o2aA%2BWTwTMdqJImyXtvYwYW%2FuTExG6Z95KseNvHq5Sc3RTQ5mRd%2BSDIu0GWC7P%2BoPYRDFw2ZPLVpqufiZvPI9xmgEpR%2FIFIGSy2e2FHZwUaM8odb9BVsaqof%2BcRz2C9g%2F1r1ey32PMPPK0ckGOqUBctYxcQD%2FlVPtKsifEigZVp6GOMm%2BvfsCFpZz%2BPAV1EVO0sbX6Phva3K7mojp%2B%2BrCVTxWmGjjVtFoJ7p2Uz%2FPFhDXvuXRh643nLP%2FXexxo8nONa9qqtngK%2FHq5T28tETlnr0tJJU%2FDwTFILZWbo7ggQ74r7AM1Pw9drrsuqOcTtaD2WHnQVqFWo52vfCaC1K4vVjiNYq%2FhMdX5oCu4oKKvuyhSHwd&X-Amz-Signature=dfc826dd7c87266f323add6b3a87e235c6b596e67728604bd6455b38ba22770a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

