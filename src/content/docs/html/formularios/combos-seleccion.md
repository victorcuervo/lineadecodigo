---
title: Combos de Selección
description: Welcome to your documentation site
---

Una de las primeras cosas con la que nos encontraremos a la hora de desarrollar una página HTML será la necesidad de crear un combo con opciones. Lo que son los combos de selección.

Estos elementos los solemos encontrar en casi todos los formularios que hay dispersos por la web. Con ellos se busca que el usuario pueda seleccionar una de las opciones.

Para codificarlos lo primero que tendremos que hacer es crear un elemento FORM. Dicho elemento viene a representar un formulario.

<form>
  <!-- Formulario -->
</form>
Dentro del elemento FORM pondremos el combo. Para poner un combo nos ayudamos del elemento SELECT.

<form>
  <select>
    <!-- Opciones del Combo -->
  </select>
</form>
Una vez que tenemos nuestro combo, deberemos de introducir las diferentes opciones. Estas se insertan mediante los elementos OPTION. Es decir, por cada una de las opciones que queramos añadir tendremos que incorporar un elemento OPTION.


Es por ello que si queremos crear un combo de selección que reflejase los equipos de futbol de la Liga Española quedaría de la siguiente forma:

<select>
  <option>Atletico de Madrid</option>
  <option>Betis</option>
  <option>FC. Barcelona</option>
  <option>Real Madrid</option>
  <option>Zaragoza</option>
</select>
Como vemos el nombre del equipo, que es cada una de las opciones, va dentro del elemento OPTION.

Si queremos que una de las opciones sea la predeterminada podemos utilizar el atributo SELECTED del elemento OPTION. En nuestro ejemplo, si queremos predeterminar al «Betis» como la opción por defecto, nuestro código quedaría de la siguiente forma:

<select>
  <option>Atletico de Madrid</option>
  <option selected="selected">Betis</option>
  <option>FC. Barcelona</option>
  <option>Real Madrid</option>
  <option>Zaragoza</option>
</select>
De esta forma ya tendremos nuestros combos de selección en HTML.