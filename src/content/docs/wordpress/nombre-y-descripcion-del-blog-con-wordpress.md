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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLLPYYY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIE4YngWwFsJPq%2FFaBjxXFV3vjG3hy0TqFa0z988C%2FdrSAiBYYprXmae4vbXH%2BTFUT98a1nkiqHMQiUisDULUcUBUBCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMkehfBS4lsc6g4AbOKtwD%2F1KoFj8k6a3K2vwecoqQ0mz29gpVq8m0DLpKYIlOb%2Bf6DkC5bqeRzZfIgUzMKYHO5KCiYBjkDxIbtk3o7No%2FaepxYlUa5iyaLADJ6KUvawfy9U%2FIQQYKnXY1lDImKild6d2qiAUdRa4t4Mr1K8u%2BJgLY6VPo3OlA1ZTT2uV76pvGqnK%2B0WZwEdJCGR50out%2F7epqKe05cCdAUO0ZmVEczOtbTXq0B4Cw7tqNEYMtoIVWcmgP7fjvsvQ2HeUJjYFsA78bcJ1YIXkvPr0xSum7Hnm49vhAai1Hi3plAFqyHB%2FbufL2ONrNkUzd%2BS%2B2jXCQOse6WzdD3Qa1Ifbf37e0oVxrtuLRmDhIjWdaZX9%2BjaryGp4z92vRLCdfRWgT6tSEbd4aQZeN17seX4S83%2BI5I4oOmWooH1iOCaL3l5UTXVYpE9ByA%2B8OFzWQ55GSTNH5Q2RLpeK2zX2fDa4u1hTqSifwx80idZ5JLCSXT894qtbKTChbUj5rBQoOb9%2Bweobh9zSQkSfQZEcyEIAjrOcxVRKvEEohmBV8f3FP4GRhgz47HA7kUH0nLccxmSFbdEboyky2IOv3p17stNQKM3I%2BpQxtqbpOLdVnYK8vxs8acK%2FcDj9DtlCrAc%2BtF9sw7JTDyQY6pgERlorCWk288exbZMUtzKzNTod9%2BP8w1oI3IM7%2BvoZs%2F4p5wBclsAqmcZqNrPsj1bPMaVdxnlI4G7UmM4GHUBqPxH6xq61X0hzB%2Bzp8sVvs18ONEgR%2FLhyoD9c6nq1tC2Fcd4drXcloQ2JNe8c%2B%2FlUxxpD%2Bw4P72paB2bLFCaEkvty41PZ5S3dRisFfLptBuTpKeoJuakP8gQGw6FYipFn9B%2BeVyEFt&X-Amz-Signature=4c253d44e85440ade53d2eb5368656744dabf63c946c4f975f97990cd64bf872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

