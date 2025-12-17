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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDFC4YZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqvbGQRd5FARYEui3y1SMP07RLjre%2BSHb1%2FR%2FXDw7KQAiEA%2FgrXqTcQ2kKEcZGEsz%2FYbJq1hy5gMvIHC3b6kcFwbIEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAmJYuv7WzZE0p0T0ircA4r9xLSG5iAO1L6tUo0fpFSCh6KensSiQSKqb8DoM0BDH8fpdAfWS7biFbmqP8uXPNtaCrgA3t38fYtiKrmMRS%2BcCGW5kZY0NjtM8Y%2B3U6yBrusP7YQAp%2F3oJmXBj%2Bxi12J8wO%2BKIQ%2FGMvkS%2BoHWAnxlGTQvVn90qXQTcBAc89NXZWgAKiRwDU2Ogvki9849ZWfou6BTdRizQUMlMw1C%2FDQx1j91K%2FIQZm9vEQhTPz0nQVJVOxKMHW%2BkD%2FtK5%2FWaflrEUxgHeVadxCfoQlfl69vj58hAi95uAfRLW65Cn2Tr1bEyhwCMFN7Mr8ZJvMAIVHEFmffiaCWz31zT9nUqb4enDXWiYvT%2FZhKh5WogMY6BTOq3Op58T8FLCV5jvTG8zcUMtOqwTu306AZTkrzr%2BVQzJ3fptGXTSPp%2FY4FHG7Z0cveDhpHvgKF4cMtxX6PGTXeLUtdWEpAmbjnZlB20oxUKfChhqUsRe5klLvkOpmJ902Dckd76GECbIyLore3seafDmapAe6%2BCUlSTtpYJFGhxpU7vbQSFBvw2JbsHPTS42oOawfGz06mbj%2BQrlGJcVfIWyA3sS8JB5FWRQbzDRemoyVcflklSPym2ucDfI3C9k044NAjwWzxO4KaqMM%2BViMoGOqUB53UHgxJFybnb5GMk0qqaks1m%2B7Hcn0P7nZQ06A4gEbsEB6hi7327jiAQH9FbJgx9HPGiskVS1Duu2cfb6Rp4e%2FmGhsLVDtqAxLZQdHYab9JOizuPYP1n%2BY6yAL8nuPY2D0H2UZ3XjUi64nqM2%2B62DaZp0nJXrMnEiJckLeJR3f8IMW5Z9VG2RDMwzOZZh%2F%2FKMNGX5Mrpt%2BYiWoQs0XC0CGyuejZx&X-Amz-Signature=abd7a847a4cf3c863b0d89069c1ac63ddb2a4da11fbe790dd165bc28dced67e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDFC4YZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqvbGQRd5FARYEui3y1SMP07RLjre%2BSHb1%2FR%2FXDw7KQAiEA%2FgrXqTcQ2kKEcZGEsz%2FYbJq1hy5gMvIHC3b6kcFwbIEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAmJYuv7WzZE0p0T0ircA4r9xLSG5iAO1L6tUo0fpFSCh6KensSiQSKqb8DoM0BDH8fpdAfWS7biFbmqP8uXPNtaCrgA3t38fYtiKrmMRS%2BcCGW5kZY0NjtM8Y%2B3U6yBrusP7YQAp%2F3oJmXBj%2Bxi12J8wO%2BKIQ%2FGMvkS%2BoHWAnxlGTQvVn90qXQTcBAc89NXZWgAKiRwDU2Ogvki9849ZWfou6BTdRizQUMlMw1C%2FDQx1j91K%2FIQZm9vEQhTPz0nQVJVOxKMHW%2BkD%2FtK5%2FWaflrEUxgHeVadxCfoQlfl69vj58hAi95uAfRLW65Cn2Tr1bEyhwCMFN7Mr8ZJvMAIVHEFmffiaCWz31zT9nUqb4enDXWiYvT%2FZhKh5WogMY6BTOq3Op58T8FLCV5jvTG8zcUMtOqwTu306AZTkrzr%2BVQzJ3fptGXTSPp%2FY4FHG7Z0cveDhpHvgKF4cMtxX6PGTXeLUtdWEpAmbjnZlB20oxUKfChhqUsRe5klLvkOpmJ902Dckd76GECbIyLore3seafDmapAe6%2BCUlSTtpYJFGhxpU7vbQSFBvw2JbsHPTS42oOawfGz06mbj%2BQrlGJcVfIWyA3sS8JB5FWRQbzDRemoyVcflklSPym2ucDfI3C9k044NAjwWzxO4KaqMM%2BViMoGOqUB53UHgxJFybnb5GMk0qqaks1m%2B7Hcn0P7nZQ06A4gEbsEB6hi7327jiAQH9FbJgx9HPGiskVS1Duu2cfb6Rp4e%2FmGhsLVDtqAxLZQdHYab9JOizuPYP1n%2BY6yAL8nuPY2D0H2UZ3XjUi64nqM2%2B62DaZp0nJXrMnEiJckLeJR3f8IMW5Z9VG2RDMwzOZZh%2F%2FKMNGX5Mrpt%2BYiWoQs0XC0CGyuejZx&X-Amz-Signature=a7bcadb86a50b9f3bf869eda0bb4f90f8bed74e5a88de4179886c3fb47db6c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

