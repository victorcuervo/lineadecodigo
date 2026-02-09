---
title: "Qué es Symfony y por qué deberías conocerlo"
description: "Aprende qué es Symfony y por qué usarlo. Descubre cómo este framework PHP acelera el desarrollo, mejora la calidad y ofrece herramientas potentes."
date: 2019-04-19
updatedDate: 2026-02-09
tags: ["mvc","abstractcontroller","twig"]
slug: symfony/basicos/que-es-symfony-y-por-que-deberias-conocerlo
type: doc
topic: symfony
id: 2c8a9dfb-adca-811e-83ab-c3448d17cba0
author: Mauro Chojrin
download: https://github.com/victorcuervo/lineadecodigo_symfony
---

## ¿Qué es Symfony?


Symfony es un [framework](https://es.wikipedia.org/wiki/Framework) de código abierto para [PHP](https://lineadecodigo.com/php/). Técnicamente se trata de un conjunto de librerías que puedes utilizar en tus aplicaciones.


## Por qué usar un Framework


Usar un framework permite:

- Acelerar significativamente los tiempos de desarrollo
- Mejorar la calidad de los productos

Esto se logra al utilizar código ya desarrollado para resolver tareas comunes (y usualmente complejas). Por otra parte, al ser código abierto, está sujeto al escrutinio constante de miles de desarrolladores los cual, además de detectar tempranamente los problemas, aportan soluciones mediante [pull requests](https://es.atlassian.com/git/tutorials/making-a-pull-request) (¡Incluso puedes hacer tus propios aportes!).


En definitiva, utilizar un framework hace nuestro trabajo mucho más eficiente y placentero. La pregunta al final debería ser más bien ¿[por qué NO usar un framework](https://academy.leewayweb.com/en-que-casos-conviene-usar-un-framework-php/)?


## Qué frameworks hay para PHP


Siendo PHP un lenguaje tan popular, no es raro encontrar en Internet un sinfín de frameworks, algunos más maduros que otros, algunos orientados a resolver tareas específicas, etc. Entre los más comúnmente utilizados están:

1. [Symfony](https://symfony.com/)
2. [Laravel](https://laravel.com/)
3. [Yii](https://www.yiiframework.com/)
4. [CodeIgniter](https://codeigniter.com/)

## Por qué elegir Symfony


Este punto es el más complejo seguramente. Es muy común que los desarrolladores se aferren a su herramienta de preferencia como lo hacen a su equipo de fútbol favorito. Voy a dar simplemente las razones que, a mi entender, hacen de Symfony la elección acertada:

1. La arquitectura desacoplada (El framework está diseñado de tal forma que es perfectamente posible tomar solo lo necesario para cada aplicación)
2. La comunidad de desarrolladores (Symfony es un framework en evolución constante, siempre a la vanguardia de lo que sucede en el mundo PHP)
3. La documentación existente (Aprender Symfony, si bien es una tarea que nunca termina, es realmente un placer, hay muchísimo material para consultar con grandes ejemplos de lo más variado)
4. El rendimiento que logran las aplicaciones (Symfony se apoya en varios mecanismos de caché para lograr una performance excelente)
5. El conjunto de herramientas incorporadas para generar código automáticamente

## Cómo arrancar con Symfony


Arrancar una aplicación con Symfony es bastante simple: sólo se necesita tener [composer](https://academy.leewayweb.com/que-es-composer/) instalado:


```bash
composer create-project symfony/website-skeleton my-website
```


Con esto sólo ya tendrás una aplicación Symfony lista para probar!


Una característica importante de Symfony es su interface de línea de comandos. A través de esta utilidad es posible realizar toda clase de tareas como veremos a continuación.


Para ver nuestra aplicación funcionando podemos usar el siguiente comando:


```bash
php bin/console server:run
```


Lo que hace este comando es levantar un servidor web especial para Symfony (Básicamente se trata de un envoltorio alrededor del servidor incorporado a PHP). Si diriges tu navegador a [`http://127.0.0.1:8000`](http://127.0.0.1:8000/) podrás ver tu aplicación funcionando.


## Estructura del proyecto


Las aplicaciones web basadas en Symfony utilizan el [patrón MVC](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador), con lo cual, es de esperar contar con elementos para administrar:

- El modelo
- Las vistas
- Los controladores

El directorio donde pasarás la gran mayoría de tu tiempo es src. Particularmente, ahí encontrarás el directorio Controller y Entity. En estos directorios crearás tus controladores y entidades (respectivamente). Las vistas se almacenarán en el directorio templates.


## Crear un controlador


Veamos un ejemplo muy simple de una aplicación que saludará al visitante por su nombre (parámetro de la URL). Lo que haremos será crear un nuevo controlador usando este comando:


```bash
php bin/console make:controller
```


Y respondiendo las preguntas hasta obtener este código (En el archivo src/Controller/MyController.php):


```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MyController extends AbstractController
{
    /**
     * @Route("/my", name="my")
     */
    public function index()
    {
        return $this->render('my/index.html.twig', [
            'controller_name' => 'MyController',
        ]);
    }
}
```


Aquí lo que vemos es nuestro primer controlador. Este archivo está acompañado de un template (templates/my/index.html.twig) que hace a la vista:


```javascript
{% extends 'base.html.twig' %}

{% block title %}Hello MyController!{% endblock %}

{% block body %}
<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>

<div class="example-wrapper">
    <h1>Hello  controller_name ! ✅</h1>

    This friendly message is coming from:
    <ul>
        <li>Your controller at <code><a href=" '/home/mauro/my-website/src/Controller/MyController.php'|file_link(0) ">src/Controller/MyController.php</a></code></li>
        <li>Your template at <code><a href=" '/home/mauro/my-website/templates/my/index.html.twig'|file_link(0) ">templates/my/index.html.twig</a></code></li>
    </ul>
</div>
{% endblock %}
```


## Añadir parámetros a la ruta


Para completar el ejemplo que estábamos buscando sólo se necesita hacer algunos pequeños cambios. El controlador debe quedar de este modo:


```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MyController extends AbstractController
{
    /**
     * @Route("/my/{name}", name="my")
     */
    public function index($name)
    {
        return $this->render('my/index.html.twig', [
            'controller_name' => 'MyController',
            'name' => $name,
        ]);
    }
}
```


Y el template:


```javascript
{% extends 'base.html.twig' %}

{% block title %}Hello MyController!{% endblock %}

{% block body %}
<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>

<div class="example-wrapper">
    <h1>Hello  controller_name ! ✅</h1>

    This friendly message is coming from:
    <ul>
        <li>Your controller at <code><a href=" '/home/mauro/my-website/src/Controller/MyController.php'|file_link(0) ">src/Controller/MyController.php</a></code></li>
        <li>Your template at <code><a href=" '/home/mauro/my-website/templates/my/index.html.twig'|file_link(0) ">templates/my/index.html.twig</a></code></li>
        <li>Hello  name !</li>
    </ul>
</div>
{% endblock %}
```


Y ahora está todo listo. Para probarlo dirígete a [`http://127.0.0.1:8000/my/TU_NOMBRE`](http://127.0.0.1:8000/my/TU_NOMBRE) y verás como la aplicación te saluda.


## Componentes importantes


Hay muchísimas cosas por aprender aún pero me temo que no cabe todo en un solo post. Sólo voy a nombrar dos componentes que, si bien no son parte de Symfony como tal, definitivamente conforman dos patas importantísimas del desarrollo basado en este framework:

- Sistema de templating [Twig](https://twig.symfony.com/doc/2.x/)
- ORM [Doctrine](https://www.doctrine-project.org/) para la interacción con bases de datos

Espero que este artículo haya despertado tu curiosidad y que pronto decidas profundizar en este excelente framework. Te prometo que valdrá la pena el esfuerzo!

