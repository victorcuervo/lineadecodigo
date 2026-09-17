---
title: "Formularios"
description: "Aprende a crear formularios en Bootstrap con campos, áreas de texto, checkbox, botones, rejilla responsive y validación mediante un ejemplo accesible."
date: 2026-09-17
updatedDate: 2026-09-17
tags: ["form","checkbox","textarea","button"]
slug: bootstrap/formularios
type: category
topic: bootstrap
id: 3dea9dfb-adca-80e6-928c-e3a50803a671
author: victor_cuervo
---

## ¿Qué son los formularios en Bootstrap?


**Los formularios en Bootstrap son estructuras HTML de captura de datos cuya presentación se organiza mediante clases del framework.** [Bootstrap](https://lineadecodigo.com/bootstrap/) estiliza campos de texto, selectores, casillas, áreas de texto y botones para que compartan tamaños, espaciado, estados de foco y criterios visuales coherentes.


El elemento `form` conserva la responsabilidad de agrupar los controles y enviar sus valores. Cada control necesita un atributo `name` para que su dato forme parte del envío, y las etiquetas `label` deben asociarse con los campos mediante `for` e `id`. Bootstrap modifica la apariencia, pero no procesa la información ni sustituye la lógica del servidor.


Las clases más habituales son `.form-label` para etiquetas, `.form-control` para `input` y `textarea`, `.form-select` para listas desplegables y `.form-check` para checkbox y botones de opción. La rejilla de Bootstrap permite distribuir los campos en columnas y apilarlos cuando la pantalla no ofrece espacio suficiente.


Esta página toma Bootstrap 5 como referencia. Clases usadas en versiones anteriores, como `.form-group`, `.form-row` o `.form-inline`, ya no forman parte de la API actual. En Bootstrap 5, el espaciado se aplica con utilidades como `.mb-3` y la distribución se construye con `.row`, `.col-*` y `.g-*`.


## Características de los formularios en Bootstrap

- **Controles de texto:** `.form-control` estiliza campos como `text`, `email`, `password`, `number`, `date` y `textarea`. Los tipos de entrada mantienen su comportamiento nativo.
- **Etiquetas visibles:** `.form-label` normaliza el margen y la presentación de las etiquetas. Un `placeholder` no sustituye a `label`, porque desaparece al escribir y puede resultar insuficiente para identificar el campo.
- **Selectores:** `.form-select` aplica el estilo de [Bootstrap](https://lineadecodigo.com/bootstrap/) al elemento `select`. Las opciones y su selección siguen siendo gestionadas por el navegador.
- **Checkbox y radio:** `.form-check` agrupa el control y su etiqueta; `.form-check-input` y `.form-check-label` estilizan cada parte. `.form-switch` presenta un checkbox como interruptor sin cambiar su valor semántico.
- **Tamaños:** `.form-control-sm` y `.form-control-lg` ajustan la altura y tipografía de los controles. El tamaño debe responder a la jerarquía de la interfaz, no a la cantidad de contenido esperado.
- **Texto de ayuda:** `.form-text` muestra instrucciones relacionadas con un campo. Cuando esa ayuda es necesaria para comprenderlo, `aria-describedby` debe enlazar el control con el texto correspondiente.
- **Distribución responsive:** la rejilla permite usar una columna completa en móvil y varias columnas desde un punto de ruptura, por ejemplo con `.col-12` y `.col-md-6`.
- **Grupos de entrada:** `.input-group` combina un control con texto, botones u otros complementos. Es útil para prefijos, unidades o acciones estrechamente relacionadas con el valor.
- **Estados de validación:** `.is-valid` y `.is-invalid` aplican estilos explícitos; `.valid-feedback` e `.invalid-feedback` presentan mensajes. Estas clases solo comunican el resultado visual: la validación real debe proceder del navegador o de la lógica de la aplicación.
- **Controles deshabilitados y de solo lectura:** `disabled` impide la interacción y normalmente excluye el dato del envío. `readonly` mantiene el valor en el envío, pero evita su edición en los controles compatibles.

## ¿Por qué aprender formularios en Bootstrap?


Los formularios conectan la interfaz con operaciones como iniciar sesión, buscar, filtrar, registrarse, editar perfiles o enviar consultas. Conocer las clases de [Bootstrap](https://lineadecodigo.com/bootstrap/) permite construir estas pantallas con una jerarquía visual consistente y sin definir estilos específicos para cada tipo de control.


La rejilla y las utilidades de espaciado resuelven disposiciones frecuentes. Dos campos breves pueden compartir una fila en pantallas amplias y ocupar todo el ancho en un móvil. Este comportamiento reduce el riesgo de controles estrechos o etiquetas difíciles de leer.


Aprender su estructura también ayuda a separar presentación, semántica y comportamiento. [Bootstrap](https://lineadecodigo.com/bootstrap/) proporciona estilos y componentes; [HTML](https://lineadecodigo.com/html/) define la relación entre etiquetas y controles; el navegador o la aplicación validan los valores; el servidor procesa el envío. Confundir estas capas puede producir formularios que parecen correctos, pero no envían datos o no comunican los errores.


La accesibilidad depende de decisiones que el framework no puede tomar automáticamente. Las etiquetas, instrucciones, mensajes de error y agrupaciones deben describir con claridad qué dato se solicita. Los estados no deben comunicarse solo con color, y el orden visual debe coincidir con un recorrido lógico mediante teclado.


## Ejemplo de formularios en Bootstrap


El siguiente ejemplo crea un formulario de contacto responsive con campos de texto, correo, área de texto, checkbox y botones. Utiliza la validación nativa del navegador y no requiere [JavaScript](https://lineadecodigo.com/javascript/).


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Formulario de contacto</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>
<body>
  <main class="container py-5">
    <h1 class="h2 mb-4">Contacto</h1>

    <form action="/contacto" method="post" class="row g-3">
      <div class="col-12 col-md-6">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          name="nombre"
          autocomplete="name"
          required>
      </div>

      <div class="col-12 col-md-6">
        <label for="correo" class="form-label">Correo electrónico</label>
        <input
          type="email"
          class="form-control"
          id="correo"
          name="correo"
          autocomplete="email"
          aria-describedby="ayuda-correo"
          required>
        <div id="ayuda-correo" class="form-text">
          Se utilizará únicamente para responder a la consulta.
        </div>
      </div>

      <div class="col-12">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea
          class="form-control"
          id="mensaje"
          name="mensaje"
          rows="5"
          minlength="20"
          required></textarea>
      </div>

      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="acepta-condiciones"
            name="acepta_condiciones"
            value="si"
            required>
          <label class="form-check-label" for="acepta-condiciones">
            Confirmo que he leído las condiciones de contacto.
          </label>
        </div>
      </div>

      <div class="col-12 d-flex gap-2">
        <button type="submit" class="btn btn-primary">Enviar consulta</button>
        <button type="reset" class="btn btn-outline-secondary">Limpiar</button>
      </div>
    </form>
  </main>
</body>
</html>
```


La combinación `.row g-3` crea la rejilla y el espacio entre controles. Los campos de nombre y correo ocupan todo el ancho en pantallas pequeñas mediante `.col-12`; desde el punto de ruptura mediano, `.col-md-6` los distribuye en dos columnas.


`label`, `for` e `id` asocian cada texto visible con su control. Los atributos `name` definen las claves que se enviarán a `/contacto`. `aria-describedby` conecta el correo con su instrucción adicional, de modo que las tecnologías de asistencia puedan anunciarla en contexto.


El navegador comprueba `required`, el formato de `type="email"` y la longitud mínima del mensaje antes del envío. Bootstrap aporta la presentación con `.form-control`, `.form-check` y `.btn`, pero no almacena ni transmite por sí mismo la consulta. La ruta indicada en `action` debe existir en la aplicación y procesar los datos con validación en el servidor.

