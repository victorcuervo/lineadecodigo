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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFTEHCS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhImXy24A7wrkl8eJwhwF9E88pjTjXAarQ1%2FhBiN81wIhAJ2RI7Re4J4d6FmiHvjoEzdHOCvT%2BMjmPrT6eNeBE5A%2FKv8DCE8QABoMNjM3NDIzMTgzODA1Igy71DOb8pEWN5sb7oAq3APaJHumIUYKD8ah8GGpcDJiRzhWgxcS3Tel61FORhJjyMxss%2FGM5MyTXgiawhUr0Eknbvh%2BFxUP8%2FmvLCYI3ZPSzZC%2FosGCE57ZXa4Pqu6jI06BDvDqFYZ4bJlPXX%2BTogq28bMENAPZUjnxm%2B5c%2BkX1r5JXC8oWHRwg%2BKQsM1PdfkxE0%2FTZOGpKQvjBDXwTE2Ogqx2veWPjs9L4FX31Q%2FgGmQm%2BPUcvY7DOOa8Cn5QyyAJw3e7nNR9V1E%2FkJifSyg9SdSO0BtPKBZUdE9G%2BWXUBf4Khvjv6ef8av9T4gVYGqvmosDO4DeD%2Bc2WFhUTLoAB2%2B%2BROe7hTdlNk%2FS45V0D%2FNFGihT2i5Qx39hOOnqC2yz3gxFv8iyUkwhqI3bGc48JyGfzYGP3qMGgk1rMgxe7BY51FV8M5VSa74usoFOvhsxc3hjH82SGtC283aCNnsu4ufC%2FKQ01VD%2Bvw2kz%2Fn80jKhrptmD%2Fvq1%2Boxbb6TFfgoseoqIjsxd%2FaHHowXydrWoTsDAHE1uymGmlWkMMha%2F6HsouxY8wJlt7QT98j9BrLeupwXyAyh16fjnW%2BkTnWINmbaJXjiqYP7ybcw1zAFb40jmJ9aBl6EQtX16JS4IIahI29ftDJQVKenNZpjCMjMjJBjqkAaUs54e0nN58gHBN16x5910nLdy%2FlOsupQTJ3zpU5dpHosjQYzfouXat%2FA9yuJOBCkdzxh3DKG5gU7UUBmKYqZ9awuNXCh4BwaZR6kKG2jKd7kCBlBol20ERIICqnolF3DoOB%2BJLlItrUrGrbOAPc9Baj1LJiTMXH2IV1QIK1q5vzO%2BR3dHwIgsNfuhqsW2NpgANLpKlH3GfSiABSWxPrOVyGiZ%2F&X-Amz-Signature=16ac5a4de4e12a08b573a1980865836b9736c60b05ed8fac8e6eb78eac4fc326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

