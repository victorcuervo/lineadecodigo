---
title: "Hola Mundo en EmberJS"
description: "Aprende a crear tu primera aplicación Hola Mundo en EmberJS. Descubre cómo instalar ember-cli, crear rutas y plantillas para aplicaciones SPA."
date: 2017-04-10
updatedDate: 2026-02-09
tags: ["template","route","hola-mundo"]
slug: emberjs/basicos/hola-mundo-en-emberjs
type: doc
topic: emberjs
id: 2c8a9dfb-adca-81da-a5d3-dba4aa7ad458
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_emberjs/blob/master/app/templates/hola-mundo.hbs
---

## ¿Qué es EmberJS?


[EmberJS](https://www.manualweb.net/emberjs/) es un framework [Javascript](https://www.manualweb.net/javascript/) que nos permite crear aplicaciones SPA de una forma muy sencilla utilizando un patrón MVC. En este caso vamos a crear un Hola Mundo en [EmberJS](https://www.manualweb.net/emberjs/) para tomar contacto con el framework. En posteriores artículos iremos publicando más ejemplos sobre el uso de [EmberJS](https://www.manualweb.net/emberjs/).


## Instalando ember-cli


Lo primero para poder crear nuestro Hola Mundo en [EmberJS](https://www.manualweb.net/emberjs/) es descargarnos el cliente [EmberJS](https://www.manualweb.net/emberjs/) o como lo llamaremos a partir de ahora, ember-cli.


Para instalar el cliente de [EmberJS](https://www.manualweb.net/emberjs/) debemos de tener instalado [Node](http://www.manualweb.net/nodejs/) y npm en nuestro ordenador. Puedes comprobar si tienes [Node](http://www.manualweb.net/nodejs/) y npm ejecutando lo siguiente en un terminal:


```bash
node -v
npm -v
```


En el caso de que los tengas instalados simplemente deberás de ejecutar el siguiente comando:


```bash
npm install -g ember-cli
```


Y ya tendremos el ember-cli en nuestra máquina y ya nos podremos poner manos a la obra con el Hola Mundo en [EmberJS](https://www.manualweb.net/emberjs/).


## Creando la aplicación


Una de las cosas que tienes que saber con [EmberJS](https://www.manualweb.net/emberjs/) es que todos los elementos que vayamos a necesitar los vamos a crear utilizando el ember-cli.


Lo primero será crear nuestra aplicación. Para ello escribiremos lo siguiente:


```bash
ember new hola-mundo
```


Una vez ejecutado veremos que se crean un conjunto de directorios y ficheros sobre los cuales iremos construyendo nuestra aplicación.


El primer fichero que vamos a examinar es /app/templates/application.hbs. Este fichero es el que carga la página principal de la aplicación. Es una plantilla [HTML](https://www.manualweb.net/html/). Así que podríamos crear directamente en el nuestro Hola Mundo en [EmberJS](https://www.manualweb.net/emberjs/).


Podemos ejecutar nuestra aplicación poniendo en la línea de comandos:


```bash
ember s
```


Y si cargamos la URL [http://localhost:4200/](http://localhost:4200/) veremos ejecutándose la aplicación.


## Creando una ruta


Pero lo que vamos a hacer es crear una ruta que tenga el saludo de nuestro Hola Mundo en [EmberJS](https://www.manualweb.net/emberjs/). Una ruta es un recurso asociado a una URL en concreto. En nuestro caso vamos a crear una ruta que se llame hola-mundo.


Las rutas las creamos mediante el ember-cli escribiendo lo siguiente:


```bash
ember g route hola-mundo
```


La ruta nos creará 3 ficheros:

- **app/routes/hola-mundo.js**, el fichero de la ruta
- **app/templates/hola-mundo.hbs**, plantilla para la ruta
- **tests/unit/routes/hola-mundo-test.js**, fichero de test para la ruta

Adicionalmente modificará un fichero que se llama router.js que es el que gestiona todas las rutas de la aplicación.


## Modificando la plantilla


Ahora vamos a la plantilla hola-mundo.hbs y la modificaremos para que aparezca nuestro saludo.


```javascript
<h1>Hola Mundo</h1>

outlet
```


Ahora solo tendremos que ir a la ruta [http://localhost:4200/hola-mundo/](http://localhost:4200/hola-mundo/) y veremos nuestro Hola Mundo en [EmberJS](https://www.manualweb.net/emberjs/) ejecutándose.

