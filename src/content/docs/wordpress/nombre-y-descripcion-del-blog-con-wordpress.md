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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAWO4ID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAqBxTLCObYF%2FTzsGtE3CBOO5vCg19I0fVujlbSrb3aSAiBsA2aSY3uWDR2t7dVGWC829MMjG56Y24BtSCn%2FEy5nHCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM8gdH29AoXtfLlti9KtwDvfInQ5IekPIIb5XCncaN8jDTUuqgpNsZJIrHqqjBoYSD%2F57qeOBBT%2BzKkPCrOCjlhtGQ6uZwTf1NMKaWq5OvGz1nzC697d%2B2wsm4ccqPOdZELgWrs%2BKTCKBmAFK2nO%2F7Th9dvqc6wR013EGTDuo1lnTt6%2Bv%2BkF99oBGmSM%2BJPFRuHugm0Sx0s9XlatAurliOWHf47N9VFGb4c6EIM4vBWetaxURdho9PsxT%2BFE4mpXsJF6C8Hx4biG90fAlOneQtKB5n6e378zZ1tfXlGuFn8TpNNeh8CqdIuYJU3ABqflr%2FQlhoaiFhOc9qJjxjV5jvu35JAimVZ79wDFaSurv2yE0LyfJz9IPPKDrmqwnnYWBinYYb18Q8MZORTLJJJl89s0z%2F5e2HE4mgydaTK2g3wXkBDuVvcYKpSBQnA1PdxzgLgIUjwFUBTClLT6viSe3YzHB0lsPskAwySeXYvDcEAfqtNqTbk6m%2BoOPFWr3loBkeAgA3gy8fJVhKxLCLgJQuif%2Bu2dTCSn17EO67aJ3BzWP5PlQ0L1ET4V7P06Ytgfx4HV6pL6aN%2Fc1B6W6P6DnplA3vNd0a9JVmDnV4sxCmubY5gF%2BVGInx58WWVbC8EUer8zQRcKpoH7oY3v8wz8vEyQY6pgHHG8%2FnMsAFRH0Wl%2FADSqBLF30B%2BTjd%2FU0sutJ5yISbL8v1FnrKiTmoZi3oj1ydqqipag9iPbYBPSD%2F5wrWLUQ4ABc%2F2DcrZJY40a82hVeg4j8PbmYP75oA7byjAv7WqeO9HCRLMmt7Wy9CLY2sHEjiTBtL8faes%2BAZMWfaq7KYaY%2BFAVuTI%2BO%2F5hJF2Im4CfjXvmIGtlB8XS28YmX1ObUKMe9pI2Ea&X-Amz-Signature=5749918ac3a1f23851f133e222744204a1db048302414d90a3724a1cac6c0ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

