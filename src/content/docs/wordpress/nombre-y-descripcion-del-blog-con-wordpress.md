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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GHE3GL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDk6RDNBZN%2B7HKaGUS0zbCLtWNwbFWixjYcdA%2FlTnONLgIgAtCvQKS4mt4gR9CnFO0Ar7yJBL3s3KbOZsjW3s%2FS8OIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLFIhuMsX9g%2FaYQVtCrcAxOzLGpN41CtqkKU5c6mGEqTvP2l3qIqa9rN2kVh2oronyfn5T1A5UwliHs%2FEH1xcXSIfE041MQ98wc32d0rtNQc8pl184z9yhMNcTofNNv4Zxr0ogUNG8GBW245Gfq68OVB%2F3P%2FHnGXldjLOEoVYM3dZJVp%2FYIQB3aoRcVw3Us3MSCBhZ%2BG4a%2Blz%2BnvDXBMkyCU2TALK2xMEw%2FWRAOVhhKoTGO%2BkWcJkePhjM027GCNQL81h%2BiaVseO%2BXrDSSTzQCFoCCUll1qKDjXXsI9hAzJn1QWHQj%2FIIZ2BkR1KL7bjJFnJc%2FkfZKMjvx1%2FVp%2BcDMjLOcwk2xgJ15rPKIbWe8jTN1PhvVW6d1j8GLiP8l6Rld9%2BcB9kL4nt8wME0ikPHGi1GV9UQBknhVA1Y8kxy4ucPtFqnilFB3%2B9XC%2Fq0qN4pH0Y2L1y1tKQp5dyOhv9fXrmG6x2NCCHq9n%2BmOet2KMLMALWra3qBHM4k9LXLXcQj7iCV8GaErNm2vo43x8UHwOeGfomncVr3Eemv%2BDGlLps4YF3l%2FGkMkKEtjxn1T0CCTBWnEWqmrqxLZWz0iB9bvnqiDPrqUthmveHOPQItuTWaA4QfPXtA%2BAksaVJnVe1iWcyatAYQsjAXRFTMI3zw8kGOqUBmXryDz%2F3y6uexkTS2S5LBt9HxsyRO0PsfrrNbe9ZMEQ4L%2B5V1APKVGgrCZ6sw%2BPin4x6DZvV4Gprw73xhlMRj%2BO6gKFYDPEUbPqk7zFgPQf5%2FDHIba6VEB%2BHHe%2BS2igaiNhylyno1Yv8xfuKyuZ9jOFRvbW6%2BBRD6u3pme0WqY05b4CQVI9xC8hQ6Uvta239iPkHSeBtMLf0PcUghZbDFao0SFmv&X-Amz-Signature=2f68a2d454d3bba52e7f81bca6b885366c96f1064fc039dcf0c893f12bbda823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

