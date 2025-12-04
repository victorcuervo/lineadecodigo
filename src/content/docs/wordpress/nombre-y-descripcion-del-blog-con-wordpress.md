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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNIDY7OB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICsfjbL7BknLOpCjvLL4aOiUbJKZtUBuwu3KolpaysDuAiEAkAARdsIShA1L%2ButreSB%2BrBETs2Ig342fPSBYxreiJKIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDI%2BFmkd%2BelVnb%2FNoPyrcAzWwSWN8f5b9bGY0kov7fjtIQhk%2BOyU%2FP3YZAdQjlwfu8zJEktlXGvUg3MydTmECQEW6tFMC074Tef1tRL2%2FIDc%2F62QOI%2FxPqLGXust9oHlNS5AqTxKA6YB90%2BS72kSCLPlDLK79mMgMkG72YtuLCsR2YmwkNFoY0lgkH6vPfaGE0C%2FCGq6ZU1wRQXD7uPsw0eV4xxrVhyqm690l6qEZh6TSBTh%2FFh2Qe%2B2JDlW0ylj%2F0Pu6G7sa%2FiGDrOiwRGi5nOJ8Mj4rXCnkRo0m4VotT0Vz00JtJCCPUzM0B63aBkUtbagzJfLEPbUYJIfQIAGgpOCc061jgYERZmGptdHlut98aGyTRO8jYpAyB8xSYUWKpcXcPmJgkUmCzk8ax5Z9R0Yzkmu487dVZHx3nfODpSXnckd18SqRygOCs%2F4cMZbuxWecpf%2FrXkSZRWgI4IHKolABlwlMhTuXi5LjUcm%2B%2ByUbxir0qv%2BGLT2g14IhsKtXmEoDs9A3bdLq246gh7duVFPqFX%2BgOyxuPyBNvP2GqWwQFFyd6GQt8K%2FARJwszB9EKuokfKQ6RNV6YH1Aex6EG220kp52BM4GffDzhPZRYgX8ddmRT%2BKucnr5UpxResfsGbvsV4Mi1saIXjh9MPbmxckGOqUB1KhkRBN7giw2syxHyT5nr8HFco%2BvelAglOG%2FEQLu%2FBxzV7D%2F9ILTdQqOesrRfbENrdmFsMUq1mibTx%2FGZ7Vy3XRWwHG3ZaVX%2FOh6L6GW9ZwAbRVL8BEBAYNmoH8ynM09EgrifmaZiMiCLh7zibvDoVUe4pZwldjh88WinV%2FZLQX2leExtRlhh%2FadtG9L3KOxr7%2BodEWB3nFLk4Pleiq846DwAYC4&X-Amz-Signature=768e13e7b7bb71e5328352aa4a7eacf68e6babe1cfa027394065706dabf5393e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

