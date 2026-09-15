---
title: "Básicos"
description: "Comprende Bootstrap Básico mediante su rejilla responsive, utilidades y componentes, con un ejemplo práctico de tarjeta y formulario adaptable."
date: 2026-09-15
updatedDate: 2026-09-15
tags: ["responsive","texto","formulario","tablas"]
slug: bootstrap/basicos
type: category
topic: bootstrap
id: 3dca9dfb-adca-8031-8891-c0b2011cc8d3
author: victor_cuervo
---

## ¿Qué es Bootstrap Básico?


[**Bootstrap**](https://lineadecodigo.com/bootstrap/) **es un framework de interfaz web** que proporciona estilos, utilidades y componentes reutilizables para construir páginas adaptables a distintos tamaños de pantalla. Se utiliza mediante clases predefinidas que se añaden a los elementos [HTML](https://lineadecodigo.com/html/), de modo que tareas habituales como distribuir columnas, dar formato a un formulario o presentar una tabla requieren menos código propio.


El núcleo de [Bootstrap](https://lineadecodigo.com/bootstrap/) es una [hoja de estilos CSS](https://lineadecodigo.com/css/). Algunos componentes interactivos, como los menús desplegables, modales y acordeones, también necesitan el [JavaScript](https://lineadecodigo.com/javascript/) de Bootstrap. No es un lenguaje de programación ni sustituye a [HTML](https://lineadecodigo.com/html/) y [CSS](https://lineadecodigo.com/css/): ofrece una capa coherente de reglas y patrones sobre esas tecnologías.


Uno de sus conceptos centrales es el diseño **mobile first**. Los estilos básicos se aplican primero a pantallas pequeñas y se amplían mediante puntos de ruptura, conocidos como _breakpoints_, para reorganizar el contenido en tabletas y pantallas de mayor tamaño.


Esta explicación toma como referencia Bootstrap 5. En esta versión no se necesita jQuery, pero los nombres de algunas clases y componentes pueden diferir respecto a Bootstrap 3 o 4.


## Características de Bootstrap Básico

- **Rejilla responsive:** organiza la página con contenedores, filas y un sistema de 12 columnas. Clases como `col-12`, `col-md-6` y `col-lg-4` permiten variar el ancho de un bloque según el punto de ruptura.
- **Utilidades de propósito único:** clases como `mt-3`, `p-4`, `d-flex` o `text-center` resuelven ajustes frecuentes de margen, relleno, visualización y alineación sin escribir una regla CSS específica para cada caso.
- **Componentes reutilizables:** botones, tarjetas, alertas, navegación y otros patrones comparten estilos y convenciones. Algunos son únicamente visuales; los que cambian de estado o reaccionan a acciones requieren el [JavaScript](https://lineadecodigo.com/javascript/) del framework.
- **Formularios coherentes:** clases como `form-label`, `form-control` y `form-select` mantienen una presentación uniforme de etiquetas, campos y listas. La validación de los datos continúa siendo responsabilidad de la aplicación.
- **Tablas adaptables:** `table` aplica el formato base y clases como `table-striped` o `table-hover` modifican su presentación. El contenedor `table-responsive` añade desplazamiento horizontal cuando la tabla no cabe en una pantalla estrecha.
- **Tipografía y textos:** incluye estilos base para encabezados, párrafos y listas, además de utilidades para alineación, tamaño, color y énfasis visual. La estructura semántica del documento debe seguir definiéndose con elementos [HTML](https://lineadecodigo.com/html/) adecuados.
- **Personalización:** [Bootstrap](https://lineadecodigo.com/bootstrap/) puede usarse con sus valores predeterminados o compilarse desde Sass para modificar colores, espaciado y otros parámetros de forma global. Para una primera implementación suele bastar con cargar la versión distribuida del framework.

## ¿Por qué aprender Bootstrap Básico?


[Bootstrap](https://lineadecodigo.com/bootstrap/) permite crear con rapidez interfaces consistentes para prototipos, paneles internos, formularios administrativos y sitios cuyo diseño no necesita partir completamente de cero. Su rejilla evita mantener múltiples cálculos manuales de ancho y facilita decidir cómo se reorganizan los bloques en cada tamaño de pantalla.


Conocer sus clases ayuda también a leer y mantener proyectos existentes. En lugar de interpretar cada clase como un estilo aislado, se puede reconocer un vocabulario común: `container` limita y centra el contenido, `row` crea una fila, `col-*` define columnas y las utilidades ajustan espaciado o alineación.


Aprender el framework obliga a relacionar sus abstracciones con [HTML](https://lineadecodigo.com/html/), [CSS](https://lineadecodigo.com/css/) y diseño responsive. Esa relación es útil para saber cuándo una clase disponible resuelve el problema y cuándo conviene escribir estilos propios. También evita combinar utilidades contradictorias o utilizar un componente sin respetar la estructura que requiere.


En proyectos con una identidad visual muy específica, [Bootstrap](https://lineadecodigo.com/bootstrap/) puede necesitar personalización y no siempre reduce el trabajo. Su ventaja aparece cuando el sistema de diseño del proyecto puede aprovechar sus patrones, su rejilla y sus componentes sin acumular excepciones.


## Ejemplo de Bootstrap Básico


El siguiente documento utiliza Bootstrap 5.3 para crear una interfaz con dos columnas: un formulario de registro y una tabla de usuarios. En pantallas pequeñas, ambos bloques se apilan; desde el punto de ruptura `lg`, se muestran uno junto al otro.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Panel de usuarios</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>
<body>
  <main class="container py-5">
    <h1 class="mb-4">Panel de usuarios</h1>

    <div class="row g-4">
      <section class="col-12 col-lg-5">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="h4 card-title">Nuevo usuario</h2>

            <form>
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  name="nombre"
                  required>
              </div>

              <div class="mb-3">
                <label for="correo" class="form-label">Correo electrónico</label>
                <input
                  type="email"
                  class="form-control"
                  id="correo"
                  name="correo"
                  required>
              </div>

              <button type="submit" class="btn btn-primary">
                Guardar usuario
              </button>
            </form>
          </div>
        </div>
      </section>

      <section class="col-12 col-lg-7">
        <h2 class="h4">Usuarios recientes</h2>

        <div class="table-responsive">
          <table class="table table-striped align-middle">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ana López</td>
                <td>ana@example.com</td>
                <td><span class="badge text-bg-success">Activo</span></td>
              </tr>
              <tr>
                <td>Mario Pérez</td>
                <td>mario@example.com</td>
                <td><span class="badge text-bg-secondary">Pendiente</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </main>
</body>
</html>
```


Analizando el código vemos que la clase `container` centra el contenido y añade un ancho máximo según la pantalla. La combinación `row g-4` crea la fila y separa sus columnas. Cada sección ocupa las 12 columnas disponibles en pantallas pequeñas mediante `col-12`; `col-lg-5` y `col-lg-7` reparten el espacio cuando el viewport alcanza el punto de ruptura grande.


La tarjeta agrupa visualmente el formulario. `form-label` y `form-control` aplican los estilos de Bootstrap sin eliminar atributos HTML como `for`, `id`, `name` y `required`, que conservan la relación entre controles y etiquetas y permiten la validación básica del navegador.


La tabla mantiene elementos semánticos como `thead`, `tbody` y encabezados con `scope="col"`. El bloque `table-responsive` evita que sus columnas deformen la página en pantallas estrechas. Este ejemplo no carga el JavaScript de [Bootstrap](https://lineadecodigo.com/bootstrap/) porque ninguno de los componentes utilizados necesita comportamiento interactivo del framework.

