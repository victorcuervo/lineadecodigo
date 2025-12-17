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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZH24GA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDoXKl30%2FACf2rh5YaglvDC9USg%2F22Ghou8V1AnB43fAiBP7v4vGI0%2BDelKCPR%2Fr0YBi4u3IfNOVtKxA%2BwC9MpdFyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMb9UHa5n4a8x2WvPxKtwDQxf8pqx1Y3GwMeWkHJG%2BHHOe3Z81%2BKpN8PScIGnUcmE5qZN1AmIZhfitJIw8ZTGkuCXoAwSitbktstvz9T7uM2zUskFVdcnjVFk3oyMiy8syaETxVVVWiupqiL1%2BrE%2BscpJ6NnXg1SLjJ371C5PE6ilWuv7dOodWUb%2BSiqjQJpaldtLo0sn22ZknFxLsCXEapwrCYpYl%2Fdd3gVASk64%2B1HKWiwGGOeNA58lVE%2FhKYh8eLbDO2y9BdgAXXqS5QKD1HfiRGwPBYen1JsA3KmQZuKfabMcnJgIgzffz5soczvHR%2FiTjSLPk2Af1MS0UuPX38Ny%2FPBX1xLLEBlw1oKs7wqmfHKCyXBfNCeCEZh7vAhpnLrI5o8onNVjSJO6A%2FG603QnWx%2B%2FDZlv%2B34oHBgduSsgAxzSuupA18VvCahDJu89xkBFzop5VoLYEbjyJPyrFVYDLUhd1lpO2s1QyGiipVSuwcsVNHKpYpORzNH32PrObGMX%2BedbtBlMhxrYtgJm2HrSJ3zaC2dENti9Y3cHU1rmQ49SVgFJl2nrsKHX61WrQYQj87qyVPxKXVoDGjrHqePmr9q23NDZp9SHr7MNmOaSuqE4qE4eF6NY7ANc62d1qx1VYaEz%2FB0PvKbYw69KJygY6pgF0xXSfE6g8x5hlimNVfWAQHr4RN3utcENTf581l2QsP8QVmX000MbyC6CrSs4zdowrIxPAZ%2F312dGKapUGS8ToouJqCeDdUM6nXjFW4Wo0khX2vV6bOXQtO%2FhNfC9HJsQGcAOaQF4GMufWXJNyLkDsLfE5lGg%2FQy0wqaOcqOK0I1Girx87gZk0%2BHJu7%2BV388U%2FcF%2FfWFRKctmSmaiE5IvS8ZEQRa82&X-Amz-Signature=1812ef321315bdd9b9fd749a51999ea0cab65454ff1ebf16d24f7884331a628a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZH24GA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDoXKl30%2FACf2rh5YaglvDC9USg%2F22Ghou8V1AnB43fAiBP7v4vGI0%2BDelKCPR%2Fr0YBi4u3IfNOVtKxA%2BwC9MpdFyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMb9UHa5n4a8x2WvPxKtwDQxf8pqx1Y3GwMeWkHJG%2BHHOe3Z81%2BKpN8PScIGnUcmE5qZN1AmIZhfitJIw8ZTGkuCXoAwSitbktstvz9T7uM2zUskFVdcnjVFk3oyMiy8syaETxVVVWiupqiL1%2BrE%2BscpJ6NnXg1SLjJ371C5PE6ilWuv7dOodWUb%2BSiqjQJpaldtLo0sn22ZknFxLsCXEapwrCYpYl%2Fdd3gVASk64%2B1HKWiwGGOeNA58lVE%2FhKYh8eLbDO2y9BdgAXXqS5QKD1HfiRGwPBYen1JsA3KmQZuKfabMcnJgIgzffz5soczvHR%2FiTjSLPk2Af1MS0UuPX38Ny%2FPBX1xLLEBlw1oKs7wqmfHKCyXBfNCeCEZh7vAhpnLrI5o8onNVjSJO6A%2FG603QnWx%2B%2FDZlv%2B34oHBgduSsgAxzSuupA18VvCahDJu89xkBFzop5VoLYEbjyJPyrFVYDLUhd1lpO2s1QyGiipVSuwcsVNHKpYpORzNH32PrObGMX%2BedbtBlMhxrYtgJm2HrSJ3zaC2dENti9Y3cHU1rmQ49SVgFJl2nrsKHX61WrQYQj87qyVPxKXVoDGjrHqePmr9q23NDZp9SHr7MNmOaSuqE4qE4eF6NY7ANc62d1qx1VYaEz%2FB0PvKbYw69KJygY6pgF0xXSfE6g8x5hlimNVfWAQHr4RN3utcENTf581l2QsP8QVmX000MbyC6CrSs4zdowrIxPAZ%2F312dGKapUGS8ToouJqCeDdUM6nXjFW4Wo0khX2vV6bOXQtO%2FhNfC9HJsQGcAOaQF4GMufWXJNyLkDsLfE5lGg%2FQy0wqaOcqOK0I1Girx87gZk0%2BHJu7%2BV388U%2FcF%2FfWFRKctmSmaiE5IvS8ZEQRa82&X-Amz-Signature=18adecf0d455e43de62ce9df02afd8e9b42dc1f12dfd2536aca66d6a7d7e45e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

