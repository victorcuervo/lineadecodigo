---
title: "Placeholder - Marcadores de posición en HTML5"
description: "Placeholder: marcadores de posición en HTML5 para orientar formularios con ejemplos claros, etiquetas accesibles, estilos y validación correcta."
date: 2011-01-12
updatedDate: 2026-09-29
tags: ["placeholder","input","label","formularios","html5","aria"]
slug: html/formularios/placeholder-marcadores-de-posicion-en-html5
type: doc
topic: html
id: ae5b6aa9-7261-4eba-a5d1-f9b67e28c2fa
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/placeholder.html
---

El atributo `placeholder` permite mostrar una indicación breve dentro de un campo vacío. Los marcadores de posición en HTML5 ayudan a enseñar el formato esperado o a ofrecer un ejemplo, como un nombre, un correo electrónico o una fecha.


El texto desaparece cuando el usuario empieza a escribir. Por ese motivo, un `placeholder` debe complementar a la etiqueta visible del campo y nunca sustituirla.


## Qué es un placeholder


Un `placeholder` es un texto orientativo que se muestra dentro de determinados controles de formulario mientras no contienen ningún valor. Su finalidad es aportar una pista breve sobre el dato esperado.


Por ejemplo, en un campo llamado «Nombre completo», el marcador podría mostrar «Ana García». La etiqueta identifica el dato solicitado y el `placeholder` proporciona un ejemplo:


```html
<label for="nombre">Nombre completo</label>
<input
  type="text"
  id="nombre"
  name="nombre"
  placeholder="Ana García"
  autocomplete="name"
/>
```


Cuando el usuario introduce contenido, el marcador deja de verse. No se envía con el formulario ni actúa como valor predeterminado.


## Añadir un marcador de posición en HTML5


El ejemplo original partía de un campo de texto. Corregimos la asociación entre `<label>` e `<input>` mediante los atributos `for` e `id`, y añadimos `name` para identificar el dato enviado:


```html
<form id="formulario">
  <label for="texto">Nombre</label>
  <input
    type="text"
    id="texto"
    name="nombre"
    placeholder="Introduce tu nombre"
  />
</form>
```


El valor del atributo `for` debe coincidir exactamente con el `id` del control. De esta manera, al pulsar la etiqueta también se coloca el foco en el campo y las tecnologías de asistencia pueden relacionar ambos elementos.


Conviene utilizar frases cortas. Un marcador como «nombre@ejemplo.com» suele ser más útil que una explicación larga dentro del campo.


## Diferencia entre placeholder, label y value


Aunque pueden parecer similares, `placeholder`, `<label>` y `value` cumplen funciones distintas:

- `<label>` identifica de forma permanente el propósito del campo.
- `placeholder` muestra una pista temporal cuando el control está vacío.
- `value` establece un valor real dentro del control y puede enviarse con el formulario.

El siguiente ejemplo permite apreciar la diferencia:


```html
<label for="pais">País de residencia</label>
<input
  type="text"
  id="pais"
  name="pais"
  placeholder="Por ejemplo, España"
  value="España"
/>
```


En este caso no se verá el `placeholder`, porque `value` ya contiene información. Si el usuario borra el valor, el marcador volverá a mostrarse.


## Utilizar placeholder en varios tipos de campo


El atributo puede utilizarse en campos de introducción de texto y en `<textarea>`. Estos son algunos casos habituales:


```html
<form>
  <p>
    <label for="correo">Correo electrónico</label>
    <input
      type="email"
      id="correo"
      name="correo"
      placeholder="nombre@ejemplo.com"
      autocomplete="email"
    />
  </p>

  <p>
    <label for="telefono">Teléfono</label>
    <input
      type="tel"
      id="telefono"
      name="telefono"
      placeholder="+34 600 000 000"
      autocomplete="tel"
    />
  </p>

  <p>
    <label for="mensaje">Mensaje</label>
    <textarea
      id="mensaje"
      name="mensaje"
      placeholder="Describe brevemente tu consulta"
    ></textarea>
  </p>
</form>
```


El marcador debe adaptarse al tipo de dato. En un correo electrónico o un teléfono resulta útil mostrar un ejemplo de formato, mientras que la etiqueta continúa explicando qué información se solicita.


## El placeholder no sustituye a la etiqueta


La recomendación central del artículo original sigue siendo válida: utilizar `placeholder` no elimina la necesidad de incluir un `<label>`.


Un marcador no es una etiqueta adecuada porque:

- desaparece cuando comienza la escritura;
- suele mostrarse con menos contraste que el texto introducido;
- puede confundirse con un valor ya rellenado;
- dificulta revisar las instrucciones después de escribir;
- no siempre se anuncia como nombre accesible del control.

La forma recomendada combina una etiqueta visible y una pista breve:


```html
<label for="usuario">Nombre de usuario</label>
<input
  type="text"
  id="usuario"
  name="usuario"
  placeholder="Entre 6 y 20 caracteres"
  aria-describedby="ayuda-usuario"
/>
<small id="ayuda-usuario">
  Utiliza letras, números, guiones y guiones bajos.
</small>
```


La información esencial permanece fuera del campo y se relaciona mediante `aria-describedby`. Así continúa disponible aunque el usuario ya haya escrito.


## Placeholder y validación del formulario


El atributo `placeholder` solo ofrece una pista visual. No obliga a completar el campo ni comprueba que el valor tenga el formato correcto.


Para validar los datos deben utilizarse atributos específicos como `required`, `type`, `minlength`, `maxlength` o `pattern`, según el caso:


```html
<label for="codigo-postal">Código postal</label>
<input
  type="text"
  id="codigo-postal"
  name="codigo-postal"
  placeholder="28001"
  inputmode="numeric"
  pattern="[0-9]{5}"
  maxlength="5"
  required
/>
```


Aquí el marcador enseña un ejemplo, mientras que `pattern`, `maxlength` y `required` definen las restricciones. También conviene explicar el formato con texto visible si puede generar dudas.


## Cambiar el estilo del placeholder


El pseudoelemento `::placeholder` permite personalizar el marcador con [CSS](https://lineadecodigo.com/css/):


```css
input::placeholder,
textarea::placeholder {
  color: #5f6368;
  opacity: 1;
}
```


Debemos mantener suficiente contraste con el fondo, pero también diferenciar visualmente la pista del contenido introducido. No es recomendable utilizar un color tan tenue que resulte difícil de leer.


También existe la pseudoclase `:placeholder-shown`, que selecciona el control mientras muestra el marcador:


```css
input:placeholder-shown {
  border-color: #64748b;
}

input:not(:placeholder-shown) {
  border-color: #15803d;
}
```


Este estilo puede servir como indicación visual, pero no debe utilizarse por sí solo para afirmar que un dato es válido. Un campo puede contener texto y seguir teniendo un formato incorrecto.


## Errores habituales


Al utilizar **marcadores de posición en HTML5** conviene evitar estos problemas:

- Usar el `placeholder` como única etiqueta del campo.
- Incluir instrucciones largas que desaparecen al escribir.
- Confundir una pista con un valor predeterminado.
- Confiar en el marcador para validar información.
- Repetir exactamente el texto de la etiqueta sin aportar un ejemplo útil.
- Aplicar un color con contraste insuficiente.
- Omitir la relación entre `for` e `id`.

## Ejemplo completo y accesible


El siguiente formulario reúne las prácticas recomendadas:


```html
<form action="/registro" method="post">
  <p>
    <label for="nombre-completo">Nombre completo</label>
    <input
      type="text"
      id="nombre-completo"
      name="nombre"
      placeholder="Ana García"
      autocomplete="name"
      required
    />
  </p>

  <p>
    <label for="email-registro">Correo electrónico</label>
    <input
      type="email"
      id="email-registro"
      name="email"
      placeholder="nombre@ejemplo.com"
      autocomplete="email"
      aria-describedby="ayuda-email"
      required
    />
    <small id="ayuda-email">
      Utilizaremos esta dirección para confirmar el registro.
    </small>
  </p>

  <button type="submit">Crear cuenta</button>
</form>
```


En este ejemplo, cada campo dispone de una etiqueta visible, el `placeholder` se limita a mostrar un ejemplo y las instrucciones importantes permanecen disponibles fuera del control.


## Compatibilidad actual


El texto original advertía que `placeholder` solo funcionaba en navegadores recientes. Esa observación era importante cuando se publicó, pero actualmente el atributo cuenta con soporte generalizado en los navegadores modernos y no requiere una solución alternativa para un uso web habitual.


Aun así, el formulario debe seguir siendo comprensible si el marcador no se muestra. Las etiquetas visibles, las instrucciones persistentes y una validación adecuada garantizan que la interfaz no dependa exclusivamente de esta ayuda temporal.


Utilizado de esta manera, `placeholder` mejora la orientación del usuario sin comprometer la claridad ni la accesibilidad del formulario.

