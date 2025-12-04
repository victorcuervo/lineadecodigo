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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHBQDRG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBPNrk%2Bp9WDda0gqXE5kFQn8TiePQnz8U7mpNGcZ%2Bs9LAiA8aB7oVssqF%2BUvAEPoFNUaiFIqRP90srm9qUi5UId%2BOCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6S%2FYDPD3F6e%2BJamvKtwDfz9XBlQ4lJvEcs1E03vO4Bsx8mTnozgzNwma%2FzA7ADXwVpBhDTsjZpQDC0T9rZ6GRCyfwOzpYRuVx5BhydJQN26%2BasL9C9o7esLX1RU5N7PIW5hoooLvNNF1I2QkrMVnFcLNQK1M1W6THfBSwSs%2B%2B8q%2FJh5PAJmZCLHQMdg8maOp93BKGvVAHFdPP86an1cTRpziaGT3C23amYGLuF6Gzj8nFalpT1QytHr9MQSccFPfvGVYdrN90VnzB9%2Fl%2F136e%2F%2F7vIIBIGLCrHDgB9OGxwpbDNQ%2Ft8XVP0zHdKhidaHWaZq7jxOwizqh8uVnYmLLC1WHhzOcMQ18e92vco3EIejlFX3wdrldI5w22Ewj%2B3xku9aQXL7cyldliO%2FDXp4Mr%2F6Qi3QPrAPrt17KRVgBFa58%2FO2JmdO4lvijbgdtU1RxDrqCUz7zqp8ReWtzCeO1w2lnY2HfGfSvrs%2Bl3TZNcEbhnHieCFbiZVKg%2FQ7V%2BKN5VB5bUu3Mtax3VDoTrUMGB3uB%2B1l3ZT3ffQIA18qetkQ2Y%2B%2Bo8prpaNtaIkUgtBYQrQGbD38oIk2qx79EEeubxzFppboqNpBmRFxxSJ4ddAcYNBrVORI%2BsM4tGyfaFSCdG0B%2Fpx%2ByAhbK7K8wrMvEyQY6pgFeOH3Z16qETpdpuyiT8cKxr49yxmdgQHiVQrvsID5LFXaB22iagQdWOUyHyXr48x1H1XDjFg%2FqDckoBMYEsv0Uy3Tt%2FhAm%2Bl1tdm1oX3TjjHziQ0I1%2BuxBN7P3DsGJI3HuV%2BWmxwAz6b%2FK5afpDEK2PB%2BxLAMXsj3IPdepUg0bMyGV0dWASX%2FM6Jp%2BV1bbEW2flymja8NYnQD3cic8wJf%2FxO0UWU%2FQ&X-Amz-Signature=6ef486cb1f62dab70d24d793c786153725eab8d9fd330c93ccc651b01290341a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

