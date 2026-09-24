---
title: "Básicos"
description: "Conoce los básicos de EmberJS: instalación, estructura del proyecto, rutas, plantillas y componentes mediante una aplicación práctica paso a paso."
date: 2026-09-24
updatedDate: 2026-09-24
tags: ["javascript","framework","route","template","clases"]
slug: emberjs/basicos
type: category
topic: emberjs
id: 3e5a9dfb-adca-8049-bc04-f90d0564b8d9
author: victor_cuervo
---

## ¿Qué son los básicos de EmberJS?


Los **básicos de EmberJS** son el conjunto de conceptos y herramientas necesarios para crear y ejecutar una primera aplicación con este framework de JavaScript: Ember CLI, la estructura del proyecto, las rutas, las plantillas y los componentes.


**Ember CLI** es la herramienta de línea de comandos utilizada para crear proyectos, generar archivos, ejecutar el servidor de desarrollo y preparar la aplicación para producción. El framework aplica el principio de **convención sobre configuración**: cada archivo tiene una ubicación y una función predecibles, lo que reduce la configuración manual.


Una aplicación se organiza principalmente alrededor de estos elementos:

- Una **ruta** representa un estado navegable asociado a una URL y puede proporcionar los datos de esa pantalla.
- Una **plantilla** define la interfaz que se renderiza. Ember utiliza la sintaxis de Handlebars para mostrar datos e invocar componentes.
- Un **componente** encapsula una parte reutilizable de la interfaz. Puede recibir argumentos, mantener estado y responder a las acciones del usuario.
- Un **servicio** contiene estado o comportamiento compartido por distintas rutas y componentes.

## Características de los básicos de EmberJS

- **Instalación mediante Node.js.** Ember CLI se distribuye como un paquete de npm, por lo que el entorno de desarrollo necesita una versión compatible de Node.js.
- **Estructura predecible.** El directorio `app` contiene el código principal. `app/routes` almacena rutas, `app/templates` contiene plantillas y `app/components` reúne los componentes de la interfaz.
- **Enrutamiento integrado.** Cada ruta puede relacionar una URL con una plantilla y un modelo de datos. El componente `LinkTo` permite navegar sin recargar por completo la página.
- **Plantillas declarativas.** Las plantillas expresan qué debe mostrarse según los datos disponibles. Construcciones como `{{#each}}` recorren colecciones y los argumentos se identifican con el prefijo `@`.
- **Componentes reutilizables.** Un componente puede recibir datos desde su plantilla padre y controlar una parte concreta de la interfaz. Esta separación facilita probar y mantener pantallas complejas.
- **Generadores de código.** Comandos como `ember generate route` y `ember generate component` crean los archivos en sus ubicaciones convencionales y reducen errores de estructura.
- **Recarga durante el desarrollo.** `ember serve` compila el proyecto, inicia un servidor local y actualiza la aplicación al detectar cambios en los archivos.

## ¿Por qué aprender los básicos de EmberJS?


Conocer estos fundamentos permite entender el recorrido completo de una pantalla: una URL activa una ruta, la ruta proporciona datos, una plantilla los presenta y los componentes dividen la interfaz en unidades reutilizables. Sin este modelo mental resulta difícil decidir dónde colocar la lógica o diagnosticar por qué una vista no recibe los datos esperados.


Las convenciones también mejoran la productividad en proyectos compartidos. Un desarrollador que conoce la estructura de Ember puede localizar una ruta, su plantilla y sus componentes sin depender de una organización específica creada por cada equipo.


Estos conceptos se aplican tanto a una aplicación pequeña como a un producto con muchas pantallas. Las rutas resuelven la navegación, las plantillas describen la presentación y los componentes aíslan comportamiento y estado. Dominar su relación prepara el terreno para trabajar después con servicios, formularios, carga asíncrona de datos y pruebas automatizadas.


## Ejemplo de los básicos de EmberJS


El ejemplo crea una aplicación con una ruta `productos` y un componente que presenta cada producto. Primero, instala Ember CLI y genera el proyecto:


```bash
npm install --global ember-cli
ember new tienda-ember
cd tienda-ember
ember generate route productos
ember generate component tarjeta-producto
```


La ruta `app/routes/productos.js` devuelve los datos que necesita la pantalla:


```javascript
import Route from '@ember/routing/route';

export default class ProductosRoute extends Route {
  model() {
    return [
      { id: 1, nombre: 'Teclado', precio: 49.95 },
      { id: 2, nombre: 'Ratón', precio: 24.5 }
    ];
  }
}
```


La plantilla `app/templates/productos.hbs` recibe el resultado del método `model()` como `@model`, recorre la colección e invoca un componente por cada elemento:


```javascript
<h1>Productos</h1>

{{#each @model as |producto|}}
  <TarjetaProducto @producto={{producto}} />
{{/each}}
```


El componente de plantilla `app/components/tarjeta-producto.hbs` presenta los datos recibidos mediante el argumento `@producto`:


```javascript
<article>
  <h2>{{@producto.nombre}}</h2>
  <p>Precio: {{@producto.precio}} €</p>
</article>
```


Para ofrecer acceso a la ruta, modifica `app/templates/application.hbs`:


```javascript
<nav>
  <LinkTo @route="productos">Productos</LinkTo>
</nav>

{{outlet}}
```


Finalmente, inicia el servidor:


```bash
ember serve
```


La aplicación queda disponible en `http://localhost:4200`. Al entrar en `/productos`, Ember activa `ProductosRoute`, obtiene el array del modelo y renderiza `productos.hbs`. La plantilla delega la presentación de cada registro en `TarjetaProducto`, mientras que `{{outlet}}` indica dónde debe aparecer la plantilla de la ruta activa.

