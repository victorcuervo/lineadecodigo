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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5CGWII%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICcxPD3Dm7IkRXLuClSY%2FHNOCdEo9%2BdIRwI2cpsP7vc9AiEAn33pu%2FvIVujs%2B6J9eOjc2y5sy22%2B78%2F4LDV0kVSctf0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKM15KWQnGPjbS7MgSrcA6%2FrJ7eSVjD9cCQLqlCREBHZk856lfC1h2HrhQLXZVja9J5d%2BeHACeG2CiYnDLhIqfMFw069HBPy%2FxfQ7FTY0se%2BsLAqn8ANjM1Opqy8bj3YJEFG%2BfhqUiSm3Z4GmgeBy1jHNAc4boL3q2RVQl5T3kw0c6Jh7EuwOeqkf2Hw5Cd0%2F0nefxffyB0%2BentG2c%2FnzjiKjz6bhK5mdse99IFIy%2B1trmnz1hkqVsoArI1UhchbUYy%2Btcm%2FFpqVAqr0HJjSGFiOJjG%2FDIyZS9gLXktxHdM14cF4mAt0Tp7y6PVJ2qR9uOXh2GoZwGO1e4VY4PC%2FMIATS5gTIXKaiZjScYRNqp4SCb1V0jBhOZqnD%2FB48OurUDCN2pWg%2BIQo7%2B%2BY%2FMREeOIDM2ZZhLf0ogJ6kKkLgMtEe%2BDklWynj6yHHNf4IsWKhNVS5FTU%2FNyG0MV8iDtpB7nqNvsIlYROTsUl3dXUPG%2FnUDosc0GoFiHugt6kwP8k43Yld22cttGc1%2BsA63JFFqVzCSv2TJGInOOw7HPIvDem%2FWEUN85q30Syor%2FQKMN2H7be%2F337KQS%2BZzkp5IvQhrWxT3IPA9KUzPGTJKCPJ1nGiZQJKhtktvQxT6R7vurbfJhcBrifk%2BIk8xXnMLuFxckGOqUBGFeE9HOV3dZRWjgmMFJmSt6he0CR7yDeUH2wT6YgxRjK6UMItzVS%2BrftR70R8iQQh5PxlB1tiRhbwTf6PUsFaCdrUX4htb58n6NEzTediv0X%2Bj20kn5A936vuAuVf7eum6jC2ttrIfUWFmX3wFLY4ojm8lM5R3mN%2Fj6%2B6muu7Bm8XFVU541Fr1H0AIBjFFayg6Vc2x%2BFLsOjKQ9pnT3lQnR6Cx0K&X-Amz-Signature=d9d5dc78e58f37f47595001f1f1e15cc59448c163a7390f4f08623c19d1b73b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

