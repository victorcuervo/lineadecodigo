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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C3KSF6J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGnnODchz847PtnIS6II0WV327Ty8wKCQtdAgUppwOhOAiEA64CJd%2FnfyrRVE9dkrDgfR8NLNa9AVxTxp%2B9SOrhfTTMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMCI48iHkLWUzRs7FCrcA1WcAWhTIblasVQYUQiLkWRL4Q%2BJ98MxPA55c%2FvZrIayxTi8pqNS5PPGlbWGWh1s5h1q4n6nTOThX8X7QsDsFOt09uHHsxIuXLhkLJ3hYi%2FHLertnrNJA2pGX2yphXzE2Bil%2BNak7ldjo8nfHM%2BcmYnGmTlY5Fs38xvDQFjXajXg6hcksrAM6SXGNJY5zapsc8NH3BxySKmy%2FkI2z3VNKlneDCgpLDanUjXo3hc%2BZKus7Ji5o0mbuN8lxAeuAQQH5KIasL2XafVxf16XxwGYfODqpVE9Oy8SN2Yy%2BeVICCzwC2xpvUWY9K6mwB%2BtMxbiqx9221C9yhlT5FO2pBeifr8X4Axh%2FK4g4LlYkm9%2BD0wNXEavPLNeE%2FCQjCc9%2BABIUj7mEam4EvghgvpppgngBJ46s7lKPbFH7wAeBvOk58MIfFzuTMjZ5S1sAQfr5NVYlWxjuKKpkDymEJS3mRobizDW1fTrmwcApOLUUyRBFMWi1D8K3yEiOfkoZU5Zb7UrBacu5evnaLIXlnnZY0es4fx8%2F5XZRp7vH9ID3Q1vMrxHC7%2F2IpC2FDJnJgkeh52uSVtn%2BXjJU%2BfChPWt4lZYBpSVjVp19r1zPEVCz1ij7tOnL%2F9UnpJ9WqpZoiFuMLirxckGOqUBSgudwAwbXu1iJQLjBPxBS55CjpxZ02zRd2EWTMsf43AT2dqZcYQHcF96ontONyoecQ3vOpc%2F8LqP9%2FUmLxb5d%2FAR%2ByFYaG0beDjKc0KuIQATuI6fiX3TD38T8czO7STZKkH1fcP41XObAGZhzc1DHZT7DoM5l9qA1NXFCsNoq3mC%2FHHxmlW5xQIKVr7qZ%2FBYSWOB5ReswxRtNgZmPfhAawJ9iXBX&X-Amz-Signature=6b2b4577d7b0a695b7d7d2a0272919cfd377e7584182ca74c3bf5262f89d7878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

