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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ICY7TR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FBc8oA7ExNeP%2Bo6G6L%2FjEGVFxER7iPXwyz9Mbyyn9gAIhAI%2BImofSGAV13lb26LwxUMipkYVJzGWCJVAjZoKjOrTHKv8DCEkQABoMNjM3NDIzMTgzODA1IgzmHD3%2BvJsJ4m2LwHMq3AMuWNFRdaMG5G5L8eaP3GHz8ugCxepWX8FzZvhN8wRQR7t9vOCRbiUmlbhxTu8GGZwIoj%2F%2FCTXCorS5In8ge1OXYq8pBYdqHzqUdEaSmKHszBP70cRgOgrRo9gy8T7uMC7ZO5ka9cvc0BW%2Ft%2B3OCXxdlRPtKCnIihNz8uiVDLCpGZpjd2cZ21BSb1iOOiua%2BV2uV5net3a0%2BREl2JrHY8q4qJwIsKR6pvUowZtlsKMplPdql4k3zHGFHlYrIfOgjR1vlgZh5PH2uCH4sk3tgfurZCHO2Ue9w8Lr5hsUZO114xh%2FMt%2FZ9q8q3cxtyWh%2BFJ%2BWS%2Bed4KeeXaLPnRxSmiqt4kU2lBTylK2Y8qpOTJAEhQ8BnNS8faFynlhRqf8qtDZvOLgnNyfqgrQkixIPY6tARKDcrjNmFzCB2b5kwPYddWdRjTQjY%2Fr03snzSTqCG99J030DGr4PHQRsoJuwaAakXBxKmMNiEII2sUA2G1ynBQZMqiYXo7YOGfOQpvfu17MMwl1bn1XeMgCG0U%2FqhucArZDon4crCi%2BQgU%2BC17%2BFq0c%2BdfmCAVvw4Br74GrhVeHH%2FLuQv01yFQaaJn%2FyD1Sw6EdirWbJ0XNJ%2F9%2Bs1RHm2F2bOH%2BB3lvn9NtxEzCs3MbJBjqkAfF9F%2BIzkwpJG4kR8dLwj7GTRtf46cgUiJkI7v1FUHw2HTaEmIoh%2FChTEQ%2B3jzMbbqANFHC0BJQYyhsW0EjoLvvYPxYwWUJl1lbyNsRWjZ3rYgBcaLHhYOP%2Ba7exz%2F0n746Cb2SwBlFdWt7S8NjLlTns78MxWm%2Bmwe1KyN5%2BtNh2hTn8QiWYR7uaFIFc%2FMLO9mjPugFCpBugCrjtO60ahr1euwBk&X-Amz-Signature=a70304e6a06287112a7005bacfb1cc4d4bf0f35dc909b121c67551898474c357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

