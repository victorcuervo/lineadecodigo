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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGE6QQA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAu%2BZ9KpUtbCg219%2BWU0R5UPCxFVJLsOY9LdvmnAzaZlAiEAyr1786iBexSYBpYNYH2lNHaxQdDxlytn%2B3g6in2Uy%2BUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDE7o%2Faju0i0PMvIphSrcA3Ekfv86XQ4GxksMT7S0L2C5XF%2FH44OxBmIsSlRRNY3xkhGDDp633OV8ft%2FxFnSQrsl3IpaY%2FvL4t6hts3t7kf0CFhrF4iKN4PqiOyL%2Frwe4es%2BjH1UgUfLGetQl16%2BanwzTqv%2F66tps3pwLk%2BIAS3fVKa4LT1LwHk1Hx5DwMkHXs4IMQ%2Fq%2F4eTfE%2FFK3hEU6grgTJW0jEIlE8huppFTzn29MYH9enC6wu1ZmLn62F4XRBduthaMGoFDHTdeXcazieOjj3ySrUzOLmrclb2DMrEqsbfX5JmYY8srevIQ1CW10LfwVHL3pNQYmXbVUqaXDMllX2f0XnhEw4oFBFTNY4RnM7%2FLnbQGmjEilsmCdoNo6hduC51WRM4R%2FRdk1wZtjuc9eBNvx409UsQp5pVEmtsabd8vaWOS3REg8pIe3r7wzFLdlU9oL2wdSHGTzvIwW9vCWx%2FKYGrytZsap%2FQFwsXXgEutRGp4IyYmZFwJz3jtoR%2BimtmH7Nr%2FyaSRd6aNNmVPpBsP%2Ft5B7CYdPwnQid3SvgXuzDUyYjupJGIpo5twqURa1Cv96u2pbdft7I%2Fp2FmhmNsQMHUOBoZmc5aoS5yA0G3tQM1%2FO8XzWSYOA%2FmzBmBJQFDtZxbYoohQMO2%2FxskGOqUBfFO54TUCuaTMe3u0Ej7nCcjsNBgb07ztTU4LL16eMcGcfY5wJR4o58o1MMZL50M0RyFDpEruuhmW6fTcOxr3G9FOuqL3ba8PbQb4QkOB0aLwFjSLztkIX4j58JNR8KGbP96xc%2Boi7y%2F3zVkdIMSuCVM5Fks5RPVb3tg7%2BFpgZXNiQtklsvD5PHLW3c2nM3o6BaH0eQuFOszrucir2t6YkD40crLY&X-Amz-Signature=f38dffd4e962e576efcb878dcf89d0cfba968297330b6696b3201daf7369f0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

