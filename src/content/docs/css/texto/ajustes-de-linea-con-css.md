---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVPBQU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2BJT%2BDFbdS6ZX4zOE5qHtlHsuYK4pEIm5piaW4lUDDQIgSoStgMlDT2oDqHKa7xdsBTdzxuSh%2B%2BlruifWKtwnAIUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSHxguG2BBC6EcWGyrcA2zNYUrToaUhbat02ZMzPHUCacnqQ%2Fht5eYIQrlteK3Ny3HpADjVCN99GO7T5JlN7vt36ocUKq0XJ%2BF9sJ56Uj6ionlLU%2FIR8YI8Cx1KRE3cpFTQGIGz%2Boa6qeny4VQd8MirlyuEWbG0aKPUE%2BlFtIBNv5XWyMtTgCVg0hBI2yrHVeOM6OTxU77jjnaxirATPU2hpQulqqetoK%2BcOofW5aCF%2FyxhKpFI7MYqhhhqH9CpCe%2B4rZj93MK9ivTsJF69Q8tNpxpgUk43Kb9%2B%2FJvlbo8XjHBajYfbwJeNYFDg0ahHWkGoE32o8vvFOuCb3m4%2Fatqj2fFbVHl07ewE7KDpM64rRd81juzFUqeqD5wzx%2B3Nkpx%2BniZBXl%2FvZAkQxkWN702GoDNzfDpJ9B6wuLDfIKeYiH6Rj%2FhnS2XVk0lhKNVC4uMQ6%2BJc9q3k7U2NX0qHj2xcmF9XE2ygIgMBFLuiYfIlU8FWQVaR8DHZuJlV%2FtBonRA7OT4siZQM5iOPpvuaiUHAWD4%2B7%2Fc1n0oXOfQNF4riGILFljUhLZxnLhvwJzFtuag5S6MDTV3jaHV6cp8ES7D0lTRziEg8KsgLbGm%2FwZCHPt1mQ%2BoDM5%2FQDC1dolp63toZK1XAxnlKbmljMMqei8oGOqUBMtB50jbENWajWqZYTr%2FpsB2Dqx9UZ7ptx%2FP5c0VLGn3Axvd45nxT7sCLOSubCLO%2Bn4NEAEs0HtTd2N5mwruWa3uD5QHA8JP36hpBqpEWOVsxCMA4que5undpZO10So0MLoIPy5PrbblLxuu9fUY0LgmoR32ptj7V76zYa4othV2GbNz%2FqlsocI49zsIhLTVrE907gej5%2FQpVEZ1Y%2Fj1sfLzjA7mY&X-Amz-Signature=b7bf4fcffe7c480f1cf5741a1a639a2526e934988fabdefdc532c27b58faaad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVPBQU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2BJT%2BDFbdS6ZX4zOE5qHtlHsuYK4pEIm5piaW4lUDDQIgSoStgMlDT2oDqHKa7xdsBTdzxuSh%2B%2BlruifWKtwnAIUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSHxguG2BBC6EcWGyrcA2zNYUrToaUhbat02ZMzPHUCacnqQ%2Fht5eYIQrlteK3Ny3HpADjVCN99GO7T5JlN7vt36ocUKq0XJ%2BF9sJ56Uj6ionlLU%2FIR8YI8Cx1KRE3cpFTQGIGz%2Boa6qeny4VQd8MirlyuEWbG0aKPUE%2BlFtIBNv5XWyMtTgCVg0hBI2yrHVeOM6OTxU77jjnaxirATPU2hpQulqqetoK%2BcOofW5aCF%2FyxhKpFI7MYqhhhqH9CpCe%2B4rZj93MK9ivTsJF69Q8tNpxpgUk43Kb9%2B%2FJvlbo8XjHBajYfbwJeNYFDg0ahHWkGoE32o8vvFOuCb3m4%2Fatqj2fFbVHl07ewE7KDpM64rRd81juzFUqeqD5wzx%2B3Nkpx%2BniZBXl%2FvZAkQxkWN702GoDNzfDpJ9B6wuLDfIKeYiH6Rj%2FhnS2XVk0lhKNVC4uMQ6%2BJc9q3k7U2NX0qHj2xcmF9XE2ygIgMBFLuiYfIlU8FWQVaR8DHZuJlV%2FtBonRA7OT4siZQM5iOPpvuaiUHAWD4%2B7%2Fc1n0oXOfQNF4riGILFljUhLZxnLhvwJzFtuag5S6MDTV3jaHV6cp8ES7D0lTRziEg8KsgLbGm%2FwZCHPt1mQ%2BoDM5%2FQDC1dolp63toZK1XAxnlKbmljMMqei8oGOqUBMtB50jbENWajWqZYTr%2FpsB2Dqx9UZ7ptx%2FP5c0VLGn3Axvd45nxT7sCLOSubCLO%2Bn4NEAEs0HtTd2N5mwruWa3uD5QHA8JP36hpBqpEWOVsxCMA4que5undpZO10So0MLoIPy5PrbblLxuu9fUY0LgmoR32ptj7V76zYa4othV2GbNz%2FqlsocI49zsIhLTVrE907gej5%2FQpVEZ1Y%2Fj1sfLzjA7mY&X-Amz-Signature=dff0ff4be9bab8fdd1f69ab8c1e755c0a02fc6620817d2cbbc7a23edac7168ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

