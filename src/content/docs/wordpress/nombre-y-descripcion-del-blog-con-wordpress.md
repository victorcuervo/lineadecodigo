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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JE5YNAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDBuwKGVRJDwROOJnI9zg%2Fxw5l%2FiQWbMNIL7iXCBddYaAiA%2FgLGa88SsQnY1maLq25KSHlvCtTim%2B0d%2FmWR1D%2BDHiyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMqCmbUhsdW7sCvygTKtwDsskKvo3w%2FCUN%2B4Eq2v95N7RcBFI1Iy7x8Mb654VRiyIqzSmwX8t%2BPwVgj9J4Loauo93d7KvA%2FOYGd33brrKGdpF1BwakZK6Sya%2B7NC5xYBz%2Bgb1N%2FsmA0dxTXBv2lWvGnqayizbaEWL5FMHV8JJ35TelyLHvWfCYWHNRRdVQfa%2B2IrB9D4nrWr9qthSYMCSJptACBoKbrK4YIJPVrYHL5J5l2L2NZSvLeW5ixsyQOhlALkeDmp4E9wEv260n3ud3JEbMVNLSBGnRh9k0hrvdchkRUGSSS7g8s65WjuV%2FPFc%2Fi4y%2F53z0uKiVO%2FJI1Tq6uXyvJtOt1pHhGwjqWK%2By6P9IJMn%2FtxIJ1wYSBJP3%2BsR5Bxt7UH8qrCjWbYylt%2FJ7oNWD5%2BRTtgiphUVmMPY5btM%2BbDCmpq4CWeCj6o7Dsml5KG3srsw31SV2%2BNzQaAFPjF1rARNb%2Bc5fTlODDIqHSdsQx0j6A%2Fd8bRtQOou3YZewnqU%2FqiwAUueIncecGA%2BC3s3UYog9yYUqjDO8yZoHqdGtyoiseKfBs00K9gcEXXp1LVEC4gE1jvRWV9JB3RAgwnRSowL%2BEK%2FZWVXVquxKR%2BFCS%2FHRbhdgbXnDJ0Imnj%2Bmfn3Xw02dGP25R0IwppXDyQY6pgFdZVxn9%2BOEOYcE6mPbCNp%2FvOj3sp4EChmTofD76esu%2Bce8c1zZMXVQHGsVG%2FwfealYS6u4hsJ4GGX%2FmlN1iABqsPSyv%2Bl2FJtExiEXlLHPGIqEN2Q1nnhGAujqh4s4qVdtxYOsMYlI0VF5f5ZSfmaHMqzHS1uNn1WR9elADcVvFR4%2BrTgQppI9iFcieShbn2dQbDzywIAVa5ZlYKBL2QpM7RY8CNFl&X-Amz-Signature=479333aa42cd95d474a6b4ca0ee6af54caa6d63ccb7ad0c9863810ce64b5fe60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

