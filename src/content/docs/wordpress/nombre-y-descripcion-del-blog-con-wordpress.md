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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7HL7XU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGZPhjt%2B4BBlJv4RMW2%2Fub51jasTMyqF2JOrKD1XrMO2AiAgai2Ksok5BeE%2BvTnaWoC71Zfxo2Co9W2IRKcVWH%2Fdkir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMeqPEVO0zZlJT3ONnKtwDMQDvsKD9Xmpbk8HOmpzmpYl644QcgoNWHRSq0XNa8Sg%2FjUwkTRR62Li9CVb26Is6xvp1AdvcdjIvQdGb5EGarkMMoLf1lSjiLWOSvU6ap4toLNgJ5Z3FlOLl%2FY3Kgp2HDEQvRbcuzjfQWBKwbRgEzjiy%2FYTPWgPYQQ%2F1L2SGGldPdGOUOo%2Fu1lO7f8uQPHkLyBMqeG3rxW9reUkIhQxwAsciCDdP9p44kAFU%2B7GSYyHey7t4KFFdL8S6S3agS3n6JE7McU3y3S2NfGVoVimr%2B2MWEyYK1MqgeDRki8ebeWznL30IaJ5i47EA1zmSiC7eoljWv%2F01QOSsvYx%2BSnY0%2BJ8QlwAqdXDT4r2Nn6DYsKI3BQg87VZmQ19QGGmumV8mWSWvQlopUTMmW0%2FllkrXahdnfDgl5Rdqzm75%2BvGeo1VeKr9W0Yzxix9mTUGZtp9ATiWeeDZJ47i3EJXdAv2vxZoqUA3UvuNa3Mnu0hDgWRijupIzTewIHeAGbGKL9UoQvT3VB1oSJrx2lNfM5rZcB95L0gIRY%2F0agkVUqwxv3HgZIGOmwtotIP3lfNJVtY9HeOehByvLu9nTRTHkEq5amFDmvCEbBJpGK1VgWwWgu3vF4%2F0kccjKQzyArkYwzK7EyQY6pgHbwgQyTha5VzfxvM4kqtwQupFlB7ZvV3N89SSmFhMhdSGumrdskYnL8sVM0616sl3WyLKmhTCyVis8rtf2qEy8PTKxGZuybQFWlhWSeoUci1Eci21pP2s3Euq3Swmdc061XjT0Ttp4tcLF%2FtGuaxxM1scKPhOxNI0hgyZCSCksx%2FgHVliwlfsAMRY%2FFEFUPFDiH19yMUwmDkFvJyphHTkrXI8k8%2Bc8&X-Amz-Signature=fd4b0dc30f60123642897ad50c4279c0e284c87f892a9b59f3f494b09f22216f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

