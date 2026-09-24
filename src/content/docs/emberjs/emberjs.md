---
title: "EmberJS"
description: "Qué es EmberJS, cómo funcionan sus convenciones, componentes, rutas y plantillas, y un ejemplo práctico para crear una interfaz reactiva con JavaScript."
date: 2026-02-10
updatedDate: 2026-09-24
tags: ["javascript","mvc","route","template","clases"]
slug: emberjs
type: category
topic: emberjs
id: 302a9dfb-adca-802e-960e-ea64aebaa0f4
author: victor_cuervo
---

## ¿Qué es EmberJS?


EmberJS es un **framework de JavaScript para crear aplicaciones web completas**, especialmente interfaces que cambian de estado sin recargar toda la página. Un framework proporciona una estructura de trabajo, decisiones de arquitectura y herramientas integradas; no se limita a ofrecer funciones aisladas como una biblioteca.


Ember organiza la aplicación mediante rutas, plantillas y componentes. Una **ruta** representa un estado navegable de la aplicación, obtiene o prepara los datos necesarios y decide qué plantilla se muestra. Las **plantillas**, escritas con Handlebars, describen la interfaz. Los **componentes** encapsulan una parte reutilizable de esa interfaz junto con su comportamiento.


Tradicionalmente se relaciona EmberJS con el patrón MVC —modelo, vista y controlador—, pero las aplicaciones modernas se apoyan principalmente en rutas, componentes y servicios. El modelo representa los datos; la vista se construye con plantillas y componentes; y los servicios concentran estado o lógica compartidos entre distintas partes de la aplicación.


## Características de EmberJS

- **Convención sobre configuración.** Ember define nombres de archivos, ubicaciones y patrones comunes. Seguir estas convenciones reduce decisiones repetitivas y permite reconocer con rapidez la estructura de otros proyectos Ember.
- **Ember CLI.** Su herramienta de línea de comandos crea proyectos, genera archivos, ejecuta el servidor de desarrollo, lanza pruebas y prepara versiones optimizadas para producción.
- **Componentes reactivos.** Los componentes modernos, basados en Glimmer, actualizan la parte necesaria de la interfaz cuando cambia un estado marcado como reactivo. Esto evita manipular el [DOM](https://lineadecodigo.com/dom/) de forma manual en la mayoría de los casos.
- **Enrutamiento integrado.** El router relaciona URLs con estados de la aplicación. Admite rutas anidadas, parámetros dinámicos y carga de datos asociada a cada pantalla.
- **Plantillas declarativas.** Handlebars permite expresar qué debe mostrar la interfaz según los datos disponibles. Los modificadores, como `{{on}}`, conectan elementos del [DOM](https://lineadecodigo.com/dom/) con acciones del componente.
- **Servicios compartidos.** Un servicio puede mantener datos o lógica utilizados por varias rutas y componentes, por ejemplo la sesión del usuario o el carrito de compra.
- **Pruebas y compilación integradas.** El entorno incluye soporte para pruebas unitarias, de renderizado y de aplicación, además de una cadena de construcción preparada para desarrollo y producción.
- **Estabilidad mediante versiones y convenciones.** Ember prioriza las actualizaciones progresivas y ofrece herramientas para migrar código, una ventaja práctica en aplicaciones mantenidas durante años.

## ¿Por qué aprender EmberJS?


EmberJS resulta útil cuando una aplicación necesita muchas pantallas, navegación interna, estado compartido y una base de código mantenida por un equipo. Su estructura uniforme evita que cada módulo adopte una organización distinta y facilita localizar rutas, componentes, pruebas y servicios.


La productividad procede de disponer de un conjunto coherente de soluciones: router, renderizado, generación de código, pruebas y proceso de compilación. Esto reduce el trabajo de seleccionar e integrar herramientas independientes. A cambio, conviene respetar sus convenciones y aprender el flujo de datos propio del framework.


También permite comprender conceptos transferibles a otros entornos de frontend: componentes reutilizables, interfaces declarativas, estado reactivo, rutas asociadas a URLs y separación de responsabilidades. Ember es especialmente adecuado para productos web de larga duración en los que la consistencia y la facilidad de mantenimiento pesan más que construir una solución mínima desde cero.


## Ejemplo de EmberJS


Este ejemplo crea un componente contador con estado reactivo. Parte de una aplicación generada con Ember CLI:


```bash
ember new ejemplo-ember
cd ejemplo-ember
ember generate component contador
```


En `app/components/contador.js`, el componente mantiene el valor y define la acción que lo modifica:


```javascript
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContadorComponent extends Component {
  @tracked total = 0;

  @action
  incrementar() {
    this.total += 1;
  }
}
```


En `app/components/contador.hbs`, la plantilla muestra el estado y conecta el botón con la acción:


```javascript
<p>Has pulsado el botón {{this.total}} veces.</p>
<button type="button" {{on "click" this.incrementar}}>
  Incrementar
</button>
```


Para utilizarlo, añade el componente a `app/templates/application.hbs`:


```javascript
<h1>Contador con EmberJS</h1>
<Contador />
```


Después, inicia la aplicación:


```bash
ember serve
```


Al abrir `http://localhost:4200`, cada pulsación ejecuta `incrementar()`. La propiedad `total` está decorada con `@tracked`, por lo que Ember detecta el cambio y vuelve a renderizar únicamente la interfaz que depende de ese valor. `@action` conserva el contexto del componente cuando el método se usa como manejador, y `{{on "click" ...}}` registra el evento de forma declarativa en la plantilla.

