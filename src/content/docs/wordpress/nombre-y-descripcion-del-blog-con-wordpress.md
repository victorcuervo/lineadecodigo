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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7NUBHWB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICUG473iwio%2Bkikx0I8o16S1RhcOZjtOgum%2BcpZ3rl74AiAMnHClCe9UL%2B5z9aQIwlAlkRHSBy05sBzWXi0mo2jL3Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMjlcAvJ%2B5R4N2c8Z1KtwDihyqRPiIno%2FyNbfvj0KIiNL71abuVRo7hhvIJfe4qBZVcsecsyIab25pi9yULYYT9JEUer9Wou14mURbjXK1%2Bt1NizOa93eg%2Bkv3A4wmX7UGZ1p1OGoKybHQsTNAoxdtVbxW%2BPdY6LRAidmBljUf2FJL43kCQwlqtTsNjROW%2BgXHjgtyszqCVyWUZxC6FNrLjaLucJJPU2SrBT%2FeZJ0RmvwAgt1LIKM%2BiZgfzd65xsVW7OmviDB%2FTbJjIpf7ShocASUF68CDs%2Fl%2FMaiVQ6zd%2FUcJyL6cBfDRXuBobd8Js15mxzQIWF4SZ9%2FRvxGIZXFqQgRTp9Z5YPPI%2FGpdbG9XB9FGv68X%2BVf1O2%2BdF%2F35SSdZWjiQxqe7yqzOzOUI3nTTSNEKegZhzTBxOg9mzopfCZ2lEflliXhUCNVrPKVc1QPa6yUZ0eX1rE2WuHGRD779pdiVMYUPCh63e6oIZ4fctP7L8jzPVZMz9OM5bqsTPMAT5jMVWtZ9Eoz8Lhe2XwZjXHPSlBxruHxBZYAjVPe4WFfn60PJ0qrYXOnug5502fgSplat6w3q6R3EuNt0A8bMEtQOhXxvapRbKeWLdPF0v4ZxvUOxS7I%2BQAqfV5Kw%2FNoo%2FP7bGfUqKRF1ciwwsoXFyQY6pgH%2Bgn1SiGyo%2B6X1Fnp1xWqrpxyEpsw5eiPAMiA5xwIop7SNMot5KKuM1W1RGZ9E2b3U7PxF59BlaoINrGENuGhnKMZgWI2OteYAkxVhJ5i93QCLM836%2FtUF2uL1h62eC4YwOCZJ%2FdGP%2FgGXHcUb4J3luDcDeLBOIX0hy%2BhHxEQ%2Fkql8KS7Rjiy3%2Fg5596CMEZK387duQk1CMifS4L2Yl8nosgw%2BxK42&X-Amz-Signature=a5bc8adb2c63eb2f334b680b41775707c85f6db0b43a0737bde4bc9cca61e9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

