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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVNLVAO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD6wTjp05N93jcz7WQjRjtKwBkJHjvsGnt5fvsW3sCSVgIgT0nUJsJzOhDBYsl0exp7FBiyHytRSiW7fswC0L3rt0cq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD0Sc%2FR4WBSuQSQ4uircAz3iWl4uXAOg%2BlrVNWASuWU4a5VSuvuiw%2FCc%2BLVvbPW2y5I7uSJBSC70eMSSy762rZcyr4rPfJ7uUZmlWey00gW%2FQpUjhWGbqYFAPn4iZVSwP%2BucJc5TiKzfGcVsYHlfLnLQ4OJT3oCInI2VCQp7qj3rlxX4FAI7VeiA4Zp2K0KDYeIbk2t9M%2B2H0pzdiprH9jR36S%2Bt%2FpG12ii8e0%2FVLXzuc0XJ1SZBEsakWEmDlWgmZbNrX44IagqyPNTEKKddMKN1O6DeNRdkX%2BKve7vUSuEco9e6yxgPxTm4HMX%2FBCOvz%2Fvo%2BkPmC3d448XORbVo0xmhimIPd9SEEK3dq2tyrebkQCBvg1WHmxQKz06zi5e2OLTzfPafDiNKKESCsExS2yju1BWXz7DUBQ6d1mTZgHq4URvaw78Kpqc6OWV1jUs6KrB7yM0m7HhNhJWl8TdXqRlynLEMB%2FT%2FED2541JpaUr4gpR9gZ10SBWGGcdzq63PgHBQZmwJHv3F9bg4rk44Zrxf6od0nO2z380gtguPCIfeYpaO05%2BujqAy3HDmqetS%2BfspCF1%2BT1%2F4sfl9vGm0k7tvAvSis%2F3MYs5Yk5AdK6Eg1YxKJldw8k%2FblDN8EA1ZylKuoL1EsweAD77ZMJuixskGOqUBxSrzlWUYeD2e1eUNXXqBmXYLcTVz4AK7K%2Feoi%2BdkG8BMmH1Z%2Bnlmkmb4hBi1OoqDso6TDgx1eERy7Cxgj8nKQ1%2FMdEBGXFX5NSE%2Bq3rLg%2Bm5%2FJYGqFBRXo%2BT9Fp4KiiQizsiwsjNcJnyKeUhJUzdvJi0OCUaLxGgtBct7PdfwoDyjo2J1os7Fdi%2Bl1llFpfrekLMStPcHuPADat5vLAOPD4VQ6%2Bz&X-Amz-Signature=42028614366448e86d4c768675669db320b496b395d5559bbf48c6e65a2f12f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

