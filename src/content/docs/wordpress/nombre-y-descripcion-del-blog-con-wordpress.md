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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNBT2HYM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4daavy7vGqPYDtQOHapb0NV4r2nR2JHiPyw4Rfh5hSAIgBEbgo3Whf%2FvaqHE8R4XJ6h1KpjPOSkTaZLwQ5VwXly0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMkCj4UzFfmehbX17SrcA5bNfzFBJiuWw00HRfWP%2BuyGvpCrzmEZb%2Fo3wehhyXnbEbilFaU9ojs8HgtZAsay2C82aFt%2BSdMgpj%2BKJyE0%2FR3hUuXtBgd0Nb%2BPwcnVPms4UPNEe6pDcleh%2FDEtmAbvWYDeoJxovsxDjod9c8ipm9lAnsTBt5DhS9PBBv%2Ba7tnGJehnU7l9C7lC0Pia%2BNpgBoex1rJTKVQ8o8nX58OuNohyqhmpozhfWD%2BE571CsJs3ScY9ed%2Fd%2FRA%2FonKYNa%2F%2FzwWmB1AjQ0a1vXzRSBSsITDpHf7iRqUvJ%2FolDcQaApoPArYnUWw9xUpum6GaZ7YzdQnnceCbT3abyNXiekx%2F%2B2I436CFpLoJ4TyJ15nkFAClGq20Azv5PPABC4TGoRmDtur5MqQYZsiflZoKvLavNGlCOxbX9iMtyuVwAtz3qZq2wpGhEbeoJVkJJHZZ62XVwBo8mHM8Y7BBWKpiAmhCYLierYiHpkIgMJItS9I1WHP%2FWrqoBpJuDp3wP7gBU3FKGe%2B66QHk%2BtETfoLS6rr3J8qwpY48F%2B2dV%2Bcl%2FhqjVU5EIRET0GCoROBNnI2Y3oX5r7M%2FeNtFWTMs%2Bjicil1gJCx4bo1bMcjYRru0dml2MhZSbJTumWLrrN8aPtZkMPmtyckGOqUBDdOvVg22B%2B%2FlXdqGca2LqEcbuEDRGyubz083gYgPU2kAR7Z9%2F67WC7nwKhgKQwdeNrdrgzZgY23i%2B57mkNAaLzufqNohdZGW8romvaVzQD0XFUV9NrJ1wlHIIhEy7bDXDgMbUsst6Q%2BNZ6o4WUpt8tNZQIHRA2h%2FdGrbH3Bga3z4iDzxV%2FqMZc5DTqTaJj%2B9DdvirtoLMwtE5%2FQch4RgKSUGWAUj&X-Amz-Signature=52aad1bc6f8d32dba008fd57acb4efa249267e4174e809077b1875c6157d5c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

